import './style.css'
// import 'ionicons'
import { defineCustomElements } from 'ionicons/dist/loader/index.es2017'
defineCustomElements(window)
import { Chart, registerables } from 'chart.js'
import { initValueChart } from './charts/valueChart.js'
import { renderRoadmap } from './steps/roadmap.js'
import { renderProcessFlow } from './steps/processFlow.js'

// Manually register all Chart.js components
Chart.register(...registerables)

// --- App State ---
window.chartHasBeenInitialized = false

// --- DOM Elements ---
const sections = document.querySelectorAll('.report-section')
const navLinks = document.querySelectorAll('#desktop-nav .nav-link')
const mobileNavLinks = document.querySelectorAll('#mobile-menu .nav-link')
const prevSectionBtn = document.getElementById('prev-section-btn')
const nextSectionBtn = document.getElementById('next-section-btn')
let currentSectionIndex = 0
let isAnimating = false

// --- Functions ---

/**
 * Main function to switch between sections
 * @param {number} newIndex - The index of the section to show
 */
function showSection(newIndex) {
  if (isAnimating || newIndex < 0 || newIndex >= sections.length) return
  if (
    newIndex === currentSectionIndex &&
    sections[newIndex].classList.contains('active')
  )
    return

  isAnimating = true

  const oldSection = sections[currentSectionIndex]
  const newSection = sections[newIndex]

  // Update navigation links
  const allNavLinks = [...navLinks, ...mobileNavLinks]
  allNavLinks.forEach((link) => link.classList.remove('active'))
  document
    .querySelector(`.nav-link[href="#${newSection.id}"]`)
    ?.classList.add('active')
  document
    .querySelector(`#mobile-menu .nav-link[href="#${newSection.id}"]`)
    ?.classList.add('active')

  // Cleanup after animation
  function onAnimationEnd() {
    if (oldSection) oldSection.classList.remove('exiting')
    isAnimating = false
    newSection.removeEventListener('transitionend', onAnimationEnd)
  }
  newSection.addEventListener('transitionend', onAnimationEnd)

  // Trigger animations
  if (oldSection) oldSection.classList.remove('active')
  newSection.classList.add('active')

  // Initialize chart if it's the value section and not already initialized
  if (newSection.id === 'value' && !window.chartHasBeenInitialized) {
    setTimeout(() => {
      initValueChart()
    }, 100)
  }

  currentSectionIndex = newIndex

  // Update page navigation buttons
  prevSectionBtn.disabled = currentSectionIndex === 0
  nextSectionBtn.disabled = currentSectionIndex === sections.length - 1
}

// --- Event Listeners and Initializers ---

// Navigation links
document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault()
    const targetId = link.getAttribute('href').substring(1)
    const targetIndex = Array.from(sections).findIndex((s) => s.id === targetId)
    if (targetIndex !== -1) showSection(targetIndex)
    document.getElementById('mobile-menu').classList.add('hidden')
  })
})

// Page navigation buttons
prevSectionBtn.addEventListener('click', () =>
  showSection(currentSectionIndex - 1)
)
nextSectionBtn.addEventListener('click', () =>
  showSection(currentSectionIndex + 1)
)

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') nextSectionBtn.click()
  if (e.key === 'ArrowLeft') prevSectionBtn.click()
})

// Mobile menu toggle
document.getElementById('mobile-menu-button').addEventListener('click', () => {
  document.getElementById('mobile-menu').classList.toggle('hidden')
})

// QR Code Canvas
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

// --- Initial Render ---
showSection(0)
renderRoadmap()
renderProcessFlow()
