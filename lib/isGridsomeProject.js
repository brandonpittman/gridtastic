const fs = require('fs');
const chalk = require('chalk');

module.exports = () => {
	if (!fs.existsSync('./gridsome.config.js')) {
		console.log(chalk.red('Not in root of a Gridsome project!'));
		process.exit(126);
	}
};
