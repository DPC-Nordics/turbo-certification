# DPC Turbo Developer Certification - Level 1

[< Back](index.md)

## Task 2: UI components

### Concepts

- Basics of Tailwind CSS
- Basics of Storybook
- Basics of React and Typescript

### Reading material

- [ReactJS](https://reactjs.org/docs/getting-started.html)
- [TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [Figma Inspect](https://help.figma.com/hc/en-us/articles/360055203533-Use-the-Inspect-panel)
- [Tailwind CSS](https://tailwindcss.com/docs/)
- [Storybook](https://storybook.js.org/docs/)

### Steps

#### 1. Add `accent` color to Tailwind CSS

Tailwind is a powerful powerful CSS framework that helps you to create a better looking UI. It can be configured to use a custom color scheme.

- Add a new design-token with name `accent` to the Tailwind Config.
- The color value of the design-token should be [tailwind's `purple-500`](https://tailwindcss.com/docs/customizing-colors).

Hint: Design tokens are defined in `@dpc-turbo/web-ui` package.

#### 2. Create `Chip` component

Create a presentational (stateless) component for web - `Chip`. [Chips](https://m3.material.io/components/chips/guidelines#8d453d50-8d8e-43aa-9ae3-87ed134d2e64) are used as filters.

> Note: The component must be created using React and Typescript.

- Inspect the design for `Chip` component from [DPC Turbo Figma file](https://www.figma.com/file/MGf9JTSvd57OfPLM6X6XoP/DPC-Turbo-Certification?node-id=9%3A4).
- Create a new component in `ui/web/src/common/` directory called `Chip` and use the design from Figma to style it. The component should accept at least following props (aka `IChipProps`):
  - `children`: React node(s) or element(s) which will be rendered inside the tag. (required)
  - `disabled`: If chip is disabled. (boolean, optional)
  - `selected`: If chip is selected. (boolean, optional). `accent` design-token should be used when chip is selected.
  - `onClick`: Callback function that will be called when chip is clicked. (function, optional)
  - other optional props can be added like `id`, `className`, etc. but not in scope of this task.
- Create StoryBook story/stories for `Chip` component showcasing the different states.

> Hint: Rendering Chip as a button or a checkbox instead of a div will make it more accessible.

#### 3. Create `TurboPostsFilter` UI component

Following the concepts of Atomic design, some components can be created using a combination of other components. In this step, we will create a `TurboPostsFilter` component that will be composed of the Chip and Button component.

Create a new component in `ui/web/src/features/turbo-posts/` directory called `TurboPostsFilter` and use the design from Figma to style it. The component must use multiple components like Button, Chip, etc to create the UI.

- Inspect the design for `TurboPostsFilter` component from [DPC Turbo Figma file](https://www.figma.com/file/MGf9JTSvd57OfPLM6X6XoP/DPC-Turbo-Certification?node-id=9%3A78).
- The component should accept at least following props (aka `ITurboPostsFilterProps`):
  - `filters`: List of filters rendered with chips (`IChipProps[]`, required)
  - `onClear`: Callback function that will be called when clear button is clicked. If prop is missing, do not render the clear button (function, optional)
  - other optional props can be added like `id`, `className`, etc. but not in scope of this task.
- Create StoryBook story/stories for `TurboPostsFilter` component showcasing the different states.

#### 4. Create `TurboPostsList` UI component

Create a new component in `ui/web/src/features/turbo-posts/` directory called `TurboPostsList` (there is no design for the List, you can be creative here but do not need to be).

- The component should be rendered a simple unordered list.
- The component accept the following props (aka `ITurboPostsListProps`):
  - `items`: It should contain a list of values that will be rendered. (aka `ITurboPostsListItem[]`, required)
    - It should contain `id` prop for each item. (`string`, required)
    - It should contain `children` prop for each item. (`React.ReactNode`, required)
  - `emptyMessage`: Message that will be rendered when the list is empty. (string, required)
  - other optional props can be added like `id`, `className`, etc. but not in scope of this task.
- Create StoryBook story/stories for `TurboPostsList` component.

#### 5. Create `TurboPost` UI component

Create a new component in `ui/web/src/features/turbo-posts/` directory called `TurboPost` (there is no design for the List, you can be creative here but do not need to be).

- The component should be rendered as a title and body.
- The component accept the following props (aka `ITurboPostProps`):
  - `title`: Title of post. (`string`, required)
  - `body`: Body of the post. (string, required)
  - other optional props can be added like `id`, `className`, etc. but not in scope of this task.
- Create StoryBook story/stories for `TurboPost` component.

#### 6. Commit your changes

### Evaluation

1. To verify the tailwind setup and custom access token, use the Tailwind VS Code extension to autocomplete the accent color-token in the `className` of an element.

2. To verify the components, in the terminal, run the following command:

   ```bash
   yarn dev:storybook
   ```

   The storybook should be accessible at [localhost:6006](http://localhost:6006) in your browser. The Storybook should show the different variants of the `Chip`, `TurboPostsFilter`, `TurboPostsList`, and `TurboPost` component.
