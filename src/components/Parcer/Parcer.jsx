import { getImage } from "../../utils/utils";

export default function Parcer({ blocks = [] }) {
  return (
   <> 
          {blocks.map((block, index) => (
        <SmartSection key={index} elements={block.elements || []} />
      ))}
      </>
   );
}

function SmartSection({ elements }) {
  const has = (t) => elements.some((e) => e.type === t);
  const layout = has("image") ? "image-side" : "plain";
  const isHero = has("h1");

  
  const image = elements.find((e) => e.type === "image");
  const leftElements = layout === "image-side"
    ? elements.filter((e) => e !== image)
    : elements;

   const renderElement = (el, key) => {
    switch (el.type) {
      case "h1":
        return <h1 key={key}>{el.text}</h1>;
      case "h2":
        return <h2 key={key}>{el.text}</h2>;
      case "h3":
        return <h3 key={key}>{el.text}</h3>;
      case "h4":
        return <h4 key={key}>{el.text}</h4>;

       case "p":
      case "paragraph":
        return <p key={key}>{el.text}</p>;

      case "ul":
        return (
          <ul key={key} className="u-list">
            {(el.items || []).map((item, idx) => (
              <li className="u-card" key={idx}>
             
                {item.description ? <p>{item.description}</p> : null}
              </li>
            ))}
          </ul>
        );

      case "ol":
        return (
          <ol key={key} className="o-list">
            {(el.items || []).map((item, idx) => (
              <li className="o-card" key={idx}>
                
                {item.description ? <p>{item.description}</p> : null}
              </li>
            ))}
          </ol>
        );

      case "card-list":
        return (
          <div key={key} className="card-list">
            {(el.items || []).map((item, idx) => (
              <div key={idx} className="card">
                {item.title ? <h3>{item.title}</h3> : null}
                {item.description ? <p>{item.description}</p> : null}
              </div>
            ))}
          </div>
        );

      case "button":
        return (
          <a
            key={key}
            className="btn btn_1"
            href={el.href || "/start"}
          >
            {el.text}
          </a>
        );

      
      case "image": {
        const imageData = getImage(el.src);
        return (
          <img
            key={key}
            className="simple-image"
            src={imageData?.src || el.src}
            alt={imageData?.alt || el.alt || ""}
          />
        );
      }

      default:
        return null;
    }
  };

   const renderSideImage = () => {
    if (!image) return null;
    const imageData = getImage(image.src);
    
    return <img className="simple-image" src={imageData?.src || image.src} alt={imageData?.alt || image.alt || ""} />;
  };

  return (
    <section className={`anchorSection ${isHero ? "section_image" : ""}`}>
      <div className="container">
        {layout === "image-side" ? (
          <div className="div_pic flex">
            <div className="text_block">{leftElements.map((el, i) => renderElement(el, i))}</div>
            <div className="pick_block">{renderSideImage()}</div>
          </div>
        ) : (
          <>{elements.map((el, i) => renderElement(el, i))}</>
        )}
      </div>
    </section>
  );
}
