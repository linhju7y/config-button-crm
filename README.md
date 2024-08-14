## Components Overview

### `UserConfigButton.vue`

The `UserConfigButton` component is a reusable button component that can be configured with different titles and configuration items. It also supports custom content through slots.

#### Props

- `title`: The title of the button.
- `configItems`: An array of configuration items to be displayed.
- `page`: The page identifier for the configuration.

#### Slots

- `custom_config`: A slot for custom configuration content.

## Composables Overview

### `useUserConfigs.ts`

The `useUserConfigs` composable provides methods to manage user configurations stored in `localStorage`.

#### Methods

- `handleUpdateConfig(page: string, value: string)`: Updates the configuration for a given page. If the value is not present, it adds it; if it is present, it removes it.
- `getConfigs()`: Retrieves all configurations from `localStorage`.
- `isConfigActive(page: string, value: string)`: Checks if a given value is active for a specific page.

## `App.vue`

I demonstrate how to use the `UserConfigButton.vue` component to manage user configurations within the `App.vue` component.
