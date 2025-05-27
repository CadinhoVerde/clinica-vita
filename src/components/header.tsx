'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Bloquear o scroll da página ao abrir o menu
  useEffect(() => {
    const html = document.querySelector('html');
    if (!html) return;

    html.classList.toggle('overflow-hidden', menuOpen);
  }, [menuOpen]);

  const navLinks = [
    { id: '', label: 'Início' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'especialidades', label: 'Especialidades' },
    { id: 'depoimentos', label: 'Depoimentos' },
    { id: 'agendamento', label: 'Agendamento' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-teal-600">Clínica Vita</h1>

        {/* Navegação desktop */}
        <nav className="hidden md:flex gap-6">
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
          className="md:hidden text-teal-600"
          aria-label="Abrir menu"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Menu Mobile Tela Cheia */}
      <div
        className={`fixed inset-0 z-50 bg-white px-6 pt-6 transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b pb-4 mb-6">
          <h2 className="text-xl font-bold text-teal-600">Menu</h2>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Fechar menu"
            className="text-gray-700 hover:text-teal-600 transition"
          >
            <X size={26} />
          </button>
        </div>

        <nav className="flex flex-col gap-6 text-lg justify-center items-center flex-1 mt-20">
          {navLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-teal-600 font-medium transition"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
