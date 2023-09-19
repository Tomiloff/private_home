'use client'

import { FC } from "react";
import styles from "./phoneLinkIcon.module.scss";
import Image from "next/image";
import phoneIcon from "../../../../../assets/all_images/icons/phone_icon.svg"

type Props = {
  text: string;
  link: string;
  pageWidth?: number;
}

export const PhoneLinkIcon: FC<Props> = ({
  text,
  link
}) => {

  return (
    <a 
      href={link}
      className={styles.phone_link_icon}
    >
      <Image 
        src={phoneIcon}
        width={14}
        height={14} 
        alt={text} 
      />    
    </a>
  )
}