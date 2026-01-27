import { useState, useEffect, useRef } from 'react';
import './Aside.css';

function Aside () {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
        const [activeSectionId, setActiveSectionId] = useState('aboutProject'); 

    const menuRef = useRef(null);
  const btnRef = useRef(null);
  const sectionRef = useRef(null);
      const menuBarRef = useRef(null);

      const anchorMenuItemClass = 'menuItem';
    const anchorMenuActiveItemClass = 'active';



   const closeMenu = () => {
    setIsMenuOpen(false);
  };
 
const handleMenuClick = (e) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

   const handleDocumentClick = (e) => {
    if (
      isMenuOpen &&
      menuRef.current &&
      !menuRef.current.contains(e.target) &&
      btnRef.current &&
      !btnRef.current.contains(e.target)
    ) {
      closeMenu();
    }
  };
 const updateMenuScroll = () => {
        if (!menuBarRef.current) return;

        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const sections = document.querySelectorAll('.anchorSection');

        // Находим активную секцию
        let activeSection = null;
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollTop >= sectionTop - 50 && scrollTop < sectionTop + sectionHeight - 50) {
                activeSection = section;
            }
        });

          if (activeSection) {
            const activeLink = document.querySelector(`#anchorMenu a[href$="#${activeSection.id}"]`);
            
            if (activeLink) {
                // Обновляем состояние активного раздела
                setActiveSectionId(activeSection.id);
                
                // Удаляем активный класс у всех пунктов меню
                const menuItems = document.querySelectorAll(`.${anchorMenuItemClass}`);
                menuItems?.forEach((item) => {
                    item?.classList.remove(`${anchorMenuActiveItemClass}`);
                });

                // Добавляем активный класс текущему пункту
                activeLink.closest(`.${anchorMenuItemClass}`)?.classList.add(`${anchorMenuActiveItemClass}`);
                
                // Прокрутка меню (горизонтальная)
                const linkOffset = activeLink.offsetLeft;
                const linkWidth = activeLink.offsetWidth;
                const menuWidth = menuBarRef.current.offsetWidth;
                const scrollTo = linkOffset - (menuWidth / 2) + (linkWidth / 2);
                
                menuBarRef.current.scrollTo({
                    left: scrollTo,
                    behavior: 'smooth',
                });
            }
        }
    };
 const handleMenuItemClick = (e, sectionId) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setActiveSectionId(sectionId);
        }
    };

    useEffect(() => {
        // Добавляем обработчик клика на документ
        document.addEventListener('click', handleDocumentClick);

        // IntersectionObserver для секции depositMethods
        if (sectionRef.current) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    } else {
                        entry.target.classList.remove('is-visible');
                    }
                },
                { threshold: 0.3 }
            );
            observer.observe(sectionRef.current);
        }

        // Добавляем обработчик скролла для меню
        window.addEventListener('scroll', updateMenuScroll);
        
        // Инициализируем меню при загрузке
        updateMenuScroll();

        // Очистка при размонтировании
        return () => {
            document.removeEventListener('click', handleDocumentClick);
            window.removeEventListener('scroll', updateMenuScroll);
            if (sectionRef.current) {
                observer?.unobserve(sectionRef.current);
            }
        };
    }, [isMenuOpen]);

    // Список разделов для меню
    const menuItems = [
        { id: 'aboutProject', text: 'Birdspin Casino', dataNr: '0' },
        { id: 'bonuses', text: 'Bonuses', dataNr: '1' },
        { id: 'loyaltyProgram', text: 'Loyalty Program', dataNr: '2' },
        { id: 'paymentDetails', text: 'Payment Details', dataNr: '3' },
        { id: 'depositMethods', text: 'Deposit Methods', dataNr: '5' },
        { id: 'freeSpins', text: 'Free Spins', dataNr: '4' },
        { id: 'gameProviders', text: 'Software Providers', dataNr: '8' },
        { id: 'sectionFaq', text: 'FAQ', dataNr: '10' },
        { id: 'sectionSummary', text: 'Summary', dataNr: '11' },
        { id: 'sectionProps', text: 'Pros & Cons', dataNr: '12' },
        { id: 'sectionBlog', text: 'Blog', dataNr: '13' }
    ];
   return (
      <div className="div_aside navbar-wrapper">
          <div ref={menuRef}  className={`aside_fixed ${isMenuOpen  ? 'show-aside' : ''}`}>
            <div id="anchorMenu" className="aside_nav subMenu" ref={menuBarRef}>
              <ul>
                {menuItems.map((item) => (
                  <li key={item.id}
                                data-nr={item.dataNr}
                                className={`${anchorMenuItemClass} ${
                                    activeSectionId === item.id ? anchorMenuActiveItemClass : ''
                                }`}>
                 <a 
                                    href={`#${item.id}`}
                                    onClick={(e) => handleMenuItemClick(e, item.id)}
                                >
                                    {item.text}
                                </a>
                            </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
   )
}

export default Aside;