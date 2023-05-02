import Loader from 'react-loaders';
import './index.scss';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Stars from '../Stars';
import portfolioData from '../../data/portfolio.json';

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    console.log(portfolioData)
    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='container portfolio-page'>
                <Stars />
                <div className='text-zone'>
                    <h1 className='page-title'>
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray={'Portfolio'.split('')}
                        idx={15}
                        />
                    </h1>
                    {/* <div>{renderPortfolio()}</div> */}
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Portfolio;