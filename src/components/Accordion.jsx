import { useState } from "react"

function Accordion({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="accordion">
            <h4 className="fw-400 accordion-question">
                {question}
            </h4>
            <p>{answer}</p>
        </div>
    )
}

export default Accordion