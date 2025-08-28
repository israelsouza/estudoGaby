import { Card, CardContent } from "@/components/ui/card";

const SetorAdmSection = () => {
  const values = [
    {
      title: "Aviso de Convocação",
      description: " Anúncio das vagas.",
      color: "bg-primary/10 text-primary",
    },
    {
      title: "Inscrição",
      description: " Pelo sistema SisCant, com dados pessoais",
      color: "bg-accent/10 text-accent",
    },
    {
      title:"Verificação de Documentos",
      description: "Entrega presencial de documentos obrigatórios e complementares.",
      color: "bg-military-green/10 text-military-green",
    },
    {
      title:"Entrevista ou Prova Técnica",
      description: " Avaliação de conhecimentos, comunicação e postura",
      color: "bg-primary/10 text-primary",
    },
    {
      title: "Inspeção de Saúde",
      description: " Exame médico completo.",
      color: "bg-accent/10 text-accent",
    },
    {
      title:"Exame de Aptidão Física",
      description: " Avalia o condicionamento físico(flexão, abdominal,corrida)", 
      color: "bg-military-green/10 text-military-green",
    },
  ];

  return (
    <section
      id="SetorAdmSection"
      className="py-20 bg-gradient-to-b from-background to-muted"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Como ingressar no Setor Administrativo do CMSE
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-justify">
            O ingresso na área administrativa do CMSE ocorre como militar
            temporário através de um processo seletivo simplificado. As vagas
            são divulgadas anualmente para Sargento Técnico Temporário (STT)
            (exige formação técnica e ensino médio) e Oficial Técnico Temporário
            (OTT) (exige nível superior na área). As etapas do processo seletivo
            são bem semelhantes e incluem:
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 group"
                >
                  <CardContent className="pt-6">
                   
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
            O processo é muito bem estruturado, rígido e organizado, podendo
            levar de quatro a seis meses para ser concluído. Após a aprovação,
            os novos militares passam por um treinamento obrigatório de até 50
            dias para adaptar seus conhecimentos ao ambiente e às normas
            militares. 92% dos pesquisados têm formação em administração, e 8%
            em informática, indicando que outros cursos podem ser aceitos
            dependendo do edital. Metade dos respondentes atua como STT e a
            outra metade como OTT, podendo permanecer no posto por no máximo
            oito anos. A maioria dos entrevistados percebe que a seleção
            detalhada e extensa (até seis meses) exige o desenvolvimento de
            competências como comprometimento, paciência e meticulosidade.
            Qualquer deslize durante as fases pode levar à desclassificação,
            reforçando a necessidade de ser paciente e detalhista.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SetorAdmSection;
