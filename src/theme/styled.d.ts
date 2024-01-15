import { ThemedCssFunction } from 'styled-components/macro'
import { SupportedThemes } from 'theme'

export type Color = string

export interface Colors {
  themeName: SupportedThemes

  // base
  white: Color
  black: Color

  // text
  text0: Color
  text1: Color
  text2: Color
  text3: Color
  text4: Color
  text5: Color
  text7: Color

  // backgrounds
  bg: Color
  bg0: Color
  bg1: Color
  bg2: Color
  bg3: Color
  bg4: Color
  bg5: Color
  bg6: Color
  bg7: Color
  bg8: Color
  bg9: Color

  bgLoose: Color
  bgWin: Color
  bgWarning: Color
  bgPink: Color
  bgPink1: Color

  primaryPink: Color
  lightPink: Color

  // borders
  border1: Color
  border2: Color
  border3: Color

  gradLight: Color
  hoverGradLight: Color
  hoverShort: Color
  hoverLong: Color
  primaryGradientBg: Color
  blueGradientBg: Color
  pinkGradientBg: Color
  primaryBlackNew: Color
  primaryDisable: Color
  primaryDarkBg: Color
  primaryDark: Color
  primaryBlue1: Color

  //blues
  primary0: Color
  primary1: Color
  primary2: Color
  primary3: Color
  primary6: Color

  primaryText1: Color

  // pinks
  secondary1: Color
  secondary2: Color

  red1: Color
  red2: Color
  red3: Color
  red4: Color
  green1: Color
  green4: Color
  green5: Color
  green6: Color
  green7: Color
  yellow1: Color
  yellow2: Color
  yellow3: Color
  yellow4: Color
  RYB: Color
  blue1: Color
  blue2: Color
  blue3: Color
  blue4: Color
  blue5: Color
  primaryBlue: Color
  tempBlue: Color

  warning: Color

  // v2(based redesign) colors
  color1: Color
  color2: Color
  color3: Color
  color4: Color
  color5: Color

  text: Color
  inactiveText: Color
  almostWhite: Color

  pink: Color
  darkPink: Color
  tempPink: Color
  brilliantLavender: Color
  blue: Color
  darkBlue: Color
  queenBlue: Color
  buttonBlue: Color
  lightSkyBlue: Color
  darkPurple: Color

  yankeesBlue: Color
  bakerMillerPink: Color
  rootBeer: Color

  coolGrey: Color
  slateGray: Color
  periwinkle: Color


  red: Color
  green: Color
  brown: Color
}

export type Shadow = string

export interface Shadows {
  shadow1: Shadow
  boxShadow1: Shadow
  boxShadow2: Shadow
}

declare module 'styled-components' {
  export interface DefaultTheme extends Colors, Shadows {
    grids: Grids

    // media queries
    mediaWidth: {
      upToExtraSmall: ThemedCssFunction<DefaultTheme>
      upToSmall: ThemedCssFunction<DefaultTheme>
      upToMedium: ThemedCssFunction<DefaultTheme>
      upToLarge: ThemedCssFunction<DefaultTheme>
      upToExtraLarge: ThemedCssFunction<DefaultTheme>
    }
  }
}
