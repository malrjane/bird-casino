import './TextSection.css'

function TextSection({ elements, id, isSimple = false, isCol=false }) {
  if (!elements) return null;

  const content = elements.map((el, index) => {
     if (el.type === 'component' || el.type === 'image') return null;

    const Tag = el.type === 'paragraph' ? 'p' : el.type;
    return (
      <Tag 
        key={index} 
        dangerouslySetInnerHTML={{ __html: el.text }} 
        className={Tag === 'span' ? 'span_bonus' : ''}
      />
    );
  });

   if (isSimple) return <>{content}</>;

   return (
    <section id={id} className="anchorSection section_text">
      <div className={`container ${isCol ? 'col' : ''}`}>
        {content}
      </div>
    </section>
  );
}

export default TextSection;