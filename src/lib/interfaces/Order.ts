export default interface IOrder {
    id: number;
    userid?: number;
    ordertime?: Date;
    pickuptime?: Date;
    area?: string;
    location?: string;
    tax: number;
    tip: number;
    pan?: string;
    expiryMonth?: number;
    expiryYear?: number;
    status?: string;
}