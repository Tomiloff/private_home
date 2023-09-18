import { FC } from "react";
import styles from './header.module.scss'
import Image from "next/image";
import { HeaderSelect } from "./HeaderSelect/HeaderSelect";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_subpanel}>
        <button className={styles.subpanel_menu_btn}>
          <div className={styles.menu_btn_burger}>
            <span className={styles.btn_burger_line}></span>
            <span className={styles.btn_burger_line}></span>
            <span className={styles.btn_burger_line}></span>
          </div>
          <span>меню</span>
        </button>
        <HeaderSelect />
      </div>
      <Image 
        src="/logo.webp" 
        alt="logo" 
        width={187}
        height={30}
      />
      <div className={styles.header_subpanel}>
        <span>+7 495 527 21 21</span>
        <a href="#callback"><button>Заказать обратный звонок</button></a>
      </div>
    </header>
  )
};