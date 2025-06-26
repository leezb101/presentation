import { html, css } from 'lit'
import { BaseComponent } from './base-component.js'
import { gsap } from 'gsap'

export class SupportingSolutionsComponent extends BaseComponent {
  static properties = {
    isAnimationModalOpen: { type: Boolean },
    animationStep: { type: Number },
  }

  constructor() {
    super()
    this.isAnimationModalOpen = false
    this.animationStep = 0
  }
  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    /* 字体缩放样式 */
    .text-4xl {
      font-size: calc(2.25rem * var(--font-scale, 1)) !important;
    }
    .text-3xl {
      font-size: calc(1.875rem * var(--font-scale, 1)) !important;
    }
    .text-2xl {
      font-size: calc(1.5rem * var(--font-scale, 1)) !important;
    }
    .text-xl {
      font-size: calc(1.25rem * var(--font-scale, 1)) !important;
    }
    .text-lg {
      font-size: calc(1.125rem * var(--font-scale, 1)) !important;
    }
    .text-base {
      font-size: calc(1rem * var(--font-scale, 1)) !important;
    }
    .text-sm {
      font-size: calc(0.875rem * var(--font-scale, 1)) !important;
    }
    .text-xs {
      font-size: calc(0.75rem * var(--font-scale, 1)) !important;
    }

    .solution-card {
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;
      border: 1px solid transparent;
    }

