import styled from 'styled-components'

export const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  background-color: ${({ theme }) => theme.colors.grayLightest};
  width: 100%;

  .headerContent {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1120px;
    margin: auto;
  }

  .pageContent {
    max-width: 1120px;
    margin: auto;
  }
`
