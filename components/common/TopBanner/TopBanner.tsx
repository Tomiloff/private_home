import { FC } from "react";
import styles from './topBanner.module.scss'
import Image from "next/image";
import topBannerImg from "@/assets/all_images/top_banner_img.webp";

export const TopBanner: FC= () => {
  
  return (
    <div className={styles.top_banner}>
      <Image
        src={topBannerImg}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          marginBottom: "32px"
        }}
        alt="Дом бизнес-класса"
      />
      <div className={styles.top_banner_preview}>
        <div className={styles.top_banner_subtitle}>
          <h3 className={styles.banner_subtitle_h3}>
            Дом бизнес-класса<br />
            для ценителей роскоши
          </h3>
        </div>
        <div className={styles.top_banner_title}>
          <h1 className={styles.banner_title_h1}>Inchapin</h1>
        </div>
      </div>
    </div>
  )
}