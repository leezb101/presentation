var B=Object.defineProperty;var _=(g,e,t)=>e in g?B(g,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):g[e]=t;var m=(g,e,t)=>_(g,typeof e!="symbol"?e+"":e,t);import{i as V,a as k,x as s,E as N,T as F}from"./lit-DPiGUO4P.js";import{g as i}from"./gsap-CH_iu5NA.js";import{C as R,r as Q}from"./chart-Cbdzloa0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();class z extends V{constructor(){super(),this.isAnimating=!1}safeSetTimeout(e,t){return setTimeout(()=>{this.isConnected&&e()},t)}safeRequestAnimationFrame(e){return requestAnimationFrame(()=>{this.isConnected&&e()})}}m(z,"styles",k`
    :host {
      display: block;
    }
    /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.static{position:static;}
.block{display:block;}
  `);class T extends z{constructor(){super(),this.currentSection="hero"}render(){return s`
      <header class="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <nav
          class="container mx-auto px-6 py-3 flex justify-between items-center"
        >
          <div class="text-xl font-bold text-blue-700">智慧水务 · 数字基石</div>
          <div
            id="desktop-nav"
            class="hidden md:flex space-x-6 text-sm font-medium text-gray-600"
          >
            ${this.renderNavLinks()}
          </div>
          <div class="md:hidden">
            <button
              id="mobile-menu-button"
              class="text-gray-600 focus:outline-none"
              @click=${this.toggleMobileMenu}
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </nav>
        <div id="mobile-menu" class="hidden md:hidden px-6 pb-4">
          ${this.renderMobileNavLinks()}
        </div>
      </header>
    `}renderNavLinks(){return[{href:"#hero",text:"开篇"},{href:"#problem",text:"现状与痛点"},{href:"#preliminary-work",text:"前期工作"},{href:"#solution",text:"解决方案"},{href:"#process",text:"系统如何运作"},{href:"#value",text:"项目价值"},{href:"#roadmap",text:"实施路线图"}].map(t=>s`
        <a
          href="${t.href}"
          class="nav-link text-[#6b7280] no-underline transition-colors duration-200 ease-in-out hover:text-[#2563eb] ${this.currentSection===t.href.substring(1)?"active !font-bold !text-[#2563eb]":""}"
          @click=${this.handleNavClick}
        >
          ${t.text}
        </a>
      `)}renderMobileNavLinks(){return[{href:"#hero",text:"开篇"},{href:"#problem",text:"现状与痛点"},{href:"#preliminary-work",text:"前期工作"},{href:"#solution",text:"解决方案"},{href:"#process",text:"系统如何运作"},{href:"#value",text:"项目价值"},{href:"#roadmap",text:"实施路线图"}].map(t=>s`
        <a
          href="${t.href}"
          class="block py-2 nav-link text-[#6b7280] no-underline transition-colors duration-200 ease-in-out hover:text-[#2563eb] ${this.currentSection===t.href.substring(1)?"active font-bold text-[#2563eb]":""} "
          @click=${this.handleMobileNavClick}
        >
          ${t.text}
        </a>
      `)}handleNavClick(e){e.preventDefault();const t=e.target.getAttribute("href").substring(1);this.dispatchEvent(new CustomEvent("section-change",{detail:{sectionId:t},bubbles:!0,composed:!0}))}handleMobileNavClick(e){e.preventDefault();const t=e.target.getAttribute("href").substring(1);this.closeMobileMenu(),this.dispatchEvent(new CustomEvent("section-change",{detail:{sectionId:t},bubbles:!0,composed:!0}))}toggleMobileMenu(){this.shadowRoot.querySelector("#mobile-menu").classList.toggle("hidden")}closeMobileMenu(){this.shadowRoot.querySelector("#mobile-menu").classList.add("hidden")}updateCurrentSection(e){this.currentSection=e}}m(T,"properties",{currentSection:{type:String}}),m(T,"styles",k`
    :host {
      display: block;
    }

    /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: shortcuts */
.container{width:100%;}
@media (min-width: 640px){
.container{max-width:640px;}
}
@media (min-width: 768px){
.container{max-width:768px;}
}
@media (min-width: 1024px){
.container{max-width:1024px;}
}
@media (min-width: 1280px){
.container{max-width:1280px;}
}
@media (min-width: 1536px){
.container{max-width:1536px;}
}
/* layer: default */
.sticky{position:sticky;}
.static{position:static;}
.top-0{top:0;}
.z-50{z-index:50;}
.mx-auto{margin-left:auto;margin-right:auto;}
.block{display:block;}
.hidden{display:none;}
.h-6{height:1.5rem;}
.w-6{width:1.5rem;}
.flex{display:flex;}
.items-center{align-items:center;}
.justify-between{justify-content:space-between;}
.space-x-6>:not([hidden])~:not([hidden]){--un-space-x-reverse:0;margin-left:calc(1.5rem * calc(1 - var(--un-space-x-reverse)));margin-right:calc(1.5rem * var(--un-space-x-reverse));}
.bg-white\\/80{background-color:rgb(255 255 255 / 0.8) /* #fff */;}
[stroke-width~="\\32 "]{stroke-width:2px;}
.px-6{padding-left:1.5rem;padding-right:1.5rem;}
.py-2{padding-top:0.5rem;padding-bottom:0.5rem;}
.py-3{padding-top:0.75rem;padding-bottom:0.75rem;}
.pb-4{padding-bottom:1rem;}
.text-sm{font-size:0.875rem;line-height:1.25rem;}
.text-xl{font-size:1.25rem;line-height:1.75rem;}
.\\!text-\\[\\#2563eb\\]{--un-text-opacity:1 !important;color:rgb(37 99 235 / var(--un-text-opacity)) /* #2563eb */ !important;}
.text-\\[\\#2563eb\\]{--un-text-opacity:1;color:rgb(37 99 235 / var(--un-text-opacity)) /* #2563eb */;}
.text-\\[\\#6b7280\\]{--un-text-opacity:1;color:rgb(107 114 128 / var(--un-text-opacity)) /* #6b7280 */;}
.text-blue-700{--un-text-opacity:1;color:rgb(29 78 216 / var(--un-text-opacity)) /* #1d4ed8 */;}
.text-gray-600{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity)) /* #4b5563 */;}
.hover\\:text-\\[\\#2563eb\\]:hover{--un-text-opacity:1;color:rgb(37 99 235 / var(--un-text-opacity)) /* #2563eb */;}
.\\!font-bold{font-weight:700 !important;}
.font-bold{font-weight:700;}
.font-medium{font-weight:500;}
.no-underline{text-decoration:none;}
.shadow-sm{--un-shadow:var(--un-shadow-inset) 0 1px 2px 0 var(--un-shadow-color, rgb(0 0 0 / 0.05));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px;}
.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.duration-200{transition-duration:200ms;}
.ease-in-out{transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);}
.backdrop-blur-md{backdrop-filter:blur(12px);}
@media (min-width: 768px){
.md\\:hidden{display:none;}
.md\\:flex{display:flex;}
};
  `);customElements.define("app-header",T);class A extends z{constructor(){super(),this.currentSectionIndex=0,this.isAnimating=!1,this.sections=[]}firstUpdated(){this.sections=this.shadowRoot.querySelectorAll(".report-section"),this.showSection(0)}render(){return s`
      <main>
        <content-section
          id="hero"
          class="report-section ${this.currentSectionIndex===0?"active":""}"
        >
          <div class="hero-background">
            <div class="wave-animation"></div>
            <div class="hero-decoration">
              <div class="decorative-elements">
                <div class="floating-icon qr-icon">
                  <iconify-icon icon="mdi:qrcode" class="icon"></iconify-icon>
                </div>
                <div class="floating-icon cloud-icon">
                  <iconify-icon
                    icon="mdi:cloud-outline"
                    class="icon"
                  ></iconify-icon>
                </div>
                <div class="floating-icon pipe-icon">
                  <iconify-icon icon="mdi:pipe" class="icon"></iconify-icon>
                </div>
              </div>
            </div>
            <div class="hero-content">
              <div class="content-wrapper">
                <h1 class="main-title">郑水小码</h1>
                <h2 class="sub-title">工程物料全生命周期数字化管理平台</h2>
                <p class="description">
                  用数字孪生理念，为每一件物料赋予智慧生命。实现从源头到末端的全过程精准管控，奠定集团智慧水务的坚实基础。
                </p>
              </div>
            </div>
          </div>
        </content-section>

        <content-section
          id="problem"
          class="report-section ${this.currentSectionIndex===1?"active":""}"
        >
          <div class="w-full px-4">
            <problem-analysis></problem-analysis>
          </div>
        </content-section>

        <content-section
          id="preliminary-work"
          class="report-section ${this.currentSectionIndex===2?"active":""}"
        >
          <div class="w-full px-4">
            <preliminary-work></preliminary-work>
          </div>
        </content-section>

        <content-section
          id="solution"
          class="report-section ${this.currentSectionIndex===3?"active":""}"
        >
          <div class="w-full px-4">
            <solution-showcase></solution-showcase>
          </div>
        </content-section>

        <content-section
          id="process"
          class="report-section ${this.currentSectionIndex===4?"active":""}"
        >
          <process-flow-component></process-flow-component>
        </content-section>

        <content-section
          id="value"
          class="report-section ${this.currentSectionIndex===5?"active":""}"
        >
          <value-chart-component></value-chart-component>
        </content-section>

        <content-section
          id="roadmap"
          class="report-section ${this.currentSectionIndex===6?"active":""}"
        >
          <roadmap-component></roadmap-component>
        </content-section>
      </main>

      <div id="page-nav" class="flex fixed right-6 bottom-6 z-50 space-x-3">
        <button
          id="prev-section-btn"
          class="flex justify-center items-center w-12 h-12 rounded-full shadow-lg backdrop-blur-sm transition bg-white/70 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
          ?disabled=${this.currentSectionIndex===0}
          @click=${this.prevSection}
        >
          <iconify-icon icon="mdi:arrow-left" class="text-2xl"></iconify-icon>
        </button>
        <button
          id="next-section-btn"
          class="flex justify-center items-center w-12 h-12 rounded-full shadow-lg backdrop-blur-sm transition bg-white/70 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
          ?disabled=${this.currentSectionIndex===6}
          @click=${this.nextSection}
        >
          <iconify-icon icon="mdi:arrow-right" class="text-2xl"></iconify-icon>
        </button>
      </div>
    `}showSection(e){this.isAnimating||e<0||e>=7||e!==this.currentSectionIndex&&(this.isAnimating=!0,this.currentSectionIndex=e,this.dispatchEvent(new CustomEvent("section-changed",{detail:{sectionIndex:e,sectionId:this.getSectionIdByIndex(e)},bubbles:!0,composed:!0})),this.safeSetTimeout(()=>{this.isAnimating=!1;const t=this.shadowRoot.querySelector(".report-section.active");t&&t.checkContentHeight&&t.checkContentHeight()},500))}getSectionIdByIndex(e){return["hero","problem","preliminary-work","solution","process","value","roadmap"][e]||"hero"}getSectionIndexById(e){return["hero","problem","preliminary-work","solution","process","value","roadmap"].indexOf(e)}handleSectionChange(e){const t=this.getSectionIndexById(e);t!==-1&&this.showSection(t)}prevSection(){this.showSection(this.currentSectionIndex-1)}nextSection(){this.showSection(this.currentSectionIndex+1)}}m(A,"properties",{currentSectionIndex:{type:Number},isAnimating:{type:Boolean}}),m(A,"styles",k`
    :host {
      display: block;
    }

    .hero-background {
      position: relative;
      min-height: 100vh;
      width: 100%;
      background: linear-gradient(
        135deg,
        #f8fafc 0%,
        #e2e8f0 30%,
        #cbd5e1 60%,
        #e2e8f0 100%
      );
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    .hero-background::before {
      z-index: 0;
      content: '';
      position: absolute;
      left: -50%;
      width: 200%;
      height: 200%;
      border-radius: 45%;
      animation: wave1 20s ease-in-out infinite;
      bottom: -100%;
      transform-origin: center center;
      background: linear-gradient(
        45deg,
        rgba(135, 206, 250, 0) 20%,
        rgba(135, 206, 250, 0.12) 35%,
        rgba(135, 206, 250, 0.18) 50%,
        rgba(135, 206, 250, 0.12) 65%,
        rgba(135, 206, 250, 0) 80%
      );
    }

    .hero-background::after {
      z-index: 0;
      content: '';
      position: absolute;
      left: -50%;
      width: 200%;
      height: 200%;
      border-radius: 45%;
      animation: wave2 25s ease-in-out infinite;
      animation-delay: -8s;
      bottom: -120%;
      transform-origin: center center;
      background: linear-gradient(
        45deg,
        rgba(0, 191, 255, 0) 20%,
        rgba(0, 191, 255, 0.1) 35%,
        rgba(0, 191, 255, 0.15) 50%,
        rgba(0, 191, 255, 0.1) 65%,
        rgba(0, 191, 255, 0) 80%
      );
    }

    .wave-animation {
      z-index: 0;
      position: absolute;
      left: -50%;
      width: 200%;
      height: 200%;
      border-radius: 45%;
      animation: wave3 30s ease-in-out infinite;
      animation-delay: -15s;
      bottom: -140%;
      transform-origin: center center;
      background: linear-gradient(
        45deg,
        rgba(64, 224, 208, 0) 25%,
        rgba(64, 224, 208, 0.06) 40%,
        rgba(64, 224, 208, 0.12) 50%,
        rgba(64, 224, 208, 0.06) 60%,
        rgba(64, 224, 208, 0) 75%
      );
    }

    .hero-decoration {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 1;
    }

    .decorative-elements {
      position: relative;
      width: 100%;
      height: 100%;
    }

    .floating-icon {
      position: absolute;
      width: 90px;
      height: 90px;
      background: rgba(74, 144, 226, 0.1);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(15px);
      border: 2px solid rgba(74, 144, 226, 0.2);
      box-shadow: 0 12px 40px rgba(74, 144, 226, 0.15);
    }

    .floating-icon .icon {
      font-size: 36px;
      color: rgba(74, 144, 226, 0.8);
    }

    .qr-icon {
      top: 18%;
      right: 12%;
      animation: floatEnhanced 4s ease-in-out infinite;
      animation-delay: 0s;
    }

    .cloud-icon {
      top: 40%;
      left: 8%;
      animation: floatEnhanced 5s ease-in-out infinite;
      animation-delay: 1s;
    }

    .pipe-icon {
      bottom: 25%;
      right: 25%;
      animation: floatEnhanced 4.5s ease-in-out infinite;
      animation-delay: 2s;
    }

    .hero-content {
      position: relative;
      z-index: 2;
      width: 100%;
      max-width: 1200px;
      padding: 0 40px;
    }

    .content-wrapper {
      text-align: center;
      max-width: 900px;
      margin: 0 auto;
    }

    .main-title {
      font-size: clamp(3rem, 8vw, 6rem);
      font-weight: 700;
      margin-bottom: 1rem;
      letter-spacing: 0.02em;
      position: relative;
      background: linear-gradient(
        105deg,
        #1e40af 0%,
        #1e40af 30%,
        #ffffff 50%,
        #1e40af 70%,
        #1e40af 100%
      );
      background-size: 300% 100%;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      color: transparent;
      animation: titleAppear 1s ease-out, shimmerText 6s ease-in-out infinite;
    }

    .sub-title {
      font-size: clamp(1.5rem, 4vw, 2.5rem);
      font-weight: 500;
      margin-bottom: 2rem;
      position: relative;
      color: #0f766e;
      animation: titleAppear 1s ease-out 0.3s both;
    }

    .description {
      font-size: clamp(1rem, 2.5vw, 1.4rem);
      line-height: 1.8;
      max-width: 700px;
      margin: 0 auto;
      position: relative;
      color: #475569;
      animation: titleAppear 1s ease-out 0.6s both;
    }

    @keyframes wave1 {
      from {
        transform: rotate(0deg) translateY(0) scale(1, 0.8);
      }
      50% {
        transform: rotate(180deg) translateY(-3%) scale(1.1, 1);
      }
      to {
        transform: rotate(360deg) translateY(0) scale(1, 0.8);
      }
    }

    @keyframes wave2 {
      from {
        transform: rotate(0deg) translateY(0) scale(1, 0.9);
      }
      50% {
        transform: rotate(180deg) translateY(-2%) scale(1, 1.1);
      }
      to {
        transform: rotate(360deg) translateY(0) scale(1, 0.9);
      }
    }

    @keyframes wave3 {
      from {
        transform: rotate(0deg) translateY(0) scale(1.1, 0.7);
      }
      50% {
        transform: rotate(180deg) translateY(-1%) scale(0.9, 1.2);
      }
      to {
        transform: rotate(360deg) translateY(0) scale(1.1, 0.7);
      }
    }

    @keyframes floatEnhanced {
      0%,
      100% {
        transform: translateY(0px) translateX(0px) scale(1);
        opacity: 0.7;
      }
      25% {
        transform: translateY(-20px) translateX(5px) scale(1.05);
        opacity: 0.9;
      }
      50% {
        transform: translateY(-10px) translateX(-5px) scale(1.1);
        opacity: 1;
      }
      75% {
        transform: translateY(-25px) translateX(3px) scale(1.05);
        opacity: 0.9;
      }
    }

    @keyframes shimmerText {
      /* 前20%时间静止 */
      0% {
        background-position: 100% 0;
      }
      /* 后50%时间静止等待 */
      100% {
        background-position: 0 0;
      }
    }

    @keyframes titleAppear {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (max-width: 768px) {
      .hero-content {
        padding: 0 20px;
      }

      .floating-icon {
        width: 65px;
        height: 65px;
      }

      .floating-icon .icon {
        font-size: 28px;
      }

      .qr-icon {
        top: 15%;
        right: 5%;
      }

      .cloud-icon {
        top: 35%;
        left: 5%;
      }

      .pipe-icon {
        bottom: 20%;
        right: 15%;
      }
    }

    @media (max-width: 480px) {
      .hero-content {
        padding: 0 15px;
      }

      .floating-icon {
        width: 55px;
        height: 55px;
      }

      .floating-icon .icon {
        font-size: 24px;
      }

      .description {
        font-size: 1rem;
        line-height: 1.6;
      }
    }

    /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.absolute{position:absolute;}
.fixed{position:fixed;}
.relative{position:relative;}
.static{position:static;}
.bottom-6{bottom:1.5rem;}
.right-6{right:1.5rem;}
.z-50{z-index:50;}
.block{display:block;}
.hidden{display:none;}
.h-12{height:3rem;}
.w-12{width:3rem;}
.w-full{width:100%;}
.flex{display:flex;}
.transform{transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed;}
.items-center{align-items:center;}
.justify-center{justify-content:center;}
.space-x-3>:not([hidden])~:not([hidden]){--un-space-x-reverse:0;margin-left:calc(0.75rem * calc(1 - var(--un-space-x-reverse)));margin-right:calc(0.75rem * var(--un-space-x-reverse));}
.border{border-width:1px;}
.rounded-full{border-radius:9999px;}
.bg-white\\/70{background-color:rgb(255 255 255 / 0.7) /* #fff */;}
.hover\\:bg-gray-200:hover{--un-bg-opacity:1;background-color:rgb(229 231 235 / var(--un-bg-opacity)) /* #e5e7eb */;}
.px-4{padding-left:1rem;padding-right:1rem;}
.text-2xl{font-size:1.5rem;line-height:2rem;}
.disabled\\:opacity-50:disabled{opacity:0.5;}
.shadow-lg{--un-shadow:var(--un-shadow-inset) 0 10px 15px -3px var(--un-shadow-color, rgb(0 0 0 / 0.1)),var(--un-shadow-inset) 0 4px 6px -4px var(--un-shadow-color, rgb(0 0 0 / 0.1));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.backdrop-filter{-webkit-backdrop-filter:var(--un-backdrop-blur) var(--un-backdrop-brightness) var(--un-backdrop-contrast) var(--un-backdrop-grayscale) var(--un-backdrop-hue-rotate) var(--un-backdrop-invert) var(--un-backdrop-opacity) var(--un-backdrop-saturate) var(--un-backdrop-sepia);backdrop-filter:var(--un-backdrop-blur) var(--un-backdrop-brightness) var(--un-backdrop-contrast) var(--un-backdrop-grayscale) var(--un-backdrop-hue-rotate) var(--un-backdrop-invert) var(--un-backdrop-opacity) var(--un-backdrop-saturate) var(--un-backdrop-sepia);}
.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.ease-in-out{transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);}
.ease-out{transition-timing-function:cubic-bezier(0, 0, 0.2, 1);}
.backdrop-blur-sm{backdrop-filter:blur(4px);};
  `);customElements.define("app-main",A);class D extends z{constructor(){super(),this.needsScroll=!1}firstUpdated(){this.checkContentHeight(),window.addEventListener("resize",()=>this.checkContentHeight())}updated(e){super.updated(e),e.has("needsScroll")&&this.classList.toggle("needs-scroll",this.needsScroll)}checkContentHeight(){this.safeRequestAnimationFrame(()=>{const e=this.querySelector("*");if(e){const r=window.innerHeight-64,n=e.scrollHeight||e.offsetHeight;this.needsScroll=n>r*.9}})}render(){return s`
      <div class="${this.needsScroll?"scroll-container":"center-container"}">
        <slot></slot>
      </div>
    `}}m(D,"properties",{sectionId:{type:String,attribute:"id"},needsScroll:{type:Boolean,state:!0}}),m(D,"styles",k`
    :host {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      padding: 2rem 1rem;
      opacity: 0;
      visibility: hidden;
      transform: translateX(30px);
      transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out, visibility 0s 0.5s;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      overflow-y: auto;
      overflow-x: hidden;
      box-sizing: border-box;
    }

    :host(.active) {
      opacity: 1;
      visibility: visible;
      transform: translateX(0);
      transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
      z-index: 10;
    }

    :host(.exiting) {
      transform: translateX(-30px);
      opacity: 0;
    }

    /* 当需要滚动时，改变布局方式 */
    :host(.needs-scroll) {
      align-items: flex-start;
      justify-content: flex-start;
    }

    /* 滚动模式下的内容容器 */
    .scroll-container {
      width: 100%;
      min-height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
    }

    /* 居中模式下的内容容器 */
    .center-container {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    /* 自定义滚动条样式 */
    :host::-webkit-scrollbar {
      width: 6px;
    }

    :host::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.1);
      border-radius: 3px;
    }

    :host::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.3);
      border-radius: 3px;
    }

    :host::-webkit-scrollbar-thumb:hover {
      background: rgba(0, 0, 0, 0.5);
    }

    /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.visible{visibility:visible;}
.absolute{position:absolute;}
.static{position:static;}
.hidden{display:none;}
.flex{display:flex;}
.transform{transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.resize{resize:both;}
.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.ease-in-out{transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);}
  `);customElements.define("content-section",D);class Z extends z{constructor(){super(),this.currentView="concept"}updated(e){super.updated(e),e.has("currentView")&&this.safeRequestAnimationFrame(()=>{this.currentView==="concept"&&this.initializeConceptAnimations(),this.notifyContentHeightChange()})}notifyContentHeightChange(){const e=this.closest("content-section");e&&e.checkContentHeight&&setTimeout(()=>e.checkContentHeight(),100)}initializeConceptAnimations(){const e=this.shadowRoot.querySelectorAll(".concept-card");e.length>0&&i.from(e,{y:50,duration:.6,stagger:.2,ease:"power2.out"}),this.safeRequestAnimationFrame(()=>{this.initializeConceptQRCode()})}firstUpdated(){this.currentView==="concept"&&this.safeRequestAnimationFrame(()=>{this.initializeConceptAnimations()})}renderConceptFlow(){return s`
      <div
        class="bg-white rounded-3xl shadow-2xl p-6 max-w-7xl w-full flex flex-col items-center animate-fadeIn"
      >
        <div class="mb-12 text-center">
          <h3 class="text-3xl font-bold text-blue-600 mb-4">
            核心理念：一物一码
          </h3>
          <p class="text-lg text-gray-600 leading-relaxed max-w-3xl">
            为每一件物料赋予唯一的二维码，伴随其全生命周期。扫描二维码即可链接其数字档案，解决信息与实体分离的难题，实现物料的精准追溯和智能管理。
          </p>
        </div>

        <!-- 流程卡片容器 -->
        <div class="relative w-full max-w-6xl mb-8">
          <!-- 连接线容器 -->
          <div class="absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2 z-0">
            <svg
              class="w-full h-8"
              viewBox="0 0 1000 32"
              preserveAspectRatio="none"
            >
              <!-- 第一段连接线 -->
              <path
                id="flow-line-1"
                d="M250 16 Q350 8 450 16"
                stroke="url(#gradient1)"
                stroke-width="3"
                fill="none"
                stroke-dasharray="8,4"
                opacity="0.8"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  values="0;-12;0"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </path>
              <!-- 第二段连接线 -->
              <path
                id="flow-line-2"
                d="M550 16 Q650 8 750 16"
                stroke="url(#gradient2)"
                stroke-width="3"
                fill="none"
                stroke-dasharray="8,4"
                opacity="0.8"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  values="0;-12;0"
                  dur="3s"
                  begin="0.5s"
                  repeatCount="indefinite"
                />
              </path>
              <!-- 箭头 -->
              <polygon
                points="445,13 455,16 445,19"
                fill="#3b82f6"
                opacity="0.7"
              />
              <polygon
                points="745,13 755,16 745,19"
                fill="#06b6d4"
                opacity="0.7"
              />

              <!-- 渐变定义 -->
              <defs>
                <linearGradient
                  id="gradient1"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop
                    offset="0%"
                    style="stop-color:#3b82f6;stop-opacity:0.6"
                  />
                  <stop
                    offset="100%"
                    style="stop-color:#06b6d4;stop-opacity:0.8"
                  />
                </linearGradient>
                <linearGradient
                  id="gradient2"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop
                    offset="0%"
                    style="stop-color:#06b6d4;stop-opacity:0.6"
                  />
                  <stop
                    offset="100%"
                    style="stop-color:#10b981;stop-opacity:0.8"
                  />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <!-- 卡片布局 -->
          <div class="flex items-center justify-between gap-18 relative z-10">
            ${[{title:"物理实体",icon:"mdi:cube-outline",color:"#3b82f6",bgGradient:"from-blue-50 to-blue-100",borderColor:"border-blue-200",desc:"每一件物料都拥有唯一身份标识",subtext:"管材、配件、阀门等水务物料",isHighlight:!1},{title:"唯一二维码",icon:"mdi:qrcode",color:"#06b6d4",bgGradient:"from-cyan-50 to-cyan-100",borderColor:"border-cyan-300",desc:"二维码全生命周期追溯",subtext:"一物一码，身份唯一",isHighlight:!0},{title:"数字档案",icon:"mdi:database-outline",color:"#10b981",bgGradient:"from-emerald-50 to-emerald-100",borderColor:"border-emerald-200",desc:"扫码直达物料全息档案",subtext:"生产、检验、运维全记录",isHighlight:!1}].map((t,a)=>s`
                <div
                  class="concept-card group flex flex-col items-center p-6 bg-gradient-to-br ${t.bgGradient} rounded-2xl border-2 ${t.borderColor} shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 cursor-pointer ${t.isHighlight?"ring-4 ring-cyan-200 scale-105 shadow-2xl":""}"
                  style="width: ${t.isHighlight?"260px":"240px"}; min-height: 280px;"
                  @mouseenter=${()=>this.handleCardHover(a)}
                >
                  <!-- 图标区域 -->
                  <div
                    class="w-20 h-20 rounded-full flex items-center justify-center mb-4 shadow-md transition-all duration-300 bg-white group-hover:scale-110 ${t.isHighlight?"ring-2 ring-cyan-200":""}"
                    style="color: ${t.color}; border: 3px solid ${t.color}20;"
                  >
                    <iconify-icon
                      icon="${t.icon}"
                      class="text-5xl transition-transform duration-300 group-hover:scale-110"
                      style="color: ${t.color};"
                    ></iconify-icon>
                  </div>

                  <!-- 标题 -->
                  <h4
                    class="text-xl font-bold text-gray-800 mb-3 text-center ${t.isHighlight?"text-cyan-700":""}"
                  >
                    ${t.title}
                  </h4>

                  <!-- 描述 -->
                  <p
                    class="text-sm text-gray-600 text-center mb-3 leading-relaxed"
                  >
                    ${t.desc}
                  </p>

                  <!-- 副文本 -->
                  <p class="text-xs text-gray-500 text-center font-medium">
                    ${t.subtext}
                  </p>

                  <!-- 特殊内容：二维码展示 -->
                  ${a===1?s`
                        <div
                          class="mt-4 relative w-20 h-20 rounded-lg overflow-hidden bg-black shadow-lg group-hover:scale-110 transition-transform duration-300 ring-2 ring-cyan-300"
                        >
                          <canvas
                            id="concept-qr-canvas"
                            width="80"
                            height="80"
                            class="w-full h-full"
                          ></canvas>
                          <div
                            id="concept-scan-line"
                            class="absolute left-0 w-full h-2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-70 rounded-sm"
                            style="top: 0px;"
                          ></div>
                        </div>
                      `:""}

                  <!-- 悬浮效果装饰 -->
                  <div
                    class="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/0 via-cyan-400/0 to-emerald-400/0 group-hover:from-blue-400/5 group-hover:via-cyan-400/5 group-hover:to-emerald-400/5 transition-all duration-500"
                  ></div>

                  <!-- 高亮装饰 -->
                  ${t.isHighlight?s`
                        <div
                          class="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg"
                        >
                          <iconify-icon
                            icon="mdi:star"
                            class="text-white text-sm"
                          ></iconify-icon>
                        </div>
                      `:""}
                </div>
              `)}
          </div>
        </div>

        <!-- 交互说明 -->
        <div class="text-center text-gray-500 text-sm">
          悬停卡片体验交互效果，二维码卡片为核心理念
        </div>
      </div>
    `}handleCardHover(e){const t=this.shadowRoot.querySelectorAll(".concept-card");t[e]&&i.to(t[e].querySelector("iconify-icon"),{rotation:360,duration:.6,ease:"power2.out"})}initializeConceptQRCode(){const e=this.shadowRoot.querySelector("#concept-qr-canvas"),t=this.shadowRoot.querySelector("#concept-scan-line");if(e&&e.getContext){const a=e.getContext("2d"),r=8,n=e.width/r;a.clearRect(0,0,e.width,e.height);for(let o=0;o<r;o++)for(let l=0;l<r;l++)a.fillStyle=Math.random()>.5?"#222":"#fff",a.fillRect(o*n,l*n,n,n);t&&(i.set(t,{y:0}),i.to(t,{y:e.height-8,duration:1.5,ease:"power2.inOut",repeat:-1,yoyo:!0}))}}switchView(e){this.currentView=e,this.requestUpdate()}render(){return s`
      <div class="w-full flex flex-col items-center relative">
        <div class="text-center mb-8 z-10 relative">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">我们的解决方案</h2>
          <p class="text-lg text-gray-400 max-w-xl mx-auto">
            构建一体化数字平台，以"一物一码"为核心，打造"云+三端"协同体系
          </p>
        </div>
        
        <div class="w-full max-w-7xl flex items-start justify-center relative">
          <div
            class="flex flex-col items-center text-center animate-fadeIn w-full justify-center"
            style="display: ${this.currentView==="concept"?"flex":"none"};"
          >
            ${this.renderConceptFlow()}
          </div>
          <div
            class="w-full animate-fadeIn"
            style="display: ${this.currentView==="architecture"?"block":"none"}"
          >
            <cloud-architecture></cloud-architecture>
          </div>
        </div>

        <!-- 切换按钮 -->
        <div class="flex gap-4 justify-center mt-8 z-20">
          <button
            class="px-6 py-3 rounded-full cursor-pointer font-semibold transition backdrop-blur-md shadow ${this.currentView==="concept"?"bg-blue-500 text-white shadow-blue-200":"bg-white/80 text-slate-700"}"
            @click=${()=>this.switchView("concept")}
          >
            核心理念
          </button>
          <button
            class="px-6 py-3 rounded-full cursor-pointer font-semibold transition backdrop-blur-md shadow ${this.currentView==="architecture"?"bg-blue-500 text-white shadow-blue-200":"bg-white/80 text-slate-700"}"
            @click=${()=>this.switchView("architecture")}
          >
            系统架构
          </button>
        </div>
      </div>
    `}}m(Z,"properties",{currentView:{type:String}}),m(Z,"styles",k`
    /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.absolute{position:absolute;}
.relative{position:relative;}
.static{position:static;}
.inset-0{inset:0;}
.-right-2{right:-0.5rem;}
.-top-2{top:-0.5rem;}
.left-0{left:0;}
.right-0{right:0;}
.top-1\\/2{top:50%;}
.z-0{z-index:0;}
.z-10{z-index:10;}
.z-20{z-index:20;}
.mx-auto{margin-left:auto;margin-right:auto;}
.mb-12{margin-bottom:3rem;}
.mb-3{margin-bottom:0.75rem;}
.mb-4{margin-bottom:1rem;}
.mb-8{margin-bottom:2rem;}
.mt-4{margin-top:1rem;}
.mt-8{margin-top:2rem;}
.block{display:block;}
.h-1{height:0.25rem;}
.h-2{height:0.5rem;}
.h-20{height:5rem;}
.h-6{height:1.5rem;}
.h-8{height:2rem;}
.h-full{height:100%;}
.max-w-3xl{max-width:48rem;}
.max-w-6xl{max-width:72rem;}
.max-w-7xl{max-width:80rem;}
.max-w-xl{max-width:36rem;}
.w-20{width:5rem;}
.w-6{width:1.5rem;}
.w-full{width:100%;}
.flex{display:flex;}
.flex-col{flex-direction:column;}
.-translate-y-1\\/2{--un-translate-y:-50%;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.hover\\:-translate-y-2:hover{--un-translate-y:-0.5rem;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.scale-105{--un-scale-x:1.05;--un-scale-y:1.05;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.group:hover .group-hover\\:scale-110{--un-scale-x:1.1;--un-scale-y:1.1;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.hover\\:scale-105:hover{--un-scale-x:1.05;--un-scale-y:1.05;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.transform{transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.cursor-pointer,
[cursor-pointer=""]{cursor:pointer;}
.items-start{align-items:flex-start;}
.items-center{align-items:center;}
.justify-center{justify-content:center;}
.justify-between{justify-content:space-between;}
.gap-18{gap:4.5rem;}
.gap-4{gap:1rem;}
.overflow-hidden{overflow:hidden;}
.border{border-width:1px;}
.border-2{border-width:2px;}
.border-blue-200{--un-border-opacity:1;border-color:rgb(191 219 254 / var(--un-border-opacity));}
.border-cyan-300{--un-border-opacity:1;border-color:rgb(103 232 249 / var(--un-border-opacity));}
.border-emerald-200{--un-border-opacity:1;border-color:rgb(167 243 208 / var(--un-border-opacity));}
.rounded-2xl{border-radius:1rem;}
.rounded-3xl{border-radius:1.5rem;}
.rounded-full,
[rounded-full=""]{border-radius:9999px;}
.rounded-lg{border-radius:0.5rem;}
.rounded-sm{border-radius:0.125rem;}
.bg-black{--un-bg-opacity:1;background-color:rgb(0 0 0 / var(--un-bg-opacity)) /* #000 */;}
.bg-blue-500,
[bg-blue-500=""]{--un-bg-opacity:1;background-color:rgb(59 130 246 / var(--un-bg-opacity)) /* #3b82f6 */;}
.bg-white,
[bg-white=""]{--un-bg-opacity:1;background-color:rgb(255 255 255 / var(--un-bg-opacity)) /* #fff */;}
.bg-white\\/80{background-color:rgb(255 255 255 / 0.8) /* #fff */;}
.from-blue-400\\/0{--un-gradient-from-position:0%;--un-gradient-from:rgb(96 165 250 / 0) var(--un-gradient-from-position);--un-gradient-to-position:100%;--un-gradient-to:rgb(96 165 250 / 0) var(--un-gradient-to-position);--un-gradient-stops:var(--un-gradient-from), var(--un-gradient-to);}
.from-blue-50{--un-gradient-from-position:0%;--un-gradient-from:rgb(239 246 255 / var(--un-from-opacity, 1)) var(--un-gradient-from-position);--un-gradient-to-position:100%;--un-gradient-to:rgb(239 246 255 / 0) var(--un-gradient-to-position);--un-gradient-stops:var(--un-gradient-from), var(--un-gradient-to);}
.from-cyan-400{--un-gradient-from-position:0%;--un-gradient-from:rgb(34 211 238 / var(--un-from-opacity, 1)) var(--un-gradient-from-position);--un-gradient-to-position:100%;--un-gradient-to:rgb(34 211 238 / 0) var(--un-gradient-to-position);--un-gradient-stops:var(--un-gradient-from), var(--un-gradient-to);}
.from-cyan-50{--un-gradient-from-position:0%;--un-gradient-from:rgb(236 254 255 / var(--un-from-opacity, 1)) var(--un-gradient-from-position);--un-gradient-to-position:100%;--un-gradient-to:rgb(236 254 255 / 0) var(--un-gradient-to-position);--un-gradient-stops:var(--un-gradient-from), var(--un-gradient-to);}
.from-emerald-50{--un-gradient-from-position:0%;--un-gradient-from:rgb(236 253 245 / var(--un-from-opacity, 1)) var(--un-gradient-from-position);--un-gradient-to-position:100%;--un-gradient-to:rgb(236 253 245 / 0) var(--un-gradient-to-position);--un-gradient-stops:var(--un-gradient-from), var(--un-gradient-to);}
.from-transparent{--un-gradient-from-position:0%;--un-gradient-from:transparent var(--un-gradient-from-position);--un-gradient-to-position:100%;--un-gradient-to:rgb(255 255 255 / 0) var(--un-gradient-to-position);--un-gradient-stops:var(--un-gradient-from), var(--un-gradient-to);}
.group:hover .group-hover\\:from-blue-400\\/5{--un-gradient-from-position:0%;--un-gradient-from:rgb(96 165 250 / 0.05) var(--un-gradient-from-position);--un-gradient-to-position:100%;--un-gradient-to:rgb(96 165 250 / 0) var(--un-gradient-to-position);--un-gradient-stops:var(--un-gradient-from), var(--un-gradient-to);}
.via-cyan-400{--un-gradient-via-position:50%;--un-gradient-to:rgb(34 211 238 / 0);--un-gradient-stops:var(--un-gradient-from), rgb(34 211 238 / var(--un-via-opacity, 1)) var(--un-gradient-via-position), var(--un-gradient-to);}
.via-cyan-400\\/0{--un-gradient-via-position:50%;--un-gradient-to:rgb(34 211 238 / 0);--un-gradient-stops:var(--un-gradient-from), rgb(34 211 238 / 0) var(--un-gradient-via-position), var(--un-gradient-to);}
.group:hover .group-hover\\:via-cyan-400\\/5{--un-gradient-via-position:50%;--un-gradient-to:rgb(34 211 238 / 0);--un-gradient-stops:var(--un-gradient-from), rgb(34 211 238 / 0.05) var(--un-gradient-via-position), var(--un-gradient-to);}
.to-blue-100{--un-gradient-to-position:100%;--un-gradient-to:rgb(219 234 254 / var(--un-to-opacity, 1)) var(--un-gradient-to-position);}
.to-blue-500{--un-gradient-to-position:100%;--un-gradient-to:rgb(59 130 246 / var(--un-to-opacity, 1)) var(--un-gradient-to-position);}
.to-cyan-100{--un-gradient-to-position:100%;--un-gradient-to:rgb(207 250 254 / var(--un-to-opacity, 1)) var(--un-gradient-to-position);}
.to-emerald-100{--un-gradient-to-position:100%;--un-gradient-to:rgb(209 250 229 / var(--un-to-opacity, 1)) var(--un-gradient-to-position);}
.to-emerald-400\\/0{--un-gradient-to-position:100%;--un-gradient-to:rgb(52 211 153 / 0) var(--un-gradient-to-position);}
.to-transparent{--un-gradient-to-position:100%;--un-gradient-to:transparent var(--un-gradient-to-position);}
.group:hover .group-hover\\:to-emerald-400\\/5{--un-gradient-to-position:100%;--un-gradient-to:rgb(52 211 153 / 0.05) var(--un-gradient-to-position);}
.bg-gradient-to-br{--un-gradient-shape:to bottom right in oklch;--un-gradient:var(--un-gradient-shape), var(--un-gradient-stops);background-image:linear-gradient(var(--un-gradient));}
.bg-gradient-to-r{--un-gradient-shape:to right in oklch;--un-gradient:var(--un-gradient-shape), var(--un-gradient-stops);background-image:linear-gradient(var(--un-gradient));}
[stroke-width~="\\33 "]{stroke-width:3px;}
.p-6{padding:1.5rem;}
.px-6,
[px-6=""]{padding-left:1.5rem;padding-right:1.5rem;}
.py-3,
[py-3=""]{padding-top:0.75rem;padding-bottom:0.75rem;}
.text-center{text-align:center;}
.text-3xl{font-size:1.875rem;line-height:2.25rem;}
.text-4xl{font-size:2.25rem;line-height:2.5rem;}
.text-5xl{font-size:3rem;line-height:1;}
.text-lg{font-size:1.125rem;line-height:1.75rem;}
.text-sm{font-size:0.875rem;line-height:1.25rem;}
.text-xl{font-size:1.25rem;line-height:1.75rem;}
.text-xs{font-size:0.75rem;line-height:1rem;}
.text-blue-600{--un-text-opacity:1;color:rgb(37 99 235 / var(--un-text-opacity)) /* #2563eb */;}
.text-cyan-700{--un-text-opacity:1;color:rgb(14 116 144 / var(--un-text-opacity)) /* #0e7490 */;}
.text-gray-400{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-gray-500{--un-text-opacity:1;color:rgb(107 114 128 / var(--un-text-opacity)) /* #6b7280 */;}
.text-gray-600{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity)) /* #4b5563 */;}
.text-gray-800{--un-text-opacity:1;color:rgb(31 41 55 / var(--un-text-opacity)) /* #1f2937 */;}
.text-slate-700{--un-text-opacity:1;color:rgb(51 65 85 / var(--un-text-opacity)) /* #334155 */;}
.text-white,
[text-white=""]{--un-text-opacity:1;color:rgb(255 255 255 / var(--un-text-opacity)) /* #fff */;}
.font-bold{font-weight:700;}
.font-medium{font-weight:500;}
.font-semibold,
[font-semibold=""]{font-weight:600;}
.leading-relaxed{line-height:1.625;}
.opacity-70{opacity:0.7;}
.shadow,
[shadow=""]{--un-shadow:var(--un-shadow-inset) 0 1px 3px 0 var(--un-shadow-color, rgb(0 0 0 / 0.1)),var(--un-shadow-inset) 0 1px 2px -1px var(--un-shadow-color, rgb(0 0 0 / 0.1));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.shadow-2xl{--un-shadow:var(--un-shadow-inset) 0 25px 50px -12px var(--un-shadow-color, rgb(0 0 0 / 0.25));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.shadow-blue-200{--un-shadow-opacity:1;--un-shadow-color:rgb(191 219 254 / var(--un-shadow-opacity)) /* #bfdbfe */;}
.shadow-lg{--un-shadow:var(--un-shadow-inset) 0 10px 15px -3px var(--un-shadow-color, rgb(0 0 0 / 0.1)),var(--un-shadow-inset) 0 4px 6px -4px var(--un-shadow-color, rgb(0 0 0 / 0.1));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.shadow-md{--un-shadow:var(--un-shadow-inset) 0 4px 6px -1px var(--un-shadow-color, rgb(0 0 0 / 0.1)),var(--un-shadow-inset) 0 2px 4px -2px var(--un-shadow-color, rgb(0 0 0 / 0.1));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.hover\\:shadow-xl:hover{--un-shadow:var(--un-shadow-inset) 0 20px 25px -5px var(--un-shadow-color, rgb(0 0 0 / 0.1)),var(--un-shadow-inset) 0 8px 10px -6px var(--un-shadow-color, rgb(0 0 0 / 0.1));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.ring-2{--un-ring-width:2px;--un-ring-offset-shadow:var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);--un-ring-shadow:var(--un-ring-inset) 0 0 0 calc(var(--un-ring-width) + var(--un-ring-offset-width)) var(--un-ring-color);box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.ring-4{--un-ring-width:4px;--un-ring-offset-shadow:var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);--un-ring-shadow:var(--un-ring-inset) 0 0 0 calc(var(--un-ring-width) + var(--un-ring-offset-width)) var(--un-ring-color);box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.ring-cyan-200{--un-ring-opacity:1;--un-ring-color:rgb(165 243 252 / var(--un-ring-opacity)) /* #a5f3fc */;}
.ring-cyan-300{--un-ring-opacity:1;--un-ring-color:rgb(103 232 249 / var(--un-ring-opacity)) /* #67e8f9 */;}
.transition,
[transition=""]{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.transition-all{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.duration-300{transition-duration:300ms;}
.duration-500{transition-duration:500ms;}
.ease{transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);}
.backdrop-blur-md,
[backdrop-blur-md=""]{backdrop-filter:blur(12px);};
  `);customElements.define("solution-showcase",Z);class L extends z{constructor(){super(),this.activeClient=null,this.clientFeatures={web:[{name:"立项",icon:"mdi:file-document-plus"},{name:"组织管理",icon:"mdi:account-group"},{name:"二维码打印",icon:"mdi:qrcode"},{name:"实时信息查询",icon:"mdi:magnify"},{name:"归档信息回溯",icon:"mdi:archive-search"}],wechat:[{name:"临时授权",icon:"mdi:shield-check"},{name:"单项录入",icon:"mdi:pencil-plus"},{name:"公共查询",icon:"mdi:magnify"}],mobile:[{name:"临时授权",icon:"mdi:shield-check"},{name:"批量录入",icon:"mdi:file-multiple"},{name:"单项录入",icon:"mdi:pencil-plus"},{name:"全流程节点",icon:"mdi:timeline"},{name:"公共查询",icon:"mdi:magnify"}]}}firstUpdated(){this.initAnimations()}initAnimations(){const e=this.shadowRoot.querySelector(".cloud-container");e&&i.to(e,{scale:1.05,duration:2,ease:"power2.inOut",yoyo:!0,repeat:-1}),this.shadowRoot.querySelectorAll(".client-card").forEach((a,r)=>{i.fromTo(a,{opacity:0,y:30},{opacity:1,y:0,duration:.8,delay:r*.1,ease:"power2.out"})}),this.animateConnectionLines()}animateConnectionLines(){this.shadowRoot.querySelectorAll(".connection-path").forEach(t=>{i.to(t,{strokeDashoffset:-24,duration:4,ease:"none",repeat:-1})})}animateActiveConnection(e){this.shadowRoot.querySelectorAll(".connection-path").forEach(r=>{i.killTweensOf(r),r.style.strokeWidth="2",r.style.opacity="0.6",i.to(r,{strokeDashoffset:-24,duration:4,ease:"none",repeat:-1})});const a=this.shadowRoot.querySelector(`.connection-${e}`);a&&(a.style.strokeWidth="3",a.style.opacity="1",i.to(a,{strokeDashoffset:-12,duration:2,ease:"none",repeat:-1})),this.animateDataParticles(e)}animateDataParticles(e){this.shadowRoot.querySelectorAll(".data-particle").forEach(a=>{i.set(a,{opacity:1}),i.to(a,{scale:1.3,duration:.75,ease:"power2.inOut",yoyo:!0,repeat:-1})})}handleClientClick(e){const t=this.activeClient===e;this.activeClient=t?null:e,this.activeClient?(this.animateActiveConnection(e),this.showPopover(e)):(this.animateConnectionLines(),this.shadowRoot.querySelectorAll(".data-particle").forEach(r=>{i.to(r,{opacity:0,duration:.3})}),this.hidePopover()),this.requestUpdate()}showPopover(e){this.hidePopover(),setTimeout(()=>{const t=this.shadowRoot.querySelector(`#popover-${e}`);t&&i.fromTo(t,{opacity:0,x:e==="mobile"?50:-50,scale:.8},{opacity:1,x:0,scale:1,duration:.4,ease:"back.out(1.7)"})},50)}hidePopover(){this.shadowRoot.querySelectorAll(".feature-popover").forEach(t=>{i.to(t,{opacity:0,scale:.8,duration:.3})})}handleClosePopover(){this.activeClient=null,this.animateConnectionLines(),this.shadowRoot.querySelectorAll(".data-particle").forEach(t=>{i.to(t,{opacity:0,duration:.3})}),this.hidePopover(),this.requestUpdate()}render(){return s`
      <div
        class="relative w-[1280px] h-[600px] bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 rounded-3xl p-8 overflow-hidden"
      >
        <!-- 背景装饰 -->
        <div
          class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)] pointer-events-none"
        ></div>
        <div
          class="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.1),transparent_50%)] pointer-events-none"
        ></div>

        <!-- 提示文字 -->
        <div
          class="absolute top-4 right-6 text-sm text-slate-600 font-medium opacity-80"
        >
          <iconify-icon icon="mdi:cursor-pointer" class="mr-1"></iconify-icon>
          点击查看连接
        </div>

        <!-- 中央云服务器 -->
        <div
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-64"
        >
          <div
            class="cloud-container relative w-full h-full bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 rounded-3xl flex items-center justify-center shadow-2xl backdrop-blur-sm border border-white/20"
          >
            <!-- 云形状装饰 -->
            <div
              class="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-80"
            ></div>
            <div
              class="absolute -top-4 -right-8 w-12 h-12 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full opacity-70"
            ></div>
            <div
              class="absolute bottom-3 left-8 w-10 h-10 bg-gradient-to-br from-blue-300 to-blue-500 rounded-full opacity-60"
            ></div>

            <div class="relative z-10 text-center text-white p-8">
              <div class="flex items-center justify-center mb-6">
                <iconify-icon
                  icon="mdi:cloud-outline"
                  class="text-3xl mr-2"
                ></iconify-icon>
                <h3 class="text-xl font-bold">云服务器阵列</h3>
              </div>

              <div class="grid grid-cols-3 gap-4 max-w-sm">
                <div
                  class="group flex flex-col items-center p-3 bg-white/20 rounded-xl backdrop-blur-md transition-all duration-300 hover:bg-white/30 hover:scale-105 cursor-pointer"
                >
                  <iconify-icon
                    icon="mdi:database"
                    class="text-2xl mb-2 group-hover:scale-110 transition-transform"
                  ></iconify-icon>
                  <span class="text-xs font-medium text-center">数据库</span>
                </div>
                <div
                  class="group flex flex-col items-center p-3 bg-white/20 rounded-xl backdrop-blur-md transition-all duration-300 hover:bg-white/30 hover:scale-105 cursor-pointer"
                >
                  <iconify-icon
                    icon="mdi:memory"
                    class="text-2xl mb-2 group-hover:scale-110 transition-transform"
                  ></iconify-icon>
                  <span class="text-xs font-medium text-center">缓存</span>
                </div>
                <div
                  class="group flex flex-col items-center p-3 bg-white/20 rounded-xl backdrop-blur-md transition-all duration-300 hover:bg-white/30 hover:scale-105 cursor-pointer"
                >
                  <iconify-icon
                    icon="mdi:message-processing"
                    class="text-2xl mb-2 group-hover:scale-110 transition-transform"
                  ></iconify-icon>
                  <span class="text-xs font-medium text-center">消息</span>
                </div>
                <div
                  class="group flex flex-col items-center p-3 bg-white/20 rounded-xl backdrop-blur-md transition-all duration-300 hover:bg-white/30 hover:scale-105 cursor-pointer"
                >
                  <iconify-icon
                    icon="mdi:application-cog"
                    class="text-2xl mb-2 group-hover:scale-110 transition-transform"
                  ></iconify-icon>
                  <span class="text-xs font-medium text-center">应用</span>
                </div>
                <div
                  class="group flex flex-col items-center p-3 bg-white/20 rounded-xl backdrop-blur-md transition-all duration-300 hover:bg-white/30 hover:scale-105 cursor-pointer"
                >
                  <iconify-icon
                    icon="mdi:shield-lock"
                    class="text-2xl mb-2 group-hover:scale-110 transition-transform"
                  ></iconify-icon>
                  <span class="text-xs font-medium text-center">安全</span>
                </div>
                <div
                  class="group flex flex-col items-center p-3 bg-white/20 rounded-xl backdrop-blur-md transition-all duration-300 hover:bg-white/30 hover:scale-105 cursor-pointer"
                >
                  <iconify-icon
                    icon="mdi:router-network"
                    class="text-2xl mb-2 group-hover:scale-110 transition-transform"
                  ></iconify-icon>
                  <span class="text-xs font-medium text-center">网络</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 连接线SVG -->
        <div class="absolute inset-0 pointer-events-none z-10">
          <svg width="100%" height="100%">
            <defs>
              <linearGradient
                id="lineGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:0.8" />
                <stop
                  offset="100%"
                  style="stop-color:#06b6d4;stop-opacity:0.8"
                />
              </linearGradient>
              <linearGradient
                id="activeLineGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" style="stop-color:#f59e0b;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#ef4444;stop-opacity:1" />
              </linearGradient>
              <!-- 箭头标记 - 指向云服务器 -->
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="8"
                refX="8"
                refY="4"
                orient="auto"
                markerUnits="strokeWidth"
              >
                <path d="M0,0 L0,8 L10,4 z" fill="#3b82f6" stroke="none" />
              </marker>
              <!-- 箭头标记 - 指向客户端 -->
              <marker
                id="arrowhead-reverse"
                markerWidth="10"
                markerHeight="8"
                refX="2"
                refY="4"
                orient="auto"
                markerUnits="strokeWidth"
              >
                <path d="M10,0 L10,8 L0,4 z" fill="#3b82f6" stroke="none" />
              </marker>
              <marker
                id="arrowhead-active"
                markerWidth="10"
                markerHeight="8"
                refX="8"
                refY="4"
                orient="auto"
                markerUnits="strokeWidth"
              >
                <path d="M0,0 L0,8 L10,4 z" fill="#f59e0b" stroke="none" />
              </marker>
              <marker
                id="arrowhead-reverse-active"
                markerWidth="10"
                markerHeight="8"
                refX="2"
                refY="4"
                orient="auto"
                markerUnits="strokeWidth"
              >
                <path d="M10,0 L10,8 L0,4 z" fill="#f59e0b" stroke="none" />
              </marker>
            </defs>

            <!-- 到网页端的连接线 (从网页端到云服务器) -->
            <path
              d="M 120 260 L 120 320 L 420 320"
              class="connection-path connection-web fill-none stroke-2 opacity-60"
              style="stroke: url(#lineGradient); stroke-dasharray: 8,4; stroke-linecap: round; stroke-linejoin: round;"
              marker-end="url(#arrowhead)"
              marker-start="url(#arrowhead-reverse)"
            />

            <!-- 到手机端的连接线 (从云服务器到手机端) -->
            <path
              d="M 900 340 L 1180 340 L 1180 400"
              class="connection-path connection-mobile fill-none stroke-2 opacity-60"
              style="stroke: url(#lineGradient); stroke-dasharray: 8,4; stroke-linecap: round; stroke-linejoin: round;"
              marker-end="url(#arrowhead)"
              marker-start="url(#arrowhead-reverse)"
            />

            <!-- 到微信端的连接线 (从微信端到云服务器) -->
            <path
              d="M 120 410 L 120 360 L 420 360"
              class="connection-path connection-wechat fill-none stroke-2 opacity-60"
              style="stroke: url(#lineGradient); stroke-dasharray: 8,4; stroke-linecap: round; stroke-linejoin: round;"
              marker-end="url(#arrowhead)"
              marker-start="url(#arrowhead-reverse)"
            />

            <!-- 数据流动粒子 -->
            ${this.activeClient?s`
                  <circle
                    class="data-particle"
                    cx="300"
                    cy="300"
                    r="4"
                    fill="#f59e0b"
                    opacity="0"
                  ></circle>
                  <circle
                    class="data-particle"
                    cx="320"
                    cy="300"
                    r="3"
                    fill="#ef4444"
                    opacity="0"
                  ></circle>
                `:""}
          </svg>
        </div>

        <!-- 三个客户端 -->
        <!-- 网页端 -->
        <div class="absolute top-16 left-8">
          <div
            class="client-card web-client group relative flex flex-col items-center bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50 min-w-[140px] transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:scale-105 hover:shadow-2xl ${this.activeClient==="web"?"bg-gradient-to-br from-blue-500 to-blue-600 text-white":""}"
            @click=${()=>this.handleClientClick("web")}
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
            <iconify-icon
              icon="mdi:monitor-dashboard"
              class="text-5xl mb-3 transition-all duration-300 group-hover:scale-110 ${this.activeClient==="web"?"text-white":"text-blue-500"}"
            ></iconify-icon>
            <h4
              class="text-sm font-semibold text-center mb-1 ${this.activeClient==="web"?"text-white":"text-slate-700"}"
            >
              网页端管理
            </h4>
            <p
              class="text-xs text-center ${this.activeClient==="web"?"text-blue-100":"text-slate-500"}"
            >
              PC端控制台
            </p>
          </div>
        </div>

        <!-- 手机端 -->
        <div class="absolute bottom-8 right-8">
          <div
            class="client-card mobile-client group relative flex flex-col items-center bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50 min-w-[140px] transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:scale-105 hover:shadow-2xl ${this.activeClient==="mobile"?"bg-gradient-to-br from-orange-500 to-orange-600 text-white":""}"
            @click=${()=>this.handleClientClick("mobile")}
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
            <iconify-icon
              icon="mdi:cellphone-cog"
              class="text-5xl mb-3 transition-all duration-300 group-hover:scale-110 ${this.activeClient==="mobile"?"text-white":"text-orange-500"}"
            ></iconify-icon>
            <h4
              class="text-sm font-semibold text-center mb-1 ${this.activeClient==="mobile"?"text-white":"text-slate-700"}"
            >
              移动APP
            </h4>
            <p
              class="text-xs text-center ${this.activeClient==="mobile"?"text-orange-100":"text-slate-500"}"
            >
              iOS/Android
            </p>
          </div>
        </div>

        <!-- 微信端 -->
        <div class="absolute bottom-16 left-8">
          <div
            class="client-card wechat-client group relative flex flex-col items-center bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50 min-w-[140px] transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:scale-105 hover:shadow-2xl ${this.activeClient==="wechat"?"bg-gradient-to-br from-green-600 to-green-700 text-white":""}"
            @click=${()=>this.handleClientClick("wechat")}
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-green-600/10 to-green-700/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
            <iconify-icon
              icon="mdi:wechat"
              class="text-5xl mb-3 transition-all duration-300 group-hover:scale-110 ${this.activeClient==="wechat"?"text-white":"text-green-600"}"
            ></iconify-icon>
            <h4
              class="text-sm font-semibold text-center mb-1 ${this.activeClient==="wechat"?"text-white":"text-slate-700"}"
            >
              微信小程序
            </h4>
            <p
              class="text-xs text-center ${this.activeClient==="wechat"?"text-green-100":"text-slate-500"}"
            >
              轻量级应用
            </p>
          </div>
        </div>

        <!-- 连接状态指示器 -->
        ${this.activeClient?s`
              <div
                class="absolute top-4 left-6 flex items-center space-x-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-white/50"
              >
                <div
                  class="w-2 h-2 bg-green-500 rounded-full animate-pulse"
                ></div>
                <span class="text-sm font-medium text-slate-700">
                  ${this.activeClient==="web"?"网页端":this.activeClient==="mobile"?"移动端":"微信端"}
                  连接中
                </span>
              </div>
            `:""}

        <!-- 功能弹出框 -->
        ${this.renderPopovers()}
      </div>
    `}renderPopovers(){if(!this.activeClient)return"";const e=this.clientFeatures[this.activeClient];this.activeClient==="web"||this.activeClient,this.activeClient;let t="";return this.activeClient==="web"?t="top-16 left-20":this.activeClient==="mobile"?t="bottom-8 right-20":this.activeClient==="wechat"&&(t="bottom-16 left-20"),s`
      <div
        id="popover-${this.activeClient}"
        class="feature-popover absolute ${t} bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/50 p-6 min-w-[280px] opacity-0"
        style="z-index: 50;"
      >
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center">
            <iconify-icon
              icon="${this.activeClient==="web"?"mdi:monitor-dashboard":this.activeClient==="mobile"?"mdi:cellphone-cog":"mdi:wechat"}"
              class="text-2xl mr-3 ${this.activeClient==="web"?"text-blue-500":this.activeClient==="mobile"?"text-orange-500":"text-green-600"}"
            ></iconify-icon>
            <h3 class="text-lg font-bold text-slate-800">
              ${this.activeClient==="web"?"网页端功能":this.activeClient==="mobile"?"移动端功能":"微信端功能"}
            </h3>
          </div>
          <button
            class="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100/50 hover:bg-slate-200/80 transition-all duration-200 cursor-pointer group"
            @click=${()=>this.handleClosePopover()}
          >
            <iconify-icon
              icon="mdi:close"
              class="text-lg text-slate-500 group-hover:text-slate-700 group-hover:scale-110 transition-all"
            ></iconify-icon>
          </button>
        </div>

        <div class="space-y-3">
          ${e.map(a=>s`
              <div
                class="group flex items-center p-3 rounded-xl bg-slate-50/50 hover:bg-slate-100/70 transition-all duration-300 cursor-pointer hover:scale-105"
              >
                <iconify-icon
                  icon="${a.icon}"
                  class="text-xl mr-3 ${this.activeClient==="web"?"text-blue-500":this.activeClient==="mobile"?"text-orange-500":"text-green-600"} 
                       group-hover:scale-110 transition-transform"
                ></iconify-icon>
                <span
                  class="text-sm font-medium text-slate-700 group-hover:text-slate-900"
                >
                  ${a.name}
                </span>
              </div>
            `)}
        </div>

        <div class="mt-4 pt-4 border-t border-slate-200/50">
          <p class="text-xs text-slate-500 text-center">
            点击功能项可执行相应操作
          </p>
        </div>
      </div>
    `}}m(L,"properties",{activeClient:{type:String}}),m(L,"styles",k`
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }
    /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.pointer-events-none{pointer-events:none;}
.absolute{position:absolute;}
.relative{position:relative;}
.static{position:static;}
.inset-0{inset:0;}
.-left-6{left:-1.5rem;}
.-right-8{right:-2rem;}
.-top-4{top:-1rem;}
.-top-6{top:-1.5rem;}
.bottom-16{bottom:4rem;}
.bottom-3{bottom:0.75rem;}
.bottom-8{bottom:2rem;}
.left-1\\/2{left:50%;}
.left-20{left:5rem;}
.left-6{left:1.5rem;}
.left-8{left:2rem;}
.right-20{right:5rem;}
.right-6{right:1.5rem;}
.right-8{right:2rem;}
.top-1\\/2{top:50%;}
.top-16{top:4rem;}
.top-4{top:1rem;}
.z-10{z-index:10;}
.grid{display:grid;}
.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr));}
.mb-1{margin-bottom:0.25rem;}
.mb-2{margin-bottom:0.5rem;}
.mb-3{margin-bottom:0.75rem;}
.mb-4{margin-bottom:1rem;}
.mb-6{margin-bottom:1.5rem;}
.mr-1{margin-right:0.25rem;}
.mr-2{margin-right:0.5rem;}
.mr-3{margin-right:0.75rem;}
.mt-4{margin-top:1rem;}
.block{display:block;}
.h-\\[600px\\]{height:600px;}
.h-10{height:2.5rem;}
.h-12{height:3rem;}
.h-16{height:4rem;}
.h-2{height:0.5rem;}
.h-64{height:16rem;}
.h-8{height:2rem;}
.h-full{height:100%;}
.max-w-sm{max-width:24rem;}
.min-w-\\[140px\\]{min-width:140px;}
.min-w-\\[280px\\]{min-width:280px;}
.w-\\[1280px\\]{width:1280px;}
.w-10{width:2.5rem;}
.w-12{width:3rem;}
.w-16{width:4rem;}
.w-2{width:0.5rem;}
.w-8{width:2rem;}
.w-96{width:24rem;}
.w-full{width:100%;}
.flex{display:flex;}
.flex-col{flex-direction:column;}
.-translate-x-1\\/2{--un-translate-x:-50%;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.-translate-y-1\\/2{--un-translate-y:-50%;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.hover\\:-translate-y-2:hover{--un-translate-y:-0.5rem;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.group:hover .group-hover\\:scale-110{--un-scale-x:1.1;--un-scale-y:1.1;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.hover\\:scale-105:hover{--un-scale-x:1.05;--un-scale-y:1.05;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.transform{transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
@keyframes pulse{0%, 100% {opacity:1} 50% {opacity:.5}}
.animate-pulse{animation:pulse 2s cubic-bezier(0.4,0,.6,1) infinite;}
.cursor-pointer{cursor:pointer;}
.items-center{align-items:center;}
.justify-center{justify-content:center;}
.justify-between{justify-content:space-between;}
.gap-4{gap:1rem;}
.space-x-2>:not([hidden])~:not([hidden]){--un-space-x-reverse:0;margin-left:calc(0.5rem * calc(1 - var(--un-space-x-reverse)));margin-right:calc(0.5rem * var(--un-space-x-reverse));}
.space-y-3>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(0.75rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(0.75rem * var(--un-space-y-reverse));}
.overflow-hidden{overflow:hidden;}
.border{border-width:1px;}
.border-t{border-top-width:1px;}
.border-slate-200\\/50{border-color:rgb(226 232 240 / 0.5);}
.border-white\\/20{border-color:rgb(255 255 255 / 0.2);}
.border-white\\/50{border-color:rgb(255 255 255 / 0.5);}
.rounded-2xl{border-radius:1rem;}
.rounded-3xl{border-radius:1.5rem;}
.rounded-full{border-radius:9999px;}
.rounded-xl{border-radius:0.75rem;}
.bg-\\[radial-gradient\\(circle_at_30\\%_20\\%\\,rgba\\(59\\,130\\,246\\,0\\.1\\)\\,transparent_50\\%\\)\\]{background-image:radial-gradient(circle at 30% 20%,rgba(59,130,246,0.1),transparent 50%);}
.bg-\\[radial-gradient\\(circle_at_70\\%_80\\%\\,rgba\\(99\\,102\\,241\\,0\\.1\\)\\,transparent_50\\%\\)\\]{background-image:radial-gradient(circle at 70% 80%,rgba(99,102,241,0.1),transparent 50%);}
.bg-green-500{--un-bg-opacity:1;background-color:rgb(34 197 94 / var(--un-bg-opacity)) /* #22c55e */;}
.bg-slate-100\\/50{background-color:rgb(241 245 249 / 0.5) /* #f1f5f9 */;}
.bg-slate-50\\/50{background-color:rgb(248 250 252 / 0.5) /* #f8fafc */;}
.bg-white\\/20{background-color:rgb(255 255 255 / 0.2) /* #fff */;}
.bg-white\\/90{background-color:rgb(255 255 255 / 0.9) /* #fff */;}
.bg-white\\/95{background-color:rgb(255 255 255 / 0.95) /* #fff */;}
.hover\\:bg-slate-100\\/70:hover{background-color:rgb(241 245 249 / 0.7) /* #f1f5f9 */;}
.hover\\:bg-slate-200\\/80:hover{background-color:rgb(226 232 240 / 0.8) /* #e2e8f0 */;}
.hover\\:bg-white\\/30:hover{background-color:rgb(255 255 255 / 0.3) /* #fff */;}
.from-blue-300{--un-gradient-from-position:0%;--un-gradient-from:rgb(147 197 253 / var(--un-from-opacity, 1)) var(--un-gradient-from-position);--un-gradient-to-position:100%;--un-gradient-to:rgb(147 197 253 / 0) var(--un-gradient-to-position);--un-gradient-stops:var(--un-gradient-from), var(--un-gradient-to);}
.from-blue-400{--un-gradient-from-position:0%;--un-gradient-from:rgb(96 165 250 / var(--un-from-opacity, 1)) var(--un-gradient-from-position);--un-gradient-to-position:100%;--un-gradient-to:rgb(96 165 250 / 0) var(--un-gradient-to-position);--un-gradient-stops:var(--un-gradient-from), var(--un-gradient-to);}
.from-blue-500{--un-gradient-from-position:0%;--un-gradient-from:rgb(59 130 246 / var(--un-from-opacity, 1)) var(--un-gradient-from-position);--un-gradient-to-position:100%;--un-gradient-to:rgb(59 130 246 / 0) var(--un-gradient-to-position);--un-gradient-stops:var(--un-gradient-from), var(--un-gradient-to);}
.from-blue-500\\/10{--un-gradient-from-position:0%;--un-gradient-from:rgb(59 130 246 / 0.1) var(--un-gradient-from-position);--un-gradient-to-position:100%;--un-gradient-to:rgb(59 130 246 / 0) var(--un-gradient-to-position);--un-gradient-stops:var(--un-gradient-from), var(--un-gradient-to);}
.from-green-600{--un-gradient-from-position:0%;--un-gradient-from:rgb(22 163 74 / var(--un-from-opacity, 1)) var(--un-gradient-from-position);--un-gradient-to-position:100%;--un-gradient-to:rgb(22 163 74 / 0) var(--un-gradient-to-position);--un-gradient-stops:var(--un-gradient-from), var(--un-gradient-to);}
.from-green-600\\/10{--un-gradient-from-position:0%;--un-gradient-from:rgb(22 163 74 / 0.1) var(--un-gradient-from-position);--un-gradient-to-position:100%;--un-gradient-to:rgb(22 163 74 / 0) var(--un-gradient-to-position);--un-gradient-stops:var(--un-gradient-from), var(--un-gradient-to);}
.from-indigo-400{--un-gradient-from-position:0%;--un-gradient-from:rgb(129 140 248 / var(--un-from-opacity, 1)) var(--un-gradient-from-position);--un-gradient-to-position:100%;--un-gradient-to:rgb(129 140 248 / 0) var(--un-gradient-to-position);--un-gradient-stops:var(--un-gradient-from), var(--un-gradient-to);}
.from-orange-500{--un-gradient-from-position:0%;--un-gradient-from:rgb(249 115 22 / var(--un-from-opacity, 1)) var(--un-gradient-from-position);--un-gradient-to-position:100%;--un-gradient-to:rgb(249 115 22 / 0) var(--un-gradient-to-position);--un-gradient-stops:var(--un-gradient-from), var(--un-gradient-to);}
.from-orange-500\\/10{--un-gradient-from-position:0%;--un-gradient-from:rgb(249 115 22 / 0.1) var(--un-gradient-from-position);--un-gradient-to-position:100%;--un-gradient-to:rgb(249 115 22 / 0) var(--un-gradient-to-position);--un-gradient-stops:var(--un-gradient-from), var(--un-gradient-to);}
.from-slate-50{--un-gradient-from-position:0%;--un-gradient-from:rgb(248 250 252 / var(--un-from-opacity, 1)) var(--un-gradient-from-position);--un-gradient-to-position:100%;--un-gradient-to:rgb(248 250 252 / 0) var(--un-gradient-to-position);--un-gradient-stops:var(--un-gradient-from), var(--un-gradient-to);}
.via-blue-50{--un-gradient-via-position:50%;--un-gradient-to:rgb(239 246 255 / 0);--un-gradient-stops:var(--un-gradient-from), rgb(239 246 255 / var(--un-via-opacity, 1)) var(--un-gradient-via-position), var(--un-gradient-to);}
.via-blue-600{--un-gradient-via-position:50%;--un-gradient-to:rgb(37 99 235 / 0);--un-gradient-stops:var(--un-gradient-from), rgb(37 99 235 / var(--un-via-opacity, 1)) var(--un-gradient-via-position), var(--un-gradient-to);}
.to-blue-500{--un-gradient-to-position:100%;--un-gradient-to:rgb(59 130 246 / var(--un-to-opacity, 1)) var(--un-gradient-to-position);}
.to-blue-600{--un-gradient-to-position:100%;--un-gradient-to:rgb(37 99 235 / var(--un-to-opacity, 1)) var(--un-gradient-to-position);}
.to-blue-600\\/10{--un-gradient-to-position:100%;--un-gradient-to:rgb(37 99 235 / 0.1) var(--un-gradient-to-position);}
.to-green-700{--un-gradient-to-position:100%;--un-gradient-to:rgb(21 128 61 / var(--un-to-opacity, 1)) var(--un-gradient-to-position);}
.to-green-700\\/10{--un-gradient-to-position:100%;--un-gradient-to:rgb(21 128 61 / 0.1) var(--un-gradient-to-position);}
.to-indigo-50{--un-gradient-to-position:100%;--un-gradient-to:rgb(238 242 255 / var(--un-to-opacity, 1)) var(--un-gradient-to-position);}
.to-indigo-600{--un-gradient-to-position:100%;--un-gradient-to:rgb(79 70 229 / var(--un-to-opacity, 1)) var(--un-gradient-to-position);}
.to-indigo-700{--un-gradient-to-position:100%;--un-gradient-to:rgb(67 56 202 / var(--un-to-opacity, 1)) var(--un-gradient-to-position);}
.to-orange-600{--un-gradient-to-position:100%;--un-gradient-to:rgb(234 88 12 / var(--un-to-opacity, 1)) var(--un-gradient-to-position);}
.to-orange-600\\/10{--un-gradient-to-position:100%;--un-gradient-to:rgb(234 88 12 / 0.1) var(--un-gradient-to-position);}
.bg-gradient-to-br{--un-gradient-shape:to bottom right in oklch;--un-gradient:var(--un-gradient-shape), var(--un-gradient-stops);background-image:linear-gradient(var(--un-gradient));}
.fill-none{fill:none;}
.stroke-2{stroke-width:2px;}
[stroke~="none"]{stroke:none;}
.p-3{padding:0.75rem;}
.p-6{padding:1.5rem;}
.p-8{padding:2rem;}
.px-4{padding-left:1rem;padding-right:1rem;}
.py-2{padding-top:0.5rem;padding-bottom:0.5rem;}
.pt-4{padding-top:1rem;}
.text-center{text-align:center;}
.text-2xl{font-size:1.5rem;line-height:2rem;}
.text-3xl{font-size:1.875rem;line-height:2.25rem;}
.text-5xl{font-size:3rem;line-height:1;}
.text-lg{font-size:1.125rem;line-height:1.75rem;}
.text-sm{font-size:0.875rem;line-height:1.25rem;}
.text-xl{font-size:1.25rem;line-height:1.75rem;}
.text-xs{font-size:0.75rem;line-height:1rem;}
.text-blue-100{--un-text-opacity:1;color:rgb(219 234 254 / var(--un-text-opacity)) /* #dbeafe */;}
.text-blue-500{--un-text-opacity:1;color:rgb(59 130 246 / var(--un-text-opacity)) /* #3b82f6 */;}
.text-green-100{--un-text-opacity:1;color:rgb(220 252 231 / var(--un-text-opacity)) /* #dcfce7 */;}
.text-green-600{--un-text-opacity:1;color:rgb(22 163 74 / var(--un-text-opacity)) /* #16a34a */;}
.text-orange-100{--un-text-opacity:1;color:rgb(255 237 213 / var(--un-text-opacity)) /* #ffedd5 */;}
.text-orange-500{--un-text-opacity:1;color:rgb(249 115 22 / var(--un-text-opacity)) /* #f97316 */;}
.text-slate-500{--un-text-opacity:1;color:rgb(100 116 139 / var(--un-text-opacity)) /* #64748b */;}
.text-slate-600{--un-text-opacity:1;color:rgb(71 85 105 / var(--un-text-opacity)) /* #475569 */;}
.text-slate-700,
.group:hover .group-hover\\:text-slate-700{--un-text-opacity:1;color:rgb(51 65 85 / var(--un-text-opacity)) /* #334155 */;}
.text-slate-800{--un-text-opacity:1;color:rgb(30 41 59 / var(--un-text-opacity)) /* #1e293b */;}
.text-white{--un-text-opacity:1;color:rgb(255 255 255 / var(--un-text-opacity)) /* #fff */;}
.group:hover .group-hover\\:text-slate-900{--un-text-opacity:1;color:rgb(15 23 42 / var(--un-text-opacity)) /* #0f172a */;}
.font-bold{font-weight:700;}
.font-medium{font-weight:500;}
.font-semibold{font-weight:600;}
.opacity-0{opacity:0;}
.opacity-60{opacity:0.6;}
.opacity-70{opacity:0.7;}
.opacity-80{opacity:0.8;}
.group:hover .group-hover\\:opacity-100{opacity:1;}
.shadow-2xl{--un-shadow:var(--un-shadow-inset) 0 25px 50px -12px var(--un-shadow-color, rgb(0 0 0 / 0.25));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.shadow-lg{--un-shadow:var(--un-shadow-inset) 0 10px 15px -3px var(--un-shadow-color, rgb(0 0 0 / 0.1)),var(--un-shadow-inset) 0 4px 6px -4px var(--un-shadow-color, rgb(0 0 0 / 0.1));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.shadow-xl{--un-shadow:var(--un-shadow-inset) 0 20px 25px -5px var(--un-shadow-color, rgb(0 0 0 / 0.1)),var(--un-shadow-inset) 0 8px 10px -6px var(--un-shadow-color, rgb(0 0 0 / 0.1));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.hover\\:shadow-2xl:hover{--un-shadow:var(--un-shadow-inset) 0 25px 50px -12px var(--un-shadow-color, rgb(0 0 0 / 0.25));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.transition-all{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.duration-200{transition-duration:200ms;}
.duration-300{transition-duration:300ms;}
.duration-500{transition-duration:500ms;}
.ease{transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);}
.backdrop-blur-md{backdrop-filter:blur(12px);}
.backdrop-blur-sm{backdrop-filter:blur(4px);};
  `);customElements.define("cloud-architecture",L);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U={CHILD:2},G=g=>(...e)=>({_$litDirective$:g,values:e});class K{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,a){this._$Ct=e,this._$AM=t,this._$Ci=a}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class P extends K{constructor(e){if(super(e),this.it=N,e.type!==U.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===N||e==null)return this._t=void 0,this.it=e;if(e===F)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}P.directiveName="unsafeHTML",P.resultType=1;const S=G(P);class E extends z{constructor(){super(),this.currentStepIndex=0,this.isTimelineAnimating=!1,this.showSplitNodes=!1,this.splitNodesData=[],this.processData=[{title:"源头赋码",icon:"mdi:cube-outline",details:"<strong>供应商：</strong>在材料出厂前，按集团标准生成并粘贴唯一的二维码，同时将材料的质检报告等电子文件上传至系统，与二维码进行绑定。"},{title:"扫码验收",icon:"mdi:qrcode-scan",type:"scan",details:"<strong>验收小组：</strong>材料到场后，通过App扫描二维码核对信息，并拍摄带水印的验收照片，在线提交验收结论。"},{title:"扫码出入库",icon:"mdi:login-variant",details:"<strong>库管员：</strong>通过扫码办理材料入库、领用，系统自动更新库存台账，实时记录库位、领用人、用途等信息。"},{title:"扫码安装",icon:"mdi:tools",details:"<strong>施工班组：</strong>在材料安装到具体部位后再次扫码，记录安装位置、操作人员，并上传带水印的完工照片。"},{title:"扫码追溯",icon:"mdi:history",details:"<strong>管理/监理：</strong>出现质量问题或日常巡检时，扫描问题材料的二维码，即可追溯其全部信息。"}],this.mergedProcessData=[{title:"源头赋码",icon:"mdi:cube-outline",details:"<strong>供应商：</strong>在材料出厂前，按集团标准生成并粘贴唯一的二维码，同时将材料的质检报告等电子文件上传至系统，与二维码进行绑定。"},{title:"扫码验收+入库",icon:"mdi:qrcode-scan",type:"scan",details:"<strong>验收小组+库管员：</strong>材料到场后，通过App扫描二维码核对信息，拍摄验收照片，完成验收后直接办理入库手续。"},{title:"扫码出库+安装",icon:"mdi:tools",details:"<strong>库管员+施工班组：</strong>通过扫码办理材料领用出库，并在安装到位后扫码记录安装信息。"},{title:"扫码追溯",icon:"mdi:history",details:"<strong>管理/监理：</strong>出现质量问题或日常巡检时，扫描问题材料的二维码，即可追溯其全部信息。"}],this.isMerged=!1}render(){return s`
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
                style="width: ${this.currentStepIndex/((this.isMerged?this.mergedProcessData.length:this.processData.length)-1)*100}%"
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
            ?disabled=${this.currentStepIndex===0}
            @click=${this.prevStep}
          >
            上一步
          </button>
          <button
            id="next-step-btn"
            class="bg-blue-600 cursor-pointer text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            ?disabled=${this.currentStepIndex===(this.isMerged?this.mergedProcessData.length:this.processData.length)-1}
            @click=${this.nextStep}
          >
            下一步
          </button>
        </div>
      </div>
    `}renderFlowSteps(){const t=(this.isMerged?this.mergedProcessData:this.processData).map((a,r)=>s`
        <div
          class="flex relative z-10 flex-col items-center p-2 flow-step"
          data-step-index="${r}"
          style="${r===2&&this.showSplitNodes?"opacity: 0;":""}"
        >
          <div
            class="flex justify-center items-center w-16 h-16 text-3xl rounded-full border-4 shadow-md transition-all duration-300 ${r<this.currentStepIndex?"bg-blue-100 border-blue-600 text-blue-600":r===this.currentStepIndex?"bg-blue-600 border-blue-600 text-white transform -translate-y-1 scale-110 shadow-blue-500/30 shadow-xl":"bg-white border-gray-300 text-gray-600"}"
          >
            <iconify-icon icon="${a.icon}" class="text-4xl"></iconify-icon>
          </div>
          <span class="mt-2 text-sm font-semibold text-center"
            >${a.title}</span
          >
        </div>
      `);if(this.showSplitNodes){const a=this.splitNodesData.map(r=>s`
          <div
            class="flex absolute z-20 flex-col items-center p-2 flow-step"
            data-split-id="${r.id}"
            style="left: ${r.left}px; top: ${r.top}px; opacity: ${r.opacity}; transform: scale(${r.scale});"
          >
            <div
              class="flex justify-center items-center w-16 h-16 text-3xl bg-white rounded-full border-4 border-gray-300 shadow-md transition-all duration-300 flow-step-icon"
            >
              <iconify-icon
                icon="${r.icon}"
                class="text-4xl"
              ></iconify-icon>
            </div>
            <span class="mt-2 text-sm font-semibold text-center"
              >${r.title}</span
            >
          </div>
        `);return[...t,...a]}return t}renderProcessDetails(){const t=(this.isMerged?this.mergedProcessData:this.processData)[this.currentStepIndex];return t?t.type==="scan"?s`
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
              <iconify-icon icon="${t.icon}"></iconify-icon>
            </div>
            <div class="text-gray-700 ml-4">
              ${S(t.details)}
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
      `:t.title==="源头赋码"?s`
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
              <iconify-icon icon="${t.icon}"></iconify-icon>
            </div>
            <div class="text-gray-700 ml-4">
              ${S(t.details)}
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
      `:t.title==="扫码出库+安装"?s`
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
              <iconify-icon icon="${t.icon}"></iconify-icon>
            </div>
            <div class="text-gray-700 ml-4">
              ${S(t.details)}
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
      `:t.title==="扫码追溯"?s`
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
              <iconify-icon icon="${t.icon}"></iconify-icon>
            </div>
            <div class="text-gray-700 ml-4">
              ${S(t.details)}
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
      `:s`
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
              <iconify-icon icon="${t.icon}"></iconify-icon>
            </div>
            <div class="text-gray-700 ml-4 text-lg leading-relaxed">
              ${S(t.details)}
            </div>
          </div>
        </div>
      `:s``}renderScanAcceptanceSection(){return s`
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
    `}renderSourceCodingSection(){return s`
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
    `}renderOutboundInstallSection(){return s`
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
              style="font-size:96px;"
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
              style="font-size:96px;"
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
                style="font-size:48px;"
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
                style="font-size:48px;"
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
                style="font-size:48px;"
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
    `}renderTraceQuerySection(){return s`
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
              style="font-size:96px;"
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
              style="font-size:48px"
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
    `}firstUpdated(){this.initializeCanvases()}updated(e){e.has("currentStepIndex")&&this.initializeCanvases()}initializeCanvases(){this.safeRequestAnimationFrame(()=>{const e=this.isMerged?this.mergedProcessData[this.currentStepIndex]:this.processData[this.currentStepIndex];(e==null?void 0:e.type)==="scan"&&this.initScanAcceptanceCanvas(),(e==null?void 0:e.title)==="源头赋码"&&this.initSourceQRCanvas(),(e==null?void 0:e.title)==="扫码出库+安装"&&this.initOutboundInstallCanvas(),(e==null?void 0:e.title)==="扫码追溯"&&this.initTraceQueryCanvas()})}initScanAcceptanceCanvas(){const e=this.shadowRoot.querySelector("#scan-qr-canvas"),t=this.shadowRoot.querySelector("#scan-line-canvas");if(!e||!t)return;const a=e.getContext("2d"),r=t.getContext("2d");this.drawQRCode(a,e.width,e.height),this.scanQrImageData=a.getImageData(0,0,e.width,e.height),this.animateScanLine(r,t.width,t.height)}initSourceQRCanvas(){const e=this.shadowRoot.querySelector("#qr-canvas-source"),t=this.shadowRoot.querySelector("#scanbar-canvas");if(!e||!t)return;const a=e.getContext("2d"),r=t.getContext("2d");this.drawQRCode(a,e.width,e.height),this.qrImageData=a.getImageData(0,0,e.width,e.height),this.animateScanbar(r,t.width,t.height)}initOutboundInstallCanvas(){const e=this.shadowRoot.querySelector("#outbound-qr-canvas"),t=this.shadowRoot.querySelector("#outbound-scan-line-canvas");if(!e||!t)return;const a=e.getContext("2d"),r=t.getContext("2d");this.drawQRCode(a,e.width,e.height),this.outboundQrImageData=a.getImageData(0,0,e.width,e.height),this.animateOutboundScanLine(r,t.width,t.height)}initTraceQueryCanvas(){const e=this.shadowRoot.querySelector("#trace-qr-canvas"),t=this.shadowRoot.querySelector("#trace-scan-line-canvas");if(!e||!t)return;const a=e.getContext("2d"),r=t.getContext("2d");this.drawQRCode(a,e.width,e.height),this.traceQrImageData=a.getImageData(0,0,e.width,e.height),this.animateTraceScanLine(r,t.width,t.height)}animateOutboundScanLine(e,t,a){let r=0;const n=()=>{if(!this.isConnected)return;e.clearRect(0,0,t,a);const o=e.createLinearGradient(0,r,0,r+12);o.addColorStop(0,"transparent"),o.addColorStop(.5,"#3b82f6"),o.addColorStop(1,"transparent"),e.fillStyle=o,e.fillRect(0,r,t,12),r+=2,r>a&&(r=0),this.safeRequestAnimationFrame(n)};n()}animateTraceScanLine(e,t,a){let r=0;const n=()=>{if(!this.isConnected)return;e.clearRect(0,0,t,a);const o=e.createLinearGradient(0,r,0,r+12);o.addColorStop(0,"transparent"),o.addColorStop(.5,"#3b82f6"),o.addColorStop(1,"transparent"),e.fillStyle=o,e.fillRect(0,r,t,12),r+=2,r>a&&(r=0),this.safeRequestAnimationFrame(n)};n()}drawQRCode(e,t,a){const n=t/12;e.clearRect(0,0,t,a);for(let o=0;o<12;o++)for(let l=0;l<12;l++)e.fillStyle=Math.random()>.6?"#222":"#fff",e.fillRect(o*n,l*n,n,n)}animateScanLine(e,t,a){let r=0;const n=()=>{if(!this.isConnected)return;e.clearRect(0,0,t,a);const o=e.createLinearGradient(0,r,0,r+12);o.addColorStop(0,"transparent"),o.addColorStop(.5,"#3b82f6"),o.addColorStop(1,"transparent"),e.fillStyle=o,e.fillRect(0,r,t,12),r+=2,r>a&&(r=0),this.safeRequestAnimationFrame(n)};n()}animateScanbar(e,t,a){let r=0;const n=()=>{if(!this.isConnected)return;e.clearRect(0,0,t,a);const o=e.createLinearGradient(0,r,0,r+12);o.addColorStop(0,"transparent"),o.addColorStop(.5,"#3b82f6"),o.addColorStop(1,"transparent"),e.fillStyle=o,e.fillRect(0,r,t,12),r+=2,r>a&&(r=0),this.safeRequestAnimationFrame(n)};n()}handleScanSimulateClick(e){const t=e.target;t.disabled=!0;const a=this.shadowRoot.querySelector("#scan-qr-container"),r=this.shadowRoot.querySelector("#photo-container"),n=this.shadowRoot.querySelector("#photo-label"),o=this.shadowRoot.querySelector("#scan-db-label"),l=this.shadowRoot.querySelector("#scan-acceptance-row"),c=document.createElement("div");c.className="absolute inset-0 bg-blue-300 rounded opacity-20 animate-ping",a.appendChild(c),i.to(c,{opacity:0,duration:.6,onComplete:()=>c.remove()}),this.createScanPhotoEffect(a,r,n,o,l)}createScanPhotoEffect(e,t,a,r,n){i.delayedCall(.8,()=>{i.to(t,{opacity:1,scale:1,duration:.7,ease:"power2.out",onComplete:()=>{const o=document.createElement("div");o.className="absolute inset-0 bg-white rounded",o.style.opacity="0",t.appendChild(o),i.to(o,{opacity:.95,duration:.85,ease:"power2.out",onComplete:()=>{i.to(o,{opacity:0,duration:.25,ease:"power2.in",onComplete:()=>{o.remove();const l=t.querySelector("iconify-icon"),c=t.querySelector("div");l.setAttribute("icon","mdi:image"),l.style.color="#ea580c",c.textContent="照片",c.style.color="#ea580c",t.style.borderColor="#ea580c",t.style.background="#fff7ed",i.to(a,{opacity:1,duration:.5,ease:"power1.out"}),this.showGpsAndWatermarkElements(e,t,r,n)}})}})}})})}showGpsAndWatermarkElements(e,t,a,r){const n=this.shadowRoot.querySelector("#gps-container"),o=this.shadowRoot.querySelector("#gps-label"),l=this.shadowRoot.querySelector("#watermark-container"),c=this.shadowRoot.querySelector("#watermark-label");i.delayedCall(.5,()=>{i.to(n,{opacity:1,scale:1,duration:.7,ease:"power2.out",onComplete:()=>{i.to(o,{opacity:1,duration:.5,ease:"power1.out"})}})}),i.delayedCall(1,()=>{i.to(l,{opacity:1,scale:1,duration:.7,ease:"power2.out",onComplete:()=>{i.to(c,{opacity:1,duration:.5,ease:"power1.out"}),this.createScanFlyToDatabase(e,t,n,l,a,r)}})})}createScanFlyToDatabase(e,t,a,r,n,o){i.delayedCall(1.5,()=>{const l=e.cloneNode(!0);Object.assign(l.style,{position:"absolute",left:"0",top:"0",zIndex:"50"});const c=l.querySelector("canvas");c&&this.scanQrImageData&&c.getContext("2d").putImageData(this.scanQrImageData,0,0),o.appendChild(l);const p=this.shadowRoot.querySelector("#scan-db-container"),f=p.getBoundingClientRect(),b=e.getBoundingClientRect(),d=t.getBoundingClientRect(),u=a.getBoundingClientRect(),h=r.getBoundingClientRect(),x=f.left+f.width/2,v=f.top+f.height/2,y=x-b.left-l.clientWidth/2,w=v-b.top-l.clientHeight/2-25,$=x-d.left-t.clientWidth/2-25,j=v-d.top-t.clientHeight/2,q=x-u.left-a.clientWidth/2+25,I=v-u.top-a.clientHeight/2,Y=x-h.left-r.clientWidth/2,X=v-h.top-r.clientHeight/2+25;i.to(l,{x:y,y:w,scale:.5,duration:1.2,ease:"power2.inOut",onComplete:()=>l.remove()}),i.to(t,{x:$,y:j,scale:.5,duration:1.2,ease:"power2.inOut"}),i.to(a,{x:q,y:I,scale:.5,duration:1.2,delay:.1,ease:"power2.inOut"}),i.to(r,{x:Y,y:X,scale:.5,duration:1.2,delay:.2,ease:"power2.inOut",onComplete:()=>{const C=document.createElement("span");C.innerHTML='<iconify-icon icon="mdi:check-circle" style="color:#22c55e;font-size:2.5rem;"></iconify-icon>',Object.assign(C.style,{position:"absolute",right:"-18px",bottom:"8px",zIndex:"60",opacity:"0"}),p.appendChild(C),i.to(C,{opacity:1,duration:.5}),i.to(n,{opacity:1,duration:.5,ease:"power1.out"})}}),i.delayedCall(.4,()=>{this.createPlusOneAnimation(p)})})}createPlusOneAnimation(e){const t=document.createElement("div");t.textContent="+1",Object.assign(t.style,{position:"absolute",left:"50%",top:"0px",transform:"translateX(-50%)",fontSize:"1.5rem",fontWeight:"bold",color:"#22c55e",opacity:"0",zIndex:"70",pointerEvents:"none"}),e.appendChild(t),i.timeline().to(t,{opacity:1,duration:.3,ease:"power2.out"}).to(t,{y:-30,duration:.4,ease:"power1.out"},"<").to(t,{duration:1}).to(t,{opacity:0,duration:.6,ease:"power1.in",onComplete:()=>t.remove()})}handleSimulateClick(e){const t=e.target;t.disabled=!0;const a=this.shadowRoot.querySelector("#custom-qr-container"),r=this.shadowRoot.querySelector("#pipe-container"),n=this.shadowRoot.querySelector("#pipe-label"),o=this.shadowRoot.querySelector("#db-label"),l=this.shadowRoot.querySelector("#qr-db-row"),c=document.createElement("div");c.className="absolute inset-0 bg-blue-300 rounded opacity-20 animate-ping",a.appendChild(c),i.to(c,{opacity:0,duration:.6,onComplete:()=>c.remove()}),this.createFlyingBlocks(a,l),this.createQRClones(a,r,n,o,l)}createFlyingBlocks(e,t){const a=[{border:"2.5px solid #2563eb",bg:"#dbeafe",text:"#1e40af",shadow:"0 4px 16px 0 rgba(37,99,235,0.10)"},{border:"2.5px solid #22c55e",bg:"#bbf7d0",text:"#166534",shadow:"0 4px 16px 0 rgba(34,197,94,0.10)"},{border:"2.5px solid #eab308",bg:"#fef9c3",text:"#92400e",shadow:"0 4px 16px 0 rgba(234,179,8,0.10)"},{border:"2.5px solid #ec4899",bg:"#fbcfe8",text:"#831843",shadow:"0 4px 16px 0 rgba(236,72,153,0.10)"}],r=[{label:"材料信息",...a[0]},{label:"质检报告",...a[1]},{label:"厂家信息",...a[2]},{label:"其他信息",...a[3]}],n=[],o=t.getBoundingClientRect(),l=e.getBoundingClientRect(),c=l.left+l.width/2-(o.left+o.width/2),p=l.top+l.height/2-(o.top+o.height/2),f=48,b=-Math.PI/2;r.forEach((d,u)=>{const h=document.createElement("div");h.textContent=d.label,Object.assign(h.style,{position:"absolute",left:"50%",top:"50%",width:"128px",height:"48px",lineHeight:"48px",textAlign:"center",fontWeight:"bold",fontSize:"1.18rem",borderRadius:"0.75rem",border:d.border,background:d.bg,color:d.text,boxShadow:d.shadow,opacity:"0",zIndex:(30+u).toString()}),t.appendChild(h),n.push(h);const x=b+u*2*Math.PI/r.length,v=Math.cos(x)*f,y=Math.sin(x)*f;i.set(h,{opacity:0,scale:1.2,xPercent:-50,yPercent:-50,x:v,y}),i.to(h,{opacity:1,scale:1.2,delay:u*.7+.4,duration:.6,onComplete:()=>{i.to(h,{x:c,y:p,scale:.95,duration:1.2,delay:.6,ease:"power2.inOut"})}})}),i.delayedCall(r.length*.7+1.8,()=>{n.forEach((d,u)=>{i.to(d,{opacity:0,scale:.8,duration:.5,delay:u*.12,onComplete:()=>d.remove()})})})}createQRClones(e,t,a,r,n){i.delayedCall(4*.7+2.2,()=>{i.to(t,{opacity:1,scale:1,duration:.7,ease:"power2.out"});const o=document.createElement("div");Object.assign(o.style,{position:"absolute",left:"0",top:"0",zIndex:"50",width:"112px",height:"112px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"#fff",borderRadius:"0.75rem",boxShadow:"0 4px 16px 0 rgba(37,99,235,0.10)",border:"2.5px solid #2563eb"}),o.innerHTML=`
        <iconify-icon icon="mdi:file-document-outline" style="font-size:3.5rem;color:#2563eb;"></iconify-icon>
        <div style="margin-top:8px;font-weight:bold;font-size:1.1rem;color:#2563eb;">资料</div>
      `,n.appendChild(o);const c=this.shadowRoot.querySelector("#db-icon-container").getBoundingClientRect(),p=e.getBoundingClientRect(),f=c.left+c.width/2-p.left,b=c.top+c.height/2-p.top-o.clientHeight/2;i.to(o,{x:f,y:b,duration:1.1,ease:"power2.inOut",onComplete:()=>{o.remove(),i.to(r,{opacity:1,duration:.5,ease:"power1.out"})}});const d=e.cloneNode(!0);Object.assign(d.style,{position:"absolute",left:"0",top:"0",zIndex:"51"});const u=d.querySelector("canvas");u&&this.qrImageData&&u.getContext("2d").putImageData(this.qrImageData,0,0),n.appendChild(d);const h=t.getBoundingClientRect(),x=e.getBoundingClientRect(),v=h.left+h.width/2-x.left-d.clientWidth/2,y=h.top+h.height/2-x.top-d.clientHeight/2;i.to(d,{x:v,y,scale:.7,duration:1.8,ease:"power2.inOut",onComplete:()=>{d.remove();const w=document.createElement("span");w.innerHTML='<iconify-icon icon="mdi:check-circle" style="color:#22c55e;font-size:2.5rem;"></iconify-icon>',Object.assign(w.style,{position:"absolute",right:"-18px",bottom:"8px",zIndex:"60",opacity:"0"}),t.appendChild(w),i.to(w,{opacity:1,duration:.5}),i.to(a,{opacity:1,duration:.5,ease:"power1.out"})}})})}handleOutboundSimulateClick(e){const t=e.target;t.disabled=!0;const a=this.shadowRoot.querySelector("#outbound-qr-container"),r=this.shadowRoot.querySelector("#install-pipe-container"),n=this.shadowRoot.querySelector("#install-pipe-label"),o=this.shadowRoot.querySelector("#outbound-install-row"),l=document.createElement("div");l.className="absolute inset-0 bg-blue-300 rounded opacity-20 animate-ping",a.appendChild(l),i.to(l,{opacity:0,duration:.6,onComplete:()=>l.remove()}),this.createOutboundInstallEffect(a,r,n,o)}createOutboundInstallEffect(e,t,a,r){i.delayedCall(.8,()=>{i.to(t,{opacity:1,scale:1,duration:.7,ease:"power2.out",onComplete:()=>{i.to(a,{opacity:1,duration:.5,ease:"power1.out"}),this.generateInstallElements()}})})}generateInstallElements(){const e=this.shadowRoot.querySelector("#install-info-container"),t=this.shadowRoot.querySelector("#install-watermark-container"),a=this.shadowRoot.querySelector("#install-photo-container");i.delayedCall(.5,()=>{i.to(e,{opacity:1,scale:1,duration:.6,ease:"back.out(1.7)"})}),i.delayedCall(.8,()=>{i.to(t,{opacity:1,scale:1,duration:.6,ease:"back.out(1.7)"})}),i.delayedCall(1.1,()=>{i.to(a,{opacity:1,scale:1,duration:.6,ease:"back.out(1.7)",onComplete:()=>{this.createOutboundFlyToDatabase()}})})}createOutboundFlyToDatabase(){const e=this.shadowRoot.querySelector("#outbound-qr-container"),t=this.shadowRoot.querySelector("#outbound-db-container"),a=this.shadowRoot.querySelector("#outbound-db-label"),r=this.shadowRoot.querySelector("#install-info-container"),n=this.shadowRoot.querySelector("#install-watermark-container"),o=this.shadowRoot.querySelector("#install-photo-container"),l=this.shadowRoot.querySelector("#outbound-install-row"),c=this.shadowRoot.querySelector("#install-pipe-container");i.delayedCall(1,()=>{const p=e.cloneNode(!0);Object.assign(p.style,{position:"absolute",left:"0",top:"0",zIndex:"50"});const f=p.querySelector("canvas");f&&this.outboundQrImageData&&f.getContext("2d").putImageData(this.outboundQrImageData,0,0),l.appendChild(p);const b=t.getBoundingClientRect(),d=e.getBoundingClientRect(),u=r.getBoundingClientRect(),h=n.getBoundingClientRect(),x=o.getBoundingClientRect(),v=b.left+b.width/2,y=b.top+b.height/2,w=v-d.left-p.clientWidth/2,$=y-d.top-p.clientHeight/2-25,j=v-u.left-r.clientWidth/2-20,q=y-u.top-r.clientHeight/2-10,I=v-h.left-n.clientWidth/2+20,Y=y-h.top-n.clientHeight/2-10,X=v-x.left-o.clientWidth/2,C=y-x.top-o.clientHeight/2+20;i.to(p,{x:w,y:$,scale:.4,duration:1.2,ease:"power2.inOut",onComplete:()=>p.remove()}),i.to(r,{x:j,y:q,scale:.4,duration:1.2,delay:.1,ease:"power2.inOut"}),i.to(n,{x:I,y:Y,scale:.4,duration:1.2,delay:.2,ease:"power2.inOut"}),i.to(o,{x:X,y:C,scale:.4,duration:1.2,delay:.3,ease:"power2.inOut",onComplete:()=>{i.to(a,{opacity:1,duration:.5,ease:"power1.out"}),this.createMinusOneAnimation(t),this.createInstallStamp(c)}})})}createMinusOneAnimation(e){const t=document.createElement("div");t.textContent="-1",Object.assign(t.style,{position:"absolute",left:"50%",top:"0px",transform:"translateX(-50%)",fontSize:"1.5rem",fontWeight:"bold",color:"#dc2626",opacity:"0",zIndex:"70",pointerEvents:"none"}),e.appendChild(t),i.timeline().to(t,{opacity:1,duration:.3,ease:"power2.out"}).to(t,{y:-30,duration:.4,ease:"power1.out"},"<").to(t,{duration:1}).to(t,{opacity:0,duration:.6,ease:"power1.in",onComplete:()=>t.remove()})}createInstallStamp(e){i.delayedCall(.5,()=>{const t=document.createElement("div");t.innerHTML=`
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
          font-size: 0.75rem;
          font-weight: bold;
          transform: rotate(-15deg);
          box-shadow: 0 4px 12px rgba(220, 38, 38, 0.4);
          z-index: 60;
          opacity: 0;
        ">
          核销<br>安装
        </div>
      `,e.appendChild(t);const a=t.firstElementChild;i.fromTo(a,{opacity:0,scale:.5,rotation:-45},{opacity:1,scale:1,rotation:-15,duration:.6,ease:"back.out(2)"})})}handleTraceQueryClick(e){const t=e.target;t.disabled=!0;const a=this.shadowRoot.querySelector("#trace-qr-container"),r=this.shadowRoot.querySelector("#trace-db-container"),n=this.shadowRoot.querySelector("#trace-db-label"),o=this.shadowRoot.querySelector("#trace-query-row"),l=this.shadowRoot.querySelector("#trace-db-loading"),c=document.createElement("div");c.className="absolute inset-0 bg-blue-300 rounded opacity-20 animate-ping",a.appendChild(c),i.to(c,{opacity:0,duration:.6,onComplete:()=>c.remove()}),this.startTraceQueryAnimation(a,r,n,o,l)}startTraceQueryAnimation(e,t,a,r,n){i.delayedCall(.8,()=>{const o=e.cloneNode(!0);Object.assign(o.style,{position:"absolute",left:"0",top:"0",zIndex:"50"});const l=o.querySelector("canvas");l&&this.traceQrImageData&&l.getContext("2d").putImageData(this.traceQrImageData,0,0),r.appendChild(o);const c=t.getBoundingClientRect(),p=e.getBoundingClientRect(),f=c.left+c.width/2,b=c.top+c.height/2,d=f-p.left-o.clientWidth/2,u=b-p.top-o.clientHeight/2;i.to(o,{x:d,y:u,scale:.4,duration:1.2,ease:"power2.inOut",onComplete:()=>{o.remove(),this.showDatabaseLoading(n,t,a)}})})}showDatabaseLoading(e,t,a){i.to(e,{opacity:1,duration:.3,ease:"power2.out"}),i.delayedCall(1.2,()=>{i.to(e,{opacity:0,duration:.3,ease:"power2.in",onComplete:()=>{this.startInfoElementsFlyout(t,a)}})})}startInfoElementsFlyout(e,t){const a=this.shadowRoot.querySelector("#trace-query-row"),r=this.shadowRoot.querySelector("#trace-info-container"),n=[{label:"厂家信息",icon:"mdi:factory",color:"#3b82f6",bg:"#dbeafe",border:"#2563eb"},{label:"出厂信息",icon:"mdi:package-variant",color:"#22c55e",bg:"#bbf7d0",border:"#16a34a"},{label:"质检报告",icon:"mdi:clipboard-check",color:"#f59e0b",bg:"#fef3c7",border:"#d97706"},{label:"流转记录",icon:"mdi:swap-horizontal",color:"#8b5cf6",bg:"#e9d5ff",border:"#7c3aed"},{label:"照片",icon:"mdi:image",color:"#ec4899",bg:"#fbcfe8",border:"#db2777"},{label:"其他信息",icon:"mdi:information",color:"#6b7280",bg:"#f3f4f6",border:"#4b5563"}],o=e.getBoundingClientRect(),l=a.getBoundingClientRect(),c=r.getBoundingClientRect(),p=o.left+o.width/2-l.left,f=o.top+o.height/2-l.top;n.forEach((b,d)=>{i.delayedCall(d*.2,()=>{const u=document.createElement("div");u.className="flex items-center px-2 py-1 space-x-1 rounded-lg shadow-md",u.style.cssText=`
          position: absolute;
          left: ${p-60}px;
          top: ${f-15}px;
          background: ${b.bg};
          border: 2px solid ${b.border};
          color: ${b.color};
          font-weight: bold;
          font-size: 0.75rem;
          z-index: ${60+d};
          opacity: 0;
          transform: scale(0.5);
          width: 110px;
          height: 32px;
        `,u.innerHTML=`
          <iconify-icon icon="${b.icon}" style="font-size: 1rem;"></iconify-icon>
          <span>${b.label}</span>
        `,a.appendChild(u),i.to(u,{opacity:1,scale:1,duration:.4,ease:"back.out(1.7)",onComplete:()=>{const h=Math.floor(d/2),x=d%2,v=c.left-l.left,y=c.top-l.top,w=v+x*122,$=y+h*44;i.to(u,{x:w-(p-60),y:$-(f-15),duration:.8,ease:"power2.inOut",onComplete:()=>{u.style.position="static",u.style.left="auto",u.style.top="auto",u.style.transform="none",r.appendChild(u),d===n.length-1&&this.completeTraceQueryAnimation(e,t)}})}})})})}completeTraceQueryAnimation(e,t){i.to(t,{opacity:1,duration:.5,ease:"power1.out"});const a=document.createElement("span");a.innerHTML='<iconify-icon icon="mdi:check-circle" style="color:#22c55e;font-size:2.5rem;"></iconify-icon>',Object.assign(a.style,{position:"absolute",right:"-18px",bottom:"8px",zIndex:"60",opacity:"0"}),e.appendChild(a),i.to(a,{opacity:1,duration:.5,ease:"back.out(1.7)"})}replayStep(){this.currentStepIndex=this.currentStepIndex,this.requestUpdate()}prevStep(){this.currentStepIndex>0&&this.currentStepIndex--}nextStep(){if(this.isTimelineAnimating)return;if(this.currentStepIndex===1&&!this.isMerged){this.performTimelineMergeAnimation();return}const e=this.isMerged?this.mergedProcessData.length-1:this.processData.length-1;this.currentStepIndex<e&&this.currentStepIndex++}performTimelineMergeAnimation(){this.isTimelineAnimating=!0,this.showSplitAnimation()}showSplitAnimation(){const e=this.shadowRoot.querySelector('[data-step-index="2"]'),t=this.shadowRoot.querySelector("#flow-steps-container");if(!e||!t)return;const a=e.getBoundingClientRect(),r=t.getBoundingClientRect(),n=a.left-r.left,o=a.top-r.top;this.splitNodesData=[{id:"inbound",title:"入库",icon:"mdi:database-import",left:n,top:o,opacity:0,scale:.8},{id:"outbound",title:"出库",icon:"mdi:database-export",left:n,top:o,opacity:0,scale:.8}],this.showSplitNodes=!0,this.requestUpdate(),this.updateComplete.then(()=>{this.animateSplitNodes()})}animateSplitNodes(){const e=this.shadowRoot.querySelector('[data-step-index="2"]'),t=this.shadowRoot.querySelector('[data-split-id="inbound"]'),a=this.shadowRoot.querySelector('[data-split-id="outbound"]');i.to(e,{opacity:0,duration:.3,onComplete:()=>{i.to([t,a],{opacity:1,scale:1,duration:.5,stagger:.1,ease:"back.out(1.7)",onComplete:()=>{this.startMergeAnimation()}})}})}startMergeAnimation(){const e=this.shadowRoot.querySelector('[data-step-index="1"]'),t=this.shadowRoot.querySelector('[data-step-index="3"]'),a=this.shadowRoot.querySelector('[data-split-id="inbound"]'),r=this.shadowRoot.querySelector('[data-split-id="outbound"]'),n=this.shadowRoot.querySelector("#flow-steps-container"),o=e.getBoundingClientRect(),l=t.getBoundingClientRect(),c=n.getBoundingClientRect(),p=o.left-c.left,f=o.top-c.top,b=l.left-c.left,d=l.top-c.top;i.to(a,{left:p,top:f,duration:1,ease:"power2.inOut",onComplete:()=>{this.completeMergeToScan()}}),i.to(r,{left:b,top:d,duration:1,delay:.2,ease:"power2.inOut",onComplete:()=>{this.completeMergeToInstall()}})}completeMergeToScan(){const e=this.shadowRoot.querySelector('[data-step-index="1"]'),t=this.shadowRoot.querySelector('[data-split-id="inbound"]');i.to(t,{opacity:0,duration:.3}),i.to(e,{opacity:0,duration:.3,onComplete:()=>{i.to(e,{opacity:1,duration:.3})}})}completeMergeToInstall(){const e=this.shadowRoot.querySelector('[data-step-index="3"]'),t=this.shadowRoot.querySelector('[data-split-id="outbound"]');i.to(t,{opacity:0,duration:.3}),i.to(e,{opacity:0,duration:.3,onComplete:()=>{i.to(e,{opacity:1,duration:.3,onComplete:()=>{this.finishMergeAnimation()}})}})}finishMergeAnimation(){this.isMerged=!0,this.showSplitNodes=!1,this.currentStepIndex=1,this.isTimelineAnimating=!1,this.requestUpdate()}}m(E,"properties",{currentStepIndex:{type:Number}}),m(E,"styles",k`
    :host {
      width: 1280px !important;
    }
    /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: shortcuts */
.container,
[container=""]{width:100%;}
@media (min-width: 640px){
.container,
[container=""]{max-width:640px;}
}
@media (min-width: 768px){
.container,
[container=""]{max-width:768px;}
}
@media (min-width: 1024px){
.container,
[container=""]{max-width:1024px;}
}
@media (min-width: 1280px){
.container,
[container=""]{max-width:1280px;}
}
@media (min-width: 1536px){
.container,
[container=""]{max-width:1536px;}
}
/* layer: default */
.absolute,
[absolute=""]{position:absolute;}
.relative{position:relative;}
.static{position:static;}
.inset-0,
[inset-0=""]{inset:0;}
.left-0{left:0;}
.left-1\\/2{left:50%;}
.right-0{right:0;}
.top-0{top:0;}
.top-1\\/2{top:50%;}
.z-0{z-index:0;}
.z-10{z-index:10;}
.z-20{z-index:20;}
.grid{display:grid;}
.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr));}
.mx-auto{margin-left:auto;margin-right:auto;}
.mb-8{margin-bottom:2rem;}
.ml-4{margin-left:1rem;}
.mt-1{margin-top:0.25rem;}
.mt-2{margin-top:0.5rem;}
.mt-4{margin-top:1rem;}
.mt-6{margin-top:1.5rem;}
.mt-8{margin-top:2rem;}
.hidden{display:none;}
.h-1{height:0.25rem;}
.h-10{height:2.5rem;}
.h-16{height:4rem;}
.h-full{height:100%;}
.max-w-3xl{max-width:48rem;}
.max-w-6xl{max-width:72rem;}
.max-w-xs{max-width:20rem;}
.min-w-\\[700px\\]{min-width:700px;}
.w-\\[128px\\]{width:128px;}
.w-10{width:2.5rem;}
.w-16{width:4rem;}
.w-full{width:100%;}
.flex,
[flex=""]{display:flex;}
.flex-1{flex:1 1 0%;}
.flex-shrink{flex-shrink:1;}
.flex-shrink-0{flex-shrink:0;}
.flex-row{flex-direction:row;}
.flex-col{flex-direction:column;}
.-translate-x-1\\/2{--un-translate-x:-50%;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.-translate-y-1{--un-translate-y:-0.25rem;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.-translate-y-1\\/2{--un-translate-y:-50%;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.-translate-y-3{--un-translate-y:-0.75rem;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.scale-110{--un-scale-x:1.1;--un-scale-y:1.1;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.transform{transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
.animate-spin{animation:spin 1s linear infinite;}
.cursor-pointer{cursor:pointer;}
.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed;}
.items-start{align-items:flex-start;}
.items-center,
[items-center=""]{align-items:center;}
.justify-start{justify-content:flex-start;}
.justify-center{justify-content:center;}
.justify-between{justify-content:space-between;}
.gap-3{gap:0.75rem;}
.gap-6{gap:1.5rem;}
.space-x-1>:not([hidden])~:not([hidden]),
[space-x-1=""]>:not([hidden])~:not([hidden]){--un-space-x-reverse:0;margin-left:calc(0.25rem * calc(1 - var(--un-space-x-reverse)));margin-right:calc(0.25rem * var(--un-space-x-reverse));}
.space-x-4>:not([hidden])~:not([hidden]){--un-space-x-reverse:0;margin-left:calc(1rem * calc(1 - var(--un-space-x-reverse)));margin-right:calc(1rem * var(--un-space-x-reverse));}
.space-y-2>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(0.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(0.5rem * var(--un-space-y-reverse));}
.space-y-4>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}
.space-y-6>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1.5rem * var(--un-space-y-reverse));}
.overflow-x-auto{overflow-x:auto;}
.border{border-width:1px;}
.border-4{border-width:4px;}
.border-amber-300{--un-border-opacity:1;border-color:rgb(252 211 77 / var(--un-border-opacity));}
.border-blue-300{--un-border-opacity:1;border-color:rgb(147 197 253 / var(--un-border-opacity));}
.border-blue-600{--un-border-opacity:1;border-color:rgb(37 99 235 / var(--un-border-opacity));}
.border-gray-200{--un-border-opacity:1;border-color:rgb(229 231 235 / var(--un-border-opacity));}
.border-gray-300{--un-border-opacity:1;border-color:rgb(209 213 219 / var(--un-border-opacity));}
.border-green-300{--un-border-opacity:1;border-color:rgb(134 239 172 / var(--un-border-opacity));}
.border-orange-300{--un-border-opacity:1;border-color:rgb(253 186 116 / var(--un-border-opacity));}
.border-sky-300{--un-border-opacity:1;border-color:rgb(125 211 252 / var(--un-border-opacity));}
.border-yellow-300{--un-border-opacity:1;border-color:rgb(253 224 71 / var(--un-border-opacity));}
.rounded,
[rounded=""]{border-radius:0.25rem;}
.rounded-full{border-radius:9999px;}
.rounded-lg,
[rounded-lg=""]{border-radius:0.5rem;}
.rounded-xl{border-radius:0.75rem;}
.bg-amber-100{--un-bg-opacity:1;background-color:rgb(254 243 199 / var(--un-bg-opacity)) /* #fef3c7 */;}
.bg-black{--un-bg-opacity:1;background-color:rgb(0 0 0 / var(--un-bg-opacity)) /* #000 */;}
.bg-blue-100{--un-bg-opacity:1;background-color:rgb(219 234 254 / var(--un-bg-opacity)) /* #dbeafe */;}
.bg-blue-300,
[bg-blue-300=""]{--un-bg-opacity:1;background-color:rgb(147 197 253 / var(--un-bg-opacity)) /* #93c5fd */;}
.bg-blue-500{--un-bg-opacity:1;background-color:rgb(59 130 246 / var(--un-bg-opacity)) /* #3b82f6 */;}
.bg-blue-600{--un-bg-opacity:1;background-color:rgb(37 99 235 / var(--un-bg-opacity)) /* #2563eb */;}
.bg-gray-200{--un-bg-opacity:1;background-color:rgb(229 231 235 / var(--un-bg-opacity)) /* #e5e7eb */;}
.bg-green-100{--un-bg-opacity:1;background-color:rgb(220 252 231 / var(--un-bg-opacity)) /* #dcfce7 */;}
.bg-orange-100{--un-bg-opacity:1;background-color:rgb(255 237 213 / var(--un-bg-opacity)) /* #ffedd5 */;}
.bg-sky-100{--un-bg-opacity:1;background-color:rgb(224 242 254 / var(--un-bg-opacity)) /* #e0f2fe */;}
.bg-white,
[bg-white=""]{--un-bg-opacity:1;background-color:rgb(255 255 255 / var(--un-bg-opacity)) /* #fff */;}
.bg-yellow-100{--un-bg-opacity:1;background-color:rgb(254 249 195 / var(--un-bg-opacity)) /* #fef9c3 */;}
.hover\\:bg-blue-50:hover{--un-bg-opacity:1;background-color:rgb(239 246 255 / var(--un-bg-opacity)) /* #eff6ff */;}
.hover\\:bg-blue-600:hover{--un-bg-opacity:1;background-color:rgb(37 99 235 / var(--un-bg-opacity)) /* #2563eb */;}
.hover\\:bg-blue-700:hover{--un-bg-opacity:1;background-color:rgb(29 78 216 / var(--un-bg-opacity)) /* #1d4ed8 */;}
.hover\\:bg-gray-300:hover{--un-bg-opacity:1;background-color:rgb(209 213 219 / var(--un-bg-opacity)) /* #d1d5db */;}
.p-2{padding:0.5rem;}
.p-8{padding:2rem;}
.px,
.px-4,
[px=""]{padding-left:1rem;padding-right:1rem;}
.px-2,
[px-2=""]{padding-left:0.5rem;padding-right:0.5rem;}
.px-3{padding-left:0.75rem;padding-right:0.75rem;}
.px-6{padding-left:1.5rem;padding-right:1.5rem;}
.py-1,
[py-1=""]{padding-top:0.25rem;padding-bottom:0.25rem;}
.py-2{padding-top:0.5rem;padding-bottom:0.5rem;}
.pb-4{padding-bottom:1rem;}
.text-center{text-align:center;}
.text-3xl{font-size:1.875rem;line-height:2.25rem;}
.text-4xl{font-size:2.25rem;line-height:2.5rem;}
.text-6xl{font-size:3.75rem;line-height:1;}
.text-lg{font-size:1.125rem;line-height:1.75rem;}
.text-sm{font-size:0.875rem;line-height:1.25rem;}
.text-xs{font-size:0.75rem;line-height:1rem;}
.text-amber-500{--un-text-opacity:1;color:rgb(245 158 11 / var(--un-text-opacity)) /* #f59e0b */;}
.text-amber-700{--un-text-opacity:1;color:rgb(180 83 9 / var(--un-text-opacity)) /* #b45309 */;}
.text-blue-500{--un-text-opacity:1;color:rgb(59 130 246 / var(--un-text-opacity)) /* #3b82f6 */;}
.text-blue-600{--un-text-opacity:1;color:rgb(37 99 235 / var(--un-text-opacity)) /* #2563eb */;}
.text-blue-700{--un-text-opacity:1;color:rgb(29 78 216 / var(--un-text-opacity)) /* #1d4ed8 */;}
.text-gray-400{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-gray-500{--un-text-opacity:1;color:rgb(107 114 128 / var(--un-text-opacity)) /* #6b7280 */;}
.text-gray-600{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity)) /* #4b5563 */;}
.text-gray-700{--un-text-opacity:1;color:rgb(55 65 81 / var(--un-text-opacity)) /* #374151 */;}
.text-gray-900{--un-text-opacity:1;color:rgb(17 24 39 / var(--un-text-opacity)) /* #111827 */;}
.text-green-500{--un-text-opacity:1;color:rgb(34 197 94 / var(--un-text-opacity)) /* #22c55e */;}
.text-green-700{--un-text-opacity:1;color:rgb(21 128 61 / var(--un-text-opacity)) /* #15803d */;}
.text-orange-600{--un-text-opacity:1;color:rgb(234 88 12 / var(--un-text-opacity)) /* #ea580c */;}
.text-orange-700{--un-text-opacity:1;color:rgb(194 65 12 / var(--un-text-opacity)) /* #c2410c */;}
.text-sky-500{--un-text-opacity:1;color:rgb(14 165 233 / var(--un-text-opacity)) /* #0ea5e9 */;}
.text-sky-700{--un-text-opacity:1;color:rgb(3 105 161 / var(--un-text-opacity)) /* #0369a1 */;}
.text-white{--un-text-opacity:1;color:rgb(255 255 255 / var(--un-text-opacity)) /* #fff */;}
.text-yellow-600{--un-text-opacity:1;color:rgb(202 138 4 / var(--un-text-opacity)) /* #ca8a04 */;}
.text-yellow-700{--un-text-opacity:1;color:rgb(161 98 7 / var(--un-text-opacity)) /* #a16207 */;}
.font-bold{font-weight:700;}
.font-semibold{font-weight:600;}
.leading-relaxed{line-height:1.625;}
.opacity-20,
[opacity-20=""]{opacity:0.2;}
.disabled\\:opacity-50:disabled{opacity:0.5;}
.shadow{--un-shadow:var(--un-shadow-inset) 0 1px 3px 0 var(--un-shadow-color, rgb(0 0 0 / 0.1)),var(--un-shadow-inset) 0 1px 2px -1px var(--un-shadow-color, rgb(0 0 0 / 0.1));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.shadow-blue-500\\/30{--un-shadow-color:rgb(59 130 246 / 0.3) /* #3b82f6 */;}
.shadow-lg{--un-shadow:var(--un-shadow-inset) 0 10px 15px -3px var(--un-shadow-color, rgb(0 0 0 / 0.1)),var(--un-shadow-inset) 0 4px 6px -4px var(--un-shadow-color, rgb(0 0 0 / 0.1));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.shadow-md,
[shadow-md=""]{--un-shadow:var(--un-shadow-inset) 0 4px 6px -1px var(--un-shadow-color, rgb(0 0 0 / 0.1)),var(--un-shadow-inset) 0 2px 4px -2px var(--un-shadow-color, rgb(0 0 0 / 0.1));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.shadow-xl{--un-shadow:var(--un-shadow-inset) 0 20px 25px -5px var(--un-shadow-color, rgb(0 0 0 / 0.1)),var(--un-shadow-inset) 0 8px 10px -6px var(--un-shadow-color, rgb(0 0 0 / 0.1));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.transition-all{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.duration-300{transition-duration:300ms;}
.duration-500{transition-duration:500ms;}
.ease{transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);}
.animate-ping{animation:ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;}
@media (min-width: 768px){
.md\\:min-w-0{min-width:0;}
};
  `);customElements.define("process-flow-component",E);R.register(...Q);class M extends z{constructor(){super(),this.chartInitialized=!1,this.chart=null,this.currentTab="overview",this.selectedKPI="efficiency"}getValueData(){return{kpiComparison:{material:{loss:{before:6,after:1.5,unit:"%",name:"材料损耗率"},accuracy:{before:75,after:98,unit:"%",name:"库存准确率"},verification:{before:45,after:2,unit:"分钟",name:"质量验证时间"}},supervision:{inspection:{before:3,after:.5,unit:"小时",name:"现场巡检时间"},reporting:{before:24,after:2,unit:"小时",name:"问题上报时间"},compliance:{before:82,after:96,unit:"%",name:"合规达标率"}},traceability:{query:{before:48,after:.5,unit:"小时",name:"信息查询时间"},accuracy:{before:65,after:99,unit:"%",name:"追溯准确率"},coverage:{before:30,after:100,unit:"%",name:"追溯覆盖率"}}},benefits:{material:{title:"材料管理数字化",improvements:[{metric:"减少材料浪费",value:"75%",icon:"mdi:recycle"},{metric:"提升库存周转",value:"40%",icon:"mdi:rotate-right"},{metric:"降低采购成本",value:"15%",icon:"mdi:trending-down"},{metric:"提高验收效率",value:"85%",icon:"mdi:speedometer"}],description:"通过二维码标识和数字化管理，实现材料全生命周期精准管控，大幅降低损耗和管理成本。"},supervision:{title:"责任人监督智能化",improvements:[{metric:"现场巡检效率",value:"83%",icon:"mdi:clipboard-check"},{metric:"问题响应速度",value:"92%",icon:"mdi:lightning-bolt"},{metric:"质量合规率",value:"17%",icon:"mdi:shield-check"},{metric:"风险预警准确率",value:"95%",icon:"mdi:alert-circle"}],description:"建立四方责任人实时监督体系，通过数字化手段强化质量管控和风险防范。"},traceability:{title:"追溯信息流程优化",improvements:[{metric:"信息查询速度",value:"99%",icon:"mdi:magnify"},{metric:"数据完整性",value:"35%",icon:"mdi:database"},{metric:"问题定位精度",value:"90%",icon:"mdi:crosshairs-gps"},{metric:"档案管理效率",value:"70%",icon:"mdi:file-document"}],description:"构建完整的信息追溯链条，实现从源头到末端的全过程可追溯，提升质量管理水平。"}},realWorldImpact:[{scenario:"材料质量事故处理",before:"传统模式下，发现质量问题后需要人工翻找纸质档案，联系多方确认，平均耗时2-3天",after:"数字化平台可在5分钟内定位问题材料批次、供应商信息和责任人，快速启动处置流程",improvement:"效率提升99%",icon:"mdi:alert-octagon"},{scenario:"项目验收审计",before:"需要收集整理大量纸质资料，验收人员逐一核对，容易出现遗漏和错误",after:"所有材料信息自动归档，一键生成验收报告，审计人员可随时查询核实",improvement:"准确率提升35%",icon:"mdi:file-check"},{scenario:"供应商管理决策",before:"依靠经验判断供应商表现，缺乏客观数据支撑，决策风险较高",after:"基于历史数据自动生成供应商评价报告，为采购决策提供科学依据",improvement:"决策准确率提升60%",icon:"mdi:handshake"}]}}render(){return this.getValueData(),s`
      <div class="w-full flex flex-col items-center">
        <!-- 标题区域 -->
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">
            项目价值：精准量化的数字化成效
          </h2>
          <p class="text-lg text-gray-600 max-w-4xl mx-auto">
            基于深入的前期调研，聚焦材料管理、责任人监督、追溯信息流程三大核心领域，实现可衡量、可持续的管理提升
          </p>
        </div>

        <!-- 标签页导航 -->
        <div
          class="flex gap-2 mb-8 bg-white rounded-xl p-2 shadow-lg border border-gray-100"
        >
          ${[{id:"overview",label:"价值总览",icon:"mdi:view-dashboard"},{id:"material",label:"材料管理",icon:"mdi:package-variant"},{id:"supervision",label:"责任监督",icon:"mdi:shield-account"},{id:"traceability",label:"追溯流程",icon:"mdi:timeline-text"}].map(e=>s`
              <button
                class="px-6 py-3 rounded-lg cursor-pointer font-semibold transition-all duration-300 flex items-center gap-2 ${this.currentTab===e.id?"bg-blue-500 text-white shadow-lg shadow-blue-200":"text-gray-600 hover:bg-gray-50"}"
                @click=${()=>this.switchTab(e.id)}
              >
                <iconify-icon icon="${e.icon}" class="text-lg"></iconify-icon>
                ${e.label}
              </button>
            `)}
        </div>

        <!-- 内容区域 -->
        <div class="w-full max-w-7xl">
          ${this.currentTab==="overview"?this.renderOverviewTab():this.currentTab==="material"?this.renderMaterialTab():this.currentTab==="supervision"?this.renderSupervisionTab():this.renderTraceabilityTab()}
        </div>
      </div>
    `}renderOverviewTab(){const e=this.getValueData();return s`
      <div class="space-y-8">
        <!-- 对比分析图表区域 -->
        <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 class="text-2xl font-bold text-gray-800 mb-6 text-center">
            整体效益对比分析
          </h3>
          <div class="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div class="chart-container mb-6" style="height: 400px;">
                <canvas id="overviewChart" width="400" height="300"></canvas>
              </div>
            </div>
            <div class="space-y-6">
              ${e.realWorldImpact.map(t=>s`
                  <div
                    class="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200"
                  >
                    <div class="flex items-start mb-4">
                      <div
                        class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4"
                      >
                        <iconify-icon
                          icon="${t.icon}"
                          class="text-2xl text-white"
                        ></iconify-icon>
                      </div>
                      <div>
                        <h4 class="font-bold text-gray-800 mb-2">
                          ${t.scenario}
                        </h4>
                        <div
                          class="text-sm text-green-600 font-medium bg-green-100 px-3 py-1 rounded-full inline-block"
                        >
                          ${t.improvement}
                        </div>
                      </div>
                    </div>
                    <div class="grid md:grid-cols-2 gap-4 text-sm">
                      <div
                        class="bg-red-50 rounded-lg p-4 border-l-4 border-red-400"
                      >
                        <div class="font-medium text-red-800 mb-2">
                          传统模式
                        </div>
                        <div class="text-gray-700">${t.before}</div>
                      </div>
                      <div
                        class="bg-green-50 rounded-lg p-4 border-l-4 border-green-400"
                      >
                        <div class="font-medium text-green-800 mb-2">
                          数字化平台
                        </div>
                        <div class="text-gray-700">${t.after}</div>
                      </div>
                    </div>
                  </div>
                `)}
            </div>
          </div>
        </div>

        <!-- 三大核心领域价值展示 -->
        <div class="grid lg:grid-cols-3 gap-8">
          ${Object.entries(e.benefits).map(([t,a])=>{const n={material:"blue",supervision:"green",traceability:"purple"}[t];return s`
              <div
                class="bg-gradient-to-br from-${n}-50 to-${n}-100 rounded-2xl p-6 border border-${n}-200 hover:shadow-lg transition-all duration-300"
              >
                <h4 class="text-xl font-bold text-gray-800 mb-4 text-center">
                  ${a.title}
                </h4>
                <div class="grid grid-cols-2 gap-3 mb-6">
                  ${a.improvements.map(o=>s`
                      <div
                        class="text-center bg-white rounded-lg p-4 shadow-sm"
                      >
                        <div
                          class="w-10 h-10 bg-${n}-500 rounded-full flex items-center justify-center mx-auto mb-2"
                        >
                          <iconify-icon
                            icon="${o.icon}"
                            class="text-lg text-white"
                          ></iconify-icon>
                        </div>
                        <div class="text-xl font-bold text-${n}-600">
                          ${o.value}
                        </div>
                        <div class="text-xs text-gray-600 leading-tight">
                          ${o.metric}
                        </div>
                      </div>
                    `)}
                </div>
                <p class="text-sm text-gray-700 leading-relaxed">
                  ${a.description}
                </p>
              </div>
            `})}
        </div>
      </div>
    `}renderMaterialTab(){const t=this.getValueData().kpiComparison.material;return s`
      <div class="space-y-8">
        <!-- KPI对比图表 -->
        <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 class="text-2xl font-bold text-gray-800 mb-6 text-center">
            材料管理KPI对比
          </h3>
          <div class="grid lg:grid-cols-2 gap-8">
            <div>
              <div class="chart-container" style="height: 300px;">
                <canvas id="materialChart" width="400" height="300"></canvas>
              </div>
            </div>
            <div class="space-y-4">
              ${Object.entries(t).map(([a,r])=>{const n=Math.round(a==="verification"?(1-r.after/r.before)*100:(r.after-r.before)/r.before*100),o=n>0;return s`
                  <div class="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <div class="flex items-center justify-between mb-2">
                      <span class="font-medium text-gray-800">${r.name}</span>
                      <span
                        class="text-sm font-bold ${o?"text-green-600":"text-red-600"}"
                      >
                        ${o?"+":""}${n}%
                      </span>
                    </div>
                    <div
                      class="flex items-center justify-between text-sm text-gray-600"
                    >
                      <span>改善前：${r.before}${r.unit}</span>
                      <span>改善后：${r.after}${r.unit}</span>
                    </div>
                    <div class="mt-2 bg-gray-200 rounded-full h-2">
                      <div
                        class="bg-blue-500 h-2 rounded-full"
                        style="width: ${Math.min(n,100)}%"
                      ></div>
                    </div>
                  </div>
                `})}
            </div>
          </div>
        </div>

        <!-- 材料管理流程优化 -->
        <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 class="text-2xl font-bold text-gray-800 mb-6">
            材料管理流程数字化改造
          </h3>
          <div class="grid md:grid-cols-4 gap-6">
            ${[{step:"采购入库",icon:"mdi:truck-delivery",improvement:"自动生成二维码，关联供应商和质量证书"},{step:"库存管理",icon:"mdi:warehouse",improvement:"实时库存监控，智能预警补货"},{step:"现场验收",icon:"mdi:clipboard-check",improvement:"扫码快速验证，移动端记录问题"},{step:"使用追踪",icon:"mdi:map-marker-path",improvement:"全程使用轨迹，责任人实时可查"}].map((a,r)=>s`
                <div class="text-center">
                  <div class="relative mb-4">
                    <div
                      class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto"
                    >
                      <iconify-icon
                        icon="${a.icon}"
                        class="text-2xl text-white"
                      ></iconify-icon>
                    </div>
                    <div
                      class="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold"
                    >
                      ${r+1}
                    </div>
                  </div>
                  <h4 class="font-bold text-gray-800 mb-2">${a.step}</h4>
                  <p class="text-sm text-gray-600">${a.improvement}</p>
                </div>
              `)}
          </div>
        </div>
      </div>
    `}renderSupervisionTab(){const t=this.getValueData().kpiComparison.supervision;return s`
      <div class="space-y-8">
        <!-- 监督体系架构 -->
        <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 class="text-2xl font-bold text-gray-800 mb-6 text-center">
            四方责任监督体系
          </h3>
          <div class="relative">
            <!-- 四方监督关系图 -->
            <div class="flex items-center justify-center mb-8">
              <div class="relative w-full max-w-5xl h-[450px]">
                <!-- 四个角落的参与方 -->
                <!-- 建设方 -->
                <div
                  class="absolute text-center z-10"
                  style="top: 5%; left: 8%;"
                >
                  <div
                    class="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg"
                  >
                    <iconify-icon
                      icon="mdi:account-tie"
                      class="text-2xl text-white"
                    ></iconify-icon>
                  </div>
                  <h4 class="font-bold text-gray-800 text-sm mb-1">建设方</h4>
                  <p class="text-xs text-gray-600">项目业主</p>
                </div>

                <!-- 建管部 -->
                <div
                  class="absolute text-center z-10"
                  style="top: 5%; right: 8%;"
                >
                  <div
                    class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg"
                  >
                    <iconify-icon
                      icon="mdi:domain"
                      class="text-2xl text-white"
                    ></iconify-icon>
                  </div>
                  <h4 class="font-bold text-gray-800 text-sm mb-1">建管部</h4>
                  <p class="text-xs text-gray-600">建设管理</p>
                </div>

                <!-- 监理公司 -->
                <div
                  class="absolute text-center z-10"
                  style="bottom: 5%; left: 8%;"
                >
                  <div
                    class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg"
                  >
                    <iconify-icon
                      icon="mdi:shield-check"
                      class="text-2xl text-white"
                    ></iconify-icon>
                  </div>
                  <h4 class="font-bold text-gray-800 text-sm mb-1">监理公司</h4>
                  <p class="text-xs text-gray-600">质量监督</p>
                </div>

                <!-- 施工方 -->
                <div
                  class="absolute text-center z-10"
                  style="bottom: 5%; right: 8%;"
                >
                  <div
                    class="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg"
                  >
                    <iconify-icon
                      icon="mdi:hard-hat"
                      class="text-2xl text-white"
                    ></iconify-icon>
                  </div>
                  <h4 class="font-bold text-gray-800 text-sm mb-1">施工方</h4>
                  <p class="text-xs text-gray-600">工程实施</p>
                </div>

                <!-- 中心数字化平台 -->
                <div
                  class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
                >
                  <div
                    class="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center shadow-xl"
                  >
                    <iconify-icon
                      icon="mdi:monitor-dashboard"
                      class="text-3xl text-white"
                    ></iconify-icon>
                  </div>
                  <p class="text-sm font-bold text-gray-800 text-center mt-2">
                    数字化平台
                  </p>
                  <p class="text-xs text-gray-600 text-center">统一协调中心</p>
                </div>

                <!-- 连接线 -->
                <svg
                  class="absolute inset-0 w-full h-full pointer-events-none z-0"
                >
                  <!-- 四个角到中心的连线 -->
                  <!-- 建设方到中心 -->
                  <line
                    x1="16%"
                    y1="20%"
                    x2="50%"
                    y2="50%"
                    stroke="#cbd5e1"
                    stroke-width="3"
                    stroke-dasharray="8,4"
                  />
                  <!-- 建管部到中心 -->
                  <line
                    x1="84%"
                    y1="20%"
                    x2="50%"
                    y2="50%"
                    stroke="#cbd5e1"
                    stroke-width="3"
                    stroke-dasharray="8,4"
                  />
                  <!-- 监理公司到中心 -->
                  <line
                    x1="16%"
                    y1="80%"
                    x2="50%"
                    y2="50%"
                    stroke="#cbd5e1"
                    stroke-width="3"
                    stroke-dasharray="8,4"
                  />
                  <!-- 施工方到中心 -->
                  <line
                    x1="84%"
                    y1="80%"
                    x2="50%"
                    y2="50%"
                    stroke="#cbd5e1"
                    stroke-width="3"
                    stroke-dasharray="8,4"
                  />

                  <!-- 上方两个角之间的连线 -->
                  <line
                    x1="16%"
                    y1="20%"
                    x2="84%"
                    y2="20%"
                    stroke="#e5e7eb"
                    stroke-width="2"
                    stroke-dasharray="5,5"
                  />
                  <!-- 下方两个角之间的连线 -->
                  <line
                    x1="16%"
                    y1="80%"
                    x2="84%"
                    y2="80%"
                    stroke="#e5e7eb"
                    stroke-width="2"
                    stroke-dasharray="5,5"
                  />
                  <!-- 左侧两个角之间的连线 -->
                  <line
                    x1="16%"
                    y1="20%"
                    x2="16%"
                    y2="80%"
                    stroke="#e5e7eb"
                    stroke-width="2"
                    stroke-dasharray="5,5"
                  />
                  <!-- 右侧两个角之间的连线 -->
                  <line
                    x1="84%"
                    y1="20%"
                    x2="84%"
                    y2="80%"
                    stroke="#e5e7eb"
                    stroke-width="2"
                    stroke-dasharray="5,5"
                  />
                </svg>
              </div>
            </div>

            <!-- 协作关系说明 -->
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              ${[{role:"建设方",responsibilities:["项目投资决策","总体目标制定","资源配置统筹"]},{role:"建管部",responsibilities:["建设过程管理","进度质量控制","协调各方关系"]},{role:"监理公司",responsibilities:["质量安全监督","合规性检查","问题处理协调"]},{role:"施工方",responsibilities:["工程具体实施","材料使用管理","施工质量保证"]}].map(a=>s`
                  <div class="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <h5 class="font-bold text-gray-800 mb-3 text-center">
                      ${a.role}
                    </h5>
                    <div class="space-y-2">
                      ${a.responsibilities.map(r=>s`
                          <div class="text-sm text-gray-600 flex items-center">
                            <div
                              class="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"
                            ></div>
                            ${r}
                          </div>
                        `)}
                    </div>
                  </div>
                `)}
            </div>
          </div>
        </div>

        <!-- KPI提升情况 -->
        <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 class="text-2xl font-bold text-gray-800 mb-6 text-center">
            责任监督KPI提升
          </h3>
          <div class="grid lg:grid-cols-2 gap-8">
            <div>
              <div class="chart-container" style="height: 300px;">
                <canvas id="supervisionChart" width="400" height="300"></canvas>
              </div>
            </div>
            <div class="space-y-4">
              ${Object.entries(t).map(([a,r])=>{const n=Math.round(a==="inspection"||a==="reporting"?(1-r.after/r.before)*100:(r.after-r.before)/r.before*100),o=n>0;return s`
                  <div
                    class="bg-green-50 rounded-lg p-4 border border-green-200"
                  >
                    <div class="flex items-center justify-between mb-2">
                      <span class="font-medium text-gray-800">${r.name}</span>
                      <span
                        class="text-sm font-bold ${o?"text-green-600":"text-red-600"}"
                      >
                        ${o?"+":""}${n}%
                      </span>
                    </div>
                    <div
                      class="flex items-center justify-between text-sm text-gray-600"
                    >
                      <span>改善前：${r.before}${r.unit}</span>
                      <span>改善后：${r.after}${r.unit}</span>
                    </div>
                    <div class="mt-2 bg-gray-200 rounded-full h-2">
                      <div
                        class="bg-green-500 h-2 rounded-full"
                        style="width: ${Math.min(n,100)}%"
                      ></div>
                    </div>
                  </div>
                `})}
            </div>
          </div>
        </div>
      </div>
    `}renderTraceabilityTab(){const t=this.getValueData().kpiComparison.traceability;return s`
      <div class="space-y-8">
        <!-- 追溯流程展示 -->
        <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 class="text-2xl font-bold text-gray-800 mb-6 text-center">
            全过程追溯信息流
          </h3>
          <div class="relative">
            <!-- 追溯流程时间线 -->
            <div class="flex items-center justify-between relative">
              ${[{phase:"采购源头",icon:"mdi:factory",data:["供应商信息","质量证书","检验报告"]},{phase:"入库存储",icon:"mdi:warehouse",data:["入库时间","存储位置","质量状态"]},{phase:"现场使用",icon:"mdi:construction",data:["使用位置","安装人员","施工记录"]},{phase:"验收归档",icon:"mdi:file-check",data:["验收结果","质量评定","档案归档"]}].map((a,r)=>s`
                  <div class="text-center flex-1">
                    <div class="relative mb-4">
                      <div
                        class="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto"
                      >
                        <iconify-icon
                          icon="${a.icon}"
                          class="text-2xl text-white"
                        ></iconify-icon>
                      </div>
                      ${r<3?s`
                            <div
                              class="absolute z-[-1] top-8 left-1/2 w-full h-0.5 bg-purple-300 transform -translate-y-1/2"
                            ></div>
                          `:""}
                    </div>
                    <h4 class="font-bold text-gray-800 mb-3">${a.phase}</h4>
                    <div class="space-y-1">
                      ${a.data.map(n=>s`
                          <div
                            class="text-sm text-gray-600 bg-purple-50 rounded px-2 py-1"
                          >
                            ${n}
                          </div>
                        `)}
                    </div>
                  </div>
                `)}
            </div>
          </div>
        </div>

        <!-- KPI对比 -->
        <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 class="text-2xl font-bold text-gray-800 mb-6 text-center">
            追溯效率KPI对比
          </h3>
          <div class="grid lg:grid-cols-2 gap-8">
            <div>
              <div class="chart-container" style="height: 300px;">
                <canvas
                  id="traceabilityChart"
                  width="400"
                  height="300"
                ></canvas>
              </div>
            </div>
            <div class="space-y-4">
              ${Object.entries(t).map(([a,r])=>{const n=Math.round(a==="query"?(1-r.after/r.before)*100:(r.after-r.before)/r.before*100),o=n>0;return s`
                  <div
                    class="bg-purple-50 rounded-lg p-4 border border-purple-200"
                  >
                    <div class="flex items-center justify-between mb-2">
                      <span class="font-medium text-gray-800">${r.name}</span>
                      <span
                        class="text-sm font-bold ${o?"text-green-600":"text-red-600"}"
                      >
                        ${o?"+":""}${n}%
                      </span>
                    </div>
                    <div
                      class="flex items-center justify-between text-sm text-gray-600"
                    >
                      <span>改善前：${r.before}${r.unit}</span>
                      <span>改善后：${r.after}${r.unit}</span>
                    </div>
                    <div class="mt-2 bg-gray-200 rounded-full h-2">
                      <div
                        class="bg-purple-500 h-2 rounded-full"
                        style="width: ${Math.min(n,100)}%"
                      ></div>
                    </div>
                  </div>
                `})}
            </div>
          </div>
        </div>
      </div>
    `}switchTab(e){this.currentTab!==e&&(this.currentTab=e,this.requestUpdate(),this.safeRequestAnimationFrame(()=>{this.initializeCharts()}))}firstUpdated(){this.initializeCharts(),this.initializeAnimations()}initializeAnimations(){const e=this.shadowRoot.querySelectorAll(".bg-white, .bg-gradient-to-r, .bg-gradient-to-br");i.fromTo(e,{y:30,opacity:0},{y:0,opacity:1,duration:.6,stagger:.1,ease:"power2.out"})}initializeCharts(){this.safeRequestAnimationFrame(()=>{this.currentTab==="overview"?this.initializeOverviewChart():this.currentTab==="material"?this.initializeMaterialChart():this.currentTab==="supervision"?this.initializeSupervisionChart():this.currentTab==="traceability"&&this.initializeTraceabilityChart()})}initializeOverviewChart(){const e=this.shadowRoot.querySelector("#overviewChart");if(!e)return;this.overviewChart&&this.overviewChart.destroy();const t={labels:["材料损耗率(%)","质量追溯时间(小时)","协同成本指数"],datasets:[{label:"传统模式",data:[6,48,100],backgroundColor:"rgba(239, 68, 68, 0.7)",borderColor:"rgba(239, 68, 68, 1)",borderWidth:2},{label:"数字化平台",data:[1.5,.5,40],backgroundColor:"rgba(59, 130, 246, 0.7)",borderColor:"rgba(59, 130, 246, 1)",borderWidth:2}]};this.overviewChart=new R(e,{type:"bar",data:t,options:this.getChartOptions("整体效益对比")})}initializeMaterialChart(){const e=this.shadowRoot.querySelector("#materialChart");if(!e)return;this.materialChart&&this.materialChart.destroy();const t=this.getValueData().kpiComparison.material,a={labels:Object.values(t).map(r=>r.name),datasets:[{label:"改善前",data:Object.values(t).map(r=>r.before),backgroundColor:"rgba(239, 68, 68, 0.7)",borderColor:"rgba(239, 68, 68, 1)",borderWidth:2},{label:"改善后",data:Object.values(t).map(r=>r.after),backgroundColor:"rgba(59, 130, 246, 0.7)",borderColor:"rgba(59, 130, 246, 1)",borderWidth:2}]};this.materialChart=new R(e,{type:"bar",data:a,options:this.getChartOptions("材料管理KPI对比")})}initializeSupervisionChart(){const e=this.shadowRoot.querySelector("#supervisionChart");if(!e)return;this.supervisionChart&&this.supervisionChart.destroy();const t=this.getValueData().kpiComparison.supervision,a={labels:Object.values(t).map(r=>r.name),datasets:[{label:"改善前",data:Object.values(t).map(r=>r.before),backgroundColor:"rgba(239, 68, 68, 0.7)",borderColor:"rgba(239, 68, 68, 1)",borderWidth:2},{label:"改善后",data:Object.values(t).map(r=>r.after),backgroundColor:"rgba(34, 197, 94, 0.7)",borderColor:"rgba(34, 197, 94, 1)",borderWidth:2}]};this.supervisionChart=new R(e,{type:"bar",data:a,options:this.getChartOptions("责任监督KPI对比")})}initializeTraceabilityChart(){const e=this.shadowRoot.querySelector("#traceabilityChart");if(!e)return;this.traceabilityChart&&this.traceabilityChart.destroy();const t=this.getValueData().kpiComparison.traceability,a={labels:Object.values(t).map(r=>r.name),datasets:[{label:"改善前",data:Object.values(t).map(r=>r.before),backgroundColor:"rgba(239, 68, 68, 0.7)",borderColor:"rgba(239, 68, 68, 1)",borderWidth:2},{label:"改善后",data:Object.values(t).map(r=>r.after),backgroundColor:"rgba(147, 51, 234, 0.7)",borderColor:"rgba(147, 51, 234, 1)",borderWidth:2}]};this.traceabilityChart=new R(e,{type:"bar",data:a,options:this.getChartOptions("追溯效率KPI对比")})}getChartOptions(e){return{animation:{duration:1500,easing:"easeInOutQuart"},responsive:!0,maintainAspectRatio:!1,scales:{y:{beginAtZero:!0,grid:{color:"rgba(0, 0, 0, 0.1)"}},x:{grid:{display:!1}}},plugins:{legend:{position:"top",labels:{font:{size:14,weight:"bold"},padding:20}},tooltip:{backgroundColor:"rgba(0, 0, 0, 0.8)",titleFont:{size:14,weight:"bold"},bodyFont:{size:13}}}}}updated(e){super.updated(e),e.has("currentTab")&&this.safeRequestAnimationFrame(()=>{this.initializeAnimations()})}disconnectedCallback(){super.disconnectedCallback(),this.overviewChart&&(this.overviewChart.destroy(),this.overviewChart=null),this.materialChart&&(this.materialChart.destroy(),this.materialChart=null),this.supervisionChart&&(this.supervisionChart.destroy(),this.supervisionChart=null),this.traceabilityChart&&(this.traceabilityChart.destroy(),this.traceabilityChart=null)}}m(M,"properties",{chartInitialized:{type:Boolean},currentTab:{type:String},selectedKPI:{type:String}}),m(M,"styles",k`
    /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.pointer-events-none{pointer-events:none;}
.absolute{position:absolute;}
.relative{position:relative;}
.static{position:static;}
.inset-0{inset:0;}
.-right-2{right:-0.5rem;}
.-top-2{top:-0.5rem;}
.left-1\\/2{left:50%;}
.top-1\\/2{top:50%;}
.top-8{top:2rem;}
.z-\\[-1\\]{z-index:-1;}
.z-0{z-index:0;}
.z-10{z-index:10;}
.z-20{z-index:20;}
.grid{display:grid;}
.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr));}
.mx-auto{margin-left:auto;margin-right:auto;}
.mb-1{margin-bottom:0.25rem;}
.mb-12{margin-bottom:3rem;}
.mb-2{margin-bottom:0.5rem;}
.mb-3{margin-bottom:0.75rem;}
.mb-4{margin-bottom:1rem;}
.mb-6{margin-bottom:1.5rem;}
.mb-8{margin-bottom:2rem;}
.mr-2{margin-right:0.5rem;}
.mr-4{margin-right:1rem;}
.mt-2{margin-top:0.5rem;}
.mt-8{margin-top:2rem;}
.inline-block{display:inline-block;}
.h-\\[450px\\]{height:450px;}
.h-0\\.5{height:0.125rem;}
.h-1\\.5{height:0.375rem;}
.h-10{height:2.5rem;}
.h-12{height:3rem;}
.h-16{height:4rem;}
.h-2{height:0.5rem;}
.h-20{height:5rem;}
.h-8{height:2rem;}
.h-full{height:100%;}
.max-w-4xl{max-width:56rem;}
.max-w-5xl{max-width:64rem;}
.max-w-7xl{max-width:80rem;}
.w-1\\.5{width:0.375rem;}
.w-10{width:2.5rem;}
.w-12{width:3rem;}
.w-16{width:4rem;}
.w-20{width:5rem;}
.w-8{width:2rem;}
.w-full{width:100%;}
.flex{display:flex;}
.flex-1{flex:1 1 0%;}
.flex-col{flex-direction:column;}
.-translate-x-1\\/2{--un-translate-x:-50%;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.-translate-y-1\\/2{--un-translate-y:-50%;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.transform{transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.cursor-pointer{cursor:pointer;}
.items-start{align-items:flex-start;}
.items-center{align-items:center;}
.justify-center{justify-content:center;}
.justify-between{justify-content:space-between;}
.gap-2{gap:0.5rem;}
.gap-3{gap:0.75rem;}
.gap-4{gap:1rem;}
.gap-6{gap:1.5rem;}
.gap-8{gap:2rem;}
.space-y-1>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(0.25rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(0.25rem * var(--un-space-y-reverse));}
.space-y-2>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(0.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(0.5rem * var(--un-space-y-reverse));}
.space-y-4>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}
.space-y-6>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1.5rem * var(--un-space-y-reverse));}
.space-y-8>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(2rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(2rem * var(--un-space-y-reverse));}
.border{border-width:1px;}
.border-l-4{border-left-width:4px;}
.border-blue-200{--un-border-opacity:1;border-color:rgb(191 219 254 / var(--un-border-opacity));}
.border-gray-100{--un-border-opacity:1;border-color:rgb(243 244 246 / var(--un-border-opacity));}
.border-gray-200{--un-border-opacity:1;border-color:rgb(229 231 235 / var(--un-border-opacity));}
.border-green-200{--un-border-opacity:1;border-color:rgb(187 247 208 / var(--un-border-opacity));}
.border-green-400{--un-border-opacity:1;border-color:rgb(74 222 128 / var(--un-border-opacity));}
.border-purple-200{--un-border-opacity:1;border-color:rgb(233 213 255 / var(--un-border-opacity));}
.border-red-400{--un-border-opacity:1;border-color:rgb(248 113 113 / var(--un-border-opacity));}
.rounded{border-radius:0.25rem;}
.rounded-2xl{border-radius:1rem;}
.rounded-full{border-radius:9999px;}
.rounded-lg{border-radius:0.5rem;}
.rounded-xl{border-radius:0.75rem;}
.bg-blue-50{--un-bg-opacity:1;background-color:rgb(239 246 255 / var(--un-bg-opacity)) /* #eff6ff */;}
.bg-blue-500{--un-bg-opacity:1;background-color:rgb(59 130 246 / var(--un-bg-opacity)) /* #3b82f6 */;}
.bg-gray-200{--un-bg-opacity:1;background-color:rgb(229 231 235 / var(--un-bg-opacity)) /* #e5e7eb */;}
.bg-gray-50{--un-bg-opacity:1;background-color:rgb(249 250 251 / var(--un-bg-opacity)) /* #f9fafb */;}
.bg-green-100{--un-bg-opacity:1;background-color:rgb(220 252 231 / var(--un-bg-opacity)) /* #dcfce7 */;}
.bg-green-50{--un-bg-opacity:1;background-color:rgb(240 253 244 / var(--un-bg-opacity)) /* #f0fdf4 */;}
.bg-green-500{--un-bg-opacity:1;background-color:rgb(34 197 94 / var(--un-bg-opacity)) /* #22c55e */;}
.bg-indigo-500{--un-bg-opacity:1;background-color:rgb(99 102 241 / var(--un-bg-opacity)) /* #6366f1 */;}
.bg-orange-500{--un-bg-opacity:1;background-color:rgb(249 115 22 / var(--un-bg-opacity)) /* #f97316 */;}
.bg-purple-300{--un-bg-opacity:1;background-color:rgb(216 180 254 / var(--un-bg-opacity)) /* #d8b4fe */;}
.bg-purple-50{--un-bg-opacity:1;background-color:rgb(250 245 255 / var(--un-bg-opacity)) /* #faf5ff */;}
.bg-purple-500{--un-bg-opacity:1;background-color:rgb(168 85 247 / var(--un-bg-opacity)) /* #a855f7 */;}
.bg-red-50{--un-bg-opacity:1;background-color:rgb(254 242 242 / var(--un-bg-opacity)) /* #fef2f2 */;}
.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255 / var(--un-bg-opacity)) /* #fff */;}
.hover\\:bg-gray-50:hover{--un-bg-opacity:1;background-color:rgb(249 250 251 / var(--un-bg-opacity)) /* #f9fafb */;}
.from-gray-50{--un-gradient-from-position:0%;--un-gradient-from:rgb(249 250 251 / var(--un-from-opacity, 1)) var(--un-gradient-from-position);--un-gradient-to-position:100%;--un-gradient-to:rgb(249 250 251 / 0) var(--un-gradient-to-position);--un-gradient-stops:var(--un-gradient-from), var(--un-gradient-to);}
.to-gray-100{--un-gradient-to-position:100%;--un-gradient-to:rgb(243 244 246 / var(--un-to-opacity, 1)) var(--un-gradient-to-position);}
.bg-gradient-to-br{--un-gradient-shape:to bottom right in oklch;--un-gradient:var(--un-gradient-shape), var(--un-gradient-stops);background-image:linear-gradient(var(--un-gradient));}
.bg-gradient-to-r{--un-gradient-shape:to right in oklch;--un-gradient:var(--un-gradient-shape), var(--un-gradient-stops);background-image:linear-gradient(var(--un-gradient));}
[stroke-width~="\\32 "]{stroke-width:2px;}
[stroke-width~="\\33 "]{stroke-width:3px;}
[stroke~="\\#cbd5e1"]{--un-stroke-opacity:1;stroke:rgb(203 213 225 / var(--un-stroke-opacity)) /* #cbd5e1 */;}
[stroke~="\\#e5e7eb"]{--un-stroke-opacity:1;stroke:rgb(229 231 235 / var(--un-stroke-opacity)) /* #e5e7eb */;}
.p-2{padding:0.5rem;}
.p-4{padding:1rem;}
.p-6{padding:1.5rem;}
.p-8{padding:2rem;}
.px-2{padding-left:0.5rem;padding-right:0.5rem;}
.px-3{padding-left:0.75rem;padding-right:0.75rem;}
.px-6{padding-left:1.5rem;padding-right:1.5rem;}
.py-1{padding-top:0.25rem;padding-bottom:0.25rem;}
.py-3{padding-top:0.75rem;padding-bottom:0.75rem;}
.text-center{text-align:center;}
.text-2xl{font-size:1.5rem;line-height:2rem;}
.text-3xl{font-size:1.875rem;line-height:2.25rem;}
.text-4xl{font-size:2.25rem;line-height:2.5rem;}
.text-lg{font-size:1.125rem;line-height:1.75rem;}
.text-sm{font-size:0.875rem;line-height:1.25rem;}
.text-xl{font-size:1.25rem;line-height:1.75rem;}
.text-xs{font-size:0.75rem;line-height:1rem;}
.text-gray-600{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity)) /* #4b5563 */;}
.text-gray-700{--un-text-opacity:1;color:rgb(55 65 81 / var(--un-text-opacity)) /* #374151 */;}
.text-gray-800{--un-text-opacity:1;color:rgb(31 41 55 / var(--un-text-opacity)) /* #1f2937 */;}
.text-green-600{--un-text-opacity:1;color:rgb(22 163 74 / var(--un-text-opacity)) /* #16a34a */;}
.text-green-800{--un-text-opacity:1;color:rgb(22 101 52 / var(--un-text-opacity)) /* #166534 */;}
.text-red-600{--un-text-opacity:1;color:rgb(220 38 38 / var(--un-text-opacity)) /* #dc2626 */;}
.text-red-800{--un-text-opacity:1;color:rgb(153 27 27 / var(--un-text-opacity)) /* #991b1b */;}
.text-white{--un-text-opacity:1;color:rgb(255 255 255 / var(--un-text-opacity)) /* #fff */;}
.font-bold{font-weight:700;}
.font-medium{font-weight:500;}
.font-semibold{font-weight:600;}
.leading-relaxed{line-height:1.625;}
.leading-tight{line-height:1.25;}
.tab{-moz-tab-size:4;-o-tab-size:4;tab-size:4;}
.shadow-blue-200{--un-shadow-opacity:1;--un-shadow-color:rgb(191 219 254 / var(--un-shadow-opacity)) /* #bfdbfe */;}
.shadow-lg{--un-shadow:var(--un-shadow-inset) 0 10px 15px -3px var(--un-shadow-color, rgb(0 0 0 / 0.1)),var(--un-shadow-inset) 0 4px 6px -4px var(--un-shadow-color, rgb(0 0 0 / 0.1));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.shadow-sm{--un-shadow:var(--un-shadow-inset) 0 1px 2px 0 var(--un-shadow-color, rgb(0 0 0 / 0.05));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.shadow-xl{--un-shadow:var(--un-shadow-inset) 0 20px 25px -5px var(--un-shadow-color, rgb(0 0 0 / 0.1)),var(--un-shadow-inset) 0 8px 10px -6px var(--un-shadow-color, rgb(0 0 0 / 0.1));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.hover\\:shadow-lg:hover{--un-shadow:var(--un-shadow-inset) 0 10px 15px -3px var(--un-shadow-color, rgb(0 0 0 / 0.1)),var(--un-shadow-inset) 0 4px 6px -4px var(--un-shadow-color, rgb(0 0 0 / 0.1));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.transition-all{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.duration-300{transition-duration:300ms;}
.ease{transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);}
@media (min-width: 768px){
.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr));}
.md\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr));}
}
@media (min-width: 1024px){
.lg\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr));}
.lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr));}
.lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr));}
};
  `);customElements.define("value-chart-component",M);class W extends z{constructor(){super(),this.visibleItems=new Set,this.expandedIndex=-1,this.roadmapData=[{phase:1,duration:"1-3周",title:"前期准备阶段",description:"需求调研与目标确认，组建项目组，完成资源与协作规划。",details:["组织核心用户召开需求研讨会，明确核心痛点","组建项目组：需求分析师、技术开发、数据工程师、现场实施团队、运维团队"],icon:"🎯"},{phase:2,duration:"第4周",title:"方案设计阶段",description:"技术架构设计，开发APP支持扫码巡检，管理端Web平台设计。",details:["APP开发：扫码、巡检打卡、异常上报（离线模式缓存数据）","管理端Web平台：权限管理、数据编辑功能","小程序：展示基础信息，避免敏感数据泄露"],icon:"📋"},{phase:3,duration:"5-10周",title:"系统开发与集成阶段",description:"按模块开发，系统集成与对接，测试验证。",details:["按模块进行系统开发","系统集成与第三方系统对接","全面测试验证系统功能"],icon:"⚙️"},{phase:4,duration:"11-13周",title:"试点部署与培训阶段",description:"小范围试点上线，收集反馈，解决问题，用户培训。",details:["选择1-2个典型区域作为试点，部署生产环境","收集试点反馈，解决BUG问题","开展用户培训，确保顺利使用"],icon:"🚀"},{phase:5,duration:"长期",title:"全面推广与运营阶段",description:"全量部署，迭代优化，根据用户需求新增功能，扩展应用场景。",details:["全量部署到所有区域","迭代优化：新增管道风险预测等功能","扩展场景：基于用户体验，持续扩展需求"],icon:"📈"}]}connectedCallback(){super.connectedCallback(),this.setupIntersectionObserver()}setupIntersectionObserver(){const e=new IntersectionObserver(t=>{t.forEach(a=>{if(a.isIntersecting){const r=parseInt(a.target.dataset.index);setTimeout(()=>{a.target.classList.add("visible"),this.visibleItems.add(r)},r*200)}})},{threshold:.3});setTimeout(()=>{var t;(t=this.shadowRoot)==null||t.querySelectorAll(".roadmap-item").forEach((a,r)=>{a.dataset.index=r,e.observe(a)})},100)}render(){return s`
      <div class="container mx-auto px-6 w-full max-w-6xl">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            实施路线图：分阶段稳步推进
          </h2>
          <p class="text-gray-600 text-lg">
            科学规划，稳步实施，确保项目成功落地
          </p>
        </div>

        <!-- 垂直时间线布局 -->
        <div class="flex flex-col">
          ${this.roadmapData.map((e,t)=>this.renderTimelineStep(e,t))}
        </div>
      </div>
    `}toggleDetails(e){if(this.expandedIndex===e){this.collapseDetails(e),this.expandedIndex=-1;return}this.expandedIndex!==-1&&this.collapseDetails(this.expandedIndex),this.expandDetails(e),this.expandedIndex=e}expandDetails(e){const t=this.shadowRoot.querySelector(`#details-${e}`);t.classList.add("expanded"),setTimeout(()=>{t.querySelectorAll(".detail-item").forEach((a,r)=>{setTimeout(()=>a.classList.add("show"),r*100)})},50)}collapseDetails(e){const t=this.shadowRoot.querySelector(`#details-${e}`);t.classList.remove("expanded"),t.querySelectorAll(".detail-item").forEach(a=>{a.classList.remove("show")})}getPhaseColor(e){return{1:"bg-blue-500",2:"bg-green-500",3:"bg-yellow-500",4:"bg-orange-500",5:"bg-purple-500"}[e]||"bg-gray-500"}getBorderColor(e){return this.getPhaseColor(e).replace("bg-","border-")}getTimelineColors(e){return[{from:"blue-400",to:"green-400"},{from:"green-400",to:"yellow-400"},{from:"yellow-400",to:"orange-400"},{from:"orange-400",to:"purple-400"},{from:"purple-400",to:"purple-600"}][e]||{from:"gray-400",to:"gray-600"}}renderTimelineStep(e,t){const a=t===this.roadmapData.length-1;return s`
      <div class="timeline-step relative flex group">
        <!-- 左侧时间线区域 -->
        <div class="flex-shrink-0 w-32 relative">
          <!-- 时间线段 -->
          ${a?"":s`
                <div
                  class="absolute left-8 top-6 w-1 h-full bg-blue-300 shadow-sm  transition-all origin-center duration-300 group-hover:w-1.5 group-hover:shadow-lg group-hover:translate-x-[-1/2]"
                ></div>
              `}

          <!-- 圆形节点 -->
          <div class="relative z-10 pt-6">
            <div
              class="phase-badge phase-badge-glow absolute left-8 w-12 h-12 ${this.getPhaseColor(e.phase)} rounded-full border-4 border-white shadow-lg flex items-center justify-center transform -translate-x-1/2"
            >
              <span
                class="text-white text-sm font-bold transition-transform duration-300 group-hover:scale-110"
                >${e.phase}</span
              >
            </div>
          </div>
        </div>

        <!-- 右侧内容卡片 -->
        <div class="flex-1 ${a?"":"pb-8"}">
          ${this.renderContentCard(e,t)}
        </div>
      </div>
    `}renderContentCard(e,t){return s`
      <div
        class="roadmap-card roadmap-item bg-white rounded-xl shadow-lg border-l-4 ${this.getBorderColor(e.phase)} cursor-pointer ml-8 transition-all duration-400 ease-out"
        @click="${()=>this.toggleDetails(t)}"
      >
        <div class="p-6">
          <!-- 卡片头部 -->
          <div class="flex justify-between items-start mb-4">
            <div class="flex items-center gap-4">
              <span class="text-3xl">${e.icon}</span>
              <div>
                <h3 class="font-bold text-xl text-gray-900">${e.title}</h3>
                <p
                  class="text-sm text-blue-600 font-semibold bg-blue-50 px-3 py-1 rounded-full inline-block mt-1"
                >
                  ${e.duration}
                </p>
              </div>
            </div>
            <div
              class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition-transform duration-200 ${this.expandedIndex===t?"rotate-180":""}"
            >
              <svg
                class="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>

          <!-- 描述 -->
          <p class="text-gray-600 mb-4 leading-relaxed">${e.description}</p>

          <!-- 详细内容 -->
          <div id="details-${t}" class="details-list">
            <div class="border-t pt-4 mt-4">
              <h5
                class="font-semibold text-gray-800 mb-3 text-sm flex items-center"
              >
                <span
                  class="w-2 h-2 rounded-full ${this.getPhaseColor(e.phase)} mr-2"
                ></span>
                详细内容：
              </h5>
              <ul class="space-y-3">
                ${e.details.map(a=>s`
                    <li
                      class="detail-item flex items-start text-sm text-gray-600"
                    >
                      <span
                        class="w-2 h-2 rounded-full bg-blue-400 mt-1.5 mr-3 flex-shrink-0"
                      ></span>
                      <span class="leading-relaxed">${a}</span>
                    </li>
                  `)}
              </ul>
            </div>
          </div>

          <!-- 底部提示 -->
          <div class="flex justify-center mt-4 pt-3 border-t border-gray-100">
            <span
              class="text-blue-500 text-sm font-medium hover:text-blue-700 transition-colors flex items-center gap-1"
            >
              ${this.expandedIndex===t?"收起详情":"展开详情"}
              <svg
                class="w-4 h-4 transition-transform duration-200 ${this.expandedIndex===t?"rotate-180":""}"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
    `}}m(W,"styles",k`
    /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: shortcuts */
.container{width:100%;}
@media (min-width: 640px){
.container{max-width:640px;}
}
@media (min-width: 768px){
.container{max-width:768px;}
}
@media (min-width: 1024px){
.container{max-width:1024px;}
}
@media (min-width: 1280px){
.container{max-width:1280px;}
}
@media (min-width: 1536px){
.container{max-width:1536px;}
}
/* layer: default */
.visible{visibility:visible;}
.absolute{position:absolute;}
.relative{position:relative;}
.static{position:static;}
.left-8{left:2rem;}
.top-6{top:1.5rem;}
.z-10{z-index:10;}
.mx-auto{margin-left:auto;margin-right:auto;}
.mb-16{margin-bottom:4rem;}
.mb-3{margin-bottom:0.75rem;}
.mb-4{margin-bottom:1rem;}
.ml-8{margin-left:2rem;}
.mr-2{margin-right:0.5rem;}
.mr-3{margin-right:0.75rem;}
.mt-1{margin-top:0.25rem;}
.mt-1\\.5{margin-top:0.375rem;}
.mt-4{margin-top:1rem;}
.inline-block{display:inline-block;}
.hidden{display:none;}
.h-12{height:3rem;}
.h-2{height:0.5rem;}
.h-4{height:1rem;}
.h-5{height:1.25rem;}
.h-8{height:2rem;}
.h-full{height:100%;}
.max-w-6xl{max-width:72rem;}
.w-1{width:0.25rem;}
.w-12{width:3rem;}
.w-2{width:0.5rem;}
.w-32{width:8rem;}
.w-4{width:1rem;}
.w-5{width:1.25rem;}
.w-8{width:2rem;}
.w-full{width:100%;}
.group:hover .group-hover\\:w-1\\.5{width:0.375rem;}
.flex{display:flex;}
.flex-1{flex:1 1 0%;}
.flex-shrink-0{flex-shrink:0;}
.flex-col{flex-direction:column;}
.origin-center{transform-origin:center;}
.-translate-x-1\\/2{--un-translate-x:-50%;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.group:hover .group-hover\\:translate-x-\\[-1\\/2\\]{--un-translate-x:-1/2;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.rotate-180{--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-rotate:180deg;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.group:hover .group-hover\\:scale-110{--un-scale-x:1.1;--un-scale-y:1.1;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.transform{transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.cursor-pointer{cursor:pointer;}
.items-start{align-items:flex-start;}
.items-center{align-items:center;}
.justify-center{justify-content:center;}
.justify-between{justify-content:space-between;}
.gap-1{gap:0.25rem;}
.gap-4{gap:1rem;}
.space-y-3>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(0.75rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(0.75rem * var(--un-space-y-reverse));}
.border-4{border-width:4px;}
.border-l-4{border-left-width:4px;}
.border-t{border-top-width:1px;}
.border-gray-100{--un-border-opacity:1;border-color:rgb(243 244 246 / var(--un-border-opacity));}
.border-white{--un-border-opacity:1;border-color:rgb(255 255 255 / var(--un-border-opacity));}
.rounded-full{border-radius:9999px;}
.rounded-xl{border-radius:0.75rem;}
.bg-blue-300{--un-bg-opacity:1;background-color:rgb(147 197 253 / var(--un-bg-opacity)) /* #93c5fd */;}
.bg-blue-400{--un-bg-opacity:1;background-color:rgb(96 165 250 / var(--un-bg-opacity)) /* #60a5fa */;}
.bg-blue-50{--un-bg-opacity:1;background-color:rgb(239 246 255 / var(--un-bg-opacity)) /* #eff6ff */;}
.bg-blue-500{--un-bg-opacity:1;background-color:rgb(59 130 246 / var(--un-bg-opacity)) /* #3b82f6 */;}
.bg-gray-100{--un-bg-opacity:1;background-color:rgb(243 244 246 / var(--un-bg-opacity)) /* #f3f4f6 */;}
.bg-gray-500{--un-bg-opacity:1;background-color:rgb(107 114 128 / var(--un-bg-opacity)) /* #6b7280 */;}
.bg-green-500{--un-bg-opacity:1;background-color:rgb(34 197 94 / var(--un-bg-opacity)) /* #22c55e */;}
.bg-orange-500{--un-bg-opacity:1;background-color:rgb(249 115 22 / var(--un-bg-opacity)) /* #f97316 */;}
.bg-purple-500{--un-bg-opacity:1;background-color:rgb(168 85 247 / var(--un-bg-opacity)) /* #a855f7 */;}
.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255 / var(--un-bg-opacity)) /* #fff */;}
.bg-yellow-500{--un-bg-opacity:1;background-color:rgb(234 179 8 / var(--un-bg-opacity)) /* #eab308 */;}
[stroke-width~="\\32 "]{stroke-width:2px;}
.p-6{padding:1.5rem;}
.px-3{padding-left:0.75rem;padding-right:0.75rem;}
.px-6{padding-left:1.5rem;padding-right:1.5rem;}
.py-1{padding-top:0.25rem;padding-bottom:0.25rem;}
.pb-8{padding-bottom:2rem;}
.pt-3{padding-top:0.75rem;}
.pt-4{padding-top:1rem;}
.pt-6{padding-top:1.5rem;}
.text-center{text-align:center;}
.text-3xl{font-size:1.875rem;line-height:2.25rem;}
.text-4xl{font-size:2.25rem;line-height:2.5rem;}
.text-lg{font-size:1.125rem;line-height:1.75rem;}
.text-sm{font-size:0.875rem;line-height:1.25rem;}
.text-xl{font-size:1.25rem;line-height:1.75rem;}
.text-blue-500{--un-text-opacity:1;color:rgb(59 130 246 / var(--un-text-opacity)) /* #3b82f6 */;}
.text-blue-600{--un-text-opacity:1;color:rgb(37 99 235 / var(--un-text-opacity)) /* #2563eb */;}
.text-gray-600{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity)) /* #4b5563 */;}
.text-gray-800{--un-text-opacity:1;color:rgb(31 41 55 / var(--un-text-opacity)) /* #1f2937 */;}
.text-gray-900{--un-text-opacity:1;color:rgb(17 24 39 / var(--un-text-opacity)) /* #111827 */;}
.text-white{--un-text-opacity:1;color:rgb(255 255 255 / var(--un-text-opacity)) /* #fff */;}
.hover\\:text-blue-700:hover{--un-text-opacity:1;color:rgb(29 78 216 / var(--un-text-opacity)) /* #1d4ed8 */;}
.font-bold{font-weight:700;}
.font-medium{font-weight:500;}
.font-semibold{font-weight:600;}
.leading-relaxed{line-height:1.625;}
.shadow-lg,
.group:hover .group-hover\\:shadow-lg{--un-shadow:var(--un-shadow-inset) 0 10px 15px -3px var(--un-shadow-color, rgb(0 0 0 / 0.1)),var(--un-shadow-inset) 0 4px 6px -4px var(--un-shadow-color, rgb(0 0 0 / 0.1));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.shadow-sm{--un-shadow:var(--un-shadow-inset) 0 1px 2px 0 var(--un-shadow-color, rgb(0 0 0 / 0.05));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.filter{filter:var(--un-blur) var(--un-brightness) var(--un-contrast) var(--un-drop-shadow) var(--un-grayscale) var(--un-hue-rotate) var(--un-invert) var(--un-saturate) var(--un-sepia);}
.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.transition-all{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.duration-200{transition-duration:200ms;}
.duration-300{transition-duration:300ms;}
.duration-400{transition-duration:400ms;}
.ease{transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);}
.ease-out{transition-timing-function:cubic-bezier(0, 0, 0.2, 1);} .roadmap-item {
      opacity: 0;
      transform: translateX(-50px);
      transition: all 0.6s ease;
    }

    .roadmap-item.visible {
      opacity: 1;
      transform: translateX(0);
    }

    .roadmap-item.from-right {
      transform: translateX(50px);
    }

    .roadmap-item.from-right.visible {
      transform: translateX(0);
    }

    .timeline-step {
      transition: all 0.3s ease;
    }

    .timeline-step:hover .phase-badge {
      transform: scale(1.2) translateX(-50%);
      box-shadow: 0 0 30px rgba(59, 130, 246, 0.6),
        0 0 60px rgba(59, 130, 246, 0.3);
      filter: brightness(1.1);
    }

    .timeline-step:hover .roadmap-card {
      transform: translateY(-8px) translateX(8px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2),
        0 0 20px rgba(59, 130, 246, 0.1);
      border-left-width: 6px;
    }

    .phase-badge {
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .roadmap-card {
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
    }

    .details-list {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease;
    }

    .details-list.expanded {
      max-height: 200px;
    }

    .detail-item {
      opacity: 0;
      transform: translateY(-10px);
      transition: all 0.2s ease;
    }

    .detail-item.show {
      opacity: 1;
      transform: translateY(0);
    }

    /* 额外的发光效果 */
    .phase-badge-glow {
      position: relative;
    }

    .phase-badge-glow::before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: inherit;
      border-radius: inherit;
      filter: blur(8px);
      opacity: 0;
      z-index: -1;
      transition: opacity 0.3s ease;
    }

    .timeline-step:hover .phase-badge-glow::before {
      opacity: 0.7;
    }
  `);customElements.define("roadmap-component",W);class O extends z{constructor(){super(),this.currentView="status"}firstUpdated(){this.safeRequestAnimationFrame(()=>{this.currentView==="status"?this.initializeStatusAnimations():this.currentView==="painpoints"&&this.initializePainPointsAnimations()})}renderStatusView(){return s`
      <div
        class="bg-white rounded-3xl shadow-2xl p-8 max-w-7xl w-full animate-fadeIn"
      >
        <div class="text-center mb-12">
          <h3 class="text-3xl font-bold text-gray-800 mb-4">
            行业现状：数字化管理亟待突破
          </h3>
          <p class="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
            基于2023-2024年水务工程建设行业调研和权威统计数据，传统物料管理模式在数字化转型中面临的核心挑战。
          </p>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          ${[{title:"物料追溯效率",current:25,target:90,unit:"%",icon:"mdi:magnify-scan",color:"#ef4444",desc:"传统人工核验，数字化程度低",source:"2024年建设工程数字化管理调研报告",needSource:!0},{title:"物料浪费率",current:8,target:2,unit:"%",icon:"mdi:delete-variant",color:"#f59e0b",desc:"标准损耗率超标，粗放管理",source:"建筑工程材料损耗率标准及行业统计",needSource:!0},{title:"信息准确性",current:72,target:95,unit:"%",icon:"mdi:chart-line",color:"#3b82f6",desc:"人工记录错误率高，信息孤岛严重",source:"工程项目数据质量管理报告（2024）",needSource:!0},{title:"协同响应时间",current:36,target:4,unit:"小时",icon:"mdi:clock-outline",color:"#8b5cf6",desc:"多方沟通效率低下，流程冗长",source:"工程项目协同效率分析报告（2023-2024）",needSource:!0}].map((t,a)=>s`
              <div
                class="status-card bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-500"
              >
                <div
                  class="flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto"
                  style="background: ${t.color}20; border: 2px solid ${t.color}40;"
                >
                  <iconify-icon
                    icon="${t.icon}"
                    class="text-3xl"
                    style="color: ${t.color};"
                  ></iconify-icon>
                </div>
                <h4 class="text-lg font-bold text-gray-800 mb-2 text-center flex items-center justify-center gap-2">
                  ${t.title}
                  ${t.needSource?s`
                    <div class="relative group">
                      <iconify-icon
                        icon="mdi:help-circle-outline"
                        class="text-sm text-gray-400 hover:text-gray-600 cursor-help"
                      ></iconify-icon>
                      <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
                        数据来源：${t.source}
                        <div class="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                      </div>
                    </div>
                  `:""}
                </h4>
                <div class="text-center mb-3">
                  <div
                    class="text-3xl font-bold mb-1"
                    style="color: ${t.color};"
                  >
                    <span class="status-number" data-target="${t.current}"
                      >0</span
                    >${t.unit}
                  </div>
                  <div class="text-sm text-gray-500">当前水平</div>
                </div>
                <p class="text-xs text-gray-600 text-center leading-relaxed">
                  ${t.desc}
                </p>

                <!-- 进度条 -->
                <div class="mt-4">
                  <div class="flex justify-between text-xs text-gray-500 mb-1">
                    <span>现状</span>
                    <span>目标</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2">
                    <div
                      class="status-progress-bar h-2 rounded-full transition-all duration-1000 ease-out"
                      style="width: 0%; background: linear-gradient(90deg, ${t.color}80, ${t.color});"
                      data-width="${t.current/Math.max(t.current,t.target)*100}%"
                    ></div>
                  </div>
                </div>
              </div>
            `)}
        </div>

        <!-- 行业对比图表 -->
        <div
          class="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100"
        >
          <h4 class="text-xl font-bold text-gray-800 mb-6 text-center">
            水务行业数字化现状对比
          </h4>
          <div class="flex items-end justify-center space-x-8 h-48">
            ${[{label:"传统管理",value:35,color:"#ef4444"},{label:"半数字化",value:50,color:"#f59e0b"},{label:"全数字化",value:15,color:"#10b981"}].map((t,a)=>s`
                <div class="flex flex-col items-center">
                  <div class="text-sm font-medium text-gray-700 mb-2">
                    ${t.value}%
                  </div>
                  <div
                    class="industry-bar w-16 rounded-t-lg transition-all duration-1000 ease-out"
                    style="height: 0px; background: ${t.color}; max-height: ${t.value*1.6}px;"
                    data-height="${t.value*1.6}px"
                  ></div>
                  <div class="text-xs text-gray-600 mt-2 text-center">
                    ${t.label}
                  </div>
                </div>
              `)}
          </div>
          <p class="text-sm text-gray-600 text-center mt-4">
            数据来源：全国数字经济发展竞争力评价报告（2023）、水务行业数字化现状调研
          </p>
        </div>
      </div>
    `}renderPainPointsView(){return s`
      <div
        class="bg-white rounded-3xl shadow-2xl p-8 max-w-7xl w-full animate-fadeIn"
      >
        <div class="text-center mb-12">
          <h3 class="text-3xl font-bold text-red-600 mb-4">
            核心痛点：传统管理的三大顽疾
          </h3>
          <p class="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
            深入分析传统物料管理模式的根本问题，这些痛点不仅影响工程质量，更制约着行业的数字化转型进程。
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8 mb-12">
          ${[{title:"信息孤岛",icon:"mdi:island",color:"#ef4444",problems:["建设方信息不透明","施工方数据缺失","监理方监管盲区","供应商追溯断链"],impact:"协同效率降低45%",source:"工程项目数字化管理白皮书（2024）",needSource:!0,animation:"islands"},{title:"追溯困难",icon:"mdi:magnify-scan",color:"#f59e0b",problems:["批次信息混乱","质检报告丢失","责任界定模糊","问题定位耗时"],impact:"问题定位时间增长3-4倍",source:"建筑工程质量追溯效率分析报告",needSource:!0,animation:"tracing"},{title:"资源浪费",icon:"mdi:delete-variant",color:"#8b5cf6",problems:["重复采购","过度储备","丢失损耗","过期报废"],impact:"建筑垃圾产量超34.8亿吨/年",source:"中国建筑垃圾处理行业发展报告（2023）",needSource:!0,animation:"waste"}].map((t,a)=>s`
              <div
                class="painpoint-card bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border-2 border-red-100 hover:border-red-200 transition-all duration-500 hover:shadow-xl"
              >
                <div class="text-center mb-6">
                  <div
                    class="inline-flex items-center justify-center w-20 h-20 rounded-full mb-4"
                    style="background: ${t.color}20; border: 3px solid ${t.color}40;"
                  >
                    <iconify-icon
                      icon="${t.icon}"
                      class="text-4xl"
                      style="color: ${t.color};"
                    ></iconify-icon>
                  </div>
                  <h4 class="text-2xl font-bold text-gray-800 mb-2">
                    ${t.title}
                  </h4>
                  <div
                    class="text-sm font-medium px-3 py-1 rounded-full inline-block flex items-center gap-2"
                    style="background: ${t.color}20; color: ${t.color};"
                  >
                    ${t.impact}
                    ${t.needSource?s`
                      <div class="relative group">
                        <iconify-icon
                          icon="mdi:help-circle-outline"
                          class="text-xs opacity-70 hover:opacity-100 cursor-help"
                        ></iconify-icon>
                        <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
                          数据来源：${t.source}
                          <div class="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                        </div>
                      </div>
                    `:""}
                  </div>
                </div>

                <div class="space-y-3">
                  ${t.problems.map((r,n)=>s`
                      <div
                        class="problem-item flex items-center p-3 bg-white rounded-lg border border-gray-100 transform translate-x-4 opacity-0"
                        style="animation-delay: ${a*.5+n*.1}s;"
                      >
                        <div
                          class="w-2 h-2 rounded-full mr-3"
                          style="background: ${t.color};"
                        ></div>
                        <span class="text-gray-700 text-sm">${r}</span>
                      </div>
                    `)}
                </div>

                <!-- 动画演示区域 -->
                <div
                  class="mt-6 h-24 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl relative overflow-hidden"
                >
                  <div class="${t.animation}-demo w-full h-full relative">
                    ${t.animation==="islands"?s`
                          <!-- 信息孤岛动画 -->
                          <div
                            class="absolute inset-0 flex items-center justify-around"
                          >
                            ${Array(4).fill(0).map((r,n)=>s`
                                  <div
                                    class="island w-8 h-8 bg-red-400 rounded-full opacity-60 animate-pulse"
                                    style="animation-delay: ${n*.3}s;"
                                  ></div>
                                `)}
                          </div>
                          <div
                            class="absolute inset-0 flex items-center justify-center"
                          >
                            <div class="text-xs text-gray-600 font-medium">
                              信息割裂
                            </div>
                          </div>
                        `:t.animation==="tracing"?s`
                          <!-- 追溯困难动画 -->
                          <div
                            class="absolute inset-0 flex items-center justify-center"
                          >
                            <div class="trace-path relative w-16 h-4">
                              <div
                                class="absolute inset-0 bg-gray-300 rounded-full"
                              ></div>
                              <div
                                class="trace-dot absolute w-4 h-4 bg-orange-400 rounded-full -top-0 animate-bounce"
                              ></div>
                            </div>
                          </div>
                          <div
                            class="absolute bottom-2 left-1/2 transform -translate-x-1/2"
                          >
                            <div class="text-xs text-gray-600 font-medium">
                              追溯中断
                            </div>
                          </div>
                        `:s`
                          <!-- 资源浪费动画 -->
                          <div
                            class="absolute inset-0 flex items-center justify-around"
                          >
                            ${Array(3).fill(0).map((r,n)=>s`
                                  <div
                                    class="waste-item w-6 h-6 bg-purple-400 rounded opacity-80 animate-pulse"
                                    style="animation-delay: ${n*.4}s;"
                                  ></div>
                                `)}
                          </div>
                          <div
                            class="absolute inset-0 flex items-center justify-center"
                          >
                            <div class="text-xs text-gray-600 font-medium">
                              资源浪费
                            </div>
                          </div>
                        `}
                  </div>
                </div>
              </div>
            `)}
        </div>

        <!-- 经济影响统计 -->
        <div
          class="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-8 border border-red-100"
        >
          <h4 class="text-xl font-bold text-gray-800 mb-6 text-center">
            传统管理模式的经济影响
          </h4>
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
            ${[{label:"额外成本",value:"10-15%",icon:"mdi:currency-usd",color:"#ef4444",source:"工程建设成本控制分析报告（2024）",needSource:!0},{label:"时间损失",value:"25-35%",icon:"mdi:clock-outline",color:"#f59e0b",source:"项目管理效率提升研究报告（2024）",needSource:!0},{label:"人力浪费",value:"20-30%",icon:"mdi:account-group",color:"#8b5cf6",source:"数字化转型人力效率报告（2023）",needSource:!0},{label:"资源化利用率",value:"<5%",icon:"mdi:recycle",color:"#06b6d4",source:"中国建筑垃圾资源化利用现状报告",needSource:!0}].map(t=>s`
                <div class="text-center">
                  <div
                    class="flex items-center justify-center w-12 h-12 rounded-full mx-auto mb-3"
                    style="background: ${t.color}20; border: 2px solid ${t.color}40;"
                  >
                    <iconify-icon
                      icon="${t.icon}"
                      class="text-2xl"
                      style="color: ${t.color};"
                    ></iconify-icon>
                  </div>
                  <div
                    class="text-2xl font-bold mb-1 flex items-center justify-center gap-1"
                    style="color: ${t.color};"
                  >
                    ${t.value}
                    ${t.needSource?s`
                      <div class="relative group">
                        <iconify-icon
                          icon="mdi:help-circle-outline"
                          class="text-sm opacity-60 hover:opacity-100 cursor-help"
                        ></iconify-icon>
                        <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
                          数据来源：${t.source}
                          <div class="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                        </div>
                      </div>
                    `:""}
                  </div>
                  <div class="text-sm text-gray-600">${t.label}</div>
                </div>
              `)}
          </div>
        </div>
      </div>
    `}initializeStatusAnimations(){this.shadowRoot.querySelectorAll(".status-number").forEach(r=>{const n=parseInt(r.dataset.target);i.fromTo(r,{innerHTML:0},{innerHTML:n,duration:2,ease:"power2.out",snap:{innerHTML:1},onUpdate:function(){r.innerHTML=Math.ceil(r.innerHTML)}})}),this.shadowRoot.querySelectorAll(".status-progress-bar").forEach(r=>{const n=r.dataset.width;i.to(r,{width:n,duration:1.5,ease:"power2.out",delay:.5})}),this.shadowRoot.querySelectorAll(".industry-bar").forEach(r=>{const n=r.dataset.height;i.to(r,{height:n,duration:1.2,ease:"back.out(1.7)",delay:1})})}initializePainPointsAnimations(){const e=this.shadowRoot.querySelectorAll(".problem-item");i.fromTo(e,{x:50,opacity:0},{x:0,opacity:1,duration:.6,stagger:.1,ease:"power2.out"});const t=this.shadowRoot.querySelectorAll(".painpoint-card");i.fromTo(t,{y:30,opacity:0},{y:0,opacity:1,duration:.8,stagger:.2,ease:"power2.out"}),this.initializeIslandAnimation(),this.initializeTracingAnimation(),this.initializeWasteAnimation()}initializeIslandAnimation(){const e=this.shadowRoot.querySelectorAll(".island");e.length>0&&(i.to(e,{scale:.8,opacity:.4,duration:1.5,yoyo:!0,repeat:-1,stagger:.3,ease:"power2.inOut"}),i.to(e,{x:"random(-10, 10)",y:"random(-5, 5)",duration:2,repeat:-1,yoyo:!0,ease:"power1.inOut",stagger:.4}))}initializeTracingAnimation(){this.shadowRoot.querySelectorAll(".trace-dot").forEach(t=>{i.to(t,{x:40,duration:1.5,ease:"power2.out",repeat:-1,yoyo:!0,onComplete:()=>{i.to(t,{opacity:.3,scale:.5,duration:.3,yoyo:!0,repeat:1})}})})}initializeWasteAnimation(){this.shadowRoot.querySelectorAll(".waste-item").forEach((t,a)=>{i.to(t,{opacity:.2,scale:.3,duration:1.5,delay:a*.3,repeat:-1,yoyo:!0,ease:"power2.inOut"}),i.to(t,{x:"random(-20, 20)",y:"random(-10, 10)",duration:2,repeat:-1,yoyo:!0,ease:"power1.inOut",delay:a*.5})})}switchView(e){this.currentView=e,this.requestUpdate()}updated(e){super.updated(e),e.has("currentView")&&this.safeRequestAnimationFrame(()=>{this.currentView==="status"?this.initializeStatusAnimations():this.currentView==="painpoints"&&this.initializePainPointsAnimations(),this.notifyContentHeightChange()})}notifyContentHeightChange(){const e=this.closest("content-section");e&&e.checkContentHeight&&setTimeout(()=>e.checkContentHeight(),100)}render(){return s`
      <div class="w-full flex flex-col items-center relative">
        <div class="text-center mb-8 z-10 relative">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">
            ${this.currentView==="status"?"行业现状分析":"核心痛点分析"}
          </h2>
          <p class="text-lg text-gray-400 max-w-xl mx-auto">
            ${this.currentView==="status"?"深入调研传统管理模式，量化分析数字化转型的紧迫性":"系统性分析传统管理的核心痛点，明确数字化转型的关键需求"}
          </p>
        </div>

        <div
          class="w-full max-w-7xl flex items-start justify-center relative"
        >
          <div
            class="flex flex-col items-center text-center animate-fadeIn w-full"
            style="display: ${this.currentView==="status"?"flex":"none"};"
          >
            ${this.renderStatusView()}
          </div>
          <div
            class="flex flex-col items-center text-center animate-fadeIn w-full"
            style="display: ${this.currentView==="painpoints"?"flex":"none"};"
          >
            ${this.renderPainPointsView()}
          </div>
        </div>

        <!-- 切换按钮 -->
        <div class="flex gap-4 justify-center mt-8 z-20">
          <button
            class="px-6 py-3 rounded-full cursor-pointer font-semibold transition backdrop-blur-md shadow ${this.currentView==="status"?"bg-blue-500 text-white shadow-blue-200":"bg-white/80 text-slate-700"}"
            @click=${()=>this.switchView("status")}
          >
            行业现状
          </button>
          <button
            class="px-6 py-3 rounded-full cursor-pointer font-semibold transition backdrop-blur-md shadow ${this.currentView==="painpoints"?"bg-red-500 text-white shadow-red-200":"bg-white/80 text-slate-700"}"
            @click=${()=>this.switchView("painpoints")}
          >
            核心痛点
          </button>
        </div>
      </div>
    `}}m(O,"properties",{currentView:{type:String}}),m(O,"styles",k`
    /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.pointer-events-none{pointer-events:none;}
.absolute{position:absolute;}
.relative{position:relative;}
.static{position:static;}
.inset-0{inset:0;}
.bottom-2{bottom:0.5rem;}
.bottom-full{bottom:100%;}
.left-1\\/2{left:50%;}
.top-full{top:100%;}
.z-10{z-index:10;}
.z-20{z-index:20;}
.z-50{z-index:50;}
.grid{display:grid;}
.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr));}
.mx-auto{margin-left:auto;margin-right:auto;}
.mb-1{margin-bottom:0.25rem;}
.mb-12{margin-bottom:3rem;}
.mb-2{margin-bottom:0.5rem;}
.mb-3{margin-bottom:0.75rem;}
.mb-4{margin-bottom:1rem;}
.mb-6{margin-bottom:1.5rem;}
.mb-8{margin-bottom:2rem;}
.mr-3{margin-right:0.75rem;}
.mt-2{margin-top:0.5rem;}
.mt-4{margin-top:1rem;}
.mt-6{margin-top:1.5rem;}
.mt-8{margin-top:2rem;}
.inline-block{display:inline-block;}
.h-12{height:3rem;}
.h-16{height:4rem;}
.h-2{height:0.5rem;}
.h-20{height:5rem;}
.h-24{height:6rem;}
.h-4{height:1rem;}
.h-48{height:12rem;}
.h-6{height:1.5rem;}
.h-8{height:2rem;}
.h-full{height:100%;}
.max-w-4xl{max-width:56rem;}
.max-w-7xl{max-width:80rem;}
.max-w-xl{max-width:36rem;}
.w-12{width:3rem;}
.w-16{width:4rem;}
.w-2{width:0.5rem;}
.w-20{width:5rem;}
.w-4{width:1rem;}
.w-6{width:1.5rem;}
.w-8{width:2rem;}
.w-full{width:100%;}
.flex{display:flex;}
.inline-flex{display:inline-flex;}
.flex-col{flex-direction:column;}
.-translate-x-1\\/2{--un-translate-x:-50%;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.translate-x-4{--un-translate-x:1rem;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.transform{transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
@keyframes bounce{0%, 100% {transform:translateY(-25%);animation-timing-function:cubic-bezier(0.8,0,1,1)} 50% {transform:translateY(0);animation-timing-function:cubic-bezier(0,0,0.2,1)}}
@keyframes pulse{0%, 100% {opacity:1} 50% {opacity:.5}}
.animate-bounce{animation:bounce 1s linear infinite;}
.animate-pulse{animation:pulse 2s cubic-bezier(0.4,0,.6,1) infinite;}
.cursor-help{cursor:help;}
.cursor-pointer{cursor:pointer;}
.items-start{align-items:flex-start;}
.items-end{align-items:flex-end;}
.items-center{align-items:center;}
.justify-center{justify-content:center;}
.justify-between{justify-content:space-between;}
.justify-around{justify-content:space-around;}
.gap-1{gap:0.25rem;}
.gap-2{gap:0.5rem;}
.gap-4{gap:1rem;}
.gap-6{gap:1.5rem;}
.gap-8{gap:2rem;}
.space-x-8>:not([hidden])~:not([hidden]){--un-space-x-reverse:0;margin-left:calc(2rem * calc(1 - var(--un-space-x-reverse)));margin-right:calc(2rem * var(--un-space-x-reverse));}
.space-y-3>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(0.75rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(0.75rem * var(--un-space-y-reverse));}
.overflow-hidden{overflow:hidden;}
.whitespace-nowrap{white-space:nowrap;}
.border{border-width:1px;}
.border-2{border-width:2px;}
.border-4{border-width:4px;}
.border-blue-100{--un-border-opacity:1;border-color:rgb(219 234 254 / var(--un-border-opacity));}
.border-gray-100{--un-border-opacity:1;border-color:rgb(243 244 246 / var(--un-border-opacity));}
.border-gray-200{--un-border-opacity:1;border-color:rgb(229 231 235 / var(--un-border-opacity));}
.border-red-100{--un-border-opacity:1;border-color:rgb(254 226 226 / var(--un-border-opacity));}
.border-transparent{border-color:transparent;}
.hover\\:border-red-200:hover{--un-border-opacity:1;border-color:rgb(254 202 202 / var(--un-border-opacity));}
.border-t-gray-800{--un-border-opacity:1;--un-border-top-opacity:var(--un-border-opacity);border-top-color:rgb(31 41 55 / var(--un-border-top-opacity));}
.rounded{border-radius:0.25rem;}
.rounded-2xl{border-radius:1rem;}
.rounded-3xl{border-radius:1.5rem;}
.rounded-full{border-radius:9999px;}
.rounded-lg{border-radius:0.5rem;}
.rounded-xl{border-radius:0.75rem;}
.rounded-t-lg{border-top-left-radius:0.5rem;border-top-right-radius:0.5rem;}
.bg-blue-500{--un-bg-opacity:1;background-color:rgb(59 130 246 / var(--un-bg-opacity)) /* #3b82f6 */;}
.bg-gray-200{--un-bg-opacity:1;background-color:rgb(229 231 235 / var(--un-bg-opacity)) /* #e5e7eb */;}
.bg-gray-300{--un-bg-opacity:1;background-color:rgb(209 213 219 / var(--un-bg-opacity)) /* #d1d5db */;}
.bg-gray-800{--un-bg-opacity:1;background-color:rgb(31 41 55 / var(--un-bg-opacity)) /* #1f2937 */;}
.bg-orange-400{--un-bg-opacity:1;background-color:rgb(251 146 60 / var(--un-bg-opacity)) /* #fb923c */;}
.bg-purple-400{--un-bg-opacity:1;background-color:rgb(192 132 252 / var(--un-bg-opacity)) /* #c084fc */;}
.bg-red-400{--un-bg-opacity:1;background-color:rgb(248 113 113 / var(--un-bg-opacity)) /* #f87171 */;}
.bg-red-500{--un-bg-opacity:1;background-color:rgb(239 68 68 / var(--un-bg-opacity)) /* #ef4444 */;}
.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255 / var(--un-bg-opacity)) /* #fff */;}
.bg-white\\/80{background-color:rgb(255 255 255 / 0.8) /* #fff */;}
.from-blue-50{--un-gradient-from-position:0%;--un-gradient-from:rgb(239 246 255 / var(--un-from-opacity, 1)) var(--un-gradient-from-position);--un-gradient-to-position:100%;--un-gradient-to:rgb(239 246 255 / 0) var(--un-gradient-to-position);--un-gradient-stops:var(--un-gradient-from), var(--un-gradient-to);}
.from-gray-100{--un-gradient-from-position:0%;--un-gradient-from:rgb(243 244 246 / var(--un-from-opacity, 1)) var(--un-gradient-from-position);--un-gradient-to-position:100%;--un-gradient-to:rgb(243 244 246 / 0) var(--un-gradient-to-position);--un-gradient-stops:var(--un-gradient-from), var(--un-gradient-to);}
.from-gray-50{--un-gradient-from-position:0%;--un-gradient-from:rgb(249 250 251 / var(--un-from-opacity, 1)) var(--un-gradient-from-position);--un-gradient-to-position:100%;--un-gradient-to:rgb(249 250 251 / 0) var(--un-gradient-to-position);--un-gradient-stops:var(--un-gradient-from), var(--un-gradient-to);}
.from-red-50{--un-gradient-from-position:0%;--un-gradient-from:rgb(254 242 242 / var(--un-from-opacity, 1)) var(--un-gradient-from-position);--un-gradient-to-position:100%;--un-gradient-to:rgb(254 242 242 / 0) var(--un-gradient-to-position);--un-gradient-stops:var(--un-gradient-from), var(--un-gradient-to);}
.to-cyan-50{--un-gradient-to-position:100%;--un-gradient-to:rgb(236 254 255 / var(--un-to-opacity, 1)) var(--un-gradient-to-position);}
.to-gray-100{--un-gradient-to-position:100%;--un-gradient-to:rgb(243 244 246 / var(--un-to-opacity, 1)) var(--un-gradient-to-position);}
.to-gray-200{--un-gradient-to-position:100%;--un-gradient-to:rgb(229 231 235 / var(--un-to-opacity, 1)) var(--un-gradient-to-position);}
.to-orange-50{--un-gradient-to-position:100%;--un-gradient-to:rgb(255 247 237 / var(--un-to-opacity, 1)) var(--un-gradient-to-position);}
.to-pink-50{--un-gradient-to-position:100%;--un-gradient-to:rgb(253 242 248 / var(--un-to-opacity, 1)) var(--un-gradient-to-position);}
.bg-gradient-to-br{--un-gradient-shape:to bottom right in oklch;--un-gradient:var(--un-gradient-shape), var(--un-gradient-stops);background-image:linear-gradient(var(--un-gradient));}
.bg-gradient-to-r{--un-gradient-shape:to right in oklch;--un-gradient:var(--un-gradient-shape), var(--un-gradient-stops);background-image:linear-gradient(var(--un-gradient));}
.p-3{padding:0.75rem;}
.p-6{padding:1.5rem;}
.p-8{padding:2rem;}
.px{padding-left:1rem;padding-right:1rem;}
.px-3{padding-left:0.75rem;padding-right:0.75rem;}
.px-6{padding-left:1.5rem;padding-right:1.5rem;}
.py-1{padding-top:0.25rem;padding-bottom:0.25rem;}
.py-2{padding-top:0.5rem;padding-bottom:0.5rem;}
.py-3{padding-top:0.75rem;padding-bottom:0.75rem;}
.text-center{text-align:center;}
.text-2xl{font-size:1.5rem;line-height:2rem;}
.text-3xl{font-size:1.875rem;line-height:2.25rem;}
.text-4xl{font-size:2.25rem;line-height:2.5rem;}
.text-lg{font-size:1.125rem;line-height:1.75rem;}
.text-sm{font-size:0.875rem;line-height:1.25rem;}
.text-xl{font-size:1.25rem;line-height:1.75rem;}
.text-xs{font-size:0.75rem;line-height:1rem;}
.text-gray-400{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-gray-500{--un-text-opacity:1;color:rgb(107 114 128 / var(--un-text-opacity)) /* #6b7280 */;}
.text-gray-600{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity)) /* #4b5563 */;}
.text-gray-700{--un-text-opacity:1;color:rgb(55 65 81 / var(--un-text-opacity)) /* #374151 */;}
.text-gray-800{--un-text-opacity:1;color:rgb(31 41 55 / var(--un-text-opacity)) /* #1f2937 */;}
.text-red-600{--un-text-opacity:1;color:rgb(220 38 38 / var(--un-text-opacity)) /* #dc2626 */;}
.text-slate-700{--un-text-opacity:1;color:rgb(51 65 85 / var(--un-text-opacity)) /* #334155 */;}
.text-white{--un-text-opacity:1;color:rgb(255 255 255 / var(--un-text-opacity)) /* #fff */;}
.hover\\:text-gray-600:hover{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity)) /* #4b5563 */;}
.font-bold{font-weight:700;}
.font-medium{font-weight:500;}
.font-semibold{font-weight:600;}
.leading-relaxed{line-height:1.625;}
.opacity-0{opacity:0;}
.opacity-60{opacity:0.6;}
.opacity-70{opacity:0.7;}
.opacity-80{opacity:0.8;}
.group:hover .group-hover\\:opacity-100{opacity:1;}
.hover\\:opacity-100:hover{opacity:1;}
.shadow{--un-shadow:var(--un-shadow-inset) 0 1px 3px 0 var(--un-shadow-color, rgb(0 0 0 / 0.1)),var(--un-shadow-inset) 0 1px 2px -1px var(--un-shadow-color, rgb(0 0 0 / 0.1));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.shadow-2xl{--un-shadow:var(--un-shadow-inset) 0 25px 50px -12px var(--un-shadow-color, rgb(0 0 0 / 0.25));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.shadow-blue-200{--un-shadow-opacity:1;--un-shadow-color:rgb(191 219 254 / var(--un-shadow-opacity)) /* #bfdbfe */;}
.shadow-red-200{--un-shadow-opacity:1;--un-shadow-color:rgb(254 202 202 / var(--un-shadow-opacity)) /* #fecaca */;}
.hover\\:shadow-lg:hover{--un-shadow:var(--un-shadow-inset) 0 10px 15px -3px var(--un-shadow-color, rgb(0 0 0 / 0.1)),var(--un-shadow-inset) 0 4px 6px -4px var(--un-shadow-color, rgb(0 0 0 / 0.1));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.hover\\:shadow-xl:hover{--un-shadow:var(--un-shadow-inset) 0 20px 25px -5px var(--un-shadow-color, rgb(0 0 0 / 0.1)),var(--un-shadow-inset) 0 8px 10px -6px var(--un-shadow-color, rgb(0 0 0 / 0.1));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.transition-all{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.duration-1000{transition-duration:1000ms;}
.duration-200{transition-duration:200ms;}
.duration-500{transition-duration:500ms;}
.ease{transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);}
.ease-out{transition-timing-function:cubic-bezier(0, 0, 0.2, 1);}
.backdrop-blur-md{backdrop-filter:blur(12px);}
@media (min-width: 1024px){
.lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr));}
.lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr));}
};
  `);customElements.define("problem-analysis",O);class H extends z{constructor(){super(),this.currentTab="overview",this.selectedPhotoIndex=0}firstUpdated(){this.safeRequestAnimationFrame(()=>{this.initializeAnimations()})}getSurveyData(){return{fieldWork:{project:"老旧管网改造项目",location:"兴盛街（郑州图书馆）路段管网现场",duration:"3周",focus:"管材管理、施工流程、质量控制、各方关注点",personNum:9,participants:["建管部","监理工程师","施工项目经理","系统技术人员"],findings:["管材规格各异，源头多样，现场识别繁琐","质量材料纸质散落，难以收集整理","多方信息传递存在时差、误差和壁垒","追溯依赖人工记录，效率较低"]},stakeholders:[{name:"建设方",role:"项目投资",main_concerns:["投资效益","工程质量","进度控制"],current_challenges:["信息不透明","决策滞后","风险难控"],expectations:["全程可视化","及时决策支撑","风险预警"]},{name:"建管部",role:"建设管理",main_concerns:["质量把控","进度管理","成本控制"],current_challenges:["信息滞后","协调困难","追溯不便"],expectations:["实时掌握/回溯材料状态","管理责任追溯精准快捷","提高管理效率"]},{name:"监理公司",role:"质量监督",main_concerns:["材料质量","规范执行","责任追溯"],current_challenges:["证书收集处理困难","检查效率低","记录及同步繁琐"],expectations:["快速验证材料","数字化记录","便捷追溯查询"]},{name:"施工方",role:"工程实施",main_concerns:["材料供应","现场施工效率","施工成本/利润控制"],current_challenges:["材料识别耗时","手工记录易错","沟通成本高"],expectations:["便捷材料识别","自动化记录","高效协同"]}],meetings:[{date:"2025年6月5日",topic:"配水管网项目部多方会议",participants:["建管部工程师","监理总工","施工项目经理","供应商厂家","系统技术人员"],key_points:["明确调研目标","确定调研范围","划分各方角色"],outcome:"建立四方协作机制，开展实地调研"},{date:"2025年6月11日",topic:"建管部需求细节及完整流程讨论会",participants:["建管部工程师","系统技术人员"],key_points:["全流程操作细节确认","梳理材料管理流程","识别关键痛点","讨论改进方向"],outcome:"形成流程清单，确定数字化需求"},{date:"2025年6月18日",topic:"一管一码技术侧方案及难点确认会",participants:["建管部工程师","系统技术人员  "],key_points:["方案设计及难点","明确技术路线","商定实施计划"],outcome:"达成共识，确定平台建设技术路线及难点解决办法"}]}}getPhotoGallery(){return[{title:"老旧管网现场挖掘",category:"现场调研",description:"市政道路下老旧铸铁管道，腐蚀严重需要更换",placeholder:"https://picsum.photos/800/600?random=11",tags:["管网改造","现场挖掘"]},{title:"管材堆放现场",category:"材料管理",description:"新采购PE管材现场堆放，缺乏统一编码标识",placeholder:"https://picsum.photos/800/600?random=12",tags:["PE管材","现场堆放"]},{title:"质量证书查验",category:"质量管控",description:"监理工程师现场核验管材质量证书，纸质文档管理",placeholder:"https://picsum.photos/800/600?random=13",tags:["质量证书","现场验收"]},{title:"管道连接施工",category:"施工过程",description:"PE管热熔连接作业，需要记录连接参数和质量",placeholder:"https://picsum.photos/800/600?random=14",tags:["管道连接","施工记录"]},{title:"四方现场会议",category:"协调沟通",description:"建设方、建管部、监理、施工方现场协调会议",placeholder:"https://picsum.photos/800/600?random=15",tags:["现场会议","四方协调"]},{title:"竣工验收检查",category:"验收管理",description:"管网改造完成后的验收检查，记录竣工资料",placeholder:"https://picsum.photos/800/600?random=16",tags:["竣工验收","资料归档"]}]}renderOverviewTab(){const e=this.getSurveyData();return s`
      <!-- 项目基本信息 -->
      <div
        class="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 mb-8 border border-blue-200"
      >
        <div class="text-center mb-6">
          <h3
            class="text-2xl font-bold text-gray-800 mb-4 flex items-center justify-center"
          >
            <iconify-icon
              icon="mdi:construction"
              class="text-blue-500 mr-3"
            ></iconify-icon>
            ${e.fieldWork.project}调研
          </h3>
          <p class="text-gray-600 max-w-2xl mx-auto">
            以老旧管网改造项目为背景，深入一线了解管材管理现状，与各方充分沟通需求
          </p>
        </div>

        <div class="grid md:grid-cols-4 gap-6">
          <div class="text-center">
            <div
              class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3"
            >
              <iconify-icon
                icon="mdi:map-marker"
                class="text-2xl text-white"
              ></iconify-icon>
            </div>
            <div class="text-sm text-gray-600 mb-1">调研地点</div>
            <div class="font-semibold text-gray-800">
              ${e.fieldWork.location}
            </div>
          </div>
          <div class="text-center">
            <div
              class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3"
            >
              <iconify-icon
                icon="mdi:clock-outline"
                class="text-2xl text-white"
              ></iconify-icon>
            </div>
            <div class="text-sm text-gray-600 mb-1">调研周期</div>
            <div class="font-semibold text-gray-800">
              ${e.fieldWork.duration}
            </div>
          </div>
          <div class="text-center">
            <div
              class="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3"
            >
              <iconify-icon
                icon="mdi:account-group"
                class="text-2xl text-white"
              ></iconify-icon>
            </div>
            <div class="text-sm text-gray-600 mb-1">参与人员</div>
            <div class="font-semibold text-gray-800">
              ${e.fieldWork.personNum}人
            </div>
          </div>
          <div class="text-center">
            <div
              class="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3"
            >
              <iconify-icon
                icon="mdi:clipboard-list"
                class="text-2xl text-white"
              ></iconify-icon>
            </div>
            <div class="text-sm text-gray-600 mb-1">关键发现</div>
            <div class="font-semibold text-gray-800">
              ${e.fieldWork.findings.length}项
            </div>
          </div>
        </div>
      </div>

      <!-- 调研重点与发现 -->
      <div class="grid lg:grid-cols-2 gap-8 mb-8">
        <!-- 调研重点 -->
        <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h4 class="text-lg font-bold text-gray-800 mb-4 flex items-center">
            <iconify-icon
              icon="mdi:target"
              class="text-blue-500 mr-2"
            ></iconify-icon>
            调研重点
          </h4>
          <div
            class="text-sm text-gray-700 bg-blue-50 rounded-lg p-4 border border-blue-200"
          >
            ${e.fieldWork.focus}
          </div>
          <div class="mt-4">
            <div class="text-sm font-medium text-gray-700 mb-2">参与人员：</div>
            <div class="flex flex-wrap gap-2">
              ${e.fieldWork.participants.map(t=>s`
                  <span
                    class="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded border"
                    >${t}</span
                  >
                `)}
            </div>
          </div>
        </div>

        <!-- 关键发现 -->
        <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h4 class="text-lg font-bold text-gray-800 mb-4 flex items-center">
            <iconify-icon
              icon="mdi:lightbulb"
              class="text-orange-500 mr-2"
            ></iconify-icon>
            关键发现
          </h4>
          <div class="space-y-3">
            ${e.fieldWork.findings.map((t,a)=>s`
                <div class="flex items-start">
                  <div
                    class="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center mr-3 mt-0.5 text-xs font-bold"
                  >
                    ${a+1}
                  </div>
                  <div class="text-sm text-gray-700">${t}</div>
                </div>
              `)}
          </div>
        </div>
      </div>

      <!-- 四方协作图 -->
      <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <h3 class="text-xl font-bold text-gray-800 mb-6 text-center">
          四方协作关系图
        </h3>
        <div class="relative w-full" style="height: 400px;">
          <!-- 中心：项目 -->
          <div
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white z-10"
          >
            <div class="text-center">
              <iconify-icon
                icon="mdi:construction"
                class="text-3xl mb-1"
              ></iconify-icon>
              <div class="text-sm font-bold">老旧管网改造</div>
            </div>
          </div>

          <!-- 建设方 - 上方 -->
          <div
            class="absolute top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center text-white z-20"
          >
            <div class="text-center">
              <iconify-icon
                icon="mdi:office-building"
                class="text-xl mb-1"
              ></iconify-icon>
              <div class="text-xs font-bold">${e.stakeholders[0].name}</div>
            </div>
          </div>

          <!-- 建管部 - 左侧 -->
          <div
            class="absolute top-1/2 left-8 transform -translate-y-1/2 w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white z-20"
          >
            <div class="text-center">
              <iconify-icon
                icon="mdi:domain"
                class="text-xl mb-1"
              ></iconify-icon>
              <div class="text-xs font-bold">${e.stakeholders[1].name}</div>
            </div>
          </div>

          <!-- 监理公司 - 右侧 -->
          <div
            class="absolute top-1/2 right-8 transform -translate-y-1/2 w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white z-20"
          >
            <div class="text-center">
              <iconify-icon
                icon="mdi:shield-check"
                class="text-xl mb-1"
              ></iconify-icon>
              <div class="text-xs font-bold">${e.stakeholders[2].name}</div>
            </div>
          </div>

          <!-- 施工方 - 下方 -->
          <div
            class="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center text-white z-20"
          >
            <div class="text-center">
              <iconify-icon
                icon="mdi:hard-hat"
                class="text-xl mb-1"
              ></iconify-icon>
              <div class="text-xs font-bold">${e.stakeholders[3].name}</div>
            </div>
          </div>

          <!-- 连接线 -->
          <svg class="absolute inset-0 w-full h-full pointer-events-none z-0">
            <!-- 上方到中心 -->
            <line
              x1="50%"
              y1="18%"
              x2="50%"
              y2="35%"
              stroke="#cbd5e1"
              stroke-width="2"
              stroke-dasharray="5,5"
            />
            <!-- 左侧到中心 -->
            <line
              x1="18%"
              y1="50%"
              x2="35%"
              y2="50%"
              stroke="#cbd5e1"
              stroke-width="2"
              stroke-dasharray="5,5"
            />
            <!-- 右侧到中心 -->
            <line
              x1="82%"
              y1="50%"
              x2="65%"
              y2="50%"
              stroke="#cbd5e1"
              stroke-width="2"
              stroke-dasharray="5,5"
            />
            <!-- 下方到中心 -->
            <line
              x1="50%"
              y1="82%"
              x2="50%"
              y2="65%"
              stroke="#cbd5e1"
              stroke-width="2"
              stroke-dasharray="5,5"
            />
          </svg>
        </div>
      </div>
    `}renderSurveyTab(){const e=this.getSurveyData();return s`
      <div class="space-y-8">
        <!-- 四方角色详情 -->
        <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <iconify-icon
              icon="mdi:account-group"
              class="text-blue-500 mr-3"
            ></iconify-icon>
            四方协作角色分析
          </h3>
          <div class="grid lg:grid-cols-4 gap-4">
            ${e.stakeholders.map((t,a)=>{const r=["purple","blue","green","orange"],n=["mdi:office-building","mdi:domain","mdi:shield-check","mdi:hard-hat"];return s`
                <div
                  class="stakeholder-card bg-gradient-to-br from-${r[a]}-50 to-${r[a]}-100 rounded-xl p-6 border border-${r[a]}-200 hover:shadow-lg transition-all duration-300"
                >
                  <div class="text-center mb-6">
                    <div
                      class="w-16 h-16 bg-${r[a]}-500 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <iconify-icon
                        icon="${n[a]}"
                        class="text-3xl text-white"
                      ></iconify-icon>
                    </div>
                    <h4 class="text-xl font-bold text-gray-800">
                      ${t.name}
                    </h4>
                    <div class="text-sm text-${r[a]}-600 font-medium">
                      ${t.role}
                    </div>
                  </div>

                  <div class="space-y-4">
                    <div>
                      <div class="text-sm font-medium text-gray-700 mb-2">
                        主要关注点：
                      </div>
                      <div class="space-y-1">
                        ${t.main_concerns.map(o=>s`
                            <div
                              class="text-sm text-gray-600 flex items-center"
                            >
                              <div
                                class="w-1.5 h-1.5 bg-${r[a]}-500 rounded-full mr-2"
                              ></div>
                              ${o}
                            </div>
                          `)}
                      </div>
                    </div>

                    <div>
                      <div class="text-sm font-medium text-gray-700 mb-2">
                        当前挑战：
                      </div>
                      <div class="space-y-1">
                        ${t.current_challenges.map(o=>s`
                            <div
                              class="text-sm text-gray-600 flex items-center"
                            >
                              <iconify-icon
                                icon="mdi:alert-circle-outline"
                                class="text-red-400 mr-2 text-xs"
                              ></iconify-icon>
                              ${o}
                            </div>
                          `)}
                      </div>
                    </div>

                    <div>
                      <div class="text-sm font-medium text-gray-700 mb-2">
                        期望效果：
                      </div>
                      <div class="space-y-1">
                        ${t.expectations.map(o=>s`
                            <div
                              class="text-sm text-gray-600 flex items-center"
                            >
                              <iconify-icon
                                icon="mdi:check-circle-outline"
                                class="text-green-500 mr-2 text-xs"
                              ></iconify-icon>
                              ${o}
                            </div>
                          `)}
                      </div>
                    </div>
                  </div>
                </div>
              `})}
          </div>
        </div>

        <!-- 会议时间线 -->
        <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <iconify-icon
              icon="mdi:timeline-text"
              class="text-purple-500 mr-3"
            ></iconify-icon>
            沟通协调时间线
          </h3>
          <div class="relative">
            <!-- 时间线 -->
            <div
              class="absolute left-8 top-0 bottom-0 w-0.5 bg-purple-200"
            ></div>

            <div class="space-y-8">
              ${e.meetings.map((t,a)=>s`
                  <div class="relative flex items-start">
                    <!-- 时间点 -->
                    <div
                      class="absolute left-6 w-4 h-4 bg-purple-500 rounded-full border-2 border-white shadow-md"
                    ></div>

                    <!-- 内容 -->
                    <div
                      class="ml-16 bg-purple-50 rounded-xl p-6 border border-purple-200 flex-1"
                    >
                      <div class="flex items-center justify-between mb-4">
                        <div>
                          <h4 class="font-bold text-gray-800 text-lg">
                            ${t.topic}
                          </h4>
                          <div class="text-sm text-purple-600 font-medium">
                            ${t.date}
                          </div>
                        </div>
                        <div
                          class="text-xs bg-purple-500 text-white px-3 py-1 rounded-full"
                        >
                          第${a+1}次会议
                        </div>
                      </div>

                      <div class="grid md:grid-cols-2 gap-6 mb-4">
                        <div>
                          <div
                            class="text-sm font-medium text-gray-700 mb-2 flex items-center"
                          >
                            <iconify-icon
                              icon="mdi:account-multiple"
                              class="mr-1"
                            ></iconify-icon>
                            参会人员
                          </div>
                          <div class="flex flex-wrap gap-1">
                            ${t.participants.map(r=>s`
                                <span
                                  class="text-xs bg-white text-purple-700 px-2 py-1 rounded border border-purple-200"
                                  >${r}</span
                                >
                              `)}
                          </div>
                        </div>

                        <div>
                          <div
                            class="text-sm font-medium text-gray-700 mb-2 flex items-center"
                          >
                            <iconify-icon
                              icon="mdi:bullseye-arrow"
                              class="mr-1"
                            ></iconify-icon>
                            关键要点
                          </div>
                          <div class="space-y-1">
                            ${t.key_points.map(r=>s`
                                <div
                                  class="text-sm text-gray-600 flex items-start"
                                >
                                  <div
                                    class="w-1 h-1 bg-purple-400 rounded-full mt-2 mr-2 flex-shrink-0"
                                  ></div>
                                  ${r}
                                </div>
                              `)}
                          </div>
                        </div>
                      </div>

                      <div
                        class="bg-white rounded-lg p-4 border border-purple-200"
                      >
                        <div
                          class="text-sm font-medium text-purple-800 mb-2 flex items-center"
                        >
                          <iconify-icon
                            icon="mdi:handshake"
                            class="mr-1"
                          ></iconify-icon>
                          会议成果
                        </div>
                        <div class="text-sm text-gray-700">
                          ${t.outcome}
                        </div>
                      </div>
                    </div>
                  </div>
                `)}
            </div>
          </div>
        </div>
      </div>
    `}renderPhotosTab(){const e=this.getPhotoGallery();return s`
      <div class="space-y-8">
        <!-- 照片画廊 -->
        <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 class="text-2xl font-bold text-gray-800 mb-6 text-center">
            现场调研影像记录
          </h3>

          <!-- 主要照片展示 -->
          <div class="mb-8">
            <div
              class="relative bg-gray-100 rounded-xl overflow-hidden"
              style="height: 400px;"
            >
              <img
                src="${e[this.selectedPhotoIndex].placeholder}"
                alt="${e[this.selectedPhotoIndex].title}"
                class="w-full h-full object-cover"
                loading="lazy"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
              ></div>
              <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div class="flex items-center gap-2 mb-2">
                  <span class="bg-blue-500 text-white text-xs px-2 py-1 rounded"
                    >${e[this.selectedPhotoIndex].category}</span
                  >
                  ${e[this.selectedPhotoIndex].tags.map(t=>s`
                      <span
                        class="bg-white/20 text-white text-xs px-2 py-1 rounded"
                        >${t}</span
                      >
                    `)}
                </div>
                <h4 class="text-xl font-bold mb-2">
                  ${e[this.selectedPhotoIndex].title}
                </h4>
                <p class="text-sm opacity-90">
                  ${e[this.selectedPhotoIndex].description}
                </p>
              </div>

              <!-- 导航按钮 -->
              <button
                class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center transition-all"
                @click=${()=>this.selectPhoto((this.selectedPhotoIndex-1+e.length)%e.length)}
              >
                <iconify-icon
                  icon="mdi:chevron-left"
                  class="text-xl"
                ></iconify-icon>
              </button>
              <button
                class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center transition-all"
                @click=${()=>this.selectPhoto((this.selectedPhotoIndex+1)%e.length)}
              >
                <iconify-icon
                  icon="mdi:chevron-right"
                  class="text-xl"
                ></iconify-icon>
              </button>
            </div>
          </div>

          <!-- 缩略图 -->
          <div class="grid grid-cols-6 gap-4">
            ${e.map((t,a)=>s`
                <div
                  class="relative cursor-pointer group overflow-hidden rounded-lg ${a===this.selectedPhotoIndex?"ring-2 ring-blue-500":""}"
                  @click=${()=>this.selectPhoto(a)}
                >
                  <img
                    src="${t.placeholder}"
                    alt="${t.title}"
                    class="w-full aspect-square object-cover transition-all duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div
                    class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"
                  ></div>
                  <div class="absolute bottom-1 left-1 right-1">
                    <div
                      class="text-xs text-white font-medium bg-black/50 px-2 py-1 rounded text-center truncate"
                    >
                      ${t.title}
                    </div>
                  </div>
                </div>
              `)}
          </div>
        </div>

        <!-- 照片分类统计 -->
        <div class="grid md:grid-cols-3 gap-6">
          ${[{category:"现场调研",count:3,icon:"mdi:hard-hat",color:"blue"},{category:"材料管理",count:2,icon:"mdi:package-variant",color:"green"},{category:"协调沟通",count:1,icon:"mdi:account-group",color:"purple"}].map(t=>s`
              <div
                class="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center"
              >
                <div
                  class="w-12 h-12 bg-${t.color}-500 rounded-full flex items-center justify-center mx-auto mb-3"
                >
                  <iconify-icon
                    icon="${t.icon}"
                    class="text-2xl text-white"
                  ></iconify-icon>
                </div>
                <h4 class="font-bold text-gray-800 mb-1">${t.category}</h4>
                <div class="text-2xl font-bold text-${t.color}-500 mb-1">
                  ${t.count}
                </div>
                <div class="text-sm text-gray-500">张照片</div>
              </div>
            `)}
        </div>
      </div>
    `}renderResultsTab(){const e=this.getSurveyData();return s`
      <div class="space-y-8">
        <!-- 调研数据统计 -->
        <div
          class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200"
        >
          <h3 class="text-2xl font-bold text-gray-800 mb-8 text-center">
            调研成果总览
          </h3>
          <div class="grid md:grid-cols-4 gap-6">
            ${[{label:"调研周期",value:"2",unit:"周",icon:"mdi:calendar",color:"blue"},{label:"参与人员",value:"4",unit:"人",icon:"mdi:account-group",color:"green"},{label:"会议次数",value:"3",unit:"次",icon:"mdi:calendar-text",color:"orange"},{label:"照片记录",value:"6",unit:"张",icon:"mdi:camera",color:"purple"}].map(t=>s`
                <div class="text-center">
                  <div
                    class="w-16 h-16 bg-${t.color}-500 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <iconify-icon
                      icon="${t.icon}"
                      class="text-3xl text-white"
                    ></iconify-icon>
                  </div>
                  <div class="text-3xl font-bold text-${t.color}-600 mb-1">
                    ${t.value}
                  </div>
                  <div class="text-sm text-gray-600">
                    ${t.label}（${t.unit}）
                  </div>
                </div>
              `)}
          </div>
        </div>

        <!-- 关键成果 -->
        <div class="grid lg:grid-cols-2 gap-8">
          <!-- 主要发现 -->
          <div
            class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <h3 class="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <iconify-icon
                icon="mdi:lightbulb"
                class="text-orange-500 mr-2"
              ></iconify-icon>
              主要发现
            </h3>
            <div class="space-y-4">
              ${e.fieldWork.findings.map((t,a)=>s`
                  <div
                    class="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-400"
                  >
                    <div class="flex items-start">
                      <div
                        class="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center mr-3 mt-0.5 text-xs font-bold"
                      >
                        ${a+1}
                      </div>
                      <div class="text-sm text-gray-700">${t}</div>
                    </div>
                  </div>
                `)}
            </div>
          </div>

          <!-- 共识达成 -->
          <div
            class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <h3 class="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <iconify-icon
                icon="mdi:handshake"
                class="text-green-500 mr-2"
              ></iconify-icon>
              共识达成
            </h3>
            <div class="space-y-4">
              ${e.meetings.map((t,a)=>s`
                  <div
                    class="bg-green-50 rounded-lg p-4 border-l-4 border-green-400"
                  >
                    <div class="text-sm font-medium text-green-800 mb-1">
                      ${t.date}
                    </div>
                    <div class="text-sm text-gray-700">${t.outcome}</div>
                  </div>
                `)}
            </div>
          </div>
        </div>

        <!-- 解决方案路径 -->
        <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 class="text-2xl font-bold text-gray-800 mb-6">实施路径规划</h3>
          <div class="relative">
            <!-- 路径流程 -->
            <div class="flex items-center justify-between relative">
              ${[{phase:"现状调研",status:"completed",color:"green",icon:"mdi:magnify"},{phase:"需求确认",status:"completed",color:"green",icon:"mdi:clipboard-check"},{phase:"方案设计",status:"current",color:"blue",icon:"mdi:drawing"},{phase:"试点建设",status:"pending",color:"gray",icon:"mdi:flask"},{phase:"推广应用",status:"pending",color:"gray",icon:"mdi:rocket"}].map((t,a)=>s`
                  <div class="flex flex-col items-center relative z-10">
                    <div
                      class="w-16 h-16 bg-${t.color}-500 rounded-full flex items-center justify-center mb-3 ${t.status==="current"?"ring-4 ring-blue-200 animate-pulse":""}"
                    >
                      <iconify-icon
                        icon="${t.icon}"
                        class="text-2xl text-white"
                      ></iconify-icon>
                    </div>
                    <div class="text-sm font-medium text-gray-800 text-center">
                      ${t.phase}
                    </div>
                    <div class="text-xs text-gray-500 mt-1">
                      ${t.status==="completed"?"已完成":t.status==="current"?"进行中":"待开始"}
                    </div>
                  </div>
                  ${a<4?s`
                        <div
                          class="flex-1 h-1 bg-${t.status==="completed"?"green":"gray"}-300 mx-4 relative top-8"
                        ></div>
                      `:""}
                `)}
            </div>
          </div>
        </div>

        <!-- 下步计划 -->
        <div class="grid md:grid-cols-2 gap-8">
          <div
            class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200"
          >
            <h4 class="text-lg font-bold text-gray-800 mb-4 flex items-center">
              <iconify-icon
                icon="mdi:target"
                class="text-blue-500 mr-2"
              ></iconify-icon>
              近期目标
            </h4>
            <div class="space-y-3">
              <div class="flex items-center text-sm text-gray-700">
                <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                完善平台功能设计方案
              </div>
              <div class="flex items-center text-sm text-gray-700">
                <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                开发核心功能原型
              </div>
              <div class="flex items-center text-sm text-gray-700">
                <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                选择试点项目进行验证
              </div>
            </div>
          </div>
          <div
            class="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200"
          >
            <h4 class="text-lg font-bold text-gray-800 mb-4 flex items-center">
              <iconify-icon
                icon="mdi:flag"
                class="text-green-500 mr-2"
              ></iconify-icon>
              长期愿景
            </h4>
            <div class="space-y-3">
              <div class="flex items-center text-sm text-gray-700">
                <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                覆盖集团所有工程项目
              </div>
              <div class="flex items-center text-sm text-gray-700">
                <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                建立行业数字化标杆
              </div>
              <div class="flex items-center text-sm text-gray-700">
                <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                提升管理效率和质量
              </div>
            </div>
          </div>
        </div>
      </div>
    `}selectPhoto(e){this.selectedPhotoIndex=e,this.requestUpdate()}switchTab(e){this.currentTab=e,this.requestUpdate()}initializeAnimations(){const e=this.shadowRoot.querySelectorAll(".survey-site-card, .supplier-card, .meeting-card");i.fromTo(e,{y:30,opacity:0},{y:0,opacity:1,duration:.6,stagger:.1,ease:"power2.out"}),this.shadowRoot.querySelectorAll(".supplier-card .bg-green-500").forEach(a=>{const r=a.style.width;i.fromTo(a,{width:"0%"},{width:r,duration:1.5,ease:"power2.out",delay:.5})})}updated(e){super.updated(e),e.has("currentTab")&&this.safeRequestAnimationFrame(()=>{this.initializeAnimations()})}render(){return s`
      <div class="w-full flex flex-col items-center">
        <!-- 标题区域 -->
        <div class="text-center mb-8">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">
            前期工作：深入一线，夯实基础
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            为确保平台方案精准、可行，我们开展了全面深入的调研与沟通，形成了扎实的实施基础。
          </p>
        </div>

        <!-- 标签页导航 -->
        <div
          class="flex gap-2 mb-8 bg-white rounded-xl p-2 shadow-lg border border-gray-100"
        >
          ${[{id:"overview",label:"总体概述",icon:"mdi:view-dashboard"},{id:"survey",label:"调研详情",icon:"mdi:clipboard-search"},{id:"photos",label:"现场照片",icon:"mdi:camera"},{id:"results",label:"成果总结",icon:"mdi:chart-line"}].map(e=>s`
              <button
                class="px-6 py-3 rounded-lg cursor-pointer font-semibold transition-all duration-300 flex items-center gap-2 ${this.currentTab===e.id?"bg-blue-500 text-white shadow-lg shadow-blue-200":"text-gray-600 hover:bg-gray-50"}"
                @click=${()=>this.switchTab(e.id)}
              >
                <iconify-icon icon="${e.icon}" class="text-lg"></iconify-icon>
                ${e.label}
              </button>
            `)}
        </div>

        <!-- 内容区域 -->
        <div class="w-full max-w-7xl">
          ${this.currentTab==="overview"?this.renderOverviewTab():this.currentTab==="survey"?this.renderSurveyTab():this.currentTab==="photos"?this.renderPhotosTab():this.renderResultsTab()}
        </div>
      </div>
    `}}m(H,"properties",{currentTab:{type:String},selectedPhotoIndex:{type:Number}}),m(H,"styles",k`
    /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.pointer-events-none{pointer-events:none;}
