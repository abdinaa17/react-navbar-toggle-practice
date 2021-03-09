import React, {useState} from 'react'

const Header = () => {

const [showNav, setShowNav] = useState(false)
    const handleClick = () => {
        setShowNav(!showNav)
    }
    return (
        <header className='header'>
            <nav className="navbar">
                <div className="logo">
                    <h1>Maneno</h1>
                </div>

                <ul className={showNav? 'navbar__links show': 'navbar__links'}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Services</a></li>
                    <li><a href="/">Products</a></li>
                    <li><a href="/">Careers</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Contact</a></li>

                </ul>
                <div className="navbar__hamurger">
                    <span className='bars' onClick={handleClick}></span>
                    
                </div>
            </nav>
        </header>
    )
}

export default Header
