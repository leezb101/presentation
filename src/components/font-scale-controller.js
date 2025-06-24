import { html, css } from 'lit'
import { BaseComponent } from './base-component.js'

export class FontScaleController extends BaseComponent {
  static properties = {
    scale: { type: Number },
    isVisible: { type: Boolean }
  }

  constructor() {
    super()
    this.scale = this.loadScale()
    this.isVisible = false
    this.applyScale()
  }

  static styles = css`
    :host {
      display: block;
      position: fixed;
      top: 50%;
      right: 20px;
      transform: translateY(-50%);
      z-index: 1000;
      transition: transform 0.3s ease;
    }

    .scale-controller {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      border-radius: 12px;
      padding: 16px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      min-width: 200px;
      max-width: 280px;
      transform: translateX(100%);
      transition: transform 0.3s ease;
      /* 确保控制器自身不受字体缩放影响 */
      font-size: 14px !important;
    }
    
    .scale-controller * {
      font-size: inherit !important;
    }

    .scale-controller.visible {
      transform: translateX(0);
    }

    .toggle-button {
      position: absolute;
      left: -40px;
      top: 50%;
      transform: translateY(-50%);
      width: 40px;
      height: 40px;
      background: rgba(37, 99, 235, 0.9);
      border: none;
      border-radius: 8px 0 0 8px;
      color: white;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      transition: background-color 0.2s ease;
    }

    .toggle-button:hover {
      background: rgba(37, 99, 235, 1);
    }

    .controller-header {
      display: flex;
      align-items: center;
      margin-bottom: 12px;
      font-size: 14px;
      font-weight: 600;
      color: #374151;
    }

    .scale-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
      font-size: 12px;
      color: #6b7280;
    }

    .slider-container {
      position: relative;
      margin-bottom: 16px;
    }

    .slider {
      width: 100%;
      height: 4px;
      background: #e5e7eb;
      border-radius: 2px;
      outline: none;
      opacity: 0.8;
      transition: opacity 0.2s;
      -webkit-appearance: none;
      appearance: none;
    }

    .slider:hover {
      opacity: 1;
    }

    .slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 16px;
      height: 16px;
      background: #2563eb;
      border-radius: 50%;
      cursor: pointer;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      transition: all 0.2s ease;
    }

    .slider::-webkit-slider-thumb:hover {
      transform: scale(1.2);
      box-shadow: 0 4px 8px rgba(37, 99, 235, 0.3);
    }

    .slider::-moz-range-thumb {
      width: 16px;
      height: 16px;
      background: #2563eb;
      border-radius: 50%;
      cursor: pointer;
      border: none;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    .quick-buttons {
      display: flex;
      gap: 8px;
      margin-bottom: 12px;
    }

    .quick-btn {
      flex: 1;
      padding: 6px 8px;
      background: #f3f4f6;
      border: 1px solid #d1d5db;
      border-radius: 6px;
      font-size: 11px;
      cursor: pointer;
      transition: all 0.2s ease;
      text-align: center;
    }

    .quick-btn:hover {
      background: #e5e7eb;
    }

    .quick-btn.active {
      background: #2563eb;
      color: white;
      border-color: #2563eb;
    }

    .reset-btn {
      width: 100%;
      padding: 8px;
      background: #ef4444;
      color: white;
      border: none;
      border-radius: 6px;
      font-size: 12px;
      cursor: pointer;
      transition: background-color 0.2s ease;
    }

    .reset-btn:hover {
      background: #dc2626;
    }

    .scale-value {
      font-weight: 600;
      color: #2563eb;
    }

    @unocss-placeholder;
  `

