// components/Navbar.jsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import Image from 'next/image';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
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
              <span className={styles.companySubtitle}>ARQUITETURA</span>
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
          <li className={styles.navbarItem}>
            <Link href="#projetos" className={styles.navbarLink}>Projetos</Link>
          </li>
          <li className={styles.navbarItem}>
            <Link href="#contato" className={styles.navbarLink}>Contato</Link>
          </li>
        </ul>

        {/* Botão Menu Mobile */}
        <button 
          className={styles.mobileMenuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menu Mobile */}
        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.active : ''}`}>
          <Link href="#inicio" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>Início</Link>
          <Link href="#quem-somos" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>Quem Somos</Link>
          <Link href="#servicos" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>Serviços</Link>
          <Link href="#projetos" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>Projetos</Link>
          <Link href="#contato" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>Contato</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;