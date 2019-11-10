#! /usr/bin/env node

'use strict';

const meow = require('meow');
const gridtastic = require('./dist/index.js');

const cli = meow(`
Usage
    $ gridtastic

    init --repo REPO --dest DEST     Download Gridsome starter
    override --html --vue            Override App.vue and/or index.html
    scaffold --TYPE --name NAME      Scaffold out a new file
    fresh                            Delete Gridsome boilerplate pages and folder-specific README.md files

  Options 
    --repo, -r                       GITHUB_USER/REPO_NAME
    --dest, -d                       Folder to clone Gridsome starter project to
    --html                           Denotes index.html
    --vue                            Denotes App.vue
    --template, -t                   /templates
    --page, -p                       /pages
    --component, -c                  /components
    --layout, -l                     /layouts
    --name, -n  SomeFilename         Filename to be used (will be pascal cased by CLI)
    --version, -v                    Show version
    --help, -h                       Show help
`, {
	flags: {
		version: {
			alias: 'v',
			type: 'boolean'
		},
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
		component: {
			type: 'boolean',
			alias: 'c'
		},
		page: {
			type: 'boolean',
			alias: 'p'
		},
		layout: {
			type: 'boolean',
			alias: 'l'
		},
		template: {
			type: 'boolean',
			alias: 't'
		},
		name: {
			type: 'string',
			alias: 'n'
		}
	}
});

gridtastic(cli);
