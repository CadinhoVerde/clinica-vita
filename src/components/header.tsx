'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Bloquear scroll ao abrir menu
  useEffect(() => {
    const html = document.querySelector('html');
    if (!html) return;
    html.classList.toggle('overflow-hidden', menuOpen);
  }, [menuOpen]);

  // Sombra no header ao rolar
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  
  const navLinks = [
    { id: '', label: 'Início' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'especialidades', label: 'Especialidades' },
    { id: 'depoimentos', label: 'Depoimentos' },
    { id: 'agendamento', label: 'Agendamento' },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 bg-white transition-shadow ${scrolled ? 'shadow-lg' : 'shadow'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#inicio" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Logo Clínica Vita"
            className="w-10 h-10 object-contain"
          />
          <span className="text-lg sm:text-xl font-bold text-teal-600 hidden sm:inline">Clínica Vita</span>
        </a>


        {/* Navegação desktop */}
        <nav className="hidden md:flex gap-6" role="navigation" aria-label="Navegação principal">
          {navLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="relative font-medium text-gray-700 hover:text-teal-600 transition after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-teal-600 after:transition-all"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Botão menu mobile */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-teal-600 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-teal-300"
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          <Menu size={28} className={`transition-transform duration-300 ${menuOpen ? 'rotate-90 opacity-0' : 'opacity-100'}`} />
        </button>
      </div>

      {/* Menu Mobile Tela Cheia */}
      <div
        className={`
          fixed inset-0 z-50 bg-white px-6 pt-6 flex flex-col
          transition-all duration-300 ease-in-out
          ${menuOpen ? 'translate-x-0 opacity-100 pointer-events-auto' : 'translate-x-full opacity-0 pointer-events-none'}
        `}
      >
        <div className="flex items-center justify-between border-b pb-4 mb-6">
          <h2 className="text-xl font-bold text-teal-600">Menu</h2>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Fechar menu"
            className="text-gray-700 hover:text-teal-600 transition rounded-full p-2"
          >
            <X size={26} className="transition-transform duration-300" />
          </button>
        </div>

        <nav className="flex flex-col gap-8 text-lg justify-center items-center flex-1 mt-12" role="navigation" aria-label="Navegação mobile">
          {navLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-teal-600 font-medium transition py-2 px-4 rounded-lg"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
