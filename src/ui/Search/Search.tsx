import { FunctionComponent, useState } from 'react'
import styled from 'styled-components'

import { Colors, pathToImages } from "../"

type SearchProps = {
  isactive: boolean
}

const SearchInputContainer = styled.div<SearchProps>`
  display: flex;
  align-items: center;
  ${({ isactive }) => isactive && `
    flex: 1;
  `}
`
const SearchInputBox = styled.div<SearchProps>`
  display: flex;
  align-items: center;
  font-size: 16px;
  border-left: 1px solid ${Colors.BorderColor2};
  border-right: 1px solid ${Colors.BorderColor2};
  padding: 3px 6px;
  margin: ${({ isactive }) => (isactive ? '0 10px 0 12px' : '0 5px')};
  width: ${({ isactive }) => (isactive ? '100%' : '0')};
  opacity: ${({ isactive }) => (isactive ? '1' : '0')};
  visibility: ${({ isactive }) => (isactive ? 'visible' : 'hidden')};
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
  margin: 0 10px 0 10px;
`

export const Search: FunctionComponent = () => {
    const [textVal, setTextVal] = useState('')
    const [isActive, setIsActive] = useState(false)

    const setActiveHandler = (action?: boolean) => {
      if(action){
        setIsActive(false)
        setTextVal('')
      } else {
        setIsActive(true)
      }
    }

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setTextVal(e.target.value);
    };

  return (
    <SearchInputContainer isactive={isActive}>
        <SearchIcon src={pathToImages + 'search-icon.svg'} alt="Notification" onClick={() => setActiveHandler()}/>
        <SearchInputBox isactive={isActive}>
          <SearchInput type="text" 
            placeholder='Movie/series name or actor/director name' 
            value={textVal} 
            onChange={onInputChange}
          />
          <CloseBtnIcon src={pathToImages + 'CloseIcon.svg'} alt="Close" onClick={() => setActiveHandler(true)}/>
        </SearchInputBox>
    </SearchInputContainer>
  )
}
