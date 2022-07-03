import styled from 'styled-components'
import ActiveLink from '@components/ActiveLink'

export const StyledNav = styled.nav`
flex: 1;
display: flex;
justify-content: space-evenly;
`

export const StyledNavItem = styled(ActiveLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.gray};
  position: relative;
  line-height: 5.5rem;
  font-size: 18px;
  &.active {
    color:  ${({ theme }) => theme.colors.tannat};
  }
  &.active::after {
    content: "";
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.tannat};
  }
`
