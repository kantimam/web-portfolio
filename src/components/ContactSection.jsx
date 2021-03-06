import React, { forwardRef, memo, useState } from 'react'


const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

const ContactSection = forwardRef((props, ref) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const [send, setSend] = useState({ succes: false, message: "" });

    const sendMail = (event) => {
        event.preventDefault();

        fetch("/", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: encode({ "form-name": "contact", "name": name, "email": email, "message": message })
        }).then(res =>
            createMessage(true, "succesfully send")
        ).catch(_e => createMessage(false, "failed to send"))

    }

    const createMessage = (succes, message) => {
        setSend({ succes: succes, message: message })
        setTimeout(() => setSend({ succes: false, message: "" }), 4000);
    }

    return (
        <section ref={ref} className="contactSection flexCenterAll">
            <div className="inner">
                {/* <h3 className="sectionHeader">
                    {"<contact>"}
                </h3> */}
                <div className="formContainer  neomorphism">

                    {/* <img src={contact} alt="" /> */}
                    <form onSubmit={sendMail}>
                        {send.message &&
                            <div onClick={() => setSend({ succes: false, message: "" })} className="succesMessage flexCenterAll">
                                {send.succes ?
                                    <h3 className="messageSucces">
                                        {send.message}
                                    </h3> :
                                    <h3 className="messageFail">
                                        {send.message}
                                    </h3>
                                }
                            </div>
                        }

                        <label className="required" htmlFor="message">message</label>
                        <textarea
                            data-testid="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="would be happy to hear from you! :) "
                            id="message"
                            className="neomorphismInvert"
                            name="message"
                            cols="30"
                            rows="10"
                            required>
                        </textarea>
                        <div className="contactRow">
                            <div>
                                <label htmlFor="nameInput">name</label>
                                <input
                                    data-testid=""
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="let me know your name :)"
                                    type="text"
                                    name="name"
                                    id="nameInput"
                                    className="neomorphismInvert"
                                />
                            </div>
                            <div>
                                <label className="required" htmlFor="emailInput">email</label>
                                <input
                                    data-testid="mail"
                                    className="neomorphismInvert"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder="some way to contact you"
                                    type="email"
                                    name="email"
                                    id="emailInput"
                                    required
                                />
                            </div>

                        </div>
                        <input className="gradientButton" id="submitInput" type="submit" value="SEND MESSAGE" />
                    </form>
                </div>
                <div className="aboutContainer neomorphism">
                    <h3>let's connect</h3>
                    <p>Can I be of service or just want to chat?</p>
                    <div className="aboutInner">
                        <p className="aboutName">Kantemir Imamov</p>
                        <p >Software Engineer with a passion for graphics and novel ideas based in Berlin.</p>
                        <a className="mailLink" href="mailto:kantemir.imam@gmail.com">kantemir.imam@gmail.com</a>
                        <a className="aboutGhLink" href="https://github.com/kantimam" target="_blank" rel="noopener noreferrer">Kant Imam Github</a>
                        <div className="currentStatus">
                            currently available
                        </div>
                    </div>
                </div>
            </div>

        </section >
    )
})

export default memo(ContactSection)
