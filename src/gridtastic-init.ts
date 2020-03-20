import degit from 'degit';
import chalk from 'chalk';
import arg from 'arg';
import signale from 'signale';
import fs from 'fs';

export default async (argv: string[]): Promise<void> => {
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
		'--repo': repo = 'brandonpittman/aperitif',
		'--dest': dest = 'aperitif'
	} = args;

	let emitter = degit(repo, {
		cache: false,
		force: true,
		verbose: true
	});

	const init = signale.scope('init');

	if (fs.existsSync(dest)) {
		init.error(`Directory "${dest}" already exists!`);
		process.exit(0);
	}

	init.wait(`Cloning ${repo}...`);
	await emitter.clone(dest);
	init.success(`Cloned ${repo} to ${dest}.`);
	init.info(`Run the following command: cd ${dest} && npm install && gridsome develop`);
};
