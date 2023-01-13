import { ReactComponent as ChromeLogo } from '../assets/logo-chrome.svg'
import { ReactComponent as FirefoxLogo } from '../assets/logo-firefox.svg'
import { ReactComponent as OperaLogo } from '../assets/logo-opera.svg'
import Card from './Card'

function Download() {
    const browsers = [
        {
            name: 'Chrome',
            minVersion: 62,
            logo: <ChromeLogo />
        },
        {
            name: 'Firefox',
            minVersion: 55,
            logo: <FirefoxLogo />
        },
        {
            name: 'Opera',
            minVersion: 46,
            logo: <OperaLogo />
        }
    ]
    const cards = browsers.map(browser => (
        <Card data={...browser} />
    ))
    return (
        <section className="section download container">
            <h2 className="fs-800 fw-500 text-center text-primary-900">Download the extension</h2>
            <p className="fs-400 text-neutral-400"></p>
            {cards}
        </section>
    )
}

export default Download