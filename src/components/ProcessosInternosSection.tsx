import { Card, CardContent } from "./ui/card";

function ProcessosInternosSection() {
  const features = [
    {
      description:
        "Dificuldade para integrar novas tecnologias ao sistema tradicional militar.",
    },
    {
      description:
        "Quantidade exacerbada de demandas administrativas, sobrecarregando os profissionais.",
    },
    {
      description:
        "Manter a saúde e o bem-estar, equilibrando a vida pessoal.",
    },
    {
      description:
        "Déficit e alta rotatividade de profissionais.",
    },
    {
      description:
        "Recursos orçamentários baixos ou imprevisíveis.",
    },
    {
      description:
        "Burocracia que dificulta processos mais ágeis.",
    },
  ];

  const values = [
    {
      title: 'Administração documental e arquivística',
      description:
        "protocolos, arquivamento",
    },
    {
      title: 'Gestão financeira e orçamentária',
      description:
        "orçamentos, execução, prestação de contas",
    },
    {
      title: 'Gestão de recursos materiais e patrimoniais',
      description:
        "aquisições, licitações, controle de estoque",
    },
    {
      title: 'Gestão de recursos humanos',
      description:
        "folha de pagamento, promoções, recrutamento e seleção, treinamento",
    },
  ];

  return (
    <section
      id="ProcessosInternosSection"
      className="py-20 bg-gradient-to-b from-background to-muted"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Processos internos do Setor Administrativo Militar do CMSE
          </h2>
          <p className="text-muted-foreground mb-4 text-lg text-justify text-muted-foreground max-w-3xl mx-auto pt-10">
            A administração militar é caracterizada por princípios
            constitucionais, regulamentos e legislações próprias, sendo similar
            a outras organizações públicas, mas diferenciada das civis. O setor
            administrativo é uma "peça-chave" que conecta as várias áreas da
            Força Terrestre. As principais atribuições do setor administrativo
            no CMSE incluem:
          

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 my-8">
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

            </p>

          <p className="text-muted-foreground mb-4 text-lg text-justify text-muted-foreground max-w-3xl mx-auto">
            O setor administrativo garante a comunicação constante e a
            eficiência operacional dialogando e compartilhando informações com
            outras seções como Logística, Pessoal, Inteligência e Finanças. Os
            processos de gestão são estruturados, padronizados e seguem um
            padrão claro para garantir eficiência e controle. Isso inclui
            planejamento, execução, monitoramento e ajuste contínuo.
          </p>
          <p className="text-muted-foreground mb-4 text-lg text-justify text-muted-foreground max-w-3xl mx-auto">
            Os critérios de gestão envolvem hierarquia e cadeia de comando,
            padronização (uso de modelos oficiais), controle e rastreabilidade,
            busca por eficiência e agilidade, e confidencialidade e segurança da
            informação.
          </p>
          <p className="text-muted-foreground mb-4 text-lg text-justify text-muted-foreground max-w-3xl mx-auto">
            O estudo identificou as cinco facetas que compõem os processos
            internos do setor administrativo, sendo elas principais atribuições,
            formação em RH pode atuar no setor administrativo, eficiência
            operacional com outras repartições, processos de gestão e desafios,
            elementos essenciais para o funcionamento compreender CMSE. A
            necessidade de diálogo e compartilhamento de informações com outras
            repartições é crucial para a eficiência operacional e a visão
            holística das atividades.
          </p>
          <p className="text-muted-foreground mb-4 text-lg text-justify text-muted-foreground max-w-3xl mx-auto">
            Os principais desafios enfrentados no cotidiano das operações
            internas, relatados pelos STT e OTT, são:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow duration-300 flex items-center justify-center"
            >
              <CardContent className="pt-6">
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

          <p className="text-muted-foreground mb-4 text-lg text-justify text-muted-foreground max-w-3xl mx-auto">
            Esses desafios são considerados pontos de melhoria que, se não forem
            analisados e corrigidos, podem gerar problemas graves no futuro. O
            estudo reforça que mais pesquisas podem modificar essa realidade por
            meio de soluções bem implementadas.
          </p>
          <p className="text-muted-foreground mb-4 text-lg text-justify text-muted-foreground max-w-3xl mx-auto">
            Agora que você já leu na integra as informações desse setor,
            responda as perguntas abaixo para fixar os seus conhecimentos.
            Releia e responda quantas vez forem necessárias para fixar muito bem
            os conteúdos recém aprendidos.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProcessosInternosSection;
