import { Result } from "@/constants/common";
import axios, { AxiosError, AxiosRequestConfig } from "axios";

let isRefreshing = false;
let failedQueue: {
    resolve: (token: string) => void;
    reject: (error: AxiosError) => void;
}[] = [];

const processQueue = (error: AxiosError | null, token: string | null = null) => {
    failedQueue.forEach(prom => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        token ? prom.resolve(token) : prom.reject(error!);
    });
    failedQueue = [];
}

const axiosClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api",
    timeout: 50000,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true,
})

axiosClient.interceptors.request.use(
    (config) => {
        const token = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;
        const requiresAuth = (config as AxiosRequestConfig & { requiresAuth?: boolean }).requiresAuth;
        if (token && requiresAuth) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
)

axiosClient.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as AxiosRequestConfig & { _retry: boolean }; ;
    if(error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        if(isRefreshing) {
            return new Promise((resolve, reject) => {
                failedQueue.push({ resolve, reject });
            }).then((token) => {
                if(originalRequest.headers) {
                    originalRequest.headers.Authorization = `Bearer ${token}`;
                }
                return axiosClient.request(originalRequest);
            })
        }
        isRefreshing = true;
        try {
            const response = await axiosClient.post<Result<{ accessToken: string }>>(
                `${process.env.NEXT_PUBLIC_API_URL}/customer/refresh-token`,
                {},
                { withCredentials: true }
            )
            const newToken = response.data.data?.accessToken;
            if(newToken) {
                localStorage.setItem('accessToken', newToken);
                axiosClient.defaults.headers.Authorization = `Bearer ${newToken}`;
                processQueue(null, newToken);
            }
            if(originalRequest.headers) {
                originalRequest.headers.Authorization = `Bearer ${newToken}`;
            }
            return axiosClient(originalRequest);
        } catch (error) {
            processQueue(error as AxiosError, null);
        } finally {
            isRefreshing = false;
        }
    }
    return Promise.reject(error);
  }
);


export default axiosClient;
