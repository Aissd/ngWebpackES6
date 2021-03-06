module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "globals": {
        "$": true, 
        "console": true,
        "wx": true,
        "wxSdkController": true,
        "wxChooseImage": true,
        "wxUploadImage": true,
        "initWechatApi": true,
        "CosCloud": true,
        "TDAPP": true,
        "process": true
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "no-console": 0,
        // "linebreak-style": [
        //     "warn",
        //     "windows"
        // ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};