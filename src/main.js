/*
 * @Author: LeeZB
 * @Date: 2025-06-21 11:00:56
 * @LastEditors: Leezb101 leezb101@126.com
 * @LastEditTime: 2025-06-21 16:41:40
 * @copyright: Copyright © 2025 高新供水.
 */
import 'unocss'
import './style.css'
import { defineCustomElements } from 'ionicons/dist/loader/index.es2017'

// Import all components
import './components/base-component.js'
import './components/app-header.js'
import './components/app-main.js'
import './components/content-section.js'
import './components/solution-showcase.js'
import './components/cloud-architecture.js'
import './components/process-flow-component.js'
import './components/value-chart-component.js'
import './components/roadmap-component.js'
import './components/problem-analysis.js'
import './components/preliminary-work.js'

class PresentationApp {
  constructor() {
    this.currentSectionIndex = 0
    this.currentSectionId = 'hero'
    this.init()
  }

  init() {
    this.initializeQRCode()
    this.setupEventListeners()
    this.setupKeyboardNavigation()
  }

  initializeQRCode() {
    const qrCanvas = document.getElementById('qr-canvas')
    if (qrCanvas) {
      const ctx = qrCanvas.getContext('2d')
      const size = qrCanvas.width
      const cellSize = size / 8
      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
          if (Math.random() > 0.5) {
            ctx.fillStyle = '#1f2937'
            ctx.fillRect(i * cellSize, j * cellSize, cellSize, cellSize)
          }
        }
      }
    }
  }

  setupEventListeners() {
    document.addEventListener('section-change', (e) => {
      this.handleSectionChange(e.detail.sectionId)
    })

    document.addEventListener('section-changed', (e) => {
      this.handleSectionChanged(e.detail.sectionIndex, e.detail.sectionId)
    })
  }

  setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
      const appMain = document.querySelector('app-main')
      if (!appMain) return

      if (e.key === 'ArrowRight') {
        appMain.nextSection()
      }
      if (e.key === 'ArrowLeft') {
        appMain.prevSection()
      }
    })
  }

  handleSectionChange(sectionId) {
    const appMain = document.querySelector('app-main')
    if (appMain) {
      appMain.handleSectionChange(sectionId)
    }
  }

  handleSectionChanged(sectionIndex, sectionId) {
    this.currentSectionIndex = sectionIndex
    this.currentSectionId = sectionId

    const appHeader = document.querySelector('app-header')
    if (appHeader) {
      appHeader.updateCurrentSection(sectionId)
    }

    if (sectionId === 'value') {
      const valueChart = document.querySelector('value-chart-component')
      if (valueChart && !valueChart.chartInitialized) {
        setTimeout(() => {
          valueChart.initializeChart()
        }, 100)
      }
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new PresentationApp()
})
