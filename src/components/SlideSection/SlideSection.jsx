import './SlideSection.css';
import { games } from  '../../data/games.js'
import React, { useRef, useCallback } from 'react';
import { useSlider } from '../../hooks/useSlider.js';
 
   const Slide = React.memo(({ game }) => (
  <div className="simple-slider-slide">
    <div className="slider_item">
 <a className="link_pic"
                          href="/start"
                          aria-label={`Play ${game.name}`}
                          >
                            <img
                            src={game.image}
                            alt={game.alt}
                            loading="lazy"
                            decoding="async" />
                            </a>
                            <a className="btn btn_2"
                          href="/start"
                          aria-label={`Start Playing ${game.name}`}
                          >
                            <span>Play</span>
                            </a>
    </div>
  </div>
));


function SlideSection() {
  const sliderRef = useRef(null);
  
   const {
    currentIndex,
    slidesToShow,
    maxIndex,
    translateX,
    progress,
    goToSlide,
    nextSlide,
    prevSlide,
    isAutoPlaying,
    setIsAutoPlaying,
    pauseOnHover,
    showProgress = true,   
    showDots = true        
  } = useSlider(games, {
    autoplay: true,
    slidesToScroll: 1,
    showProgress: true,
    showDots: true
  });

   const handleMouseEnter = useCallback(() => {
    if (pauseOnHover && isAutoPlaying) {
      setIsAutoPlaying(false);
    }
  }, [pauseOnHover, isAutoPlaying, setIsAutoPlaying]);

  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover && !isAutoPlaying) {
      setIsAutoPlaying(true);
    }
  }, [pauseOnHover, isAutoPlaying, setIsAutoPlaying]);
   return (
       <section
            id="aboutProject"
            className="anchorSection aboutProject section_top"
          >
            <div className="container">
              <div className="top_title">
                <h1>BirdSpin Casino Player Reviews Hub</h1>
                <p>
                  Players at BirdSpin Casino share upbeat stories about
                  unlocking the 100 percent welcome boost, spinning through
                  15000 slots, and enjoying daily tournaments. This BirdSpin
                  casino review lounge highlights verified opinions about fast
                  payouts, friendly support, and the 7 percent VIP cashback.
                  Discover how BirdSpin keeps the vibe heroic while staying fair
                  and secure
                </p>
              </div>
              <div className="simple-slider"
              ref={sliderRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          tabIndex={0} >
                <div className="simple-slider-wrapper">
                  <div
                    className="simple-slider-container"
                    style={{transform: `translateX(${translateX}%)`}}
                  >

                     {games.map((game) => (
                       
                <Slide key={game.id} game={game} />

                     ))}
                   
                  </div>
                  <button
                    className="simple-slider-nav simple-slider-prev"
                    aria-label="Previous slide"
                    onClick={prevSlide}
                    style={{opacity: 1}}
                  >
                    ‹</button
                  ><button
                    className="simple-slider-nav simple-slider-next"
                    aria-label="Next slide"
                    onClick={nextSlide}
                    style={{opacity: 1}}
                  >
                    ›
                  </button>
                   {showProgress && (
              <div 
                className="simple-slider-progress"
                style={{ 
                  width: `${progress}%`,
                  transition: progress > 0 ? 'width 0.05s linear' : 'none'
                }}
              ></div>
            )}
                 

                   {showDots && maxIndex > 0 && (
              <div className="simple-slider-dots">
                {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                  <button
                    key={index}
                    className={`simple-slider-dot ${index === currentIndex ? 'active' : ''}`}
                    data-slide={index}
                    aria-label={`Go to slide ${index + 1}`}
                    onClick={() => goToSlide(index)}
                  ></button>
                ))}
              </div>
            )}
                
                </div>
              </div>
            </div>
          </section>
   )
}

export default  SlideSection;