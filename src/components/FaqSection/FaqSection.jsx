import { useState, useRef, useEffect } from 'react';
import './FaqSection.css';
import { faqs } from '../../data/faqs';

function FaqSection() {
  const [openFaqs, setOpenFaqs] = useState([]);
  const faqRefs = useRef({});

  const toggleFaq = (faqId) => {
    setOpenFaqs(prevOpenFaqs => {
      if (prevOpenFaqs.includes(faqId)) {
        // Если FAQ уже открыт, закрываем его
        const element = faqRefs.current[faqId];
        if (element) {
          slideUp(element, 300);
        }
        return prevOpenFaqs.filter(id => id !== faqId);
      } else {
        // Если FAQ закрыт, открываем его
        const element = faqRefs.current[faqId];
        if (element) {
          slideDown(element, 300);
        }
        return [...prevOpenFaqs, faqId];
      }
    });
  };

  const isFaqOpen = (faqId) => {
    return openFaqs.includes(faqId);
  };

  function slideUp(element, duration = 300) {
    // Сохраняем текущую высоту
    const height = element.scrollHeight;
    
    element.style.height = height + 'px';
    element.style.transitionProperty = 'height, margin, padding';
    element.style.transitionDuration = duration + 'ms';
    element.style.overflow = 'hidden';
    
    // Force repaint
    element.offsetHeight;
    
    element.style.height = '0';
    element.style.paddingTop = '0';
    element.style.paddingBottom = '0';
    element.style.marginTop = '0';
    element.style.marginBottom = '0';
    
    window.setTimeout(() => {
      element.style.display = 'none';
      element.style.removeProperty('height');
      element.style.removeProperty('overflow');
      element.style.removeProperty('transition-duration');
      element.style.removeProperty('transition-property');
      element.style.removeProperty('padding-top');
      element.style.removeProperty('padding-bottom');
      element.style.removeProperty('margin-top');
      element.style.removeProperty('margin-bottom');
    }, duration);
  }

  function slideDown(element, duration = 300) {
    element.style.removeProperty('display');
    
    // Убедимся, что элемент видим для получения правильной высоты
    element.style.display = 'block';
    element.style.overflow = 'hidden';
    element.style.height = '0';
    
    const height = element.scrollHeight;
    
    element.style.transitionProperty = 'height, margin, padding';
    element.style.transitionDuration = duration + 'ms';
    element.style.height = height + 'px';
    
    window.setTimeout(() => {
      element.style.removeProperty('height');
      element.style.removeProperty('overflow');
      element.style.removeProperty('transition-duration');
      element.style.removeProperty('transition-property');
    }, duration);
  }

  // Инициализация при монтировании
  useEffect(() => {
    // Устанавливаем начальные стили для всех FAQ
    faqs.forEach(faq => {
      const element = faqRefs.current[faq.id];
      if (element && !openFaqs.includes(faq.id)) {
        element.style.display = 'none';
        element.style.height = '0';
        element.style.overflow = 'hidden';
      }
    });
  }, []);

  return (
    <section
      id="sectionFaq"
      className="anchorSection sectionFaq section_faq"
    >
      <div className="container">
        <h2>BirdSpin FAQ Quick Answers Hub</h2>
        <p>
          The BirdSpin FAQ addresses the essentials: how to claim the no
          deposit gifts, where to find wagering requirements, supported
          payment methods, withdrawal speeds, and mobile compatibility.
          Each answer summarises the rules and links you to full terms
          inside the account area. Start here before chatting with support
          to solve common questions faster
        </p>
        
        <div className="faq_body">
          {faqs.map((faq) => {
            const isOpen = isFaqOpen(faq.id);
            
            return (
              <div
                className={`faq_item ${isOpen ? 'active' : ''}`}
                key={faq.id}
              >
                <h3 itemProp="name" onClick={() => toggleFaq(faq.id)}>
                  {faq.q}
                </h3>
                <div
                  className="faq_open"
                  ref={(el) => {
                    faqRefs.current[faq.id] = el;
                  }}
                >
                  <div itemProp="text">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;