import './LogosGrid.css';
 import { getImage } from '../../utils/utils';
 import React from 'react';
import TextSection from '../TextSection/TextSection.jsx';


function LogosGrid ({elements, id}) {
  const textElements = elements?.filter(el => el.type !== 'component');

  const providersComponent = elements?.find(el => el.source === 'providers-logos');
  const providersData = providersComponent?.data || [];
 


   return (
 <section
            id={id}
            className="anchorSection gameProviders section_text"
          >
            <div className="container">
              <div className="div_pic flex">
                <div>
                   <TextSection elements={textElements} isSimple={true} />
                </div>
                <div className="pic_block">
                  <div className="game_providers_grid">

 { 
  providersData.map((logo)=> {   
    const imageData = getImage(logo.src);             
   return(       
                        <img
                      src={imageData?.src}
                      alt={imageData?.alt || "Casino Provider"}
                      loading="lazy"
                      decoding="async"
                      key={logo.id} />  )
                     
})
                
          }

                     
                  </div>
                </div>
              </div>
            </div>
          </section>
   )
}

export default LogosGrid;