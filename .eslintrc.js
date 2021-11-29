module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'react-app',
  ],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    semi: 'off',
    'import/prefer-default-export': 'off',
    indent: ['error', 2],
  },
  plugins: [
    'react',
  ],
};
