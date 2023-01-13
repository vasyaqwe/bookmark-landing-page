import Logo from "./Logo"
import { ReactComponent as TwitterLogo } from '../assets/icon-twitter.svg'
import { ReactComponent as FacebookLogo } from '../assets/icon-facebook.svg'

function Footer() {

    return (
        <footer className="footer bg-primary-900">
            <div className="container">
                <Logo />
                <nav className="footer-nav">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a className="fs-400 uppercase text-white nav-link" href="#">
                                Features</a></li>
                        <li className="nav-item">
                            <a className="fs-400 uppercase text-white nav-link" href="#">
                                Pricing</a></li>
                        <li className="nav-item">
                            <a className="fs-400 uppercase text-white nav-link" href="#">
                                Contact</a></li>
                    </ul>
                    <ul className="socials-list">
                        <li className="socials-item"><a className="socials-link" href="#">
                            <TwitterLogo /></a></li>
                        <li className="socials-item"><a className="socials-link" href="#">
                            <FacebookLogo /></a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Footer