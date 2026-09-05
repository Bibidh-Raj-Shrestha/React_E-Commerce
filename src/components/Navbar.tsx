import { NavLink } from "react-router-dom";
import { RiShoppingCart2Fill, RiShoppingCart2Line,RiShoppingBag2Line,RiUser2Line, RiHome2Line} from "@remixicon/react";
import Search from "./Search";

export default function Navbar() {
    return (<>
        <header className="fixed top-0 left-0 w-full z-50 flex justify-between border-b p-3 bg-white">
            <div className="hidden lg:block">
                <h1 className="">logo</h1>
            </div>
            <nav className="lg:hidden w-[80%]">
                <Search />
            </nav>
            <nav className="hidden w-100 lg:flex justify-around">
                <NavLink to="/" end className="hover:bg-gray-400 p-2 rounded-2xl">Home</NavLink>
                <NavLink to="/products" className="hover:bg-gray-400 p-2 rounded-2xl">Products</NavLink>
                <NavLink to="/categories" className="hover:bg-gray-400 p-2 rounded-2xl">Categories</NavLink>
            </nav>
            <div className="flex gap-5 pr-2 lg:pr-4">
                <div className="group cursor-pointer flex justify-center items-center">
                    <RiShoppingCart2Line className="block group-hover:hidden" />
                    <RiShoppingCart2Fill className="hidden group-hover:block" />
                </div>
                <span className="hidden lg:block">PFP</span>
            </div>
        </header>

        <footer className="z-50 lg:hidden flex fixed bottom-0 bg-white w-full border-t p-2 justify-around">
            <NavLink to="/" end>
                <RiHome2Line/>
            </NavLink>
            <NavLink to="/products">
                <RiShoppingBag2Line/>
            </NavLink>
            <NavLink to="/">
                <RiShoppingCart2Line/>
            </NavLink>
            <NavLink to="">
                <RiUser2Line/>
            </NavLink>
        </footer>
    </>)
}