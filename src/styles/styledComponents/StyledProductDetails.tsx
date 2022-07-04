import styled from 'styled-components'

export const StyledProductDetails = styled.div`
  display: flex;

  .backButton {
    display: flex;
    color: black;
  }

  .productImage {
    width: 381px;
    height: 579px;
    margin-block: 3rem;
    margin-right: 2rem;
    flex: 0 1 100%;
  }

  .details {
    margin-block: 3rem;
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 1.2rem;
  }

  .breadcrumb {
    display: flex;
    gap: 0.5rem;
    justify-content: flex-start;
    font-size: 14px;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.grayLight};
    .level0, .level1 {
      color: ${({ theme }) => theme.colors.tannat};
    }
  }

  .productInfo {
    color: ${({ theme }) => theme.colors.gray};
    font-size: 14px;
    line-height: 24px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;
  }

  .countryFlag {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .rating {
    color: ${({ theme }) => theme.colors.tavel};
  }

  .priceMember {
    margin-block: 2rem;
    font-size: 32px;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.tannat};

    span {
      font-size: 24px;
    }
  }

  .priceNonMember {
    font-size: 16px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.grayLight};
  }

  .sommelierComment {
    h3 {
      margin-bottom: 0.5rem;
      line-height: 24px;
      color: ${({ theme }) => theme.colors.grayDarker};
    }

    p {
      line-height: 21px;
      color: ${({ theme }) => theme.colors.gray};
    }
  }

  .quantityButtons {
    width: 328px;
    height: 56px;
    font-size: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.success};

    .minusButton, .plusButton {
      cursor: pointer;
      user-select: none;
      margin-inline: 1rem;
      width: 24px;
      height: 24px;
      border-radius: 24px;
      border: ${({ theme }) => `1.5px solid ${theme.colors.grayLighter}`};
      display: flex;
      justify-content: center;
      align-items: center;

      &.disabled {
        color: ${({ theme }) => theme.colors.disabledWhite};
      }
    }

    span {
      font-size: 24px;
    }

    .addButton {
      flex: 1;
      font-size: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      user-select: none;
    }
  }
`
