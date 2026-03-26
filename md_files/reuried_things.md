# Project Setup

- Directory Structure
- Dependencies
- Hooks
- Actions

## Directory Structure

- main.js
- src
    - script/
    - server/
        - app.js
        - handlers.js
        - 
- test
- public
  - index.html
  - styles/
  - scripts/
- data
- .gitignore
- coverage
- setup.sh
- hooks/
- deno.json
- deno.lock
- .vscode
- mdFiles/

## Dependencies

- std/testing
- std/assert
- hono
- redis
- eta
- env

## Hooks

- pre-commit
- pre-push
- pre-merge-commit : run needy things before merging into main branch.
- post-checkout : to install main branch dependencies in the working branch
- post-merge : to install branch dependencies in the main branch
- commit-msg

## Github Actions

- on actions
  - push
- jobs
  - machine
  - steps
    - setup repo
    - setup deno
    - version
    - run linter
    - run tests
- Permissions
  - read