interface LoginRequiredProps {
    open: boolean;
    onClose: () => void;
    onLogin: () => void;
    onRegister: () => void;
}


export default function LoginRequired({
    open,
    onClose,
    onLogin,
    onRegister
}: LoginRequiredProps) {

    return (
        <div
            className={`
                fixed inset-0 z-50
                flex items-center justify-center
                bg-black/50
                transition-all duration-300
                ${open
                    ? "opacity-100 visible"
                    : "opacity-0 invisible pointer-events-none"
                }
            `}
        >

            <div
                className={`
                    w-[90%] max-w-md
                    bg-white
                    rounded-2xl
                    shadow-2xl
                    p-6
                    transition-all duration-300
                    ${open
                        ? "scale-100 translate-y-0"
                        : "scale-95 translate-y-3"
                    }
                `}
            >

                {/* Header */}
                <div className="flex items-start justify-between">

                    <div>
                        <h2 className="text-2xl font-bold">
                            Login Required
                        </h2>

                        <p className="text-gray-500 mt-1">
                            Please log in to continue.
                        </p>
                    </div>

                    <button
                        onClick={onClose}
                        className="
                            w-8 h-8
                            rounded-full
                            text-gray-500
                            text-xl
                            hover:bg-gray-100
                            hover:text-black
                            transition
                        "
                    >
                        ×
                    </button>

                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-3 mt-6">

                    <button
                        onClick={onLogin}
                        className="
                            w-full py-3
                            rounded-xl
                            bg-black text-white
                            font-semibold
                            hover:bg-gray-800
                            transition
                        "
                    >
                        Log in
                    </button>

                    <button
                        onClick={onRegister}
                        className="
                            w-full py-3
                            rounded-xl
                            border border-gray-300
                            font-semibold
                            hover:bg-gray-100
                            transition
                        "
                    >
                        Register
                    </button>

                </div>

            </div>
        </div>
    );
}