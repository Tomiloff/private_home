'use client'

import { FC } from "react";
import styles from './header.module.scss'
import Image from "next/image";
import { HeaderSelect } from "./HeaderSelect/HeaderSelect";
import { ButtonBurgerMenu } from "@/components/common/ButtonBurgerMenu/ButtonBurgerMenu";
import { HeaderCallbackPanel } from "./HeaderCallbackPanel/HeaderCallbackPanel";
import { withPageWidth } from "../../../utils/withPageWidth";
import { PhoneLinkIcon } from "@/components/common/CallbackPanel/PhoneLink/PhoneLinkIcon/PhoneLinkIcon";

type Props = {
  pageWidth?: number;
}

export const Header: FC<Props> = ({
  pageWidth
}) => {
  return (
    <header className={styles.header}>
      <div className={styles.header_subpanel}>
        <ButtonBurgerMenu />

        {pageWidth && pageWidth > 935 
          ? 
          <HeaderSelect />
          : pageWidth && pageWidth < 935 && pageWidth > 590 &&
          <PhoneLinkIcon
            link="#callback"
            text="Заказть обратный звонок"
          />
        }

      </div>
      {pageWidth && pageWidth > 1440 
        ?
        <Image 
          src="/logo.webp" 
          alt="logo" 
          width={187}
          height={30}
        />
        : pageWidth && pageWidth < 1440 && pageWidth > 350 
          ?
          <Image 
            src="/logo.webp" 
            alt="logo" 
            width={155}
            height={25}
          />
          : 
          <Image 
            src="/logo.webp" 
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

export const HeaderContainer = withPageWidth(Header);