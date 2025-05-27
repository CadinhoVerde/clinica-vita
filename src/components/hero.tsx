'use client';

export default function Hero() {
  return (
    <section className="bg-teal-50">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center px-6 py-20 gap-10">
        
        {/* Texto */}
        <div className="text-center lg:text-left flex-1 animate-fadeIn">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-snug">
            Cuidar da sua saúde <br /> nunca foi tão fácil.
          </h1>
          <p className="text-gray-700 text-base sm:text-lg mb-6 max-w-md mx-auto lg:mx-0">
            Agende sua consulta online com nossos especialistas e sinta-se bem novamente.
          </p>
          <a
            href="#agendamento"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-xl transition"
          >
            Agende sua consulta
          </a>
        </div>

        {/* Imagem */}
        <div className="flex-1">
          <img
            src="/hero-doctor.jpg"
            alt="Profissional de saúde sorrindo"
            className="w-full max-h-[500px] object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
