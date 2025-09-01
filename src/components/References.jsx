import { Card, CardContent } from "./ui/card";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import FadeInParagraph from "./FadeInParagraph.jsx";

function References() {
  const paragraphs = [
    ` BERNARDES SUDA, Paula Massako; TREVISAN, Leonardo Nelmi; ROSA VELOSO, Elza Fátima. Principais debates acadêmicos sobre people analytics. Gestão & Planejamento-G&P, v. 23, n. 1, 2022. Disponível em: https://revistas.unifacs.br/index.php/rgb/article/view/7195 Acesso em: 20 jan. 2025. `,


    `Estatuto dos Militares. Disponível em: https://www.planalto.gov.br/ccivil_03/leis/l6880compilada.htm  Acesso em: 20 jan. 2025.`,
    

    `FRANÇA, F. G.; DUARTE, A. Soldados Não Choram? Reflexões Sobre Direitos Humanos e Vitimização Policial Militar. Revista do Laboratório de Estudos da Violência da UNESP, Marília, v. 19, n. 19, p. 1 – 22, jun 2017 Disponível em: https://www.academia.edu/download/60152436/REFLEXOES_SOBRE_DIREITOS_HUMANOS_E_VITIMIZACAO_POLICIAL_MILITAR20190729-72671-pverrs.pdf Acesso em: 09 dez. 2024. `,

    `GIL, A.C.; Como Elaborar Projetos de Pesquisa, 7. Ed. São Paulo: Gen/Atlas, 2021. Acesso em 25 ago. 2025. `,

    `MELO, Diego Franklin Tolentino; SOUSA, Dayane Rouse Neves; MELO, Nícollas Emanuel Tolentino. Metodologia DISC: tendências comportamentais no ambiente de trabalho. RECIMA21-Revista Científica Multidisciplinar-ISSN 2675-6218, v. 4, n. 11, p. e4114466-e4114466, 2023. Disponível em: https://recima21.com.br/index.php/recima21/article/view/4466 Acesso em: 25 ago. 2025. `,

    `MOREIRA, T. S. V. O impacto do estresse ocupacional e Síndrome de Burnout entre militares do Exército Brasileiro. EsSEx: Revista Científica, v. 2, n. 3, p. 29-35, 2019. Disponível em: https://ebrevistas.eb.mil.br/RCEsSEx/article/view/3208 Acesso em: 09 dez. 2024. `,

    `Processo seletivo dos militares. Disponível em : https://2rm.eb.mil.br/index.php?view=article&id=147:processo-de-selecao-de-sargento-tecnico-temporario-tecnico-em-administracao-2025&catid=33 Acesso em: 25 ago. 2025.`,

    `SIMOES, KATIA REGINA SOUZA; PRADO, M. B. S. M.; RAMOS, S. C. People analytics: uma revisão sistemática de literatura. In: IX Encontro de Administração Pública das ANPAD VI Congresso Lusófono de Gestão de Recursos Humanos e Administração Pública. 2022. Disponível em: https://anpad.com.br/uploads/articles/119/approved/8c26d2fad09dc76f3ff36b6ea752b0e1.pdf Acesso em: 18 dez. 2024. `,

    `SCHMITT, V. G. H.; COSTA R. P.; MORETTO NETO, L. Desvendando a administração em ambientes militares. Coleção Meira Mattos, revista das ciências militares, nº 27, 3º quadrimestre 2012. Rio de Janeiro: ECEME, 2012. Disponível em: https://www.researchgate.net/publication/270898269_Desvendando_a_administracao_em_ambientes_militares Acesso em. 23 ago. 2025. `,

    `SILVA, A. DE O. E; LUKOSEVICIUS, A. P.; MARCHISOTTI, G. G. O gerenciamento de projetos e o planejamento de operações de guerra do exército brasileiro: pontos de contato, divergências e contribuições recíprocas. Coleção Meira Mattos: revista das ciências militares, v. 10, n. 37, p. 17-35, 19 jul. 2016. Disponível em: https://ebrevistas.eb.mil.br/RMM/article/view/544/632 Acesso em: 23 ago. 2025. `,

    `CBO de Administrador 2521-05. Disponível em: http://www.mtecbo.gov.br/cbosite/pages/pesquisas/BuscaPorTituloResultado.jsf Acesso em: 23 ago. 2025`,

    ``,
  ];

  return (
<section id="References" className="py-16 bg-white">
  <div className="max-w-5xl mx-auto px-6">
    <h2 className="text-2xl md:text-3xl font-bold text-green-800 border-b-2 border-green-600 pb-4 mb-8">
      Referências
    </h2>

    <ol className="space-y-4 text-sm text-gray-700 list-decimal list-inside">
      {paragraphs.map((ref, i) => {
        // Regex para detectar links
        const parts = ref.split(
          /(https?:\/\/[^\s]+)/
        );

        return (
          <FadeInParagraph key={i} index={i}>
            <li className="pl-4 border-l-4 border-green-600 bg-gray-50 rounded-lg p-3 hover:bg-green-50 transition">
              {parts.map((part, j) =>
                part.match(/^https?:\/\//) ? (
                  <a
                    key={j}
                    href={part}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-700 font-semibold hover:text-green-900 hover:underline"
                  >
                    {part}
                  </a>
                ) : (
                  part
                )
              )}
            </li>
          </FadeInParagraph>
        );
      })}
    </ol>
  </div>
</section>

  );
}

export default References;
