import styled from 'styled-components'

export const StyledHeader = styled.header`
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
  position: relative;
  border: ${({ theme }) => `1px solid ${theme.colors.grayDarker}`};

  .searchBar {
    display: flex;
    position: absolute;
    bottom: -3.2rem;
    right: -162px;
    width: 1120px;
    padding: 0.3rem;
    border-radius: 0 0 0.3rem 0.3rem;
    background-color: ${({ theme }) => theme.colors.white};

    input {
      flex: 1;
    }

    .searchButton {
      user-select: none;
      cursor: pointer;
      padding-block: 0.2rem;
      padding-inline: 0.4rem;
      border-radius: 0.2rem;
      background-color: ${({ theme }) => theme.colors.tannat};
      color: ${({ theme }) => theme.colors.white};
    }
  }
`

export const StyledUserAccount = styled.div`
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;
`
