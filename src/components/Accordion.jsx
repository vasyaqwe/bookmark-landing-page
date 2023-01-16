import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ReactComponent as ArrowIcon } from '../assets/icon-arrow.svg'
import { ReactComponent as ActiveArrowIcon } from '../assets/icon-arrow-active.svg'

function Accordion({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="accordion">
            <div className="flex" style={{ justifyContent: 'space-between' }}>
                <h4 className="fs-500 fw-400 accordion-question" onClick={() => setIsOpen(prev => !prev)}>
                    {question}
                </h4>
                <button style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }} className="btn accordion-toggle"
                    onClick={() => setIsOpen(prev => !prev)}>
                    {isOpen ? <ActiveArrowIcon /> : <ArrowIcon />}
                </button>
            </div>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 }
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        <p className="accordion-answer">{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    )
}

export default Accordion