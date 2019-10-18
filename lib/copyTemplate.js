const fs = require('fs');
const {log} = require('console');
const chalk = require('chalk');
const isGridsomeProject = require('./isGridsomeProject');

module.exports = (type, name) => {
	isGridsomeProject();
	const filetypes = ['Component', 'Page', 'Layout', 'Template'];

	if (!filetypes.includes(type)) {
		console.log(chalk.red('--type must be one of:', filetypes));
		process.exit(126);
	}

	if (!name) {
		console.log(chalk.red('--name cannot be empty'));
		process.exit(126);
	}

	if (fs.existsSync(`./src/${type.toLowerCase()}s/${name}.vue`)) {
		log(chalk.red(`${name}.vue already exists!`));
		process.exit(126);
	} else {
		fs.copyFileSync(`${__dirname}/../templates/${type}.vue`, `./src/${type.toLowerCase()}s/${name}.vue`);
    log(chalk.green(`src/${type.toLowerCase()}s/${name}.vue created successfully.`));
	}
};
