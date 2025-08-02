/* eslint-disable @typescript-eslint/no-explicit-any */
import APIClient from "@/lib/APIClient";

export enum AuthApi {
  login = "/customer/login",
  loginSocail = "/customer/login-social",
  logout = "/customer/logout",
  register = "/customer/register"
}

const login = async (data: any = {}) => await APIClient.post({ url: AuthApi.login, data })
const loginSocail = async (data: any = {}) => await APIClient.post({ url: AuthApi.loginSocail, data })
const logout = async () => await APIClient.post({ url: AuthApi.logout})
const register = async (data: any = "") => await APIClient.post({ url: AuthApi.register, data })

export { 
    login, 
    loginSocail,
    logout, 
    register 
}