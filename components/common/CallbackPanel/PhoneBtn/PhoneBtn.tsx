'use client'

import { FC, useState } from "react";
import styles from "./phoneBtn.module.scss";
import { withPageWidth } from "@/utils/withPageWidth";
import { PhoneBtnIcon } from "./PhoneBtnIcon/PhoneBtnIcon";
import { HeaderSelect } from "@/components/layout/Header/HeaderSelect/HeaderSelect";
import { CSSTransition } from "react-transition-group";
import { FeedbackModalWindow } from "../../FeedbackModalWindow/FeedbackModalWindow";

type Props = {
  text: string;
  pageWidth?: number;
}

export const PhoneBtn: FC<Props> = ({
  text,
  pageWidth
}) => {
  const [show, setShow] = useState(false);

  return (
    <div className={styles.subpanel_phone_btn}>
      {pageWidth && pageWidth > 935 
        ?
        <button 
          className={styles.phone_btn}
          onClick={() => setShow(!show)}
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

export const PhoneBtnContainer = withPageWidth(PhoneBtn);