import { NavLink, useNavigate } from "react-router-dom";
import {
    RiShoppingCart2Fill,
    RiShoppingCart2Line,
    RiShoppingBag2Line,
    RiUser2Line,
    RiHome2Line
} from "@remixicon/react";
import Search from "./Search";
import LoginRequired from "./LoginRequired";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
    const navigate = useNavigate();
    const { isLoggedIn, logout } = useAuth();

    const [checkLog, setCheckLog] = useState(false);
    const [showProfile, setShowProfile] = useState(false);

    function handleCartClick() {
        if (isLoggedIn) {
            navigate("/cart");
        } else {
            setCheckLog(true);
        }
    }

    return (
        <>
            {/* Desktop / Mobile Top Navbar */}
            <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between border-b p-3 bg-white">

                {/* Logo */}
                <div className="hidden lg:block shrink-0">
                    <img
                        src="/logo.png"
                        alt="Logo"
                        className="h-10 w-auto object-contain"
                    />
                </div>

                {/* Mobile Search */}
                <nav className="lg:hidden w-[75%] sm:w-[80%]">
                    <Search />
                </nav>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex w-100 justify-around ml-10">
                    <NavLink
                        to="/"
                        end
                        className="hover:bg-gray-400 p-2 rounded-2xl"
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/products"
                        className="hover:bg-gray-400 p-2 rounded-2xl"
                    >
                        Products
                    </NavLink>

                    <NavLink
                        to="/categories"
                        className="hover:bg-gray-400 p-2 rounded-2xl"
                    >
                        Categories
                    </NavLink>
                </nav>

                {/* Desktop Actions */}
                <div className="flex gap-5 pr-2 lg:pr-4 items-center">

                    {/* Cart */}
                    <button
                        onClick={handleCartClick}
                        className="group cursor-pointer flex justify-center items-center"
                    >
                        <RiShoppingCart2Line className="block group-hover:hidden" />
                        <RiShoppingCart2Fill className="hidden group-hover:block" />
                    </button>

                    {/* Desktop Profile */}
                    <div className="relative hidden lg:block">
                        <button
                            onClick={() => setShowProfile(prev => !prev)}
                            className="cursor-pointer"
                        >
                            <RiUser2Line />
                        </button>

                        {showProfile && (
                            <div className="absolute right-0 top-10 w-28 bg-white border rounded-xl shadow-lg p-2">
                                {isLoggedIn ? (
                                    <button
                                        onClick={() => {
                                            logout();
                                            setShowProfile(false);
                                        }}
                                        className="w-full p-2 rounded-lg bg-black hover:bg-gray-700 text-center text-white"
                                    >
                                        Logout
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => {
                                            navigate("/login");
                                            setShowProfile(false);
                                        }}
                                        className="w-full p-2 rounded-lg bg-black hover:bg-gray-700 text-center text-white"
                                    >
                                        Login
                                    </button>
                                )}
                            </div>
                        )}
                    </div>

                </div>
            </header>


            {/* Mobile Bottom Navigation */}
            <footer className="lg:hidden fixed bottom-0 left-0 z-50 flex w-full justify-around items-center border-t bg-white p-2">

                {/* Home */}
                <NavLink
                    to="/"
                    end
                    className="p-2"
                >
                    <RiHome2Line />
                </NavLink>

                {/* Products */}
                <NavLink
                    to="/products"
                    className="p-2"
                >
                    <RiShoppingBag2Line />
                </NavLink>

                {/* Cart */}
                <button
                    onClick={handleCartClick}
                    className="group cursor-pointer p-2"
                >
                    <RiShoppingCart2Line className="block group-hover:hidden" />
                    <RiShoppingCart2Fill className="hidden group-hover:block" />
                </button>

                {/* Mobile Profile */}
                <div className="relative">
                    <button
                        onClick={() => setShowProfile(prev => !prev)}
                        className="cursor-pointer p-2"
                    >
                        <RiUser2Line />
                    </button>

                    {showProfile && (
                        <div className="absolute right-0 bottom-12 w-28 bg-white border rounded-xl shadow-lg p-2">
                            {isLoggedIn ? (
                                <button
                                    onClick={() => {
                                        logout();
                                        setShowProfile(false);
                                    }}
                                    className="w-full p-2 rounded-lg bg-black hover:bg-gray-700 text-center text-white"
                                >
                                    Logout
                                </button>
                            ) : (
                                <button
                                    onClick={() => {
                                        navigate("/login");
                                        setShowProfile(false);
                                    }}
                                    className="w-full p-2 rounded-lg bg-black hover:bg-gray-700 text-center text-white"
                                >
                                    Login
                                </button>
                            )}
                        </div>
                    )}
                </div>

            </footer>


            {/* Login Required */}
            <LoginRequired
                open={checkLog}
                onClose={() => setCheckLog(false)}
                onLogin={() => {
                    setCheckLog(false);
                    navigate("/login");
                }}
                onRegister={() => navigate("/register")}
            />
        </>
    );
}