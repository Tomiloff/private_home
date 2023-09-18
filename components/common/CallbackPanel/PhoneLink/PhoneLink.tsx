import { FC } from "react";
import styles from "./phoneLink.module.scss";

type Props = {
  text: string;
  link: string;
}

export const PhoneLink:FC<Props> = ({
  text,
  link
}) => {
  return (
    <a 
      href={link} 
      className={styles.phone_link}>
      {text}
    </a>
  )
}