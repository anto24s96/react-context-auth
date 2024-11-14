import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const urlPages = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Posts",
        href: "/posts",
    },
];

export default function () {
    const { isLoggedIn, logout } = useAuth();
    const navigate = useNavigate();

    return (
        <nav>
            <menu className="flex gap-6 items-center">
                {urlPages.map(({ label, href }, i) => (
                    <li key={`urlPages${i}`} className="group font-bold">
                        <NavLink
                            to={href}
                            className={({ isActive }) =>
                                isActive ? "opacity-50 pointer-events-none" : ""
                            }
                        >
                            {label}
                        </NavLink>
                    </li>
                ))}
                {/* Se l'utente è loggato, mostra il pulsante per il logout con redirect a Home */}
                {isLoggedIn && (
                    <button
                        onClick={() => {
                            logout();
                            navigate("/");
                        }}
                        className="text-red-600 bg-white p-2 rounded-full"
                    >
                        Logout
                    </button>
                )}
            </menu>
        </nav>
    );
}
