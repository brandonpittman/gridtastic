const fs = require('fs');
const chalk = require('chalk');
const {log} = console;
const isGridsomeProject = require('./isGridsomeProject');

module.exports = filetype => {
	isGridsomeProject();

	if (!fs.existsSync('./src')) {
		log(chalk.blue('Creating src directory'));
		fs.mkdirSync('./src');
	}

	if (filetype === 'html') {
		if (fs.existsSync('./src/index.html')) {
			log(chalk.red('index.html already exists!'));
		} else {
			fs.copyFileSync(`${__dirname}/../templates/index.html`, './src/index.html');
			log(chalk.green('index.html created successfully.'));
		}
	} else if (filetype === 'vue') {
		if (fs.existsSync('./src/App.vue')) {
			log(chalk.red('App.vue already exists!'));
		} else {
			fs.copyFileSync(`${__dirname}/../templates/App.vue`, './src/App.vue');
			log(chalk.green('App.vue created successfully.'));
		}
	} else {
		console.log(chalk.yellow('Please provide "html" or "vue" to the --override option.'));
	}
};
