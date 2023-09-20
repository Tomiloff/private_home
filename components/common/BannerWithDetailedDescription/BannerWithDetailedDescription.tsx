import { FC } from "react";
import styles from './bannerWithDetailedDescription.module.scss'
import Image from "next/image";
import photoHouse from "@/assets/all_images/photo_house.webp";
import previewForVideo from "@/assets/all_images/preview_for_video.webp"
import playIcon from "@/assets/all_images/icons/play_icon.svg";

export const BannerWithDetailedDescription: FC = () => {
  
  return (
    <div className={styles.banner_wrapper}>
      
      <div className={styles.banner_photo_wrapper}>
        <div className={styles.photo_wrapper_link}>
          <a href="#">О проекте</a>
        </div>
        <Image 
          src={photoHouse} 
          style={{
            width: '100%',
            objectFit: 'cover'
          }}
          alt="photo house" />
      </div> 

      <div className={styles.banner_description_wrapper}>
        <div className={styles.description_wrapper_subblock}>
          <span className={styles.description_wrapper_line}></span>
          <h2 className={styles.description_wrapper_title}>
            Уютное и безопасное пространство для счастливой,  
            <span> спокойной и размеренной жизни</span>
          </h2>
          <p className={styles.description_wrapper_description}>
            <a href="#">Квартиры от 65 до 356 м2 с чистовой отделкой,</a> балконами, лоджиями и террасами В собственной ЗАКРЫТОЙ охраняемой территориИ.
          </p>
          <div className={styles.description_wrapper_video}>
            <span className={styles.wrapper_video_title}>Видео о проекте</span>
            <div className={styles.wrapper_video_player}>
              <Image 
                className={styles.video_player_img}
                src={previewForVideo}
                alt="Видео о проекте"
                style={{
                  width: '241px',
                  objectFit: 'cover',
                  borderRadius: "50%"
                }}
              />
              <button className={styles.video_player_btn}>
                <div className={styles.player_btn_text}>
                  <div>
                    <Image
                      src={playIcon}
                      width={14}
                      height={13}
                      alt="Кнопка включения видео"
                    />
                  </div>
                  <span>Play</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}