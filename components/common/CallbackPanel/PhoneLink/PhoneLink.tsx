'use client'

import { FC, useEffect, useState } from "react";
import styles from "./phoneLink.module.scss";
import Image from "next/image";
import phoneIcon from "../../../../assets/all_images/icons/phone_icon.svg"

type Props = {
  text: string;
  link: string;
}

export const PhoneLink: FC<Props> = ({
  text,
  link
}) => {
  const [pageWidth, setPageWidth] = useState(window.innerWidth)

  const handleResize = () => {
    setPageWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [pageWidth]);

  return (
    <div className={styles.subpanel_phone_link}>
      {pageWidth > 768 
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