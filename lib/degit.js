const degit = require('degit');
const chalk = require('chalk');

module.exports = async ({
	repo = 'brandonpittman/gridsome-starter-default',
	dest = 'gridsome-starter-default'
} = {}) => {
	const emitter = degit(repo, {
		cache: true,
		force: true,
		verbose: true
	});

	// Emitter.on('info', info => {
	// Console.log(info.message);
	// });

	emitter.clone(dest).then(() => {
		console.log(chalk.bold.green(`\nCloned ${repo} to ${dest}.\n`));
		console.log(chalk.underline('Run the following command:\n'));
		console.log(`cd ${dest} && npm install && gridsome develop`);
	});
};
