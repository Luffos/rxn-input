declare module '*.module.css' {
  const styles: {[className: string]: string};
  export = styles;
}

declare module '*.svg' {
  const svg: any;
  export = svg;
}

declare module '*.png' {
  const png: any;
  export = png;
}
