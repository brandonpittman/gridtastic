#! /usr/bin/env node
'use strict';

const meow = require('meow');
const pascalcase = require('pascalcase');
const override = require('./lib/override');
const createPage = require('./lib/createPage');
const createComponent = require('./lib/createComponent');
const createLayout = require('./lib/createLayout');
const createTemplate = require('./lib/createTemplate');
const cli = meow(`

  Usage
    $ gridsome-helpers -o html|vue

  Options
    --override, -o html|vue         Override filetype
    --component, -c ComponentName   Create component skeleton
    --page, -p PageName             Create page skeleton
    --layout, -l LayoutName         Create layout skeleton
    --template, -t TemplateName     Create template skeleton
    --help, -h                      Show help
`, {
	flags: {
		help: {
			alias: 'h',
			type: 'boolean'
		},
		override: {
			type: 'string',
			alias: 'o'
		},
		component: {
			type: 'string',
			alias: 'c'
		},
		layout: {
			type: 'string',
			alias: 'l'
		},
		page: {
			type: 'string',
			alias: 'p'
		},
		template: {
			type: 'string',
			alias: 't'
		}
	}
});

if (cli.flags.override) {
	override(cli);
}

if (cli.flags.page && cli.flags.page.length > 0) {
	createPage(pascalcase(cli.flags.page));
}

if (cli.flags.template && cli.flags.template.length > 0) {
	createTemplate(pascalcase(cli.flags.template));
}

if (cli.flags.layout && cli.flags.layout.length > 0) {
	createLayout(pascalcase(cli.flags.layout));
}

if (cli.flags.component && cli.flags.component.length > 0) {
	createComponent(pascalcase(cli.flags.component));
}


if (Object.keys(cli.flags).length === 2) {
	cli.showHelp();
}
