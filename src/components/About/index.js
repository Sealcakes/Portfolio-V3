import './index.scss';
import AnimatedLetters from '../AnimatedLetters/index';
import Circles from '../Stars/index';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faJsSquare, faNodeJs, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='container about-page'>
                <Circles />
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                        idx={15}
                        />
                    </h1>
                    <p>
                        I am a very ambitious full-stack developer looking for a role within an established
                        company with the opportunity to grow my skills in Front-End and Back-End development
                        using the latest technologies on challenging and diverse projects.
                    </p>
                    <p>
                        I'm outgoing, I learn quickly, and I am constantly working on increasing my knowledge
                        and skills one project at a time.
                    </p>
                    <p>
                        I find it very difficult to quickly define myself as my interests range from a lot 
                        of different areas.  I love my wife, in my free time I enjoy playing guitar or drums, 
                        I play video games when I have the time, I enjoy spending time woodworking and metalworking,
                        I never miss a Cowboys or Mavericks game and most of all I love solving tech problems!
                    </p>
                </div>
                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faNodeJs} color='#3C873A'/>
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default About;