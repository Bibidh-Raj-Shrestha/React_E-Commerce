import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {users} from "../datas/users";
import { useAuth } from "../context/AuthContext";


export default function Login() {
    const navigate = useNavigate();
    const [email,setEmail] = useState<string>("");
    const [password,setPassword] = useState<string>("");

    const {login} = useAuth();

    function submitHandler(e:React.SubmitEvent<HTMLFormElement>){
        e.preventDefault();
        const user = users.find(user=> user.email===email && user.password===password);
        if(user){
            login();
            setEmail("");
            setPassword("");
        }
        else{
            console.log("invalid");
        }
    }
    
    return (
        <div className="w-full mt-10 max-w-md p-8 border rounded-2xl shadow-lg bg-white">
            <h1 className="text-3xl font-bold text-center">
                Login
            </h1>

            <p className="text-gray-500 text-center mt-2">
                Login to continue shopping
            </p>

            <form 
                onSubmit={submitHandler}
                className="flex flex-col gap-4 mt-8">
                <input
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                    className="border rounded-xl px-4 py-3 outline-none
                                focus:ring-2 focus:ring-black"
                />

                <input
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                    className="border rounded-xl px-4 py-3 outline-none
                                focus:ring-2 focus:ring-black"
                />

                <button
                    type="submit"
                    className="bg-black text-white py-3 rounded-xl
                                font-semibold hover:bg-gray-800 transition"
                >
                    Log in
                </button>
            </form>
            <div className="mt-2">
                <span>
                    Don't have an account?
                </span>
                <button
                    className="font-semibold underline ml-2 cursor-pointer"
                    onClick={() => navigate("/register")}>
                    Register
                </button>
            </div>
        </div>
    );
}