import React from "react";

const Header = () => {
   return(
    <div className="fixed w-full flex items-center justify-center">
        <header className="flex items-center justify-center bg-gray-700/30 p-2 px-4 border border-gray-500 rounded-full w-100 ">
            <nav className="flex">
                <ul className="flex gap-2">
                    <li className="sm:mr-10"><img src="" alt="Logo" /></li>
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