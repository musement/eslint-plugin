# @musement/eslint-plugin

shared eslint config for musement projects

## Installation

You'll first need to install [ESLint](http://eslint.org) and [Prettier](https://prettier.io/):

```
$ npm i eslint@7.16 prettier@2.2 --save-dev
```

Next, install `eslint-plugin-component`:

```
$ npm install @musement/eslint-plugin --save-dev
```


## Usage

Add `plugin:@musement/SELECTED_CONFIG` to the extends section of your `.eslintrc` configuration file.

### Library - TS/JS library:
```javascript
module.exports = {
  extends: ["plugin:@musement/library"],
};

```

### Vue.js (TS/JS):
```javascript
module.exports = {
  extends: ["plugin:@musement/vue"],
};

```

### Nuxt.js (TS/JS):
```javascript
module.exports = {
  extends: ["plugin:@musement/nuxt"],
};

```

### React (TS/JS):
```javascript
module.exports = {
  extends: ["plugin:@musement/react"],
};

```

## Visual Studio Code

VSCode developers can add these settings to the project's settings (`.vscode/settings.json`) to use this plugin correctly and to avoid conflicts with other user's settings:

```javascript
{
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}

```







