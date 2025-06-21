import { html, css } from 'lit'
import { BaseComponent } from './base-component.js'

export class ContentSection extends BaseComponent {
  static properties = {
    sectionId: { type: String, attribute: 'id' },
  }

  static styles = css`
    :host {
      display: none;
      min-height: 100vh;
      padding: 4rem 0;
      transition: opacity 0.5s ease-in-out;
    }

    :host(.active) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      opacity: 1;
    }

    :host(.exiting) {
      opacity: 0;
    }
  `

  render() {
    return html`<slot></slot>`
  }
}

customElements.define('content-section', ContentSection)
