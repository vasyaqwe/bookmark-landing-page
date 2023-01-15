import { accordions } from '../data.jsx'
import Accordion from './Accordion'

function FAQ() {

    return (
        <section className="section faq container">
            <h2 className="fs-800 fw-500 text-center text-primary-900">Frequently Asked Questions</h2>
            <p className="fs-400 text-neutral-400"></p>
            {accordions.map(item => (
                <Accordion key={item.question} {...item} />
            ))}
            <a href="#" className="btn btn-primary">More info</a>
        </section>
    )
}

export default FAQ