# Gridtastic

A suite of helpers to augment the Gridsome CLI.

## Usage
```sh
  $ gridtastic init|override|scaffold|fresh

    init --repo REPO --dest DEST                Download Gridsome starter
    override --html --vue                       Override App.vue and/or index.html
    scaffold --type TYPE --name NAME            Scaffold out a new file
    fresh                                       Delete Gridsome boilerplate pages and folder-specific README.md files

  Options 
    --repo                                      GITHUB_USER/REPO_NAME
    --dest                                      Folder to clone Gridsome starter project to
    --html                                      Denotes index.html
    --vue                                       Denotes App.vue
    --type, -t  Page|Template|Layout|Component  Filetype to be scaffolded
    --name, -n  SomeFilename                    Filename to be used (will be pascal cased by CLI)
    --help, -h                                  Show help
```

## Examples

```sh
gridtastic scaffold -t component -n some-component  # creates ./src/components/SomeComponent.vue
```
