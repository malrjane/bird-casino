import './GridTextCards.css';
import {gridText} from '../../data/gridText'

function GridTextCards () {
   return (

<section
            id="paymentDetails"
            className="anchorSection paymentDetails section_double"
          >
            <div className="container">
              <div className="flex">

{gridText.map((card)=>(
   <div key={card.id}>
                  <h3>{card.title}</h3>
                  <p>
                   {card.content}
                  </p>
</div> 
))}


              </div>
</div>
</section>
       
   )
}

export default GridTextCards;
