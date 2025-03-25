# Using Rive

Highly complex animations are implemented using [Rive](https://rive.app), a high-performance alternative to libraries like Lottie. This repo uses the [React WebGL2 renderer](https://rive.app/docs/runtimes/react/react), the only web renderer (as of this writing) that uses Rive's custom renderer (compared to HTML5 canvas or Skia). This enables us to use cutting-edge features such as vector feathering.

There is an intuitive [Rive.tsx](../src/components//Rive.tsx) component for you to use to make things easier.
