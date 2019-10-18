const del = require('del');
const chalk = require('chalk');
const copyTemplate = require('./copyTemplate');

module.exports = async () => {
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

	copyTemplate('Layout', 'DefaultLayout');
	copyTemplate('Page', 'Index');
};
