import React, { useMemo } from 'react'
import { createGlobalStyle, css, DefaultTheme, ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'

import { useIsDarkMode } from 'state/user/hooks'
import { Colors, Shadows } from './styled'
import { useRouter } from 'next/router'

export const MEDIA_WIDTHS = {
  upToExtraSmall: 500,
  upToSmall: 720,
  upToMedium: 960,
  upToLarge: 1280,
  upToExtraLarge: 1600,
}

export enum Z_INDEX {
  deprecated_zero = 0,
  deprecated_content = 1,
  dropdown = 1000,
  sticky = 1020,
  fixed = 1030,
  modalBackdrop = 1040,
  offcanvas = 1050,
  modal = 1060,
  popover = 1070,
  tooltip = 1080,
}

const mediaWidthTemplates: { [width in keyof typeof MEDIA_WIDTHS]: typeof css } = Object.keys(MEDIA_WIDTHS).reduce(
  (accumulator, size) => {
    ;(accumulator as any)[size] = (a: any, b: any, c: any) => css`
      @media (max-width: ${(MEDIA_WIDTHS as any)[size]}px) {
        ${css(a, b, c)}
      }
    `
    return accumulator
  },
  {}
) as any

const white = '#FFFFFF'
const black = '#000000'

export enum SupportedThemes {
  LIGHT = 'light',
  DARK = 'dark',
}

function colors(): Colors {
  // define color scheme for each supported theme
  const themeColors = {
    [SupportedThemes.DARK]: {
      themeName: SupportedThemes.DARK,

      // base
      white,
      black,

      // text
      text0: '#0A2357',
      text1: '#050505',
      text2: '#415379',
      text3: '#8B8E9F',
      text4: '#8EA5C9',
      text5: '#333344',
      text7: '#697A9C',

      // backgrounds / greys
      bg: '#F2E0EE',
      bg0: '#D2DAEB',
      bg1: '#C8D3E8',
      bg2: '#DDE7FB',
      bg3: '#D1E0FF',
      bg4: '#D6DEEE',
      bg5: '#C6CEDE',
      bg6: '#C7D9FE',
      bg7: '#CED8EA',
      bg8: '#BEC7DA',
      bg9: '#C0CCE4',

      bgWin: '#20302F',
      bgLoose: '#35232B',
      bgPink: '#FACEF0',
      bgPink1: '#FAE1F4',
      bgWarning: '#F3D4C3',

      primaryPink: '#FB5FCF',
      lightPink: '#EE9EF0',

      // borders
      border1: '#123378',
      border2: '#406AC1',
      border3: '#2A2E39',

      //gradient colors

      gradLight: 'linear-gradient(90deg, #1F7BE7 0%, #D1E2FF 100%)',
      hoverGradLight: 'linear-gradient(90deg, #a5caf5 0%, #D1E2FF 100%)',
      hoverShort: 'linear-gradient(90deg, #E71F7F 0%, #FFD1F5 100%)',
      hoverLong: 'linear-gradient(90deg, #1F7BE7 0%, #D1E2FF 100%)',
      primaryGradientBg: ' linear-gradient(180deg, #F2E0EE 0%, #98B4D4 100%)',
      blueGradientBg: 'linear-gradient(180deg, #C8D3E8 0%, rgba(220, 232, 200, 0.00) 100%);',
      pinkGradientBg: 'linear-gradient(180deg, #F2E0EE 0%, #F1BBFF 100%);',
      primaryBlackNew: '#121419',
      primaryDisable: '#496C7B',
      primaryDarkBg: '#35474F',
      primaryBlue: '#AEE3FA',
      primaryBlue1: '#5F8BFB',
      primaryDark: '#5E95AC',

      // primary colors
      primary0: '#565CF3',
      primary1: 'rgba(217, 217, 217, 0.1)',
      primary2: '#231E61',
      primary3: '#14103D',

      primary6: 'linear-gradient(-90deg, #B63562 10%, #CF8D49 90%)',

      // other
      red1: '#E70B0B',
      green1: '#1A70FD',

      green4: '#97d136',
      green5: '#00211D',
      green6: '#ADE2DB',
      green7: '#1ACFB7',

      warning: '#E75A0B',

      secondary1: '#1749FA',
      secondary2: 'rgba(23, 73, 250, 0.2)',
      primaryText1: '#1749FA',
      red2: '#242020',
      red3: '#D60000',
      red4: '#7F0A0A',
      yellow1: '#E3A507',
      yellow2: '#FF8F00',
      yellow3: '#F3B71E',
      yellow4: '#FFBA93',
      RYB: '#0433FF',
      blue1: '#2172E5',
      blue2: '#74c2e3',
      blue3: '#6092F2',
      blue4: '#000B3D',
      blue5: '#C3CEFF',
      tempBlue: '#5B6093',

      // v2(based redesign) colors
      color1: '#08091A',
      color2: '#16182C',
      color3: '#22263F',
      color4: '#343856',
      color5: '#535778',

      text: '#8D90B5',
      inactiveText: '#646682',
      almostWhite: '#F1F1F1',

      pink: '#F0A7EB',
      darkPink: '#BF5AB8',
      brilliantLavender: '#FFBAFA',
      tempPink: '#FFEBFC',
      blue: '#80BBF2',
      darkBlue: '#3C7FBD',
      queenBlue: '#485A98',
      buttonBlue: '#1595E5',
      lightSkyBlue: '#96CDFF',
      darkPurple: '#2A002C',

      yankeesBlue: '#1D233E',
      bakerMillerPink: '#FFA1AD',
      rootBeer: '#270700',

      coolGrey: '#8D90B5',
      slateGray: '#345F59',
      periwinkle: '#C7C9EA',

      red: '#FA475E',
      green: '#49CA55',
      brown: '#2E2A24',
    },
  }
  // default the theme to light mode
  return themeColors[SupportedThemes.DARK]
}

// define shadow scheme for each supported theme
function shadows(themeName: SupportedThemes): Shadows {
  const themeShadows = {
    [SupportedThemes.LIGHT]: {
      shadow1: '#2F80ED',
      boxShadow1: '0px 0px 4px rgba(0, 0, 0, 0.125)',
      boxShadow2: '0px 5px 5px rgba(0, 0, 0, 0.15)',
    },
    [SupportedThemes.DARK]: {
      shadow1: '#000',
      boxShadow1: '0px 0px 4px rgba(0, 0, 0, 0.125)',
      boxShadow2: '0px 5px 5px rgba(0, 0, 0, 0.15)',
    },
  }
  // default the theme to light mode
  return themeName in SupportedThemes ? themeShadows[SupportedThemes.LIGHT] : themeShadows[themeName]
}

function theme(themeName: SupportedThemes): DefaultTheme {
  return {
    ...colors(),

    grids: {
      sm: 8,
      md: 12,
      lg: 24,
    },

    //shadows
    ...shadows(themeName),

    // media queries
    mediaWidth: mediaWidthTemplates,
  }
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  // get theme name from url if any
  const router = useRouter()
  const parsed = router.query?.theme
  const parsedTheme = parsed && typeof parsed === 'string' ? parsed : undefined

  const darkMode = useIsDarkMode()

  let themeName: SupportedThemes
  if (parsedTheme && Object.values(SupportedThemes).some((theme: string) => theme === parsedTheme)) {
    themeName = parsedTheme as SupportedThemes
  } else {
    themeName = darkMode ? SupportedThemes.DARK : SupportedThemes.LIGHT
  }

  const themeObject = useMemo(() => theme(themeName), [themeName])

  return <StyledComponentsThemeProvider theme={themeObject}>{children}</StyledComponentsThemeProvider>
}

export const ThemedGlobalStyle = createGlobalStyle`
  html {
    color: ${({ theme }) => theme.text0};
    background-color: ${({ theme }) => theme.bg6};
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
  }

  a {
    color: ${({ theme }) => theme.text0};
  }

  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Alata', sans-serif;
    font-size: 16px;
    font-weight: 500;
  }

  button {
    all: unset;
    cursor: pointer;
    padding: 0px;
  }

  *, *:before, *:after {
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
    box-sizing: inherit;
  }

  * {
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    // overflow-y: hidden;
  }

  *::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  /* Firefox */
  input[type=number] {
    font-family: 'Alata', sans-serif;
    -moz-appearance: textfield;
  }
`
