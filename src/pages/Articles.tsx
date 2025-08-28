import AnalyticsArticle from "@/components/AnalyticsArticle";
import Comportamental from "@/components/Comportamental";
import HeaderArticles from "@/components/HeaderArticles";
import IntroductionArticle from "@/components/IntroductionArticle";
import SetorAdmSection from "@/components/SetorAdmSection";
import ProcessosInternosSection from "@/components/ProcessosInternosSection";

const Articles = () => {
  return <div className="min-h-screen">
    <HeaderArticles />
    <IntroductionArticle />
    <AnalyticsArticle />
    <Comportamental />
    <SetorAdmSection />
    <ProcessosInternosSection />
  </div>;
};

export default Articles;
