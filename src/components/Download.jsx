import { browsers } from '../data'
import Card from './Card'

function Download() {

    const cards = browsers.map(browser => (
        <Card key={browser.name} {...browser} />
    ))
    return (
        <section className="section download container">
            <h2 className="fs-800 fw-500 text-center text-primary-900">Download the extension</h2>
            <p className="fs-400 text-neutral-400 text-center max-width">
                We've got more browsers in the pipeline. Please do let us know if
                you've got a favourite you'd like us to prioritize.
            </p>
            <div className="cards">
                {cards}
            </div>
        </section>
    )
}

export default Download