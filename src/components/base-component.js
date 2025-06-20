import { LitElement, html, css } from 'lit'

export class BaseComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
  `

  constructor() {
    super()
    this.isAnimating = false
  }

  createRenderRoot() {
    return this
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
