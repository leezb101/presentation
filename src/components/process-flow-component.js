import { html, css } from 'lit'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'
import { BaseComponent } from './base-component.js'
import { gsap } from 'gsap'

export class ProcessFlowComponent extends BaseComponent {
  static properties = {
    currentStepIndex: { type: Number },
  }

  static styles = css`
    :host {
      width: 1280px !important;
    }
  `

  createRenderRoot() {
    return this.shadowRoot
  }

  constructor() {
    super()
    this.currentStepIndex = 0
    this.isTimelineAnimating = false
    this.showSplitNodes = false
    this.splitNodesData = []
    this.processData = [
      {
        title: '源头赋码',
        icon: 'mdi:cube-outline',
        details:
          '<strong>供应商：</strong>在材料出厂前，按集团标准生成并粘贴唯一的二维码，同时将材料的质检报告等电子文件上传至系统，与二维码进行绑定。',
      },
      {
        title: '扫码验收',
        icon: 'mdi:qrcode-scan',
        type: 'scan',
        details:
          '<strong>验收小组：</strong>材料到场后，通过App扫描二维码核对信息，并拍摄带水印的验收照片，在线提交验收结论。',
      },
      {
        title: '扫码出入库',
        icon: 'mdi:login-variant',
        details:
          '<strong>库管员：</strong>通过扫码办理材料入库、领用，系统自动更新库存台账，实时记录库位、领用人、用途等信息。',
      },
      {
        title: '扫码安装',
        icon: 'mdi:tools',
        details:
          '<strong>施工班组：</strong>在材料安装到具体部位后再次扫码，记录安装位置、操作人员，并上传带水印的完工照片。',
      },
      {
        title: '扫码追溯',
        icon: 'mdi:history',
        details:
          '<strong>管理/监理：</strong>出现质量问题或日常巡检时，扫描问题材料的二维码，即可追溯其全部信息。',
      },
    ]

    // 合并后的数据结构
    this.mergedProcessData = [
      {
        title: '源头赋码',
        icon: 'mdi:cube-outline',
        details:
          '<strong>供应商：</strong>在材料出厂前，按集团标准生成并粘贴唯一的二维码，同时将材料的质检报告等电子文件上传至系统，与二维码进行绑定。',
      },
      {
        title: '扫码验收+入库',
        icon: 'mdi:qrcode-scan',
        type: 'scan',
        details:
          '<strong>验收小组+库管员：</strong>材料到场后，通过App扫描二维码核对信息，拍摄验收照片，完成验收后直接办理入库手续。',
      },
      {
        title: '扫码出库+安装',
        icon: 'mdi:tools',
        details:
          '<strong>库管员+施工班组：</strong>通过扫码办理材料领用出库，并在安装到位后扫码记录安装信息。',
      },
      {
        title: '扫码追溯',
        icon: 'mdi:history',
        details:
          '<strong>管理/监理：</strong>出现质量问题或日常巡检时，扫描问题材料的二维码，即可追溯其全部信息。',
      },
    ]

    this.isMerged = false
  }

  render() {
    return html`
      <div class="container mx-auto px-6 w-full max-w-6xl">
        <div class="text-center mb-8">
          <h2 class="text-3xl font-bold text-gray-900">
            系统如何运作：全流程闭环管理
          </h2>
          <p class="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            通过对业务流程的数字化再造，形成信息流与实物流同步的闭环。请按"下一步"体验流程。
          </p>
        </div>

        <div
          class="relative w-full overflow-x-auto pb-4"
          style="height: 120px;"
        >
          <div
            class="relative min-w-[700px] md:min-w-0 flex justify-between items-center h-full"
          >
            <div
              id="progress-bar-container"
              class="absolute top-1/2 left-0 right-0 h-1 bg-blue-100 transform -translate-y-1/2 z-0"
            >
              <div
                id="progress-bar-fill"
                class="h-full bg-blue-600 transition-all duration-500"
                style="width: ${(this.currentStepIndex /
                  ((this.isMerged
                    ? this.mergedProcessData.length
                    : this.processData.length) -
                    1)) *
                100}%"
              ></div>
            </div>
            <div
              id="flow-steps-container"
              class="relative flex justify-between w-full h-full items-center"
            >
              ${this.renderFlowSteps()}
            </div>
          </div>
        </div>

        <div
          id="process-details"
          class="mt-8 bg-white p-8 rounded-xl shadow-lg transition-all duration-500 flex items-center justify-center"
          style="height: 400px; min-height: 400px; max-height: 400px;"
        >
          ${this.renderProcessDetails()}
        </div>

        <div class="mt-6 flex justify-center space-x-4">
          <button
            id="prev-step-btn"
            class="bg-gray-200 text-gray-700 font-bold py-2 px-6 rounded-lg hover:bg-gray-300 transition disabled:opacity-50"
            ?disabled=${this.currentStepIndex === 0}
            @click=${this.prevStep}
          >
            上一步
          </button>
          <button
            id="next-step-btn"
            class="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
            ?disabled=${this.currentStepIndex ===
            (this.isMerged
              ? this.mergedProcessData.length
              : this.processData.length) -
              1}
            @click=${this.nextStep}
          >
            下一步
          </button>
        </div>
      </div>
    `
  }

