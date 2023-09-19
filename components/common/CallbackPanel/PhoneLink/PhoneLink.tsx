'use client'

import { FC } from "react";
import styles from "./phoneLink.module.scss";
import Image from "next/image";
import phoneIcon from "../../../../assets/all_images/icons/phone_icon.svg"
import { withPageWidth } from "@/utils/withPageWidth";

type Props = {
  text: string;
  link: string;
  pageWidth?: number;
}

export const PhoneLink: FC<Props> = ({
  text,
  link,
  pageWidth
}) => {

  return (
    <div className={styles.subpanel_phone_link}>
      {pageWidth && pageWidth > 768 
        ?
        <a 
          href={link} 
          className={styles.phone_link}>
          {text}
        </a>
        :
        <a href={link}
          className={styles.phone_link_icon}
        >
          <Image 
          src={phoneIcon}
          width={14}
          height={14} 
          alt={text} 
        />    
        </a>
      }
    </div>
  )
}

export const PhoneLinkContainer = withPageWidth(PhoneLink);