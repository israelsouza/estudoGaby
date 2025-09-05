import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";



const ValuesSection = () => {
  const location = useLocation();

useEffect(() => {
  if (location.hash) {
    const el = document.getElementById(location.hash.replace("#", ""));
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
}, [location]);
  const values = [
    {
      title: "Honra",
      description: "Agir com integridade e dignidade em todas as circunstâncias, mantendo sempre os mais altos padrões morais.",
      color: "bg-primary/10 text-primary"
    },
    {
      title: "Coragem", 
      description: "Enfrentar desafios e adversidades com determinação, sempre priorizando o cumprimento do dever.",
      color: "bg-accent/10 text-accent"
    },
    {
      title: "Disciplina",
      description: "Manter ordem, organização e respeito à hierarquia como fundamentos da eficiência militar.",
      color: "bg-military-green/10 text-military-green"
    },
    {
      title: "Patriotismo",
      description: "Amor incondicional ao Brasil, defendendo seus interesses e trabalhando pelo bem comum da nação.",
      color: "bg-primary/10 text-primary"
    },
    {
      title: "Lealdade",
      description: "Fidelidade aos companheiros, à instituição e aos ideais que regem a carreira militar.",
      color: "bg-accent/10 text-accent"
    },
    {
      title: "Probidade",
      description: "Conduta íntegra e transparente no exercício das funções, sempre pautada pela honestidade.",
      color: "bg-military-green/10 text-military-green"
    }
  ];

  return (
    <section id="values-section" className="py-20 bg-gradient-to-b from-muted to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Valores Fundamentais
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Os valores que orientam a conduta de todos os militares do Exército Brasileiro, 
            formando o caráter e a personalidade de cada soldado, sargento e oficial.
            <a className="hover:text-blue-600" href="https://www.eb.mil.br/o-exercito/valores-militares" target="_blank"> (clique aqui para saber mais) </a>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
              <CardContent className="pt-6">
                <div className={`w-16 h-16 rounded-full ${value.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl font-bold">
                    {value.title.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 text-center">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;