declare module '*.woff' {
  const content: string;
  export default content;
}
declare module '*.svg' {
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
declare module '*.png' {
  const content: string;
  export default content;
}
