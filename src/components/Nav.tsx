import { StyledNav, StyledNavItem } from 'src/styles/styledComponents'

const Nav = (): JSX.Element => {
  return (
    <StyledNav>
      <StyledNavItem href='/clube'>
        Clube
      </StyledNavItem>
      <StyledNavItem href='/loja'>
        Loja
      </StyledNavItem>
      <StyledNavItem href='/produtores'>
        Produtores
      </StyledNavItem>
      <StyledNavItem href='/ofertas'>
        Ofertas
      </StyledNavItem>
      <StyledNavItem href='/eventos'>
        Eventos
      </StyledNavItem>
    </StyledNav>
  )
}

export default Nav
