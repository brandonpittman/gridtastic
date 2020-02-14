import {version} from '../package.json';
import override from './override';
import scaffold from './scaffold';
import fresh from './fresh';
import degit from './degit';
import {log} from 'console';

export default function ({help, args}) {
	if (args['--version']) {
		log(version);
		return;
	}

	if (args['--help']) {
		log(help);
		return;
	}

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
