import React from "react";

const Header = () => {
   return(
    <div className="fixed w-full flex items-center justify-center">
        <header className="flex items-center justify-center bg-[#7E787810] p-2 px-4 border border-gray-800 rounded-full w-105 text-[#C0C0C0] font-semibold">
            <nav className="flex">
                <ul className="flex gap-2 items-center">
                    <li className="sm:mr-6"><img src="/Logo-sintax.png" alt="Logo" className="h-10 w-10"/></li>
                    <li><a href="Inicio">Inicio</a></li>
                    <li><a href="Proyectos">Proyectos</a></li>
                    <li><a href="Nosotros">Nosotros</a></li>
                    <li><a href="Contacto">Contacto</a></li>
                </ul>
            </nav>
        </header>
    </div>
   )
}

export default Header