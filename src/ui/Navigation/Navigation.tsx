import {FunctionComponent} from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'usehooks-ts'

import { LinkText } from "../Link/Link"
import { Colors } from '../'
import { mediaBreakpoint, DeviceScreen } from '../../utils/mediaBreakpoint'

const Links = [
    {
        text: 'Home',
        link: '/home'
    },
    {
        text: 'Movies',
        link: '/movies'
    },
    {
        text: 'Top',
        link: '/top'
    },
]

const NavigationBox = styled.nav`
    display: flex;
    align-items: center;
    gap: 50px;
    ${mediaBreakpoint(DeviceScreen.Tablet, 'max')} {
        position: absolute;
        left: 0;
        top: 35px;
        width: 100%;
        padding: 20px 9px;
    } 
`
const NavLink = styled(LinkText)`
`

const BurgerContainer = styled.div`
    position: relative;
    z-index: 1;
    width: 100%;
`
const BurgerButton = styled.div`
    position: relative;
    width: 26px;
    height: 24px;
    background-color: ${Colors.BtnColor1};
`
const BurgerMenu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    margin: 24px 0 0 0px
`
const BurgerLine = styled.span`
    position: absolute;
    display: block;
    width: 20px;
    height: 1px;
    background-color: ${Colors.TextColor};
    top: 50%;
    left: 3px;
    border-radius: 4px;
    &::before {
        content: '';
        position: absolute;
        width: 20px;
        height: 1px;
        background-color: ${Colors.TextColor};
        top: -6px;
    }
    &::after {
        content: '';
        position: absolute;
        width: 20px;
        height: 1px;
        background-color: ${Colors.TextColor};
        top: 6px;
    }
`
const BurgerButtonBox = styled.div`
    display: flex;
    justify-content: flex-end;
`

export const Navigation: FunctionComponent = () => {
    const matches = useMediaQuery('(max-width: 768px)')

  return (
    <NavigationBox>
        {matches ? 
        <BurgerContainer>
            <BurgerButtonBox>
                <BurgerButton>
                    <BurgerLine />
                </BurgerButton>
            </BurgerButtonBox>
            <BurgerMenu>
                {Links.map(({text, link}, i) => (
                    <NavLink to={link} key={i}>{text}</NavLink>
                ))}
            </BurgerMenu>
        </BurgerContainer>
        :
        Links.map(({text, link}, i) => (
            <NavLink to={link} key={i}>{text}</NavLink>
        ))
        }
    </NavigationBox>
  )
}
