'use client';
import { motion } from 'framer-motion';
import { HeartPulse, Brain, Leaf, Smile, Baby, Sun } from "lucide-react";

const especialidades = [
  {
    icon: <HeartPulse className="w-8 h-8 text-teal-600 group-hover:scale-110 group-hover:text-teal-500 transition" />,
    title: "Fisioterapia",
    desc: "Tratamentos modernos para dores, lesões e mobilidade.",
  },
  {
    icon: <Leaf className="w-8 h-8 text-teal-600 group-hover:scale-110 group-hover:text-teal-500 transition" />,
    title: "Nutrição",
    desc: "Planos alimentares personalizados e educação nutricional.",
  },
  {
    icon: <Brain className="w-8 h-8 text-teal-600 group-hover:scale-110 group-hover:text-teal-500 transition" />,
    title: "Psicologia",
    desc: "Apoio emocional e terapia com empatia e acolhimento.",
  },
  {
    icon: <Smile className="w-8 h-8 text-teal-600 group-hover:scale-110 group-hover:text-teal-500 transition" />,
    title: "Estética",
    desc: "Tratamentos faciais e corporais com foco em bem-estar.",
  },
  {
    icon: <Sun className="w-8 h-8 text-teal-600 group-hover:scale-110 group-hover:text-teal-500 transition" />,
    title: "Dermatologia",
    desc: "Cuidados para pele saudável, acne, manchas e prevenção.",
  },
  {
    icon: <Baby className="w-8 h-8 text-teal-600 group-hover:scale-110 group-hover:text-teal-500 transition" />,
    title: "Pediatria",
    desc: "Atenção médica para crianças com carinho e cuidado.",
  },
];

export default function Especialidades() {
  return (
    <section id="especialidades" className="py-20 bg-teal-50">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          Nossas Especialidades
        </h3>

        {/* Grid responsiva com horizontal scroll no mobile */}
        <div className="
          flex gap-4 overflow-x-auto pb-4 scrollbar-hide
          sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 sm:overflow-x-visible
        ">
          {especialidades.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, boxShadow: "0 6px 24px rgba(20,184,166,.15)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className="
                min-w-[75vw] max-w-xs sm:min-w-0 w-full
                bg-white p-5 rounded-xl shadow hover:shadow-xl transition text-center group cursor-pointer
              "
              tabIndex={0}
              aria-label={`Especialidade: ${item.title}`}
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Indicação para o usuário no mobile */}
        <p className="text-xs text-gray-400 text-center mt-2 sm:hidden">Arraste para o lado →</p>
      </div>
    </section>
  );
}
