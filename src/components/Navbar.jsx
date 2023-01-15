
function Navbar({ open }) {

    return (
        <nav className="primary-nav">
            <ul className="nav-list">
                <li className="nav-item">
                    <a className="nav-link | fs-400 letter-spacing uppercase" href="#">
                        Features
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link | fs-400 letter-spacing uppercase" href="#">
                        Pricing
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link | fs-400 letter-spacing uppercase" href="#">
                        Contact
                    </a>
                </li>
            </ul>
            <button className="btn btn-danger | fs-400 letter-spacing uppercase">Login</button>
        </nav>
    )
}

export default Navbar