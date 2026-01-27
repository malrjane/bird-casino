import './ArticlesSection.css';
import { articles } from '../../data/articles';

function ArticlesSection () {
   return (

 <section id="sectionBlog" className="anchorSection blog section_text">
            <div className="container">
              <h2>Latest Guides from BirdSpin Blog</h2>
              <div className="blog_posts">

               {
articles.map((article)=> (
  <article className="blog_card blog_card_horizontal" key={article.id}>
                  <a
                    href={`blog/${article.src}`}
                    className="blog_card_image"
                    ><img
                      src={article.img}
                      alt={article.alt}
                      loading="lazy"
                      decoding="async"
                  /></a>
                  <div className="blog_card_content">
                    <span className="blog_card_date">{article.date}</span>
                    <h3>
                      <a href={`blog/${article.src}`}
                        >{article.title}</a
                      >
                    </h3>
                    <p className="blog_card_excerpt">
                      <em
                        >{article.content}</em
                      >
                    </p>
                    <a
                      className="btn btn_2 blog_card_btn"
                      href={`blog/${article.src}`}
                      ><span>Explore more</span></a
                    >
                  </div>
                </article>
))
               }
               
                
              </div>
              <div className="blog-cta">
                <a className="btn btn_2" href="/blog"
                  ><span>See all articles</span></a
                >
              </div>
            </div>
          </section>

   );
}

export default ArticlesSection;