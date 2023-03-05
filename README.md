# Image Crossfade Effect with Next.js Image + Tailwind

This is a React functional component called `ImageCrossFade` that displays an image with a cross-fade effect.

The component takes in three props:

- *imgUrl:* a string representing the URL of the image to be displayed.
- *width:* a number representing the width of the image, default value is 1728.
- *height:* a number representing the height of the image, default value is 864.

The component uses the `useState` hook to manage the state of three variables:

- *fadeIn:* a boolean value indicating whether the fade-in effect should be applied to the image.
- *loaded:* a boolean value indicating whether the image has been loaded.
- *loadedImage:* a string representing the URL of the loaded image.

The component uses the `useEffect` hook to update the state of `loaded` and `fadeIn` when the imgUrl prop changes.

The component uses the [Next.js Image Component](https://nextjs.org/docs/api-reference/next/image) to display the image. The `onLoadingComplete` prop is used to update the `loaded` and `loadedImage` state variables when the image has finished loading.

The component also displays a gradient overlay over the image using a div element with absolute positioning.

Finally, the component uses `React.memo` to optimize performance by memoizing the component and preventing unnecessary re-renders.