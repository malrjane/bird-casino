import './LogosGrid.css';
import { providersLogos } from '../../data/providersLogos';

function LogosGrid () {
   return (
 <section
            id="gameProviders"
            className="anchorSection gameProviders section_text"
          >
            <div className="container">
              <div className="div_pic flex">
                <div>
                  <h2>BirdSpin Software Providers Lineup Showcase</h2>
                  <p>
                    Industry powerhouses like Pragmatic Play, NetEnt,
                    Microgaming, Evolution, Play n GO, and Bgaming headline the
                    BirdSpin Casino catalogue, joined by innovative studios such
                    as Spinomenal, NoLimit City, and Hacksaw Gaming. Filters let
                    you browse by provider, volatility, or feature, while Drops
                    and Wins badges highlight boosted prize pools. Every partner
                    holds independent certifications for fairness
                  </p>
                </div>
                <div className="pic_block">
                  <div className="game_providers_grid">
                    {providersLogos.map((logo)=> (
                     
                        <img
                      src={logo.src}
                      alt={logo.alt}
                      loading="lazy"
                      decoding="async"
                      key={logo.id} />  
                     
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
   )
}

export default LogosGrid;