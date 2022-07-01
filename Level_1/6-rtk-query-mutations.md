# DPC Turbo Developer Certification - Level 1

[< Back](README.md)

## Task 6: RTK Query - Mutations

The task deals with setting up and using RTK Query Mutations. Mutations are used to send data updates to the server and apply the changes to the local cache. Mutations can also invalidate cached data and force re-fetches.

### Concepts

- Queries and Mutation

### Reading material

- [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)
- [with TypeScript](https://redux-toolkit.js.org/rtk-query/usage-with-typescript)
- [Mutations](https://redux-toolkit.js.org/rtk-query/usage/mutations)

### Steps

In this task, the `turboPostsApiSlice` will be extended.

#### 1. Inject `addTurboPost` endpoint

- Add the following endpoint to `extendedTurboPostsApiSlice`:
  - `addTurboPosts`: Add posts to API service (path: `posts/add`, method: `POST`, body: `AddTurboPostRequestData` refer [references](references.md)). Include a transformer function which will transform the data to the shape of the `ITurboPost`.
- Export the generated hooks from `extendedTurboPostsApiSlice`: `useAddTurboPostMutation`

> Note: [Docs for the API service used](https://dummyjson.com/docs/posts).
>
> Since this is a POST request, there are 2 things that need to be done:
>
> - Add following headers to the request: `'Content-Type': 'application/json'`
> - Add the body of the request: `AddTurboPostRequestData` with an `userId: 1`. The API needs an user Id but we don't receive one from the add-post-form (out-of-scope).

#### 2. Create a `TurboPostForm` container for adding post

Containers are good for isolating logic and keeping the UI clean.

- Create a new container `TurboPostForm` which will be used to add posts.
- It should receive following props:
  - `isLoading`: If form is in loading state (`boolean`, optional)
  - `error`: If there is error with submission (`string`, optional)
  - `onSubmit`: If there is error with submission (`Function`, required). The function must have following parameters:
    - `data`: The data that is received from the form: title (`string`), body (`string`), tags (`string[]`)
- It should render a form with the following fields:
  - `title input`: The title of the post (`string`, required)
  - `tags input`: The tags of the post (`string`, comma-separated, optional). Later transformed to `string[]`.
  - `body textarea`: The body of the post (`string`, required)
  - `submit button`: A submit button that calls `onSubmit` with the form data. The button is disabled when the form is loading.
  - `error message`: If there is error with submission. Hide if no error.
- The form should remove the error message when the user submits the form again.
- The form should clear all inputs if the form is submitted successfully.

#### 3. Create `add` route

- Create a new `/turbo-posts/add` route.
- It should be accessible from `/turbo-posts` route through a link.
- Import `useAddTurboPostMutation` from `@dpc-turbo/api` package and use it to get a callback for adding post.
- Render the following on page:
  - A link to `/turbo-posts` route
  - A heading (h1) with the text `Add Turbo Post` (with matching page title)
  - A `TurboPostForm` container which shows the form and calls the callback when the form is submitted.
- When the form is successfully submitted and a new post is created/returned, show the new post is an alert or popup. Closing the alert/popup should keep the user on the same page with an empty form.

> Note: Normally, after a successful submission the user should be redirected to the `/turbo-posts/[newPost.id]` route, but since the API is a dummy, we will not do that.

#### 4. Commit your changes

### Evaluation

1. To verify the store setup, in the terminal, run the following command:

   ```bash
   yarn dev:next
   ```

   The server should start and you should be able to access the production application at [localhost:3000](http://localhost:3000) in your browser.

2. The `/turbo-posts` route must render a link to Add page and clicking a title should redirect to the `/turbo-posts/add` route.

3. The `/turbo-posts/add` route must render a back link, a title, and a form.

4. Submitting the form should show the success result in an alert/popup. If an error occurs, it should show the error inline with the form.

Bonus: Make sure the form is accessible and usable with just keyboard.
