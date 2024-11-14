import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function () {
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        login();
        navigate("/");
    };
    return (
        <div className="flex justify-center items-center h-screen">
            <form
                onSubmit={handleLogin}
                className="w-full max-w-xs bg-white p-6 rounded-lg shadow-lg"
            >
                <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                    Login
                </h1>
                <div className="flex flex-col gap-4 text-gray-700">
                    <input
                        type="text"
                        placeholder="Username"
                        className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#cfef00] transition-all duration-200"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#cfef00] transition-all duration-200"
                    />
                    <button
                        type="submit"
                        className="cursor-pointer font-bold transition-all duration-200 py-2 px-6 rounded-full bg-[#cfef00] border border-transparent text-center shadow-lg hover:bg-[#c4e201] hover:border-[#b5d900] active:scale-95"
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
}
