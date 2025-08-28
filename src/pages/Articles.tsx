import AnalyticsArticle from "@/components/AnalyticsArticle";
import Comportamental from "@/components/Comportamental";
import HeaderArticles from "@/components/HeaderArticles";
import IntroductionArticle from "@/components/IntroductionArticle";

const Articles = () => {
  return <div className="min-h-screen">
    <HeaderArticles />
    <IntroductionArticle />
    <AnalyticsArticle />
    <Comportamental />
  </div>;
};

export default Articles;
