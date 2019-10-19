# Gridtastic

A suite of helpers to augment the Gridsome CLI.


## Install

`npm install -g gridtastic`


## Usage

```sh
  $ gridtastic

    init --repo REPO --dest DEST     Download Gridsome starter
    override --html --vue            Override App.vue and/or index.html
    scaffold --TYPE --name NAME      Scaffold out a new file
    fresh                            Delete Gridsome boilerplate pages and folder-specific README.md files

  Options 
    --repo, -r                       GITHUB_USER/REPO_NAME
    --dest, -d                       Folder to clone Gridsome starter project to
    --html                           Denotes index.html
    --vue                            Denotes App.vue
    --template, -t                   /templates
    --page, -p                       /pages
    --component, -c                  /components
    --layout, -l                     /layouts
    --name, -n  SomeFilename         Filename to be used (will be pascal cased by CLI)
    --help, -h                       Show help
```

## Examples

```sh
gridtastic init  # clones brandonpittman/gridsome-starter-default into ./gridsome-starter-default
gridtastic scaffold -c -n some-component  # creates ./src/components/SomeComponent.vue
```
