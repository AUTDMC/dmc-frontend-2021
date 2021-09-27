module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb',
  ],
  parser: 'babel-eslint',
  plugins: [
    'react-hooks',
  ],
  rules: {
    'import/no-unresolved': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: [
          '.js',
          '.jsx',
        ],
      },
    ],
    'no-plusplus': [
      2,
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'no-use-before-define': 'off',
    'spaced-comment': [
      'error',
      'always',
      { markers: ['/'] },
    ],
    'import/prefer-default-export': 'off',
    'import/extensions': [
      2,
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        scss: 'always',
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
};
