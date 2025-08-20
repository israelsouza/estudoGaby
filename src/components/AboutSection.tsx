import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Users, Award } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Defesa Nacional",
      description: "Proteção da soberania e integridade territorial do Brasil, garantindo a segurança da nação."
    },
    {
      icon: Target,
      title: "Missão Estratégica",
      description: "Preparação e emprego do poder militar terrestre para defesa da pátria e garantia dos poderes constitucionais."
    },
    {
      icon: Users,
      title: "Desenvolvimento Social",
      description: "Contribuição para o desenvolvimento nacional e participação em missões de paz internacionais."
    },
    {
      icon: Award,
      title: "Excelência Operacional",
      description: "Formação de profissionais qualificados e modernização constante das capacidades militares."
    }
  ];

  return (
    <section id="about-section" className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sobre o Exército Brasileiro
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            O Exército Brasileiro é uma das três Forças Armadas do Brasil, responsável pela defesa terrestre do país 
            e por diversas ações que contribuem para o desenvolvimento nacional e a segurança da população.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;