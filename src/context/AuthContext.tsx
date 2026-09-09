import { createContext,useContext,useState } from "react";

interface AuthContextType{
    isLoggedIn : boolean;
    login : ()=>void;
    logout : ()=>void;
}

const AuthContext = createContext<AuthContextType|null>(null);

export function AuthProvider({children}:{children:React.ReactNode}){

    const [isLoggedIn,setIsLoggedIn] = useState<boolean>(false);
    function login(){
        setIsLoggedIn(true);
    }
    function logout(){
        setIsLoggedIn(false);
    }

    return(
        <AuthContext.Provider
                value={{
                    isLoggedIn,
                    login,
                    logout
                }}>
            {children}
        </AuthContext.Provider>
    )
}
export function useAuth(){
    const context = useContext(AuthContext);

    if(!context){
        throw new Error("No auth data");
    }
    return context;
}

export default AuthContext;