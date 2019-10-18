const chalk = require('chalk');
const override = require('./lib/override');
const scaffold = require('./lib/scaffold');
const fresh = require('./lib/fresh');
const pascalcase = require('pascalcase');

module.exports = ({input, flags, showHelp}) => {
	const COMMANDS = [
		'scaffold',
		'override',
		'fresh'
	];

	const COMMAND = input[0];

	if (!COMMANDS.includes(COMMAND)) {
		console.log(chalk.bold.red(`\n${COMMAND} is not a recognized command.\n`));
		console.log(chalk.underline('Available commands:'));
		for (let command of COMMANDS) {
			console.log(`${command}`);
		}

		process.exit(126);
	}

	switch (COMMAND) {
		case 'scaffold':
			scaffold(
				pascalcase(flags.type),
				pascalcase(flags.name)
			);
			break;

		case 'override':
			override(input[1]);
			break;

		case 'fresh':
			fresh();
			break;

		default:
			showHelp();
	}
};
