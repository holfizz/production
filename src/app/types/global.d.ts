declare module '*.scss' {
  const content: Record<string, string>
  export default content
}
declare module 'src/assets/svgr/*.svg' {
  import type React from 'react'
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>
  export default SVG
}
declare module '*.jpeg';
declare module '*.jpg';
declare module '*.png';
declare const __IS_DEV__: boolean
declare const __API__: string
