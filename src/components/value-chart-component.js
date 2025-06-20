import { html, css } from 'lit'
import { BaseComponent } from './base-component.js'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

export class ValueChartComponent extends BaseComponent {
  static properties = {
    chartInitialized: { type: Boolean }
  }

  constructor() {
    super()
    this.chartInitialized = false
    this.chart = null
  }

  render() {
    return html`
      <div class="container mx-auto px-6 w-full max-w-6xl">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900">
            项目价值：可量化的收益与质的飞跃
          </h2>
        </div>
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 class="text-2xl font-bold mb-6 text-center">
              关键绩效指标 (KPI) 提升
            </h3>
            <div class="chart-container">
              <canvas id="valueChart" width="400" height="300"></canvas>
            </div>
          </div>
          <div class="space-y-6">
            <div class="bg-white p-6 rounded-lg shadow">
              <h4 class="text-lg font-bold text-blue-700 mb-2">管理提效</h4>
              <p class="text-gray-600">
                业务流程线上化、自动化，数据实时可查，决策更高效。
              </p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow">
              <h4 class="text-lg font-bold text-blue-700 mb-2">质量保障</h4>
              <p class="text-gray-600">
                实现从源头到末端的全过程质量追溯。事故排查从数天缩短至几分钟。
              </p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow">
              <h4 class="text-lg font-bold text-blue-700 mb-2">
                数据资产沉淀
              </h4>
              <p class="text-gray-600">
                项目数据被系统性地记录归档，形成宝贵数字资产，为未来大数据分析奠定基础。
              </p>
            </div>
          </div>
        </div>
      </div>
    `
  }

  firstUpdated() {
    this.initializeChart()
  }

  initializeChart() {
    if (this.chartInitialized) return

    const canvas = this.querySelector('#valueChart')
    if (!canvas) return

    const chartData = {
      labels: ['材料损耗率', '质量追溯时间', '协同沟通成本'],
      datasets: [
        {
          label: '传统模式',
          data: [6, 48, 100],
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 2
        },
        {
          label: '数字化平台',
          data: [1.5, 0.5, 40],
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 2
        },
      ],
    }

    const chartOptions = {
      animation: { 
        duration: 1500,
        easing: 'easeInOutQuart'
      },
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          title: { 
            display: true, 
            text: '相对指标 (越低越好)',
            font: {
              size: 14,
              weight: 'bold'
            }
          },
          grid: {
            color: 'rgba(0, 0, 0, 0.1)'
          }
        },
        x: {
          grid: {
            display: false
          }
        }
      },
      plugins: { 
        legend: { 
          position: 'top',
          labels: {
            font: {
              size: 14,
              weight: 'bold'
            },
            padding: 20
          }
        },
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          titleFont: {
            size: 14,
            weight: 'bold'
          },
          bodyFont: {
            size: 13
          }
        }
      },
    }

    this.chart = new Chart(canvas, {
      type: 'bar',
      data: chartData,
      options: chartOptions,
    })

    this.chartInitialized = true
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    if (this.chart) {
      this.chart.destroy()
      this.chart = null
    }
  }
}

customElements.define('value-chart-component', ValueChartComponent)