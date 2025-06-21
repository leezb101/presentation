import { html, css } from 'lit'
import { BaseComponent } from './base-component.js'

export class ContentSection extends BaseComponent {
  static properties = {
    sectionId: { type: String, attribute: 'id' },
    needsScroll: { type: Boolean, state: true },
  }

  constructor() {
    super()
    this.needsScroll = false
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
      overflow-y: auto;
      overflow-x: hidden;
      box-sizing: border-box;
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

    /* 当需要滚动时，改变布局方式 */
    :host(.needs-scroll) {
      align-items: flex-start;
      justify-content: flex-start;
    }

    /* 滚动模式下的内容容器 */
    .scroll-container {
      width: 100%;
      min-height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
    }

    /* 居中模式下的内容容器 */
    .center-container {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    /* 自定义滚动条样式 */
    :host::-webkit-scrollbar {
      width: 6px;
    }

    :host::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.1);
      border-radius: 3px;
    }

    :host::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.3);
      border-radius: 3px;
    }

    :host::-webkit-scrollbar-thumb:hover {
      background: rgba(0, 0, 0, 0.5);
    }

    @unocss-placeholder
  `

  firstUpdated() {
    // 检测内容高度
    this.checkContentHeight()
    
    // 监听窗口大小变化
    window.addEventListener('resize', () => this.checkContentHeight())
  }

  updated(changedProperties) {
    super.updated(changedProperties)
    if (changedProperties.has('needsScroll')) {
      this.classList.toggle('needs-scroll', this.needsScroll)
    }
  }

  checkContentHeight() {
    this.safeRequestAnimationFrame(() => {
      const contentElement = this.querySelector('*')
      if (contentElement) {
        const viewportHeight = window.innerHeight
        const containerPadding = 64 // 2rem * 2
        const availableHeight = viewportHeight - containerPadding
        const contentHeight = contentElement.scrollHeight || contentElement.offsetHeight
        
        // 如果内容高度超过可用高度的90%，启用滚动模式
        this.needsScroll = contentHeight > availableHeight * 0.9
      }
    })
  }

  render() {
    return html`
      <div class="${this.needsScroll ? 'scroll-container' : 'center-container'}">
        <slot></slot>
      </div>
    `
  }
}

customElements.define('content-section', ContentSection)
