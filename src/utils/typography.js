import Typography from 'typography'

const theme = {
  baseFontSize: "18px",
  baseLineHeight: 1.5,
  headerFontFamily: [
    'Bitter',
    'Georgia',
    'serif',
  ],
  bodyFontFamily: [
    'Inconsolata',
    'Courier',
    'monospace',
  ],
}

const typography = new Typography(theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

const rhythm = typography.rhythm
const scale = typography.scale
export {
  rhythm,
  scale,
  typography as default
}
