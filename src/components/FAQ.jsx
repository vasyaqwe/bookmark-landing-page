import { accordions } from '../data.jsx'
import Accordion from './Accordion'

function FAQ() {

    return (
        <section className="section faq container flow" style={{ '--flow-space': '2rem' }}>
            <div className='flow' style={{ '--flow-space': '1rem' }}>
                <h2 className="title fs-800 fw-500 text-center text-primary-900">Frequently Asked Questions</h2>
                <p className="fs-400 text-center text-neutral-400">Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.</p>
            </div>
            <div className="accordions flow">
                {accordions.map(item => (
                    <Accordion key={item.question} {...item} />
                ))}
            </div>
            <a href="#" className="btn btn-primary">More info</a>
        </section>
    )
}

export default FAQ