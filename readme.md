# Formative Solutions - Coloirs

A collection of CSS-in-JS styling utilities used across the Formative Solutions ecosystem.

### [Find @formativesolutions/styles on NPM.](https://www.npmjs.com/package/@formativesolutions/styles)

## Table of Contents

 - [Installation](#installation)
 - [Basic Usage](#basic-usage)
 - [Documentation](#documentation)
 - [License](#license)

## Installation

Install from NPM with

```
$ npm install --save @formativesolutions/styles
```

## Basic Usage

### `flexContainer` Mixin

The `flexContainer` CSS-in-JS mixin in used to quickly and easily create
flexboxes (typically within [Emotion](https://emotion.sh/)-style style
definitions) and comes with a number of fully-typed configuration options:

```ts
const flexboxStyles: SerializedStyles = css({
    ...flexContainer({
        direction: "row",
        bothAxis: "space-between",
    }),
    // other random styles for your flexbox container:
    width: "70%",
    backgroundColor: "orange",
});
```

The configuration options for this mixin are as follows _(note that these are
not technically the exact types used to define the configuration options, but
rather a simplified version of the real thing.)_:

```ts
type FlexContainerConfiguration = {
    direction?: "row" | "row-reverse" | "column" | "column-reverse",
    wrap?: boolean,
    mainAxis?: FlexAlignmentOption,
    crossAxis?: FlexAlignmentOption,
    bothAxis?: FlexAlignmentOptions,
};
type FlexAlignmentOptions = "start" | "center" | "end" | "stretch" | "space-around" | "space-between" | "space-evenly";
```

As you may have noticed, each of these fields are optional. If not provided,
these are the default values for each field:

```ts
const defaults: FlexContainerConfiguration = {
    direction: "column",
    wrap: false,
    mainAxis: "center",
    crossAxis: "center",
    bothAxis: "center",
};
```

Because of these default values, the `flexContainer` mixin can be used to very
quickly and easily create a container that centers its content!

```ts
const flexboxStyles: SerializedStyles = css({
    ...flexContainer(),
});
```

### Color Mapping

The color mapping functions and types from this package allow you to automate
and typecheck the process of maintaining named colors throughout your code - all
while using CSS variables!

First, I typically create a `colors.ts` file in an appropriate place in my
codebase, and populate it with the following template:

```ts
export type Color =
    | "FOREGROUND"
    | "BACKGROUND"
    | "BADASS";

export const RAW_COLORS: ColorMap<Color> = {
    FOREGROUND: "#000",
    BACKGROUND: "#FFF",
    BADASS: "#BADA55",
};

export const COLORS: ColorMap<Color> = createColorToCSSVariableNameMap(RAW_COLORS);
```

And then the following code can be put wherever you store your global style
definitions (or wherever you want the above styles scoped to):

```ts
const COLOR_VARIABLE_DEFINITIONS: Record<string, string> =
    generateColorDefinitionsCSSObject(RAW_COLORS);

const styles: SerializedStyles = css({
    ":root": {
        ...COLOR_VARIABLE_DEFINITIONS,
    },
});
```

Tada! Now, you can use the following style of accessing your colors wherever you
like in your codebase!

```ts
import { COLORS } from "./wherever/you/put/the/COLORS/constant.ts";

const myStyles: SerializedStyles = css({
    borderColor: COLORS.FOREGROUND, // => border-color: var(--foreground)
    backgroundColor: COLORS.BADASS, // => background-colors: var(--badass)
    color: COLORS.BACKGROUND, // => color: var(--background)
});
```

## License

@formativesolutions/styles is made available under the GNU General Public License v3.

Copyright (C) 2022 Formative Solutions
