#! /usr/bin/env node

'use strict';

const meow = require('meow');
const gridsomeHelpers = require('.');

const cli = meow(`
Usage
    $ gridsome-helpers

    init --repo REPO --dest DEST                Download Gridsome starter
    override --html --vue                       Override App.vue and/or index.html
    scaffold --type TYPE --name NAME            Scaffold out a new file
    fresh                                       Delete Gridsome boilerplate pages and folder-specific README.md files

  Options 
    --repo                                      GITHUB_USER/REPO_NAME
    --dest                                      Folder to clone Gridsome starter project to
    --html                                      Denotes index.html
    --vue                                       Denotes App.vue
    --type, -t  Page|Template|Layout|Component  Filetype to be scaffolded
    --name, -n  SomeFilename                    Filename to be used (will be pascal cased by CLI)
    --help, -h                                  Show help
`, {
	flags: {
		help: {
			alias: 'h',
			type: 'boolean'
		},
		vue: {
			type: 'boolean'
		},
		html: {
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
