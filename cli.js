#! /usr/bin/env node

'use strict';

const packageJSON = require('./package.json');
const chalk = require('chalk');
const arg = require('arg');
const gridtastic = require('./main.js');

const help = chalk`
  ${packageJSON.description}

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
	'--help': Boolean
});

gridtastic({help, args});