  renderFlowSteps() {
    const dataToUse = this.isMerged ? this.mergedProcessData : this.processData
    const steps = dataToUse.map(
      (step, index) => html`
        <div
          class="flex relative z-10 flex-col items-center p-2 flow-step ${index <
          this.currentStepIndex
            ? 'visited'
            : ''} ${index === this.currentStepIndex ? 'active' : ''}"
          data-step-index="${index}"
          style="${index === 2 && this.showSplitNodes ? 'opacity: 0;' : ''}"
        >
          <div
            class="flex justify-center items-center w-16 h-16 text-3xl bg-white rounded-full border-4 border-gray-300 shadow-md transition-all duration-300 flow-step-icon"
          >
            <iconify-icon icon="${step.icon}" class="text-4xl"></iconify-icon>
          </div>
          <span class="mt-2 text-sm font-semibold text-center"
            >${step.title}</span
          >
        </div>
      `
    )

    // 如果显示分裂节点，添加分裂节点
    if (this.showSplitNodes) {
      const splitNodes = this.splitNodesData.map(
        (nodeData) => html`
          <div
            class="flex absolute z-20 flex-col items-center p-2 flow-step"
            data-split-id="${nodeData.id}"
            style="left: ${nodeData.left}px; top: ${nodeData.top}px; opacity: ${nodeData.opacity}; transform: scale(${nodeData.scale});"
          >
            <div
              class="flex justify-center items-center w-16 h-16 text-3xl bg-white rounded-full border-4 border-gray-300 shadow-md transition-all duration-300 flow-step-icon"
            >
              <iconify-icon
                icon="${nodeData.icon}"
                class="text-4xl"
              ></iconify-icon>
            </div>
            <span class="mt-2 text-sm font-semibold text-center"
              >${nodeData.title}</span
            >
          </div>
        `
      )
      return [...steps, ...splitNodes]
    }

    return steps
  }

  renderProcessDetails() {
    const dataToUse = this.isMerged ? this.mergedProcessData : this.processData
    const stepData = dataToUse[this.currentStepIndex]
    if (!stepData) return html``

    if (stepData.type === 'scan') {
      return html`
        <div
          class="flex flex-col space-y-6 w-full h-full"
          style="position: relative;"
        >
          <button
            title="重播本步骤"
            class="flex justify-center items-center w-10 h-10 bg-white rounded-full border border-gray-200 shadow transition hover:bg-blue-50"
            style="position: absolute; left: 10px; bottom: 10px; z-index: 100;"
            @click=${this.replayStep}
          >
            <iconify-icon
              icon="mdi:refresh"
              style="font-size:1.5rem;"
            ></iconify-icon>
          </button>

          <div
            class="flex flex-row justify-start items-center text-gray-700"
            style="height: 80px; flex-shrink: 0;"
          >
            <div
              class="text-6xl text-blue-500"
              style="width: 80px; flex-shrink: 0;"
            >
              <iconify-icon icon="${stepData.icon}"></iconify-icon>
            </div>
            <div class="text-gray-700 ml-4">
              ${unsafeHTML(stepData.details)}
            </div>
          </div>

          <div
            id="scan-acceptance-row"
            class="flex relative gap-6 justify-between items-start w-full flex-1"
            style="min-height: 240px;"
          >
            ${this.renderScanAcceptanceSection()}
          </div>
        </div>
      `
    } else if (stepData.title === '源头赋码') {
      return html`
        <div
          class="flex flex-col space-y-6 w-full h-full"
          style="position: relative;"
        >
          <button
            title="重播本步骤"
            class="flex justify-center items-center w-10 h-10 bg-white rounded-full border border-gray-200 shadow transition hover:bg-blue-50"
            style="position: absolute; left: 10px; bottom: 10px; z-index: 100;"
            @click=${this.replayStep}
          >
            <iconify-icon
              icon="mdi:refresh"
              style="font-size:1.5rem;"
            ></iconify-icon>
          </button>

          <div
            class="flex flex-row justify-start items-center text-gray-700"
            style="height: 80px; flex-shrink: 0;"
          >
            <div
              class="text-6xl text-blue-500"
              style="width: 80px; flex-shrink: 0;"
            >
              <iconify-icon icon="${stepData.icon}"></iconify-icon>
            </div>
            <div class="text-gray-700 ml-4">
              ${unsafeHTML(stepData.details)}
            </div>
          </div>

          <div
            id="qr-db-row"
            class="flex relative gap-6 justify-between items-start w-full flex-1"
            style="min-height: 240px;"
          >
            ${this.renderSourceCodingSection()}
          </div>
        </div>
      `
    } else {
      return html`
        <div
          class="flex flex-col justify-center items-start w-full h-full"
          style="position: relative;"
        >
          <button
            title="重播本步骤"
            class="flex justify-center items-center w-10 h-10 bg-white rounded-full border border-gray-200 shadow transition hover:bg-blue-50"
            style="position: absolute; left: 10px; bottom: 10px; z-index: 100;"
            @click=${this.replayStep}
          >
            <iconify-icon
              icon="mdi:refresh"
              style="font-size:1.5rem;"
            ></iconify-icon>
          </button>

          <div class="flex flex-row items-center text-gray-700">
            <div
              class="text-6xl text-blue-500"
              style="width: 80px; flex-shrink: 0;"
            >
              <iconify-icon icon="${stepData.icon}"></iconify-icon>
            </div>
            <div class="text-gray-700 ml-4 text-lg leading-relaxed">
              ${unsafeHTML(stepData.details)}
            </div>
          </div>
        </div>
      `
    }
  }

