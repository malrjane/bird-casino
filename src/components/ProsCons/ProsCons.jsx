import './ProsCons.css';
import TextSection from '../TextSection/TextSection.jsx';

function  ProsCons ({elements, id}) {
  const textElements = elements.filter(el => el.type !== 'component');
  const gridComponent = elements.find(el => el.source === 'pros-cons-grid');
  const { pros, cons } = gridComponent?.data || {};
   return (
       <section
            id={id}
            className="anchorSection sectionProps section_pros"
          >
            <div className="container">
<TextSection elements={textElements} isSimple={true} />

              <div className="pros_body flex">
                <div className="div_pros">
                  <h3>{pros?.title}</h3>
                  <ul>
                   {pros?.items.map((item, i)=> {
                   return(
                     <li key={i}>{item}</li>
                   )
                   })}
                  </ul>
                </div>
                <div className="div_cons">
                  <h3>{cons?.title}</h3>
                   <ul>
                   {cons?.items.map((item, i)=> {
                  return(
                      <li key={i}>{item}</li>
                  )
                   })}
                  </ul>
                </div>
              </div>
            </div>
          </section>
   )
}

export default ProsCons;