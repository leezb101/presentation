/*
 * @Author: LeeZB
 * @Date: 2025-06-20 11:14:56
 * @LastEditors: Leezb101 leezb101@126.com
 * @LastEditTime: 2025-06-20 11:14:59
 * @copyright: Copyright © 2025 高新供水.
 */
import { Chart } from 'chart.js'

export function initValueChart() {
  const valueChartCanvas = document.getElementById('valueChart')
  if (!valueChartCanvas) return

  const chartData = {
    labels: ['材料损耗率', '质量追溯时间', '协同沟通成本'],
    datasets: [
      {
        label: '传统模式',
        data: [6, 48, 100],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: '数字化平台',
        data: [1.5, 0.5, 40],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
    ],
  }
  const chartOptions = {
    animation: { duration: 1500 },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: '相对指标 (越低越好)' },
      },
    },
    plugins: { legend: { position: 'top' } },
  }

  window.valueChart = new Chart(valueChartCanvas, {
    type: 'bar',
    data: chartData,
    options: chartOptions,
  })
  window.chartHasBeenInitialized = true
}
