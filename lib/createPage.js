const fs = require('fs');
const {log} = require('console');
const chalk = require('chalk');

module.exports = name => {
	if (fs.existsSync(`./src/pages/${name}.vue`)) {
		log(chalk.red(`${name}.vue already exists!`));
	} else {
		fs.copyFileSync(`${__dirname}/../templates/Page.vue`, `./src/pages/${name}.vue`);
		log(chalk.green(`${name}.vue created successfully.`));
	}
};
