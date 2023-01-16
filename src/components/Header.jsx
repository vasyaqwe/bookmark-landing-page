import { useState } from "react"
import { ReactComponent as Logo } from '../assets/logo-bookmark.svg'
import { ReactComponent as LogoNav } from '../assets/logo-bookmark-mobile-nav.svg'
import Navbar from "./Navbar"
import { ReactComponent as MenuIcon } from '../assets/icon-hamburger.svg'
import { ReactComponent as CloseIcon } from '../assets/icon-close.svg'

function Header() {
    const [navOpen, setNavOpen] = useState(false)

    return (
        <header className="primary-header container">
            {navOpen ? <LogoNav className="logo" /> : <Logo />}
            <Navbar open={navOpen} />
            <button onClick={() => setNavOpen(prev => !prev)} className="nav-toggle">
                <span className="sr-only">Menu</span>
                {navOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
        </header>
    )
}

export default Header