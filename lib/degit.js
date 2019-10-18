const degit = require('degit');
const chalk = require('chalk');

module.exports = async (repo, dest) => {
	if (!(repo && dest)) {
		console.log(chalk.bold.red('Please provide Github repo and destination folder arguments.'));
		process.exit(126);
	}

	const emitter = degit(repo, {
		cache: true,
		force: true,
		verbose: true
	});

	emitter.on('info', info => {
		// Console.log(info.message);
	});

	emitter.clone(dest).then(() => {
		console.log(chalk.bold.green(`\nCloned ${repo} to ${dest}.\n`));
		console.log(chalk.underline('Run the following command:\n'));
		console.log(`cd ${dest} && npm install && gridsome develop`);
	});
};
