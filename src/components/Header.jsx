import { Link, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { useAuth } from "../contexts/AuthContext";

export default function () {
    const { isLoggedIn } = useAuth();
    const location = useLocation();

    return (
        <header className="h-20 bg-[#b52c0a] flex items-center justify-between sticky top-0 z-50 px-6">
            <h1 className="text-white text-3xl font-semibold tracking-wide">
                Cooking Blog
            </h1>
            <div className="flex-grow flex justify-center">
                <Navbar />
            </div>
            {/*Se l'utente non è loggato, mostra il pulsante per il login */}
            {!isLoggedIn && location.pathname !== "/login" && (
                <button className="my-button text-[#b52c0a] me-10">
                    <Link to="/login">Login</Link>
                </button>
            )}
            {/* Se l'utente è loggato, mostra il pulsante per creare un post */}
            {isLoggedIn && (
                <button className="my-button text-[#b52c0a] me-10">
                    <Link to="/create">Create Post</Link>
                </button>
            )}
        </header>
    );
}
