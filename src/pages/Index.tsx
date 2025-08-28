import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ValuesSection from "@/components/ValuesSection";
import QuizSection from "@/components/QuizSection";
import HistorySection from "@/components/HistorySection";
import Header from "../components/Header";
const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <HistorySection />
      <ValuesSection />
      <QuizSection />
    </div>
  );
};

export default Index;
