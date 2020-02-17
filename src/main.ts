export default (args: any): void => {
	const commands = {
		init: async () => import('./degit').then(i => i.default(args)),
		scaffold: async () => import('./scaffold').then(i => i.default(args)),
		override: async () => import('./override').then(i => i.default(args)),
		fresh: async () => import('./fresh').then(i => i.default())
	};

	const command = commands[args._[0]];

	if (command) {
		command(args);
	}
};
