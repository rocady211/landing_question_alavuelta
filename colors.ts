
export type ColorTone = {
  base: string
  light?: string
  lighter?: string
  dark?: string
  darker?: string
  contrastText?: string
  extralight?: string
}

export const colors = {
  primary: {
    base: '#8972FD',
    light: '#AFA0FF',
    lighter: '#EFEAFF',
    dark: '#6E57D8',
    contrastText: '#0F0F0F',
  },
  secondary: {
    base: '#D6D0FC',
    light: '#E7E4FF',
    dark: '#B8AEF2',
    contrastText: '#0F0F0F',
  },
  gray: {
    base: '#8F8F8F',
    light: '#B5B5B5',
    dark: '#5A5A5A',
    contrastText: '#0F0F0F',
    extralight: '#D9D9D9',
  },
  black: '#0F0F0F',
  white: '#FFFFFF',
  background: '#F7F7FB',
  surface: '#FFFFFF',
  border: '#E4E5F1',
  muted: '#D9DBE9',
  success: {
    base: '#2EB67D',
    light: '#4DD89A',
    dark: '#1F8D63',
    contrastText: '#0F0F0F',
  },
  warning: {
    base: '#F6C344',
    light: '#FFD166',
    dark: '#D79D1F',
    contrastText: '#0F0F0F',
  },
  error: {
    base: '#F04438',
    light: '#FF6B63',
    dark: '#C72A1F',
    contrastText: '#FFFFFF',
  },
  info: {
    base: '#4DA3FF',
    light: '#76B8FF',
    dark: '#2C7FD8',
    contrastText: '#0F0F0F',
  },
} satisfies Record<string, ColorTone | string>

export type ColorKey = keyof typeof colors
