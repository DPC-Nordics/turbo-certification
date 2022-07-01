# DPC Turbo Developer Certification - Level 1

[< Back](README.md)

## Task 4: Redux-Toolkit

The task deals with setting up and using redux-toolkit Slice.

### Concepts

- Redux
- Redux-Toolkit
- Actions and Reducers
- Container vs Presentational components

### Reading material

- [Redux](https://redux.js.org/tutorials/quick-start)
- [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started)
- [RTK SLice](https://redux-toolkit.js.org/api/createSlice)

### Steps

#### 1. Create a `turboPosts` RTK slice

An RTK Slice is central location for managing state for a particular feature or part of the application without interfering with the rest of the application's state.

- The slice should be created in the correct core package.
- The initial state should have a property called `selectedTags`: empty array by default (`string[]`).
- The reducers should be as follows:
  - `toggleSelectedTag`: toggle a tag in the `selectedTags` array. Remove the tag if it exists in array, else push to array. (Payload: `string`)
  - `clearSelectedTags`: clear all tags from the `selectedTags` array.
- Create a `selectTurboPostsSelectedTags` selector function to select the `turboPosts.selectedTags` array from the app state.
- Add this slice (and reducers) to the global Redux store (`/packages/core/store/src/store_config.ts`).

#### 2. Create a container component for the turbo-posts filtered list

The logic should be contained in the container component which is responsible for correctly rendering the Presentational components.

- Create a new container component in the `/apps/dpc-next/src/containers/features/turbo-posts/` directory, called `TurboPostsFilterableList`.
- The component should receive a list of posts as a prop (`ITurboPost[]`, refer [references](references.md)).
- Add `TurboPostsFilter` component (created in previous task):
  - The component should render a list of tags, derived from the `posts` array.
  - The filters should be sorted alphabetically and must be unique.
  - Clicking a chip should toggle the tag in the `turboPosts.selectedTags` array.
  - Clicking on the clear button should clear all tags from the `turboPosts.selectedTags` array.
- Filter the posts with "AND" logic. Only posts with _all_ selected tags should be displayed.
- Add `TurboPostsList` component to render the list of posts (or filtered posts if any tag is selected).
  - Note: This is the same list created in previous task but mapped over a filtered posts list
- Use the container component `TurboPostsFilterableList` on the `/turbo-posts` page to render the smart posts list with filters.

> Hint: use `useAppSelector` and `useAppDispatch` from `@dpc-turbo/store`.

#### 3. Commit your changes

### Evaluation

1. To verify the store setup, in the terminal, run the following command:

   ```bash
   yarn dev:next
   ```

   The server should start and you should be able to access the production application at [localhost:3000](http://localhost:3000) in your browser.

   Open the redux-devtools and the `State` panel. The `turboPosts` state should be there with an empty `selectedTags` array.

2. The `/turbo-posts` route must render a list of posts and filter. Clicking a filter (tag) should filter out the posts that do not have the selected-tag in its list of tags. Clicking on a post-title (list item) should redirect to the `/turbo-posts/[postId]` route as before.
