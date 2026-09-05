import Search from "../components/Search";
import ProductGrid from "../components/ProductGrid";

export default function Products(){
    return(<>
    <div className="hidden lg:block w-full">
        <Search/>
    </div>
        
        <ProductGrid/>
    </>);
}