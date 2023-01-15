import { ReactComponent as ChromeLogo } from './assets/logo-chrome.svg'
import { ReactComponent as FirefoxLogo } from './assets/logo-firefox.svg'
import { ReactComponent as OperaLogo } from './assets/logo-opera.svg'

export const browsers = [
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
export const features = [
    {
        tabTitle: 'Simple Bookmarking',
        featureTitle: 'Bookmark in one click',
        description: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
        img: '/src/assets/illustration-features-tab-1.svg'
    },
    {
        tabTitle: 'Speedy Searching',
        featureTitle: 'Intelligent search',
        description: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
        img: '/src/assets/illustration-features-tab-2.svg'
    },
    {
        tabTitle: 'Easy Sharing',
        featureTitle: 'Share your bookmarks',
        description: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
        img: '/src/assets/illustration-features-tab-3.svg'
    },
]