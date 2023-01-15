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
                <nav className="features-nav">
                    <ul className="tab-list">
                        {features.map((item, i) => (
                            <li key={i} className={`feature-tab text-center ${item === selectedTab ? 'selected' : ''}`}
                                onClick={() => setSelectedTab(item)}>
                                <span className="feature-tab-text text-center">{item.tabTitle}
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
                        <img src={selectedTab.img} className="mobile-text-center" alt="bookmark extension illustration" />
                        <div className="flow tab-text">
                            <h2 className="fs-800 fw-500 mobile-text-center text-primary-900">{selectedTab.featureTitle}</h2>
                            <p className="fs-400 text-neutral-400 mobile-text-center">{selectedTab.description}</p>
                            <a href="#" className="btn btn-primary">More Info</a>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    )
}

export default Features