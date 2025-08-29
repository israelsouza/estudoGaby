import FadeInParagraph from "./FadeInParagraph";

function Comportamental() {
  const paragraphs = [
    ` A carreira militar expõe o indivíduo a situações constantes de estresse,
     ansiedade e pressão, exigindo preparo físico e mental resiliente. O desgaste 
     pode gerar o Estresse Ocupacional, um distúrbio causado pela falta de habilidades 
     para enfrentar a deterioração da função.`,

    ` Fatores como carga pesada de trabalho, estresse constante, pressão e
          rigidez, falta de qualidade de vida e mal treinamento são os
          principais causadores. Este estresse pode levar à exaustão e
          dificuldades de autorregulação do organismo. A profissão também possui
          um elevado risco de vida dependendo da ocupação, exigindo preparo
          físico constante e treinamento específico para combate.`,

    ` Sendo assim pessoas naturalmente ambiciosas, com foco em resultados,
          disciplina, iniciativa e competitividade tendem a exercer a profissão
          com mais tranquilidade e eficiência.`,

    `  83% dos respondentes afirmam que a carga pesada de trabalho, constante
          exposição a estresse, pressão e rigidez interfere no comportamento dos
          militares tanto emocional quanto profissionalmente, causando desgaste
          emocional, mudanças de humor e queda de desempenho. Para lidar com
          esses sintomas, o espírito de equipe, o treinamento militar e a
          cultura organizacional oferecem suporte, como treinamentos contínuos e
          apoio entre colegas.`,
    `  75% dos pesquisados concordam que características como ambição, foco
          em resultados, disciplina, iniciativa e competitividade são
          facilitadoras para o cargo administrativo, pois se alinham com o
          ambiente militar que valoriza ordem, metas e superação. No entanto, o
          estudo também ressalta a importância de empatia, resiliência, trabalho
          em equipe e camaradagem para manter o equilíbrio e o bom funcionamento
          do setor.`,

    ` Programas de bem-estar, saúde mental e física, como apoio psicológico,
          exames periódicos e atividades físicas, são considerados importantes
          para promover um profissional mais saudável. Há também um esforço para
          promover a inclusão, principalmente de gênero, com aumento do número
          de mulheres e políticas de igualdade.`,
  ];

  return (
    <section>
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground mb-4 text-center">
          Perfil Comportamental dos Militares do CMSE
        </h2>
        <div className="text-muted-foreground mb-4 text-lg text-justify text-muted-foreground max-w-3xl mx-auto">
          <div>
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

export default Comportamental;
