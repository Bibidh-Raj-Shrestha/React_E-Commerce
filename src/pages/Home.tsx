
import Banner from "../components/Banner";
import Search from "../components/Search";
import ProductGrid from "../components/ProductGrid";

export default function Home() { 

    return (
        <>
            <main className="w-[70%] mt-1">
                <Banner/>
                <Search/>
                <ProductGrid/>
            </main>
        </>
    );
}