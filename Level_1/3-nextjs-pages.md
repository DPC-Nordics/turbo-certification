# DPC Turbo Developer Certification - Level 1

[< Back](index.md)

## Task 3: Next.js pages

The task deals specifically with creating couple of pages in NextJS which is rendered at build time (Static site generation).

> DPC Turbo uses React meta-framework "Next.js" for its web-application. Next is capable of creating normal and dynamic pages. They can be rendered at build time (SSG) or at runtime (SSR / Client).

### Concepts

- NextJS pages
- Difference between SSG, SSR, CSR, and ISR
- Rest API

### Reading material

- [NextJS](https://nextjs.org/docs/)
- [NextJS pages](https://nextjs.org/docs/basic-features/pages)
- [NextJS SSG](https://nextjs.org/docs/basic-features/data-fetching/get-static-props)
- [NextJS Link](https://nextjs.org/docs/api-reference/next/link)
- [NextJS dynamic route](https://nextjs.org/docs/basic-features/data-fetching/get-static-paths)
- [Using Typescript with NextJS](https://nextjs.org/docs/basic-features/typescript#static-generation-and-server-side-rendering)

### Steps

#### 1. Create a new `turbo-posts` page/route

- The `turbo-posts` route should be accessible at `http://localhost:3000/turbo-posts` when the app in running in development mode.
- The route should be rendered on build-time (SSG).
- The page should receive a list of posts as props (`ITurboPost[]`, required, refer [references](references.md)).
- The page should contain a Next Head component setting page title to "Turbo Posts".
- The page should render a Heading (h1) - "Turbo Posts".
- The page should render the categories using the `TurboPostsList` component (created in previous task). Each list item should be a link to the `/turbo-posts/[postId]` route (created in next step). Use a sensible empty-message.
- The list of posts will be later fetched from an API but for now, we'll use a dummy list of posts, refer [references](references.md).

#### 2. Create a new `turbo-posts/[postId]` page/route

- The `turbo-posts/[postId]` route should be accessible at `http://localhost:3000/turbo-posts/[postId]` when the app in running in development mode.
  - The page should be rendered on build-time (SSG).
  - The static paths should be created using dummy-post list.
- The page should receive following as props:
  - post: Post data (`ITurboPost`, required, refer [references](references.md))
- The page should contain a Next Head component setting page title to `[Post title]`.
- The page should render a link to `/turbo-posts` route (eg. a back-button)
- The page should render the Post using the `TurboPost` component (created in previous tasks).

#### 3. Commit your changes

### Evaluation

To verify the page, in the terminal, run the following command:

```bash
yarn dev:next
```

- The server should start at [localhost:3000](http://localhost:3000) and the Posts page should be accessible at [posts page](http://localhost:3000/turbo-posts/).
- The Posts page should have the list of posts linking to their respective post page.
- Joke's category page should be accessible at `/turbo-posts/[postId]`. Eg: [Post 1](http://localhost:3000/turbo-posts/1).
- The post page should have a link to `/turbo-posts` route
- The post page should have the post name as a heading, followed by post body.
