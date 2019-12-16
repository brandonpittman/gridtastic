const degit = require('degit');
const chalk = require('chalk');

module.exports = async ({
	'--repo': repo = 'brandonpittman/gridsome-starter-default',
	'--dest': dest
} = {}) => {
	const emitter = degit(repo, {
		cache: false,
		force: true,
		verbose: true
	});

	if (!dest) {
		dest = repo.split('/')[1];
	}

	// Emitter.on('info', info => {
	//   console.log(info.message);
	// });

	emitter.clone(dest).then(() => {
		console.log(chalk.bold.green(`\nCloned ${repo} to ${dest}.\n`));
		console.log(chalk.underline('Run the following command:\n'));
		console.log(`cd ${dest} && npm install && gridsome develop`);
	});
};
