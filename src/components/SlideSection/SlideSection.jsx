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
  
  // Извлекаем данные слайдера из elements
  const sliderComponent = elements?.find(el => el.type === 'component' && el.source === 'slot-slider');
  const sliderData = sliderComponent?.data || [];

  const {
    currentIndex,
    translateX,
    progress,
    goToSlide,
    nextSlide,
    prevSlide,
    maxIndex,
    isAutoPlaying,
    setIsAutoPlaying,
    pauseOnHover,
    // Вытаскиваем настройки отображения, если они есть в хуке
    showProgress = true,
    showDots = true
  } = useSlider(sliderData, {
    autoplay: true,
    slidesToScroll: 1,
    showProgress: true,
    showDots: true
  });

  // Обработчики паузы при наведении (как в старом коде)
  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover && isAutoPlaying) setIsAutoPlaying(false);
  }, [pauseOnHover, isAutoPlaying, setIsAutoPlaying]);

  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover && !isAutoPlaying) setIsAutoPlaying(true);
  }, [pauseOnHover, isAutoPlaying, setIsAutoPlaying]);

  return (
    <section id={id} className="anchorSection aboutProject section_top">
      <div className="container">
        {/* Заголовок и текст */}
        <TextSection elements={elements?.filter(el => el.type !== 'component')} isSimple={true} />

        {sliderData.length > 0 && (
          <div 
            className="simple-slider" 
            ref={sliderRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="simple-slider-wrapper">
              <div
                className="simple-slider-container"
                style={{ 
                  display: 'flex', 
                  transform: `translateX(${translateX}%)`,
                  transition: 'transform 0.5s ease' 
                }}
              >
                {sliderData.map((game, index) => (
                  <Slide key={game.id || index} game={game} />
                ))}
              </div>

              {/* Навигация */}
              <button className="simple-slider-nav simple-slider-prev" onClick={prevSlide}>‹</button>
              <button className="simple-slider-nav simple-slider-next" onClick={nextSlide}>›</button>

              {/* ТОТ САМЫЙ ПРОГРЕСС-БАР */}
              {showProgress && (
                <div 
                  className="simple-slider-progress"
                  style={{ 
                    width: `${progress}%`,
                    transition: progress > 0 ? 'width 0.05s linear' : 'none'
                  }}
                ></div>
              )}

              {/* ТЕ САМЫЕ ТОЧКИ */}
              {showDots && maxIndex > 0 && (
                <div className="simple-slider-dots">
                  {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                    <button
                      key={index}
                      className={`simple-slider-dot ${index === currentIndex ? 'active' : ''}`}
                      onClick={() => goToSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    ></button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default SlideSection;