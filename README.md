# fiber-styles

Node package for generating styles from design tokens.

Design tokens are stored in `tailwind.config` using tailwindcss format.

Output path can be specified by setting value of `config.output`. If no path is specified it will look for `static/`. If directory does not exist it will currently not create the directory.

```js
module.exports = {
	output: "dist/"
};
```
