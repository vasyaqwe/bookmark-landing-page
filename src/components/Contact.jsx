
function Contact() {

    return (
        <section className="section contact bg-accent-primary">
            <div className="container flow" style={{ '--flow-space': '2rem' }}>
                <p className="fs-300 text-center text-white uppercase letter-spacing-large">35,000+ Already joined</p>
                <h2 className="fs-800 fw-500 text-center text-white">Stay up-to-date with what <br /> we're doing</h2>
                <form className="flex">
                    <input type="email" className="input" placeholder="Enter your email address" />
                    <button className="btn btn-danger">Contact Us</button>
                </form>
            </div>
        </section>
    )
}

export default Contact