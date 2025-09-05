import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";



const AboutSection = () => {
  const location = useLocation();

useEffect(() => {
  if (location.hash) {
    const el = document.getElementById(location.hash.replace("#", ""));
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
}, [location]);

const features = [
  {
    id: '/artigos#people',
    title: "People Analytics e Metodologia DISC",
    description: "Aplicação de análise de dados e perfil comportamental para aprimorar a gestão e o desenvolvimento dos militares."
  },
  {
    id: '/artigos#comportamental',
    title: "Perfil Comportamental dos Militares do CMSE",
    description: "Identificação das características e competências dos militares, promovendo equipes mais eficientes e integradas."
  },
  {
    id: '/artigos#SetorAdmSection',
    title: "Como ingressar no Setor Administrativo do CMSE",
    description: "Informações sobre requisitos, processos seletivos e oportunidades para atuar no setor administrativo do CMSE."
  },
  {
    id: '/artigos#ProcessosInternosSection',
    title: "Processos internos do Setor Administrativo Militar do CMSE",
    description: "Descrição dos procedimentos, rotinas e boas práticas que garantem a eficiência administrativa no ambiente militar."
  }
];

  return (
    <section id="about-section" className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sobre o Exército Brasileiro
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            O Exército Brasileiro é uma das três Forças Armadas do Brasil, responsável pela defesa terrestre do país 
            e por diversas ações que contribuem para o desenvolvimento nacional e a segurança da população 
            <a className="hover:text-blue-600" href="https://www.planalto.gov.br/ccivil_03/leis/l6880.htm" target="_blank"> (clique aqui para saber mais) </a>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Link to={feature.id}>
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                {/* <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" /> */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;