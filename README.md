# actionstep

ActionStep API Client

## Getting started

1. Install or update [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
    > nvm is a version manager for node.js, designed to be installed per-user, and invoked per-shell. nvm works on any POSIX-compliant shell (sh, dash, ksh, zsh, bash), in particular on these platforms: unix, macOS, and windows WSL.

2. Open the shell and change to the `monorepo` workspace root directory.
    ```sh
    cd monorepo
    ```

3. Install and activate the indicated Node.js version in `.nvmrc`
    ```sh    
    nvm install
    ```

4. Switch to the Node.js version specified in `.nvmrc` in the current shell. You should run this every time you open a new shell.
    ```sh
    nvm use
    node -v
    ```

5. To avoid running `nvm use` for each shell, you can set the system default Node.js version as indicated in the `.nvmrc`. Run the following and restart your shell
    ```sh
    nvm alias default "$(<.nvmrc)"
    ```

8. Install packages
    ```sh
    npm install
    ```

9. Build
    ```sh
    npm run build
    ```

10. To run the unit tests
    ```sh
    npm test
    ```
