const fs = require('fs');
const {log} = require('console');
const chalk = require('chalk');
const pascalcase = require('pascalcase');
const isGridsomeProject = require('./isGridsomeProject');

module.exports = ({
	name,
	component = false,
	template = false,
	page = false,
	layout = false
} = {}) => {
	isGridsomeProject();

	if (!(component || page || template || layout)) {
		console.log(chalk.bold.red('Please provide one of the filetype options.'));
		process.exit(126);
	}

	if (!name) {
		console.log(chalk.bold.red('--name option must be provided.'));
		process.exit(126);
	}

	const lookupTable = {
		component,
		template,
		page,
		layout
	};

	for (let [type, value] of Object.entries(lookupTable)) {
		if (value) {
			let filename = pascalcase(name);
			if (fs.existsSync(`./src/${type}s/${filename}.vue`)) {
				log(chalk.red(`${filename}.vue already exists!`));
				process.exit(126);
			} else {
				fs.copyFileSync(`${__dirname}/../templates/${type}.vue`, `./src/${type}s/${filename}.vue`);
				log(chalk.green(`src/${type}s/${filename}.vue created successfully.`));
			}
		}
	}
};
