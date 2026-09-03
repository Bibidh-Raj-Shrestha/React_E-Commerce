import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Dashboard(){
    return(<>  
    <div className="flex flex-col items-center">
        <Navbar/>
        <Outlet/>
    </div>
        
    </>)
}