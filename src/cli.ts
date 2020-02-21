#! /usr/bin/env node

import {log} from 'console';
import chalk from 'chalk';
import arg from 'arg';
import pkg from '../package.json';
import checkForUpdate from 'update-check';

const updateCheck = async (): Promise<void> => {
  let update = null;

  try {
    update = await checkForUpdate(pkg);
  } catch (err) {
    let msg: string = err;
    console.error(`Failed to check for updates: ${msg}`);
  }

  if (update) {
    let msg: string = update.latest;
    console.log(`The latest version is ${msg}. Please update!`);
  }
};

updateCheck();

const args = arg({
  '--version': Boolean,
  '--help': Boolean,
  '-h': '--help',
  '-v': '--version'
}, {permissive: true});

const commands = {
  init: async () => import('./gridtastic-init').then(i => i.default),
  scaffold: async () => import('./gridtastic-scaffold').then(async i => i.default),
  override: async () => import('./gridtastic-override').then(async i => i.default),
  fresh: async () => import('./gridtastic-fresh').then(async i => i.default),
  deck: async () => import('./gridtastic-deck').then(async i => i.default)
};

const foundCommand = Boolean(commands[args._[0]]);

if (!foundCommand && args['--version']) {
  log(pkg.version);
  process.exit(0);
}

if (!foundCommand && args['--help']) {
  log(chalk`
    {bold Usage}
      $ gridtastic {bold <command>}

    {bold Available commands}
      ${Object.keys(commands).join(', ')}

    {bold Options}
      --version, -v                    Show version
      --help, -h                       Show help

    For more information run a command with the --help flag
      $ gridtastic scaffold --help
`);
  process.exit(0);
}

if (!foundCommand) {
  process.exit(0);
}

const command = commands[args._[0]];
const forwardedArgs = args._.slice(1);

if (args['--help']) {
  forwardedArgs.push('--help');
}

if (command) {
  command().then(exec => exec(forwardedArgs));
} else {
  console.warn('Command not recognized.\n\nRun gridtastic --help to see available commands.');
  process.exit(1);
}
