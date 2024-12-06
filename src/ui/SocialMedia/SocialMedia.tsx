import {FunctionComponent} from 'react'

import { pathToImages } from '../'

type socialMediaType = {
    socialMedia: string,
    icon: string,
    link: string
}

const socialMedia: socialMediaType[] = [
    {
        socialMedia: 'Instagram',
        icon: 'instagram.svg',
        link: 'https://instagram.com'
    },
    {
        socialMedia: 'X - Twitter',
        icon: 'twitter.svg',
        link: 'https://twitter.com'
    },
    {
        socialMedia: 'Facebook',
        icon: 'facebook.svg',
        link: 'https://facebook.com'
    },
    {
        socialMedia: 'Telegram',
        icon: 'telegram.svg',
        link: 'https://desktop.telegram.org'
    },
]

export const SocialMedia: FunctionComponent = () => {
  return (
    socialMedia.map(({socialMedia, icon, link}, i) => (
        <a href={link} target="_blank" key={i}>
            <img src={pathToImages + icon} alt={socialMedia} />
        </a>
    ))
  )
}
