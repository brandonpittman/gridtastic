#!/usr/bin/env node

import args from 'args';
import degit from './degit';
import fresh from './fresh';
import scaffold from './scaffold';
import override from './override';

args
  .command('init', 'Clone a starter Gridsome project', (name, sub, options) => degit(options))
  .command('scaffold', 'Scaffold a new component', (name, sub, options) => scaffold(options))
  .command('override', 'Override default index.html and/or App.vue', (name, sub, options) => override(options))
  .command('fresh', 'Delete unnecessary starter files', fresh)
  .option('dest', 'The directory to clone into', 'gridsome-starter-default')
  .option('html', 'Override index.html', false)
  .option('vue', 'Override App.vue', false)
  .option('page', '/pages')
  .option('component', '/components')
  .option('layout', '/layouts')
  .option('template', '/templates')
  .option('name', 'Name of component to scaffold')
  .option('repo', 'The name of the GitHub repository to clone', 'brandonpittman/gridsome-starter-default');

args.parse(process.argv, {name: 'gridtastic'});
