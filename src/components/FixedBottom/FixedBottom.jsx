import { useState, useEffect, useRef } from 'react';
import './FixedBottom.css';

function FixedBottom() {
  const fixedBarRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScrollReveal = () => {
      const scrolled = window.scrollY || window.pageYOffset;
      const threshold = Math.round(window.innerHeight * 0.5);
      
      if (scrolled > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Инициализация при монтировании
    onScrollReveal();
    
    // Добавляем обработчик скролла
    window.addEventListener('scroll', onScrollReveal, { passive: true });
    
    // Очистка при размонтировании
    return () => {
      window.removeEventListener('scroll', onScrollReveal);
    };
  }, []);

  return (
    <div 
      className="fixed_bottom" 
      ref={fixedBarRef}
      style={{
        transform: isVisible ? 'translateY(0px)' : 'translateY(100%)',
        opacity: isVisible ? '1' : '0'
      }}
    >
      <div className="container flex">
        <a href="/start" className="btn btn_1 btn_fixed">Get Bonus</a>
      </div>
    </div>
  );
}

export default FixedBottom;