import { useEffect } from "react"
import { useState } from "react"

export const DarkMode = () => {

    const [theme, setTheme] = useState('dark')

    const handleThemeDark = () => {
        setTheme(prevTheme => prevTheme === 'light' ? "dark" : 'light')
    }

    useEffect(() => {
        if (theme === "dark") {
            document.querySelector('html').classList.add('dark')
        } else {
            document.querySelector('html').classList.remove('dark')
        }
    }, [theme])

    return (
        <div>
            <button onClick={handleThemeDark} className="rounded-lg bg-slate-800 text-slate-200 dark:text-slate-800 dark:bg-slate-200  w-[70px] h-[70px] duration-500">
                { theme === 'dark' ? <i className="fa-solid fa-sun text-3xl "></i> : <i className="fa-solid fa-moon text-3xl "></i> }
            </button>
        </div>
    )
}
