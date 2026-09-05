export interface Review {
    rating: number;
    comment: string;
    reviewerName: string;
}
export interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    images: string[];
    rating: number;
    discountPercentage: number;
    reviews: Review[];
    returnPolicy: string;
    warrantyInformation: string;
}
export interface ProductResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}
