# DPC Turbo Developer Certification - Level 1

[< Back](index.md)

## Task 5: RTK Query

The task deals with setting up and using RTK Query. RTK Query is a powerful data fetching and caching tool. It is designed to simplify common cases for loading data in a web application, eliminating the need to hand-write data fetching & caching logic yourself.

### Concepts

- Queries and Mutation

### Reading material

- [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)
- [with TypeScript](https://redux-toolkit.js.org/rtk-query/usage-with-typescript)
- [Queries](https://redux-toolkit.js.org/rtk-query/usage/queries)

### Steps

#### 1. Setup `turbo-posts` addon

Addons are modular packages which are consumed by **core** packages to provide functionality to apps. The idea is that an app should not directly interact with an addon and only use it through the core packages.

- Create a new addon package `turbo-posts` in `packages/addons` directory.
- The package should contain following files:
  - `package.json`: Contains info about the addon package:
    - `name`: Name of addon (prefixed with `@dpc-turbo/`). Eg: `@dpc-turbo/turbo-posts`
    - `version`: Version should always be `0.0.0` in monorepo
    - Other fields like `main`, `module`, `types`, `private`, `files`, `scripts`, `dependencies`, `devDependencies`, `jest` can be duplicated from other addons like `@dpc-turbo/firestore`.
    - Update the `dependencies` and `devDependencies` to only have packages are are utilised by your addon.
  - Duplicate files like `tsconfig.json`, `.eslintrc.js` and `README.md`. Update the README to describe your addon.
  - `src/index.ts`: This is the entry point for the addon. It should export methods for this addon.

> Hint: This package should be re-exported from `@dpc-turbo/api` package.
>
> Note: you will have to run `yarn` and the `dev` command again for TurboRepo to pick up the new addon.

#### 2. Create `turboPostsApiSlice`

`createApi` is the core of RTK Query's functionality. It allows you to define a set of endpoints describe how to retrieve data from a series of endpoints, including configuration of how to fetch and transform that data.

- Setup a new `addon` package in `packages/addons` directory.
- Create a new apiSlice called `turboPostsApiSlice` in `/packages/addons/turbo-posts/` with following properties:
  - `reducerPath`: "turboPostsApi"
  - `baseQuery`: Use RTK Query's `createBaseQuery` to create a base query with `baseUrl`='https://dummyjson.com/'.
  - `endpoints`: A function that returns an empty object. In DPC turbo, the endpoints are injected later on to maintain good file structure.
- This slice and its middleware should be added to `@dpc-turbo/store` package in `store_config.ts`.

> Hint: This slice should be re-exported from `src/index.ts` file.

**Inject `posts` endpoints**

- Create a sub-folder in `turbo-posts` addon called `posts` with an `endpoints` file.
- Create an `extendedTurboPostsApiSlice` which injects endpoints to `turboPostsApiSlice`.
- The following endpoints should be injected:
  - `getTurboPosts`: Get posts from API service (path: `posts`, method: `GET`). Include a transformer function which will transform the data to the shape of the `ITurboPost[]`.
  - `getTurboPost`: Get post by ID from API service (path: `posts/{id}`, method: `GET`). Include a transformer function which will transform the data to the shape of the `ITurboPost`.
- Export the generated hooks from `extendedTurboPostsApiSlice`: `useGetTurboPostsQuery`, `useGetTurboPostQuery`

> Note: [Docs for the API service used](https://dummyjson.com/docs/posts).
>
> Hint: These hooks should be re-exported from `src/index.ts` file.

#### 3. Use the new API hooks in routes

**`/turbo-posts` route**

- Remove the function `getStaticProps`.
- Import `useGetTurboPostsQuery` from `@dpc-turbo/api` package and use it to fetch posts. These posts must be used for the list instead of the one from the props.
- Handle the error and loading state.

**`/turbo-posts/[postId]` route**

- Remove the function `getStaticProps` and `getStaticPaths`.
- Import `useGetTurboPostQuery` and `useGetTurboPostCommentsQuery` from `@dpc-turbo/api` package and use it to fetch current post. Use this `post` to render the `TurboPost` component.
- Figure out how to access current `postId` in page component needed by the hooks.
- Handle the error and loading state.

> Note: For this task, we will change the SSG (static props/paths) setup done in previous steps to a simpler CSR setup. DPC Turbo does support hydration and can be enabled by following how other addons/routes are setup.
>
> Hint: Do not forget to remove the util file with dummy posts.

#### 4. Commit your changes

### Evaluation

1. To verify the store setup, in the terminal, run the following command:

   ```bash
   yarn dev:next
   ```

   The server should start and you should be able to access the production application at [localhost:3000](http://localhost:3000) in your browser.

   Open the redux-devtools and the `State` panel. The `turboPostsApi` state should be there with a bunch of sub-properties.

2. The `/turbo-posts` route must render a list of posts' titles (30 posts). Clicking a title should redirect to the `/turbo-posts/[postId]` route.

3. The `/turbo-posts/[postId]` route must render the post's title and its body. Should show error for postId=200.
