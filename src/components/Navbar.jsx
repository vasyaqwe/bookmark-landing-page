
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
                    <a href="#" className="btn btn-danger text-center btn-login letter-spacing uppercase">Login</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar