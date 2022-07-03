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
  width: 256px;
  height: 390px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;

  .cardButton {
    background-color: ${({ theme }) => theme.colors.success};
    height: 2.5rem;
    color: ${({ theme }) => theme.colors.white};
    font-size: 14px;
    font-weight: 700;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: ${({ theme }) => theme.shadows.level1};
  }

  .cardContent {
    box-shadow: ${({ theme }) => `${theme.shadows.level0} ${theme.shadows.level1}`};
    background-color: ${({ theme }) => theme.colors.white};
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    flex: 1;

    .discountTag {
      background-color: ${({ theme }) => theme.colors.tavel};
      color: ${({ theme }) => theme.colors.white};
      font-size: 10px;
      font-weight: 700;
      text-align: center;
      border-radius: 0.1rem;
      padding: 0.3rem;
    }
    .fullPrice {
      color: ${({ theme }) => theme.colors.grayLight};
      font-size: 11px;
      font-weight: 700;
      text-decoration: line-through;
    }

    .discount {
      margin-block: 0.4rem;
      display: flex;
      gap: 0.5rem;
      justify-content: center;
      align-items: center;
    }

    .priceMember {
      margin-block: 0.4rem;
      display: flex;
      gap: 0.5rem;
      justify-content: center;
      align-items: baseline;
    }

    .priceMemberTag {
      color: ${({ theme }) => theme.colors.grayDarker};
      font-size: 11px;
      font-weight: 700;
    }

    .priceMemberValue {
      color: ${({ theme }) => theme.colors.tannat};
      font-size: 23px;
      font-weight: 700;

      span {
        font-size: 11px;
      }
    }

    .priceNonMember {
      color: ${({ theme }) => theme.colors.grayLight};
      font-size: 12px;
      font-weight: 700;
    }
  }
`

export const StyledRangeFilter = styled.aside`
display: flex;
flex-direction: column;
margin-inline: 4rem;
white-space: nowrap;
gap: 1rem;
`
