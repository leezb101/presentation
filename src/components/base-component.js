import { LitElement, html, css } from 'lit'

export class BaseComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-size: calc(1rem * var(--font-scale, 1));
    }
    
    /* 字体缩放相关样式 */
    h1 { 
      font-size: calc(2.5rem * var(--font-scale, 1)); 
      line-height: calc(1.2 * var(--font-scale, 1));
    }
    h2 { 
      font-size: calc(2rem * var(--font-scale, 1)); 
      line-height: calc(1.3 * var(--font-scale, 1));
    }
    h3 { 
      font-size: calc(1.75rem * var(--font-scale, 1)); 
      line-height: calc(1.4 * var(--font-scale, 1));
    }
    h4 { 
      font-size: calc(1.5rem * var(--font-scale, 1)); 
      line-height: calc(1.4 * var(--font-scale, 1));
    }
    h5 { 
      font-size: calc(1.25rem * var(--font-scale, 1)); 
      line-height: calc(1.5 * var(--font-scale, 1));
    }
    h6 { 
      font-size: calc(1.125rem * var(--font-scale, 1)); 
      line-height: calc(1.5 * var(--font-scale, 1));
    }
    
    .text-xs { font-size: calc(0.75rem * var(--font-scale, 1)); }
    .text-sm { font-size: calc(0.875rem * var(--font-scale, 1)); }
    .text-base { font-size: calc(1rem * var(--font-scale, 1)); }
    .text-lg { font-size: calc(1.125rem * var(--font-scale, 1)); }
    .text-xl { font-size: calc(1.25rem * var(--font-scale, 1)); }
    .text-2xl { font-size: calc(1.5rem * var(--font-scale, 1)); }
    .text-3xl { font-size: calc(1.875rem * var(--font-scale, 1)); }
    .text-4xl { font-size: calc(2.25rem * var(--font-scale, 1)); }
    .text-5xl { font-size: calc(3rem * var(--font-scale, 1)); }
    .text-6xl { font-size: calc(3.75rem * var(--font-scale, 1)); }
    .text-7xl { font-size: calc(4.5rem * var(--font-scale, 1)); }
    .text-8xl { font-size: calc(6rem * var(--font-scale, 1)); }
    .text-9xl { font-size: calc(8rem * var(--font-scale, 1)); }
    
    @unocss-placeholder
  `

  constructor() {
    super()
    this.isAnimating = false
  }


  safeSetTimeout(callback, delay) {
    return setTimeout(() => {
      if (this.isConnected) {
        callback()
      }
    }, delay)
  }

  safeRequestAnimationFrame(callback) {
    return requestAnimationFrame(() => {
      if (this.isConnected) {
        callback()
      }
    })
  }
}
