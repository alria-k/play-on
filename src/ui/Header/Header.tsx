import { FunctionComponent } from "react"
import styled from "styled-components"

import { LinkText } from "../Link/Link"
import { AppContainer } from "../AppContainer/AppContainer"
import {Search} from "../Search/Search"
import { pathToImages, Colors } from "../"

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

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 48.5px;
`
const NavContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
`
const NavigationBox = styled.nav`
    
`
const NavLink = styled(LinkText)`
    margin-right: 50px;
`
const UserInterfaceContainer = styled.div`
    display: flex;
    align-items: center;
    flex: auto;
    justify-content: flex-end;
`
const UserInterfaceBox = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;
`
const UserProfileBox = styled.div`
    padding: 5px;
    border: 1px solid ${Colors.BorderColor1};
    border-radius: 4px;
`

export const Header: FunctionComponent = () => {
    return(
        <AppContainer>
            <HeaderContainer>
                <LinkText to="/">
                    <img src={pathToImages + 'PlayOn.svg'} alt="Logo"/>
                </LinkText>
                <NavContainer>
                    <NavigationBox>
                        {Links.map(({text, link}, i) => (
                            <NavLink to={link} key={i}>{text}</NavLink>
                        ))}
                    </NavigationBox>
                    <UserInterfaceContainer>
                        <Search/>
                        <UserInterfaceBox>
                            <img src={pathToImages + 'notification-icon.png'} alt="Notification"/>
                            <UserProfileBox>
                                <img src={pathToImages + 'user-profile-icon.png'} alt="User-Profile"/>
                            </UserProfileBox>
                        </UserInterfaceBox>
                    </UserInterfaceContainer>
                </NavContainer>
            </HeaderContainer>
        </AppContainer>
    )
}