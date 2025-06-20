import { html } from 'lit'
import { BaseComponent } from './base-component.js'
import { gsap } from 'gsap'

export class CloudArchitectureComponent extends BaseComponent {
  static properties = {
    activeClient: { type: String },
  }

  constructor() {
    super()
    this.activeClient = null
  }

  static styles = `
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }
  `

  firstUpdated() {
    this.initAnimations()
    this.startAutoRotation()
  }

  initAnimations() {
    // 云服务器脉搏动画
    const cloudContainer = this.querySelector('.cloud-container')
    if (cloudContainer) {
      gsap.to(cloudContainer, {
        scale: 1.05,
        duration: 2,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1,
      })
    }

    // 客户端卡片渐入动画
    const clientItems = this.querySelectorAll('.client-card')
    clientItems.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power2.out',
        }
      )
    })

    // 连接线虚线动画
    this.animateConnectionLines()
  }

  animateConnectionLines() {
    const lines = this.querySelectorAll('.connection-path')
    lines.forEach((line) => {
      gsap.to(line, {
        strokeDashoffset: -24,
        duration: 4,
        ease: 'none',
        repeat: -1,
      })
    })
  }

  animateActiveConnection(clientType) {
    // 停止所有现有动画
    const allLines = this.querySelectorAll('.connection-path')
    allLines.forEach((line) => {
      gsap.killTweensOf(line)
      line.style.strokeWidth = '2'
      line.style.opacity = '0.6'
      gsap.to(line, {
        strokeDashoffset: -24,
        duration: 4,
        ease: 'none',
        repeat: -1,
      })
    })

    // 激活特定连接线
    const activeLine = this.querySelector(
      `.connection-${clientType}`
    )
    if (activeLine) {
      activeLine.style.strokeWidth = '3'
      activeLine.style.opacity = '1'
      gsap.to(activeLine, {
        strokeDashoffset: -12,
        duration: 2,
        ease: 'none',
        repeat: -1,
      })
    }

    // 数据粒子动画
    this.animateDataParticles(clientType)
  }

  animateDataParticles(clientType) {
    const particles = this.querySelectorAll('.data-particle')
    particles.forEach((particle) => {
      gsap.set(particle, { opacity: 1 })
      gsap.to(particle, {
        scale: 1.3,
        duration: 0.75,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1,
      })
    })
  }

  startAutoRotation() {
    const clients = ['web', 'mobile', 'wechat']
    let currentIndex = 0

    setInterval(() => {
      this.activeClient =
        this.activeClient === clients[currentIndex]
          ? null
          : clients[currentIndex]
      currentIndex = (currentIndex + 1) % clients.length
      this.requestUpdate()
    }, 2000)
  }

  handleClientHover(clientType) {
    this.activeClient = clientType
    this.animateActiveConnection(clientType)
    this.requestUpdate()
  }

  handleClientLeave() {
    this.activeClient = null
    // 重置所有连接线动画
    this.animateConnectionLines()
    // 隐藏数据粒子
    const particles = this.querySelectorAll('.data-particle')
    particles.forEach((particle) => {
      gsap.to(particle, { opacity: 0, duration: 0.3 })
    })
    this.requestUpdate()
  }

  render() {
    return html`
      <div
        class="relative w-[1280px] h-[600px] bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 rounded-3xl p-8 overflow-hidden"
      >
        <!-- 背景装饰 -->
        <div
          class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)] pointer-events-none"
        ></div>
        <div
          class="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.1),transparent_50%)] pointer-events-none"
        ></div>

        <!-- 提示文字 -->
        <div
          class="absolute top-4 right-6 text-sm text-slate-600 font-medium opacity-80"
        >
          <iconify-icon icon="mdi:cursor-pointer" class="mr-1"></iconify-icon>
          点击查看连接
        </div>

        <!-- 中央云服务器 -->
        <div
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-64"
        >
          <div
            class="cloud-container relative w-full h-full bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 rounded-3xl flex items-center justify-center shadow-2xl backdrop-blur-sm border border-white/20"
          >
            <!-- 云形状装饰 -->
            <div
              class="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-80"
            ></div>
            <div
              class="absolute -top-4 -right-8 w-12 h-12 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full opacity-70"
            ></div>
            <div
              class="absolute -bottom-3 left-8 w-10 h-10 bg-gradient-to-br from-blue-300 to-blue-500 rounded-full opacity-60"
            ></div>

            <div class="relative z-10 text-center text-white p-8">
              <div class="flex items-center justify-center mb-6">
                <iconify-icon
                  icon="mdi:cloud-outline"
                  class="text-3xl mr-2"
                ></iconify-icon>
                <h3 class="text-xl font-bold">云服务器阵列</h3>
              </div>

              <div class="grid grid-cols-3 gap-4 max-w-sm">
                <div
                  class="group flex flex-col items-center p-3 bg-white/20 rounded-xl backdrop-blur-md transition-all duration-300 hover:bg-white/30 hover:scale-105 cursor-pointer"
                >
                  <iconify-icon
                    icon="mdi:database"
                    class="text-2xl mb-2 group-hover:scale-110 transition-transform"
                  ></iconify-icon>
                  <span class="text-xs font-medium text-center">数据库</span>
                </div>
                <div
                  class="group flex flex-col items-center p-3 bg-white/20 rounded-xl backdrop-blur-md transition-all duration-300 hover:bg-white/30 hover:scale-105 cursor-pointer"
                >
                  <iconify-icon
                    icon="mdi:memory"
                    class="text-2xl mb-2 group-hover:scale-110 transition-transform"
                  ></iconify-icon>
                  <span class="text-xs font-medium text-center">缓存</span>
                </div>
                <div
                  class="group flex flex-col items-center p-3 bg-white/20 rounded-xl backdrop-blur-md transition-all duration-300 hover:bg-white/30 hover:scale-105 cursor-pointer"
                >
                  <iconify-icon
                    icon="mdi:message-processing"
                    class="text-2xl mb-2 group-hover:scale-110 transition-transform"
                  ></iconify-icon>
                  <span class="text-xs font-medium text-center">消息</span>
                </div>
                <div
                  class="group flex flex-col items-center p-3 bg-white/20 rounded-xl backdrop-blur-md transition-all duration-300 hover:bg-white/30 hover:scale-105 cursor-pointer"
                >
                  <iconify-icon
                    icon="mdi:application-cog"
                    class="text-2xl mb-2 group-hover:scale-110 transition-transform"
                  ></iconify-icon>
                  <span class="text-xs font-medium text-center">应用</span>
                </div>
                <div
                  class="group flex flex-col items-center p-3 bg-white/20 rounded-xl backdrop-blur-md transition-all duration-300 hover:bg-white/30 hover:scale-105 cursor-pointer"
                >
                  <iconify-icon
                    icon="mdi:shield-lock"
                    class="text-2xl mb-2 group-hover:scale-110 transition-transform"
                  ></iconify-icon>
                  <span class="text-xs font-medium text-center">安全</span>
                </div>
                <div
                  class="group flex flex-col items-center p-3 bg-white/20 rounded-xl backdrop-blur-md transition-all duration-300 hover:bg-white/30 hover:scale-105 cursor-pointer"
                >
                  <iconify-icon
                    icon="mdi:router-network"
                    class="text-2xl mb-2 group-hover:scale-110 transition-transform"
                  ></iconify-icon>
                  <span class="text-xs font-medium text-center">网络</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 连接线SVG -->
        <div class="absolute inset-0 pointer-events-none z-10">
          <svg width="100%" height="100%">
            <defs>
              <linearGradient
                id="lineGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:0.8" />
                <stop
                  offset="100%"
                  style="stop-color:#06b6d4;stop-opacity:0.8"
                />
              </linearGradient>
              <linearGradient
                id="activeLineGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" style="stop-color:#f59e0b;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#ef4444;stop-opacity:1" />
              </linearGradient>
              <!-- 箭头标记 - 指向云服务器 -->
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="8"
                refX="8"
                refY="4"
                orient="auto"
                markerUnits="strokeWidth"
              >
                <path d="M0,0 L0,8 L10,4 z" fill="#3b82f6" stroke="none" />
              </marker>
              <!-- 箭头标记 - 指向客户端 -->
              <marker
                id="arrowhead-reverse"
                markerWidth="10"
                markerHeight="8"
                refX="2"
                refY="4"
                orient="auto"
                markerUnits="strokeWidth"
              >
                <path d="M10,0 L10,8 L0,4 z" fill="#3b82f6" stroke="none" />
              </marker>
              <marker
                id="arrowhead-active"
                markerWidth="10"
                markerHeight="8"
                refX="8"
                refY="4"
                orient="auto"
                markerUnits="strokeWidth"
              >
                <path d="M0,0 L0,8 L10,4 z" fill="#f59e0b" stroke="none" />
              </marker>
              <marker
                id="arrowhead-reverse-active"
                markerWidth="10"
                markerHeight="8"
                refX="2"
                refY="4"
                orient="auto"
                markerUnits="strokeWidth"
              >
                <path d="M10,0 L10,8 L0,4 z" fill="#f59e0b" stroke="none" />
              </marker>
            </defs>

            <!-- 到网页端的连接线 (从网页端到云服务器) -->
            <path
              d="M 90 220 L 90 260 L 380 260"
              class="connection-path connection-web fill-none stroke-2 opacity-60"
              style="stroke: url(#lineGradient); stroke-dasharray: 8,4; stroke-linecap: round; stroke-linejoin: round;"
              marker-end="url(#arrowhead)"
              marker-start="url(#arrowhead-reverse)"
            />

            <!-- 到手机端的连接线 (从云服务器到手机端) -->
            <path
              d="M 900 340 L 1180 340 L 1180 400"
              class="connection-path connection-mobile fill-none stroke-2 opacity-60"
              style="stroke: url(#lineGradient); stroke-dasharray: 8,4; stroke-linecap: round; stroke-linejoin: round;"
              marker-end="url(#arrowhead)"
              marker-start="url(#arrowhead-reverse)"
            />

            <!-- 到微信端的连接线 (从微信端到云服务器) -->
            <path
              d="M 90 380 L 90 340 L 380 340"
              class="connection-path connection-wechat fill-none stroke-2 opacity-60"
              style="stroke: url(#lineGradient); stroke-dasharray: 8,4; stroke-linecap: round; stroke-linejoin: round;"
              marker-end="url(#arrowhead)"
              marker-start="url(#arrowhead-reverse)"
            />

            <!-- 数据流动粒子 -->
            ${this.activeClient
              ? html`
                  <circle
                    class="data-particle"
                    cx="300"
                    cy="300"
                    r="4"
                    fill="#f59e0b"
                    opacity="0"
                  ></circle>
                  <circle
                    class="data-particle"
                    cx="320"
                    cy="300"
                    r="3"
                    fill="#ef4444"
                    opacity="0"
                  ></circle>
                `
              : ''}
          </svg>
        </div>

        <!-- 三个客户端 -->
        <!-- 网页端 -->
        <div class="absolute top-16 left-8">
          <div
            class="client-card web-client group relative flex flex-col items-center bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50 min-w-[140px] transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:scale-105 hover:shadow-2xl ${this
              .activeClient === 'web'
              ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white'
              : ''}"
            @mouseenter=${() => this.handleClientHover('web')}
            @mouseleave=${() => this.handleClientLeave()}
            @click=${() => this.handleClientHover('web')}
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
            <iconify-icon
              icon="mdi:monitor-dashboard"
              class="text-5xl mb-3 transition-all duration-300 group-hover:scale-110 ${this
                .activeClient === 'web'
                ? 'text-white'
                : 'text-blue-500'}"
            ></iconify-icon>
            <h4
              class="text-sm font-semibold text-center mb-1 ${this
                .activeClient === 'web'
                ? 'text-white'
                : 'text-slate-700'}"
            >
              网页端管理
            </h4>
            <p
              class="text-xs text-center ${this.activeClient === 'web'
                ? 'text-blue-100'
                : 'text-slate-500'}"
            >
              PC端控制台
            </p>
          </div>
        </div>

        <!-- 手机端 -->
        <div class="absolute bottom-8 right-8">
          <div
            class="client-card mobile-client group relative flex flex-col items-center bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50 min-w-[140px] transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:scale-105 hover:shadow-2xl ${this
              .activeClient === 'mobile'
              ? 'bg-gradient-to-br from-orange-500 to-orange-600 text-white'
              : ''}"
            @mouseenter=${() => this.handleClientHover('mobile')}
            @mouseleave=${() => this.handleClientLeave()}
            @click=${() => this.handleClientHover('mobile')}
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
            <iconify-icon
              icon="mdi:cellphone-cog"
              class="text-5xl mb-3 transition-all duration-300 group-hover:scale-110 ${this
                .activeClient === 'mobile'
                ? 'text-white'
                : 'text-orange-500'}"
            ></iconify-icon>
            <h4
              class="text-sm font-semibold text-center mb-1 ${this
                .activeClient === 'mobile'
                ? 'text-white'
                : 'text-slate-700'}"
            >
              移动APP
            </h4>
            <p
              class="text-xs text-center ${this.activeClient === 'mobile'
                ? 'text-orange-100'
                : 'text-slate-500'}"
            >
              iOS/Android
            </p>
          </div>
        </div>

        <!-- 微信端 -->
        <div class="absolute bottom-16 left-8">
          <div
            class="client-card wechat-client group relative flex flex-col items-center bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50 min-w-[140px] transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:scale-105 hover:shadow-2xl ${this
              .activeClient === 'wechat'
              ? 'bg-gradient-to-br from-green-600 to-green-700 text-white'
              : ''}"
            @mouseenter=${() => this.handleClientHover('wechat')}
            @mouseleave=${() => this.handleClientLeave()}
            @click=${() => this.handleClientHover('wechat')}
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-green-600/10 to-green-700/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
            <iconify-icon
              icon="mdi:wechat"
              class="text-5xl mb-3 transition-all duration-300 group-hover:scale-110 ${this
                .activeClient === 'wechat'
                ? 'text-white'
                : 'text-green-600'}"
            ></iconify-icon>
            <h4
              class="text-sm font-semibold text-center mb-1 ${this
                .activeClient === 'wechat'
                ? 'text-white'
                : 'text-slate-700'}"
            >
              微信小程序
            </h4>
            <p
              class="text-xs text-center ${this.activeClient === 'wechat'
                ? 'text-green-100'
                : 'text-slate-500'}"
            >
              轻量级应用
            </p>
          </div>
        </div>

        <!-- 连接状态指示器 -->
        ${this.activeClient
          ? html`
              <div
                class="absolute top-4 left-6 flex items-center space-x-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-white/50"
              >
                <div
                  class="w-2 h-2 bg-green-500 rounded-full animate-pulse"
                ></div>
                <span class="text-sm font-medium text-slate-700">
                  ${this.activeClient === 'web'
                    ? '网页端'
                    : this.activeClient === 'mobile'
                    ? '移动端'
                    : '微信端'}
                  连接中
                </span>
              </div>
            `
          : ''}
      </div>
    `
  }
}

customElements.define('cloud-architecture', CloudArchitectureComponent)
