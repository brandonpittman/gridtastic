import fs from 'fs';
import chalk from 'chalk';
import {log} from 'console';
import isGridsomeProject from './isGridsomeProject';
import pkgDir from 'pkg-dir';
import arg from 'arg';

export default async (argv: string[]): Promise<void> => {
  const args = arg({
    '--html': Boolean,
    '--vue': Boolean,
    '--help': Boolean,
    '-h': '--help'
  }, {argv});

  if (args['--help']) {
    console.log(chalk`
    {bold Description}
      Creates overrides for App.vue and/or index.html, with boilerplate code.

    {bold Usage}
      $ gridtastic override --vue --html
    `);
    process.exit(0);
  }

  isGridsomeProject();

  let {
    '--html': html = false,
    '--vue': vue = false
  } = args;

  if (!fs.existsSync('./src')) {
    log(chalk.blue('Creating src directory'));
    fs.mkdirSync('./src');
  }

  if (!(html || vue)) {
    console.log(chalk.yellow('Please pass --html and/or --vue.'));
    process.exit(1);
  }

  const pkgRoot = await pkgDir(__dirname);

  if (html) {
    if (fs.existsSync('./src/index.html')) {
      log(chalk.red('index.html already exists!'));
    } else {
      fs.copyFileSync(`${pkgRoot}/templates/index.html`, './src/index.html');
      log(chalk.green('index.html created successfully.'));
    }
  }

  if (vue) {
    if (fs.existsSync('./src/App.vue')) {
      log(chalk.red('App.vue already exists!'));
    } else {
      fs.copyFileSync(`${pkgRoot}/templates/App.vue`, './src/App.vue');
      log(chalk.green('App.vue created successfully.'));
    }
  }
};
