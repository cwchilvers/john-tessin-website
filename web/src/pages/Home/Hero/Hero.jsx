import Video from '../../../assets/videos/hero.mp4'

import './Hero.sass';

const Hero = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted>
                <source src={Video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default Hero;