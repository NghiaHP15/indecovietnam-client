/* eslint-disable @typescript-eslint/no-unused-vars */
import { OrderStatus } from "@/constants/enum";
import React from "react";

const BadgeOrderStatus = ({ status }: { status: string }) => {
    let className = "";
    let text = "";

    switch(status){
        case OrderStatus.PENDING:
            className = "bg-blue-500"
            text = "Đang xử lý"
            break;
        case OrderStatus.SHIPPED:
            className = "bg-orange-500"
            text = "Đang vận chuyển"
            break;
        case OrderStatus.CANCELLED:
            className = "bg-red-500"
            text = "Đang vận chuyển"
            break;
        case OrderStatus.COMPLETED:
            className = "bg-green-500"
            text = "Đang vận chuyển"
            break;
        default:
            break;
    }
    
    return (
        <div className={`w-max px-3 py-1 text-sm text-white rounded-[5px] ${className}`}>{text}</div>
    );
};

export default BadgeOrderStatus;
