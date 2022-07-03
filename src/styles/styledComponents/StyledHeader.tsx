import styled from 'styled-components'

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  margin-bottom: 2.5rem;
  background-color: ${({ theme }) => theme.colors.white};
`
