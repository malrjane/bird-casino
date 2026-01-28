import './ArticlesSection.css';
import TextSection from '../TextSection/TextSection.jsx';
import { getImage } from '../../utils/utils';
 import Button from '../Button/Button.jsx';
function ArticlesSection({ elements, id }) {
   const textElements = elements.filter(el => 
    el.type !== 'component' && el.type !== 'btn' && el.type !== 'btnBig'
  );

  const blogComponent = elements.find(el => el.source === 'blog-grid');
  const articles = blogComponent?.data || [];
  
  const btnData = elements.find(el => el.type === 'btn');
  const btnBigData = elements.find(el => el.type === 'btnBig');

  return (
    <section id={id} className="anchorSection blog section_text">
      <div className="container">
        <TextSection elements={textElements} isSimple={true} />

        {articles.length > 0 && (
          <div className="blog_posts">
            {articles.map((article) => {
              const imageData = getImage(article.image);
              return (
                <article className="blog_card blog_card_horizontal" key={article.id}>
                  <a href={article.link} className="blog_card_image">
                    <img
                      src={imageData?.src || article.image}
                      alt={article.alt}
                      loading="lazy"
                    />
                  </a>
                  <div className="blog_card_content">
                    <span className="blog_card_date">{article.date}</span>
                    <h3><a href={article.link}>{article.title}</a></h3>
                    <p className="blog_card_excerpt">
                      <em dangerouslySetInnerHTML={{ __html: article.excerpt }} />
                    </p>
                     {btnData && <Button btnText={btnData.text} href={article.link} />}
                  </div>
                </article>
              );
            })}
          </div>
        )}

        <div className="blog-cta">
           {btnBigData && <Button btnText={btnBigData.text} href={btnBigData.link || "/blog"} />}
        </div>
      </div>
    </section>
  );
}

export default ArticlesSection;