import './ImgText2col.css';
 import { getImage } from '../../utils/utils';
 import React from 'react';
import TextSection from '../TextSection/TextSection.jsx';
import Button from '../Button/Button.jsx';

function ImgText2col ({elements, id, direction, hasBtn}) {
  const imageElement = elements?.find(el => el.type === 'image');
const textElements = elements?.filter(el => el.type !== 'image');
const btnComponent = elements?.find(el => el.source === 'bonus-btn');
  const btnText = btnComponent?.btnText;
 const imageData = imageElement ? getImage(imageElement.src) : null;
    return (
        <section id={id} className="anchorSection freeSpins section_text">
             <div className="container">
  
                    <div className={`div_pic flex ${direction === "reverse"  ? "row-reverse" : ""}`}>
               <div className="text_block">
            <TextSection elements={textElements} isSimple={true} />
          </div>

          {imageElement && (
                <div className="pic_block">
                  <img
                    src={imageData?.src}
                    alt={imageData?.alt || imageElement.alt || ""}
                    loading="lazy"
                    decoding="async"
                  />

                  {hasBtn && <Button btnText={btnText}/>}
                </div>
          )}
              </div>
               
               
            </div>
           </section>
   )
}

export default ImgText2col;