const override = require('./lib/override');
const scaffold = require('./lib/scaffold');
const fresh = require('./lib/fresh');
const pascalcase = require('pascalcase');

module.exports = ({input, flags, showHelp}) => {
	const command = input[0];

	switch (command) {
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
