import React, { forwardRef, memo, useState } from 'react'
import contact from '../images/contact.svg';

const ContactSection = forwardRef((props, ref) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const [send, setSend]=useState({succes: false, message: ""});

    const sendMail = (event) => {
        event.preventDefault();
        const url = process.env.REACT_APP_API_BASE+"/sendmail";

        var urlencoded = new URLSearchParams();
        urlencoded.append("email", email);
        urlencoded.append("message", message);
        urlencoded.append("name", name);
        console.log(urlencoded)

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: urlencoded
        }).then(res => 
            res.json()           
        ).then(_data =>{
            createMessage(true, "succesfully send")
        })
        .catch(_e => createMessage(false, "failed to send send"))

    }

    const createMessage=(succes, message)=>{
        setSend({succes: succes, message: message})
        setTimeout(()=>setSend({succes: false, message: ""}), 4000);
    }

    return (
        <section ref={ref} className="contactSection flexCenterAll">
            <div className="inner">
                <h1>get in contact</h1>
                <img src={contact} alt="" />
                <form onSubmit={sendMail}>
                    {send.message && 
                        <div onClick={()=>setSend({succes: false, message: ""})} className="succesMessage flexCenterAll">
                            {send.succes?
                                <h3 className="messageSucces">
                                    {send.message}
                                </h3>:
                                <h3 className="messageFail">
                                    {send.message}
                                </h3>
                            }
                        </div>
                    }

                    <label className="required" htmlFor="message">message</label>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="would be happy to hear from you! :) " id="message" name="message" cols="30" rows="10" required></textarea>
                    <div className="contactRow">
                        <div>
                            <label htmlFor="nameInput">name</label>
                            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="let me know your name :)" type="text" name="name" id="nameInput" />
                        </div>
                        <div>
                            <label className="required" htmlFor="emailInput">email</label>
                            <input value={email} onChange={e => setEmail(e.target.value)} placeholder="some way to contact you" type="email" name="mail" id="emailInput" required />
                        </div>

                    </div>
                    <input id="submitInput" type="submit" value="SEND MESSAGE" />
                </form>
            </div>

        </section>
    )
})

export default memo(ContactSection)
