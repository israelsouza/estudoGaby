function HistorySection() {
  return (
    <section id="history-section">
      <div className="p-8">
        <div>
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-4 text-center">
              Você sabia?
            </h3>
            <p className="text-muted-foreground mb-4">
            O militar do exército é o profissional que tem a função de proteger o país de ameaças internas ou externas, 
            dessa maneira promovendo e mantendo a paz. Para isso, é submetido a um treinamento intenso que irá prepará-lo
             para as mais diversas situações e como agir diante das mesmas.
             É enviado para missões e operações, cada uma com seus objetivos específicos e grau de dificuldade que fará com 
               que esse profissional desenvolva as competências necessárias para exercer a sua atividade. 
            </p>
            <p className="text-muted-foreground">
              A carreira militar expõe o indivíduo a situações constantes de estresse, ansiedade e pressão, exigindo preparo físico e
               mental resiliente. O desgaste pode gerar o Estresse Ocupacional, um distúrbio causado pela falta de habilidades para 
               enfrentar a deterioração da função. 
               
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 text-center pt-8">
            <div className="bg-primary/10 p-4 rounded-lg">
              <div className="text-2xl font-bold text-primary">375+</div>
              <div className="text-sm text-muted-foreground">
                Anos de História
              </div>
            </div>
            <div className="bg-primary/10 p-4 rounded-lg">
              <div className="text-2xl font-bold text-primary">220k+</div>
              <div className="text-sm text-muted-foreground">Militares</div>
            </div>
            <div className="bg-primary/10 p-4 rounded-lg">
              <div className="text-2xl font-bold text-primary">12</div>
              <div className="text-sm text-muted-foreground">
                Comandos Militares
              </div>
            </div>
            <div className="bg-primary/10 p-4 rounded-lg">
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Do Brasil</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HistorySection;
