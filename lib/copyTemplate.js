const fs = require('fs');
const {log} = require('console');
const chalk = require('chalk');

module.exports = (type, name) => {
	if (fs.existsSync(`./src/${type.toLowerCase()}s/${name}.vue`)) {
		log(chalk.red(`${name}.vue already exists!`));
	} else {
		fs.copyFileSync(`${__dirname}/../templates/${type}.vue`, `./src/${type.toLowerCase()}s/${name}.vue`);
		log(chalk.green(`${name}.vue created successfully.`));
	}
};
