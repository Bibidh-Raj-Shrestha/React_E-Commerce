
import Banner from "../components/Banner";
import Search from "../components/Search";
import ProductGrid from "../components/ProductGrid";

export default function Home() { 

    return (
        <>
                <Banner/>
                <div className="hidden lg:block lg:w-full">
                    <Search/>
                </div>
                
                <ProductGrid/>
        </>
    );
}