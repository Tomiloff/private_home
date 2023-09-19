'use client'

import { FC } from "react";
import styles from "./phoneLink.module.scss";
import { withPageWidth } from "@/utils/withPageWidth";
import { PhoneLinkIcon } from "./PhoneLinkIcon/PhoneLinkIcon";
import { HeaderSelect } from "@/components/layout/Header/HeaderSelect/HeaderSelect";

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
      {pageWidth && pageWidth > 935 
        ?
        <a 
          href={link} 
          className={styles.phone_link}>
          {text}
        </a>
        : 
        pageWidth && pageWidth < 935 && pageWidth > 545 
        ?
        <HeaderSelect />
        :
        <PhoneLinkIcon
          link={link}
          text={text}
        />
      }
    </div>
  )
}

export const PhoneLinkContainer = withPageWidth(PhoneLink);