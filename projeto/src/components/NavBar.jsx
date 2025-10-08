import React from 'react';

import styles from './Navbar.module.css';

const NavBar = () => {
  return (
    <>
      
      <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <a href="#" className={styles.navbarLogo}>MyLogo</a>
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