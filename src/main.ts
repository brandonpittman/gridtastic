import chalk from 'chalk';

export default (args: any): void => {
	const commands = {
		init: async () => import('./degit').then(i => i.default()),
		scaffold: async () => import('./scaffold').then(async i => i.default(args)),
		override: async () => import('./override').then(async i => i.default(args)),
		fresh: async () => import('./fresh').then(async i => i.default())
	};

	const command = commands[args._[0]];

	if (command) {
		command(args);
	} else {
		console.warn(chalk`{bold.red Command not recognized.}\n\nRun gridtastic --help to see available commands.`);
		process.exit(1);
	}
};
