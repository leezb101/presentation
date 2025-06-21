import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      collections: {
        mdi: () => import('@iconify-json/mdi/icons.json').then(i => i.default)
      }
    })
  ],
  content: {
    filesystem: [
      './src/**/*.{js,ts,jsx,tsx}',
      './index.html'
    ]
  },
  // 支持 shadowDOM 的配置
  theme: {
    colors: {
      // 保持与原有 Tailwind 配置一致的颜色
      blue: {
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
        800: '#1e40af',
        900: '#1e3a8a'
      },
      gray: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827'
      }
    }
  },
  // 为了支持 lit 组件的样式注入
  transformers: [],
  // 添加自定义规则以匹配 Tailwind 的一些特殊类
  rules: [
    // 支持 backdrop-blur
    [/^backdrop-blur(?:-(\w+))?$/, ([, size]) => {
      const value = size === 'sm' ? '4px' : size === 'md' ? '12px' : size === 'lg' ? '16px' : '8px'
      return { 'backdrop-filter': `blur(${value})` }
    }],
    // 支持更多的动画
    ['animate-ping', {
      animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite'
    }]
  ],
  shortcuts: {
    // 常用的组合样式
    'btn-primary': 'bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition',
    'btn-secondary': 'bg-gray-200 text-gray-700 font-bold py-2 px-6 rounded-lg hover:bg-gray-300 transition',
    'card': 'bg-white p-6 rounded-lg shadow'
  }
})