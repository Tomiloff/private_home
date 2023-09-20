'use client'

import { FC } from "react";
import styles from './header.module.scss'
import Image from "next/image";
import { HeaderSelect } from "./HeaderSelect/HeaderSelect";
import { ButtonBurgerMenu } from "@/components/common/ButtonBurgerMenu/ButtonBurgerMenu";
import { HeaderCallbackPanel } from "./HeaderCallbackPanel/HeaderCallbackPanel";
import { withPageWidth } from "@/utils/withPageWidth";
import { PhoneBtnIcon } from "@/components/common/CallbackPanel/PhoneBtn/PhoneBtnIcon/PhoneBtnIcon";
import topLogo from "@/assets/all_images/logo.webp";
import { withStateModalWindow } from "@/utils/withStateModalWindow";

type Props = {
  pageWidth?: number;
  show?: boolean;
  setShow?: any;
}

export const Header: FC<Props> = ({
  pageWidth,
  show,
  setShow
}) => {
  return (
    <header className={styles.header}>
      <div className={styles.header_subpanel}>
        <ButtonBurgerMenu />

        {pageWidth && pageWidth > 935 
          ? 
          <HeaderSelect />
          : pageWidth && pageWidth < 935 && pageWidth > 590 &&
          <PhoneBtnIcon
            show={show}
            setShow={setShow}
            text="Заказть обратный звонок"
          />
        }

      </div>
      {pageWidth && pageWidth > 1440 
        ?
        <Image 
          src={topLogo}
          alt="logo" 
          width={187}
          height={30}
        />
        : pageWidth && pageWidth < 1440 && pageWidth > 350 
          ?
          <Image 
            src={topLogo}
            alt="logo" 
            width={155}
            height={25}
          />
          : 
          <Image 
            src={topLogo} 
            alt="logo" 
            width={130}
            height={21}
          />
      }
      
      <div className={styles.header_subpanel}>
        <HeaderCallbackPanel />
      </div>
    </header>
  )
};

export const HeaderContainer = withStateModalWindow(withPageWidth(Header));