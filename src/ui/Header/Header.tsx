import { FunctionComponent } from "react"
import styled from "styled-components"

import { LinkText } from "../Link/Link"
import { AppContainer } from "../AppContainer/AppContainer"
import { Search } from "../Search/Search"
import { Navigation } from "../Navigation/Navigation"
import { mediaBreakpoint, DeviceScreen } from '../../utils/mediaBreakpoint'
import { pathToImages, Colors } from "../"

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
    ${mediaBreakpoint(DeviceScreen.Laptop, 'max')} {
        flex-direction: column-reverse;
        align-items: end;
        gap: 24px;
    }
    ${mediaBreakpoint(DeviceScreen.Tablet, 'max')} {
        gap: 0;
    }
`
const UserInterfaceContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-left: 50px;
    width: 100%;
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
                    <Navigation/>
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