  renderScanAcceptanceSection() {
    return html`
      <div class="flex flex-col flex-1 items-center space-y-4">
        <div
          id="scan-qr-container"
          class="flex flex-shrink-0 justify-center items-center bg-black shadow-lg"
          style="position: relative; width: 128px; height: 128px; border-radius: 0.75rem; overflow: hidden; border: 2.5px solid #2563eb;"
        >
          <canvas
            id="scan-qr-canvas"
            width="112"
            height="112"
            style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: 1;"
          ></canvas>
          <canvas
            id="scan-line-canvas"
            width="112"
            height="112"
            style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: 2; pointer-events: none;"
          ></canvas>
        </div>
        <button
          id="scan-simulate-btn"
          class="px-4 py-2 text-white bg-blue-500 rounded transition w-[128px] hover:bg-blue-600"
          @click=${this.handleScanSimulateClick}
        >
          扫码验收
        </button>
      </div>

      <div
        class="flex flex-col items-center space-y-6"
        style="flex: 2; min-width: 256px;"
      >
        <div class="flex justify-center space-x-4">
          <div class="flex flex-col items-center space-y-2">
            <div
              id="photo-container"
              class="flex relative flex-shrink-0 justify-center items-center shadow-lg"
              style="width: 96px; height: 96px; border-radius: 0.75rem; background: #f9fafb; border: 2.5px solid #9ca3af; opacity: 0; transform: scale(0.7); transition: all 0.7s cubic-bezier(0.4,0,0.2,1);"
            >
              <div
                class="flex flex-col justify-center items-center w-full h-full"
              >
                <iconify-icon
                  icon="mdi:camera"
                  class="text-gray-400"
                  style="font-size:64px;"
                ></iconify-icon>
                <div class="mt-1 text-sm font-bold text-gray-500">拍照</div>
              </div>
            </div>
            <div
              id="photo-label"
              class="px-2 py-1 text-xs font-semibold text-orange-700 bg-orange-100 rounded-full border border-orange-300"
              style="opacity: 0;"
            >
              验收照片
            </div>
          </div>

          <div class="flex flex-col items-center space-y-2">
            <div
              id="gps-container"
              class="flex relative flex-shrink-0 justify-center items-center shadow-lg"
              style="width: 96px; height: 96px; border-radius: 0.75rem; background: #f0f9ff; border: 2.5px solid #3b82f6; opacity: 0; transform: scale(0.7); transition: all 0.7s cubic-bezier(0.4,0,0.2,1);"
            >
              <div
                class="flex flex-col justify-center items-center w-full h-full"
              >
                <iconify-icon
                  icon="mdi:map-marker"
                  class="text-blue-500"
                  style="font-size:64px;"
                ></iconify-icon>
                <div class="mt-1 text-sm font-bold text-blue-700">GPS</div>
              </div>
            </div>
            <div
              id="gps-label"
              class="px-2 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full border border-blue-300"
              style="opacity: 0;"
            >
              GPS信息
            </div>
          </div>
        </div>

        <div class="flex justify-center">
          <div class="flex flex-col items-center space-y-2">
            <div
              id="watermark-container"
              class="flex relative flex-shrink-0 justify-center items-center shadow-lg"
              style="width: 96px; height: 96px; border-radius: 0.75rem; background: #fefce8; border: 2.5px solid #eab308; opacity: 0; transform: scale(0.7); transition: all 0.7s cubic-bezier(0.4,0,0.2,1);"
            >
              <div
                class="flex flex-col justify-center items-center w-full h-full"
              >
                <iconify-icon
                  icon="mdi:watermark"
                  class="text-yellow-600"
                  style="font-size:64px;"
                ></iconify-icon>
                <div class="mt-1 text-sm font-bold text-yellow-700">水印</div>
              </div>
            </div>
            <div
              id="watermark-label"
              class="px-2 py-1 text-xs font-semibold text-yellow-700 bg-yellow-100 rounded-full border border-yellow-300"
              style="opacity: 0;"
            >
              水印信息
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col flex-1 items-center space-y-4">
        <div
          id="scan-db-container"
          class="flex relative flex-shrink-0 justify-center items-center shadow-lg"
          style="width: 128px; height: 128px; border-radius: 0.75rem; background: #f0fdf4; border: 2.5px solid #4ade80;"
        >
          <div class="flex flex-col justify-center items-center w-full h-full">
            <iconify-icon
              icon="mdi:database"
              class="text-green-500"
              style="font-size:96px;"
            ></iconify-icon>
            <div class="mt-2 text-lg font-bold text-green-700">数据库</div>
          </div>
        </div>
        <div
          id="scan-db-label"
          class="px-3 py-1 text-sm font-semibold text-green-700 bg-green-100 rounded-full border border-green-300"
          style="opacity: 0;"
        >
          验收入库
        </div>
      </div>
    `
  }