    .solution-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
        0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }

    .solution-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: -150%;
      width: 70%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.4),
        transparent
      );
      transform: skewX(-30deg);
      transition: left 0.7s ease-in-out;
    }

    .solution-card:hover::before {
      left: 150%;
    }

    .category-title {
      position: relative;
      padding-bottom: 0.75rem;
      margin-bottom: 2rem;
    }

    .category-title::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 4px;
      border-radius: 2px;
    }

    .title-blue::after {
      background-color: #3b82f6;
    }

    .title-green::after {
      background-color: #10b981;
    }

    /* 动画模态框样式 */
    .animation-modal {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(5px);
      overflow: hidden;
    }

    .animation-container {
      background: white;
      border-radius: 16px;
      padding: 2rem;
      width: 90vw;
      height: 85vh;
      max-width: 1000px;
      max-height: 700px;
      overflow-y: auto;
      position: relative;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
      display: flex;
      flex-direction: column;
    }

    .close-button {
      position: absolute;
      top: 1rem;
      right: 1rem;
      width: 2.5rem;
      height: 2.5rem;
      border: none;
      background: #f3f4f6;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;
    }

    .close-button:hover {
      background: #e5e7eb;
      transform: scale(1.1);
    }

    /* 管道树状结构样式 */
    .pipe-tree {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem 1rem;
      min-height: 300px;
      position: relative;
    }

    .pipe-node {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .pipe {
      position: relative;
      width: 100px;
      height: 36px;
      background: linear-gradient(135deg, #64748b, #475569);
      border-radius: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
      margin: 0.3rem;
      transform-origin: center;
    }

    .pipe-label {
      color: white;
      font-weight: bold;
      font-size: 0.8rem;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    }

    .qr-code {
      position: absolute;
      top: -10px;
      right: -10px;
      width: 20px;
      height: 20px;
      background: white;
      border: 2px solid #059669;
      border-radius: 3px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.5rem;
      font-weight: bold;
      color: #059669;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
      transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
      transform-origin: center;
    }

    .connection-line {
      position: absolute;
      top: -30px;
      left: 50%;
      transform: translateX(-50%);
      width: 2px;
      height: 30px;
      background: transparent;
      border-left: 2px dashed #9ca3af;
      opacity: 0;
      transition: opacity 0.6s ease;
    }

    .connection-line.visible {
      opacity: 1;
    }

    .horizontal-line {
      position: absolute;
      top: -30px;
      height: 2px;
      background: #9ca3af;
      opacity: 0;
      transition: opacity 0.6s ease;
    }

    .horizontal-line.visible {
      opacity: 1;
    }

    .children-container {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      gap: 1.5rem;
      margin-top: 40px;
      opacity: 0;
      transform: translateY(-30px) scale(0.8);
      transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
    }

    .children-container.visible {
      opacity: 1;
      transform: translateY(0) scale(1);
    }

    /* 第一级子节点容器 */
    .level-1 {
      gap: 4rem;
    }

    /* 第二级子节点容器 */
    .level-2 {
      gap: 1rem;
    }

    /* 水平连接线 */
    .level-1::before {
      content: '';
      position: absolute;
      top: -30px;
      left: 50%;
      transform: translateX(-50%);
      width: calc(100% - 2rem);
      height: 2px;
      background: #9ca3af;
      opacity: 0;
      transition: opacity 0.6s ease 0.3s;
    }

    .level-1.visible::before {
      opacity: 1;
    }

    .level-2::before {
      content: '';
      position: absolute;
      top: -30px;
      left: 50%;
      transform: translateX(-50%);
      width: calc(100% - 1rem);
      height: 2px;
      background: #9ca3af;
      opacity: 0;
      transition: opacity 0.6s ease 0.3s;
    }

    .level-2.visible::before {
      opacity: 1;
    }

    .split-animation {
      animation: split-effect 1s cubic-bezier(0.4, 0, 0.2, 1);
    }

    @keyframes split-effect {
      0% { 
        transform: scale(1);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      }
      30% { 
        transform: scale(1.15);
        box-shadow: 0 0 25px rgba(59, 130, 246, 0.6), 0 8px 20px rgba(0, 0, 0, 0.25);
      }
      60% {
        transform: scale(1.05);
        box-shadow: 0 0 15px rgba(16, 185, 129, 0.4), 0 6px 16px rgba(0, 0, 0, 0.2);
      }
      100% { 
        transform: scale(1);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      }
    }

    .qr-split-animation {
      animation: qr-split 1s cubic-bezier(0.4, 0, 0.2, 1);
    }

    @keyframes qr-split {
      0% { 
        transform: scale(1) rotate(0deg);
        background: white;
        border-color: #059669;
      }
      25% { 
        transform: scale(1.3) rotate(8deg);
        background: #fbbf24;
        border-color: #f59e0b;
        box-shadow: 0 4px 15px rgba(251, 191, 36, 0.5);
      }
      50% { 
        transform: scale(0.7) rotate(-5deg);
        background: #60a5fa;
        border-color: #3b82f6;
      }
      75% {
        transform: scale(1.1) rotate(2deg);
        background: #34d399;
        border-color: #10b981;
      }
      100% { 
        transform: scale(1) rotate(0deg);
        background: white;
        border-color: #059669;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
      }
    }

    /* 子元素出现动画 */
    .child-appear {
      animation: child-appear 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }

    @keyframes child-appear {
      0% {
        opacity: 0;
        transform: translateY(-40px) scale(0.6);
      }
      50% {
        opacity: 0.7;
        transform: translateY(-10px) scale(1.1);
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    .step-indicator {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      background: #f8fafc;
      border-radius: 12px;
      border-left: 4px solid #10b981;
      margin: 1rem 0;
    }

    .step-title {
      font-weight: bold;
      color: #1f2937;
      font-size: 1.1rem;
    }

    .step-description {
      color: #6b7280;
      text-align: center;
      line-height: 1.5;
    }

    .animation-controls {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin: 2rem 0;
    }

    .control-button {
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 8px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
    }

    .control-button.primary {
      background: #10b981;
      color: white;
    }

    .control-button.primary:hover {
      background: #059669;
      transform: translateY(-1px);
    }

    .control-button.secondary {
      background: #f3f4f6;
      color: #374151;
    }

    .control-button.secondary:hover {
      background: #e5e7eb;
    }


    @unocss-placeholder;
  `

  firstUpdated() {
    this.safeRequestAnimationFrame(() => this.initializeAnimations())
  }

  initializeAnimations() {
    const cards = this.shadowRoot.querySelectorAll('.solution-card')
    if (cards.length > 0) {
      gsap.fromTo(
        cards,
        { y: 30, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: {
            each: 0.1,
            from: 'start',
          },
          ease: 'power2.out',
        }
      )
    }

    const titles = this.shadowRoot.querySelectorAll('.category-title')
    if (titles.length > 0) {
      gsap.fromTo(
        titles,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.2, ease: 'power1.out' }
      )
    }
  }

  getSolutionsData() {
    return {
      painPointSolutions: [
        {
          icon: 'mdi:sitemap-outline',
          title: '流程简化，一步到位',
          description:
            '智能合并“验收-入库”、“出库-安装”流程，大幅提升现场作业效率。',
        },
        {
          icon: 'mdi-microphone',
          title: '操作简便，轻松上手',
          description:
            '引入语音识别录入，并自动捕获时间、地点等关键信息，降低一线人员操作门槛。',
        },
        {
          icon: 'mdi:file-multiple-outline',
          title: '批量处理，高效协同',
          description:
            '支持以“交付号”为单位的批量赋码与验收，打通厂家到现场的第一公里。',
        },
        {
          icon: 'mdi:lock-check-outline',
          title: '专材专用，防止错用',
          description:
            '二维码与项目严格绑定，系统自动校验，有效防止材料在多项目并行时发生混用、错用。',
        },
      ],
      detailOptimizations: [
        {
          icon: 'mdi:swap-horizontal-bold',
          title: '灵活调拨，物尽其用',
          description: '支持跨项目物资调拨，全流程留痕，兼顾灵活性与合规性。',
        },
        {
          icon: 'mdi:puzzle-edit-outline',
          title: '特殊场景，从容应对',
          description:
            '提供备用码申领机制，从容应对“管道截取”等特殊情况，确保每一段材料都有码可依。',
        },
        {
          icon: 'mdi:autorenew',
          title: '冗余复用，降本增效',
          description: '未用尽的材料可高效退库、解绑，投入新项目，减少浪费。',
        },
        {
          icon: 'mdi:chart-bar-stacked',
          title: '智能比对，辅助决策',
          description:
            '自动比对计划、用量与竣工图信息，为审计与复盘提供数据支撑。',
        },
      ],
    }
  }

  render() {
    const data = this.getSolutionsData()
    return html`
      <div class="container mx-auto px-4 w-full max-w-7xl pb-12">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">
            配套方案：为复杂现场量身打造
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            平台的设计根植于解决一线实际问题，同时追求极致的用户体验。我们的方案不仅直击痛点，更在细节中彰显价值。
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-12">
          <!-- 痛点应对 -->
          <div class="space-y-6">
            <h3
              class="category-title title-blue text-2xl font-bold text-blue-700 text-center flex items-center justify-center gap-3"
            >
              <iconify-icon
                icon="mdi:target-arrow"
                class="text-3xl"
              ></iconify-icon>
              痛点应对
            </h3>
            ${data.painPointSolutions.map((item) =>
              this.renderCard(item, 'blue')
            )}
          </div>

          <!-- 细节优化 -->
          <div class="space-y-6">
            <h3
              class="category-title title-green text-2xl font-bold text-green-700 text-center flex items-center justify-center gap-3"
            >
              <iconify-icon
                icon="mdi:human-greeting-variant"
                class="text-3xl"
              ></iconify-icon>
              细节优化
            </h3>
            ${data.detailOptimizations.map((item) =>
              this.renderCard(item, 'green')
            )}
          </div>
        </div>
      </div>
      
      ${this.isAnimationModalOpen ? this.renderAnimationModal() : ''}
    `
  }

  openAnimationModal() {
    this.isAnimationModalOpen = true
  }

  closeAnimationModal() {
    this.isAnimationModalOpen = false
    this.animationStep = 0
  }

  async startAnimation() {
    this.animationStep = 1
    await this.delay(1500)
    
    // 第一次分裂: A -> A1, A2
    await this.splitPipe('root', ['A1', 'A2'])
    this.animationStep = 2
    await this.delay(1500)
    
    // 第二次分裂: A1 -> A11, A12, A13
    await this.splitPipe('A1', ['A11', 'A12', 'A13'])
    this.animationStep = 3
  }

  resetAnimation() {
    this.animationStep = 0
  }

  async splitPipe(parentId, childIds) {
    const parentPipe = this.shadowRoot.querySelector(`[data-pipe-id="${parentId}"]`)
    const parentQR = parentPipe?.querySelector('.qr-code')
    
    if (parentPipe && parentQR) {
      // 分裂动画效果
      parentPipe.classList.add('split-animation')
      parentQR.classList.add('qr-split-animation')
      
      await this.delay(500)
      
      // 显示子管件容器
      const childrenContainer = this.shadowRoot.querySelector(`[data-children-of="${parentId}"]`)
      if (childrenContainer) {
        childrenContainer.classList.add('visible')
        
        // 延迟显示连接线
        setTimeout(() => {
          const connectionLines = childrenContainer.querySelectorAll('.connection-line')
          connectionLines.forEach((line, index) => {
            setTimeout(() => {
              line.classList.add('visible')
            }, index * 150)
          })
        }, 300)
        
        // 子管件逐个出现
        const childPipes = childrenContainer.querySelectorAll('.pipe')
        childPipes.forEach((pipe, index) => {
          setTimeout(() => {
            pipe.classList.add('child-appear')
          }, 400 + index * 200)
        })
      }
      
      // 清理动画类
      setTimeout(() => {
        parentPipe.classList.remove('split-animation')
        parentQR.classList.remove('qr-split-animation')
      }, 1000)
    }
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  renderAnimationModal() {
    return html`
      <div class="animation-modal" @click=${(e) => e.target === e.currentTarget && this.closeAnimationModal()}>
        <div class="animation-container">
          <button class="close-button" @click=${this.closeAnimationModal}>
            <iconify-icon icon="mdi:close" class="text-xl"></iconify-icon>
          </button>
          
          <div class="text-center mb-6">
            <h2 class="text-2xl font-bold text-gray-800 mb-2">管材截断树状结构</h2>
            <p class="text-gray-600">展示管材分裂和二维码继承的树状关系</p>
          </div>

          <div class="pipe-tree">
            <!-- 根节点 -->
            <div class="pipe-node">
              <div class="pipe" data-pipe-id="root">
                <div class="qr-code">A</div>
                <div class="pipe-label">管材 A</div>
              </div>
              
              <!-- 第一级子节点 -->
              <div class="children-container level-1" data-children-of="root">
                <div class="pipe-node">
                  <div class="connection-line"></div>
                  <div class="pipe" data-pipe-id="A1">
                    <div class="qr-code">A1</div>
                    <div class="pipe-label">A1</div>
                  </div>
                  
                  <!-- 第二级子节点 -->
                  <div class="children-container level-2" data-children-of="A1">
                    <div class="pipe-node">
                      <div class="connection-line"></div>
                      <div class="pipe">
                        <div class="qr-code">A11</div>
                        <div class="pipe-label">A11</div>
                      </div>
                    </div>
                    <div class="pipe-node">
                      <div class="connection-line"></div>
                      <div class="pipe">
                        <div class="qr-code">A12</div>
                        <div class="pipe-label">A12</div>
                      </div>
                    </div>
                    <div class="pipe-node">
                      <div class="connection-line"></div>
                      <div class="pipe">
                        <div class="qr-code">A13</div>
                        <div class="pipe-label">A13</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="pipe-node">
                  <div class="connection-line"></div>
                  <div class="pipe">
                    <div class="qr-code">A2</div>
                    <div class="pipe-label">A2</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 步骤指示器 -->
          <div class="step-indicator">
            <div class="step-title">
              ${this.animationStep === 0 ? '点击开始按钮查看动画' : 
                this.animationStep === 1 ? '步骤 1: 准备截断' :
                this.animationStep === 2 ? '步骤 2: A 分裂为 A1、A2' :
                '步骤 3: A1 分裂为 A11、A12、A13'}
            </div>
            <div class="step-description">
              ${this.animationStep === 0 ? '树状结构展示管材分裂和二维码继承关系' : 
                this.animationStep === 1 ? '原管材A准备进行第一次分裂' :
                this.animationStep === 2 ? '管材A分裂成两段，二维码同步复制到子管件' :
                '子管件A1进一步分裂成三段，形成完整的树状结构'}
            </div>
          </div>

          <!-- 控制按钮 -->
          <div class="animation-controls">
            <button class="control-button primary" @click=${this.startAnimation}>
              开始演示
            </button>
            <button class="control-button secondary" @click=${this.resetAnimation}>
              重置
            </button>
          </div>

          <!-- 说明文字 -->
          <div style="margin-top: 2rem; padding: 1rem; background: #f8fafc; border-radius: 8px; border-left: 4px solid #3b82f6;">
            <h4 style="font-weight: bold; color: #1f2937; margin-bottom: 0.5rem;">树状结构说明：</h4>
            <ul style="color: #6b7280; line-height: 1.6; margin: 0; padding-left: 1rem;">
              <li>每个管件都有对应的二维码标识</li>
              <li>管件分裂时，二维码信息自动复制并更新</li>
              <li>虚线表示父子管件的继承关系</li>
              <li>支持多级分裂，形成完整的管件族谱</li>
              <li>每个子管件都能追溯到原始管材信息</li>
            </ul>
          </div>
        </div>
      </div>
    `
  }

  renderCard(item, color) {
    const colorClasses = {
      blue: {
        bg: 'bg-gradient-to-br from-blue-50 to-blue-100',
        iconBg: 'bg-blue-200',
        text: 'text-blue-800',
        desc: 'text-blue-700',
        border: 'border-blue-200',
        shadow: 'hover:shadow-blue-200/50',
      },
      green: {
        bg: 'bg-gradient-to-br from-green-50 to-green-100',
        iconBg: 'bg-green-200',
        text: 'text-green-800',
        desc: 'text-green-700',
        border: 'border-green-200',
        shadow: 'hover:shadow-green-200/50',
      },
    }
    const classes = colorClasses[color]

    const isSpecialScenario = item.title === '特殊场景，从容应对'
    const clickHandler = isSpecialScenario ? () => this.openAnimationModal() : null

    return html`
      <div
        class="solution-card ${classes.bg} ${classes.border} rounded-xl p-6 shadow-lg ${classes.shadow} ${isSpecialScenario ? 'cursor-pointer' : ''}"
        @click=${clickHandler}
      >
        <div class="flex items-start gap-5">
          <div
            class="flex-shrink-0 w-12 h-12 ${classes.iconBg} rounded-lg flex items-center justify-center mt-1"
          >
            <iconify-icon
              icon="${item.icon}"
              class="text-3xl ${classes.text}"
            ></iconify-icon>
          </div>
          <div>
            <h4 class="text-lg font-semibold ${classes.text} mb-2">
              ${item.title}
            </h4>
            <p class="text-sm leading-relaxed ${classes.desc}">
              ${item.description}
            </p>
          </div>
        </div>
      </div>
    `
  }
}

customElements.define('supporting-solutions', SupportingSolutionsComponent)
