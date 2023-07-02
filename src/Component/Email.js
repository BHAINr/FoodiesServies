import React, {useRef} from 'react';
import emailjs from "@emailjs/browser";
import './Email.css';
const Email = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ouhzkri', 'template_067xgms', form.current, '2x6zsykgC3fwqrbOV')
            .then((result) => {
                console.log(result.text);
                console.log("Email sended");
                alert("Thanks for enquiry !")
            }, (error) => {
                console.log(error.text);
                console.log("Email sendeding error ");
            });
        
    };
    return (
        <div className='container'>
            <div className="row1">
                
                <form ref={form} onSubmit={sendEmail} className="loginfome">
                <h2 id='comm'>Any Enquiry </h2>
                    <div className="loginEmail">

                        <input type="text" required name="user_name" placeholder="name" />

                        <input type="email" required name="user_email" placeholder="email" />

                        <textarea className="textarea" name="message" required placeholder="message" />
                        <div><input type="submit" required value="Submit" /></div>
                    </div>


                </form>
            </div>
        </div>
    )
}

export default Email