  renderSourceCodingSection() {
    return html`
      <div class="flex flex-col flex-1 items-center space-y-4">
        <div
          id="custom-qr-container"
          class="flex flex-shrink-0 justify-center items-center bg-black shadow-lg"
          style="position: relative; width: 128px; height: 128px; border-radius: 0.75rem; overflow: hidden; border: 2.5px solid #2563eb;"
        >
          <canvas
            id="qr-canvas-source"
            width="112"
            height="112"
            style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: 1;"
          ></canvas>
          <canvas
            id="scanbar-canvas"
            width="112"
            height="112"
            style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: 2; pointer-events: none;"
          ></canvas>
        </div>
        <button
          id="simulate-btn"
          class="px-4 py-2 text-white bg-blue-500 rounded transition w-[128px] hover:bg-blue-600"
          @click=${this.handleSimulateClick}
        >
          扫码录入
        </button>
      </div>

      <div class="flex flex-col flex-1 items-center space-y-4">
        <div
          id="pipe-container"
          class="flex relative flex-shrink-0 justify-center items-center shadow-lg"
          style="width: 128px; height: 128px; border-radius: 0.75rem; background: #f0f9ff; border: 2.5px solid #38bdf8; opacity: 0; transform: scale(0.7); transition: all 0.7s cubic-bezier(0.4,0,0.2,1);"
        >
          <div class="flex flex-col justify-center items-center w-full h-full">
            <iconify-icon
              icon="mdi:pipe"
              class="text-sky-500"
              style="font-size:96px;"
            ></iconify-icon>
            <div class="mt-2 text-lg font-bold text-sky-700">管件</div>
          </div>
        </div>
        <div
          id="pipe-label"
          class="px-3 py-1 text-sm font-semibold text-sky-700 bg-sky-100 rounded-full border border-sky-300"
          style="opacity: 0;"
        >
          贴码出厂
        </div>
      </div>

      <div class="flex flex-col flex-1 items-center space-y-4">
        <div
          id="db-icon-container"
          class="flex relative flex-shrink-0 justify-center items-center shadow-lg"
          style="width: 128px; height: 128px; border-radius: 0.75rem; background: #f0fdf4; border: 2.5px solid #4ade80;"
        >
          <div class="flex flex-col justify-center items-center w-full h-full">
            <iconify-icon
              icon="mdi:database"
              class="text-green-500"
              style="font-size:96px;"
            ></iconify-icon>
            <div class="mt-2 text-lg font-bold text-green-700">数据库</div>
          </div>
        </div>
        <div
          id="db-label"
          class="px-3 py-1 text-sm font-semibold text-green-700 bg-green-100 rounded-full border border-green-300"
          style="opacity: 0;"
        >
          数据入库
        </div>
      </div>
    `
  }

  firstUpdated() {
    this.initializeCanvases()
  }

  updated(changedProperties) {
    if (changedProperties.has('currentStepIndex')) {
      this.initializeCanvases()
    }
  }

  initializeCanvases() {
    this.safeRequestAnimationFrame(() => {
      if (this.processData[this.currentStepIndex]?.type === 'scan') {
        this.initScanAcceptanceCanvas()
      }
      if (this.processData[this.currentStepIndex]?.title === '源头赋码') {
        this.initSourceQRCanvas()
      }
    })
  }

  initScanAcceptanceCanvas() {
    const canvas = this.querySelector('#scan-qr-canvas')
    const scanCanvas = this.querySelector('#scan-line-canvas')
    if (!canvas || !scanCanvas) return

    const ctx = canvas.getContext('2d')
    const scanCtx = scanCanvas.getContext('2d')

    this.drawQRCode(ctx, canvas.width, canvas.height)
    this.scanQrImageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    this.animateScanLine(scanCtx, scanCanvas.width, scanCanvas.height)
  }

  initSourceQRCanvas() {
    const canvas = this.querySelector('#qr-canvas-source')
    const scanbarCanvas = this.querySelector('#scanbar-canvas')
    if (!canvas || !scanbarCanvas) return

    const ctx = canvas.getContext('2d')
    const scanbarCtx = scanbarCanvas.getContext('2d')

    this.drawQRCode(ctx, canvas.width, canvas.height)
    this.qrImageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    this.animateScanbar(scanbarCtx, scanbarCanvas.width, scanbarCanvas.height)
  }

