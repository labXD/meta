const config = {
  "*.{js,jsx,ts,tsx}": ["eslint --fix"],
  "*.{ts,js,tsx,jsx,css,scss,md}": ["prettier --write"],
};

module.exports = config;
