 import './Hero.css';
import { getImage } from '../../utils/utils';
import Button from '../Button/Button';
 
function Hero({ elements }) {
 
  const imageData = elements.find(el => el.type === 'image');
  const { src } = imageData ? getImage(imageData.src) : { src: '' };

  

  return (
    <section className="section_image"  style={{ 
        backgroundImage: src ? `linear-gradient(45deg, rgb(7 34 70 / 66%) 50%, transparent), url(${src})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
       {/* {elements.map((el, index) => {
        if (el.type === 'image') {
          const { src, alt } = getImage(el.src);  
          return (
            <img 
              fetchPriority="high" 
              key={index} 
              src={src} 
              alt={alt} 
              className="bg_mobile" 
            />
          );
        }
        return null;
      })} */}

      <div className="top_button">
        {/* Отрисовка текстового контента и кнопок */}
        {elements.map((el, index) => {
          switch (el.type) {
            case 'span':
              return <span key={index} className="span_bonus">{el.text}</span>;
            case 'h6':
              return <h6 key={index}>{el.text}</h6>;
            case 'button':
              return <Button key={index} btnText={el.text} />;
            default:
              return null;
          }
        })}
      </div>
    </section>
  );
}

export default Hero;