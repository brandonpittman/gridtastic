#! /usr/bin/env node
'use strict';
const meow = require('meow');
const override = require('./lib/override');
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
	override(cli);
} else {
	cli.showHelp();
}
