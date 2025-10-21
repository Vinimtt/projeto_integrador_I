import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import Image from 'next/image';

const NavBar = () => {
  return (
    <>
      
      <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <Link href="/" className={styles.navbarLogo}>
          <Image 
            src="/images/logo.png"   
            alt="Logo da Empresa"    
            width={70}          
            height={60} 
            priority                 
          />
        </Link>
          <ul className={styles.navbarMenu}>
            <li className={styles.navbarItem}><a href="#" className={styles.navbarLink}>Início</a></li>
            <li className={styles.navbarItem}><a href="#" className={styles.navbarLink}>Quem somos?</a></li>
            <li className={styles.navbarItem}><a href="#" className={styles.navbarLink}>Serviços</a></li>
            <li className={styles.navbarItem}><a href="#" className={styles.navbarLink}>Parceiros</a></li>
            <li className={styles.navbarItem}><a href="#" className={styles.navbarLink}>Contato</a></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;