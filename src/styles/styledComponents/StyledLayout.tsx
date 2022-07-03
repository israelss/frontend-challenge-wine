import styled from 'styled-components'

export const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1120px;
  height: 100vh;
  width: 100%;
  margin: auto;
  position: relative;
  background-color: ${({ theme }) => theme.colors.grayLightest};
`
