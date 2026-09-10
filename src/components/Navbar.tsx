import { NavLink, useNavigate } from "react-router-dom";
import { RiShoppingCart2Fill, RiShoppingCart2Line, RiShoppingBag2Line, RiUser2Line, RiHome2Line } from "@remixicon/react";
import Search from "./Search";
import LoginRequired from "./LoginRequired";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
    const navigate = useNavigate();
    const { isLoggedIn } = useAuth();

    const [checkLog, setCheckLog] = useState(false);

    function handleCartClick() {
        if (isLoggedIn) {
            navigate("/cart");
        } else {
            setCheckLog(true);
        }
    }
    return (<>
        <header className="fixed top-0 left-0 w-full z-50 flex justify-between border-b p-3 bg-white">
            <div className="hidden lg:block">
                <h1 className="">logo</h1>
            </div>
            <nav className="lg:hidden w-[80%]">
                <Search />
            </nav>
            <nav className="hidden w-100 lg:flex justify-around ml-10">
                <NavLink to="/" end className="hover:bg-gray-400 p-2 rounded-2xl">Home</NavLink>
                <NavLink to="/products" className="hover:bg-gray-400 p-2 rounded-2xl">Products</NavLink>
                <NavLink to="/categories" className="hover:bg-gray-400 p-2 rounded-2xl">Categories</NavLink>
            </nav>
            <div className="flex gap-5 pr-2 lg:pr-4 items-center">
                <button
                    onClick={handleCartClick}
                    className="group cursor-pointer flex justify-center items-center"
                >
                    <RiShoppingCart2Line className="block group-hover:hidden" />
                    <RiShoppingCart2Fill className="hidden group-hover:block" />
                </button>
                <span className="hidden lg:block">
                    <RiUser2Line />
                </span>
            </div>
        </header>

        <footer className="z-50 lg:hidden flex fixed bottom-0 bg-white w-full border-t p-2 justify-around">
            <NavLink to="/" end>
                <RiHome2Line />
            </NavLink>
            <NavLink to="/products">
                <RiShoppingBag2Line />
            </NavLink>
            <div className="flex gap-5 pr-2 lg:pr-4 items-center">

                <button
                    onClick={handleCartClick}
                    className="group cursor-pointer"
                >
                    <RiShoppingCart2Line className="block group-hover:hidden" />
                    <RiShoppingCart2Fill className="hidden group-hover:block" />
                </button>

                <span className="hidden lg:block">
                    <RiUser2Line />
                </span>

            </div>
            <NavLink to="">
                <RiUser2Line />
            </NavLink>
        </footer>
        <LoginRequired
            open={checkLog}
            onClose={() => setCheckLog(false)}
            onLogin={() => {
                setCheckLog(false);
                navigate("/login")}}
            onRegister={() => navigate("/register")}
        />
    </>)
}