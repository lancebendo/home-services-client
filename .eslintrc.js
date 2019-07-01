const path = require('path');

module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jest": true
    },
    "extends": "airbnb",
    "parser": "babel-eslint",
    "settings": {
        "import/resolver": {
          node: {
            paths: [path.resolve(__dirname, './src')]
          },
        },
      },
    "rules": {
        "linebreak-style": 0,
        "prefer-destructuring": "off",
        "react/no-did-update-set-state": "off",
        "jsx-a11y/label-has-for": false,
        "jsx-a11y/label-has-associated-control": "off",
        "jsx-a11y/no-noninteractive-element-interactions": "off",
        "jsx-a11y/click-events-have-key-events": "off"
    }
}