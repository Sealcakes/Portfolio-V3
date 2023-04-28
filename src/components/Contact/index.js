import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters/index';
import { useState, useEffect, useRef } from 'react';
import Stars from '../Stars';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_h1qbask',
                'template_5tk58yb',
                refForm.current,
                '_YhMfD5IJfuA1xY4w'
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false);
                },
                () => {
                    alert('Failed to send message, please try again!')
                }
            )
    }

    return (
        <>
            <div className='container contact-page'>
                <Stars />
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                          letterClass={letterClass}
                          strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                          idx={15}
                        />
                    </h1>
                    <p>
                        I am always interested in exciting freelance opportunities - especially projects that pique my interests.
                        If you have any other requests or questions, please don't hesitate to contact me
                        using the form below either.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'> 
                                    <input type='text' name='from_name' placeholder='Name' required />
                                </li>
                                <li className='half'> 
                                    <input type='email' name='user_email' placeholder='Email' required />
                                </li>
                                <li> 
                                    <input type='text' name='subject' placeholder='Subject' required />
                                </li>
                                <li>
                                    <textarea name='message' placeholder='Message' required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
};

export default Contact;