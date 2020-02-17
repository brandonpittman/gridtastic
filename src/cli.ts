#! /usr/bin/env node

'use strict';

import {version, description} from '../package.json';
import {log} from 'console';
import chalk from 'chalk';
import arg from 'arg';
import gridtastic from './main';

const help = chalk`

  ${description}

  {bold Usage}
    {dim $} {bold gridtastic}

    init --repo REPO --dest DEST     Download Gridsome starter
    override --html --vue            Override App.vue and/or index.html
    scaffold --TYPE --name NAME      Scaffold out a new file
    fresh                            Delete Gridsome boilerplate pages and folder-specific README.md files

  {bold Options}
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
`;

const args = arg({
	'--repo': String,
	'--dest': String,
	'--html': Boolean,
	'--vue': Boolean,
	'--template': Boolean,
	'--page': Boolean,
	'--component': Boolean,
	'--layout': Boolean,
	'--name': String,
	'--version': Boolean,
	'--help': Boolean,
	'-l': '--layout',
	'-c': '--component',
	'-p': '--page',
	'-t': '--template',
	'-h': '--help',
	'-v': '--version',
	'-n': '--name',
	'-d': '--debug'
});

if (args['--version']) {
	log(version);
	process.exit(0);
}

if (args['--help']) {
	log(help);
	process.exit(0);
}

gridtastic(args);
