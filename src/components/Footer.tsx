import { Shield, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-section");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToValues = () => {
    const valuesSection = document.getElementById("values-section");
    valuesSection?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToHistory = () => {
    const aboutSection = document.getElementById("history-section");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToQuiz = () => {
    const quizSection = document.getElementById("quiz-section");
    quizSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-military-green text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="h-8 w-8" />
              <div>
                <h3 className="text-xl font-bold">Exército Brasileiro</h3>
                <p className="text-green-200 text-sm">Portal Informativo</p>
              </div>
            </div>
            <p className="text-green-100 text-sm leading-relaxed">
              Comprometidos com a defesa da pátria e o desenvolvimento nacional.
              Servindo o Brasil com honor, coragem e dedicação há mais de 375
              anos.
            </p>
          </div>

          {/* Links Úteis */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Importantes</h4>
            <ul className="space-y-2 text-sm">
              <li>

                  <Link to="/#about" className="text-green-100 hover:text-white transition-colors" onClick={scrollToAbout}>
                  Sobre
                  </Link>

              </li>
              <li>
                <a
                  href="#history"
                  className="text-green-100 hover:text-white transition-colors"
                  onClick={scrollToHistory}
                >
                  Curiosidade
                </a>
              </li>
              <li>
                <a
                  href="#values"
                  className="text-green-100 hover:text-white transition-colors"
                  onClick={scrollToValues}
                >
                  Valores Fundamentais
                </a>
              </li>
              <li>
                <a
                  href="#quiz"
                  className="text-green-100 hover:text-white transition-colors"
                  onClick={scrollToQuiz}
                >
                  Teste de Conhecimentos
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-green-200" />
                <span className="text-green-100">Brasília - DF, Brasil</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-green-200" />
                <span className="text-green-100">0800 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-green-200" />
                <span className="text-green-100">contato@exercito.mil.br</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-green-700 mt-8 pt-8 text-center rodape__participacoes">
          <div className="rodape__participacoes--item rodape__dedicacao">
            <p>
              Esse site foi formulado com o instituto de divulgar a pesquisa realizada pela bolsista do Cento Nacional de Pesquisa (CNPq) Gabriela Orsi estudante de Gestão de Recursos Humanos da Fatec Zona Leste. 
            </p>
          </div>

          <div className="rodape__participacoes--item">
            <h2 className="mb-5">Autora e orientadora</h2>
            <ul>
              <li>Gabriela Gomes Orsi Ragagnan</li>
              <li>Janaina Rute da Silva Dourado</li>
            </ul>
          </div>

          <div className="rodape__participacoes--item">
            <h2 className="mb-5">Desenvolvedores</h2>
            <ul>
              <li>Victor Trindade dos Santos</li>      
              <li>Sofia Floriano Amorim</li>
              <li>Israel de Souza Lima</li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
