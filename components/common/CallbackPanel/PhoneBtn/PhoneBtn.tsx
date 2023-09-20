'use client'

import { FC, useState } from "react";
import styles from "./phoneBtn.module.scss";
import { withPageWidth } from "@/utils/withPageWidth";
import { PhoneBtnIcon } from "./PhoneBtnIcon/PhoneBtnIcon";
import { HeaderSelect } from "@/components/layout/Header/HeaderSelect/HeaderSelect";
import { CSSTransition } from "react-transition-group";
import { FeedbackModalWindow } from "../../FeedbackModalWindow/FeedbackModalWindow";
import { withStateModalWindow } from "@/utils/withStateModalWindow";

type Props = {
  text: string;
  pageWidth?: number;
  show?: boolean;
  setShow?: any;
}

export const PhoneBtn: FC<Props> = ({
  text,
  pageWidth,
  show,
  setShow
}) => {

  return (
    <div className={styles.subpanel_phone_btn}>
      {pageWidth && pageWidth > 935 
        ?
        <button 
          className={styles.phone_btn}
          onClick={() => setShow(true)}
        >
          {text}
        </button>
        : 
        pageWidth && pageWidth < 935 && pageWidth > 545 
        ?
        <HeaderSelect />
        :
        <PhoneBtnIcon
          text={text}
          show={show}
          setShow={setShow}
        />
      }
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
    </div>
  )
}

export const PhoneBtnContainer = withStateModalWindow(withPageWidth(PhoneBtn));