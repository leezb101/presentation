import { html, css } from 'lit'
import { BaseComponent } from './base-component.js'
import { gsap } from 'gsap'

export class ProcessFlowComponent extends BaseComponent {
  static properties = {
    currentStepIndex: { type: Number }
  }

  constructor() {
    super()
    this.currentStepIndex = 0
    this.processData = [
      {
        title: '源头赋码',
        icon: 'mdi:cube-outline',
        details: '<strong>供应商：</strong>在材料出厂前，按集团标准生成并粘贴唯一的二维码，同时将材料的质检报告等电子文件上传至系统，与二维码进行绑定。',
      },
      {
        title: '扫码验收',
        icon: 'mdi:qrcode-scan',
        type: 'scan',
        details: '<strong>验收小组：</strong>材料到场后，通过App扫描二维码核对信息，并拍摄带水印的验收照片，在线提交验收结论。',
      },
      {
        title: '扫码出入库',
        icon: 'mdi:login-variant',
        details: '<strong>库管员：</strong>通过扫码办理材料入库、领用，系统自动更新库存台账，实时记录库位、领用人、用途等信息。',
      },
      {
        title: '扫码安装',
        icon: 'mdi:tools',
        details: '<strong>施工班组：</strong>在材料安装到具体部位后再次扫码，记录安装位置、操作人员，并上传带水印的完工照片。',
      },
      {
        title: '扫码追溯',
        icon: 'mdi:history',
        details: '<strong>管理/监理：</strong>出现质量问题或日常巡检时，扫描问题材料的二维码，即可追溯其全部信息。',
      },
    ]
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
        
        <div class="relative w-full overflow-x-auto pb-4">
          <div class="relative min-w-[700px] md:min-w-0 flex justify-between items-center">
            <div
              id="progress-bar-container"
              class="absolute top-1/2 left-0 right-0 h-1 bg-blue-100 transform -translate-y-1/2 z-0"
            >
              <div
                id="progress-bar-fill"
                class="h-full bg-blue-600 transition-all duration-500"
                style="width: ${(this.currentStepIndex / (this.processData.length - 1)) * 100}%"
              ></div>
            </div>
            <div id="flow-steps-container" class="relative flex justify-between w-full">
              ${this.renderFlowSteps()}
            </div>
          </div>
        </div>
        
        <div
          id="process-details"
          class="mt-8 bg-white p-8 rounded-xl shadow-lg transition-all duration-500 min-h-[250px] flex items-center justify-center"
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
            ?disabled=${this.currentStepIndex === this.processData.length - 1}
            @click=${this.nextStep}
          >
            下一步
          </button>
        </div>
      </div>
    `
  }

  renderFlowSteps() {
    return this.processData.map((step, index) => html`
      <div class="flex relative z-10 flex-col items-center p-2 flow-step ${index < this.currentStepIndex ? 'visited' : ''} ${index === this.currentStepIndex ? 'active' : ''}">
        <div class="flex justify-center items-center w-16 h-16 text-3xl bg-white rounded-full border-4 border-gray-300 shadow-md transition-all duration-300 flow-step-icon">
          <iconify-icon icon="${step.icon}" class="text-4xl"></iconify-icon>
        </div>
        <span class="mt-2 text-sm font-semibold text-center">${step.title}</span>
      </div>
    `)
  }

  renderProcessDetails() {
    const stepData = this.processData[this.currentStepIndex]
    if (!stepData) return html``

    if (stepData.type === 'scan') {
      return html`
        <div class="flex flex-col gap-8 justify-center items-center w-full md:flex-row" style="position: relative; min-height: 220px;">
          <button
            title="重播本步骤"
            class="flex justify-center items-center w-10 h-10 bg-white rounded-full border border-gray-200 shadow transition hover:bg-blue-50"
            style="position: absolute; left: 10px; bottom: 10px; z-index: 100;"
            @click=${this.replayStep}
          >
            <iconify-icon icon="mdi:refresh" style="font-size:1.5rem;"></iconify-icon>
          </button>
          
          <div class="flex-shrink-0">
            <div style="position: relative; width: 128px; height: 128px; border-radius: 0.5rem; overflow: hidden; border: 2px solid #e5e7eb;">
              <canvas
                id="scan-qr-canvas"
                class="p-1 w-full h-full bg-black"
                style="position: relative; z-index: 0;"
                width="128"
                height="128"
              ></canvas>
              <canvas
                id="scan-line-canvas"
                class="absolute top-0 left-0 w-full h-full"
                style="z-index: 1; pointer-events: none;"
                width="128"
                height="128"
              ></canvas>
            </div>
          </div>
          
          <div class="text-left text-gray-700">
            ${stepData.details}
          </div>
        </div>
      `
    } else if (stepData.title === '源头赋码') {
      return html`
        <div class="flex flex-col space-y-6 w-full" style="position: relative; min-height: 220px;">
          <button
            title="重播本步骤"
            class="flex justify-center items-center w-10 h-10 bg-white rounded-full border border-gray-200 shadow transition hover:bg-blue-50"
            style="position: absolute; left: 10px; bottom: 10px; z-index: 100;"
            @click=${this.replayStep}
          >
            <iconify-icon icon="mdi:refresh" style="font-size:1.5rem;"></iconify-icon>
          </button>
          
          <div class="flex flex-row justify-start items-center text-gray-700">
            <div class="text-6xl text-blue-500">
              <iconify-icon icon="${stepData.icon}"></iconify-icon>
            </div>
            <div class="text-gray-700">
              ${stepData.details}
            </div>
          </div>
          
          <div id="qr-db-row" class="flex relative gap-6 justify-between items-start w-full" style="min-height: 180px;">
            ${this.renderSourceCodingSection()}
          </div>
        </div>
      `
    } else {
      return html`
        <div class="flex items-start space-x-6 w-full" style="position: relative; min-height: 220px;">
          <button
            title="重播本步骤"
            class="flex justify-center items-center w-10 h-10 bg-white rounded-full border border-gray-200 shadow transition hover:bg-blue-50"
            style="position: absolute; left: 10px; bottom: 10px; z-index: 100;"
            @click=${this.replayStep}
          >
            <iconify-icon icon="mdi:refresh" style="font-size:1.5rem;"></iconify-icon>
          </button>
          
          <div class="text-6xl text-blue-500">
            <iconify-icon icon="${stepData.icon}"></iconify-icon>
          </div>
          <div class="text-gray-700">
            ${stepData.details}
          </div>
        </div>
      `
    }
  }

  renderSourceCodingSection() {
    return html`
      <div class="flex flex-col flex-1 items-center space-y-4">
        <div id="custom-qr-container" class="flex flex-shrink-0 justify-center items-center bg-black shadow-lg" 
             style="position: relative; width: 128px; height: 128px; border-radius: 0.75rem; overflow: hidden; border: 2.5px solid #2563eb;">
          <canvas id="qr-canvas-source" width="112" height="112" 
                  style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: 1;"></canvas>
          <canvas id="scanbar-canvas" width="112" height="112" 
                  style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: 2; pointer-events: none;"></canvas>
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
        <div id="pipe-container" class="flex relative flex-shrink-0 justify-center items-center shadow-lg"
             style="width: 128px; height: 128px; border-radius: 0.75rem; background: #f0f9ff; border: 2.5px solid #38bdf8; opacity: 0; transform: scale(0.7); transition: all 0.7s cubic-bezier(0.4,0,0.2,1);">
          <div class="flex flex-col justify-center items-center w-full h-full">
            <iconify-icon icon="mdi:pipe" class="text-sky-500" style="font-size:96px;"></iconify-icon>
            <div class="mt-2 text-lg font-bold text-sky-700">管件</div>
          </div>
        </div>
        <div id="pipe-label" class="px-3 py-1 text-sm font-semibold text-sky-700 bg-sky-100 rounded-full border border-sky-300" style="opacity: 0;">
          贴码出厂
        </div>
      </div>
      
      <div class="flex flex-col flex-1 items-center space-y-4">
        <div id="db-icon-container" class="flex relative flex-shrink-0 justify-center items-center shadow-lg"
             style="width: 128px; height: 128px; border-radius: 0.75rem; background: #f0fdf4; border: 2.5px solid #4ade80;">
          <div class="flex flex-col justify-center items-center w-full h-full">
            <iconify-icon icon="mdi:database" class="text-green-500" style="font-size:96px;"></iconify-icon>
            <div class="mt-2 text-lg font-bold text-green-700">数据库</div>
          </div>
        </div>
        <div id="db-label" class="px-3 py-1 text-sm font-semibold text-green-700 bg-green-100 rounded-full border border-green-300" style="opacity: 0;">
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
        this.initScanQRCanvas()
      }
      if (this.processData[this.currentStepIndex]?.title === '源头赋码') {
        this.initSourceQRCanvas()
      }
    })
  }

  initScanQRCanvas() {
    const canvas = this.querySelector('#scan-qr-canvas')
    const scanCanvas = this.querySelector('#scan-line-canvas')
    if (!canvas || !scanCanvas) return

    const ctx = canvas.getContext('2d')
    const scanCtx = scanCanvas.getContext('2d')
    
    this.drawQRCode(ctx, canvas.width, canvas.height)
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

  handleSimulateClick(e) {
    const btn = e.target
    btn.disabled = true

    const container = this.querySelector('#custom-qr-container')
    const pipeContainer = this.querySelector('#pipe-container')
    const pipeLabel = this.querySelector('#pipe-label')
    const dbLabel = this.querySelector('#db-label')
    const qrDbRow = this.querySelector('#qr-db-row')

    const scanFlash = document.createElement('div')
    scanFlash.className = 'absolute inset-0 bg-blue-300 rounded opacity-20 animate-ping'
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
      { border: '2.5px solid #2563eb', bg: '#dbeafe', text: '#1e40af', shadow: '0 4px 16px 0 rgba(37,99,235,0.10)' },
      { border: '2.5px solid #22c55e', bg: '#bbf7d0', text: '#166534', shadow: '0 4px 16px 0 rgba(34,197,94,0.10)' },
      { border: '2.5px solid #eab308', bg: '#fef9c3', text: '#92400e', shadow: '0 4px 16px 0 rgba(234,179,8,0.10)' },
      { border: '2.5px solid #ec4899', bg: '#fbcfe8', text: '#831843', shadow: '0 4px 16px 0 rgba(236,72,153,0.10)' },
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
    const offsetLeft = qrRect.left + qrRect.width / 2 - (detailRect.left + detailRect.width / 2)
    const offsetTop = qrRect.top + qrRect.height / 2 - (detailRect.top + detailRect.height / 2)

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
        zIndex: (30 + i).toString()
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
        border: '2.5px solid #2563eb'
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
      const offsetDbTop = dbRect.top + dbRect.height / 2 - qrRectDb.top - docCloneDb.clientHeight / 2

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
        zIndex: '51'
      })
      const cloneCanvasPipe = qrClonePipe.querySelector('canvas')
      if (cloneCanvasPipe && this.qrImageData) {
        const cloneCtxPipe = cloneCanvasPipe.getContext('2d')
        cloneCtxPipe.putImageData(this.qrImageData, 0, 0)
      }
      qrDbRow.appendChild(qrClonePipe)

      const pipeRect = pipeContainer.getBoundingClientRect()
      const qrRectPipe = container.getBoundingClientRect()
      const offsetPipeLeft = pipeRect.left + pipeRect.width / 2 - qrRectPipe.left - qrClonePipe.clientWidth / 2
      const offsetPipeTop = pipeRect.top + pipeRect.height / 2 - qrRectPipe.top - qrClonePipe.clientHeight / 2

      gsap.to(qrClonePipe, {
        x: offsetPipeLeft,
        y: offsetPipeTop,
        scale: 0.7,
        duration: 1.8,
        ease: 'power2.inOut',
        onComplete: () => {
          qrClonePipe.remove()
          const checkIcon = document.createElement('span')
          checkIcon.innerHTML = '<iconify-icon icon="mdi:check-circle" style="color:#22c55e;font-size:2.5rem;"></iconify-icon>'
          Object.assign(checkIcon.style, {
            position: 'absolute',
            right: '-18px',
            bottom: '8px',
            zIndex: '60',
            opacity: '0'
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
    if (this.currentStepIndex < this.processData.length - 1) {
      this.currentStepIndex++
    }
  }
}

customElements.define('process-flow-component', ProcessFlowComponent)