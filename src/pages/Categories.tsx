import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Categories() {
    const navigate = useNavigate();
    const [categories, setCategories] = useState<string[]>([]);

    useEffect(() => {
        async function getCategories() {
            const request = await fetch("http://localhost:3000/products");
            if (!request.ok) {
                throw new Error("Failed to fetch categories");
            }
            const data: { category: string }[] = await request.json();
            const categoryList = data.map((product) => {
                return product.category;
            });
            const uniqueCategories = [...new Set(categoryList)];
            setCategories(uniqueCategories);
        }
        getCategories();
    }, []);

    return (
        <>
            <div className="mt-10">

                <h1 className="text-3xl font-semibold mb-5">
                    Categories
                </h1>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

                    {categories.map((category, index) => (

                        <div key={index}
                            className="border rounded-xl p-5 text-center cursor-pointer hover:shadow-lg 
                                    hover:bg-gray-100"
                            onClick={()=>navigate(`/products?category=${category}`)}>
                            <p className="text-xl font-semibold">
                                {category}
                            </p>
                        </div>

                    ))}

                </div>

            </div>
        </>
    );
}