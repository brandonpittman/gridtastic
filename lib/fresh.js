const del = require('del');
const chalk = require('chalk');
const scaffold = require('./scaffold');
const isGridsomeProject = require('./isGridsomeProject');

module.exports = async () => {
	isGridsomeProject();

	const deletedPaths = await del([
		'src/{pages,components,layouts,templates}/README.md',
		'src/pages/{Index,About}.vue',
		'src/layouts/DefaultLayout.vue',
		'!./README.md'
	]);

	if (deletedPaths.length > 0) {
		console.log(chalk.green('Deleted files:\n', deletedPaths.join('\n')));
	} else {
		console.log(chalk.yellow('No files to delete.'));
	}

	scaffold('Layout', 'DefaultLayout');
	scaffold('Page', 'Index');
};
