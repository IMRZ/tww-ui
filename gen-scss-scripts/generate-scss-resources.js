const fs = require("fs");
const path = require("path");

const resourcesPath = path.resolve(__dirname, "../src/assets/icons/resources");

function generateScssResources() {
  const files = fs.readdirSync(resourcesPath);

  const formattedResourceNames = files.reduce((accumulator, fileName) => {
    const [name, extension] = fileName.split(".");
    accumulator += `  "${name}"\n`;
    return accumulator;
  }, "");

  // Do not format this template string! This generates pretty scss :)
  const result = `/* generated on ${new Date().toISOString()} - do not modify! */

\$resources:
${formattedResourceNames};
`;

  fs.writeFileSync(path.resolve(__dirname, "../src/scss/resources.scss"), result);
}

module.exports = {
  generateScssResources
};
