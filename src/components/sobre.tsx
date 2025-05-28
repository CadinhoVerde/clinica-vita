import Image from 'next/image';

export default function Sobre() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">

        {/* Imagem da equipe - acima do texto no mobile */}
        <div className="flex-1 order-1 md:order-none mb-6 md:mb-0 flex justify-center">
          <Image
            src="/equipe-vita.png"
            alt="Equipe médica sorridente da Clínica Vita, pronta para atender"
            width={370}
            height={330}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-xl shadow"
            priority={false}
            quality={100}
          />
        </div>

        {/* Texto */}
        <div className="flex-1 text-center md:text-left">

          {/* Selo de profissionalismo */}
          <span className="inline-block bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-xs font-semibold mb-4 shadow-sm">
            +12 anos de experiência | Equipe multidisciplinar
          </span>

          <h3 className="text-3xl font-bold text-gray-800 mb-4">Sobre a Clínica Vita</h3>
          <p className="text-gray-600 text-lg mb-4">
            A Clínica Vita nasceu com o propósito de oferecer um atendimento humano, acessível e de qualidade.
            Nossa equipe é formada por profissionais apaixonados por cuidar de pessoas.
          </p>
          <p className="text-gray-600 text-lg mb-4">
            Aqui você encontra um ambiente acolhedor, estrutura moderna e especialidades como Fisioterapia, Nutrição, Psicologia e mais.
          </p>
          {/* Citação humanizada */}
          <blockquote className="italic text-gray-500 text-base border-l-4 border-teal-300 pl-4 mt-2">
            “Trabalhar aqui é inspirador. Somos apaixonados pelo bem-estar de cada paciente.” <br />
            <span className="not-italic font-medium text-teal-600">— Dra. Paula, fundadora</span>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
