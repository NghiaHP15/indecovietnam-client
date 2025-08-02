/* eslint-disable @typescript-eslint/no-unused-vars */
import { PaymentStatus } from "@/constants/enum";
import React from "react";

const BadgePaymentStatus = ({ status }: { status: string }) => {
    let className = "";
    let text = "";

    switch(status){
        case PaymentStatus.PENDING:
            className = "bg-blue-400"
            text = "Chưa thanh toán"
            break;
        case PaymentStatus.PAID:
            className = "bg-green-400"
            text = "Đã thanh toán"
            break;
        case PaymentStatus.CANCELLED:
            className = "bg-red-400"
            text = "Hủy thanh toán"
            break;
        default:
            break;
    }
    
    return (
        <div className={`w-max px-3 py-1 text-sm text-white rounded-[5px] ${className}`}>{text}</div>
    );
};

export default BadgePaymentStatus;
