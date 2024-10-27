


# Neobrut UI Kit

Neobrut UI Kit is a comprehensive library designed to facilitate the development of modern and minimal user interface components that adhere to the neo-brutalism design style. Neo-brutalism emphasizes bold colors, sharp contrasts, and a sense of rawness, making it ideal for projects that wish to stand out visually. This UI Kit is built using React components and TypeScript, offering developers a highly flexible and modular structure that allows for the rapid and consistent building of projects, all while ensuring maintainability and scalability.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
  - [Button](#button)
  - [Input](#input)
  - [Checkbox](#checkbox)
  - [DataTable](#datatable)
  - [Dialog](#dialog)
  - [Dropdown](#dropdown)
- [Customization](#customization)
- [Style Management](#style-management)
- [Contributing](#contributing)
- [License](#license)

## Installation

Adding Neobrut UI Kit to your project is a straightforward process that can be completed using npm or yarn. With just a few simple commands, you can integrate the UI Kit and begin using the powerful components it provides.

### NPM
To install the Neobrut UI Kit using npm, use the following command:
```sh
npm install neobrut-ui-kit
```

### Yarn
Alternatively, you can use yarn to install the library:
```sh
yarn add neobrut-ui-kit
```

## Usage

Once Neobrut UI Kit is installed, you can start using its components in your project. The components are designed to be easily imported, enabling you to quickly add sophisticated UI elements to your application.

### Example Usage
Below is an example of how you can use various Neobrut UI Kit components in your application.
```jsx
import React from 'react';
import { Button, Input, Checkbox, Dialog, Dropdown } from 'neobrut-ui-kit';

const App = () => (
  <div>
    <Button kind="primary" onClick={() => alert('Button clicked!')}>Primary Button</Button>
    <Input label="Your Name" placeholder="Enter your name..." />
    <Checkbox label="I accept the terms" onChange={(checked) => console.log(checked)} />
  </div>
);

export default App;
```

## Components

Neobrut UI Kit offers a wide range of components, each tailored to deliver both functionality and aesthetics in line with the neo-brutalism style. Below are the key components provided by the kit, along with their properties and usage details.

### Button
The Button component is a fundamental element that is used to initiate specific actions within an application. Neobrut UI Kit provides several types of buttons, including `primary`, `secondary`, `success`, `danger`, and more, each with distinct visual styles.

**Props**:
- `label`: The text displayed on the button, helping users understand its function.
- `kind`: Defines the type of button (`primary`, `neutral`, `success`, `danger`), each offering a unique visual representation.
- `size`: Specifies the size of the button (`small`, `medium`, `large`), making it adaptable to various contexts.
- `onClick`: A callback function that is triggered when the button is clicked, allowing you to define custom behavior.

### Input
The Input component allows users to provide text input in various forms. It supports different types of input fields, including `text`, `password`, and `number`, providing flexibility for different user input scenarios.

**Props**:
- `label`: A label that provides context for the input field, making it clear what information the user should enter.
- `placeholder`: Placeholder text that guides the user before any input is provided.
- `type`: Defines the type of input (`text`, `password`, `number`) to suit different data requirements.
- `onChange`: A function called whenever the input value changes, enabling dynamic handling of user input.

### Checkbox
The Checkbox component is used for selecting or deselecting options. It supports multiple states, including `checked`, `unchecked`, and `indeterminate`, providing a versatile solution for user interaction.

**Props**:
- `label`: Describes the checkbox option, informing the user what they are selecting.
- `checked`: Indicates whether the checkbox is currently selected or not.
- `onChange`: A callback function that is invoked when the state of the checkbox changes, allowing for real-time updates.

### DataTable
The DataTable component is an essential feature for displaying sets of data in a structured table format. It offers customization options for `rows` and `columns`, and supports advanced features like sorting, pagination, and row selection.

**Props**:
- `columns`: Defines the table column headers, describing the type of data displayed.
- `rows`: Provides the data to be rendered in the table, formatted as an array of objects.
- `sortable`: A boolean that determines whether columns can be sorted, giving users the ability to organize data efficiently.

### Dialog
The Dialog component is useful for displaying important information or obtaining user confirmation. It is fully customizable, supporting different sizes, images, overlays, and multiple action buttons.

**Props**:
- `title`: The title of the dialog that provides context about its purpose.
- `content`: The main content or body of the dialog, which can include text or other components.
- `isOpen`: A boolean that indicates whether the dialog is currently open or closed.
- `primaryAction`, `secondaryAction`, `tertiaryAction`: Objects defining the action buttons available in the dialog, including their labels and callback functions.

### Dropdown
The Dropdown component provides a way to offer multiple selectable options to users. It supports different visual styles (`default`, `success`, `danger`) and can include icons to enhance usability.

**Props**:
- `label`: The label for the dropdown button, providing context for what the dropdown contains.
- `items`: An array of items displayed when the dropdown is opened, each item being selectable.
- `kind`: Defines the visual style of the dropdown (`default`, `neutral`, `success`, `danger`), helping align with the application's theme.

## Customization

Neobrut UI Kit components are designed to be easily customizable to match the needs of any project. You can modify the default styles by using your style files, whether through `styled-components`, CSS, or any preferred method. Each component has a `className` prop that allows you to pass custom styles.

```jsx
<Button className="my-custom-button" kind="primary">Custom Button</Button>
```
This approach gives you complete control over the styling of each element, making it easy to adapt the UI Kit to the specific branding and design requirements of your project.

## Style Management

Neobrut UI Kit uses `styled-components` for styling, which provides a robust and flexible solution for managing styles. This approach not only ensures that each component has a consistent look and feel but also makes it easy for developers to extend or modify styles when needed.

The UI Kit's color palette is designed to align with the neo-brutalism aesthetic, featuring bold, contrasting colors that make UI elements stand out.

Color palette:
- **Primary**: #4B59CD – Used for primary buttons and highlights.
- **Success**: #28a745 – Used for positive actions, such as confirmations.
- **Danger**: #dc3545 – Used for negative actions, such as deletions or errors.
- **Neutral**: #1D1D1C – A neutral tone used for text and backgrounds.
- **White**: #FEFEFE – The primary background color, providing contrast to bold UI elements.

## Contributing

Contributions are always welcome! If you would like to contribute to Neobrut UI Kit, follow these steps:

1. **Fork the Repository**: Create a personal copy of the repository by forking it.
2. **Create a Branch**: Make a new branch for your feature or bug fix.
3. **Commit Changes**: Make your changes and commit them with a clear and descriptive message.
4. **Submit a Pull Request**: Once you are happy with your changes, create a Pull Request (PR) to merge your changes into the main repository.

We encourage developers of all skill levels to contribute. Your contributions help us make Neobrut UI Kit even better for everyone!

Thank you in advance to all contributors for helping to improve this project!

## License

This project is licensed under the MIT License, which means you are free to use, modify, and distribute it as needed. For detailed information, see the `LICENSE` file included in the repository.