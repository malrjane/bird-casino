import './Text3Col.css';
import Button from '../Button/Button';
import TextSection from '../TextSection/TextSection.jsx';
import { getImage } from '../../utils/utils';


function Text3Col({ elements, id }) {
  const textElements = elements.filter(el => el.type !== 'component');
  const bonusCardsData = elements.find(el => el.source === 'bonus-cards')?.data;

  return (
    <section id={id} className="anchorSection depositMethods section_text">
      <div className="container">
         <TextSection isSimple={true} elements={textElements} />

         {bonusCardsData && (
          <div className="div_bonus flex">
             {bonusCardsData.map((card) => {
const imageData = getImage(card.src);
                        

             return (
               <div key={card.id}>
                    
                <a className="link_pic" href="/start">
                  <img
                    src={imageData?.src}
                    alt={imageData?.alt || card.name}
                    loading="lazy"
                    decoding="async"
                  />
                  <h6>
                    {card.name}
                    <span>{card.conditions}</span>
                  </h6>
                </a>
                <Button btnText="Get Bonus" />
              </div>
             )
})}
          </div>
        )}
      </div>
    </section>
  );
}

export default Text3Col;