import Search from "../components/Search";
import ProductGrid from "../components/ProductGrid";

export default function Products(){
    return(<>
    <div className="hidden lg:block">
        <Search/>
    </div>
        
        <ProductGrid/>
    </>);
}