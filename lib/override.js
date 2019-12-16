var fs = require('fs');
var chalk = require('chalk');
var {log} = console;
var isGridsomeProject = require('./isGridsomeProject');

module.exports = ({
	'--html': html = false,
	'--vue': vue = false
} = {}) => {
	isGridsomeProject();

	if (!fs.existsSync('./src')) {
		log(chalk.blue('Creating src directory'));
		fs.mkdirSync('./src');
	}

	if (!(html || vue)) {
		console.log(chalk.yellow('Please pass --html and/or --vue.'));
		process.exit(126);
	}

	if (html) {
		if (fs.existsSync('./src/index.html')) {
			log(chalk.red('index.html already exists!'));
		} else {
			fs.copyFileSync(`${__dirname}/../templates/index.html`, './src/index.html');
			log(chalk.green('index.html created successfully.'));
		}
	}

	if (vue) {
		if (fs.existsSync('./src/App.vue')) {
			log(chalk.red('App.vue already exists!'));
		} else {
			fs.copyFileSync(`${__dirname}/../templates/App.vue`, './src/App.vue');
			log(chalk.green('App.vue created successfully.'));
		}
	}
};
