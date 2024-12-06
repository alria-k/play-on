import React, {FunctionComponent} from 'react'

import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import { AppContainer } from '../AppContainer/AppContainer'

type LayoutProps = {
    children: React.ReactNode
}

export const Layout: FunctionComponent<LayoutProps> = ({children}) => {
  return (
    <div>
        <Header/>
        <AppContainer>
            {children}
        </AppContainer>
        <Footer />
    </div>
  )
}
