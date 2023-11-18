import './Navigation.sass';

const Navigation = () => {
    const scrollToSection = (section) => {
        const element = document.getElementById(section);
        element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='nav-container'>
            <nav>
                <button className="btn-6" onClick={() => scrollToSection('about')}>
                    ABOUT
                </button>
                <button>
                    EVENTS
                </button>
                <button>
                    MEDIA
                </button>
                <button>
                    CONTACT
                </button>
            </nav>
        </div>
    );
}

export default Navigation;