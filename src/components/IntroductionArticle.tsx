import FadeInParagraph from "./FadeInParagraph.jsx";

function IntroductionArticle() {
  const paragraphs = [
    `O militar do exército é o profissional que tem a função de proteger o
    país de ameaças internas ou externas, dessa maneira promovendo e
    mantendo a paz. Para isso, é submetido a um treinamento intenso que
    irá prepará-lo para as mais diversas situações e como agir diante das
    mesmas. É enviado para missões e operações, cada uma com seus
    objetivos específicos e grau de dificuldade que fará com que esse
    profissional desenvolva as competências necessárias para exercer a sua
    atividade.`,
    
    `De acordo com o que está descrito no Estatuto dos Militares Lei Nº
    6.880, de 9 de dezembro de 1980 Artigo 2`,
    
    `“As Forças Armadas, essenciais à execução da política de segurança
    nacional, são constituídas pela Marinha, pelo Exército e pela
    Aeronáutica, e destinam-se a defender a Pátria e a garantir os poderes
    constituídos, a lei e a ordem. São instituições nacionais, permanentes
    e regulares, organizadas com base na hierarquia e na disciplina, sob a
    autoridade suprema do Presidente da República e dentro dos limites da
    lei.”`,
    
    `É uma carreira exercida após o ingresso por alistamento ou concurso
    público, apenas por aqueles que estão na ativa e obedecendo os graus
    hierárquicos e que no caso desse estudo o foco é o Exército, conhecido
    como a Força Terrestre nacional.`,
    
    `Paralelamente, em conformidade com o CBO (Classificação Brasileira de
    Ocupações) o profissional formado em administração tem como função
    fazer o planejamento organizacional, controlam, assessoram e organizam
    as áreas de tecnologia, financeira, de recursos humanos, materiais,
    patrimônio, podem também controlar o desempenho organizacional e
    muitas outras atividades que farão com que que as funções
    administrativas sejam devidamente executadas.`,
    
    `A Pesquisa tem como objetivo entender como funciona o setor
    administrativo do Comando Militar do Sudeste – II exército (CMSE) e
    responder as perguntas que estão no início do site. Para isso foi
    necessário consultar Sargentos e Oficiais Técnicos Temporários (STT E
    OTT) em administração para entender onde esses dois tópicos se
    interseccionam e como as organizações militares executam as suas
    atividades administrativas.`,
  ];

  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <h1 className="text-3xl font-bold text-foreground mb-4 text-center">
        Introdução
      </h1>

      <div className="text-muted-foreground mb-4 text-lg text-justify max-w-3xl mx-auto space-y-6">
        {paragraphs.map((text, i) => (
          <FadeInParagraph key={i} index={i}>
            {text}
          </FadeInParagraph>
        ))}
      </div>
    </div>
  );
}

export default IntroductionArticle;
