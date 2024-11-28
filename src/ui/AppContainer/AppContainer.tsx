import { FunctionComponent } from 'react'
import styled from 'styled-components';

interface AppContainerProps {
    children: React.ReactNode;
}

const Container = styled.div`
    max-width: 1600px;
    width: 100%;
    margin: 0 auto;
    padding: 0 50px;
`

export const AppContainer:FunctionComponent<AppContainerProps> = ({children, ...props}) => {
  return (
    <Container {...props}>{children}</Container>
  )
}
