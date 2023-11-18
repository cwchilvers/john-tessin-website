import Hero from './Hero/Hero';
import Overlay from './Overlay/Overlay';
import Title from './Title/Title';
import Navigation from './Navigation/Navigation';

const Home = () => {
    return (
        <section id='home' className='home'>
            <Hero />
            <Overlay />
            <Title />
            <Navigation />
        </section>
    );
};

export default Home;