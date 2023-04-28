import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters/index';
import { useState, useEffect } from 'react';
import Stars from '../Stars';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

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
                        <form>
                            <ul>
                                <li className='half'> 
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>
                                <li className='half'> 
                                    <input type='email' name='email' placeholder='Email' required />
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