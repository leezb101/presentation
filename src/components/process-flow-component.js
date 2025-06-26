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

    @unocss-placeholder;
  `

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
          '<strong>供应商：</strong>在材料出厂前，将厂家已有二维码与集团监管所需材料绑定，以备后续施工现场进场时由扫码同步集团数据库。',
      },
      {
        title: '扫码验收',
        icon: 'mdi:qrcode-scan',
        type: 'scan',
        details:
          '<strong>验收小组：</strong>材料到场后，通过App扫描二维码核对信息，并拍摄带水印的验收照片，在线提交验收结论。同时系统自动将厂家绑定信息同步入库。',
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
            class="bg-gray-200 cursor-pointer text-gray-700 font-bold py-2 px-6 rounded-lg hover:bg-gray-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
            ?disabled=${this.currentStepIndex === 0}
            @click=${this.prevStep}
          >
            上一步
          </button>
          <button
            id="next-step-btn"
            class="bg-blue-600 cursor-pointer text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
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
          class="flex relative z-10 flex-col items-center flow-step"
          data-step-index="${index}"
          style="padding: calc(0.5rem * var(--font-scale, 1)); ${index === 2 &&
          this.showSplitNodes
            ? 'opacity: 0;'
            : ''}"
        >
          <div
            class="flex justify-center items-center w-16 h-16 text-3xl rounded-full border-4 shadow-md transition-all duration-300 ${index <
            this.currentStepIndex
              ? 'bg-blue-100 border-blue-600 text-blue-600'
              : index === this.currentStepIndex
              ? 'bg-blue-600 border-blue-600 text-white transform -translate-y-1 scale-110 shadow-blue-500/30 shadow-xl'
              : 'bg-white border-gray-300 text-gray-600'}"
          >
            <iconify-icon
              icon="${step.icon}"
              class="text-4xl"
              style="font-size: calc(2.25rem * var(--font-scale, 1))"
            ></iconify-icon>
          </div>
          <span
            class="text-sm font-semibold text-center"
            style="margin-top: calc(0.5rem * var(--font-scale, 1))"
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
            class="flex absolute z-20 flex-col items-center flow-step"
            data-split-id="${nodeData.id}"
            style="left: ${nodeData.left}px; top: ${nodeData.top}px; opacity: ${nodeData.opacity}; transform: scale(${nodeData.scale}); padding: calc(0.5rem * var(--font-scale, 1));"
          >
            <div
              class="flex justify-center items-center w-16 h-16 text-3xl bg-white rounded-full border-4 border-gray-300 shadow-md transition-all duration-300 flow-step-icon"
            >
              <iconify-icon
                icon="${nodeData.icon}"
                class="text-4xl"
                style="font-size: calc(2.25rem * var(--font-scale, 1))"
              ></iconify-icon>
            </div>
            <span
              class="text-sm font-semibold text-center"
              style="margin-top: calc(0.5rem * var(--font-scale, 1))"
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
    } else if (stepData.title === '扫码出库+安装') {
      return html`
        <div
          class="flex flex-col space-y-6 w-full h-full"
          style="position: relative;"
        >
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
            id="outbound-install-row"
            class="flex relative gap-6 justify-between items-start w-full flex-1"
            style="min-height: 240px;"
          >
            ${this.renderOutboundInstallSection()}
          </div>
        </div>
      `
    } else if (stepData.title === '扫码追溯') {
      return html`
        <div
          class="flex flex-col space-y-6 w-full h-full"
          style="position: relative;"
        >
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
            id="trace-query-row"
            class="flex relative gap-6 justify-between items-start w-full flex-1"
            style="min-height: 240px;"
          >
            ${this.renderTraceQuerySection()}
          </div>
        </div>
      `
    } else {
      return html`
        <div
          class="flex flex-col justify-center items-start w-full h-full"
          style="position: relative;"
        >
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
                  style="font-size:calc(64px * var(--font-scale, 1));"
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
                  style="font-size:calc(64px * var(--font-scale, 1));"
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
                  style="font-size:calc(64px * var(--font-scale, 1));"
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
              style="font-size:calc(96px * var(--font-scale, 1));"
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
              style="font-size:calc(96px * var(--font-scale, 1));"
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
              style="font-size:calc(96px * var(--font-scale, 1));"
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

  renderOutboundInstallSection() {
    return html`
      <!-- 左侧二维码+扫描动效 -->
      <div class="flex flex-col flex-1 items-center space-y-4">
        <div
          id="outbound-qr-container"
          class="flex flex-shrink-0 justify-center items-center bg-black shadow-lg"
          style="position: relative; width: 128px; height: 128px; border-radius: 0.75rem; overflow: hidden; border: 2.5px solid #2563eb;"
        >
          <canvas
            id="outbound-qr-canvas"
            width="112"
            height="112"
            style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: 1;"
          ></canvas>
          <canvas
            id="outbound-scan-line-canvas"
            width="112"
            height="112"
            style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: 2; pointer-events: none;"
          ></canvas>
        </div>
        <button
          id="outbound-simulate-btn"
          class="px-4 py-2 text-white bg-blue-500 rounded transition w-[128px] hover:bg-blue-600"
          @click=${this.handleOutboundSimulateClick}
        >
          扫码出库
        </button>
      </div>

      <!-- 中间数据库元素 -->
      <div class="flex flex-col flex-1 items-center space-y-4">
        <div
          id="outbound-db-container"
          class="flex relative flex-shrink-0 justify-center items-center shadow-lg"
          style="width: 128px; height: 128px; border-radius: 0.75rem; background: #f0fdf4; border: 2.5px solid #4ade80;"
        >
          <div class="flex flex-col justify-center items-center w-full h-full">
            <iconify-icon
              icon="mdi:database"
              class="text-green-500"
              style="font-size:calc(96px * var(--font-scale, 1));"
            ></iconify-icon>
            <div class="mt-2 text-lg font-bold text-green-700">数据库</div>
          </div>
        </div>
        <div
          id="outbound-db-label"
          class="px-3 py-1 text-sm font-semibold text-green-700 bg-green-100 rounded-full border border-green-300"
          style="opacity: 0;"
        >
          库存管理
        </div>
      </div>

      <!-- 右侧管件元素 -->
      <div class="flex flex-col flex-1 items-center space-y-4">
        <div
          id="install-pipe-container"
          class="flex relative flex-shrink-0 justify-center items-center shadow-lg"
          style="width: 128px; height: 128px; border-radius: 0.75rem; background: #f0f9ff; border: 2.5px solid #38bdf8; opacity: 0; transform: scale(0.7); transition: all 0.7s cubic-bezier(0.4,0,0.2,1);"
        >
          <div class="flex flex-col justify-center items-center w-full h-full">
            <iconify-icon
              icon="mdi:pipe"
              class="text-sky-500"
              style="font-size:calc(96px * var(--font-scale, 1));"
            ></iconify-icon>
            <div class="mt-2 text-lg font-bold text-sky-700">管件</div>
          </div>
        </div>
        <div
          id="install-pipe-label"
          class="px-3 py-1 text-sm font-semibold text-sky-700 bg-sky-100 rounded-full border border-sky-300"
          style="opacity: 0;"
        >
          待安装
        </div>
      </div>

      <!-- 三个子元素容器 -->
      <div
        id="install-elements-container"
        class="absolute"
        style="top: 200px; right: 50px; width: 300px; height: 100px; pointer-events: none;"
      >
        <!-- 安装信息元素 -->
        <div
          id="install-info-container"
          class="absolute flex flex-col items-center space-y-2"
          style="left: 0; top: 0; opacity: 0; transform: scale(0.7); transition: all 0.7s cubic-bezier(0.4,0,0.2,1);"
        >
          <div
            class="flex relative flex-shrink-0 justify-center items-center shadow-lg"
            style="width: 80px; height: 80px; border-radius: 0.75rem; background: #fef3c7; border: 2.5px solid #f59e0b;"
          >
            <div
              class="flex flex-col justify-center items-center w-full h-full"
            >
              <iconify-icon
                icon="mdi:information"
                class="text-amber-500"
                style="font-size:calc(48px * var(--font-scale, 1));"
              ></iconify-icon>
            </div>
          </div>
          <div
            class="px-2 py-1 text-xs font-semibold text-amber-700 bg-amber-100 rounded-full border border-amber-300"
          >
            安装信息
          </div>
        </div>

        <!-- 水印元素 -->
        <div
          id="install-watermark-container"
          class="absolute flex flex-col items-center space-y-2"
          style="left: 100px; top: 0; opacity: 0; transform: scale(0.7); transition: all 0.7s cubic-bezier(0.4,0,0.2,1);"
        >
          <div
            class="flex relative flex-shrink-0 justify-center items-center shadow-lg"
            style="width: 80px; height: 80px; border-radius: 0.75rem; background: #fefce8; border: 2.5px solid #eab308;"
          >
            <div
              class="flex flex-col justify-center items-center w-full h-full"
            >
              <iconify-icon
                icon="mdi:watermark"
                class="text-yellow-600"
                style="font-size:calc(48px * var(--font-scale, 1));"
              ></iconify-icon>
            </div>
          </div>
          <div
            class="px-2 py-1 text-xs font-semibold text-yellow-700 bg-yellow-100 rounded-full border border-yellow-300"
          >
            水印
          </div>
        </div>

        <!-- 照片元素 -->
        <div
          id="install-photo-container"
          class="absolute flex flex-col items-center space-y-2"
          style="left: 200px; top: 0; opacity: 0; transform: scale(0.7); transition: all 0.7s cubic-bezier(0.4,0,0.2,1);"
        >
          <div
            class="flex relative flex-shrink-0 justify-center items-center shadow-lg"
            style="width: 80px; height: 80px; border-radius: 0.75rem; background: #fff7ed; border: 2.5px solid #ea580c;"
          >
            <div
              class="flex flex-col justify-center items-center w-full h-full"
            >
              <iconify-icon
                icon="mdi:camera"
                class="text-orange-600"
                style="font-size:calc(48px * var(--font-scale, 1));"
              ></iconify-icon>
            </div>
          </div>
          <div
            class="px-2 py-1 text-xs font-semibold text-orange-700 bg-orange-100 rounded-full border border-orange-300"
          >
            照片
          </div>
        </div>
      </div>
    `
  }

  renderTraceQuerySection() {
    return html`
      <!-- 左侧二维码+扫码查询按钮 -->
      <div class="flex flex-col flex-1 items-center space-y-4">
        <div
          id="trace-qr-container"
          class="flex flex-shrink-0 justify-center items-center bg-black shadow-lg"
          style="position: relative; width: 128px; height: 128px; border-radius: 0.75rem; overflow: hidden; border: 2.5px solid #2563eb;"
        >
          <canvas
            id="trace-qr-canvas"
            width="112"
            height="112"
            style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: 1;"
          ></canvas>
          <canvas
            id="trace-scan-line-canvas"
            width="112"
            height="112"
            style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: 2; pointer-events: none;"
          ></canvas>
        </div>
        <button
          id="trace-query-btn"
          class="px-4 py-2 text-white bg-blue-500 rounded transition w-[128px] hover:bg-blue-600"
          @click=${this.handleTraceQueryClick}
        >
          扫码查询
        </button>
      </div>

      <!-- 中间数据库元素 -->
      <div class="flex flex-col flex-1 items-center space-y-4">
        <div
          id="trace-db-container"
          class="flex relative flex-shrink-0 justify-center items-center shadow-lg"
          style="width: 128px; height: 128px; border-radius: 0.75rem; background: #f0fdf4; border: 2.5px solid #4ade80;"
        >
          <div class="flex flex-col justify-center items-center w-full h-full">
            <iconify-icon
              icon="mdi:database"
              class="text-green-500"
              style="font-size:calc(96px * var(--font-scale, 1));"
            ></iconify-icon>
            <div class="mt-2 text-lg font-bold text-green-700">数据库</div>
          </div>
          <!-- Loading图标容器 -->
          <div
            id="trace-db-loading"
            class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-3"
            style="opacity: 0;"
          >
            <iconify-icon
              icon="mdi:loading"
              class="text-blue-500 animate-spin"
              style="font-size:calc(48px * var(--font-scale, 1))"
            ></iconify-icon>
          </div>
        </div>
        <div
          id="trace-db-label"
          class="px-3 py-1 text-sm font-semibold text-green-700 bg-green-100 rounded-full border border-green-300"
          style="opacity: 0;"
        >
          信息检索
        </div>
      </div>

      <!-- 右侧信息元素排列区域 -->
      <div
        class="flex flex-col flex-1 items-center space-y-4"
        id="trace-info-display"
      >
        <div class="text-sm font-semibold text-gray-600">追溯信息</div>
        <div
          id="trace-info-container"
          class="grid grid-cols-2 gap-3 w-full max-w-xs"
        >
          <!-- 信息元素将动态添加到这里 -->
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
      const currentStep = this.isMerged
        ? this.mergedProcessData[this.currentStepIndex]
        : this.processData[this.currentStepIndex]

      if (currentStep?.type === 'scan') {
        this.initScanAcceptanceCanvas()
      }
      if (currentStep?.title === '源头赋码') {
        this.initSourceQRCanvas()
      }
      if (currentStep?.title === '扫码出库+安装') {
        this.initOutboundInstallCanvas()
      }
      if (currentStep?.title === '扫码追溯') {
        this.initTraceQueryCanvas()
      }
    })
  }

  initScanAcceptanceCanvas() {
    const canvas = this.shadowRoot.querySelector('#scan-qr-canvas')
    const scanCanvas = this.shadowRoot.querySelector('#scan-line-canvas')
    if (!canvas || !scanCanvas) return

    const ctx = canvas.getContext('2d')
    const scanCtx = scanCanvas.getContext('2d')

    this.drawQRCode(ctx, canvas.width, canvas.height)
    this.scanQrImageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    this.animateScanLine(scanCtx, scanCanvas.width, scanCanvas.height)
  }

  initSourceQRCanvas() {
    const canvas = this.shadowRoot.querySelector('#qr-canvas-source')
    const scanbarCanvas = this.shadowRoot.querySelector('#scanbar-canvas')
    if (!canvas || !scanbarCanvas) return

    const ctx = canvas.getContext('2d')
    const scanbarCtx = scanbarCanvas.getContext('2d')

    this.drawQRCode(ctx, canvas.width, canvas.height)
    this.qrImageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    this.animateScanbar(scanbarCtx, scanbarCanvas.width, scanbarCanvas.height)
  }

  initOutboundInstallCanvas() {
    const canvas = this.shadowRoot.querySelector('#outbound-qr-canvas')
    const scanCanvas = this.shadowRoot.querySelector(
      '#outbound-scan-line-canvas'
    )
    if (!canvas || !scanCanvas) return

    const ctx = canvas.getContext('2d')
    const scanCtx = scanCanvas.getContext('2d')

    this.drawQRCode(ctx, canvas.width, canvas.height)
    this.outboundQrImageData = ctx.getImageData(
      0,
      0,
      canvas.width,
      canvas.height
    )
    this.animateOutboundScanLine(scanCtx, scanCanvas.width, scanCanvas.height)
  }

  initTraceQueryCanvas() {
    const canvas = this.shadowRoot.querySelector('#trace-qr-canvas')
    const scanCanvas = this.shadowRoot.querySelector('#trace-scan-line-canvas')
    if (!canvas || !scanCanvas) return

    const ctx = canvas.getContext('2d')
    const scanCtx = scanCanvas.getContext('2d')

    this.drawQRCode(ctx, canvas.width, canvas.height)
    this.traceQrImageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    this.animateTraceScanLine(scanCtx, scanCanvas.width, scanCanvas.height)
  }

  animateOutboundScanLine(ctx, width, height) {
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

  animateTraceScanLine(ctx, width, height) {
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

    const container = this.shadowRoot.querySelector('#scan-qr-container')
    const photoContainer = this.shadowRoot.querySelector('#photo-container')
    const photoLabel = this.shadowRoot.querySelector('#photo-label')
    const scanDbLabel = this.shadowRoot.querySelector('#scan-db-label')
    const scanAcceptanceRow = this.shadowRoot.querySelector(
      '#scan-acceptance-row'
    )

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
            duration: 0.85,
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
    const gpsContainer = this.shadowRoot.querySelector('#gps-container')
    const gpsLabel = this.shadowRoot.querySelector('#gps-label')
    const watermarkContainer = this.shadowRoot.querySelector(
      '#watermark-container'
    )
    const watermarkLabel = this.shadowRoot.querySelector('#watermark-label')

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

      const dbContainer = this.shadowRoot.querySelector('#scan-db-container')
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
            '<iconify-icon icon="mdi:check-circle" style="color:#22c55e;font-size:calc(2.5rem * var(--font-scale, 1));"></iconify-icon>'
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
          y: -30,
          duration: 0.4,
          ease: 'power1.out',
        },
        '<'
      )
      .to(plusOneElement, {
        // 停留0.6秒
        duration: 1,
      })
      .to(plusOneElement, {
        opacity: 0,
        duration: 0.6,
        ease: 'power1.in',
        onComplete: () => plusOneElement.remove(),
      })
  }

  handleSimulateClick(e) {
    const btn = e.target
    btn.disabled = true

    const container = this.shadowRoot.querySelector('#custom-qr-container')
    const pipeContainer = this.shadowRoot.querySelector('#pipe-container')
    const pipeLabel = this.shadowRoot.querySelector('#pipe-label')
    const dbLabel = this.shadowRoot.querySelector('#db-label')
    const qrDbRow = this.shadowRoot.querySelector('#qr-db-row')

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
        <iconify-icon icon="mdi:file-document-outline" style="font-size:calc(3.5rem * var(--font-scale, 1));color:#2563eb;"></iconify-icon>
        <div style="margin-top:8px;font-weight:bold;font-size:calc(1.1rem * var(--font-scale, 1));color:#2563eb;">资料</div>
      `
      qrDbRow.appendChild(docCloneDb)

      const dbContainer = this.shadowRoot.querySelector('#db-icon-container')
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
            '<iconify-icon icon="mdi:check-circle" style="color:#22c55e;font-size:calc(2.5rem * var(--font-scale, 1));"></iconify-icon>'
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

  handleOutboundSimulateClick(e) {
    const btn = e.target
    btn.disabled = true

    const container = this.shadowRoot.querySelector('#outbound-qr-container')
    const pipeContainer = this.shadowRoot.querySelector(
      '#install-pipe-container'
    )
    const pipeLabel = this.shadowRoot.querySelector('#install-pipe-label')
    const outboundInstallRow = this.shadowRoot.querySelector(
      '#outbound-install-row'
    )

    // 扫码闪光效果
    const scanFlash = document.createElement('div')
    scanFlash.className =
      'absolute inset-0 bg-blue-300 rounded opacity-20 animate-ping'
    container.appendChild(scanFlash)

    gsap.to(scanFlash, {
      opacity: 0,
      duration: 0.6,
      onComplete: () => scanFlash.remove(),
    })

    // 启动出库安装动画序列
    this.createOutboundInstallEffect(
      container,
      pipeContainer,
      pipeLabel,
      outboundInstallRow
    )
  }

  createOutboundInstallEffect(
    container,
    pipeContainer,
    pipeLabel,
    outboundInstallRow
  ) {
    // 步骤1: 显示管件元素
    gsap.delayedCall(0.8, () => {
      gsap.to(pipeContainer, {
        opacity: 1,
        scale: 1,
        duration: 0.7,
        ease: 'power2.out',
        onComplete: () => {
          gsap.to(pipeLabel, {
            opacity: 1,
            duration: 0.5,
            ease: 'power1.out',
          })

          // 步骤2: 从管件位置生成三个元素
          this.generateInstallElements()
        },
      })
    })
  }

  generateInstallElements() {
    const installInfoContainer = this.shadowRoot.querySelector(
      '#install-info-container'
    )
    const installWatermarkContainer = this.shadowRoot.querySelector(
      '#install-watermark-container'
    )
    const installPhotoContainer = this.shadowRoot.querySelector(
      '#install-photo-container'
    )

    // 依次显示三个元素
    gsap.delayedCall(0.5, () => {
      gsap.to(installInfoContainer, {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: 'back.out(1.7)',
      })
    })

    gsap.delayedCall(0.8, () => {
      gsap.to(installWatermarkContainer, {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: 'back.out(1.7)',
      })
    })

    gsap.delayedCall(1.1, () => {
      gsap.to(installPhotoContainer, {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: 'back.out(1.7)',
        onComplete: () => {
          // 步骤3: 启动飞入数据库动画
          this.createOutboundFlyToDatabase()
        },
      })
    })
  }

  createOutboundFlyToDatabase() {
    const container = this.shadowRoot.querySelector('#outbound-qr-container')
    const dbContainer = this.shadowRoot.querySelector('#outbound-db-container')
    const dbLabel = this.shadowRoot.querySelector('#outbound-db-label')
    const installInfoContainer = this.shadowRoot.querySelector(
      '#install-info-container'
    )
    const installWatermarkContainer = this.shadowRoot.querySelector(
      '#install-watermark-container'
    )
    const installPhotoContainer = this.shadowRoot.querySelector(
      '#install-photo-container'
    )
    const outboundInstallRow = this.shadowRoot.querySelector(
      '#outbound-install-row'
    )
    const pipeContainer = this.shadowRoot.querySelector(
      '#install-pipe-container'
    )

    gsap.delayedCall(1.0, () => {
      // 创建二维码副本
      const qrClone = container.cloneNode(true)
      Object.assign(qrClone.style, {
        position: 'absolute',
        left: '0',
        top: '0',
        zIndex: '50',
      })
      const cloneCanvas = qrClone.querySelector('canvas')
      if (cloneCanvas && this.outboundQrImageData) {
        const cloneCtx = cloneCanvas.getContext('2d')
        cloneCtx.putImageData(this.outboundQrImageData, 0, 0)
      }
      outboundInstallRow.appendChild(qrClone)

      // 计算目标位置
      const dbRect = dbContainer.getBoundingClientRect()
      const containerRect = container.getBoundingClientRect()
      const infoRect = installInfoContainer.getBoundingClientRect()
      const watermarkRect = installWatermarkContainer.getBoundingClientRect()
      const photoRect = installPhotoContainer.getBoundingClientRect()

      const dbCenterX = dbRect.left + dbRect.width / 2
      const dbCenterY = dbRect.top + dbRect.height / 2

      // 二维码目标位置
      const qrToDbLeft =
        dbCenterX - containerRect.left - qrClone.clientWidth / 2
      const qrToDbTop =
        dbCenterY - containerRect.top - qrClone.clientHeight / 2 - 25

      // 三个元素目标位置
      const infoToDbLeft =
        dbCenterX - infoRect.left - installInfoContainer.clientWidth / 2 - 20
      const infoToDbTop =
        dbCenterY - infoRect.top - installInfoContainer.clientHeight / 2 - 10

      const watermarkToDbLeft =
        dbCenterX -
        watermarkRect.left -
        installWatermarkContainer.clientWidth / 2 +
        20
      const watermarkToDbTop =
        dbCenterY -
        watermarkRect.top -
        installWatermarkContainer.clientHeight / 2 -
        10

      const photoToDbLeft =
        dbCenterX - photoRect.left - installPhotoContainer.clientWidth / 2
      const photoToDbTop =
        dbCenterY - photoRect.top - installPhotoContainer.clientHeight / 2 + 20

      // 同时移动所有元素到数据库
      gsap.to(qrClone, {
        x: qrToDbLeft,
        y: qrToDbTop,
        scale: 0.4,
        duration: 1.2,
        ease: 'power2.inOut',
        onComplete: () => qrClone.remove(),
      })

      gsap.to(installInfoContainer, {
        x: infoToDbLeft,
        y: infoToDbTop,
        scale: 0.4,
        duration: 1.2,
        delay: 0.1,
        ease: 'power2.inOut',
      })

      gsap.to(installWatermarkContainer, {
        x: watermarkToDbLeft,
        y: watermarkToDbTop,
        scale: 0.4,
        duration: 1.2,
        delay: 0.2,
        ease: 'power2.inOut',
      })

      gsap.to(installPhotoContainer, {
        x: photoToDbLeft,
        y: photoToDbTop,
        scale: 0.4,
        duration: 1.2,
        delay: 0.3,
        ease: 'power2.inOut',
        onComplete: () => {
          // 显示数据库标签
          gsap.to(dbLabel, {
            opacity: 1,
            duration: 0.5,
            ease: 'power1.out',
          })

          // 步骤4: 创建-1动画和印戳
          this.createMinusOneAnimation(dbContainer)
          this.createInstallStamp(pipeContainer)
        },
      })
    })
  }

  createMinusOneAnimation(dbContainer) {
    // 创建-1文本元素
    const minusOneElement = document.createElement('div')
    minusOneElement.textContent = '-1'
    Object.assign(minusOneElement.style, {
      position: 'absolute',
      left: '50%',
      top: '0px',
      transform: 'translateX(-50%)',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#dc2626',
      opacity: '0',
      zIndex: '70',
      pointerEvents: 'none',
    })
    dbContainer.appendChild(minusOneElement)

    // 动画序列：淡入 -> 向上浮动 -> 停留 -> 淡出
    const timeline = gsap.timeline()

    timeline
      .to(minusOneElement, {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out',
      })
      .to(
        minusOneElement,
        {
          y: -30,
          duration: 0.4,
          ease: 'power1.out',
        },
        '<'
      )
      .to(minusOneElement, {
        duration: 1,
      })
      .to(minusOneElement, {
        opacity: 0,
        duration: 0.6,
        ease: 'power1.in',
        onComplete: () => minusOneElement.remove(),
      })
  }

  createInstallStamp(pipeContainer) {
    gsap.delayedCall(0.5, () => {
      // 创建印戳元素
      const stampElement = document.createElement('div')
      stampElement.innerHTML = `
        <div style="
          position: absolute;
          right: -10px;
          top: -10px;
          width: 60px;
          height: 60px;
          background: #dc2626;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: calc(0.75rem * var(--font-scale, 1));
          font-weight: bold;
          transform: rotate(-15deg);
          box-shadow: 0 4px 12px rgba(220, 38, 38, 0.4);
          z-index: 60;
          opacity: 0;
        ">
          核销<br>安装
        </div>
      `
      pipeContainer.appendChild(stampElement)

      // 印戳动画
      const stamp = stampElement.firstElementChild
      gsap.fromTo(
        stamp,
        {
          opacity: 0,
          scale: 0.5,
          rotation: -45,
        },
        {
          opacity: 1,
          scale: 1,
          rotation: -15,
          duration: 0.6,
          ease: 'back.out(2)',
        }
      )
    })
  }

  handleTraceQueryClick(e) {
    const btn = e.target
    btn.disabled = true

    const container = this.shadowRoot.querySelector('#trace-qr-container')
    const dbContainer = this.shadowRoot.querySelector('#trace-db-container')
    const dbLabel = this.shadowRoot.querySelector('#trace-db-label')
    const traceQueryRow = this.shadowRoot.querySelector('#trace-query-row')
    const dbLoading = this.shadowRoot.querySelector('#trace-db-loading')

    // 创建扫码闪光效果
    const scanFlash = document.createElement('div')
    scanFlash.className =
      'absolute inset-0 bg-blue-300 rounded opacity-20 animate-ping'
    container.appendChild(scanFlash)

    gsap.to(scanFlash, {
      opacity: 0,
      duration: 0.6,
      onComplete: () => scanFlash.remove(),
    })

    // 启动扫码追溯动画序列
    this.startTraceQueryAnimation(
      container,
      dbContainer,
      dbLabel,
      traceQueryRow,
      dbLoading
    )
  }

  startTraceQueryAnimation(
    container,
    dbContainer,
    dbLabel,
    traceQueryRow,
    dbLoading
  ) {
    gsap.delayedCall(0.8, () => {
      // 步骤1: 创建二维码副本并飞入数据库
      const qrClone = container.cloneNode(true)
      Object.assign(qrClone.style, {
        position: 'absolute',
        left: '0',
        top: '0',
        zIndex: '50',
      })

      // 恢复二维码图像
      const cloneCanvas = qrClone.querySelector('canvas')
      if (cloneCanvas && this.traceQrImageData) {
        const cloneCtx = cloneCanvas.getContext('2d')
        cloneCtx.putImageData(this.traceQrImageData, 0, 0)
      }
      traceQueryRow.appendChild(qrClone)

      // 计算飞行目标位置
      const dbRect = dbContainer.getBoundingClientRect()
      const containerRect = container.getBoundingClientRect()
      const dbCenterX = dbRect.left + dbRect.width / 2
      const dbCenterY = dbRect.top + dbRect.height / 2

      const qrToDbLeft =
        dbCenterX - containerRect.left - qrClone.clientWidth / 2
      const qrToDbTop = dbCenterY - containerRect.top - qrClone.clientHeight / 2

      // 二维码飞入数据库动画
      gsap.to(qrClone, {
        x: qrToDbLeft,
        y: qrToDbTop,
        scale: 0.4,
        duration: 1.2,
        ease: 'power2.inOut',
        onComplete: () => {
          qrClone.remove()
          // 步骤2: 显示loading动画
          this.showDatabaseLoading(dbLoading, dbContainer, dbLabel)
        },
      })
    })
  }

  showDatabaseLoading(dbLoading, dbContainer, dbLabel) {
    // 显示loading图标
    gsap.to(dbLoading, {
      opacity: 1,
      duration: 0.3,
      ease: 'power2.out',
    })

    // 0.6秒后隐藏loading并开始信息元素飞出动画
    gsap.delayedCall(1.2, () => {
      gsap.to(dbLoading, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => {
          // 步骤3: 开始信息元素飞出动画
          this.startInfoElementsFlyout(dbContainer, dbLabel)
        },
      })
    })
  }

  startInfoElementsFlyout(dbContainer, dbLabel) {
    const traceQueryRow = this.shadowRoot.querySelector('#trace-query-row')
    const infoContainer = this.shadowRoot.querySelector('#trace-info-container')

    // 定义要飞出的信息元素
    const infoElements = [
      {
        label: '厂家信息',
        icon: 'mdi:factory',
        color: '#3b82f6',
        bg: '#dbeafe',
        border: '#2563eb',
      },
      {
        label: '出厂信息',
        icon: 'mdi:package-variant',
        color: '#22c55e',
        bg: '#bbf7d0',
        border: '#16a34a',
      },
      {
        label: '质检报告',
        icon: 'mdi:clipboard-check',
        color: '#f59e0b',
        bg: '#fef3c7',
        border: '#d97706',
      },
      {
        label: '流转记录',
        icon: 'mdi:swap-horizontal',
        color: '#8b5cf6',
        bg: '#e9d5ff',
        border: '#7c3aed',
      },
      {
        label: '照片',
        icon: 'mdi:image',
        color: '#ec4899',
        bg: '#fbcfe8',
        border: '#db2777',
      },
      {
        label: '其他信息',
        icon: 'mdi:information',
        color: '#6b7280',
        bg: '#f3f4f6',
        border: '#4b5563',
      },
    ]

    // 获取数据库中心点作为起始位置
    const dbRect = dbContainer.getBoundingClientRect()
    const rowRect = traceQueryRow.getBoundingClientRect()
    const infoContainerRect = infoContainer.getBoundingClientRect()
    const dbCenterX = dbRect.left + dbRect.width / 2 - rowRect.left
    const dbCenterY = dbRect.top + dbRect.height / 2 - rowRect.top

    // 逐个创建并飞出信息元素
    infoElements.forEach((info, index) => {
      gsap.delayedCall(index * 0.2, () => {
        // 创建信息元素
        const infoElement = document.createElement('div')
        infoElement.className =
          'flex items-center px-2 py-1 space-x-1 rounded-lg shadow-md'
        infoElement.style.cssText = `
          position: absolute;
          left: ${dbCenterX - 60}px;
          top: ${dbCenterY - 15}px;
          background: ${info.bg};
          border: 2px solid ${info.border};
          color: ${info.color};
          font-weight: bold;
          font-size: calc(0.75rem * var(--font-scale, 1));
          z-index: ${60 + index};
          opacity: 0;
          transform: scale(0.5);
          width: 110px;
          height: 32px;
        `

        infoElement.innerHTML = `
          <iconify-icon icon="${info.icon}" style="font-size: calc(1rem * var(--font-scale, 1));"></iconify-icon>
          <span>${info.label}</span>
        `

        traceQueryRow.appendChild(infoElement)

        // 显示元素
        gsap.to(infoElement, {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: 'back.out(1.7)',
          onComplete: () => {
            // 计算grid中的位置 (2列3行)
            const row = Math.floor(index / 2)
            const col = index % 2

            // 计算目标位置，基于infoContainer的位置
            const containerLeft = infoContainerRect.left - rowRect.left
            const containerTop = infoContainerRect.top - rowRect.top

            const targetX = containerLeft + col * (110 + 12) // 列位置，考虑gap
            const targetY = containerTop + row * (32 + 12) // 行位置，考虑gap

            gsap.to(infoElement, {
              x: targetX - (dbCenterX - 60),
              y: targetY - (dbCenterY - 15),
              duration: 0.8,
              ease: 'power2.inOut',
              onComplete: () => {
                // 动画完成后，将元素移入容器并移除绝对定位
                infoElement.style.position = 'static'
                infoElement.style.left = 'auto'
                infoElement.style.top = 'auto'
                infoElement.style.transform = 'none'
                infoContainer.appendChild(infoElement)

                // 如果是最后一个元素，完成整个动画序列
                if (index === infoElements.length - 1) {
                  this.completeTraceQueryAnimation(dbContainer, dbLabel)
                }
              },
            })
          },
        })
      })
    })
  }

  completeTraceQueryAnimation(dbContainer, dbLabel) {
    // 显示数据库标签
    gsap.to(dbLabel, {
      opacity: 1,
      duration: 0.5,
      ease: 'power1.out',
    })

    // 显示绿色对勾
    const checkIcon = document.createElement('span')
    checkIcon.innerHTML =
      '<iconify-icon icon="mdi:check-circle" style="color:#22c55e;font-size:calc(2.5rem * var(--font-scale, 1));"></iconify-icon>'
    Object.assign(checkIcon.style, {
      position: 'absolute',
      right: '-18px',
      bottom: '8px',
      zIndex: '60',
      opacity: '0',
    })
    dbContainer.appendChild(checkIcon)

    gsap.to(checkIcon, {
      opacity: 1,
      duration: 0.5,
      ease: 'back.out(1.7)',
    })
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
    const originalNode = this.shadowRoot.querySelector('[data-step-index="2"]')
    const stepsContainer = this.shadowRoot.querySelector(
      '#flow-steps-container'
    )

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
    const originalNode = this.shadowRoot.querySelector('[data-step-index="2"]')
    const inboundNode = this.shadowRoot.querySelector(
      '[data-split-id="inbound"]'
    )
    const outboundNode = this.shadowRoot.querySelector(
      '[data-split-id="outbound"]'
    )

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
    const scanNode = this.shadowRoot.querySelector('[data-step-index="1"]')
    const installNode = this.shadowRoot.querySelector('[data-step-index="3"]')
    const inboundNode = this.shadowRoot.querySelector(
      '[data-split-id="inbound"]'
    )
    const outboundNode = this.shadowRoot.querySelector(
      '[data-split-id="outbound"]'
    )
    const stepsContainer = this.shadowRoot.querySelector(
      '#flow-steps-container'
    )

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
    const scanNode = this.shadowRoot.querySelector('[data-step-index="1"]')
    const inboundNode = this.shadowRoot.querySelector(
      '[data-split-id="inbound"]'
    )

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
    const installNode = this.shadowRoot.querySelector('[data-step-index="3"]')
    const outboundNode = this.shadowRoot.querySelector(
      '[data-split-id="outbound"]'
    )

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
