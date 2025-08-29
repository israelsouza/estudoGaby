import { Card, CardContent } from "@/components/ui/card";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import FadeInParagraph from "./FadeInParagraph.jsx";


const SetorAdmSection = () => {
    useEffect(() => {
      const hash = window.location.hash;
      if (hash) {
        const el = document.getElementById(hash.replace("#", ""));
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, [useLocation()]);
  const values = [
    { title: "Aviso de Convocação", description: " Anúncio das vagas." },
    { title: "Inscrição", description: " Pelo sistema SisCant, com dados pessoais" },
    { title: "Verificação de Documentos", description: "Entrega presencial de documentos obrigatórios e complementares." },
    { title: "Entrevista ou Prova Técnica", description: " Avaliação de conhecimentos, comunicação e postura" },
    { title: "Inspeção de Saúde", description: " Exame médico completo." },
    { title: "Exame de Aptidão Física", description: " Avalia o condicionamento físico(flexão, abdominal,corrida)" },
  ];

  const paragraphs = [
    `O ingresso na área administrativa do CMSE ocorre como militar temporário através de um processo seletivo simplificado. As vagas são divulgadas anualmente para Sargento Técnico Temporário (STT) (exige formação técnica e ensino médio) e Oficial Técnico Temporário (OTT) (exige nível superior na área). As etapas do processo seletivo são bem semelhantes e incluem:`,

    `O processo é muito bem estruturado, rígido e organizado, podendo levar de quatro a seis meses para ser concluído. Após a aprovação, os novos militares passam por um treinamento obrigatório de até 50 dias para adaptar seus conhecimentos ao ambiente e às normas militares. 92% dos pesquisados têm formação em administração, e 8% em informática, indicando que outros cursos podem ser aceitos dependendo do edital. Metade dos respondentes atua como STT e a outra metade como OTT, podendo permanecer no posto por no máximo oito anos. A maioria dos entrevistados percebe que a seleção detalhada e extensa (até seis meses) exige o desenvolvimento de competências como comprometimento, paciência e meticulosidade. Qualquer deslize durante as fases pode levar à desclassificação, reforçando a necessidade de ser paciente e detalhista.`,
  ];

  return (
    <section
      id="SetorAdmSection"
      className="py-20 bg-gradient-to-b from-muted to-muted"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Como ingressar no Setor Administrativo do CMSE
          </h2>


         
          <div className="text-muted-foreground mb-8 text-lg text-justify max-w-3xl mx-auto space-y-6">
            <FadeInParagraph index={0}>
              {paragraphs[0]}
            </FadeInParagraph>
          </div>

  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto my-16">
            {values.map((value, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 group text-center"
              >
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

    
          <div className="text-muted-foreground mb-4 text-lg text-justify max-w-3xl mx-auto space-y-6">
            <FadeInParagraph index={1}>
              {paragraphs[1]}
            </FadeInParagraph>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SetorAdmSection;
