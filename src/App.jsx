import { DarkMode } from "./components/DarkMode/DarkMode"


function App() {

    return (
        <div className="h-screen dark:bg-slate-800">
            <div className="w-[1024px] m-auto">
                <div className="p-5">
                    <form>
                        <h1 className="text-3xl font-bold dark:text-slate-100">Mi Agenda Virtual</h1>
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <button className="dark:text-slate-100">Agregar tarea</button>
                    </form>
                </div>
                <DarkMode />
            </div>
        </div>
    )
}

export default App
