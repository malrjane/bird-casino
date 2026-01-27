import './ImgText2col.css';
import contentImage from '../../assets/images/home/7.avif'

function ImgText2col () {
   return (
        <section id="freeSpins" className="anchorSection freeSpins section_text">
            <div className="container">
              <div className="div_pic flex">
                <div>
                  <h2>BirdSpin Free Spins Parade Guide 🎰</h2>
                  <p>
                    BirdSpin Casino showers players with free spins through the
                    200-spin first deposit bonus, 100-spin reloads, daily Free
                    Spins Drops worth 1350 spins, and a weekly tournament
                    sharing 3500 spins. Loyalty levels add extra spin bundles,
                    while seasonal promo codes pop up in the Bonus Map. Track
                    wagering terms beside every offer so freebies convert
                    smoothly
                  </p>
                </div>
                <div className="pic_block">
                  <img
                    src={contentImage}
                    alt="Welcome bonus artwork with superhero pilot and chips"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </section>
   )
}

export default ImgText2col;