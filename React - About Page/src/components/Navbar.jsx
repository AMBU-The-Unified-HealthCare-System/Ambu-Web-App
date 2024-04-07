import React, { useState } from 'react';
import "./Navbar.css"

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to handle scrolling
    const handleScroll = () => {
        if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    // Function to toggle the menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Attach scroll event listener when component mounts
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header>
            <div id="navbar" style={{ height: isScrolled ? '3.4vw' : '4vw' }}>
                <div id="logo">
                    <a href="/">
                        <img src="images/Navbar-images/ambu logo.webp" alt="ambuvians Logo" id="logo1" style={{ height: isScrolled ? '3.8vw' : '4.5vw' }} />
                    </a>
                </div>
                <div className="right-header">
                    <div>
                        <ul className="links right-header-element">
                            <li>
                                <a href="/">HOME</a>
                            </li>
                            <li>
                                <a href="/">ABOUT</a>
                            </li>
                            <li >
                                <a className='under'
                                    href="/"
                                >
                                    SERVICES
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            gap: "1vw",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <div className="right-header-element language">
                            <select name="language" id="language">
                                <option value="default-language" selected disabled hidden>
                                    Language
                                </option>
                                <option value="english">English</option>
                                <option value="hindi">Hindi</option>
                            </select>
                        </div>
                        <div className="right-header-element">
                            <abbr title="Pic">
                                <img className="pic" src="images/Navbar-images/unnamed.webp" alt="Profile" />
                            </abbr>
                        </div>
                        <div className="toggle_btn" onClick={toggleMenu}>
                            <i className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"}`} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={`dropdown_menu ${isMenuOpen ? "open" : ""}`}>
                <div>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/">About</a>
                        </li>
                        <li>
                            <a href="/">Services</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Navbar;