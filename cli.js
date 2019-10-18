#! /usr/bin/env node

'use strict';

const pascalcase = require('pascalcase');

const parser = require('./lib/parser');
const override = require('./lib/override');
const scaffold = require('./lib/scaffold');
const fresh = require('./lib/fresh');

const cli = parser;
const {input, flags, showHelp} = cli;
const command = input[0];

switch (command) {
	case 'scaffold':
		scaffold(
			pascalcase(flags.type),
			pascalcase(flags.name)
		);
		break;

	case 'override':
		override(input[1]);
		break;

	case 'fresh':
		fresh();
		break;

	default:
		showHelp();
}
