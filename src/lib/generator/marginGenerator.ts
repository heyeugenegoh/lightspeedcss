
export default function ({ margins }) {
  for (var margin in margins) {
    generateCss(`m-${margin}`)
  }
}

module.exports = marginGenerator;