  render() {
    return html`
      <div class="scale-controller ${this.isVisible ? 'visible' : ''}">
        <button class="toggle-button" @click=${this.toggleVisibility}>
          <iconify-icon icon="mdi:format-font-size-increase"></iconify-icon>
        </button>
        
        <div class="controller-header">
          <iconify-icon icon="mdi:format-size" style="margin-right: 6px;"></iconify-icon>
          字体缩放控制
        </div>

        <div class="scale-info">
          <span>当前缩放:</span>
          <span class="scale-value">${Math.round(this.scale * 100)}%</span>
        </div>
        
        <div class="preview-text" style="
          margin-bottom: 12px;
          padding: 8px;
          background: #f8f9fa;
          border-radius: 6px;
          border: 1px solid #e9ecef;
          font-size: calc(14px * ${this.scale});
          line-height: 1.4;
          color: #495057;
          text-align: center;
        ">
          预览文字效果
        </div>

        <div class="slider-container">
          <input
            type="range"
            class="slider"
            min="0.5"
            max="2.5"
            step="0.1"
            .value=${this.scale}
            @input=${this.handleSliderChange}
          />
        </div>

        <div class="quick-buttons">
          <button class="quick-btn ${this.scale === 0.8 ? 'active' : ''}" @click=${() => this.setScale(0.8)}>小屏</button>
          <button class="quick-btn ${this.scale === 1.0 ? 'active' : ''}" @click=${() => this.setScale(1.0)}>标准</button>
          <button class="quick-btn ${this.scale === 1.5 ? 'active' : ''}" @click=${() => this.setScale(1.5)}>投屏</button>
          <button class="quick-btn ${this.scale === 2.0 ? 'active' : ''}" @click=${() => this.setScale(2.0)}>大屏</button>
        </div>

        <button class="reset-btn" @click=${this.resetScale}>
          <iconify-icon icon="mdi:restore" style="margin-right: 4px;"></iconify-icon>
          重置
        </button>
      </div>
    `
  }

  toggleVisibility() {
    this.isVisible = !this.isVisible
  }

  handleSliderChange(e) {
    const newScale = parseFloat(e.target.value)
    this.setScale(newScale)
  }

  setScale(scale) {
    this.scale = scale
    this.applyScale()
    this.saveScale()
  }

  resetScale() {
    this.setScale(1.0)
  }

  applyScale() {
    // 设置CSS自定义属性到根元素
    document.documentElement.style.setProperty('--font-scale', this.scale.toString())
    
    // 触发全局事件，让其他组件知道字体缩放发生了变化
    document.dispatchEvent(new CustomEvent('font-scale-changed', {
      detail: { scale: this.scale }
    }))
  }

  saveScale() {
    try {
      localStorage.setItem('presentation-font-scale', this.scale.toString())
    } catch (e) {
      console.warn('Failed to save font scale to localStorage:', e)
    }
  }

  loadScale() {
    try {
      const saved = localStorage.getItem('presentation-font-scale')
      return saved ? parseFloat(saved) : 1.0
    } catch (e) {
      console.warn('Failed to load font scale from localStorage:', e)
      return 1.0
    }
  }

  connectedCallback() {
    super.connectedCallback()
    // 监听键盘快捷键
    this.handleKeydown = (e) => {
      // Ctrl/Cmd + Plus 放大
      if ((e.ctrlKey || e.metaKey) && (e.key === '=' || e.key === '+')) {
        e.preventDefault()
        this.setScale(Math.min(2.5, this.scale + 0.1))
      }
      // Ctrl/Cmd + Minus 缩小  
      if ((e.ctrlKey || e.metaKey) && e.key === '-') {
        e.preventDefault()
        this.setScale(Math.max(0.5, this.scale - 0.1))
      }
      // Ctrl/Cmd + 0 重置
      if ((e.ctrlKey || e.metaKey) && e.key === '0') {
        e.preventDefault()
        this.resetScale()
      }
    }
    document.addEventListener('keydown', this.handleKeydown)
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    if (this.handleKeydown) {
      document.removeEventListener('keydown', this.handleKeydown)
    }
  }
}

customElements.define('font-scale-controller', FontScaleController)