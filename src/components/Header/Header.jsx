import { useState, useEffect } from 'react';
import './Header.css';
import logoImage from '/images/logo.png'
 
function Header() {

const [isNavOpen, setIsNavOpen] = useState(false);

const toggleNav = () => {
    setIsNavOpen(prevState => {
        const newState = !prevState;
    

    setTimeout(()=> {
         const btn = document.querySelector('.nav_open');
        const nav = document.querySelector('.nav');
        const body = document.body;

          if (newState) {
        if (nav) nav.classList.add('active');
          if (btn) btn.classList.add('active');
          if (body) body.classList.add('scroll');
      } else {
        if (nav) nav.classList.remove('active');
          if (btn) btn.classList.remove('active');
          if (body) body.classList.remove('scroll');

      }

 if (btn) {
          btn.setAttribute('aria-expanded', newState.toString());
        }
    }, 0);
    return newState;
})


      
    }

    useEffect(() => {
    // Этот код выполнится один раз при монтировании компонента
    const fixedCloseButtons = document.querySelectorAll('.fixed_close');
    
    const handleFixedCloseClick = function() {
      document.querySelector('.fixed_bottom')?.classList.add('active');
    };

    fixedCloseButtons.forEach(btn => {
      btn.addEventListener('click', handleFixedCloseClick);
    });

    // Очистка при размонтировании компонента
    return () => {
      fixedCloseButtons.forEach(btn => {
        btn.removeEventListener('click', handleFixedCloseClick);
      });
    };
  }, []);

   return(
       <header className="header">
            <div className="container">
                <div className="header_top flex">
                    <button className="nav_open" aria-label="Toggle navigation menu" aria-expanded={isNavOpen} aria-controls="nav"
                    onClick={toggleNav}
                    
                    
                    
                    
                    >
                        <span></span><span></span><span></span>
                    </button>
                    <a href="/" className="logo"> <img src={logoImage} alt="Birdspin Casino neon logo with stylized wings" /> </a>
                    <nav className="nav">
                        <ul className="flex">
                            <li className="active"><a href="/">Home</a></li>
                            <li><a href="/bonuses">Bonuses</a></li>
                            <li><a href="/licensing">Licensing</a></li>
                            <li><a href="/tips">Tips</a></li>
                            <li><a href="/glossary">Glossary</a></li>
                            <li><a href="/blog">Blog</a></li>
                        </ul>
                    </nav>
                    <div>тут кнопка</div>
                </div>
            </div>
        </header>
   );
}

export default Header;

  