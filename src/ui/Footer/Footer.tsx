import { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { SocialMedia } from '../SocialMedia/SocialMedia'
import { AppContainer } from '../AppContainer/AppContainer'

import { pathToImages } from '../../utils/virables'
import { Colors } from '../../utils/styleVariables'

const footerNav = [
  {
    text: 'Home',
    link: '/'
  },
  {
    text: 'Jobs',
    link: '/'
  },
  {
    text: 'Info',
    link: '/'
  },
  {
    text: 'Support',
    link: '/'
  },
  {
    text: 'Contact us',
    link: '/'
  },
  {
    text: 'FAQ',
    link: '/'
  },
  {
    text: 'Account',
    link: '/account' //попробовать сделать
  },
  {
    text: 'Help Center',
    link: '/'
  },
]

const downloadSoures = [
  {
    title: 'App Store',
    text: 'Upload to',
    icon: 'apple-icon.svg',
    link: 'https://www.apple.com',
  },
  {
    title: 'Google Play',
    text: 'Upload to',
    icon: 'googleplay-icon.svg',
    link: 'https://googleplay.com',
  },
]

const FooterContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  gap: 50px;
`
const SocialMediaBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
`
const FooterNavBox = styled.nav`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
`
const DownloadBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 18px;
`
const DownloadItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 3px 8px 8px;
  min-width: 135px;
  min-height: 51px;
  width: 100%;
  color: ${Colors.TextColor2};
`
const DownloadText = styled.p`
  font-size: 12px;
`
const DownloadTitle = styled.h5`
  font-size: 15px;
  line-height: 11px;
`

export const Footer: FunctionComponent = () => {
  return (
    <AppContainer>
      <FooterContainer>
        <SocialMediaBox>
          <SocialMedia />
        </SocialMediaBox>
        <FooterNavBox>
          {footerNav.map(({text, link}, i) => (
            <Link to={link} key={i}>{text}</Link>
          ))}
        </FooterNavBox>
        <DownloadBox>
          {downloadSoures.map(({title, text, icon, link}, i) => (
            <a href={link} target='_blank' key={i}>
              <DownloadItem>
                <img src={pathToImages + icon} alt={text} />
                <div>
                  <DownloadText>{text}</DownloadText>
                  <DownloadTitle>{title}</DownloadTitle>
                </div>
              </DownloadItem>
            </a>
          ))}
        </DownloadBox>
      </FooterContainer>
    </AppContainer>
  )
}
