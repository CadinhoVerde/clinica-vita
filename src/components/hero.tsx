'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-teal-50 pt-20 pb-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center px-6 gap-8 mt-5">

        {/* Texto */}
        <div className="text-center lg:text-left flex-1 animate-fadeIn">
          {/* Selo de confiança */}
          <span className="inline-flex items-center gap-2 bg-white text-teal-600 text-xs font-bold px-3 py-1 rounded-full shadow mb-4">
            {/* Ícone simples */}
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
              <path d="M12 21c-6-5.1-9-8.5-9-12.08A6.08 6.08 0 0 1 9 3.13a6.08 6.08 0 0 1 6 5.79C21 12.5 18 15.9 12 21z" fill="#14b8a6"/>
            </svg>
            +2.500 pacientes atendidos
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-snug">
            Cuidar da sua saúde <br /> nunca foi tão fácil.
          </h1>
          <p className="text-gray-700 text-base sm:text-lg mb-6 max-w-md mx-auto lg:mx-0">
            Agende sua consulta online com nossos especialistas e sinta-se bem novamente.
          </p>
          <a
            href="#agendamento"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3 rounded-xl transition shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-300"
          >
            Agende sua consulta
          </a>
        </div>

        {/* Imagem - agora usando next/image e ajustando altura */}
        <div className="flex-1 flex justify-center mb-8 lg:mb-0">
          <Image
            src="/hero-doctor.jpg"
            alt="Profissional de saúde sorrindo, pronta para atender"
            width={380}
            height={430}
            className="w-full max-w-xs sm:max-w-sm lg:max-w-md object-cover rounded-2xl shadow-lg"
            quality={100}
            priority
          />
        </div>
      </div>
    </section>
  );
}
