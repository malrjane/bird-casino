 import Hero from "../components/Hero/Hero";
import Aside from "../components/Aside/Aside";
import ArticlesSection from "../components/ArticlesSection/ArticlesSection";
import BonusOverview from "../components/BonusOverview/BonusOverview";
import FaqSection from "../components/FaqSection/FaqSection";
import GridTextCards from "../components/GridTextCards/GridTextCards";
import HalfText from "../components/HalfText/HalfText";
import ImgText2col from "../components/ImgText2col/ImgText2col";
import LogosGrid from '../components/LogosGrid/LogosGrid';
import ProsCons from "../components/ProsCons/ProsCons";
import SlideSection from "../components/SlideSection/SlideSection";
import Text3Col from "../components/Text3Col/Text3Col";
import FixedBottom from "../components/FixedBottom/FixedBottom";

 

function Homepage () {
   return (
    <> 
  

 <div className="div_block flex">
        <Aside/>
        <div className="div_article">
         <Hero/>
        <SlideSection/>
        <HalfText/>
        
       <GridTextCards/>
       <Text3Col/>
         <ImgText2col/>
        <LogosGrid/>
         <FaqSection/>
        <BonusOverview/>
        <ProsCons/>
      <ArticlesSection/>
        </div>
      </div>

           <FixedBottom/>

     </>

    )
}

export default Homepage;