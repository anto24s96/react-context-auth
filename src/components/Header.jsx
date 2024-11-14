import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function () {
    return (
        <header className="h-20 bg-[#b52c0a] flex items-center justify-between sticky top-0 z-50 px-6">
            <h1 className="text-white text-3xl font-semibold tracking-wide">
                Cooking Blog
            </h1>
            <div className="flex-grow flex justify-center">
                <Navbar />
            </div>
            <button className="my-button text-[#b52c0a] me-10">
                <Link to="/create">Create Post</Link>
            </button>
        </header>
    );
}
