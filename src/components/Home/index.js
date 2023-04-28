import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { useState, useEffect } from 'react';
import Stars from '../Stars/index';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['T', 'a', 'y', 'l', 'o', 'r', ' ', 'S', 'e', 'a', 'l'];
    const jobArray = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];

    useEffect(() => {
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 4000)
    }, [])

    return (
      <>
        <div className="container home-page">
            <Stars />
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m&nbsp;</span>
                <AnimatedLetters 
                  letterClass={letterClass}
                  strArray={nameArray}
                  idx={15}
                />
                <br />
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={jobArray}
                  idx={26}
                />
                </h1>
                <h2>Full Stack Developer / Software Engineer / JavaScript Intermediate</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
        <Loader type='pacman' />
      </>
    )
};

export default Home;