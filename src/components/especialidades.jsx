'use client';
import { motion } from 'framer-motion';
import { HeartPulse, Brain, Leaf, Smile, Baby, Sun } from "lucide-react";

const especialidades = [
  {
    icon: <HeartPulse className="w-8 h-8 text-teal-600" />,
    title: "Fisioterapia",
    desc: "Tratamentos modernos para dores, lesões e mobilidade.",
  },
  {
    icon: <Leaf className="w-8 h-8 text-teal-600" />,
    title: "Nutrição",
    desc: "Planos alimentares personalizados e educação nutricional.",
  },
  {
    icon: <Brain className="w-8 h-8 text-teal-600" />,
    title: "Psicologia",
    desc: "Apoio emocional e terapia com empatia e acolhimento.",
  },
  {
    icon: <Smile className="w-8 h-8 text-teal-600" />,
    title: "Estética",
    desc: "Tratamentos faciais e corporais com foco em bem-estar.",
  },
  {
    icon: <Sun className="w-8 h-8 text-teal-600" />,
    title: "Dermatologia",
    desc: "Cuidados para pele saudável, acne, manchas e prevenção.",
  },
  {
    icon: <Baby className="w-8 h-8 text-teal-600" />,
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
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {especialidades.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition text-center"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
