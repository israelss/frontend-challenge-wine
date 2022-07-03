import styled from 'styled-components'

export const StyledStore = styled.div`
  display: flex;
  & .totalFound {
    grid-column: 1 / -1;
  }
`

export const StyledProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 33%);
  gap: 0.5rem;
`

export const StyledPaginator = styled.div`
  display: flex;
  justify-content: space-around;
  grid-column: 1 / -1;
`

export const StyledProductCard = styled.div`
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
`

export const StyledRangeFilter = styled.aside`
display: flex;
flex-direction: column;
margin-inline: 4rem;
white-space: nowrap;
gap: 1rem;
`
