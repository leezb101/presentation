import { html, css } from 'lit'
import { BaseComponent } from './base-component.js'

export class AppHeader extends BaseComponent {
  static properties = {
    currentSection: { type: String }
  }

  constructor() {
    super()
    this.currentSection = 'hero'
  }

  static styles = css`
    :host {
      display: block;
    }
    @unocss-placeholder
  `

  render() {
    return html`
      <header class="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <nav class="container mx-auto px-6 py-3 flex justify-between items-center">
          <div class="text-xl font-bold text-blue-700">智慧水务 · 数字基石</div>
          <div
            id="desktop-nav"
            class="hidden md:flex space-x-6 text-sm font-medium text-gray-600"
          >
            ${this.renderNavLinks()}
          </div>
          <div class="md:hidden">
            <button
              id="mobile-menu-button"
              class="text-gray-600 focus:outline-none"
              @click=${this.toggleMobileMenu}
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </nav>
        <div id="mobile-menu" class="hidden md:hidden px-6 pb-4">
          ${this.renderMobileNavLinks()}
        </div>
      </header>
    `
  }

  renderNavLinks() {
    const navItems = [
      { href: '#hero', text: '开篇' },
      { href: '#problem', text: '现状与痛点' },
      { href: '#preliminary-work', text: '前期工作' },
      { href: '#solution', text: '解决方案' },
      { href: '#process', text: '系统如何运作' },
      { href: '#value', text: '项目价值' },
      { href: '#roadmap', text: '实施路线图' }
    ]

    return navItems.map(item => html`
      <a 
        href="${item.href}" 
        class="nav-link ${this.currentSection === item.href.substring(1) ? 'active' : ''}"
        @click=${this.handleNavClick}
      >
        ${item.text}
      </a>
    `)
  }

  renderMobileNavLinks() {
    const navItems = [
      { href: '#hero', text: '开篇' },
      { href: '#problem', text: '现状与痛点' },
      { href: '#preliminary-work', text: '前期工作' },
      { href: '#solution', text: '解决方案' },
      { href: '#process', text: '系统如何运作' },
      { href: '#value', text: '项目价值' },
      { href: '#roadmap', text: '实施路线图' }
    ]

    return navItems.map(item => html`
      <a 
        href="${item.href}" 
        class="block py-2 nav-link ${this.currentSection === item.href.substring(1) ? 'active' : ''}"
        @click=${this.handleMobileNavClick}
      >
        ${item.text}
      </a>
    `)
  }

  handleNavClick(e) {
    e.preventDefault()
    const targetId = e.target.getAttribute('href').substring(1)
    this.dispatchEvent(new CustomEvent('section-change', {
      detail: { sectionId: targetId },
      bubbles: true,
      composed: true
    }))
  }

  handleMobileNavClick(e) {
    e.preventDefault()
    const targetId = e.target.getAttribute('href').substring(1)
    this.closeMobileMenu()
    this.dispatchEvent(new CustomEvent('section-change', {
      detail: { sectionId: targetId },
      bubbles: true,
      composed: true
    }))
  }

  toggleMobileMenu() {
    const mobileMenu = this.shadowRoot.querySelector('#mobile-menu')
    mobileMenu.classList.toggle('hidden')
  }

  closeMobileMenu() {
    const mobileMenu = this.shadowRoot.querySelector('#mobile-menu')
    mobileMenu.classList.add('hidden')
  }

  updateCurrentSection(sectionId) {
    this.currentSection = sectionId
  }
}

customElements.define('app-header', AppHeader)