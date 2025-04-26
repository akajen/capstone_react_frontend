export  default interface IMenuItem{
    id: number;
    name: string;
    description: string;
    category: string;
    price: number;
    imageurl: string;
    available: boolean;
    quantity?: number
}