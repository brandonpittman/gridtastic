# gridsome-helpers

A suite of helpers to augment the Gridsome CLI.

## Usage
```sh
$ gridsome-helpers -o html|vue

Options
  --override, -o html|vue         Override filetype
  --component, -c ComponentName   Create component skeleton
  --page, -p PageName             Create page skeleton
  --layout, -l LayoutName         Create layout skeleton
  --template, -t TemplateName     Create template skeleton
  --help, -h                      Show help
```

## Examples

```sh
gridsome-helpers -c some-component  # creates ./src/components/SomeComponent.vue
gridsome-helpers -l SomeLayout  # creates ./src/layouts/SomeLayout.vue
```
