const { join } = require('path')

module.exports = {
  future: {
    defaultLineHeights: true,
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
    standardFontWeights: true,
  },
  plugins: [],
  purge: {
    content: [
      join(__dirname, 'index.html'),
      join(__dirname, 'src', '**', '*.tsx'),
    ],
    enabled: process.env.NODE_ENV === 'production',
  },

  theme: {
    extend: {},
  },
  variants: {},
}
