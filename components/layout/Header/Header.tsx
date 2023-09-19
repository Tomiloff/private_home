import { FC } from "react";
import styles from './header.module.scss'
import Image from "next/image";
import { HeaderSelect } from "./HeaderSelect/HeaderSelect";
import { ButtonBurgerMenu } from "@/components/common/ButtonBurgerMenu/ButtonBurgerMenu";
import { HeaderCallbackPanel } from "./HeaderCallbackPanel/HeaderCallbackPanel";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_subpanel}>
        <ButtonBurgerMenu />
        <HeaderSelect />
      </div>
      <Image 
        src="/logo.webp" 
        alt="logo" 
        width={187}
        height={30}
      />
      <div className={styles.header_subpanel}>
        <HeaderCallbackPanel />
      </div>
    </header>
  )
};