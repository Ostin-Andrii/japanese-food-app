import styles from './Header.module.css'
import React from "react";
import sushiImage from '../../Assets/sushi.jpg';
import HeaderCartButton from './HeaderCartButton/HeaderCartButton';

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>Японська кухня</h1>
        <HeaderCartButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={sushiImage} alt="Страви японської кухні" />
      </div>
    </React.Fragment>
  );
}

export default Header;
