import { FC } from "react";
import styles from "./phoneBtnIcon.module.scss";
import Image from "next/image";
import phoneIcon from "@/assets/all_images/icons/phone_icon.svg"

type Props = {
  text: string;
  pageWidth?: number;
}

export const PhoneBtnIcon: FC<Props> = ({
  text,
}) => {

  return (
    <button 
      className={styles.phone_btn_icon}
    >
      <Image 
        src={phoneIcon}
        width={14}
        height={14} 
        alt={text} 
      />    
    </button>
  )
}