const chalk = require('chalk');
const override = require('./lib/override');
const scaffold = require('./lib/scaffold');
const fresh = require('./lib/fresh');
const pascalcase = require('pascalcase');
const degit = require('./lib/degit');

module.exports = ({input, flags, showHelp}) => {
	const COMMANDS = [
		'init',
		'scaffold',
		'override',
		'fresh'
	];

	const COMMAND = input[0];

	if (!COMMAND) {
		showHelp();
	} else if (!COMMANDS.includes(COMMAND)) {
		console.log(chalk.bold.red(`\n${COMMAND} is not a recognized command.\n`));
		console.log(chalk.underline('Available commands:'));
		for (let command of COMMANDS) {
			console.log(`${command}`);
		}

		process.exit(126);
	}

	switch (COMMAND) {
		case 'init':
			var {repo, dest} = flags;
			degit({repo, dest});
			break;

		case 'scaffold':
			scaffold(
				pascalcase(flags.type),
				pascalcase(flags.name)
			);
			break;

		case 'override':
			var {html, vue} = flags;
			override({html, vue});
			break;

		case 'fresh':
			fresh();
			break;

		default:
			showHelp();
	}
};
