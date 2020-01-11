# Development Notes
This document contains development notes for next iteration of the SVG Gradient Editor.
## Requirements
Version 2.0 should offer extended set of features such as:
- Ability to edit parent `svg` properties such as `width`, `height`, `viewBox` etc. using both mouse-based and input-based ways
- Ability to put gradients on separate figures (rectangles, ellipses and closed paths)
- Ability to apply different blend modes between those layers
- Ability to add, remove and edit them by drag and drop, not only by clicking on the toolbar
- Ability to save composition's configurations to the local storage and uploaded them from there.
- Ability to download the compositions as a svg code or as a app-specific configuration file (in JSON format)
It should also apply some improvements such as:
- better performance, especially when it comes to manipulating multiple svg nodes and when making color operations
- more clear and easy to use UI
- SVG axes that let the user to measure his artwork (viewBox)
- PWA features so it can be used as a "desktop" app
From the technical point of view, there are following improvements I'd like to add:
- Update previous version's dependencies
- Manage the application's state without redux and redux-thunk, but with Context API instead
- Use hooks API instead of class based approach
- Use @gradient-js/svg library as a chroma.js wrapper for complex gradient generation
- Use conventional commits and semantic release for versioning
- Use GitHub Actions for deployments to GitHub pages
- Add tests in enzyme and jest
## Features
### Gradients on figures
Previous version of SVG Gradient Editor offered only one-figure approach for gradient creation, which didn't enable the user to get interesting effects between differently positioned layers.
#### Layers Tree
|Layer|Description|
|-|-|
|Figure| Figure is a one of the basic SVG (enclosed) shapes like `rect`, `circle`, `ellipse` or a `polygon`|
|Gradient|Gradient is a basic "fill-unit" for the figure. It cannot overflow it.
| Color | Color is a part of the gradient which - together with other colors - creates gradient's specific vibe
#### Filters and Blend Modes
Outside of the tree the user should be able to apply multiple filters and blending modes to achieve interesting effects.
## Usage
### Flow
The flow of creation should be following:
1. Create a figure and modify it
2. Create a gradient and modify it
3. Add colors to a gradient
4. (Optional): apply filters and blend modes
5. (Optional): edit your composition by moving and resizing your shapes and and gradients
## Dependencies
Given following constraints, there might be a few areas where creation (or usage) of external dependencies will be needed.
- **Drawing, resizing and editing in SVG** - check if there are any react libraries that allow to do that. If yes, and if they provide enough functionality, use them, if not, consider a creation of a new one
- **Settings panel creation or layers panel creation** - samve as above

## Design Notes

Drawing canvas should consist of one SVG node containing subnodes built from two kinds of layers - one that doesn't accept any pointer events (Presentational layer), and the other one that does accept them (Editorial Layer). This strategy should be applied from the very top of the SVG element tree.

```html
<svg
  className="svg"
  xmlns="http://www.w3.org/2000/svg"
  width={width}
  height={height}
  viewBox={`${Object.values(viewBox)}`}
>
  <!-- background group, not possible to delete it, but possible to resize -->
  <g className="svg__root">
    <!-- Background layer -->
    <g className="svg__background">
      <g className="pointerEventsNone">
        <rect x={0} y={0} width={width} height={height} fill={backgroundFill} />
      </g>
      <g className="pointerEventsAll">
        <rect x={0} y={0} width={width} height={height} />
      </g>
    </g>
  </g>
</svg>
```