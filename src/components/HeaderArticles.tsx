import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

const HeaderArticles = () => {

  return (
    <header className="bg-background shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
      <Link to="/">
          <div className="flex items-center space-x-3">
            <Shield className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-xl font-bold text-foreground">Exército Brasileiro</h1>
              <p id="header__logo-text" className="text-sm text-muted-foreground">Portal Informativo | Para fins acadêmicos</p>
            </div>
          </div>
      </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            {/* <Link to="/artigos" className="text-foreground hover:text-primary transition-colors">
              História
            </Link> */}


          </nav>
        </div>
      </div>
    </header>
  );
};

export default HeaderArticles;