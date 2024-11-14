import { NavLink } from "react-router-dom";

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
