import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      disabledWhite: string
      white: string
      black: string
      grayLightest: string
      grayLighter: string
      grayLight: string
      gray: string
      grayDarker: string
      grayDarkest: string
      tannatLight: string
      tannat: string
      tavel: string
      success: string
      chardonnay: string
      chenin: string
    }
    shadows: {
      level0: string
      level1: string
      level2: string
    }
  }
}

const wineTheme: DefaultTheme = {
  colors: {
    disabledWhite: 'hsla(0, 0%, 100%, 0.1)',
    white: 'hsla(0, 0%, 100%, 1)',
    black: 'hsla(0, 0%, 0%, 1)',
    grayLightest: 'hsla(0, 0%, 96%, 1)',
    grayLighter: 'hsla(0, 0%, 83%, 1)',
    grayLight: 'hsla(0, 0%, 53%, 1)',
    gray: 'hsla(0, 0%, 33%, 1)',
    grayDarker: 'hsla(0, 0%, 7%, 1)',
    grayDarkest: 'hsla(60, 4%, 11%, 1)',
    tannatLight: 'hsla(330, 59%, 56%, 1)',
    tannat: 'hsla(328, 77%, 44%, 1)',
    tavel: 'hsla(24, 91%, 65%, 1)',
    success: 'hsla(91, 47%, 50%, 1)',
    chardonnay: 'hsla(170, 100%, 35%, 1)',
    chenin: 'hsla(10, 87%, 62%, 1)'
  },
  shadows: {
    level0: '0px 10px 15px hsla(0, 0%, 0%, 0.1);',
    level1: '0px 2px 4px hsla(0, 0%, 0%, 0.1);',
    level2: '0px 1px 2px hsla(0, 0%, 0%, 0.2);'
  }
}

export default wineTheme
