import APIClient from "@/lib/APIClient";

export enum OrderApi {
  getOrderTxnRef = "/order/txnref",
}

const getOrderTxnRef = async ( params: string) => await APIClient.get({ url: `${OrderApi.getOrderTxnRef}/${params}` });

export { 
    getOrderTxnRef,
}