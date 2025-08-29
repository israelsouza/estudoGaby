import { Card, CardContent } from "./ui/card";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import FadeInParagraph from "./FadeInParagraph";


function AnalyticsArticle() {
    useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.getElementById(hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [useLocation()]);
  const features = [
    { title: "Dominância", description: "Pessoas determinadas, independentes, automotivadas, com foco em resultados, que podem desconsiderar opiniões alheias." },
    { title: "Influência", description: "Indivíduos sociáveis, entusiasmados, autoconfiantes, excelentes em relacionamentos interpessoais, comunicativos, mas podem ser impulsivos." },
    { title: "Estabilidade", description: "Pessoas pacientes, persistentes, ponderadas, detalhistas, planejadoras, organizadas, mas podem ser resistentes a mudanças." },
    { title: "Conformidade", description: "Indivíduos exatos, analíticos, curiosos, disciplinados, muito presos a regras e procedimentos." },
  ];

  const paragraphs = [
    `People Analytics é uma ferramenta utilizada na gestão de pessoas que
    analisa dados de funcionários ou possíveis talentos para traçar perfis
    comportamentais e tomar decisões embasadas. A coleta de dados é feita
    por diversas metodologias, frequentemente utilizando testes formulados
    por psicólogos e profissionais de Recursos Humanos. É considerado
    relevante para áreas como qualificação de dados, gestão de desempenho,
    treinamento, recrutamento e seleção.`,
    
    `A Metodologia DISC, desenvolvida pelo psicólogo William Moulton
    Marston em 1928, tem como objetivo analisar as tendências
    comportamentais das pessoas no ambiente organizacional. Ela divide os
    indivíduos em quatro categorias de comportamento humano: Dominância,
    Influência, Estabilidade e Conformidade.`,

    "O estudo utilizou o People Analytics associado à Metodologia DISC para mapear o perfil comportamental dos Sargentos e Oficiais Técnicos Temporários da área administrativa do Comando Militar do Sudeste (CMSE).",

    "Os resultados de um questionário com 25 perguntas fechadas indicaram um equilíbrio significativo entre o perfil de Estabilidade (42%) e Influência (42%) entre os entrevistados.",

    "Este equilíbrio é considerado condizente com a estrutura organizacional militar, que se baseia em disciplina, hierarquia, lealdade e trabalho em equipe. Pessoas com perfil de Estabilidade são guiadas por ordem e controle, sendo detalhistas e organizadas, enquanto as de Influência buscam harmonia e gostam de trabalhar em equipe, fortalecendo as relações interpessoais."
  ];

  return (

    <div className="py-20 bg-gradient-to-b from-muted to-muted max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-foreground mb-16 text-center">
        People Analytics e Metodologia DISC
      </h2>


      <div className="text-muted-foreground mb-8 text-lg text-justify max-w-3xl mx-auto space-y-6">
        {paragraphs.slice(0, 2).map((text, i) => (
          <FadeInParagraph key={i} index={i}>
            {text}
          </FadeInParagraph>
        ))}
      </div>

    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-16">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="text-center hover:shadow-lg transition-shadow duration-300"
          >
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

   
      <div className="text-muted-foreground mb-4 text-lg text-justify max-w-3xl mx-auto space-y-6">
        {paragraphs.slice(2).map((text, i) => (
          <FadeInParagraph key={i + 2} index={i + 2}>
            {text}
          </FadeInParagraph>
        ))}
      </div>
    </div>
  );
}

export default AnalyticsArticle;
