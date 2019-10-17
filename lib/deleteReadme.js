const del = require('del');
const chalk = require('chalk');

module.exports = async () => {
	const deletedPaths = await del(['src/{pages,components,layouts,templates}/README.md', '!./README.md']);

	if (deletedPaths.length > 0) {
		console.log(chalk.green('Deleted files:\n', deletedPaths.join('\n')));
	} else {
		console.log(chalk.yellow('No files to delete.'));
	}
};
