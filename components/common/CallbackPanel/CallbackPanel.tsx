import { FC } from "react";
import styles from "./callbackPanel.module.scss";
import { PhoneBtnContainer } from "./PhoneBtn/PhoneBtn";

type Props = {
  text: string;
  phoneNumber: string;
}

export const CallbackPanel: FC<Props> = ({
  text,
  phoneNumber
}) => {
  return (
    <>
      <span className={styles.subpanel_phone_number}>{phoneNumber}</span>
      <PhoneBtnContainer
        text={text}
      />
    </>
  )
}