import { Brand } from "./Brand";

export interface Component {
    id: number;
    name: string;
    brand: Brand;
    price: number;
    description?: string;
}