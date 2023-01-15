import { useState } from "react"
import { features } from "../data"
import { AnimatePresence, motion } from 'framer-motion'

function Features() {
    const [selectedTab, setSelectedTab] = useState(features[0])

    return (
        <section className="section features container flow">
            <h2 className="fs-800 fw-500 text-center text-primary-900">Features</h2>
            <p className="fs-400 text-neutral-400"></p>
            <div className="tabs">
                <nav>
                    <ul>
                        {features.map((item, i) => (
                            <li key={i} className='feature-tab text-primary-900 mobile-text-center'
                                onClick={() => setSelectedTab(item)}>
                                <span className="feature-tab-text">{item.tabTitle}
                                    {item === selectedTab ? (
                                        <motion.div className="underline bg-accent-danger" layoutId="underline" />
                                    ) : null}
                                </span>
                            </li>
                        ))}
                    </ul>
                </nav>
                <AnimatePresence exitBeforeEnter>
                    <motion.div className="even-cols feature-container"
                        key={selectedTab.tabTitle}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <img src={selectedTab.img} alt="bookmark extension illustration" />
                        <div>
                            <h2 className="fs-800 fw-500 text-center text-primary-900">{selectedTab.featureTitle}</h2>
                            <p className="fs-400 text-neutral-400 mobile-text-center">{selectedTab.description}</p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    )
}

export default Features