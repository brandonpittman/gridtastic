const fs = require('fs');
const {log} = require('console');
const chalk = require('chalk');

module.exports = name => {
	if (fs.existsSync(`./src/components/${name}.vue`)) {
		log(chalk.red(`${name}.vue already exists!`));
	} else {
		fs.copyFileSync(`${__dirname}/../templates/Component.vue`, `./src/components/${name}.vue`);
		log(chalk.green(`${name}.vue created successfully.`));
	}
};
