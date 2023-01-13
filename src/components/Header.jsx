import { useState } from "react"
import Logo from "./Logo"
import Navbar from "./Navbar"
import { ReactComponent as MenuIcon } from '../assets/icon-hamburger.svg'

function Header() {
    const [navOpen, setNavOpen] = useState(false)

    return (
        <header className="primary-header">
            <Logo />
            <Navbar />
            <button className="sr-only nav-toggle">
                <MenuIcon />
            </button>
        </header>
    )
}

export default Header