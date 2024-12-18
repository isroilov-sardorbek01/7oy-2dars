import React, { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Masala1 from "./pages/Masala1";
export const ThemeContext = createContext(null);
import Header from "./components/Header";
import Masala2 from "./pages/Masala2";
import Masala3 from "./pages/Masala3";

function App() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const body = document.body;
        if (theme === "light") {
            body.classList.remove("dark");
            body.classList.add("light");
        } else {
            body.classList.remove("light");
            body.classList.add("dark");
        }
    }, [theme]);
    return (
        <div className="head dark:bg-black dark:text-white">
            <ThemeContext.Provider value={{ theme, setTheme }}>
                <Header></Header>
                <Routes>
                    <Route index element={<Masala1></Masala1>}></Route>
                    <Route
                        path="/masala2"
                        element={<Masala2></Masala2>}
                    ></Route>
                    <Route path='/masala3' element={<Masala3></Masala3>}></Route>
                </Routes>
            </ThemeContext.Provider>
        </div>
    );
}

export default App;
