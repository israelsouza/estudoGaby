import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function HistorySection() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <section id="history-section">
      <div  className="py-20">
        <h3 className="text-3xl font-bold text-foreground mb-4 text-center">
          Você sabia?
        </h3>
        <p className="text-muted-foreground max-w-3xl mx-auto text-justify">
          O militar do exército é o profissional que tem a função de proteger o
          país de ameaças internas ou externas, dessa maneira promovendo e
          mantendo a paz. Para isso, é submetido a um treinamento intenso que
          irá prepará-lo para as mais diversas situações e como agir diante das
          mesmas. É enviado para missões e operações, cada uma com seus
          objetivos específicos e grau de dificuldade que fará com que esse
          profissional desenvolva as competências necessárias para exercer a sua
          atividade.
        </p>
      </div>
    </section>
  );
}

export default HistorySection;
