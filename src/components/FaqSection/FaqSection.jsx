 

import { useState, useRef, useEffect } from "react";
import TextSection from '../TextSection/TextSection.jsx';
import './FaqSection.css';




export default function FAQSection({ elements, id }) {

const textElements = elements.filter(el => el.type !== 'component');
  const faqData = elements.find(el => el.source === 'faq')?.data;

  const [openIndex, setOpenIndex] = useState(null);
  const answerRefs = useRef([]);

  if (!faqData) return null;

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    
    <section className="aboutSection" id={id}>
      <div className="aboutBlock container">
        <TextSection isSimple={true} elements={textElements} />
{faqData && (
        <div className="faqBlock__list">
           {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            const contentEl = answerRefs.current[idx];
            const contentHeight = contentEl?.scrollHeight || 0;

            return (
              <div
                key={item.id || idx}
                className={`faqBlock__listItem ${
                  isOpen ? "faqBlock__listItem-active" : ""
                }`}
              >
                <div
                  className={`faqBlock__listItemTitle ${
                    isOpen ? "faqBlock__listItemActive" : ""
                  }`}
                  onClick={() => toggleFAQ(idx)}
                >
                   <h4 data-heading-tag="H4">{item.question}</h4>
                </div>

                <div
                  ref={(el) => (answerRefs.current[idx] = el)}
                  className="faqBlock__listItemTitleDesc"
                  style={{
maxHeight: isOpen ? `${answerRefs.current[idx]?.scrollHeight}px` : "0px",
overflow: "hidden",
transition: "max-height 0.4s ease",
                  }}
                >
                  <div className="faq-answer">{item.answer}</div>
                </div>
              </div>
            );
          })}
        </div>)}
      </div>
    </section>
  );
}
