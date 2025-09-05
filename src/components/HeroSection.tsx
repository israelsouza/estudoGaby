import { Button } from "@/components/ui/button";
import heroImage from "@/assets/exercito.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-military-green to-military-green-light text-white min-h-[80vh] flex items-center heroSection">
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroImage} 
          alt="Exército Brasileiro" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-4xl font-bold mb-6 leading-tight">
              Tecnologia e gestão: como funciona a área de administração no comando militar do sudeste - II Exército
            <span className="block text-green-200">
            </span>
          </h1>

          
          <p className="text-xl md:text-2xl mb-8 text-green-100 leading-relaxed">
            Site academico com o intuito de divulgar a pesquisa realizada pela estudante e pesquisadora de iniciação cientifica(CNPq) Gabriela Orsi estudante de Gestão de Recursos Humanos da Fatec
              Zona Leste.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 heroSection__container-btn">
              <Button 
                size="lg" 
                className="bg-white text-military-green hover:bg-green-50 font-semibold px-8 py-3"
              >
            <Link to="/artigos">
                Saiba Mais
            </Link>
              </Button>
            <Button 
              id="heroSection__btn-quiz"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-military-green font-semibold px-8 py-3"
              onClick={() => document.getElementById('quiz-section')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline" 
              >
              Teste seus Conhecimentos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;