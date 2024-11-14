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
            <menu className="flex gap-6">
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
            </menu>
        </nav>
    );
}
