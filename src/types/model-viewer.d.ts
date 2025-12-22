declare namespace JSX {
  interface IntrinsicElements {
    'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      src?: string; poster?: string; ar?: boolean; autoplay?: boolean;
      'auto-rotate'?: boolean; 'camera-controls'?: boolean;
      exposure?: string | number; 'environment-image'?: string; 'shadow-intensity'?: string | number;
    };
  }
}