  drawQRCode(ctx, width, height) {
    const size = 12
    const cell = width / size
    ctx.clearRect(0, 0, width, height)
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        ctx.fillStyle = Math.random() > 0.6 ? '#222' : '#fff'
        ctx.fillRect(i * cell, j * cell, cell, cell)
      }
    }
  }

  animateScanLine(ctx, width, height) {
    let scanY = 0
    const animate = () => {
      if (!this.isConnected) return

      ctx.clearRect(0, 0, width, height)
      const grad = ctx.createLinearGradient(0, scanY, 0, scanY + 12)
      grad.addColorStop(0, 'transparent')
      grad.addColorStop(0.5, '#3b82f6')
      grad.addColorStop(1, 'transparent')
      ctx.fillStyle = grad
      ctx.fillRect(0, scanY, width, 12)
      scanY += 2
      if (scanY > height) scanY = 0
      this.safeRequestAnimationFrame(animate)
    }
    animate()
  }

  animateScanbar(ctx, width, height) {
    let scanY = 0
    const animate = () => {
      if (!this.isConnected) return

      ctx.clearRect(0, 0, width, height)
      const grad = ctx.createLinearGradient(0, scanY, 0, scanY + 12)
      grad.addColorStop(0, 'transparent')
      grad.addColorStop(0.5, '#3b82f6')
      grad.addColorStop(1, 'transparent')
      ctx.fillStyle = grad
      ctx.fillRect(0, scanY, width, 12)
      scanY += 2
      if (scanY > height) scanY = 0
      this.safeRequestAnimationFrame(animate)
    }
    animate()
  }

  handleScanSimulateClick(e) {
    const btn = e.target
    btn.disabled = true

    const container = this.querySelector('#scan-qr-container')
    const photoContainer = this.querySelector('#photo-container')
    const photoLabel = this.querySelector('#photo-label')
    const scanDbLabel = this.querySelector('#scan-db-label')
    const scanAcceptanceRow = this.querySelector('#scan-acceptance-row')

    const scanFlash = document.createElement('div')
    scanFlash.className =
      'absolute inset-0 bg-blue-300 rounded opacity-20 animate-ping'
    container.appendChild(scanFlash)

    gsap.to(scanFlash, {
      opacity: 0,
      duration: 0.6,
      onComplete: () => scanFlash.remove(),
    })

    this.createScanPhotoEffect(
      container,
      photoContainer,
      photoLabel,
      scanDbLabel,
      scanAcceptanceRow
    )
  }

  createScanPhotoEffect(
    container,
    photoContainer,
    photoLabel,
    scanDbLabel,
    scanAcceptanceRow
  ) {
    gsap.delayedCall(0.8, () => {
      // 显示照片元素
      gsap.to(photoContainer, {
        opacity: 1,
        scale: 1,
        duration: 0.7,
        ease: 'power2.out',
        onComplete: () => {
          // 创建拍照闪光效果
          const photoFlash = document.createElement('div')
          photoFlash.className = 'absolute inset-0 bg-white rounded'
          photoFlash.style.opacity = '0'
          photoContainer.appendChild(photoFlash)

          // 强烈的闪光效果
          gsap.to(photoFlash, {
            opacity: 0.95,
            duration: 0.15,
            ease: 'power2.out',
            onComplete: () => {
              gsap.to(photoFlash, {
                opacity: 0,
                duration: 0.25,
                ease: 'power2.in',
                onComplete: () => {
                  photoFlash.remove()

                  // 转换为照片图标
                  const photoIcon = photoContainer.querySelector('iconify-icon')
                  const photoText = photoContainer.querySelector('div')

                  photoIcon.setAttribute('icon', 'mdi:image')
                  photoIcon.style.color = '#ea580c'
                  photoText.textContent = '照片'
                  photoText.style.color = '#ea580c'
                  photoContainer.style.borderColor = '#ea580c'
                  photoContainer.style.background = '#fff7ed'

                  gsap.to(photoLabel, {
                    opacity: 1,
                    duration: 0.5,
                    ease: 'power1.out',
                  })

                  // 显示GPS和水印元素
                  this.showGpsAndWatermarkElements(
                    container,
                    photoContainer,
                    scanDbLabel,
                    scanAcceptanceRow
                  )
                },
              })
            },
          })
        },
      })
    })
  }

  showGpsAndWatermarkElements(
    container,
    photoContainer,
    scanDbLabel,
    scanAcceptanceRow
  ) {
    const gpsContainer = this.querySelector('#gps-container')
    const gpsLabel = this.querySelector('#gps-label')
    const watermarkContainer = this.querySelector('#watermark-container')
    const watermarkLabel = this.querySelector('#watermark-label')

    // 显示GPS元素
    gsap.delayedCall(0.5, () => {
      gsap.to(gpsContainer, {
        opacity: 1,
        scale: 1,
        duration: 0.7,
        ease: 'power2.out',
        onComplete: () => {
          gsap.to(gpsLabel, {
            opacity: 1,
            duration: 0.5,
            ease: 'power1.out',
          })
        },
      })
    })

    // 显示水印元素
    gsap.delayedCall(1.0, () => {
      gsap.to(watermarkContainer, {
        opacity: 1,
        scale: 1,
        duration: 0.7,
        ease: 'power2.out',
        onComplete: () => {
          gsap.to(watermarkLabel, {
            opacity: 1,
            duration: 0.5,
            ease: 'power1.out',
          })

          // 启动飞入动画
          this.createScanFlyToDatabase(
            container,
            photoContainer,
            gpsContainer,
            watermarkContainer,
            scanDbLabel,
            scanAcceptanceRow
          )
        },
      })
    })
  }

  createScanFlyToDatabase(
    container,
    photoContainer,
    gpsContainer,
    watermarkContainer,
    scanDbLabel,
    scanAcceptanceRow
  ) {
    gsap.delayedCall(1.5, () => {
      // 创建二维码克隆（这个是唯一需要克隆的元素）
      const qrClone = container.cloneNode(true)
      Object.assign(qrClone.style, {
        position: 'absolute',
        left: '0',
        top: '0',
        zIndex: '50',
      })
      const cloneCanvas = qrClone.querySelector('canvas')
      if (cloneCanvas && this.scanQrImageData) {
        const cloneCtx = cloneCanvas.getContext('2d')
        cloneCtx.putImageData(this.scanQrImageData, 0, 0)
      }
      scanAcceptanceRow.appendChild(qrClone)

      const dbContainer = this.querySelector('#scan-db-container')
      const dbRect = dbContainer.getBoundingClientRect()
      const containerRect = container.getBoundingClientRect()
      const photoRect = photoContainer.getBoundingClientRect()
      const gpsRect = gpsContainer.getBoundingClientRect()
      const watermarkRect = watermarkContainer.getBoundingClientRect()

      // 计算所有元素到数据库的目标位置
      const dbCenterX = dbRect.left + dbRect.width / 2
      const dbCenterY = dbRect.top + dbRect.height / 2

      // 二维码目标位置
      const qrToDbLeft =
        dbCenterX - containerRect.left - qrClone.clientWidth / 2
      const qrToDbTop =
        dbCenterY - containerRect.top - qrClone.clientHeight / 2 - 25

      // 照片目标位置
      const photoToDbLeft =
        dbCenterX - photoRect.left - photoContainer.clientWidth / 2 - 25
      const photoToDbTop =
        dbCenterY - photoRect.top - photoContainer.clientHeight / 2

      // GPS目标位置
      const gpsToDbLeft =
        dbCenterX - gpsRect.left - gpsContainer.clientWidth / 2 + 25
      const gpsToDbTop = dbCenterY - gpsRect.top - gpsContainer.clientHeight / 2

      // 水印目标位置
      const watermarkToDbLeft =
        dbCenterX - watermarkRect.left - watermarkContainer.clientWidth / 2
      const watermarkToDbTop =
        dbCenterY - watermarkRect.top - watermarkContainer.clientHeight / 2 + 25

      // 同时移动所有元素到数据库
      gsap.to(qrClone, {
        x: qrToDbLeft,
        y: qrToDbTop,
        scale: 0.5,
        duration: 1.2,
        ease: 'power2.inOut',
        onComplete: () => qrClone.remove(),
      })

      gsap.to(photoContainer, {
        x: photoToDbLeft,
        y: photoToDbTop,
        scale: 0.5,
        duration: 1.2,
        ease: 'power2.inOut',
      })

      gsap.to(gpsContainer, {
        x: gpsToDbLeft,
        y: gpsToDbTop,
        scale: 0.5,
        duration: 1.2,
        delay: 0.1,
        ease: 'power2.inOut',
      })

      gsap.to(watermarkContainer, {
        x: watermarkToDbLeft,
        y: watermarkToDbTop,
        scale: 0.5,
        duration: 1.2,
        delay: 0.2,
        ease: 'power2.inOut',
        onComplete: () => {
          // 所有元素都移动完成后，显示成功标记
          const checkIcon = document.createElement('span')
          checkIcon.innerHTML =
            '<iconify-icon icon="mdi:check-circle" style="color:#22c55e;font-size:2.5rem;"></iconify-icon>'
          Object.assign(checkIcon.style, {
            position: 'absolute',
            right: '-18px',
            bottom: '8px',
            zIndex: '60',
            opacity: '0',
          })
          dbContainer.appendChild(checkIcon)
          gsap.to(checkIcon, { opacity: 1, duration: 0.5 })

          gsap.to(scanDbLabel, {
            opacity: 1,
            duration: 0.5,
            ease: 'power1.out',
          })
        },
      })

      // 在飞入动画结束前1秒开始显示+1动画效果
      gsap.delayedCall(0.4, () => {
        this.createPlusOneAnimation(dbContainer)
      })
    })
  }

  createPlusOneAnimation(dbContainer) {
    // 创建+1文本元素
    const plusOneElement = document.createElement('div')
    plusOneElement.textContent = '+1'
    Object.assign(plusOneElement.style, {
      position: 'absolute',
      left: '50%',
      top: '0px',
      transform: 'translateX(-50%)',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#22c55e',
      opacity: '0',
      zIndex: '70',
      pointerEvents: 'none',
    })
    dbContainer.appendChild(plusOneElement)

    // 动画序列：淡入 -> 向上浮动 -> 停留 -> 淡出
    const timeline = gsap.timeline()

    timeline
      .to(plusOneElement, {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out',
      })
      .to(
        plusOneElement,
        {
          y: -20,
          duration: 0.4,
          ease: 'power1.out',
        },
        '<'
      )
      .to(plusOneElement, {
        // 停留0.6秒
        duration: 0.6,
      })
      .to(plusOneElement, {
        opacity: 0,
        duration: 0.4,
        ease: 'power1.in',
        onComplete: () => plusOneElement.remove(),
      })
  }

  handleSimulateClick(e) {
    const btn = e.target
    btn.disabled = true

    const container = this.querySelector('#custom-qr-container')
    const pipeContainer = this.querySelector('#pipe-container')
    const pipeLabel = this.querySelector('#pipe-label')
    const dbLabel = this.querySelector('#db-label')
    const qrDbRow = this.querySelector('#qr-db-row')

    const scanFlash = document.createElement('div')
    scanFlash.className =
      'absolute inset-0 bg-blue-300 rounded opacity-20 animate-ping'
    container.appendChild(scanFlash)

    gsap.to(scanFlash, {
      opacity: 0,
      duration: 0.6,
      onComplete: () => scanFlash.remove(),
    })

    this.createFlyingBlocks(container, qrDbRow)
    this.createQRClones(container, pipeContainer, pipeLabel, dbLabel, qrDbRow)
  }

  createFlyingBlocks(container, qrDbRow) {
    const blockColors = [
      {
        border: '2.5px solid #2563eb',
        bg: '#dbeafe',
        text: '#1e40af',
        shadow: '0 4px 16px 0 rgba(37,99,235,0.10)',
      },
      {
        border: '2.5px solid #22c55e',
        bg: '#bbf7d0',
        text: '#166534',
        shadow: '0 4px 16px 0 rgba(34,197,94,0.10)',
      },
      {
        border: '2.5px solid #eab308',
        bg: '#fef9c3',
        text: '#92400e',
        shadow: '0 4px 16px 0 rgba(234,179,8,0.10)',
      },
      {
        border: '2.5px solid #ec4899',
        bg: '#fbcfe8',
        text: '#831843',
        shadow: '0 4px 16px 0 rgba(236,72,153,0.10)',
      },
    ]
    const dataBlocks = [
      { label: '材料信息', ...blockColors[0] },
      { label: '质检报告', ...blockColors[1] },
      { label: '厂家信息', ...blockColors[2] },
      { label: '其他信息', ...blockColors[3] },
    ]

    const flyBlocks = []
    const detailRect = qrDbRow.getBoundingClientRect()
    const qrRect = container.getBoundingClientRect()
    const offsetLeft =
      qrRect.left + qrRect.width / 2 - (detailRect.left + detailRect.width / 2)
    const offsetTop =
      qrRect.top + qrRect.height / 2 - (detailRect.top + detailRect.height / 2)

    const radius = 48
    const baseAngle = -Math.PI / 2

    dataBlocks.forEach((block, i) => {
      const blockDiv = document.createElement('div')
      blockDiv.textContent = block.label
      Object.assign(blockDiv.style, {
        position: 'absolute',
        left: '50%',
        top: '50%',
        width: '128px',
        height: '48px',
        lineHeight: '48px',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '1.18rem',
        borderRadius: '0.75rem',
        border: block.border,
        background: block.bg,
        color: block.text,
        boxShadow: block.shadow,
        opacity: '0',
        zIndex: (30 + i).toString(),
      })
      qrDbRow.appendChild(blockDiv)
      flyBlocks.push(blockDiv)

      const angle = baseAngle + (i * 2 * Math.PI) / dataBlocks.length
      const x0 = Math.cos(angle) * radius
      const y0 = Math.sin(angle) * radius

      gsap.set(blockDiv, {
        opacity: 0,
        scale: 1.2,
        xPercent: -50,
        yPercent: -50,
        x: x0,
        y: y0,
      })

      gsap.to(blockDiv, {
        opacity: 1,
        scale: 1.2,
        delay: i * 0.7 + 0.4,
        duration: 0.6,
        onComplete: () => {
          gsap.to(blockDiv, {
            x: offsetLeft,
            y: offsetTop,
            scale: 0.95,
            duration: 1.2,
            delay: 0.6,
            ease: 'power2.inOut',
          })
        },
      })
    })

    gsap.delayedCall(dataBlocks.length * 0.7 + 1.8, () => {
      flyBlocks.forEach((blockDiv, i) => {
        gsap.to(blockDiv, {
          opacity: 0,
          scale: 0.8,
          duration: 0.5,
          delay: i * 0.12,
          onComplete: () => blockDiv.remove(),
        })
      })
    })
  }

  createQRClones(container, pipeContainer, pipeLabel, dbLabel, qrDbRow) {
    gsap.delayedCall(4 * 0.7 + 2.2, () => {
      gsap.to(pipeContainer, {
        opacity: 1,
        scale: 1,
        duration: 0.7,
        ease: 'power2.out',
      })

      const docCloneDb = document.createElement('div')
      Object.assign(docCloneDb.style, {
        position: 'absolute',
        left: '0',
        top: '0',
        zIndex: '50',
        width: '112px',
        height: '112px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#fff',
        borderRadius: '0.75rem',
        boxShadow: '0 4px 16px 0 rgba(37,99,235,0.10)',
        border: '2.5px solid #2563eb',
      })
      docCloneDb.innerHTML = `
        <iconify-icon icon="mdi:file-document-outline" style="font-size:3.5rem;color:#2563eb;"></iconify-icon>
        <div style="margin-top:8px;font-weight:bold;font-size:1.1rem;color:#2563eb;">资料</div>
      `
      qrDbRow.appendChild(docCloneDb)

      const dbContainer = this.querySelector('#db-icon-container')
      const dbRect = dbContainer.getBoundingClientRect()
      const qrRectDb = container.getBoundingClientRect()
      const offsetDbLeft = dbRect.left + dbRect.width / 2 - qrRectDb.left
      const offsetDbTop =
        dbRect.top +
        dbRect.height / 2 -
        qrRectDb.top -
        docCloneDb.clientHeight / 2

      gsap.to(docCloneDb, {
        x: offsetDbLeft,
        y: offsetDbTop,
        duration: 1.1,
        ease: 'power2.inOut',
        onComplete: () => {
          docCloneDb.remove()
          gsap.to(dbLabel, {
            opacity: 1,
            duration: 0.5,
            ease: 'power1.out',
          })
        },
      })

      const qrClonePipe = container.cloneNode(true)
      Object.assign(qrClonePipe.style, {
        position: 'absolute',
        left: '0',
        top: '0',
        zIndex: '51',
      })
      const cloneCanvasPipe = qrClonePipe.querySelector('canvas')
      if (cloneCanvasPipe && this.qrImageData) {
        const cloneCtxPipe = cloneCanvasPipe.getContext('2d')
        cloneCtxPipe.putImageData(this.qrImageData, 0, 0)
      }
      qrDbRow.appendChild(qrClonePipe)

      const pipeRect = pipeContainer.getBoundingClientRect()
      const qrRectPipe = container.getBoundingClientRect()
      const offsetPipeLeft =
        pipeRect.left +
        pipeRect.width / 2 -
        qrRectPipe.left -
        qrClonePipe.clientWidth / 2
      const offsetPipeTop =
        pipeRect.top +
        pipeRect.height / 2 -
        qrRectPipe.top -
        qrClonePipe.clientHeight / 2

      gsap.to(qrClonePipe, {
        x: offsetPipeLeft,
        y: offsetPipeTop,
        scale: 0.7,
        duration: 1.8,
        ease: 'power2.inOut',
        onComplete: () => {
          qrClonePipe.remove()
          const checkIcon = document.createElement('span')
          checkIcon.innerHTML =
            '<iconify-icon icon="mdi:check-circle" style="color:#22c55e;font-size:2.5rem;"></iconify-icon>'
          Object.assign(checkIcon.style, {
            position: 'absolute',
            right: '-18px',
            bottom: '8px',
            zIndex: '60',
            opacity: '0',
          })
          pipeContainer.appendChild(checkIcon)
          gsap.to(checkIcon, { opacity: 1, duration: 0.5 })

          gsap.to(pipeLabel, {
            opacity: 1,
            duration: 0.5,
            ease: 'power1.out',
          })
        },
      })
    })
  }

  replayStep() {
    this.currentStepIndex = this.currentStepIndex
    this.requestUpdate()
  }

  prevStep() {
    if (this.currentStepIndex > 0) {
      this.currentStepIndex--
    }
  }

  nextStep() {
    if (this.isTimelineAnimating) return

    // 特殊处理：从扫码验收(索引1)到扫码出入库(索引2)时触发分裂合并动画
    if (this.currentStepIndex === 1 && !this.isMerged) {
      this.performTimelineMergeAnimation()
      return
    }

    const maxIndex = this.isMerged
      ? this.mergedProcessData.length - 1
      : this.processData.length - 1
    if (this.currentStepIndex < maxIndex) {
      this.currentStepIndex++
    }
  }

  performTimelineMergeAnimation() {
    this.isTimelineAnimating = true

    // 第一步：显示分裂节点
    this.showSplitAnimation()
  }

  showSplitAnimation() {
    // 获取原扫码出入库节点的位置
    const originalNode = this.querySelector('[data-step-index="2"]')
    const stepsContainer = this.querySelector('#flow-steps-container')

    if (!originalNode || !stepsContainer) return

    const originalRect = originalNode.getBoundingClientRect()
    const containerRect = stepsContainer.getBoundingClientRect()

    // 计算相对位置
    const relativeLeft = originalRect.left - containerRect.left
    const relativeTop = originalRect.top - containerRect.top

    // 设置分裂节点数据，初始位置与原节点相同
    this.splitNodesData = [
      {
        id: 'inbound',
        title: '入库',
        icon: 'mdi:database-import',
        left: relativeLeft,
        top: relativeTop,
        opacity: 0,
        scale: 0.8,
      },
      {
        id: 'outbound',
        title: '出库',
        icon: 'mdi:database-export',
        left: relativeLeft,
        top: relativeTop,
        opacity: 0,
        scale: 0.8,
      },
    ]
    this.showSplitNodes = true
    this.requestUpdate()

    // 等待DOM更新后执行动画
    this.updateComplete.then(() => {
      this.animateSplitNodes()
    })
  }

  animateSplitNodes() {
    // 获取原始出入库节点和分裂节点
    const originalNode = this.querySelector('[data-step-index="2"]')
    const inboundNode = this.querySelector('[data-split-id="inbound"]')
    const outboundNode = this.querySelector('[data-split-id="outbound"]')

    // 隐藏原节点
    gsap.to(originalNode, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        // 显示分裂节点
        gsap.to([inboundNode, outboundNode], {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          onComplete: () => {
            this.startMergeAnimation()
          },
        })
      },
    })
  }

  startMergeAnimation() {
    // 获取目标位置
    const scanNode = this.querySelector('[data-step-index="1"]')
    const installNode = this.querySelector('[data-step-index="3"]')
    const inboundNode = this.querySelector('[data-split-id="inbound"]')
    const outboundNode = this.querySelector('[data-split-id="outbound"]')
    const stepsContainer = this.querySelector('#flow-steps-container')

    const scanRect = scanNode.getBoundingClientRect()
    const installRect = installNode.getBoundingClientRect()
    const containerRect = stepsContainer.getBoundingClientRect()

    // 计算目标相对位置
    const scanTargetLeft = scanRect.left - containerRect.left
    const scanTargetTop = scanRect.top - containerRect.top
    const installTargetLeft = installRect.left - containerRect.left
    const installTargetTop = installRect.top - containerRect.top

    // 移动入库节点到验收节点位置
    gsap.to(inboundNode, {
      left: scanTargetLeft,
      top: scanTargetTop,
      duration: 1.0,
      ease: 'power2.inOut',
      onComplete: () => {
        this.completeMergeToScan()
      },
    })

    // 移动出库节点到安装节点位置
    gsap.to(outboundNode, {
      left: installTargetLeft,
      top: installTargetTop,
      duration: 1.0,
      delay: 0.2,
      ease: 'power2.inOut',
      onComplete: () => {
        this.completeMergeToInstall()
      },
    })
  }

  completeMergeToScan() {
    const scanNode = this.querySelector('[data-step-index="1"]')
    const inboundNode = this.querySelector('[data-split-id="inbound"]')

    // 入库节点淡出
    gsap.to(inboundNode, {
      opacity: 0,
      duration: 0.3,
    })

    // 验收节点更新为合并节点
    gsap.to(scanNode, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        gsap.to(scanNode, {
          opacity: 1,
          duration: 0.3,
        })
      },
    })
  }

  completeMergeToInstall() {
    const installNode = this.querySelector('[data-step-index="3"]')
    const outboundNode = this.querySelector('[data-split-id="outbound"]')

    // 出库节点淡出
    gsap.to(outboundNode, {
      opacity: 0,
      duration: 0.3,
    })

    // 安装节点更新为合并节点
    gsap.to(installNode, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        gsap.to(installNode, {
          opacity: 1,
          duration: 0.3,
          onComplete: () => {
            // 完成所有动画，更新状态
            this.finishMergeAnimation()
          },
        })
      },
    })
  }

  finishMergeAnimation() {
    this.isMerged = true
    this.showSplitNodes = false
    this.currentStepIndex = 1 // 设置到合并后的验收+入库节点
    this.isTimelineAnimating = false
    this.requestUpdate()
  }
}

customElements.define('process-flow-component', ProcessFlowComponent)
