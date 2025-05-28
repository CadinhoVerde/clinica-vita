export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 text-sm mt-20">
      <div className="max-w-7xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3 text-center md:text-left">
        {/* Coluna 1: Institucional */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Clínica Vita</h4>
          <p className="mb-3">Saúde e bem-estar ao seu alcance.</p>
          <div className="flex justify-center md:justify-start gap-3 mt-2">
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener"
              aria-label="WhatsApp"
              className="inline-flex items-center justify-center w-9 h-9 bg-teal-50 rounded-full hover:bg-teal-100 hover:text-teal-600 transition"
              title="WhatsApp"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.52 3.48A12.01 12.01 0 0012.01 0C5.37 0 .01 5.36.01 12c0 2.12.56 4.19 1.62 6.01L0 24l6.17-1.62A11.93 11.93 0 0012.01 24c6.64 0 12.01-5.36 12.01-12 0-3.21-1.25-6.23-3.5-8.52zM12.01 22c-1.8 0-3.57-.47-5.1-1.36l-.36-.21-3.66.96.98-3.57-.23-.37C2.45 15.47 2.01 13.77 2.01 12 2.01 6.48 6.5 2 12.01 2c5.52 0 10 4.48 10 10s-4.48 10-10 10zm5.44-7.68c-.3-.15-1.75-.87-2.02-.97-.27-.09-.47-.15-.66.15-.19.3-.76.97-.94 1.17-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.39-1.46-.88-.78-1.47-1.74-1.64-2.03-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.19-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.9-2.2-.23-.56-.47-.48-.66-.49-.17-.01-.37-.01-.58-.01s-.53.08-.81.39c-.27.31-1.04 1.02-1.04 2.49 0 1.46 1.07 2.88 1.22 3.08.15.19 2.11 3.24 5.12 4.42.72.31 1.29.5 1.73.64.73.23 1.4.2 1.93.12.59-.09 1.75-.72 2-1.43.25-.71.25-1.32.17-1.43-.09-.11-.27-.18-.56-.32z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Coluna 2: Navegação */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Navegação</h4>
          <ul className="space-y-1">
            <li><a href="#sobre" className="hover:underline hover:text-teal-600 transition">Sobre</a></li>
            <li><a href="#especialidades" className="hover:underline hover:text-teal-600 transition">Especialidades</a></li>
            <li><a href="#depoimentos" className="hover:underline hover:text-teal-600 transition">Depoimentos</a></li>
            <li><a href="#agendamento" className="hover:underline hover:text-teal-600 transition">Agendamento</a></li>
          </ul>
        </div>

        {/* Coluna 3: Créditos */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Créditos</h4>
          <p>
            Página desenvolvida por{" "}
            <a
              href="https://www.linkedin.com/in/seulink/"
              target="_blank"
              rel="noopener"
              className="font-semibold text-teal-600 hover:underline"
              title="Veja meu perfil no LinkedIn"
            >
              LabSites
            </a>
            {" "}com foco em conversão e experiência do usuário.
          </p>
        </div>
      </div>

      <div className="border-t border-gray-200 text-center py-4 text-xs text-gray-500">
        © {new Date().getFullYear()} Clínica Vita · Todos os direitos reservados.
      </div>
    </footer>
  );
}
