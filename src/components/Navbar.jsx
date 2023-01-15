
function Navbar({ open }) {

    return (
        <nav className="primary-nav">
            <ul className="nav-list">
                <li className="nav-item">
                    <a className="nav-link text-primary-900 | letter-spacing uppercase" href="#">
                        Features
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-primary-900 | letter-spacing uppercase" href="#">
                        Pricing
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-primary-900 | letter-spacing uppercase" href="#">
                        Contact
                    </a>
                </li>
                <li className="nav-item">
                    <button className="btn btn-danger | letter-spacing uppercase">Login</button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar