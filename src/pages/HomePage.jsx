 import Aside from "../components/Aside/Aside"; 
import FixedBottom from "../components/FixedBottom/FixedBottom";
import homeData from '../json/home.json';
 import Parcer from "../components/Parcer/Parcer";
 

function Homepage () {
   if (!homeData || !homeData.blocks || Object.keys(homeData).length === 0) 
   { return <h1>No objects found</h1>;}
   
   return (
    <> 
 <div className="div_block flex container">
        <Aside/>
        <div className="div_article">
        <Parcer   blocks={homeData.blocks} />
        </div>
      </div>
        <FixedBottom/>
     </>
    )
}

export default Homepage;



  