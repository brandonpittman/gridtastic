#! /usr/bin/env node
'use strict';
const meow = require('meow');
const fs = require('fs');
const chalk = require('chalk');
const {log} = console;

const cli = meow(`

  Usage
    $ gridsome-helpers -o html|vue

  Options
    --override, -o Override filetype
`, {
	flags: {
		help: {
			alias: 'h',
			type: 'boolean'
		},
		override: {
			type: 'string',
			alias: 'o'
		}
	}
});

if (cli.flags.override) {
	if (!fs.existsSync('./src')) {
		log(chalk.blue('Creating src directory'));
		fs.mkdirSync('./src');
	}

	if (cli.flags.override === 'html') {
		if (fs.existsSync('./src/index.html')) {
			log(chalk.red('index.html already exists!'));
		} else {
			fs.copyFileSync('./templates/index.html', './src/index.html');
			log(chalk.green('index.html created successfully.'));
		}
	} else if (cli.flags.override === 'vue') {
		if (fs.existsSync('./src/App.vue')) {
			log(chalk.red('App.vue already exists!'));
		} else {
			fs.copyFileSync('./templates/App.vue', './src/App.vue');
			log(chalk.green('App.vue created successfully.'));
		}
	} else {
		console.log(chalk.yellow('Please provide "html" or "vue" to the --override option.'));
	}
} else {
	cli.showHelp();
}
