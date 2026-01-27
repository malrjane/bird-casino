import { useEffect } from 'react';
import './Hero.css';
 
function Hero () {
   const heroImage = new URL('../../assets/images/bg_mobile.avif', import.meta.url).href;

   const w_body = () => {
    const w_w = window.innerWidth;
    if (w_w > 1920) {
      const w_b = ((w_w - 1920) / 2) + 1726;
      const sectionImage = document.querySelector('.section_image');
      if (sectionImage) {
        sectionImage.style.width = w_b + 'px';
      }
    }
    else {
      // Сбрасываем ширину если экран меньше 1920px
      const sectionImage = document.querySelector('.section_image');
      if (sectionImage) {
        sectionImage.style.width = '';
      }}
  }
 
 useEffect(() => {
    // Вызываем при монтировании
    w_body();
    
    // Добавляем обработчик resize
    window.addEventListener('resize', w_body);
    
    // Очистка при размонтировании
    return () => {
      window.removeEventListener('resize', w_body);
    };
  }, []);

   return (
      <section className="section_image">
            <img
              fetchPriority="high"
              src={heroImage}
              alt="BirdSpin mobile logo on cosmic background"
              className="bg_mobile"
            />
            <div className="top_button">
              <span className="span_bonus">First Deposit Bonus</span>
              <h6>100% up to 555 EUR with 200 free spins and 3 coins</h6>
              <a href="/start" className="btn btn_2"><span>Get Bonus</span></a>
            </div>
          </section>
   )
}

export default Hero;

   