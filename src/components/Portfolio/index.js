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

    const renderPortfolio = (portfolio) => {
        return (
            <div className='images-container'>
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className='image-box' key={idx}>
                                <img
                                  src={port.coverGif}
                                  className='card-image'
                                  alt='portfolio'
                                />
                                <div className='portfolio-content'>
                                    <h3 className='card-title'>{port.title}</h3>
                                    <h4 className='card-description'>{port.description}</h4>
                                    <button className='card-btn'
                                      onClick={() => window.open(port.url)}
                                    >View Page</button>
                                    <button className='card-btn'
                                      onClick={() => window.open(port.code)}
                                    >View Code</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

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
                    <div>{renderPortfolio(portfolioData.portfolio)}</div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Portfolio;