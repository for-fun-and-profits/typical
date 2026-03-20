const fs = require('fs');
const path = require('path');

// Read original files
const buttonJsxContent = fs.readFileSync('./Button.jsx', 'utf8');
const buttonCssContent = fs.readFileSync('./Button.css', 'utf8');
const buttonStoriesContent = fs.readFileSync('./Button.stories.js', 'utf8');

// Create 100 duplicates
for (let i = 1; i <= 100; i++) {
  // Create Button{i}.jsx
  fs.writeFileSync(`./Button${i}.jsx`, buttonJsxContent, 'utf8');
  
  // Create Button{i}.css
  fs.writeFileSync(`./Button${i}.css`, buttonCssContent, 'utf8');
  
  // Create Button{i}.stories.js with unique title
  let storiesContent = buttonStoriesContent.replace(
    "title: 'Example/Button'",
    `title: 'Example/Button${i}'`
  );
  fs.writeFileSync(`./Button${i}.stories.js`, storiesContent, 'utf8');
}

console.log('Created 100 duplicate sets of files successfully!');
