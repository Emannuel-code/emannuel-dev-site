import React from "react";

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <img
          src="/perfil-3.png"
          alt="Foto de Emannuel Melo"
          className="w-[150px] h-[150px] rounded-full object-cover border-2 border-accent mx-auto mb-6 transition-transform duration-300 hover:scale-105"
          style={{ boxShadow: "0 0 20px hsl(265 75% 70% / 0.18)" }}
        />

        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-accent">
          Emannuel Melo
        </h2>

        <p className="text-lg md:text-xl text-foreground leading-relaxed max-w-2xl mx-auto">
          Desenvolvedor Full Stack que transforma ideias em soluções digitais reais.
          Crio sistemas e sites sob medida para inovação do seu negócio.
        </p>

        <div className="[--icon-color:#6b46c1] dark:[--icon-color:#b99df8] mt-8 flex justify-center items-center">
          <nav aria-label="Contatos" className="flex gap-6 text-[color:var(--icon-color)]">
            <a
              href="mailto:manel.dev2@gmail.com"
              aria-label="Enviar email"
              title="Email"
              className="p-1 transition-colors duration-200 hover:opacity-80"
            >
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="2.5" y="5" width="19" height="14" rx="2" ry="2" />
                <polyline points="3.5,7.5 8.5,11.5 12,9 15.5,11.5 20.5,7.5" />
              </svg>
            </a>

    
            <a
              href="https://www.instagram.com/manel.io"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              title="Instagram"
              className="p-1 transition-colors duration-200 hover:opacity-80"
            >
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="3" y="3.5" width="18" height="17" rx="4" ry="4" />
                <circle cx="12" cy="12" r="3.2" />
                <path d="M17.5 6.5h.01" />
              </svg>
            </a>

          
            <a
              href="https://www.linkedin.com/in/emannuel-m-moura"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="p-1 transition-colors duration-200 hover:opacity-80"
            >
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-2-2 2 2 0 0 0-2 2v6h-4v-12h4v2" />
                <rect x="2" y="8" width="4" height="12" rx="1" ry="1" />
                <circle cx="4" cy="4.5" r="2.5" />
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </section>
  );
}
