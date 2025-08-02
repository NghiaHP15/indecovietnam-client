/* eslint-disable @typescript-eslint/no-explicit-any */
import APIClient from "@/lib/APIClient";

export enum PaymentApi {
  payment = "/payment/create",
}

const createdPayment = async ( data: any = {} ) => await APIClient.post({ url: PaymentApi.payment, data });

export { 
    createdPayment,
}