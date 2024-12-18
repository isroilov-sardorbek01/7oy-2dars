import React, { useContext } from "react";
import { ThemeContext } from "../App";
import { NavLink, Link } from "react-router-dom";

function Header() {
    const { theme, setTheme } = useContext(ThemeContext);

    function handleChange(e) {
        e.preventDefault();
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }
    return (
        <div>
            <div className="p-5 mb-20 shadow-xl dark:shadow-none dark:text-white header bg-slate-300 dark:bg-black ">
                <div className="container flex items-center justify-between">
                    <Link to="/" className="text-[40px]">
                        7oy 2dars
                    </Link>
                    <ul className="flex linkA">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "active" : "nonactive"
                            }
                        >
                            1-Masala
                        </NavLink>
                        <NavLink
                            to="/masala2"
                            className={({ isActive }) =>
                                isActive ? "active" : "nonactive"
                            }
                        >
                            2-Masala
                        </NavLink>
                        <NavLink
                            to="/masala3"
                            className={({ isActive }) =>
                                isActive ? "active" : "nonactive"
                            }
                        >
                            3-Masala
                        </NavLink>
                        <NavLink
                            to="/masala4"
                            className={({ isActive }) =>
                                isActive ? "active" : "nonactive"
                            }
                        >
                            4-Masala
                        </NavLink>
                    </ul>
                    <button
                        onClick={handleChange}
                        className="dark:bg-black dark:text-white "
                    >
                        {theme === "light" ? "Light Mode" : "Dark Mode"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;
