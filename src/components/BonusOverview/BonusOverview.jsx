import './BonusOverview.css';


 

function BonusOverview ({elements, id}) {
   
  const titleOverview = elements.find(el => el.type === 'h2').text;
 const infoElements = elements.filter(el => el.type !== 'h2');
const rows = [];
for (let i = 0; i < elements.length; i++) {
  if (elements[i].type === 'strong') {
    rows.push({
      label: elements[i].text,
      value: elements[i + 1]?.text || ''
    });
  }
}
    return (
         <section
            id={id}
            className="anchorSection sectionSummary section_details"
          >
            <div className="container">
              <h2>{titleOverview}</h2>
              {infoElements && 
              <ul className="ul_details flex">
                {rows.map((row, index)=>   (

                     <li key={index}>
                  <strong>{row.label}</strong><span>{row.value}</span>
                </li>
                  )
                )}
                
             
               
              </ul>

              }
               
            </div>
          </section>
   )
}

export default BonusOverview;