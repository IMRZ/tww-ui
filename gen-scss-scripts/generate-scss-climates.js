const fs = require("fs");
const path = require("path");

const climatesPath = path.resolve(__dirname, "../src/assets/icons/climates");

function generateScssClimates() {
  const files = fs.readdirSync(climatesPath);

  const formattedClimateNames = files.reduce((accumulator, fileName) => {
    const [name, extension] = fileName.split(".");
    accumulator += `  "${name}"\n`;
    return accumulator;
  }, "");

  // Do not format this template string! This generates pretty scss :)
  const result = `/* generated on ${new Date().toISOString()} - do not modify! */

\$climates:
${formattedClimateNames};
`;

  fs.writeFileSync(path.resolve(__dirname, "../src/scss/climates.scss"), result);
}

module.exports = {
  generateScssClimates
};
