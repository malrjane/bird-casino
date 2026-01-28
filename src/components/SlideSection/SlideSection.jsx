import './SlideSection.css';
import React, { useRef, useCallback } from 'react';
import { useSlider } from '../../hooks/useSlider.js';
import TextSection from '../TextSection/TextSection.jsx';
import Button from '../Button/Button.jsx';
import { getImage } from '../../utils/utils';

const Slide = React.memo(({ game }) => {
const imageData = getImage(game.image);

return (
    <div className="simple-slider-slide">
      <div className="slider_item">
        <a className="link_pic" href="/start">
          <img
            src={imageData?.src}
            alt={imageData?.alt || game.name}
            loading="lazy"
          />
        </a>
        <Button btnText='Play' />
      </div>
    </div>
  );
});

function SlideSection({ elements, id }) {
  const sliderRef = useRef(null);
   const sliderComponent = elements?.find(el => el.type === 'component' && el.source === 'slot-slider');
  
   const sliderData = sliderComponent?.data || [];
   const {
    currentIndex,
    translateX,
    progress,
    goToSlide,
    nextSlide,
    prevSlide,
    maxIndex
  } = useSlider(sliderData, {
    autoplay: true,
    slidesToScroll: 1
  });

  return (
    <section id={id} className="anchorSection aboutProject section_top">
      <div className="container">
         <TextSection elements={elements?.filter(el => el.type !== 'component')} isSimple={true} />

         {sliderData.length > 0 && (
          <div className="simple-slider" ref={sliderRef}>
            <div className="simple-slider-wrapper">
              <div
                className="simple-slider-container"
                style={{ 
                  display: 'flex', 
                  transform: `translateX(${translateX}%)`,
                  transition: 'transform 0.5s ease' 
                }}
              >
                {sliderData.map((game) => (
                  <Slide key={game.id} game={game} />
                ))}
              </div>

              <button className="simple-slider-nav simple-slider-prev" onClick={prevSlide}>‹</button>
              <button className="simple-slider-nav simple-slider-next" onClick={nextSlide}>›</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default SlideSection;