import chalk from 'chalk';
import {version} from './package.json';
import override from './lib/override';
import scaffold from './lib/scaffold';
import fresh from './lib/fresh';
import degit from './lib/degit';
import {log} from 'console';

export default function ({help, args}) {
  if (args['--version']) {
    log(version);
  }

  if (args['--help']) {
    log(help);
  }

  const commands = {
    init: degit,
    scaffold: scaffold,
    override: override,
    fresh: fresh
  };

  const command = commands[args._[0]];

  if (command) {
    command();
  }
}
