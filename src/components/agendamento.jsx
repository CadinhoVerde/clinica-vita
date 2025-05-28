'use client';
import { useState } from "react";

export default function Agendamento() {
  const [form, setForm] = useState({ nome: "", email: "", especialidade: "", mensagem: "" });
  const [enviando, setEnviando] = useState(false);
  const [sucesso, setSucesso] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviando(true);
    setTimeout(() => {
      setEnviando(false);
      setSucesso(true);
      setForm({ nome: "", email: "", especialidade: "", mensagem: "" });
      // Scroll para o topo do form, opcional
      document.getElementById("agendamento").scrollIntoView({ behavior: "smooth" });
      setTimeout(() => setSucesso(false), 4000);
    }, 1300);
  };

  return (
    <section id="agendamento" className="py-20 bg-teal-600 text-white">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white p-8 rounded-2xl shadow-lg text-gray-800">
          <h3 className="text-3xl font-bold text-center text-teal-700 mb-2">
            Agende sua consulta
          </h3>
          <p className="text-center text-gray-600 mb-6">
            Preencha o formulário e nossa equipe entrará em contato para confirmar seu atendimento.
          </p>
          {sucesso && (
            <div className="mb-4 bg-teal-50 border-l-4 border-teal-500 text-teal-700 p-4 rounded shadow animate-fadeIn">
              <strong>Prontinho!</strong> Consulta agendada com sucesso.<br />Em breve nossa equipe irá te contatar!
            </div>
          )}
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div>
              <label className="text-sm font-medium">Nome completo *</label>
              <input
                name="nome"
                type="text"
                placeholder="Seu nome"
                value={form.nome}
                onChange={handleChange}
                required
                className="w-full p-3 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                disabled={enviando}
              />
            </div>
            <div>
              <label className="text-sm font-medium">E-mail *</label>
              <input
                name="email"
                type="email"
                placeholder="Seu e-mail"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                disabled={enviando}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Especialidade *</label>
              <select
                name="especialidade"
                value={form.especialidade}
                onChange={handleChange}
                required
                className="w-full p-3 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                disabled={enviando}
              >
                <option value="">Selecione</option>
                <option value="Fisioterapia">Fisioterapia</option>
                <option value="Nutrição">Nutrição</option>
                <option value="Psicologia">Psicologia</option>
                <option value="Estética">Estética</option>
                <option value="Dermatologia">Dermatologia</option>
                <option value="Pediatria">Pediatria</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium">Motivo / Observações</label>
              <textarea
                name="mensagem"
                placeholder="Descreva o motivo da consulta (opcional)"
                value={form.mensagem}
                onChange={handleChange}
                rows={4}
                className="w-full p-3 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                disabled={enviando}
              />
            </div>
            <button
              type="submit"
              disabled={enviando}
              className={`w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-xl transition shadow text-center ${
                enviando ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {enviando ? "Enviando..." : "Enviar"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
