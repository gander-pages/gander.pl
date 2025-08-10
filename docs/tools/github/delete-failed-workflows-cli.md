---
title: "Automatically Delete Failed GitHub Actions Workflows via CLI"
description: |
    A practical guide on how to automatically delete failed workflow runs in a GitHub repository using GitHub CLI with xargs and jq.
---

# Automatically Delete Failed GitHub Actions Workflows via CLI

When working with CI/CD, especially during intensive testing or development, a GitHub repository can quickly fill up with failed workflows (runs) that make navigation difficult and can consume resources. GitHub CLI (`gh`) allows you to automate the process of removing them.

```shell
gh run list \
  --status failure \
  --all \
  --json databaseId \
  --jq '.[].databaseId' | xargs -I{} gh run delete {}
```

## Detailed Explanation of Each Argument and Command

📖 **Command Documentation**:
- [gh run list](https://cli.github.com/manual/gh_run_list) - GitHub CLI run list command
- [gh run delete](https://cli.github.com/manual/gh_run_delete) - GitHub CLI run delete command
- [xargs](https://man7.org/linux/man-pages/man1/xargs.1.html) - Execute commands from standard input
- [jq](https://jqlang.github.io/jq/manual/) - JSON processor

### 1. `gh run list`

Lists workflows (runs) in the repository:

- **`gh`** — this is GitHub CLI, a tool for managing GitHub from the terminal.
- **`run list`** — displays a list of GitHub Actions workflow runs.

#### Arguments:

- **`--status failure`**
    - Filters runs by their completion status. The `failure` value specifically targets runs that ended in failure.
    - Alternative values: `queued`, `completed`, `in_progress`, `requested`, `waiting`, `pending`
- **`--all`**
    - Include disabled workflows and show all runs without the default limit (normally limited to 20 most recent runs).
    - Without this flag, only active workflows and recent runs are displayed.
- **`--json databaseId`**
    - Output results in JSON format, including only the `databaseId` field for each workflow run.
    - The `databaseId` is the unique identifier needed for deletion operations.
- **`--jq '.[].databaseId'`**
    - Apply jq filter to extract only the `databaseId` values from the JSON output.
    - This transforms the JSON array into a simple list of IDs, one per line.

### 2. `| xargs -I{} gh run delete {}`

Processes subsequent steps in bash (pipe):

- **`|`** — passes the result from the previous command to the next one.
- **`xargs`** — processes each line from the input (i.e., each `databaseId`).
- **`-I{}`** — specifies that `{}` will be replaced by the value of each line (each ID).
- **`gh run delete {}`**
    - Deletes the workflow run with the given `databaseId` from the GitHub repository.

## How It Works — Step by Step

1. `gh run list --status failure --all --json databaseId --jq '.[].databaseId'`  
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

