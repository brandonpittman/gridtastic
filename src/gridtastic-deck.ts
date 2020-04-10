import chalk from 'chalk';
import init from './gridtastic-init';
import arg from 'arg';

export default (argv: string[]): void => {
  const args = arg({
    '--repo': String,
    '--dest': String,
    '--help': Boolean,
    '-h': '--help'
  }, {argv});

  if (args['--help']) {
    console.log(chalk`
    {bold Description}
      Creates a slide deck

    {bold Usage}
      $ gridtastic deck [--repo repo] [--dest dest]

    [repo] refers to a GitHub repository containing a starter project. [dest]
    is the desired directory name for the clone repository. [repo] defaults to
    "brandonpittman/gridsome-starter-slides" and [dest] defaults to "gridsome-starter-slides".
    `);
    process.exit(0);
  }

  init([
    '--repo',
    'brandonpittman/gridsome-starter-slides',
    '--dest',
    'gridsome-starter-slides'
  ]);
};
