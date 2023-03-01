
export default function ({ margins }) {
  for (var margin in margins) {
    generateCss(`m-${margin}`);
    generateCss(`mt-${margin}`);
  }
}

module.exports = marginGenerator;