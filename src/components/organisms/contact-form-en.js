import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const SERVICE_ID = 'service_p4ty08n'
const TEMPLATE_ID = 'template_jesklnf'
const USER_ID = 'user_fl3vwYlcnb86cCybHTq4l'


const ContactFormEn = () => {
    const form = useRef();

    const [isLoading, setIsLoading] = useState(false)
    const [inputErrorName, setInputErrorName] = useState()
    const [inputErrorEmail, setInputErrorEmail] = useState()
    const [inputErrorMessage, setInputErrorMessage] = useState()
    const [success, setSuccess] = useState(false)


    const errorStyle = {
        borderColor: 'red',   
    }

    const checkForInput = () => {
        //Workaround jer se state ne updatea dovoljno brzo
        let inputErrors = {
            name: false,
            email: false,
            msg: false
        }

        if(form.current.from_name.value === '') {
            inputErrors.name = true
            setInputErrorName(true)
        }

        if(form.current.from_email.value === ''){
            inputErrors.email = true
            setInputErrorEmail(true)
        } 

        if(form.current.message.value === '' ) {
            inputErrors.msg = true
            setInputErrorMessage(true)
        }

        return inputErrors;
    }

    const sendEmail = (e) => {
        if(!checkForInput().name && !checkForInput().email && !checkForInput().msg) {
            setIsLoading(true)

            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
            .then((result) => {
                
                setIsLoading(false)
                console.log(result.text);
                if(result.status === 200) {
                    setSuccess(true)
                }
            }, (error) => {
                console.log(error.text);
            });
            e.preventDefault();
        }
        e.preventDefault();

    };

    return (
        <div className="contact-div">
            {
            success ? (
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <iframe style={{borderWidth: '0px'}} title="animation" src="https://embed.lottiefiles.com/animation/69380"></iframe>
                </div>
            ) : (
                <form  ref={form} onSubmit={sendEmail}>
                    <div className="contact-input-div">
                        <input 
                            className="input-name" 
                            style={inputErrorName ? errorStyle : {}} 
                            onFocus={() => setInputErrorName(false)} 
                            type="text" 
                            name="from_name" 
                            placeholder="Your name"
                            onChange={(t) => t.target.value === "" ? setInputErrorName(true) : setInputErrorName(false)  } />
                            
                    </div>
        
                    <div className="contact-input-div">
                        <input 
                            className="input-email" 
                            type="email" 
                            name="from_email" 
                            placeholder="Email" 
                            style={inputErrorEmail ? errorStyle : {}} 
                            onFocus={() => setInputErrorEmail(false)}
                            onChange={(t) => t.target.value === "" ? setInputErrorEmail(true) : setInputErrorEmail(false)  } /> 
                    </div>
        
                    <div className="contact-input-div">
                        <textarea 
                            className="input-message" 
                            name="message" 
                            placeholder="Message" 
                            rows='5' 
                            style={inputErrorMessage ? errorStyle : {}} 
                            onFocus={() => setInputErrorMessage(false)} 
                            onChange={(t) => t.target.value === "" ? setInputErrorMessage(true) : setInputErrorMessage(false)  } />
                    </div>
                    
                    {
                        isLoading ? <iframe src="https://embed.lottiefiles.com/animation/9619" style={{borderWidth: '0px', width: '60%', height: '150px'}} title='s'/> 
                        : <input className="contact-btn" type="submit" value="Pošalji" />
                    }
                </form>
            )
            }
        </div>

    );
};

export default ContactFormEn