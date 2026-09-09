import { Navigate } from "react-router-dom";
import {useAuth} from "./AuthContext";
export default function ProtectedRoute({children}:{children:React.ReactNode}){
    const {isLoggedIn} = useAuth();

    if(!isLoggedIn){
        
        return <Navigate to="/products" />
    }
    
    return children;
    
}