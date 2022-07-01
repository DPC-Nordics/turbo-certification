# DPC Turbo Developer Certification - Level 1

[< Back](index.md)

## Task 1: Setup and GitHub

This task deals with setting up the DPC Turbo project locally on your machine. It should be a simple task, but it's important to get the right setup.

> It is highly recommended to use [VS Code](https://code.visualstudio.com/) as a development environment, since it provides features and extensions that are used in this certification. It allows all DPC Turbo developers to set a common standard practices.

### Concepts

- Basics of Git and GitHub
- Basics of monorepo and turborepo

### Reading material

- [NodeJS](https://nodejs.org/en/)
- [yarn 1](https://classic.yarnpkg.com/en/docs)
- [Git](https://www.atlassian.com/git)
- [GitHub PR](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
- [Monorepo](https://monorepo.tools) and [Turborepo](https://turborepo.org)

### Steps

1. Install NodeJS v16 or greater. Then globally install `yarn` package manager.
2. Clone the repository from [GitHub](https://github.com/DPC-Nordics/dpc-turbo) locally on your machine.
3. Install the package dependencies with `yarn` package manager.
4. Create and publish a new git-branch with your Accenture Enterprise ID using naming-pattern `certification-1/<accenture.eid>`. Eg. `certification-1/bjorn.allvin`.
5. Create a Pull request (PR) in Github with the new branch.

> Note: This PR will be used later to measure the completion of the certification. Do not delete the PR as all future changes/pushes will be reflected in this PR.
> Note: DO NOT merge the PR as this certification tasks are not meant to be merged to production.

### Evaluation

1. To verify the setup, in the terminal, run the following command:

   ```bash
   yarn dev:next
   ```

   The server should start and you should be able to access the application at [localhost:3000](http://localhost:3000) in your browser.

2. The PR can be verified on GitHub repository [DPC-Nordics/dpc-turbo](https://github.com/DPC-Nordics/dpc-turbo/pulls)
