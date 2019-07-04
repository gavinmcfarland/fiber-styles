# fiber-styles

Node package for generating styles from design tokens for Fiber framework.

## Install

```bash
npm install fiber-styles --save-dev
```

## Setup

Inlude the script in node application like

```js
require("fiber-styles");
```

## Configure

Design tokens are stored in `tailwind.config.js` using the [Tailwindcss](https://tailwindcss.com/docs/configuration) format.

The output path of the `styles.css` file can be specified by setting the value of `config.output` to the desired path. If no path is specified it will look for `static/`. Currently it will not create the directory if it does not exist.

```js
module.exports = {
	output: "dist/"
};
```
