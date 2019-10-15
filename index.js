const meow = require('meow')
const fs = require('fs')

const cli = meow(`

  Usage
    $ gridsome-helpers -o html|vue

  Options
    --override, -o Override filetype
`, {
  flags: {
    override: {
      type: 'string',
      alias: 'o'
    }
  }
})

if (cli.flags.override) {
  fs.copyFileSync('templates/index.html', '../../src/index.html')
}
