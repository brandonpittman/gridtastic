#! /usr/bin/env node

'use strict';

const meow = require('meow');
const gridsomeHelpers = require('.');

const cli = meow(`
Usage
    $ gridsome-helpers

    init                                        Download Gridsome starter
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
		repo: {
			type: 'string',
			alias: 'r'
		},
		dest: {
			type: 'string',
			alias: 'd'
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

gridsomeHelpers(cli);
