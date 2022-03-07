declare module '*.scss' {
  const SCSS: { [key: string]: string };
  export default SCSS;
}

declare module '*.svg' {
  const Icon: { new (): React.Component };
  export default Icon;
}
