import { NavLink } from "react-router-dom";
import { RiShoppingCart2Fill, RiShoppingCart2Line } from "@remixicon/react";

export default function Navbar(){
    return(<>
        <header className="flex justify-between border-b p-3 w-full ">
            <div className="">
                <h1 className="">logo</h1>
            </div>
            <nav className="w-100 flex justify-around">
                <NavLink to="/" end className="hover:bg-gray-400 p-2 rounded-2xl">Home</NavLink>
                <NavLink to="/products" className="hover:bg-gray-400 p-2 rounded-2xl">Products</NavLink>
                <NavLink to="/categories" className="hover:bg-gray-400 p-2 rounded-2xl">Categories</NavLink>    
            </nav>
            <div className="flex gap-5 pr-4">
                <div className="group mouse cursor-pointer ">
                    <RiShoppingCart2Line className="block group-hover:hidden"/>
                    <RiShoppingCart2Fill className="hidden group-hover:block"/>
                </div>
                <span>PFP</span>
            </div>
        </header>
        
    </>)
}