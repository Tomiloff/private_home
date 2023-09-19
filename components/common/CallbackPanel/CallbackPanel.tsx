import { FC } from "react";
import styles from "./callbackPanel.module.scss";
import { PhoneLinkContainer } from "./PhoneLink/PhoneLink";

type Props = {
  text: string;
  link: string;
  phoneNumber: string;
}

export const CallbackPanel: FC<Props> = ({
  text,
  link,
  phoneNumber
}) => {
  return (
    <>
      <span className={styles.subpanel_phone_number}>{phoneNumber}</span>
      <PhoneLinkContainer
        text={text}
        link={link}
      />
    </>
  )
}