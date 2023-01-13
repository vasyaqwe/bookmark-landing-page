
function Navbar({ open }) {

    return (
        <nav className="primary-nav">
            <ul className="nav-list">
                <li className="nav-item">
                    <a className="nav-link | uppercase" href="#">
                        Features
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link | uppercase" href="#">
                        Pricing
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link | uppercase" href="#">
                        Contact
                    </a>
                </li>
            </ul>
            <button className="btn | uppercase">Login</button>
        </nav>
    )
}

export default Navbar