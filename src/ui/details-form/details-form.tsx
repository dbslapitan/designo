"use client";

import { ChangeEvent, FocusEvent, FormEvent, MutableRefObject, useRef, useState } from "react";
import styles from "./details-form.module.scss";
import isEmail from "validator/lib/isEmail";
import isMobile from "validator/lib/isMobilePhone";

export default function DetailsFrom(){

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);
    const messageRef = useRef(null);

    const [details, setDetails] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const [isSubmit, setIsSubmit] = useState(false);

    const focusHandler = (event: FocusEvent, ref: MutableRefObject<HTMLLabelElement | null>) => {
        const target = (event.target as HTMLInputElement);
        const value = `${target.value.trim()}`;
        const tempErrors = {...errors};
        tempErrors[target.id as keyof typeof errors] = "";
        if(!(ref.current as HTMLLabelElement).classList.contains("field__label--hide")){
            (ref.current as HTMLLabelElement).classList.add("field__label--hide");
        }
        setErrors(tempErrors);
    }

    const focusOutHandler = (event: FocusEvent, ref: MutableRefObject<HTMLLabelElement | null>) => {
        const target = (event.target as HTMLInputElement);
        const value = `${target.value.trim()}`;
        const id = target.id;
        if(!value){
            if((ref.current as HTMLLabelElement).classList.contains("field__label--hide")){
                (ref.current as HTMLLabelElement).classList.remove("field__label--hide");
            }
            (event.target as HTMLInputElement).value = "";
        }
    }

    const submitHandler = (event: FormEvent) => {
        event.preventDefault();
        const {name, phone, email, message} = details;

        setErrors({
            name: name ? "" : "Can't be empty",
            email: isEmail(email) ? "" : "Invalid format",
            phone: isMobile(phone) ? "" : "Invalid format",
            message: message ? "" : "Can't be empty"
        });

        if(!name || !isEmail(email) || !isMobile(phone) || !message){
            setIsSubmit(true);
        }
    }

    const changeHandler = (event: ChangeEvent) => {
        const target = (event.target as HTMLInputElement);
        const id = target.id;
        const temp = {...details};

        temp[id as keyof typeof details] = target.value;
        setDetails(temp);
    }

    return(
        <form className={`${styles["detail"]}`} onSubmit={submitHandler}>
            <div className={`field ${styles["detail__field"]}`}>
                <label htmlFor="name" className={`field__label`} ref={nameRef}>Name</label>
                <input defaultValue={details.name} type="text" name="name" id="name" className={`field__input`} onFocus={(e) => focusHandler(e, nameRef)} onBlur={(e) => focusOutHandler(e, nameRef)} onChange={changeHandler}/>
                {(isSubmit && !!errors.name) ? <p className={`field__error`}>{errors.name}</p> : null}
            </div>
            <div className={`field ${styles["detail__field"]}`}>
                <label htmlFor="email" className={`field__label`} ref={emailRef}>Email</label>
                <input defaultValue={details.email} type="text" name="email" id="email" className={`field__input`} onFocus={(e) => focusHandler(e, emailRef)} onBlur={(e) => focusOutHandler(e, emailRef)} onChange={changeHandler}/>
                {(isSubmit && !!errors.email) ? <p className={`field__error`}>{errors.email}</p> : null}
            </div>
            <div className={`field ${styles["detail__field"]}`}>
                <label htmlFor="phone" className={`field__label`} ref={phoneRef}>Phone</label>
                <input defaultValue={details.phone} type="text" name="phone" id="phone" className={`field__input`} onFocus={(e) => focusHandler(e, phoneRef)} onBlur={(e) => focusOutHandler(e, phoneRef)} onChange={changeHandler}/>
                {(isSubmit && !!errors.phone) ? <p className={`field__error`}>{errors.phone}</p> : null}
            </div>
            <div className={`field ${styles["detail__field"]}`}>
                <label htmlFor="message" className={`field__label field__label--textarea`} ref={messageRef}>Your Message</label>
                <textarea defaultValue={details.message} name="message" id="message" className={`field__input field__input--textarea`} onFocus={(e) => focusHandler(e, messageRef)} onBlur={(e) => focusOutHandler(e, messageRef)} onChange={changeHandler}>
                </textarea>
                {(isSubmit && !!errors.message) ? <p className={`field__error`}>{errors.message}</p> : null}
            </div>
            <button className={`btn btn__dark ${styles["detail__submit"]}`}>SUBMIT</button>
        </form>
    );
}