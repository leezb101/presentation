export function renderProcessFlow() {
  const processData = [
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
  const flowStepsContainer = document.getElementById('flow-steps-container')
  const processDetails = document.getElementById('process-details')
  const prevStepBtn = document.getElementById('prev-step-btn')
  const nextStepBtn = document.getElementById('next-step-btn')
  const progressBarFill = document.getElementById('progress-bar-fill')
  if (!flowStepsContainer) return

  let processStepIndex = 0

  flowStepsContainer.innerHTML = processData
    .map(
      (step) => `
        <div class="flex relative z-10 flex-col items-center p-2 flow-step">
            <div class="flex justify-center items-center w-16 h-16 text-3xl bg-white rounded-full border-4 border-gray-300 shadow-md transition-all duration-300 flow-step-icon">
                <iconify-icon icon="${step.icon}" class="text-4xl"></iconify-icon>
            </div>
            <span class="mt-2 text-sm font-semibold text-center">${step.title}</span>
        </div>
    `
    )
    .join('')

  const flowStepElements = flowStepsContainer.querySelectorAll('.flow-step')

  function updateProcessView(index) {
    processStepIndex = index
    progressBarFill.style.width = `${(index / (processData.length - 1)) * 100}%`
    flowStepElements.forEach((el, i) => {
      el.classList.toggle('visited', i < index)
      el.classList.toggle('active', i === index)
    })
    const stepData = processData[index]

    // Create detail content using DOM API
    let detailWrapper = document.createElement('div')
    detailWrapper.className = ''
    detailWrapper.style.position = 'relative'
    detailWrapper.style.minHeight = '220px'

    const resetBtn = document.createElement('button')
    resetBtn.title = '重播本步骤'
    resetBtn.innerHTML =
      '<iconify-icon icon="mdi:refresh" style="font-size:1.5rem;"></iconify-icon>'
    resetBtn.className =
      'flex justify-center items-center w-10 h-10 bg-white rounded-full border border-gray-200 shadow transition hover:bg-blue-50'
    resetBtn.style.position = 'absolute'
    resetBtn.style.left = '10px'
    resetBtn.style.bottom = '10px'
    resetBtn.style.zIndex = '100'
    resetBtn.addEventListener('click', (e) => {
      e.stopPropagation()
      updateProcessView(processStepIndex)
    })
    detailWrapper.appendChild(resetBtn)

    if (stepData.type === 'scan') {
      detailWrapper.className =
        'flex flex-col gap-8 justify-center items-center w-full md:flex-row'

      // Left container for QR code canvas
      const leftDiv = document.createElement('div')
      leftDiv.className = 'flex-shrink-0'

      const qrContainer = document.createElement('div')
      qrContainer.style.position = 'relative'
      qrContainer.style.width = '128px'
      qrContainer.style.height = '128px'
      qrContainer.style.borderRadius = '0.5rem'
      qrContainer.style.overflow = 'hidden'
      qrContainer.style.border = '2px solid #e5e7eb'

      const scanQrCanvas = document.createElement('canvas')
      scanQrCanvas.id = 'scan-qr-canvas'
      scanQrCanvas.className = 'p-1 w-full h-full bg-black'
      scanQrCanvas.style.position = 'relative'
      scanQrCanvas.style.zIndex = '0'

      const scanLineCanvas = document.createElement('canvas')
      scanLineCanvas.id = 'scan-line-canvas'
      scanLineCanvas.className = 'absolute top-0 left-0 w-full h-full'
      scanLineCanvas.style.zIndex = '1'
      scanLineCanvas.style.pointerEvents = 'none'

      qrContainer.appendChild(scanQrCanvas)
      qrContainer.appendChild(scanLineCanvas)
      leftDiv.appendChild(qrContainer)

      // Right container for details text
      const rightDiv = document.createElement('div')
      rightDiv.className = 'text-left text-gray-700'
      rightDiv.innerHTML = stepData.details

      detailWrapper.appendChild(leftDiv)
      detailWrapper.appendChild(rightDiv)
    } else {
      detailWrapper.className = 'flex items-start space-x-6 w-full'

      const iconDiv = document.createElement('div')
      iconDiv.className = 'text-6xl text-blue-500'
      const iconifyIcon = document.createElement('iconify-icon')
      iconifyIcon.setAttribute('icon', stepData.icon)
      iconDiv.appendChild(iconifyIcon)

      const textDiv = document.createElement('div')
      textDiv.className = 'text-gray-700'
      textDiv.innerHTML = stepData.details

      detailWrapper.appendChild(iconDiv)
      detailWrapper.appendChild(textDiv)

      // 源头赋码模拟扫码交互
      if (stepData.title === '源头赋码') {
        // 模拟扫码按钮
        const simulateBtn = document.createElement('button')
        simulateBtn.textContent = '扫码'
        simulateBtn.className =
          'px-4 py-2 mt-4 text-white bg-blue-500 rounded transition hover:bg-blue-600'

        // detail容器左右两端：二维码框和数据库图标
        const qrDbRow = document.createElement('div')
        qrDbRow.className =
          'flex relative justify-between items-center mt-6 w-full'
        qrDbRow.style.minHeight = '128px'

        // 左侧二维码框
        const customQrContainer = document.createElement('div')
        customQrContainer.style.position = 'relative'
        customQrContainer.style.width = '128px'
        customQrContainer.style.height = '128px'
        customQrContainer.style.borderRadius = '0.75rem'
        customQrContainer.style.overflow = 'hidden'
        customQrContainer.style.border = '2.5px solid #2563eb'
        customQrContainer.className =
          'flex flex-shrink-0 justify-center items-center bg-black shadow-lg'

        // 插入二维码canvas
        const qrCanvas = document.createElement('canvas')
        qrCanvas.width = 112
        qrCanvas.height = 112
        qrCanvas.style.position = 'absolute'
        qrCanvas.style.left = '50%'
        qrCanvas.style.top = '50%'
        qrCanvas.style.transform = 'translate(-50%, -50%)'
        qrCanvas.style.zIndex = '1'
        customQrContainer.appendChild(qrCanvas)
        // 绘制黑白色块模拟二维码，并保存像素数据
        const ctx = qrCanvas.getContext('2d')
        const size = 12
        const cell = qrCanvas.width / size
        ctx.clearRect(0, 0, qrCanvas.width, qrCanvas.height)
        for (let i = 0; i < size; i++) {
          for (let j = 0; j < size; j++) {
            ctx.fillStyle = Math.random() > 0.6 ? '#222' : '#fff'
            ctx.fillRect(i * cell, j * cell, cell, cell)
          }
        }
        // 保存二维码像素数据
        const qrImageData = ctx.getImageData(
          0,
          0,
          qrCanvas.width,
          qrCanvas.height
        )

        // 插入scanbar canvas
        const scanbarCanvas = document.createElement('canvas')
        scanbarCanvas.width = 112
        scanbarCanvas.height = 112
        scanbarCanvas.style.position = 'absolute'
        scanbarCanvas.style.left = '50%'
        scanbarCanvas.style.top = '50%'
        scanbarCanvas.style.transform = 'translate(-50%, -50%)'
        scanbarCanvas.style.zIndex = '2'
        scanbarCanvas.style.pointerEvents = 'none'
        customQrContainer.appendChild(scanbarCanvas)
        // 扫码动画
        const scanbarCtx = scanbarCanvas.getContext('2d')
        let scanY = 0
        function animateScanbar() {
          scanbarCtx.clearRect(0, 0, scanbarCanvas.width, scanbarCanvas.height)
          const grad = scanbarCtx.createLinearGradient(0, scanY, 0, scanY + 12)
          grad.addColorStop(0, 'transparent')
          grad.addColorStop(0.5, '#3b82f6')
          grad.addColorStop(1, 'transparent')
          scanbarCtx.fillStyle = grad
          scanbarCtx.fillRect(0, scanY, scanbarCanvas.width, 12)
          scanY += 2
          if (scanY > scanbarCanvas.height) scanY = 0
          requestAnimationFrame(animateScanbar)
        }
        animateScanbar()

        // 右侧数据库大图标（尺寸与二维码框一致，水平对齐）
        const dbIconContainer = document.createElement('div')
        dbIconContainer.style.width = '128px'
        dbIconContainer.style.height = '128px'
        dbIconContainer.style.borderRadius = '0.75rem'
        dbIconContainer.style.background = '#f0fdf4'
        dbIconContainer.style.border = '2.5px solid #4ade80'
        dbIconContainer.className =
          'flex relative flex-shrink-0 justify-center items-center shadow-lg'
        dbIconContainer.innerHTML = `
          <div class="flex flex-col justify-center items-center w-full h-full">
            <iconify-icon icon="mdi:database" class="text-green-500" style="font-size:96px;"></iconify-icon>
            <div class="mt-2 text-lg font-bold text-green-700">数据库</div>
          </div>
        `

        qrDbRow.appendChild(customQrContainer)
        qrDbRow.appendChild(dbIconContainer)
        textDiv.appendChild(qrDbRow)
        textDiv.appendChild(simulateBtn)

        // 四个信息块的配色和装饰
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

        simulateBtn.addEventListener('click', () => {
          simulateBtn.disabled = true

          // 扫码光效
          const scanFlash = document.createElement('div')
          scanFlash.className =
            'absolute inset-0 bg-blue-300 rounded opacity-20 animate-ping'
          customQrContainer.appendChild(scanFlash)
          setTimeout(() => scanFlash.remove(), 600)

          // 信息块飞入动画（初始在detail正中，定格0.6s后依次飞入二维码框正中，scale动画与平移动画同时进行）
          const flyBlocks = []
          const detailRect = detailWrapper.getBoundingClientRect()
          const qrRect = customQrContainer.getBoundingClientRect()
          // 终点为二维码框中心相对detailWrapper中心的偏移
          const offsetLeft =
            qrRect.left +
            qrRect.width / 2 -
            (detailRect.left + detailRect.width / 2)
          const offsetTop =
            qrRect.top +
            qrRect.height / 2 -
            (detailRect.top + detailRect.height / 2)

          dataBlocks.forEach((block, i) => {
            const blockDiv = document.createElement('div')
            blockDiv.textContent = block.label
            blockDiv.style.position = 'absolute'
            blockDiv.style.left = '50%'
            blockDiv.style.top = '50%'
            blockDiv.style.transform = 'translate(-50%, -50%) scale(1.2)'
            blockDiv.style.width = '128px'
            blockDiv.style.height = '48px'
            blockDiv.style.lineHeight = '48px'
            blockDiv.style.textAlign = 'center'
            blockDiv.style.fontWeight = 'bold'
            blockDiv.style.fontSize = '1.18rem'
            blockDiv.style.borderRadius = '0.75rem'
            blockDiv.style.border = block.border
            blockDiv.style.background = block.bg
            blockDiv.style.color = block.text
            blockDiv.style.boxShadow = block.shadow
            blockDiv.style.opacity = '0'
            blockDiv.style.zIndex = 30 + i
            blockDiv.style.transition = 'all 0.6s cubic-bezier(0.4,0,0.2,1)'
            detailWrapper.appendChild(blockDiv)
            flyBlocks.push(blockDiv)
            // 生成后定格0.6s，opacity变为1，scale保持1.2
            setTimeout(() => {
              blockDiv.style.opacity = '1'
              blockDiv.style.transform = 'translate(-50%, -50%) scale(1.2)'
              // 0.6s后飞入二维码框正中，scale变为0.95
              setTimeout(() => {
                blockDiv.style.transition = 'all 1.2s cubic-bezier(0.4,0,0.2,1)'
                blockDiv.style.transform = `translate(calc(-50% + ${offsetLeft}px), calc(-50% + ${offsetTop}px)) scale(0.95)`
              }, 600)
            }, i * 700 + 400)
          })

          // 所有块飞入后定格1s再渐隐
          setTimeout(() => {
            flyBlocks.forEach((blockDiv, i) => {
              setTimeout(() => {
                blockDiv.style.opacity = '0'
                blockDiv.style.transform = `translate(calc(-50% + ${offsetLeft}px), calc(-50% + ${offsetTop}px)) scale(0.8)`
              }, i * 120)
            })
          }, dataBlocks.length * 700 + 1800)

          // --- 新增：管件元素 ---
          // 管件元素插入到customQrContainer和dbIconContainer之间
          const pipeContainer = document.createElement('div')
          pipeContainer.style.width = '128px'
          pipeContainer.style.height = '128px'
          pipeContainer.style.borderRadius = '0.75rem'
          pipeContainer.style.background = '#f0f9ff'
          pipeContainer.style.border = '2.5px solid #38bdf8'
          pipeContainer.className =
            'flex relative flex-shrink-0 justify-center items-center shadow-lg'
          pipeContainer.style.position = 'relative'
          pipeContainer.style.margin = '0 24px'
          pipeContainer.style.opacity = '0'
          pipeContainer.style.transform = 'scale(0.7)'
          pipeContainer.style.transition = 'all 0.7s cubic-bezier(0.4,0,0.2,1)'
          pipeContainer.innerHTML = `
            <div class="flex flex-col justify-center items-center w-full h-full">
              <iconify-icon icon="mdi:pipe" class="text-sky-500" style="font-size:96px;"></iconify-icon>
              <div class="mt-2 text-lg font-bold text-sky-700">管件</div>
            </div>
          `
          // 插入到customQrContainer和dbIconContainer之间
          qrDbRow.insertBefore(pipeContainer, dbIconContainer)

          // --- 动画：二维码副本分别飞向数据库和管件 ---
          setTimeout(() => {
            // 让管件元素渐现
            pipeContainer.style.opacity = '1'
            pipeContainer.style.transform = 'scale(1)'

            // 复制二维码副本1：飞向数据库
            const qrCloneDb = customQrContainer.cloneNode(true)
            qrCloneDb.style.position = 'absolute'
            qrCloneDb.style.left = '0'
            qrCloneDb.style.top = '0'
            qrCloneDb.style.transition = 'all 1.1s cubic-bezier(0.4,0,0.2,1)'
            qrCloneDb.style.zIndex = '50'
            const cloneCanvasDb = qrCloneDb.querySelector('canvas')
            if (cloneCanvasDb) {
              const cloneCtxDb = cloneCanvasDb.getContext('2d')
              cloneCtxDb.putImageData(qrImageData, 0, 0)
            }
            qrDbRow.appendChild(qrCloneDb)
            // 计算数据库目标位置
            const dbRect = dbIconContainer.getBoundingClientRect()
            const qrRectDb = customQrContainer.getBoundingClientRect()
            const offsetDbLeft =
              dbRect.left +
              dbRect.width / 2 -
              (qrRectDb.left + qrRectDb.width / 2)
            const offsetDbTop =
              dbRect.top +
              dbRect.height / 2 -
              (qrRectDb.top + qrRectDb.height / 2)
            setTimeout(() => {
              qrCloneDb.style.left = `calc(${offsetDbLeft}px)`
              qrCloneDb.style.top = `calc(${offsetDbTop}px)`
            }, 50)
            setTimeout(() => {
              qrCloneDb.remove()
            }, 1200)

            // 复制二维码副本2：飞向管件
            const qrClonePipe = customQrContainer.cloneNode(true)
            qrClonePipe.style.position = 'absolute'
            qrClonePipe.style.left = '0'
            qrClonePipe.style.top = '0'
            qrClonePipe.style.transition = 'all 1.8s cubic-bezier(0.4,0,0.2,1)'
            qrClonePipe.style.zIndex = '51'
            const cloneCanvasPipe = qrClonePipe.querySelector('canvas')
            if (cloneCanvasPipe) {
              const cloneCtxPipe = cloneCanvasPipe.getContext('2d')
              cloneCtxPipe.putImageData(qrImageData, 0, 0)
            }
            qrDbRow.appendChild(qrClonePipe)
            // 计算管件目标位置
            const pipeRect = pipeContainer.getBoundingClientRect()
            const qrRectPipe = customQrContainer.getBoundingClientRect()
            const offsetPipeLeft =
              pipeRect.left +
              pipeRect.width / 2 -
              (qrRectPipe.left + qrRectPipe.width / 2)
            const offsetPipeTop =
              pipeRect.top +
              pipeRect.height / 2 -
              (qrRectPipe.top + qrRectPipe.height / 2)
            setTimeout(() => {
              qrClonePipe.style.left = `calc(${offsetPipeLeft}px)`
              qrClonePipe.style.top = `calc(${offsetPipeTop}px)`
              qrClonePipe.style.transform = 'scale(0.7)'
            }, 50)
            setTimeout(() => {
              qrClonePipe.remove()
              // 对勾
              const checkIcon = document.createElement('span')
              checkIcon.innerHTML =
                '<iconify-icon icon="mdi:check-circle" style="color:#22c55e;font-size:2.5rem;"></iconify-icon>'
              checkIcon.style.position = 'absolute'
              checkIcon.style.right = '-18px'
              checkIcon.style.bottom = '8px'
              checkIcon.style.zIndex = '60'
              checkIcon.style.transition = 'opacity 0.5s'
              checkIcon.style.opacity = '0'
              pipeContainer.appendChild(checkIcon)
              setTimeout(() => {
                checkIcon.style.opacity = '1'
              }, 50)
            }, 1850)
          }, dataBlocks.length * 700 + 2200)
        })
      }
    }

    processDetails.replaceChildren(detailWrapper)

    prevStepBtn.disabled = index === 0
    nextStepBtn.disabled = index === processData.length - 1
  }
  prevStepBtn.addEventListener('click', () => {
    if (processStepIndex > 0) updateProcessView(processStepIndex - 1)
  })
  nextStepBtn.addEventListener('click', () => {
    if (processStepIndex < processData.length - 1)
      updateProcessView(processStepIndex + 1)
  })
  updateProcessView(0)
}
