import { useState } from "react";
import Search from "../components/Search";
import ProductGrid from "../components/ProductGrid";

export default function Products() {
    const [sort, setSort] = useState("default");

    return (
        <>
            <div className="hidden lg:block w-full">
                <Search />
            </div>

            <div className="w-full flex justify-end px-3 sm:px-5 lg:px-8 mt-6 sm:mt-5">
                <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="w-full sm:w-auto border border-gray-300 rounded-xl px-3 sm:px-4 py-2.5 
                    bg-white  text-gray-700 text-sm sm:text-base font-medium shadow-sm cursor-pointer 
                    outline-none  hover:border-gray-400 hover:shadow-md  focus:border-gray-500 focus:ring-2 
                    focus:ring-gray-200 transition-all duration-200 ">
                    <option value="default">
                        Sort By
                    </option>

                    <option value="low-high">
                        Price: Low → High
                    </option>

                    <option value="high-low">
                        Price: High → Low
                    </option>
                </select>
            </div>

            <ProductGrid />
        </>
    );
}