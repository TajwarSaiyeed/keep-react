---
title: 'Keep React V1.5.0'
date: 'August 8, 2024'
description: ''
author: Md Ariful Islam
slug: keep-react-v1.5.0
keyFeatures:
  - 'Framer Motion Added'
  - 'Remove keep presets'
  - 'cn function & asChild'
  - 'Alert Structure update'
  - 'Avatar structure update'
  - 'Introduce Some Radix UI'
  - 'And more...'
---

## Release Notes

Welcome to the latest release of Keep React! This version brings numerous improvements and updates to our components while preserving the familiar UI look and feel.

## Animation

We are excited to announce that we are now using the highly popular animation framework, `Framer Motion`, in our components such as Tabs, Modal, and Notification. This will enhance the user experience with smooth and engaging animations.

## Features

- Keep Presets Removed: We have streamlined our package by removing Keep Presets.
- Import cn() Function: You can now import the cn() function directly from keep-react for better convenience.
- Customizable Colors Theme: You can now customize the color themes according to your project requirements.
- Avatar Structure Update: The Avatar component structure has been updated for better performance and flexibility.
- Checkbox, Switch, Slider: These components now utilize @radix-ui, ensuring better accessibility and usability.
- asChild Prop Available: The asChild prop is now available, allowing greater control over component rendering.
- KeepPortal: You can use KeepPortal to create your own Portal easily.

## Installation Process

We have simplified the integration process. You can now import `keepTheme` from `keep-react/keepTheme` to achieve the same functionality. For more details, please check out the installation docs [`here`](docs/getting-started/introduction).

```js
import { keepTheme } from 'keep-react/keepTheme'

const config = {
  content: ['./components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {},
}

export default keepTheme(config)
```

## Radix UI Components Integration

We have integrated several components with Radix UI for enhanced functionality and accessibility. Here is the list of components now using Radix UI:

- [`Checkbox`](/docs/components/checkbox)
- [`Slider`](/docs/components/slider)
- [`Switch`](/docs/components/switch)

## Updated Component Styles

We have updated the styles for some of our components to improve their appearance and usability:

- [`Alert`](/docs/components/alert)
- [`Badge`](/docs/components/badge)

## Removal of Extra div Elements

To optimize our components, we have removed extra div elements from the following components:

- [`Modal`](/docs/components/modal)
- [`Notification`](/docs/components/notification)
- [`Drawer`](/docs/components/drawer)

## Structural Updates to Components

We have made structural updates to several components for better performance and flexibility:

- [`Avatar`](/docs/components/avatar)
- [`Number Input`](/docs/components/numberInput)
- [`Steps`](/docs/components/steps)
- [`Tabs`](/docs/components/tabs)

## Contributors

This release was made possible by the hard work and dedication of our contributors. Special thanks to:

- [Arifulislam5577](https://github.com/Arifulislam5577)

These updates aim to improve your development experience and the performance of your applications. For detailed documentation and examples, please visit our official [`documentation`](docs/getting-started/introduction). Thank you for using Keep React!
