import Button from "../buttons/Button";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useState } from "react";

const ContactForm = () => {
  
  const viaChat = () => {
    console.log("Hello")
  }

  // let name;
  // let email;
  // let text;

  const [name, setName] = useState("xyz");
  const [email, setEmail] = useState("xyz@gmail.com");
  const [text, setText] = useState("my name is xyz");

  const formHandler = (e) =>{
    e.preventDefault();
    setName(e.target[0].value);
    setEmail(e.target[1].value);
    setText(e.target[2].value);


    // name = e.target[0].value;
    // email = e.target[1].value;
    // text = e.target[2].value;

    // console.log("name",e.target[0].value);
    // console.log("email",e.target[1].value);
    // console.log("text",e.target[2].value);
  }

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button onClick={viaChat} text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="22px" />}/>
          <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="22px" />} />
        </div>
        <Button isOutline={true} text="VIA EMAIL FORM" icon={<HiMail fontSize="22px" />} />

        {/* <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="SUBMIT BUTTON" />
          </div>

          <div>{name + " " + email + " " + text}</div>
        </form> */}

        <form onSubmit={formHandler}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name"/>
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email"/>
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">text</label>
            <textarea  name="text"/>
          </div>
          <div style={{display:"flex", justifyContent:"end"}}>
            <Button text="Submit button" />
          </div>

          <div>
            <div>{name + ", " + email + ", " + text}</div>
          </div>

        </form>

      </div>

      <div className={styles.contact_image}>
        <img src="/images/Service 24_7-pana 1.svg" alt="contact image" />
      </div>

    </section>
  );
};

export default ContactForm;