// components/Navbar.jsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import styles from './Navbar.module.css';
import { projects } from './ProjectCarousel'; // Importar a lista de projetos

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const firstLinkRef = useRef(null);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') setIsMenuOpen(false);
    }

    function handleClickOutside(e) {
      if (isMenuOpen && menuRef.current && !menuRef.current.contains(e.target) && buttonRef.current && !buttonRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen && firstLinkRef.current) {
      firstLinkRef.current.focus();
    }
  }, [isMenuOpen]);

  return (
    <nav className={styles.navbar} role="navigation" aria-label="Menu principal">
      <div className={styles.navbarContainer}>
        
        <Link href="/" className={styles.navbarBrand}>
          <div className={styles.logoContainer}>
            <Image 
              src="/images/logo.png"   
              alt="Logo da Empresa"    
              width={50}          
              height={50} 
              priority                 
            />
            <div className={styles.companyName}>
              <span className={styles.companyTitle}>ENGENHARIA &</span>
              <span className={styles.companySubtitle}>ENERGIA</span>
            </div>
          </div>
        </Link>

        {/* Menu Desktop */}
        <ul className={styles.navbarMenu}>
          <li className={styles.navbarItem}>
            <Link href="#inicio" className={styles.navbarLink}>Início</Link>
          </li>
          <li className={styles.navbarItem}>
            <Link href="#quem-somos" className={styles.navbarLink}>Quem Somos</Link>
          </li>
          <li className={styles.navbarItem}>
            <Link href="#servicos" className={styles.navbarLink}>Serviços</Link>
          </li>
          
          {/* Item de Projetos com Dropdown */}
          <li className={`${styles.navbarItem} ${styles.dropdown}`}>
            <Link href="#projetos" className={styles.navbarLink}>Projetos</Link>
            <div className={styles.dropdownContent}>
              {projects.map((project, index) => (
                <Link 
                  key={project.id} 
                  // CORREÇÃO AQUI: Formatando o href para /?slide=X#projetos
                  href={`/?slide=${index}#projetos`} 
                  className={styles.dropdownItem}
                  onClick={() => setIsMenuOpen(false)} 
                >
                  {project.title}
                </Link>
              ))}
            </div>
          </li>
          
          <li className={styles.navbarItem}>
            <Link href="#contato" className={styles.navbarLink}>Contato</Link>
          </li>
        </ul>

        {/* Botão Menu Mobile */}
        <button
          ref={buttonRef}
          className={`${styles.mobileMenuButton} ${isMenuOpen ? styles.open : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>

        {/* Menu Mobile */}
        <div
          id="mobile-navigation"
          ref={menuRef}
          className={`${styles.mobileMenu} ${isMenuOpen ? styles.active : ''}`}
          role="menu"
          aria-hidden={!isMenuOpen}
        >
          <Link href="#inicio" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)} ref={firstLinkRef}>Início</Link>
          <Link href="#quem-somos" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>Quem Somos</Link>
          <Link href="#servicos" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>Serviços</Link>
          
          {/* Link para a seção Projetos */}
          <Link href="#projetos" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>Projetos</Link>
          {/* Itens de Projetos como sub-links no menu mobile */}
          {projects.map((project, index) => (
             <Link 
                key={project.id} 
                // CORREÇÃO AQUI: Formatando o href para /?slide=X#projetos
                href={`/?slide=${index}#projetos`} 
                className={`${styles.mobileLink} ${styles.mobileSubLink}`} // Classe de sub-link para indentação
                onClick={() => setIsMenuOpen(false)}
              >
                — {project.title}
              </Link>
          ))}
          
          <Link href="#contato" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>Contato</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;