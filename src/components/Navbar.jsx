
function Navbar({ open }) {

    return (
        <nav className="primary-nav" data-visible={open}>
            <ul className="nav-list">
                <li className="nav-item">
                    <a className="nav-link letter-spacing uppercase" href="#">
                        Features
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link letter-spacing uppercase" href="#">
                        Pricing
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link letter-spacing uppercase" href="#">
                        Contact
                    </a>
                </li>
                <li className="nav-item">
                    <button className="btn btn-danger btn-login letter-spacing uppercase">Login</button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar