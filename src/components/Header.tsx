import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
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
              <p className="text-sm text-muted-foreground">Portal Informativo</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#history" className="text-foreground hover:text-primary transition-colors">
              História
            </a>
            <a href="#values" className="text-foreground hover:text-primary transition-colors">
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