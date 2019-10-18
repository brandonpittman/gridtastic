#! /usr/bin/env node

'use strict';

const meow = require('meow');
const pascalcase = require('pascalcase');

const override = require('./lib/override');
const copyTemplate = require('./lib/copyTemplate');
const fresh = require('./lib/fresh');

const cli = meow(`
Usage
    $ gridsome-helpers

    override html|vue                           Override filetype
    scaffold -t TYPE -n NAME                    Scaffold out a new file
    fresh                                       Delete Gridsome boilerplate pages and folder-specific README.md files

  Options 
    --type, -t  Page|Template|Layout|Component  Filetype to be scaffolded
    --name, -n  SomeFilename                    Filename to be used (will be pascal cased by CLI)
    --help, -h                                  Show help
`, {
	flags: {
		help: {
			alias: 'h',
			type: 'boolean'
		},
		type: {
			type: 'string',
			alias: 't'
		},
		name: {
			type: 'string',
			alias: 'n'
		}
	}
});

const command = cli.input[0];

switch (command) {
	case 'scaffold':
		console.log('scaffold');
		copyTemplate(pascalcase(cli.flags.type), pascalcase(cli.flags.name));
		break;

	case 'override':
		override(cli.input[1]);
		break;

	case 'fresh':
		fresh();
		break;

	default:
		cli.showHelp();
}
