import {FunctionComponent, useState} from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'usehooks-ts'

import { LinkText } from "../Link/Link"
import { Colors } from '../'
import { mediaBreakpoint, DeviceScreen } from '../../utils/mediaBreakpoint'

type isMenuOpenType = {
    isMenuOpen: boolean;
}

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
    background-color: ${Colors.BackgroundFill};
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
const BurgerButton = styled.button`
    position: relative;
    outline: none;
    border: none;
    width: 26px;
    height: 24px;
    background-color: ${Colors.BtnColor1};
    border-radius: 4px;
    padding: 0;
`
const BurgerMenu = styled.div<isMenuOpenType>`
    display: ${({isMenuOpen}) => isMenuOpen ? 'flex;' : 'none;'};
    flex-direction: column;
    gap: 15px;
    align-items: center;
    margin: 24px 0 0 0px;

`
const BurgerLine = styled.span<isMenuOpenType>`
    position: absolute;
    display: block;
    width: 20px;
    height: 1px;
    background-color: ${Colors.TextColor};
    top: 50%;
    left: 3px;
    border-radius: 4px;
    transform:${({isMenuOpen}) => isMenuOpen ? 'rotate(45deg);' : 'rotate(0deg);'}
    &::before {
        content: '';
        position: absolute;
        width: 20px;
        height: 1px;
        background-color: ${Colors.TextColor};
        top: ${({isMenuOpen}) => isMenuOpen ? '0px;' : '-6px;'}
        left: 0;
        transform:${({isMenuOpen}) => isMenuOpen ? 'rotate(90deg);' : 'rotate(0deg);'}
    }
    &::after {
        content: '';
        position: absolute;
        width: ${({isMenuOpen}) => isMenuOpen ? '0': '20px'};
        height: ${({isMenuOpen}) => isMenuOpen ? '0': '1px'};
        background-color: ${Colors.TextColor};
        top: 6px;
        left: 0;
    }
`
const BurgerButtonBox = styled.div`
    display: flex;
    justify-content: flex-end;
`

export const Navigation: FunctionComponent = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false)
    const matches = useMediaQuery('(max-width: 768px)')

    const menuOpenHandler = () => {
        setMenuOpen(!menuOpen)
    }

    return (
    <NavigationBox>
        {matches ? 
        <BurgerContainer>
            <BurgerButtonBox>
                <BurgerButton onClick={menuOpenHandler}>
                    <BurgerLine isMenuOpen={menuOpen}/>
                </BurgerButton>
            </BurgerButtonBox>
            <BurgerMenu isMenuOpen={menuOpen}>
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
