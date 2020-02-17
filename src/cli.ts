#! /usr/bin/env node

import {version, description} from '../package.json';
import {log} from 'console';
import chalk from 'chalk';
import arg from 'arg';

const args = arg({
	'--version': Boolean,
	'--help': Boolean,
	'-h': '--help',
	'-v': '--version'
}, {permissive: true});

if (args['--version']) {
	log(version);
	process.exit(0);
}

if (args['--help']) {
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
	log(help);
	process.exit(0);
}

let forwardedArgs = args._.slice(1);

const commands = {
	init: async () => import('./gridtastic-init').then(i => i.default),
	scaffold: async () => import('./gridtastic-scaffold').then(async i => i.default),
	override: async () => import('./gridtastic-override').then(async i => i.default),
	fresh: async () => import('./gridtastic-fresh').then(async i => i.default)
};

const command = commands[args._[0]];

if (command) {
	command().then(exec => exec(forwardedArgs));
} else {
	console.warn('Command not recognized.\n\nRun gridtastic --help to see available commands.');
	process.exit(1);
}
