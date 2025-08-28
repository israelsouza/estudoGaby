import AnalyticsArticle from "@/components/AnalyticsArticle";
import HeaderArticles from "@/components/HeaderArticles";
import IntroductionArticle from "@/components/IntroductionArticle";

const Articles = () => {
  return <div className="min-h-screen">
    <HeaderArticles />
    <IntroductionArticle />
    <AnalyticsArticle />
  </div>;
};

export default Articles;
