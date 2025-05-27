'use client';
import { Star } from "lucide-react";

const depoimentos = [
  {
    nome: "Juliana Alves",
    texto:
      "Fui atendida com muito carinho. A equipe é super atenciosa e o ambiente acolhedor!",
    foto: "/pessoa1.png",
  },
  {
    nome: "Carlos Mendes",
    texto:
      "Tive uma recuperação excelente com a fisioterapia. Recomendo demais!",
    foto: "/pessoa2.png",
  },
  {
    nome: "Fernanda Lima",
    texto:
      "A nutricionista me ajudou a mudar meus hábitos sem pressão. Amei o atendimento!",
    foto: "/pessoa3.png",
  },
];

export default function Depoimentos() {
  return (
    <section className="py-20 bg-white" id="depoimentos">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          O que dizem nossos pacientes
        </h3>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {depoimentos.map((d, index) => (
            <div
              key={index}
              className="bg-teal-50 p-6 rounded-xl shadow text-gray-700"
            >
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-sm mb-4 before:content-[“] after:content-[”]">“{d.texto}”</p>
              <div className="flex items-center gap-3">
                <img
                  src={d.foto}
                  alt={`Foto de ${d.nome}`}
                  className="w-10 h-10 rounded-full object-cover aspect-square"
                />
                <span className="font-medium text-gray-800">{d.nome}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
