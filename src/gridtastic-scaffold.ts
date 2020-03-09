import fs from 'fs';
import pkgDir from 'pkg-dir';
import {log} from 'console';
import chalk from 'chalk';
import pascalcase from 'pascalcase';
import isGridsomeProject from './isGridsomeProject';
import arg from 'arg';
import signale from 'signale';

async function touchDir(dirPath: string): Promise<void> {
	let fsPromises = fs.promises;
	await fsPromises.mkdir(dirPath);
}

export default async (argv: string[]): Promise<void> => {
	const args = arg({
		'--template': Boolean,
		'--page': Boolean,
		'--component': Boolean,
		'--layout': Boolean,
		'--name': String,
		'-l': '--layout',
		'-c': '--component',
		'-p': '--page',
		'-t': '--template',
		'-n': '--name',
		'--help': Boolean,
		'-h': '--help'
	}, {argv});

	if (args['--help']) {
		console.log(chalk`
    {bold Description}
      Creates a new Vue file of page, component, template, or layout types.

    {bold Usage}
      $ gridtastic scaffold --page --name <name>

    <name> will converted to PascalCase automatically.
    `);
		process.exit(0);
	}

	isGridsomeProject();

	let {
		'--name': name = null,
		'--component': component = false,
		'--template': template = false,
		'--page': page = false,
		'--layout': layout = false
	} = args;

	if (!(component || page || template || layout)) {
		signale.error('Please provide one of the filetype options.');
		// Console.log(chalk.bold.red('Please provide one of the filetype options.'));
		process.exit(1);
	}

	if (!name) {
		signale.error('--name option must be provided.');
		// Console.log(chalk.bold.red('--name option must be provided.'));
		process.exit(1);
	}

	const lookupTable = {
		component,
		template,
		page,
		layout
	};

	const pkgRoot = await pkgDir(__dirname);

	const scaffold = signale.scope('scaffold');

	for (let [type, value] of Object.entries(lookupTable)) {
		if (value) {
			let filename: string = pascalcase(name);
			let pascalType: string = pascalcase(type);

			if (fs.existsSync(`${pkgRoot}/${type}s/${filename}.vue`)) {
				scaffold.error(`${filename}.vue already exists!`);
				// Log(chalk.red(`${filename}.vue already exists!`));
				process.exit(126);
			} else {
				fs.existsSync(`./src/${type}s`) || touchDir(`./src/${type}s`);
				fs.copyFileSync(`${pkgRoot}/templates/${pascalType}.vue`, `./src/${type}s/${filename}.vue`);
				scaffold.success(`src/${type}s/${filename}.vue`);
				// Log(chalk.green(`src/${type}s/${filename}.vue created.`));
			}
		}
	}
};
