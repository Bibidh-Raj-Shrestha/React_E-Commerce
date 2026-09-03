export interface Banner {
    id: number;
    title: string;
    subtitle: string;
    image: string;
    buttonText: string;
    link: string;
}
export const banners: Banner[] = [
    {
        id: 1,
        title: "New Arrivals",
        subtitle: "Discover the latest products at great prices.",
        image: "banners/new-arrivals.jpg",
        buttonText: "Shop Now",
        link: "/products"
    },
    {
        id: 2,
        title: "Big Summer Sale",
        subtitle: "Save up to 50% on selected products.",
        image: "/banners/summer-sale.jpg",
        buttonText: "Shop Sale",
        link: "/products"
    },
    {
        id: 3,
        title: "Upgrade Your Tech",
        subtitle: "Explore the latest electronics and accessories.",
        image: "/banners/electronics.jpg",
        buttonText: "Explore Electronics",
        link: "/categories"
    },
    {
        id: 4,
        title: "Fashion Collection",
        subtitle: "Fresh styles for every occasion.",
        image: "/banners/fashion.jpg",
        buttonText: "Shop Fashion",
        link: "/categories"
    }
];