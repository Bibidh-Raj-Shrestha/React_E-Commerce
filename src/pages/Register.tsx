import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    return (
        <div className="w-full mt-10 max-w-md p-8 border rounded-2xl shadow-lg bg-white">
            <h1 className="text-3xl font-bold text-center">
                Register
            </h1>

            <p className="text-gray-500 text-center mt-2">
                Register to start shoppping
            </p>

            <form className="flex flex-col gap-4 mt-8">
                <input
                    type="text"
                    placeholder="Name"
                    className="border rounded-xl px-4 py-3 outline-none
                                focus:ring-2 focus:ring-black"
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="border rounded-xl px-4 py-3 outline-none
                                focus:ring-2 focus:ring-black"
                />

                <input
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
                    Register
                </button>
            </form>
            <div className="mt-2">
                <span>
                    Already have an account?
                </span>
                <button
                    className="font-semibold underline ml-2 cursor-pointer"
                    onClick={() => navigate("/login")}>
                    Login
                </button>
            </div>

        </div>
    );
}