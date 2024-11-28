import { FunctionComponent, useState } from 'react'
import styled from 'styled-components'

import { Colors, pathToImages } from "../"

interface SearchProps {
  isActive: boolean
}

const SearchInputContainer = styled.div<SearchProps>`
  display: flex;
  align-items: center;
  ${({ isActive }) => isActive && `
    width: 90%;
  `}
`
const SearchInputBox = styled.div<SearchProps>`
  display: flex;
  align-items: center;
  border-left: 1px solid ${Colors.BorderColor2};
  border-right: 1px solid ${Colors.BorderColor2};
  padding: 3px 6px;
  width: 0;
  opacity: 0;
  visibility: hidden;
  ${({ isActive }) => isActive && `
    margin: 0 10px 0 12px;
    width: 100%;
    opacity: 1;
    font-size: 16px;
    visibility: visible;
  `}
`
const SearchInput = styled.input`
  color: ${Colors.TextColor};
  background: transparent;
  border: none;
  outline: none;
  width: 100%;
  ::placeholder{
      font-size: 15px;
      color: ${Colors.PlaceHolder};
  }
`
const SearchIcon = styled.img`
  cursor: pointer;
  width: 24px;
  height: 24px;
`
const CloseBtnIcon = styled.img`
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin: 0 10px 0 0;
`

export const Search: FunctionComponent = () => {
    const [isActive, setIsActive] = useState(false)

    const setActiveHandler = () => {
      setIsActive(!isActive)
    }

  return (
    <SearchInputContainer isActive={isActive}>
        <SearchIcon src={pathToImages + 'search-icon.svg'} alt="Notification" onClick={setActiveHandler} />
        <SearchInputBox isActive={isActive}>
          <SearchInput type="text" placeholder='Movie/series name or actor/director name' />
          <CloseBtnIcon src={pathToImages + 'CloseIcon.svg'} alt="Close" onClick={setActiveHandler}/>
        </SearchInputBox>
    </SearchInputContainer>
  )
}
