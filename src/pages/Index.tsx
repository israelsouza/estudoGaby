import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ValuesSection from "@/components/ValuesSection";
import QuizSection from "@/components/QuizSection";
import HistorySection from "@/components/HistorySection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <HistorySection />
      <ValuesSection />
      <QuizSection />
    </div>
  );
};

export default Index;
