export default function Footer() {

  return (
    <footer className="bg-gray-100 text-gray-600 text-sm mt-20">
      <div className="max-w-7xl mx-auto px-4 py-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {/* Coluna 1 */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Clínica Vita</h4>
          <p>Saúde e bem-estar ao seu alcance.</p>
        </div>

        {/* Coluna 2 */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Navegação</h4>
          <ul className="space-y-1">
            <li><a href="#sobre" className="hover:underline">Sobre</a></li>
            <li><a href="#especialidades" className="hover:underline">Especialidades</a></li>
            <li><a href="#depoimentos" className="hover:underline">Depoimentos</a></li>
            <li><a href="#agendamento" className="hover:underline">Agendamento</a></li>
          </ul>
        </div>

        {/* Coluna 3 */}
        <div className="sm:col-span-2 md:col-span-1">
          <h4 className="font-semibold text-gray-800 mb-2">Créditos</h4>
            <p>
            Página desenvolvida por <span className="font-semibold text-teal-600">LabSites</span> com foco em conversão e experiência do usuário.
            </p>
        </div>
      </div>

      <div className="border-t border-gray-200 text-center py-4">
        © {new Date().getFullYear()} Clínica Vita · Todos os direitos reservados.
      </div>
    </footer>
  );
}
