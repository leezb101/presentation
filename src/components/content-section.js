import { html, css } from 'lit'
import { BaseComponent } from './base-component.js'

export class ContentSection extends BaseComponent {
  static properties = {
    sectionId: { type: String, attribute: 'id' },
  }

  static styles = css`
    :host {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      padding: 2rem 1rem;
      opacity: 0;
      visibility: hidden;
      transform: translateX(30px);
      transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out, visibility 0s 0.5s;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    :host(.active) {
      opacity: 1;
      visibility: visible;
      transform: translateX(0);
      transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
      z-index: 10;
    }

    :host(.exiting) {
      transform: translateX(-30px);
      opacity: 0;
    }
    @unocss-placeholder
  `

  render() {
    return html`<slot></slot>`
  }
}

customElements.define('content-section', ContentSection)
