import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Dashboard() {
    return (
        <div className="min-h-screen flex flex-col items-center">

            <Navbar />

            <main className="flex-1 flex flex-col items-center w-[90%] lg:w-[70%] mt-15">
                <Outlet />
            </main>

            <footer className="flex justify-center w-full mt-10 pb-5 pt-2 lg:bg-gray-200">
                <Footer />
            </footer>

        </div>
    );
}