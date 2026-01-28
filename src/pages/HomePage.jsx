 import Aside from "../components/Aside/Aside"; 
import FixedBottom from "../components/FixedBottom/FixedBottom";
import homeData from '../json/home.json';
import componentMap from '../utils/homeBlocks'

 

function Homepage () {
   return (
    <> 
  

 <div className="div_block flex container">
        <Aside/>
        <div className="div_article">
    {homeData.blocks.map((block, index) => {
             const Component = componentMap[block.blockType];

             if (Component) {
              return (
                <Component 
                  key={block.id || index} 
                  elements={block.elements} 
                   {...block} 
                />
              );
            }


return null;
          })}

 
        </div>
      </div>

           <FixedBottom/>

     </>

    )
}

export default Homepage;