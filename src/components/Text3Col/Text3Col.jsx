import './Text3Col.css';
import { bonusCards } from '../../data/bonusCards';

function Text3Col () {
   return (
        <section
            id="depositMethods"
            className="anchorSection depositMethods section_text"
          >
            <div className="container">
              <h2>BirdSpin Deposit Options Ready Today</h2>
              <p className="p_big">
                BirdSpin Casino accepts instant deposits via Visa, Mastercard,
                Skrill, Neteller, Paysafecard, Jeton, and major crypto wallets,
                with most methods starting around 20 EUR while Daily Bonus Map
                quests request 30 EUR. Funds hit your balance instantly so you
                can trigger the welcome ladder or join tournaments right away.
                The cashier shows transparent limits and never adds hidden fees
              </p>
              <div className="div_bonus flex">
                {
                  bonusCards.map((card)=> (
                  
                     <div key={card.id}>
                  <a className="link_pic" href="/start"
                    ><img
                      src={card.image}
                      alt={card.alt}
                      loading="lazy"
                      decoding="async"
                    />
                    <h6>
                      {card.name}
                      <span>
                        {card.conditions}
                        </span>
                    </h6>
                    </a>
                    <a className="btn btn_2" href="/start"><span>Get Bonus</span></a>
                </div>

                 ))}
              </div>
            </div>
          </section>
   )
}

export default Text3Col;