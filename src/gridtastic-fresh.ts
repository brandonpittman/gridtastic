import del from 'del';
import chalk from 'chalk';
import scaffold from './gridtastic-scaffold';
import isGridsomeProject from './isGridsomeProject';
import arg from 'arg';
import signale from 'signale';

export default async (argv: string[]): Promise<void> => {
  const args = arg({
    '--help': Boolean,
    '-h': '--help'
  }, {argv});

  if (args['--help']) {
    console.log(chalk`
    {bold Description}
      Removes boilerplate files like README.md and About.vue typically included for new developers.

    {bold Usage}
      $ gridtastic fresh
    `);
    process.exit(0);
  }

  isGridsomeProject();

  const deletedPaths = await del([
    'src/{pages,components,layouts,templates}/README.md',
    'src/pages/{Index,About}.vue',
    'src/layouts/Default.vue',
    '!./README.md'
  ]);

  const fresh = signale.scope('fresh');

  if (deletedPaths.length > 0) {
    deletedPaths.forEach((deletedPath: string) => fresh.success(`${deletedPath}`));
  } else {
    fresh.error('No files to delete.');
  }

  scaffold(
    [
      '--layout',
      '--name',
      'Default'
    ]
  );

  scaffold([
    '--page',
    '--name',
    'Index'
  ]);
};
