const chalk = require('chalk');
const packageJSON = require('./package.json');
const override = require('./lib/override');
const scaffold = require('./lib/scaffold');
const fresh = require('./lib/fresh');
const degit = require('./lib/degit');

module.exports = ({args, help}) => {
	if (args['--version']) {
		console.log(packageJSON.version);
	}

	const COMMANDS = [
		'init',
		'scaffold',
		'override',
		'fresh'
	];

	const COMMAND = args._[0];

	if (!COMMAND) {
		console.log(help);
	} else if (!COMMANDS.includes(COMMAND)) {
		console.log(chalk.bold.red(`\n${COMMAND} is not a recognized command.\n`));
		console.log(chalk.underline('Available commands:'));
		for (const command of COMMANDS) {
			console.log(`${command}`);
		}

		process.exit(126);
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
    // Console.log(help);
	}
};

