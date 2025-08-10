---
title: "Automatically Delete Failed GitHub Actions Workflows via CLI"
description: |
    A practical guide on how to automatically delete failed workflow runs in a GitHub repository using GitHub CLI with xargs and jq.
---

# Automatically Delete Failed GitHub Actions Workflows via CLI

When working with CI/CD, especially during intensive testing or development, a GitHub repository can quickly fill up with failed workflows (runs) that make navigation difficult and can consume resources. GitHub CLI (`gh`) allows you to automate the process of removing them.

```shell
gh run list -s failure --all --json databaseId --jq '.[].databaseId' | xargs -I{} gh run delete {}
```

## Detailed Explanation of Each Argument and Command

### 1. `gh run list`

Lists workflows (runs) in the repository:

- **`gh`** — this is GitHub CLI, a tool for managing GitHub from the terminal.
- **`run list`** — displays a list of GitHub Actions workflow runs.

#### Arguments:

- **`-s failure`**
    - Filters only those runs that ended in failure.
- **`--all`**
    - Shows all runs, without limiting to the last 30.
- **`--json databaseId`**
    - Retrieves data in JSON format, narrowing to the `databaseId` field for each workflow run.
- **`--jq '.[].databaseId'`**
    - Processes the JSON result, outputting only the identifiers (`databaseId`) of each failed workflow (each run).

### 2. `| xargs -I{} gh run delete {}`

Processes subsequent steps in bash (pipe):

- **`|`** — passes the result from the previous command to the next one.
- **`xargs`** — processes each line from the input (i.e., each `databaseId`).
- **`-I{}`** — specifies that `{}` will be replaced by the value of each line (each ID).
- **`gh run delete {}`**
    - Deletes the workflow run with the given `databaseId` from the GitHub repository.

## How It Works — Step by Step

1. `gh run list -s failure --all --json databaseId --jq '.[].databaseId'`  
   Displays a list of identifiers for all failed workflows in the repository.

2. The result of these identifiers (each on a new line) is passed through the pipe `|` to `xargs`.

3. `xargs -I{} gh run delete {}`  
   For each of these identifiers, runs the command to delete the workflow run with the specified ID from the repository.

## Requirements

- Installed GitHub CLI (https://cli.github.com/)
- Appropriate permissions to delete workflows in the given repository.
- System with bash/Unix command support (Linux, macOS; on Windows, PowerShell/Cygwin/WSL is required).

## Example Use Cases

- **Post-test cleanup**: Removing unnecessary, failed runs after intensive CI/CD testing.
- **Resource optimization**: Getting rid of old, failed workflows to more clearly track the current CI state.

## Warning!

The command **permanently deletes** workflows that cannot be recovered later — use with caution!

---

