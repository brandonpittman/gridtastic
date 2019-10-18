const meow = require('meow');

module.exports = meow(`
Usage
    $ gridsome-helpers

    override html|vue                           Override filetype
    scaffold -t TYPE -n NAME                    Scaffold out a new file
    fresh                                       Delete Gridsome boilerplate pages and folder-specific README.md files

  Options 
    --type, -t  Page|Template|Layout|Component  Filetype to be scaffolded
    --name, -n  SomeFilename                    Filename to be used (will be pascal cased by CLI)
    --help, -h                                  Show help
`, {
	flags: {
		help: {
			alias: 'h',
			type: 'boolean'
		},
		type: {
			type: 'string',
			alias: 't'
		},
		name: {
			type: 'string',
			alias: 'n'
		}
	}
});
