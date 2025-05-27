'use client';
import { useState } from "react";

export default function Agendamento() {
  const [form, setForm] = useState({ nome: "", email: "", especialidade: "", mensagem: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Consulta agendada com sucesso!");
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
          />
        </div>
        <button
          type="submit"
          className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-xl transition shadow text-center"
        >
          Enviar
        </button>
      </form>
    </div>
  </div>
</section>
  );
}
