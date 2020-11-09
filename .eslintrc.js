module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "plugins": ["eslint-plugin-xpin-rules"],
    "parserOptions": {
        "ecmaVersion": 12
    },
    "rules": {
        "xpin-rules/var-length": "warn"
    }
};
