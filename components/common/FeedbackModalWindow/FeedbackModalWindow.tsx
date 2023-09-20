'use client'

import { FC, useEffect } from "react";
import styles from './feedbackModalWindow.module.scss'
import Image from 'next/image'
import crossExitIcon from "@/assets/all_images/icons/cross_exit.svg";
import { FeedbackForm } from "./FeedbackForm/FeedbackForm";

type Props = {
  setShow: (e: boolean) => void  
} 

export const FeedbackModalWindow: FC<Props> = ({
  setShow
}) => {

  useEffect(() => {
    document.addEventListener("keydown", ({key}) => {
      key === "Escape" && setShow(false);
    });

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);
  
  return (
    <div className={styles.modal_window_wrapper}>
      <button
        className={styles.window_close_btn}
        onClick={() => setShow(false)}
      >
        <Image 
          src={crossExitIcon}
          width={26}
          height={26}
          alt="Скрыть окно"
        />
      </button>
      <h2 className={styles.modal_window_title}>Заказать звонок</h2>
      <FeedbackForm />
    </div>
  )
}