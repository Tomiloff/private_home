import { FC } from "react";
import styles from "./callbackPanel.module.scss";
import { PhoneLink } from "./PhoneLink/PhoneLink";

export const CallbackPanel:FC = () => {
  return (
    <>
      <span className={styles.subpanel_phone_number}>+7 495 527 21 21</span>
      <PhoneLink
        text="Заказать обратный звонок"
        link="#callback"
      />
    </>
  )
}