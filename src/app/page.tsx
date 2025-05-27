import Sobre from '../components/sobre';
import Header from '../components/header';
import Hero from '../components/hero';
import Especialidades from '../components/especialidades';
import Depoimentos from '../components/depoimentos';
import Agendamento from '../components/agendamento';
import Footer from '../components/footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Sobre />
      <Especialidades />
      <Depoimentos />
      <Agendamento />
      <Footer />
    </>
  );
}
