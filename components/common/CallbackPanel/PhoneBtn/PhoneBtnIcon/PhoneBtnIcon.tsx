'use client'

import { FC } from "react";
import styles from "./phoneBtnIcon.module.scss";
import Image from "next/image";
import phoneIcon from "@/assets/all_images/icons/phone_icon.svg"
import { CSSTransition } from "react-transition-group";
import { FeedbackModalWindow } from "@/components/common/FeedbackModalWindow/FeedbackModalWindow";

type Props = {
  text: string;
  pageWidth?: number;
  show?: boolean;
  setShow: (e: boolean) => void;
}

export const PhoneBtnIcon: FC<Props> = ({
  text,
  show,
  setShow
}) => {

  return (
    <>
      <button 
        className={styles.phone_btn_icon}
        onClick={() => setShow(true)}
      >
        <Image 
          src={phoneIcon}
          width={14}
          height={14} 
          alt={text} 
        />    
      </button>
      <CSSTransition
        in={show}
        classNames='alert'
        timeout={300}
        unmountOnExit
      >
        <FeedbackModalWindow 
          setShow={setShow}
        />
      </CSSTransition>
    </>
  )
}