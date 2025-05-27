export default function Sobre() {


  return (
      <section id="sobre" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <img
              src="/equipe-vita.png"
              alt="Equipe médica da Clínica Vita"
              className="w-full max-w-md mx-auto rounded-xl shadow"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Sobre a Clínica Vita</h3>
            <p className="text-gray-600 text-lg mb-4">
              A Clínica Vita nasceu com o propósito de oferecer um atendimento humano, acessível e de qualidade.
              Nossa equipe é formada por profissionais apaixonados por cuidar de pessoas.
            </p>
            <p className="text-gray-600 text-lg">
              Aqui você encontra um ambiente acolhedor, estrutura moderna e especialidades como Fisioterapia, Nutrição, Psicologia e mais.
            </p>
          </div>
        </div>
      </section>
  );
}
