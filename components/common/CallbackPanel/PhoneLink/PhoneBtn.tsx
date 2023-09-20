'use client'

import { FC } from "react";
import styles from "./phoneBtn.module.scss";
import { withPageWidth } from "@/utils/withPageWidth";
import { PhoneBtnIcon } from "./PhoneBtnIcon/PhoneBtnIcon";
import { HeaderSelect } from "@/components/layout/Header/HeaderSelect/HeaderSelect";

type Props = {
  text: string;
  pageWidth?: number;
}

export const PhoneBtn: FC<Props> = ({
  text,
  pageWidth
}) => {

  return (
    <div className={styles.subpanel_phone_btn}>
      {pageWidth && pageWidth > 935 
        ?
        <button 
          className={styles.phone_btn}>
          {text}
        </button>
        : 
        pageWidth && pageWidth < 935 && pageWidth > 545 
        ?
        <HeaderSelect />
        :
        <PhoneBtnIcon
          text={text}
        />
      }
    </div>
  )
}

export const PhoneBtnContainer = withPageWidth(PhoneBtn);