'use client'

import { FC, useEffect } from "react";
import styles from './feedbackForm.module.scss'
import { useForm, SubmitHandler } from "react-hook-form";
import { IUserFields } from "@/interfaces/app.interfaces";
import InputMask from 'react-input-mask';

export const FeedbackForm: FC = () => {

  const {register, handleSubmit} = useForm<IUserFields>();

  const onSubmit:SubmitHandler<IUserFields> = (data) => {
    console.log(`Ваше имя: ${data.name}, Телефон: ${data.phoneNumber}, email: ${data.email}`);
  };
  
  return (
    <div className={styles.window_form_wrapper}>
      <form
        className={styles.window_form} 
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className={styles.window_form_input} 
          {...register('name')} 
          type="text"
          id="userName" 
          placeholder="Ваше имя" 
        />
        
        <InputMask 
          className={styles.window_form_input}
          {...register('phoneNumber')}  
          mask="+7 (999) 999-99-99" 
          type="tel"
          id="userNumberTelephone"
          placeholder="Телефон" 
        />
        
        <input
          className={styles.window_form_input} 
          {...register('email')} 
          type="email"
          id="userEmail"
          placeholder="e-mail" 
        />

        <span 
          className={styles.window_form_span}
        >
          Нажимая на кнопку «Отправить», вы ознакомлены<br/> и соглашаетесь <a href="#">с политикой обработки  персональных данных</a>
        </span>
        
        <button className={styles.window_form_btn}>Отправить</button>
      
      </form>
    </div>
  )
}