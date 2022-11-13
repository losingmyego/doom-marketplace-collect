import { colorTheme, theme, border, radii, ease, size, space } from '@zoralabs/zord'
import * as typography from './tokens/typography'
import { createTheme, style } from '@vanilla-extract/css'

// Valid colour values are short and long hex codes (#00ff00) (#f00)
const { colors, shadows } = colorTheme({
  foreground: '#FF1640',
  background: '#000',
  accent: '#16CE81',
  positive: '#92ea22',
})

export const customTheme = createTheme(theme, {
  fonts: {
    heading: typography.fonts.body,
    body: typography.fonts.body,
    mono: typography.fonts.mono,
  },
  fontSizing: {
    fontSize: typography.fontSize,
    lineHeight: typography.lineHeight,
    fontWeight: typography.fontWeight,
  },
  colors: {
    ...colors,
    secondary: colors.primary,
    tertiary: colors.primary,
    onNegative: '#ffffff',
  },
  radii: {
    ...radii,
    tiny: '0px',
    small: '0px',
    normal: '0px',
  },
  shadows,
  size,
  space: {
    ...space,
    x3: '18px',
    x4: '16px',
  },
  ease,
  border,
})

export const [baseTheme, vars] = createTheme({
  color: theme.colors,
  fonts: theme.fonts,
  fontSize: theme.fontSizing.fontSize,
  lineHeight: theme.fontSizing.lineHeight,
  fontWeight: theme.fontSizing.fontWeight,
  space,
  size,
  radii: theme.radii,
  border,
  ease,
})

export const root = style({
  backgroundColor: vars.color.background1,
  color: vars.color.primary,
})
