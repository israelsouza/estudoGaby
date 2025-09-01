import { Shield, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
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

                  <Link to="/#about-section" className="text-green-100 hover:text-white transition-colors" onClick={scrollToAbout}>

                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/#history-section"
                  className="text-green-100 hover:text-white transition-colors"
                  onClick={scrollToHistory}
                >
                  Curiosidade
                </Link>
              </li>
              <li>
                <Link to="/#values-section"
                  className="text-green-100 hover:text-white transition-colors"
                  onClick={scrollToValues}
                >
                  Valores Fundamentais
                </Link>
              </li>
              <li>
                <Link to="/#quiz-section"
                  className="text-green-100 hover:text-white transition-colors"
                  onClick={scrollToQuiz}
                >
                  Teste de Conhecimentos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-green-200" />
                <span className="text-green-100">Av. Srg. Mario Kozel Filho, 222 <br/> Paraíso, São Paulo <br/> SP, 04005-903
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-green-700 mt-8 pt-8">
          <div className="flex items-center space-x-3 mb-4">
            <p>
              Esse site foi formulado com o instituto de divulgar a pesquisa
              realizada pela bolsista do Cento Nacional de Pesquisa (CNPq)
              Gabriela Orsi estudante de Gestão de Recursos Humanos da Fatec
              Zona Leste.
            </p>
          </div>

          <div className="flex items-center space-x-3 mb-4">
            <div>
              <h2 className="mb-5">Autora e orientadora</h2>
              <ul>
                <li>
                  {" "}
                  <a
                    href="https://www.linkedin.com/in/gabriela-gomes-orsi-ragagnan-156aa4287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    className="flex items-center gap-2 text-white px-3 py-2 rounded-lg hover:bg-blue-600 transition w-fit"
                  >
                    <Linkedin className="w-5 h-5" />
                    Gabriela Gomes Orsi Ragagnan
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/janainarscdourado?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    className="flex items-center gap-2 text-white px-3 py-2 rounded-lg hover:bg-blue-600 transition w-fit"
                  >
                    <Linkedin className="w-5 h-5" />
                    Janaina Rute da Silva Dourado
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-center space-x-3 mb-4">
            <div>
              <h2 className="mb-5">Desenvolvedores</h2>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://github.com/victor-trindade-santos" target="_blank"
                    className="flex items-center gap-2  text-white px-3 py-2 rounded-lg hover:bg-gray-800 transition w-fit"
                  >
                    <Github className="w-5 h-5" />
                    <span>Victor Trindade dos Santos</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Sofia-gith" target="_blank"
                    className="flex items-center gap-2  text-white px-3 py-2 rounded-lg hover:bg-gray-800 transition w-fit"
                  >
                    <Github className="w-5 h-5" />
                    <span>Sofia Floriano Amorim</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/israelsouza" target="_blank"
                    className="flex items-center gap-2 text-white px-3 py-2 rounded-lg hover:bg-gray-800 transition w-fit"
                  >
                    <Github className="w-5 h-5" />
                    <span>Israel de Souza Lima</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
