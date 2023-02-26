
export default function ({ backgroundColors }) {
  for (var backgroundColor in backgroundColors) {
    generateCss(`bg-${backgroundColor}`)
  }
}