.absolute{position:absolute;}
.relative{position:relative;}
.static{position:static;}
.inset-0{inset:0;}
.bottom-0{bottom:0;}
.bottom-1{bottom:0.25rem;}
.bottom-8{bottom:2rem;}
.left-0{left:0;}
.left-1{left:0.25rem;}
.left-1\\/2{left:50%;}
.left-4{left:1rem;}
.left-6{left:1.5rem;}
.left-8{left:2rem;}
.right-0{right:0;}
.right-1{right:0.25rem;}
.right-4{right:1rem;}
.right-8{right:2rem;}
.top-0{top:0;}
.top-1\\/2{top:50%;}
.top-8{top:2rem;}
.z-0{z-index:0;}
.z-10{z-index:10;}
.z-20{z-index:20;}
.grid{display:grid;}
.grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr));}
.mx-4{margin-left:1rem;margin-right:1rem;}
.mx-auto{margin-left:auto;margin-right:auto;}
.mb-1{margin-bottom:0.25rem;}
.mb-2{margin-bottom:0.5rem;}
.mb-3{margin-bottom:0.75rem;}
.mb-4{margin-bottom:1rem;}
.mb-6{margin-bottom:1.5rem;}
.mb-8{margin-bottom:2rem;}
.ml-16{margin-left:4rem;}
.mr-1{margin-right:0.25rem;}
.mr-2{margin-right:0.5rem;}
.mr-3{margin-right:0.75rem;}
.mt-0\\.5{margin-top:0.125rem;}
.mt-1{margin-top:0.25rem;}
.mt-2{margin-top:0.5rem;}
.mt-4{margin-top:1rem;}
.aspect-square{aspect-ratio:1/1;}
.h-1{height:0.25rem;}
.h-1\\.5{height:0.375rem;}
.h-10{height:2.5rem;}
.h-12{height:3rem;}
.h-16{height:4rem;}
.h-2{height:0.5rem;}
.h-20{height:5rem;}
.h-32{height:8rem;}
.h-4,
[h4=""]{height:1rem;}
.h-6{height:1.5rem;}
.h-full{height:100%;}
.max-w-2xl{max-width:42rem;}
.max-w-3xl{max-width:48rem;}
.max-w-7xl{max-width:80rem;}
.w-0\\.5{width:0.125rem;}
.w-1{width:0.25rem;}
.w-1\\.5{width:0.375rem;}
.w-10{width:2.5rem;}
.w-12{width:3rem;}
.w-16{width:4rem;}
.w-2{width:0.5rem;}
.w-20{width:5rem;}
.w-32{width:8rem;}
.w-4{width:1rem;}
.w-6{width:1.5rem;}
.w-full{width:100%;}
.flex,
[flex=""]{display:flex;}
.flex-1{flex:1 1 0%;}
.flex-shrink-0{flex-shrink:0;}
.flex-col{flex-direction:column;}
.flex-wrap{flex-wrap:wrap;}
.-translate-x-1\\/2{--un-translate-x:-50%;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.-translate-y-1\\/2{--un-translate-y:-50%;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.group:hover .group-hover\\:scale-105{--un-scale-x:1.05;--un-scale-y:1.05;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.transform{transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
@keyframes pulse{0%, 100% {opacity:1} 50% {opacity:.5}}
.animate-pulse{animation:pulse 2s cubic-bezier(0.4,0,.6,1) infinite;}
.cursor-pointer,
[cursor-pointer=""]{cursor:pointer;}
.items-start{align-items:flex-start;}
.items-center,
[items-center=""]{align-items:center;}
.justify-center{justify-content:center;}
.justify-between{justify-content:space-between;}
.gap-1{gap:0.25rem;}
.gap-2,
[gap-2=""]{gap:0.5rem;}
.gap-4{gap:1rem;}
.gap-6{gap:1.5rem;}
.gap-8{gap:2rem;}
.space-y-1>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(0.25rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(0.25rem * var(--un-space-y-reverse));}
.space-y-3>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(0.75rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(0.75rem * var(--un-space-y-reverse));}
.space-y-4>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(1rem * var(--un-space-y-reverse));}
.space-y-8>:not([hidden])~:not([hidden]){--un-space-y-reverse:0;margin-top:calc(2rem * calc(1 - var(--un-space-y-reverse)));margin-bottom:calc(2rem * var(--un-space-y-reverse));}
.overflow-hidden{overflow:hidden;}
.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
.border{border-width:1px;}
.border-2{border-width:2px;}
.border-l-4{border-left-width:4px;}
.border-blue-200{--un-border-opacity:1;border-color:rgb(191 219 254 / var(--un-border-opacity));}
.border-gray-100{--un-border-opacity:1;border-color:rgb(243 244 246 / var(--un-border-opacity));}
.border-green-200{--un-border-opacity:1;border-color:rgb(187 247 208 / var(--un-border-opacity));}
.border-green-400{--un-border-opacity:1;border-color:rgb(74 222 128 / var(--un-border-opacity));}
.border-orange-400{--un-border-opacity:1;border-color:rgb(251 146 60 / var(--un-border-opacity));}
.border-purple-200{--un-border-opacity:1;border-color:rgb(233 213 255 / var(--un-border-opacity));}
.border-white{--un-border-opacity:1;border-color:rgb(255 255 255 / var(--un-border-opacity));}
.rounded{border-radius:0.25rem;}
.rounded-2xl{border-radius:1rem;}
.rounded-full{border-radius:9999px;}
.rounded-lg,
[rounded-lg=""]{border-radius:0.5rem;}
.rounded-xl{border-radius:0.75rem;}
.bg-black\\/0{background-color:rgb(0 0 0 / 0) /* #000 */;}
.bg-black\\/50{background-color:rgb(0 0 0 / 0.5) /* #000 */;}
.bg-blue-100{--un-bg-opacity:1;background-color:rgb(219 234 254 / var(--un-bg-opacity)) /* #dbeafe */;}
.bg-blue-50{--un-bg-opacity:1;background-color:rgb(239 246 255 / var(--un-bg-opacity)) /* #eff6ff */;}
.bg-blue-500,
[bg-blue-500=""]{--un-bg-opacity:1;background-color:rgb(59 130 246 / var(--un-bg-opacity)) /* #3b82f6 */;}
.bg-gray-100{--un-bg-opacity:1;background-color:rgb(243 244 246 / var(--un-bg-opacity)) /* #f3f4f6 */;}
.bg-green-50{--un-bg-opacity:1;background-color:rgb(240 253 244 / var(--un-bg-opacity)) /* #f0fdf4 */;}
.bg-green-500{--un-bg-opacity:1;background-color:rgb(34 197 94 / var(--un-bg-opacity)) /* #22c55e */;}
.bg-orange-50{--un-bg-opacity:1;background-color:rgb(255 247 237 / var(--un-bg-opacity)) /* #fff7ed */;}
.bg-orange-500{--un-bg-opacity:1;background-color:rgb(249 115 22 / var(--un-bg-opacity)) /* #f97316 */;}
.bg-purple-200{--un-bg-opacity:1;background-color:rgb(233 213 255 / var(--un-bg-opacity)) /* #e9d5ff */;}
.bg-purple-400{--un-bg-opacity:1;background-color:rgb(192 132 252 / var(--un-bg-opacity)) /* #c084fc */;}
.bg-purple-50{--un-bg-opacity:1;background-color:rgb(250 245 255 / var(--un-bg-opacity)) /* #faf5ff */;}
.bg-purple-500{--un-bg-opacity:1;background-color:rgb(168 85 247 / var(--un-bg-opacity)) /* #a855f7 */;}
.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255 / var(--un-bg-opacity)) /* #fff */;}
.bg-white\\/20{background-color:rgb(255 255 255 / 0.2) /* #fff */;}
.group:hover .group-hover\\:bg-black\\/20{background-color:rgb(0 0 0 / 0.2) /* #000 */;}
.hover\\:bg-gray-50:hover{--un-bg-opacity:1;background-color:rgb(249 250 251 / var(--un-bg-opacity)) /* #f9fafb */;}
.hover\\:bg-white\\/30:hover{background-color:rgb(255 255 255 / 0.3) /* #fff */;}
[hover\\:bg-gray-50=""]:hover{--un-bg-opacity:1;background-color:rgb(249 250 251 / var(--un-bg-opacity)) /* #f9fafb */;}
.from-black\\/50{--un-gradient-from-position:0%;--un-gradient-from:rgb(0 0 0 / 0.5) var(--un-gradient-from-position);--un-gradient-to-position:100%;--un-gradient-to:rgb(0 0 0 / 0) var(--un-gradient-to-position);--un-gradient-stops:var(--un-gradient-from), var(--un-gradient-to);}
.from-blue-50{--un-gradient-from-position:0%;--un-gradient-from:rgb(239 246 255 / var(--un-from-opacity, 1)) var(--un-gradient-from-position);--un-gradient-to-position:100%;--un-gradient-to:rgb(239 246 255 / 0) var(--un-gradient-to-position);--un-gradient-stops:var(--un-gradient-from), var(--un-gradient-to);}
.from-blue-500{--un-gradient-from-position:0%;--un-gradient-from:rgb(59 130 246 / var(--un-from-opacity, 1)) var(--un-gradient-from-position);--un-gradient-to-position:100%;--un-gradient-to:rgb(59 130 246 / 0) var(--un-gradient-to-position);--un-gradient-stops:var(--un-gradient-from), var(--un-gradient-to);}
.from-green-50{--un-gradient-from-position:0%;--un-gradient-from:rgb(240 253 244 / var(--un-from-opacity, 1)) var(--un-gradient-from-position);--un-gradient-to-position:100%;--un-gradient-to:rgb(240 253 244 / 0) var(--un-gradient-to-position);--un-gradient-stops:var(--un-gradient-from), var(--un-gradient-to);}
.to-blue-100{--un-gradient-to-position:100%;--un-gradient-to:rgb(219 234 254 / var(--un-to-opacity, 1)) var(--un-gradient-to-position);}
.to-green-100{--un-gradient-to-position:100%;--un-gradient-to:rgb(220 252 231 / var(--un-to-opacity, 1)) var(--un-gradient-to-position);}
.to-purple-50{--un-gradient-to-position:100%;--un-gradient-to:rgb(250 245 255 / var(--un-to-opacity, 1)) var(--un-gradient-to-position);}
.to-purple-500{--un-gradient-to-position:100%;--un-gradient-to:rgb(168 85 247 / var(--un-to-opacity, 1)) var(--un-gradient-to-position);}
.to-transparent{--un-gradient-to-position:100%;--un-gradient-to:transparent var(--un-gradient-to-position);}
.bg-gradient-to-br{--un-gradient-shape:to bottom right in oklch;--un-gradient:var(--un-gradient-shape), var(--un-gradient-stops);background-image:linear-gradient(var(--un-gradient));}
.bg-gradient-to-r{--un-gradient-shape:to right in oklch;--un-gradient:var(--un-gradient-shape), var(--un-gradient-stops);background-image:linear-gradient(var(--un-gradient));}
.bg-gradient-to-t{--un-gradient-shape:to top in oklch;--un-gradient:var(--un-gradient-shape), var(--un-gradient-stops);background-image:linear-gradient(var(--un-gradient));}
[stroke-width~="\\32 "]{stroke-width:2px;}
[stroke~="\\#cbd5e1"]{--un-stroke-opacity:1;stroke:rgb(203 213 225 / var(--un-stroke-opacity)) /* #cbd5e1 */;}
.object-cover{object-fit:cover;}
.p-2{padding:0.5rem;}
.p-4{padding:1rem;}
.p-6{padding:1.5rem;}
.p-8{padding:2rem;}
.px-2{padding-left:0.5rem;padding-right:0.5rem;}
.px-3{padding-left:0.75rem;padding-right:0.75rem;}
.px-6,
[px-6=""]{padding-left:1.5rem;padding-right:1.5rem;}
.py-1{padding-top:0.25rem;padding-bottom:0.25rem;}
.py-3,
[py-3=""]{padding-top:0.75rem;padding-bottom:0.75rem;}
.text-center{text-align:center;}
.text-2xl{font-size:1.5rem;line-height:2rem;}
.text-3xl{font-size:1.875rem;line-height:2.25rem;}
.text-4xl{font-size:2.25rem;line-height:2.5rem;}
.text-lg{font-size:1.125rem;line-height:1.75rem;}
.text-sm{font-size:0.875rem;line-height:1.25rem;}
.text-xl{font-size:1.25rem;line-height:1.75rem;}
.text-xs{font-size:0.75rem;line-height:1rem;}
.text-blue-500{--un-text-opacity:1;color:rgb(59 130 246 / var(--un-text-opacity)) /* #3b82f6 */;}
.text-blue-700{--un-text-opacity:1;color:rgb(29 78 216 / var(--un-text-opacity)) /* #1d4ed8 */;}
.text-gray-500{--un-text-opacity:1;color:rgb(107 114 128 / var(--un-text-opacity)) /* #6b7280 */;}
.text-gray-600,
[text-gray-600=""]{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity)) /* #4b5563 */;}
.text-gray-700{--un-text-opacity:1;color:rgb(55 65 81 / var(--un-text-opacity)) /* #374151 */;}
.text-gray-800{--un-text-opacity:1;color:rgb(31 41 55 / var(--un-text-opacity)) /* #1f2937 */;}
.text-green-500{--un-text-opacity:1;color:rgb(34 197 94 / var(--un-text-opacity)) /* #22c55e */;}
.text-green-800{--un-text-opacity:1;color:rgb(22 101 52 / var(--un-text-opacity)) /* #166534 */;}
.text-orange-500{--un-text-opacity:1;color:rgb(249 115 22 / var(--un-text-opacity)) /* #f97316 */;}
.text-purple-500{--un-text-opacity:1;color:rgb(168 85 247 / var(--un-text-opacity)) /* #a855f7 */;}
.text-purple-600{--un-text-opacity:1;color:rgb(147 51 234 / var(--un-text-opacity)) /* #9333ea */;}
.text-purple-700{--un-text-opacity:1;color:rgb(126 34 206 / var(--un-text-opacity)) /* #7e22ce */;}
.text-purple-800{--un-text-opacity:1;color:rgb(107 33 168 / var(--un-text-opacity)) /* #6b21a8 */;}
.text-red-400{--un-text-opacity:1;color:rgb(248 113 113 / var(--un-text-opacity)) /* #f87171 */;}
.text-white,
[text-white=""]{--un-text-opacity:1;color:rgb(255 255 255 / var(--un-text-opacity)) /* #fff */;}
.font-bold{font-weight:700;}
.font-medium{font-weight:500;}
.font-semibold,
[font-semibold=""]{font-weight:600;}
.tab,
[tab=""]{-moz-tab-size:4;-o-tab-size:4;tab-size:4;}
.opacity-90{opacity:0.9;}
.shadow-blue-200{--un-shadow-opacity:1;--un-shadow-color:rgb(191 219 254 / var(--un-shadow-opacity)) /* #bfdbfe */;}
.shadow-lg,
[shadow-lg=""]{--un-shadow:var(--un-shadow-inset) 0 10px 15px -3px var(--un-shadow-color, rgb(0 0 0 / 0.1)),var(--un-shadow-inset) 0 4px 6px -4px var(--un-shadow-color, rgb(0 0 0 / 0.1));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.shadow-md{--un-shadow:var(--un-shadow-inset) 0 4px 6px -1px var(--un-shadow-color, rgb(0 0 0 / 0.1)),var(--un-shadow-inset) 0 2px 4px -2px var(--un-shadow-color, rgb(0 0 0 / 0.1));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.hover\\:shadow-lg:hover{--un-shadow:var(--un-shadow-inset) 0 10px 15px -3px var(--un-shadow-color, rgb(0 0 0 / 0.1)),var(--un-shadow-inset) 0 4px 6px -4px var(--un-shadow-color, rgb(0 0 0 / 0.1));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.ring-2{--un-ring-width:2px;--un-ring-offset-shadow:var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);--un-ring-shadow:var(--un-ring-inset) 0 0 0 calc(var(--un-ring-width) + var(--un-ring-offset-width)) var(--un-ring-color);box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.ring-4{--un-ring-width:4px;--un-ring-offset-shadow:var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);--un-ring-shadow:var(--un-ring-inset) 0 0 0 calc(var(--un-ring-width) + var(--un-ring-offset-width)) var(--un-ring-color);box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.ring-blue-200{--un-ring-opacity:1;--un-ring-color:rgb(191 219 254 / var(--un-ring-opacity)) /* #bfdbfe */;}
.ring-blue-500{--un-ring-opacity:1;--un-ring-color:rgb(59 130 246 / var(--un-ring-opacity)) /* #3b82f6 */;}
.transition-all,
[transition-all=""]{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.duration-300,
[duration-300=""]{transition-duration:300ms;}
.ease{transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);}
.backdrop-blur-sm{backdrop-filter:blur(4px);}
@media (min-width: 768px){
.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr));}
.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr));}
.md\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr));}
}
@media (min-width: 1024px){
.lg\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr));}
.lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr));}
};
  `);customElements.define("preliminary-work",H);class J{constructor(){this.currentSectionIndex=0,this.currentSectionId="hero",this.init()}init(){this.initializeQRCode(),this.setupEventListeners(),this.setupKeyboardNavigation()}initializeQRCode(){const e=document.getElementById("qr-canvas");if(e){const t=e.getContext("2d"),r=e.width/8;for(let n=0;n<8;n++)for(let o=0;o<8;o++)Math.random()>.5&&(t.fillStyle="#1f2937",t.fillRect(n*r,o*r,r,r))}}setupEventListeners(){document.addEventListener("section-change",e=>{this.handleSectionChange(e.detail.sectionId)}),document.addEventListener("section-changed",e=>{this.handleSectionChanged(e.detail.sectionIndex,e.detail.sectionId)})}setupKeyboardNavigation(){document.addEventListener("keydown",e=>{const t=document.querySelector("app-main");t&&(e.key==="ArrowRight"&&t.nextSection(),e.key==="ArrowLeft"&&t.prevSection())})}handleSectionChange(e){const t=document.querySelector("app-main");t&&t.handleSectionChange(e)}handleSectionChanged(e,t){this.currentSectionIndex=e,this.currentSectionId=t;const a=document.querySelector("app-header");if(a&&a.updateCurrentSection(t),t==="value"){const r=document.querySelector("value-chart-component");r&&!r.chartInitialized&&setTimeout(()=>{r.initializeChart()},100)}}}document.addEventListener("DOMContentLoaded",()=>{new J});
