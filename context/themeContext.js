"use client";
import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme] = useState("light"); // Keeping theme as light

    return (
        <ThemeContext.Provider value={{ theme }}>
            <div className={theme === "dark" ? "dark" : ""}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;