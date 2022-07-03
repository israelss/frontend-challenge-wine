import styled from 'styled-components'

export const StyledWineBox = styled.div`
  header {
    background-color: ${({ theme }) => theme.colors.white};
    width: 100%;
  }

  .wineboxBody {
    padding: 0.3rem;
  }

  .openedWinebox {
    position: absolute;
    right: 0;
    top: 0;
    background-color: ${({ theme }) => theme.colors.grayLightest};
    height: 100vh;
    overflow-y: auto;
    width: min(20rem, 100%);
    z-index: 9999;
    border-left: ${({ theme }) => `1px solid ${theme.colors.tannatLight}`};
  }

  .wineboxIcon {
    margin-left: 1rem;
    position: relative;
    height: 56px;
    width: 56px;
    .cartIcon {
      fill: none;
      height: 56px;
      width: 56px;
    }
  }

  h2 {
    padding: 1.5rem;
  }

  .wineboxTotal {
    padding-inline: 1.5rem;
    padding-bottom: 1rem;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.success};
  }

  .closeCartIcon {
    position: absolute;
    top: 0.8rem;
    right: 0.8rem;
    height: 56px;
    width: 56px;
  }

  .wineboxIndicator {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20px;
    width: 20px;
    position: absolute;
    bottom: -10px;
    right: -10px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 20px;
    padding: 0.5rem;
    color: ${({ theme }) => theme.colors.chardonnay};
  }
`

export const StyledWineBoxItem = styled.div`
  display: flex;
  position: relative;
  padding: 0.5rem;
  margin-block: 0.2rem;
  border-radius: 0.3rem;
  border: ${({ theme }) => `1px solid ${theme.colors.grayLighter}`};

  .removeItemButton {
    position: absolute;
    bottom: 0.2rem;
    right: 0.2rem;
    background-color: ${({ theme }) => theme.colors.grayLighter};
    padding: 0.3rem;
    border-radius: 0.2rem;
    margin: 0.1rem;
  }

  .quantityButtons {
    display: flex;
    gap: 0.3rem;
    text-align: center;
  }

  .minusButton, .plusButton {
    height: 21px;
    width: 21px;
    border-radius: 0.2rem;
    border: ${({ theme }) => `1px solid ${theme.colors.grayLighter}`};
  }

  .plusButton {
    background-color: ${({ theme }) => theme.colors.tannatLight};
    color: ${({ theme }) => theme.colors.white};
  }

  .itemPrice {
    font-size: 20px;
    margin-block: 0.2rem;
    color: ${({ theme }) => theme.colors.tannat};
  }
`
