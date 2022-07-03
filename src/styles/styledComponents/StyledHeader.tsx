import styled from 'styled-components'

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5.5rem;
  margin-bottom: 2.5rem;
  background-color: ${({ theme }) => theme.colors.white};
`

export const StyledLogo = styled.div`
  margin-right: 2rem;
`

export const StyledSearch = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${({theme}) => `1px solid ${theme.colors.grayDarker}`};
  `

export const StyledUserAccount = styled.div`
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;
`
