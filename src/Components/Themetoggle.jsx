// React Imports
import { useContext } from "react";

// ThemeContext
import { ThemeContext } from "../Layout/Layout";

// Heroicon Imports
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

// Sass
import "../Sass/themetoggle.scss"

const ThemeToggle = () => {
    // theme
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    };

    return ( 
        <button className="toggle-button" onClick={() => {
            toggleTheme();
        }}>
            {theme === "dark" ? <MoonIcon width={25} height={25}/> : <SunIcon width={25} height={25}/>}
        </button>
    );

}
 
export default ThemeToggle;