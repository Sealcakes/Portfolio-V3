import Loader from 'react-loaders';
import './index.scss';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Stars from '../Stars';
import mixingpot from '../../assets/images/mixingpot.gif';
import parkingbuddy from '../../assets/images/ParkingBuddy.gif';
import socialnetwork from '../../assets/images/socialnetworkapi.png';

const portfolioData = [
    {
        coverGif: mixingpot,
        title: "Mixing Pot",
        description: "Ingredient based recipe search",
        techUsed: "HTML, CSS, Bulma, JavaScript, 3rd Party APIs",
        url: "https://three-amigos-recipes.github.io/three-amigos-recipes/",
        code: "https://github.com/three-amigos-recipes/three-amigos-recipes"
    },
    {
        coverGif: parkingbuddy,
        title: "ParkingBuddy",
        description: "Apartment Parking Administration Tool for handling Residents and Guests",
        techUsed: "Handlebars, Express, MySql, Bootstrap CSS, JavaScript",
        url: "https://serene-cove-30368.herokuapp.com/",
        code: "https://github.com/SMU-CodingBootcamp-Project2/ParkingBuddy"
    },
    {
        coverGif: socialnetwork,
        title: "Social Network API",
        description: "Back-end API for a Social Network",
        techUsed: "MongoDB, Express",
        url: "https://drive.google.com/file/d/1hgi0bG6D0s801b79fj0pelYg5XHtMcsl/view",
        code: "https://github.com/Sealcakes/Social-Network-API"
    }
]

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
                                    <h5 className='card-tech-used'>{port.techUsed}</h5>
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
                    <div>{renderPortfolio(portfolioData)}</div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Portfolio;