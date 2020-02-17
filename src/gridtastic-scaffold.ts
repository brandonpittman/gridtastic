import fs from 'fs';
import pkgDir from 'pkg-dir';
import {log} from 'console';
import chalk from 'chalk';
import pascalcase from 'pascalcase';
import isGridsomeProject from './isGridsomeProject';
import arg from 'arg';

export default async (argv): Promise<void> => {
	isGridsomeProject();

	let {
		'--name': name = null,
		'--component': component = false,
		'--template': template = false,
		'--page': page = false,
		'--layout': layout = false
	} = arg({
		'--template': Boolean,
		'--page': Boolean,
		'--component': Boolean,
		'--layout': Boolean,
		'--name': String,
		'-l': '--layout',
		'-c': '--component',
		'-p': '--page',
		'-t': '--template',
		'-n': '--name'
	}, {argv});

	if (!(component || page || template || layout)) {
		console.log(chalk.bold.red('Please provide one of the filetype options.'));
		process.exit(1);
	}

	if (!name) {
		console.log(chalk.bold.red('--name option must be provided.'));
		process.exit(1);
	}

	const lookupTable = {
		component,
		template,
		page,
		layout
	};

	const pkgRoot = await pkgDir(__dirname);

	for (let [type, value] of Object.entries(lookupTable)) {
		if (value) {
			let filename: string = pascalcase(name);
			let pascalType: string = pascalcase(type);

			if (fs.existsSync(`./src/${type}s/${filename}.vue`)) {
				log(chalk.red(`${filename}.vue already exists!`));
				process.exit(126);
			} else {
				fs.copyFileSync(`${pkgRoot}/templates/${pascalType}.vue`, `./src/${type}s/${filename}.vue`);
				log(chalk.green(`src/${type}s/${filename}.vue`));
			}
		}
	}
};