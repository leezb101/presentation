import { LitElement, html, css } from 'lit'

export class BaseComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
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
