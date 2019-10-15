#! /usr/bin/env node

const meow = require('meow');
const fs = require('fs');

const cli = meow(`

  Usage
    $ gridsome-helpers -o html|vue

  Options
    --override, -o Override filetype
`, {
	flags: {
		override: {
			type: 'string',
			alias: 'o'
		}
	}
});

if (cli.flags.override) {
	if (!fs.existsSync('./src')) {
		fs.mkdirSync('./src');
	}

	if (cli.flags.override === 'html') {
		fs.copyFileSync('./templates/index.html', './src/index.html');
	} else if (cli.flags.override === 'vue') {
		fs.copyFileSync('./templates/App.vue', './src/App.vue');
	}
}
