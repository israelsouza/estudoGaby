import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const scrollToValues = () => {
    const valuesSection = document.getElementById("values-section");
    valuesSection?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-section");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };
  
    const scrollToHistory = () => {
    const aboutSection = document.getElementById("history-section");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToQuiz = () => {
    const quizSection = document.getElementById('quiz-section');
    quizSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-background shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <Shield className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-xl font-bold text-foreground">Exército Brasileiro</h1>
              <p id="header__logo-text" className="text-sm text-muted-foreground">Portal Informativo</p>
            </div>
          </div>
          

          <nav className="hidden md:flex items-center space-x-8 header__navegation">
            <a  className="text-foreground hover:text-primary transition-colors cursor-pointer" onClick={scrollToAbout}>
              Sobre
            </a>
            <a className="text-foreground hover:text-primary transition-colors cursor-pointer" onClick={scrollToHistory}>
              Curiosidade
           </a>
            <a className="text-foreground hover:text-primary transition-colors cursor-pointer" onClick={scrollToValues}>

              Valores
            </a>
            <Button onClick={scrollToQuiz} variant="outline" size="sm">
              Teste seus Conhecimentos
            </Button>


            
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;