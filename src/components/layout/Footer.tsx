export default function Footer() {
  return (
    <>
      <footer className="h-180 bg-transparent relative overflow-hidden">
        <div className="top-bg absolute top-0 h-full rotate-180 w-full bg-[radial-gradient(ellipse_80%_100%_at_55%_0%,rgba(169,69,22,0.8),transparent)]" />
        <div className="top-bg absolute top-0 h-full rotate-180 w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_0%,rgba(173,70,255,0.6),transparent)]" />
        <div className="top-bg absolute top-0 h-full rotate-180 w-full bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(42,120,153,0.5),transparent)]" />
        <div className="footer-content-container z-10 relative h-full flex justify-between items-end p-12">
          <div className="footer-content-left flex flex-col gap-4 items-start">
            <img
              src="/favicon/favicon-96x96.png"
              alt="Syntax World Logo"
              className="size-24"
            />
            <span className="font-semibold text-[#A6A4A7]">
              &copy; All Rights Reserved - 2025
            </span>
          </div>
          <div className="footer-content-right grid grid-cols-2 w-max gap-20">
            <div className="about flex flex-col gap-4 w-max">
              <h4 className="font-semibold text-lg text-white leading-normal">
                About
              </h4>
              <ul className="text-neutral-300 flex flex-col gap-2">
                <li>
                  <a
                    href="https://santiago-parra.vercel.app/"
                    target="_blank"
                    className="hover:text-neutral-100 transition duration-200 relative before:absolute before:content-[''] before:min-w-0 before:h-0.5 before:transition-all before:duration-200 before:-bottom-0 before:left-0 before:bg-neutral-100 hover:before:min-w-full"
                  >
                    Santiago Parra
                  </a>
                </li>
                <li>
                  <a
                    href="https://portfolio-aram.vercel.app/"
                    target="_blank"
                    className="hover:text-neutral-100 transition duration-200 relative before:absolute before:content-[''] before:min-w-0 before:h-0.5 before:transition-all before:duration-200 before:-bottom-0 before:left-0 before:bg-neutral-100 hover:before:min-w-full"
                  >
                    Aram Musset
                  </a>
                </li>
                <li>
                  <a
                    href="https://saidr-portfolio.vercel.app"
                    target="_blank"
                    className="hover:text-neutral-100 transition duration-200 relative before:absolute before:content-[''] before:min-w-0 before:h-0.5 before:transition-all before:duration-200 before:-bottom-0 before:left-0 before:bg-neutral-100 hover:before:min-w-full"
                  >
                    Said Ruíz
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    target="_blank"
                    className="hover:text-neutral-100 transition duration-200 relative before:absolute before:content-[''] before:min-w-0 before:h-0.5 before:transition-all before:duration-200 before:-bottom-0 before:left-0 before:bg-neutral-100 hover:before:min-w-full"
                  >
                    Isaac Alvarez
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    target="_blank"
                    className="hover:text-neutral-100 transition duration-200 relative before:absolute before:content-[''] before:min-w-0 before:h-0.5 before:transition-all before:duration-200 before:-bottom-0 before:left-0 before:bg-neutral-100 hover:before:min-w-full"
                  >
                    Jeferson Ramos
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    target="_blank"
                    className="hover:text-neutral-100 transition duration-200 relative before:absolute before:content-[''] before:min-w-0 before:h-0.5 before:transition-all before:duration-200 before:-bottom-0 before:left-0 before:bg-neutral-100 hover:before:min-w-full"
                  >
                    Facundo Cardenas
                  </a>
                </li>
              </ul>
            </div>
            <div className="syntax-world w-max flex flex-col gap-4">
              <h4 className="font-semibold text-lg text-white leading-normal">
                Syntax World
              </h4>
              <ul className="text-neutral-300 flex flex-col gap-2">
                <li>
                  <a
                    href="https://santiago-parra.vercel.app/"
                    target="_blank"
                    className="hover:text-neutral-100 transition duration-200 relative before:absolute before:content-[''] before:min-w-0 before:h-0.5 before:transition-all before:duration-200 before:-bottom-0 before:left-0 before:bg-neutral-100 hover:before:min-w-full"
                  >
                    Santiago Parra
                  </a>
                </li>
                <li>
                  <a
                    href="https://portfolio-aram.vercel.app/"
                    target="_blank"
                    className="hover:text-neutral-100 transition duration-200 relative before:absolute before:content-[''] before:min-w-0 before:h-0.5 before:transition-all before:duration-200 before:-bottom-0 before:left-0 before:bg-neutral-100 hover:before:min-w-full"
                  >
                    Aram Musset
                  </a>
                </li>
                <li>
                  <a
                    href="https://saidr-portfolio.vercel.app"
                    target="_blank"
                    className="hover:text-neutral-100 transition duration-200 relative before:absolute before:content-[''] before:min-w-0 before:h-0.5 before:transition-all before:duration-200 before:-bottom-0 before:left-0 before:bg-neutral-100 hover:before:min-w-full"
                  >
                    Said Ruíz
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    target="_blank"
                    className="hover:text-neutral-100 transition duration-200 relative before:absolute before:content-[''] before:min-w-0 before:h-0.5 before:transition-all before:duration-200 before:-bottom-0 before:left-0 before:bg-neutral-100 hover:before:min-w-full"
                  >
                    Isaac Alvarez
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    target="_blank"
                    className="hover:text-neutral-100 transition duration-200 relative before:absolute before:content-[''] before:min-w-0 before:h-0.5 before:transition-all before:duration-200 before:-bottom-0 before:left-0 before:bg-neutral-100 hover:before:min-w-full"
                  >
                    Jeferson Ramos
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    target="_blank"
                    className="hover:text-neutral-100 transition duration-200 relative before:absolute before:content-[''] before:min-w-0 before:h-0.5 before:transition-all before:duration-200 before:-bottom-0 before:left-0 before:bg-neutral-100 hover:before:min-w-full"
                  >
                    Facundo Cardenas
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
