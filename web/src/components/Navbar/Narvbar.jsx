import React from 'react';

import './Header.sass';

const Header = () => {
    // Scroll to section
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header>
            <div className='logo'>
                <h1 onClick={() => scrollToSection('home')}>John Tessin</h1>
                <h2>Drummer</h2>
            </div>
            <div className='divider'></div>
            <nav>
                <div>
                    <button onClick={() => scrollToSection('about')}>
                        ABOUT
                        <div className='underline'></div>
                    </button>
                </div>
                <div>
                    <button>
                        EVENTS
                        <div className='underline'></div>
                    </button>
                </div>
                <div>
                    <button>
                        MEDIA
                        <div className='underline'></div>
                    </button>
                </div>
                <div>
                    <button>
                        CONTACT
                        <div className='underline'></div>
                    </button>
                </div>
            </nav>
            <div className='underline-header'></div>
        </header>
    );
};

export default Header;