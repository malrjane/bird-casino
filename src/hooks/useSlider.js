// useSlider.js
import { useState, useEffect, useCallback, useRef, useMemo } from 'react';

export function useSlider(items = [], options = {}) {
   const {
    autoplay = true,
    autoplaySpeed = 4000,
    infinite = true,
    pauseOnHover = true,
     showProgress = true,
    slidesToScroll = 1,
    initialSlide = 0
  } = options;
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(5);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

   const sliderRef = useRef(null);
  const autoplayTimerRef = useRef(null);
  const progressTimerRef = useRef(null);
  const resizeTimerRef = useRef(null);
 
     const getSlidesToShow = useCallback(() => {
    const width = window.innerWidth;
    
    if (width >= 1440) return 5;
    if (width >= 1024) return 4;
    if (width >= 768) return 3;
    if (width >= 480) return 2;
    return 1;
  }, []);

   const maxIndex = useMemo(() => 
    Math.max(0, items.length - slidesToShow), 
    [items.length, slidesToShow]
  );
  
  const slideWidth = useMemo(() => 
    items.length > 0 ? 100 / slidesToShow : 0, 
    [items.length, slidesToShow]
  );
  
  const translateX = useMemo(() => 
    -(currentIndex * slideWidth), 
    [currentIndex, slideWidth]
  );
     const goToSlide = useCallback((index) => {
    let newIndex;
    
    if (index < 0) {
      newIndex = infinite ? maxIndex : 0;
    } else if (index > maxIndex) {
      newIndex = infinite ? 0 : maxIndex;
    } else {
      newIndex = index;
    }

      setCurrentIndex(newIndex);
    setProgress(0); // Сбрасываем прогресс при смене слайда
  }, [maxIndex, infinite]);

   const nextSlide = useCallback(() => {
    if (currentIndex >= maxIndex) {
      goToSlide(infinite ? 0 : maxIndex);
    } else {
      goToSlide(currentIndex + slidesToScroll);
    }
  }, [currentIndex, maxIndex, infinite, goToSlide, slidesToScroll]);
  
   const prevSlide = useCallback(() => {
    goToSlide(currentIndex - slidesToScroll);
  }, [currentIndex, goToSlide, slidesToScroll]);

    const startAutoplay = useCallback(() => {
    if (!isAutoPlaying) {
      setIsAutoPlaying(true);
    }
  }, [isAutoPlaying]);
  
  const stopAutoplay = useCallback(() => {
    setIsAutoPlaying(false);
  }, []);



   const handleResize = useCallback(() => {
      const newSlidesToShow = getSlidesToShow();
      if (newSlidesToShow !== slidesToShow) {
        setSlidesToShow(newSlidesToShow);
        // Корректируем текущий индекс, если он выходит за границы
        const newMaxIndex = Math.max(0, items.length - newSlidesToShow);
        setCurrentIndex(prev => Math.min(prev, newMaxIndex));
      }
    }, [slidesToShow, getSlidesToShow, items.length]);

      useEffect(() => {
    if (!showProgress || !isAutoPlaying) return;
    
    const step = 100 / (autoplaySpeed / 50);
    
    progressTimerRef.current = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + step;
      });
    }, 50);
    
    return () => {
      if (progressTimerRef.current) {
        clearInterval(progressTimerRef.current);
      }
    };
  }, [isAutoPlaying, showProgress, autoplaySpeed, nextSlide]);
  
   useEffect(() => {
    if (isAutoPlaying) {
      autoplayTimerRef.current = setInterval(() => {
        nextSlide();
      }, autoplaySpeed);
    }
    
    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [isAutoPlaying, nextSlide, autoplaySpeed]);
  
   useEffect(() => {
 const initialSlidesToShow = getSlidesToShow();
    setSlidesToShow(initialSlidesToShow);
    
    
    const handleResizeWithDebounce = () => {
      if (resizeTimerRef.current) {
        clearTimeout(resizeTimerRef.current);
      }
      resizeTimerRef.current = setTimeout(handleResize, 150);
    };
    
    window.addEventListener('resize', handleResizeWithDebounce);
    
    return () => {
      window.removeEventListener('resize', handleResizeWithDebounce);
      if (resizeTimerRef.current) {
        clearTimeout(resizeTimerRef.current);
      }
    };
  }, [getSlidesToShow, handleResize]);
  
   const handleMouseEnter = useCallback(() => {
    if (pauseOnHover && isAutoPlaying) {
      stopAutoplay();
    }
  }, [pauseOnHover, isAutoPlaying, stopAutoplay]);
  
  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover && !isAutoPlaying) {
      startAutoplay();
    }
  }, [pauseOnHover, isAutoPlaying, startAutoplay]);
  
    
    
     
   return {
    // Состояния
    currentIndex,
    slidesToShow,
    isAutoPlaying,
    progress,
    
    // Вычисляемые значения
    maxIndex,
    slideWidth,
    translateX,
    
    // Методы управления
    goToSlide,
    nextSlide,
    prevSlide,
    startAutoplay,
    stopAutoplay,
    
    // Обработчики событий
    handleMouseEnter,
    handleMouseLeave, 
  };
}


 