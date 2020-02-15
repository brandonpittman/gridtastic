import override from './override';
import scaffold from './scaffold';
import fresh from './fresh';
import degit from './degit';

export default function (args) {
	const commands = {
		init: degit,
		scaffold: scaffold,
		override: override,
		fresh: fresh
	};

	const command = commands[args._[0]];

	if (command) {
		command(args);
	}
}
