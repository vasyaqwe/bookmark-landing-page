import heroImg from '../assets/illustration-hero.svg'

function Hero() {

    return (
        <section className="section hero container">
            <div>
                <h1 className='fs-900 fw-500 text-primary-900 mobile-text-center'>A Simple Bookmark Manager</h1>
                <p className='fs-400 text-neutral-400 mobile-text-center'></p>
                <div className="flex">
                    <a className='btn btn-primary | fw-500' href="#">Get it on Chrome</a>
                    <a className='btn btn-neutral | fw-500' href="#">Get it on Firefox</a>
                </div>
            </div>
            <img src={heroImg} alt="illustration of Bookmark on a desktop" />
        </section>
    )
}

export default Hero