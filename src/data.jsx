import { ReactComponent as ChromeLogo } from './assets/logo-chrome.svg'
import { ReactComponent as FirefoxLogo } from './assets/logo-firefox.svg'
import { ReactComponent as OperaLogo } from './assets/logo-opera.svg'
import img1 from './assets/illustration-features-tab-1.svg'
import img2 from './assets/illustration-features-tab-2.svg'
import img3 from './assets/illustration-features-tab-3.svg'

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
export const accordions = [
    {
        question: 'What is Bookmark?',
        answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolor facilis ipsa! Quae commodi minima architecto eveniet totam autem beatae error. Excepturi quaerat praesentium unde saepe ipsum, aperiam quibusdam laboriosam.'
    },
    {
        question: 'How can I request a new browser?',
        answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolor facilis ipsa! Quae commodi minima architecto eveniet totam autem beatae error. Excepturi quaerat praesentium unde saepe ipsum, aperiam quibusdam laboriosam.'
    },
    {
        question: 'Is there a mobile app?',
        answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolor facilis ipsa! Quae commodi minima architecto eveniet totam autem beatae error. Excepturi quaerat praesentium unde saepe ipsum, aperiam quibusdam laboriosam.'
    },
    {
        question: 'What about other Chromium browsers?',
        answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolor facilis ipsa! Quae commodi minima architecto eveniet totam autem beatae error. Excepturi quaerat praesentium unde saepe ipsum, aperiam quibusdam laboriosam.'
    },
]
export const features = [
    {
        tabTitle: 'Simple Bookmarking',
        featureTitle: 'Bookmark in one click',
        description: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
        img: img1
    },
    {
        tabTitle: 'Speedy Searching',
        featureTitle: 'Intelligent search',
        description: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
        img: img2
    },
    {
        tabTitle: 'Easy Sharing',
        featureTitle: 'Share your bookmarks',
        description: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
        img: img3
    },
]