import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ValuesSection from "@/components/ValuesSection";
import QuizSection from "@/components/QuizSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ValuesSection />
      <QuizSection />
    </div>
  );
};

export default Index;
