var del = require('del');
var chalk = require('chalk');
var scaffold = require('./scaffold');
var isGridsomeProject = require('./isGridsomeProject');

module.exports = async () => {
	isGridsomeProject();

	const deletedPaths = await del([
		'src/{pages,components,layouts,templates}/README.md',
		'src/pages/{Index,About}.vue',
		'src/layouts/Default.vue',
		'!./README.md'
	]);

	if (deletedPaths.length > 0) {
		console.log(chalk.green('Deleted files:\n', deletedPaths.join('\n')));
	} else {
		console.log(chalk.yellow('No files to delete.'));
	}

	scaffold({layout: true, name: 'Default'});
	scaffold({page: true, name: 'Index'});
};
