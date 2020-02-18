import degit from 'degit';
import chalk from 'chalk';
import arg from 'arg';

export default (argv: string[]): void => {
	const args = arg({
		'--repo': String,
		'--dest': String,
		'--help': Boolean,
		'-h': '--help'
	}, {argv});

	if (args['--help']) {
		console.log(chalk`
    {bold Description}
      Creates overrides for App.vue and/or index.html, with boilerplate code.

    {bold Usage}
      $ gridtastic init [--repo repo] [--dest dest]

    [repo] refers to a GitHub repository containing a starter project. [dest]
    is the desired directory name for the clone repository. [repo] defaults to
    "brandonpittman/gridsome-starter-default" and [dest] defaults to "gridsome-starter-default".
    `);
		process.exit(0);
	}

	let {
		'--repo': repo = 'brandonpittman/gridsome-starter-default',
		'--dest': dest = 'gridsome-starter-default'
	} = args;

	let emitter = degit(repo, {
		cache: false,
		force: true,
		verbose: true
	});

	// Emitter.on('info', info => {
	//   console.log(info.message);
	// });

	emitter.clone(dest).then(() => {
		console.log(chalk.bold.green(`\nCloned ${repo} to ${dest}.\n`));
		console.log(chalk.underline('Run the following command:\n'));
		console.log(`cd ${dest} && npm install && gridsome develop`);
	});
};
