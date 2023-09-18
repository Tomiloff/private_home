import { FC } from "react";
import styles from './buttonBurgerMenu.module.scss'

export const ButtonBurgerMenu: FC= () => {
  
  return (
    <button className={styles.subpanel_menu_btn}>
      <div className={styles.menu_btn_burger}>
        <span className={styles.btn_burger_line}></span>
        <span className={styles.btn_burger_line}></span>
        <span className={styles.btn_burger_line}></span>
      </div>
      <span>меню</span>
    </button>
  )
}