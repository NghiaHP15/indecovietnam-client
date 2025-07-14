export const enum ProductStatus {
    HOT = 1,
    NEW = 2,
    SALE = 3,
    DEFAULT = 4,
}

export const enum OrderStatus {
    PENDING = 'pending',
    PAID = 'paid',
    SHIPPED = 'shipped',
    COMPLETED = 'completed',
    CANCELLED = 'cancelled',
}

export const enum PaymentMethod {
    MOMO = 'momo',
    ZALOPAY = 'zalopay',
    CREDIT_CARD = 'credit_card',
}