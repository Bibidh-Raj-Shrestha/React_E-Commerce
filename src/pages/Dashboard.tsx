import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Dashboard(){
    return(<>  
    <div className="flex flex-col items-center">
        <Navbar/>
        <main className="flex flex-col items-center justify-center w-[90%] lg:w-[70%] mt-15">
            <Outlet/>    
        </main>
        <footer className=" flex justify-center w-full mt-10 pb-5 pt-2 bg-gray-200">
            <Footer/>
        </footer>
    </div>
        
    </>)
}