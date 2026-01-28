 import Hero from "../components/Hero/Hero";
 import ArticlesSection from "../components/ArticlesSection/ArticlesSection";
import BonusOverview from "../components/BonusOverview/BonusOverview";
import FaqSection from "../components/FaqSection/FaqSection";
 import TextSection from "../components/TextSection/TextSection";
import ImgText2col from "../components/ImgText2col/ImgText2col";
import LogosGrid from '../components/LogosGrid/LogosGrid';
import ProsCons from "../components/ProsCons/ProsCons";
import SlideSection from "../components/SlideSection/SlideSection";
import Text3Col from "../components/Text3Col/Text3Col";

const componentMap = {
   hero: Hero,
   section: SlideSection,
   sectionText: TextSection,
   TextSection: TextSection,
   gridCards: TextSection,
   cta: Hero,
   text3col: Text3Col,
   imgText: ImgText2col,
   gridCards2:TextSection,
   providers: LogosGrid,
   imgTextBtn: ImgText2col,
   faq: FaqSection,
   bonusOverview: BonusOverview,
   prosCons: ProsCons,
   articles: ArticlesSection
};

export default componentMap;