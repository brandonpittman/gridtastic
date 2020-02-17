import fs from 'fs';
import chalk from 'chalk';

export default (): void | boolean => {
	if (!fs.existsSync('./gridsome.config.js')) {
		console.log(chalk.red('Not in root of a Gridsome project!'));
		process.exit(1);
	}

	return true;
};
