export default function Contacts() {
    return (
        <>
            <section className="relative w-full h-full flex flex-col md:flex-row items-center justify-around">
                
                <div className="flex flex-col gap-2 items-center justify-center">
                    <div className="flex flex-col gap-2 items-center text-center justify-center w-full">
                        <h2 className="font-semibold text-2xl md:text-4xl 2xl:text-5xl text-white">
                            Contáctanos
                        </h2>
                        <span className="text-center w-[90%] text-neutral-400">
                            ¿Tienes preguntas, sugerencias o quieres colaborar con nosotros? Estamos aquí para ayudarte y escuchar tus ideas.
                        </span>
                    </div>

                    <div className="flex flex-col md:flex-row w-full justify-between items-center gap-10 px-4">
                        <div className="relative flex justify-center items-center w-full">
                            <form className="flex flex-col gap-5 p-4 rounded-2xl shadow-2xl w-full z-10">

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-neutral-300 font-semibold">
                                            Nombre *
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Jhon"
                                            className="border rounded-2xl border-gray-500 text-neutral-300 p-3 focus:scale-101 focus:border-[#2a0464] focus:ring-2 outline-none focus:ring-[#2a0464] transition-all duration-300 bg-neutral-900/20"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label className="text-neutral-300 font-semibold">
                                            Apellido *
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Doe"
                                            className="border rounded-2xl border-gray-500 text-neutral-300 p-3 focus:scale-101 focus:border-[#2a0464] focus:ring-2 outline-none focus:ring-[#2a0464] transition-all duration-300 bg-neutral-900/20"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-neutral-300 font-semibold">
                                        Correo electrónico *
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="example@domain.com"
                                        className="border rounded-2xl border-gray-500 text-neutral-300 p-3 focus:scale-101 focus:border-[#2a0464] focus:ring-2 outline-none focus:ring-[#2a0464] transition-all duration-300 bg-neutral-900/20"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-neutral-300 font-semibold">
                                        Mensaje *
                                    </label>
                                    <textarea
                                        placeholder="Envíanos un mensaje"
                                        className="border rounded-2xl border-gray-500 text-neutral-300 p-3 h-32 focus:scale-101 focus:border-[#2a0464] focus:ring-2 outline-none focus:ring-[#2a0464] transition-all duration-300 bg-neutral-900/20"
                                    />
                                </div>

                                <button className="bg-gradient-to-r from-[#64173d] via-[#6c04bb] to-[#2305ca] py-2.5 rounded-2xl font-semibold text-white cursor-pointer">
                                    Enviar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="relative flex flex-col items-center justify-center w-120 h-150 rounded-2xl  text-neutral-200 bg-[url('/pc.png')] bg-cover bg-center">
                    <div className="absolute bg-black/2 backdrop-blur-sm w-full h-full rounded-2xl "></div>
                    <div className="flex flex-col justify-center items-center z-10">
                        <img src="/Logo-sintax.png" className="w-30" alt="" />
                        <p className="text-center p-4 text-lg">
                            En <b>Syntax World</b>, transformamos tus ideas en soluciones digitales que generan impacto real. Más que desarrolladores, somos tus aliados estratégicos en el mundo digital.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
