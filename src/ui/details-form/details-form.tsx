"use client";

import { FocusEvent, FormEvent, MutableRefObject, useRef } from "react";
import styles from "./details-form.module.scss";

export default function DetailsFrom(){

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);
    const messageRef = useRef(null);

    const focusHandler = (event: FocusEvent, ref: MutableRefObject<HTMLLabelElement | null>) => {
        if(!(ref.current as HTMLLabelElement).classList.contains("field__label--hide")){
            (ref.current as HTMLLabelElement).classList.add("field__label--hide");
        }
    }

    const focusOutHandler = (event: FocusEvent, ref: MutableRefObject<HTMLLabelElement | null>) => {
        const value = (event.target as HTMLInputElement).value.trim();
        if(!value){
            if((ref.current as HTMLLabelElement).classList.contains("field__label--hide")){
                (ref.current as HTMLLabelElement).classList.remove("field__label--hide");
            }
            (event.target as HTMLInputElement).value = "";
        }
    }

    const submitHandler = (event: FormEvent) => {
        event.preventDefault();
    }

    return(
        <form className={`${styles["detail"]}`} onSubmit={submitHandler}>
            <div className={`field ${styles["detail__field"]}`}>
                <label htmlFor="name" className={`field__label`} ref={nameRef}>Name</label>
                <input type="text" name="name" id="name" className={`field__input`} onFocus={(e) => focusHandler(e, nameRef)} onBlur={(e) => focusOutHandler(e, nameRef)}/>
            </div>
            <div className={`field ${styles["detail__field"]}`}>
                <label htmlFor="email" className={`field__label`} ref={emailRef}>Email</label>
                <input type="text" name="email" id="email" className={`field__input`} onFocus={(e) => focusHandler(e, emailRef)} onBlur={(e) => focusOutHandler(e, emailRef)}/>
            </div>
            <div className={`field ${styles["detail__field"]}`}>
                <label htmlFor="phone" className={`field__label`} ref={phoneRef}>Phone</label>
                <input type="text" name="phone" id="phone" className={`field__input`} onFocus={(e) => focusHandler(e, phoneRef)} onBlur={(e) => focusOutHandler(e, phoneRef)}/>
            </div>
            <div className={`field ${styles["detail__field"]}`}>
                <label htmlFor="message" className={`field__label field__label--textarea`} ref={messageRef}>Your Message</label>
                <textarea name="message" id="message" className={`field__input field__input--textarea`} onFocus={(e) => focusHandler(e, messageRef)} onBlur={(e) => focusOutHandler(e, messageRef)}></textarea>
            </div>
            <button className={`btn btn__dark ${styles["detail__submit"]}`}>SUBMIT</button>
        </form>
    );
}