import heroImg from '../assets/illustration-hero.svg'

function Hero() {

    return (
        <section className="section hero container even-cols">
            <div className='flow' style={{ '--flow-space': '1.5rem' }}>
                <h1 className='title fs-900 fw-500 text-primary-900 mobile-text-center'>A Simple Bookmark <br /> Manager</h1>
                <p className='hero-description fs-400 text-neutral-400 mobile-text-center'>
                    A clean and simple interface to organize your favourite
                    websites. Open a new browser tab and see your sites load
                    instantly. Try it for free.
                </p>
                <div className="flex">
                    <a className='btn btn-primary' href="#">Get it on Chrome</a>
                    <a className='btn btn-neutral' href="#">Get it on Firefox</a>
                </div>
            </div>
            <img src={heroImg} alt="illustration of Bookmark on a desktop" />
        </section>
    )
}

export default Hero