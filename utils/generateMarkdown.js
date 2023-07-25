// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // License badge mapping
  const licenseBadges = {
    // Add more licenses and their respective badge URLs here
    'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'Apache 2.0': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    // Add other license badges as needed
  };

  // Return the badge URL if the license exists in the mapping
  return licenseBadges[license] || '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // License link mapping
  const licenseLinks = {
    // Add more licenses and their respective URLs here
    'MIT': 'https://opensource.org/licenses/MIT',
    'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
    // Add other license links as needed
  };

  // Return the license link if the license exists in the mapping
  return licenseLinks[license] || '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);

  if (badge && link) {
    return `## License

This project is licensed under the [${license}](${link}) License. ${badge}
`;
  }

  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // Call the renderLicenseSection function to get the license section content
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

${licenseSection}
`;
}

module.exports = generateMarkdown;
