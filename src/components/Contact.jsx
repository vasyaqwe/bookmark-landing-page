import { useRef } from "react"
import { useState } from "react"

function Contact() {
    const [errorShown, setErrorShown] = useState(false)
    const inputRef = useRef(null)

    function handleSubmit(e) {
        if (!inputRef.current.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            e.preventDefault()
            setErrorShown(true)
        }
    }
    console.log(errorShown)
    return (
        <section className="section contact bg-accent-primary">
            <div className="container flow" style={{ '--flow-space': '2rem' }}>
                <p className="fs-300 text-center text-white uppercase letter-spacing-large">35,000+ Already joined</p>
                <h2 className="fs-800 fw-500 text-center text-white">Stay up-to-date with what <br /> we're doing</h2>
                <form className="flex" onSubmit={handleSubmit} noValidate>
                    <div className="input-wrapper flex">
                        <input ref={inputRef} type="email" className={`input ${errorShown ? 'error' : ''}`} placeholder="Enter your email address" />
                        {errorShown && <i className="input-error">Whoops, make sure it's an email</i>}
                    </div>
                    <button className="btn btn-danger">Contact Us</button>
                </form>
            </div>
        </section>
    )
}

export default Contact