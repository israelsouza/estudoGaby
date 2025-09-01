import { Card, CardContent } from "./ui/card";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import FadeInParagraph from "./FadeInParagraph.jsx";

function ProcessosInternosSection() {
  const paragraphs = [

        `A administração militar é caracterizada por princípios constitucionais, regulamentos e legislações próprias, sendo similar a outras organizações públicas, mas diferenciada das civis. O setor administrativo é uma "peça-chave" que conecta as várias áreas da Força Terrestre.`,
    
    `As principais atribuições do setor administrativo no CMSE incluem: ◦ Administração documental e arquivística (protocolos, arquivamento). ◦ Gestão financeira e orçamentária (orçamentos, execução, prestação de contas). ◦ Gestão de recursos materiais e patrimoniais (aquisições, licitações, controle de estoque). ◦ Gestão de recursos humanos (folha de pagamento, promoções, recrutamento e seleção, treinamento). ◦ Outras funções como gerenciamento de comunicação, segurança no trabalho, apoio logístico e organização de eventos.`,

    `O setor administrativo garante a comunicação constante e a eficiência operacional dialogando e compartilhando informações com outras seções como Logística, Pessoal, Inteligência e Finanças. Os processos de gestão são estruturados, padronizados e seguem um padrão claro para garantir eficiência e controle. Isso inclui planejamento, execução, monitoramento e ajuste contínuo.`,

    `Os critérios de gestão envolvem hierarquia e cadeia de comando, padronização (uso de modelos oficiais), controle e rastreabilidade, busca por eficiência e agilidade, e confidencialidade e segurança da informação.`,

    `O estudo identificou as cinco facetas que compõem os processos internos do setor administrativo, sendo elas principais atribuições, formação em RH pode atuar no setor administrativo, eficiência operacional com outras repartições, processos de gestão e desafios, elementos essenciais para o funcionamento compreender CMSE. A necessidade de diálogo e compartilhamento de informações com outras repartições é crucial para a eficiência operacional e a visão holística das atividades.`,

    `Os principais desafios enfrentados no cotidiano das operações internas, relatados pelos STT e OTT, são: ◦ Dificuldade para integrar novas tecnologias ao sistema tradicional militar. ◦ Quantidade exacerbada de demandas administrativas, sobrecarregando os profissionais. ◦ Manter a saúde e o bem-estar, equilibrando a vida pessoal. ◦ Déficit e alta rotatividade de profissionais. ◦ Recursos orçamentários baixos ou imprevisíveis. ◦ Burocracia que dificulta processos mais ágeis.`,

    `Esses desafios são considerados pontos de melhoria que, se não forem analisados e corrigidos, podem gerar problemas graves no futuro. O estudo reforça que mais pesquisas podem modificar essa realidade por meio de soluções bem implementadas. Agora que você já leu na integra as informações desse setor, responda as perguntas abaixo para fixar os seus conhecimentos. Releia e responda quantas vez forem necessárias para fixar muito bem os conteúdos recém aprendidos.`,


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

          <div className="text-lg text-muted-foreground max-w-3xl mx-auto text-justify pt-10 space-y-6">
            {paragraphs.map((text, i) => (
              <FadeInParagraph key={i} index={i}>
                {text}
              </FadeInParagraph>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessosInternosSection;
