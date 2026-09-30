export interface Product{
    id: number
    name: string
    price: number
    category: string
    description: string
    image: string
}

export const products: Product[] = [
    {
        id: 1,
        name: "Classic T-shirt",
        price: 25,
        category: "Clothing",
        description: "A comfortable everyday cotton t-shirt.",
        image: "https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b",
    },
    {
        id: 2,
        name: "Running Shoes",
        price: 25,
        category: "Shoes",
        description: "A comfortable everyday cotton t-shirt.",
        image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
    },
    {
        id: 3,
        name: "Leather Backpack",
        price: 25,
        category: "Bags",
        description: "A comfortable everyday cotton t-shirt.",
        image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3",
    }
]