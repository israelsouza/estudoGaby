function HistorySection() {
  return (
    <div className="p-8">
      <div>
        <div>
          <h3 className="text-3xl font-bold text-foreground mb-4 text-center">
            Nossa História
          </h3>
          <p className="text-muted-foreground mb-4">
            Fundado em 1648, o Exército Brasileiro possui uma rica tradição de
            servir ao país. Ao longo dos séculos, participou de importantes
            momentos da história nacional, desde a independência até os dias
            atuais.
          </p>
          <p className="text-muted-foreground">
            Hoje, é uma força moderna e bem equipada, com mais de 220.000
            militares, distribuídos em todo o território nacional, sempre
            prontos para defender o Brasil e contribuir para a paz mundial.
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
  );
}

export default HistorySection;
