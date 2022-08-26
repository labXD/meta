const config = {
  "*.{js,jsx,ts,tsx,vue,md,mdx}": ["eslint --fix"],
  "*.{ts,js,tsx,jsx,css,scss,md}": ["prettier --write"],
};

module.exports = config;
