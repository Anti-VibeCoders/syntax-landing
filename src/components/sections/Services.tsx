import { services } from "@/data/services";

export default function Service() {
  return (
    <section
      id="services"
      className="text-center text-white px-4 py-8 md:py-12"
    >
      <h2 className="font-semibold text-2xl md:text-4xl 2xl:text-5xl">
        Services
      </h2>
      <span className="inline-block mt-3 mb-8 md:mb-12 text-center text-sm md:text-base w-[90%] md:w-[50%] text-neutral-400">
        Discover the amazing services we offer and tell us which one you're
        interested in.
      </span>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative flex justify-center bg-[#0A0A0A] rounded-3xl rounded-tr-[60px] rounded-bl-[60px] border border-neutral-800 p-6 hover:border-neutral-700 transition-all duration-300 hover:bg-neutral-900/30 hover:translate-y-[-4px] "
          >
            <div
              className={`relative bg-black/40 rounded-3xl rounded-tr-[60px] rounded-bl-[60px] backdrop-blur-xl border border-white/10 p-8 transition-all duration-500 group-hover:border-white/20 group-hover:scale-[1.02] overflow-hidden`}
            >
              <div
                className={`mb-4 p-3 rounded-lg bg-black/50 border border-neutral-800 w-fit ${service.color} ${service.shadow} shadow-lg group-hover:shadow-xl transition-shadow`}
              >
                {service.icon}
              </div>
              <div className="text-left">
                <h3 className="text-lg md:text-xl font-medium text-white mb-3">
                  {service.title}
                </h3>

                <span className="text-sm text-neutral-400 leading-relaxed">
                  {service.description}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
