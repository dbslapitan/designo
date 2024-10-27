"use client";

import { FocusEvent, FormEvent, MutableRefObject, useRef, useState } from "react";
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
        const temp = {...details};
        const tempErrors = {...errors};
        if(!value){
            if((ref.current as HTMLLabelElement).classList.contains("field__label--hide")){
                (ref.current as HTMLLabelElement).classList.remove("field__label--hide");
            }
            (event.target as HTMLInputElement).value = "";
        }
        temp[id as keyof typeof details] = value;
        if(!value){
            tempErrors[id as keyof typeof errors] = "Can't be Empty";
        }
        else{
            tempErrors[id as keyof typeof errors] = "";
        }
        if(id === "email"){
            tempErrors.email = isEmail(value) ? "" : "Email is not valid";
        }
        else if(id === "phone"){
            tempErrors.phone = isMobile(value) ? "" : "Phone is not valid";
        }
        setDetails(temp);
        setErrors(tempErrors);
    }

    const submitHandler = (event: FormEvent) => {
        event.preventDefault();
        setIsSubmit(true);
        console.log(details);
        console.log(errors);
    }

    return(
        <form className={`${styles["detail"]}`} onSubmit={submitHandler}>
            <div className={`field ${styles["detail__field"]}`}>
                <label htmlFor="name" className={`field__label`} ref={nameRef}>Name</label>
                <input type="text" name="name" id="name" className={`field__input`} onFocus={(e) => focusHandler(e, nameRef)} onBlur={(e) => focusOutHandler(e, nameRef)}/>
                {(isSubmit && !!errors.name) ? <p className={`field__error`}>{errors.name}</p> : null}
            </div>
            <div className={`field ${styles["detail__field"]}`}>
                <label htmlFor="email" className={`field__label`} ref={emailRef}>Email</label>
                <input type="text" name="email" id="email" className={`field__input`} onFocus={(e) => focusHandler(e, emailRef)} onBlur={(e) => focusOutHandler(e, emailRef)}/>
                {(isSubmit && !!errors.email) ? <p className={`field__error`}>{errors.email}</p> : null}
            </div>
            <div className={`field ${styles["detail__field"]}`}>
                <label htmlFor="phone" className={`field__label`} ref={phoneRef}>Phone</label>
                <input type="text" name="phone" id="phone" className={`field__input`} onFocus={(e) => focusHandler(e, phoneRef)} onBlur={(e) => focusOutHandler(e, phoneRef)}/>
                {(isSubmit && !!errors.phone) ? <p className={`field__error`}>{errors.phone}</p> : null}
            </div>
            <div className={`field ${styles["detail__field"]}`}>
                <label htmlFor="message" className={`field__label field__label--textarea`} ref={messageRef}>Your Message</label>
                <textarea name="message" id="message" className={`field__input field__input--textarea`} onFocus={(e) => focusHandler(e, messageRef)} onBlur={(e) => focusOutHandler(e, messageRef)}></textarea>
                {(isSubmit && !!errors.message) ? <p className={`field__error`}>{errors.message}</p> : null}
            </div>
            <button className={`btn btn__dark ${styles["detail__submit"]}`}>SUBMIT</button>
        </form>
    );
}