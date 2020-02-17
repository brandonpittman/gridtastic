import del from 'del';
import chalk from 'chalk';
import scaffold from './scaffold';
import isGridsomeProject from './isGridsomeProject';

export default async (): Promise<void> => {
	isGridsomeProject();

	const deletedPaths = await del([
		'src/{pages,components,layouts,templates}/README.md',
		'src/pages/{Index,About}.vue',
		'src/layouts/Default.vue',
		'!./README.md'
	]);

	if (deletedPaths.length > 0) {
		console.log(chalk.red(deletedPaths.join('\n')));
	} else {
		console.log(chalk.yellow('No files to delete.'));
	}

	scaffold({
		'--layout': true,
		'--name': 'Default'
	});

	scaffold({
		'--page': true,
		'--name': 'Index'
	});
};
