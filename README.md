# gridsome-helpers

A suite of helpers to augment the Gridsome CLI.

## Usage
```sh
  Usage
    $ gridsome-helpers

    override html|vue                           Override filetype
    scaffold -t TYPE -n NAME                    Scaffold out a new file
    fresh                                       Delete Gridsome boilerplate pages and folder-specific README.md files

  Options 
    --type, -t  Page|Template|Layout|Component  Filetype to be scaffolded
    --name, -n  SomeFilename                    Filename to be used (will be pascal cased by CLI)
    --help, -h                                  Show help
```

## Examples

```sh
gridsome-helpers scaffold -t component -n some-component  # creates ./src/components/SomeComponent.vue
```
