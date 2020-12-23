# @musement/eslint-plugin

shared eslint config for musement projects

## Installation

You'll first need to install [ESLint](http://eslint.org) and [Prettier](https://prettier.io/):

```
$ npm i eslint prettier --save-dev
```

Next, install `eslint-plugin-component`:

```
$ npm install git+ssh://git@gitlab.com:musement/frontend-shared/tech-friday/eslint-plugin-musement-poc.git --save-dev
```


## Usage

Add `plugin:@musement/SELECTED_CONFIG` to the extends section of your `.eslintrc` configuration file.

### Library - TS/JS library:
```javascript
module.exports = {
  extends: ["plugin:@musement/library"],
};

```

### Component - Vue.js shared component:
```javascript
module.exports = {
  extends: ["plugin:@musement/component"],
};

```

### Orchestrator - Nuxt.js orchestrator:
```javascript
module.exports = {
  extends: ["plugin:@musement/orchestrator"],
};

```





