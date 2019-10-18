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
		console.log(info.message);
	});

	emitter.clone(dest).then(() => {
		console.log('done');
	});
};
