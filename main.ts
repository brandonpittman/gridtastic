var chalk = require('chalk');
var packageJSON = require('./package.json');
var override = require('./lib/override');
var scaffold = require('./lib/scaffold');
var fresh = require('./lib/fresh');
var degit = require('./lib/degit');
import {log} from 'console';

export default function ({args, help}) {
	if (args['--version']) {
		log(packageJSON.version);
	}

	const COMMANDS = [
		'init',
		'scaffold',
		'override',
		'fresh'
	];

	const COMMAND = args._[0];

	if (!COMMAND) {
		log(help);
		return;
	}

	switch (COMMAND) {
		case 'init':
			degit(args);
			break;

		case 'scaffold':
			scaffold(args);
			break;

		case 'override':
			override(args);
			break;

		case 'fresh':
			fresh();
			break;

		default:
			log(chalk.bold.red(`\n${COMMAND} is not a recognized command.\n`));
			log(chalk.underline('Available commands:'));
			for (const command of COMMANDS) {
				log(`${command}`);
			}

			process.exit(126);
	}
}

