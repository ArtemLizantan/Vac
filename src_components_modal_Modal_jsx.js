"use strict";(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["src_components_modal_Modal_jsx"],{"./src/UI/button/buttonSolid/BtnSolid.jsx":(e,t,A)=>{A.r(t),A.d(t,{default:()=>s});var n=A(/*! react */"./node_modules/react/index.js"),i=A.n(n),o=A(/*! ./index.module.scss */"./src/UI/button/buttonSolid/index.module.scss");let s=e=>{let{children:t,onClick:A,disabled:n,wx:s,wm:a,ws:l}=e;return n?i().createElement("div",{className:`${o.default.btn}  ${o.default.btnDisable}`,style:{"--width":`${s}px`,"--widthM":`${a||s}px`,"--widthS":`${"auto"==l?"100%":`${l||a||s}px`}`}},t):i().createElement("div",{className:o.default.btn,onClick:A,style:{"--width":`${s}px`,"--widthM":`${a||s}px`,"--widthS":`${"auto"==l?"100%":`${l||a||s}px`}`}},t)}},"./src/components/modal/Modal.jsx":(e,t,A)=>{A.r(t),A.d(t,{default:()=>a});var n=A(/*! react */"./node_modules/react/index.js"),i=A.n(n),o=A(/*! react-router-dom */"./node_modules/react-router-dom/esm/react-router-dom.js"),s=A(/*! ../../UI/button/buttonSolid/BtnSolid */"./src/UI/button/buttonSolid/BtnSolid.jsx");A(/*! ./index.scss */"./src/components/modal/index.scss");let a=e=>{let{state:t,onClick:A}=e,[a,l]=(0,n.useState)(0);(0,n.useEffect)(()=>{t?document.body.style.overflow="hidden":document.body.style.overflow="auto"},[t]);let d=()=>{l(0)};return i().createElement("div",{className:`overlay ${t?"overlay_show":""}`},0==a?i().createElement("div",{className:"modal"},i().createElement("div",{className:"close",onClick:A},i().createElement("svg",{width:"29",height:"29",viewBox:"0 0 29 29",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.41879 24.5858C0.637746 25.3669 0.637746 26.6332 1.41879 27.4143C2.19984 28.1953 3.46617 28.1953 4.24722 27.4143L14.4188 17.2427L24.7533 27.5772C25.5344 28.3582 26.8007 28.3582 27.5817 27.5772C28.3628 26.7962 28.3628 25.5298 27.5817 24.7488L17.2472 14.4143L27.5817 4.07974C28.3628 3.29869 28.3628 2.03236 27.5817 1.25131C26.8007 0.470265 25.5344 0.470265 24.7533 1.25131L14.4188 11.5858L4.24722 1.41425C3.46617 0.633204 2.19984 0.633204 1.41879 1.41425C0.637745 2.1953 0.637746 3.46163 1.41879 4.24268L11.5904 14.4143L1.41879 24.5858Z",fill:"#41456B"}))),i().createElement("div",{className:"modal__list"},i().createElement(o.Link,{to:"/catalog",className:"modal__list-item",onClick:A},"Inventory"),i().createElement("div",{className:"modal__list-item",onClick:()=>{l(1)}},"Contact us"),i().createElement(o.Link,{to:"/about",className:"modal__list-item",onClick:A},"About CM"),i().createElement(o.Link,{to:"/loan-rates",className:"modal__list-item",onClick:A},"Loan Rates"),i().createElement(o.Link,{to:"/video",className:"modal__list-item",onClick:A},"Video"),i().createElement(o.Link,{to:"/blog",className:"modal__list-item",onClick:A},"Blog"),i().createElement(o.Link,{to:"/calculator",className:"modal__list-item",onClick:A},"Calculate")),i().createElement("div",{className:"modal__social"},i().createElement("a",{href:"#",className:"modal__link"},i().createElement("svg",{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i().createElement("rect",{width:"30",height:"30",rx:"2",fill:"#7481FF"}),i().createElement("path",{d:"M14.8573 10.6956C12.5992 10.6956 10.7283 12.5343 10.7283 14.8246C10.7283 17.1149 12.567 18.9536 14.8573 18.9536C17.1476 18.9536 18.9863 17.0827 18.9863 14.8246C18.9863 12.5665 17.1154 10.6956 14.8573 10.6956ZM14.8573 17.4697C13.4057 17.4697 12.2121 16.2762 12.2121 14.8246C12.2121 13.373 13.4057 12.1794 14.8573 12.1794C16.3089 12.1794 17.5025 13.373 17.5025 14.8246C17.5025 16.2762 16.3089 17.4697 14.8573 17.4697Z",fill:"white"}),i().createElement("path",{d:"M19.1501 11.5343C19.6667 11.5343 20.0856 11.1155 20.0856 10.5988C20.0856 10.0822 19.6667 9.66333 19.1501 9.66333C18.6334 9.66333 18.2146 10.0822 18.2146 10.5988C18.2146 11.1155 18.6334 11.5343 19.1501 11.5343Z",fill:"white"}),i().createElement("path",{d:"M21.5669 8.17976C20.7281 7.30879 19.5346 6.85718 18.1798 6.85718H11.5346C8.72815 6.85718 6.85718 8.72815 6.85718 11.5346V18.1475C6.85718 19.5346 7.30879 20.7281 8.21202 21.5991C9.08298 22.4378 10.2443 22.8572 11.5669 22.8572H18.1475C19.5346 22.8572 20.6959 22.4056 21.5346 21.5991C22.4056 20.7604 22.8572 19.5669 22.8572 18.1798V11.5346C22.8572 10.1798 22.4056 9.01847 21.5669 8.17976ZM21.4378 18.1798C21.4378 19.1798 21.083 19.9862 20.5023 20.5346C19.9217 21.083 19.1152 21.3733 18.1475 21.3733H11.5669C10.5991 21.3733 9.79266 21.083 9.21202 20.5346C8.63137 19.954 8.34105 19.1475 8.34105 18.1475V11.5346C8.34105 10.5669 8.63137 9.7604 9.21202 9.17976C9.7604 8.63137 10.5991 8.34105 11.5669 8.34105H18.212C19.1798 8.34105 19.9862 8.63137 20.5669 9.21202C21.1152 9.79266 21.4378 10.5991 21.4378 11.5346V18.1798Z",fill:"white"}))),i().createElement("a",{href:"#",className:"modal__link"},i().createElement("svg",{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i().createElement("rect",{width:"30",height:"30",rx:"2",fill:"#7481FF"}),i().createElement("path",{d:"M17.9557 22.4945V15.6079H20.2857L20.8683 12.7385H17.9557V11.5908C17.9557 10.443 18.5394 9.86915 19.7032 9.86915H20.8683V6.99976C20.2857 6.99976 19.5634 6.99976 18.5382 6.99976C16.3975 6.99976 15.0432 8.6531 15.0432 11.0169V12.7385H12.7131V15.6079H15.0432V22.4945H17.9557Z",fill:"white"}))),i().createElement("a",{href:"#",className:"modal__link"},i().createElement("svg",{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i().createElement("rect",{width:"30",height:"30",rx:"2",fill:"#7481FF"}),i().createElement("path",{d:"M23.3845 11.2773C23.19 10.5543 22.62 9.98444 21.8972 9.78978C20.5767 9.42847 15.2945 9.42847 15.2945 9.42847C15.2945 9.42847 10.0125 9.42847 8.69196 9.77608C7.98304 9.97054 7.39915 10.5544 7.20469 11.2773C6.85718 12.5977 6.85718 15.336 6.85718 15.336C6.85718 15.336 6.85718 18.0882 7.20469 19.3948C7.39935 20.1177 7.96913 20.6876 8.69207 20.8822C10.0264 21.2436 15.2947 21.2436 15.2947 21.2436C15.2947 21.2436 20.5767 21.2436 21.8972 20.896C22.6201 20.7015 23.19 20.1316 23.3847 19.4087C23.7321 18.0882 23.7321 15.35 23.7321 15.35C23.7321 15.35 23.746 12.5977 23.3845 11.2773ZM13.6127 17.8659V12.8062L18.0051 15.336L13.6127 17.8659Z",fill:"white"}))))):1==a?i().createElement("div",{className:"contactUs"},i().createElement("div",{className:"contactUs__close",onClick:d},i().createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i().createElement("path",{d:"M1 1L23 23",stroke:"#41456B",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),i().createElement("path",{d:"M23 1L0.999999 23",stroke:"#41456B",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),i().createElement("div",{className:"contactUs__title"},"We can't wait to hear from you!"),i().createElement("form",{className:"contactUs__form"},i().createElement("input",{type:"text",name:"name",placeholder:"Your Name",className:"contactUs__input"}),i().createElement("input",{type:"tel",name:"phone",placeholder:"Phone Number",className:"contactUs__input"}),i().createElement("input",{type:"email",name:"email",placeholder:"Email Address",className:"contactUs__input"}),i().createElement("div",{className:"contactUs__btn"},i().createElement(s.default,{onClick:e=>{let t=0,A={...e.target.parentNode.parentNode.elements};for(let e in A)Object.hasOwnProperty.call(A,e)&&""!=A[e].value&&t++;6==t&&l(2)}},"Contact Me"))),i().createElement("div",{className:"contactUs__social"},i().createElement("div",{className:"contactUs__social-title"},"You can contact us yourself"),i().createElement("div",{className:"contactUs__social-list"},i().createElement("a",{href:"#",className:"contactUs__link"},i().createElement("svg",{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i().createElement("rect",{width:"30",height:"30",rx:"2",fill:"#7481FF"}),i().createElement("path",{d:"M14.8573 10.6955C12.5992 10.6955 10.7283 12.5342 10.7283 14.8246C10.7283 17.1149 12.567 18.9536 14.8573 18.9536C17.1476 18.9536 18.9863 17.0826 18.9863 14.8246C18.9863 12.5665 17.1154 10.6955 14.8573 10.6955ZM14.8573 17.4697C13.4057 17.4697 12.2121 16.2762 12.2121 14.8246C12.2121 13.3729 13.4057 12.1794 14.8573 12.1794C16.3089 12.1794 17.5025 13.3729 17.5025 14.8246C17.5025 16.2762 16.3089 17.4697 14.8573 17.4697Z",fill:"white"}),i().createElement("path",{d:"M19.1501 11.5343C19.6667 11.5343 20.0856 11.1154 20.0856 10.5988C20.0856 10.0821 19.6667 9.6633 19.1501 9.6633C18.6334 9.6633 18.2146 10.0821 18.2146 10.5988C18.2146 11.1154 18.6334 11.5343 19.1501 11.5343Z",fill:"white"}),i().createElement("path",{d:"M21.5669 8.17973C20.7281 7.30876 19.5346 6.85715 18.1798 6.85715H11.5346C8.72815 6.85715 6.85718 8.72811 6.85718 11.5346V18.1475C6.85718 19.5346 7.30879 20.7281 8.21202 21.5991C9.08298 22.4378 10.2443 22.8571 11.5669 22.8571H18.1475C19.5346 22.8571 20.6959 22.4055 21.5346 21.5991C22.4056 20.7604 22.8572 19.5668 22.8572 18.1797V11.5346C22.8572 10.1797 22.4056 9.01844 21.5669 8.17973ZM21.4378 18.1797C21.4378 19.1797 21.083 19.9862 20.5023 20.5346C19.9217 21.083 19.1152 21.3733 18.1475 21.3733H11.5669C10.5991 21.3733 9.79266 21.083 9.21202 20.5346C8.63137 19.9539 8.34105 19.1475 8.34105 18.1475V11.5346C8.34105 10.5668 8.63137 9.76037 9.21202 9.17973C9.7604 8.63134 10.5991 8.34102 11.5669 8.34102H18.212C19.1798 8.34102 19.9862 8.63134 20.5669 9.21199C21.1152 9.79263 21.4378 10.5991 21.4378 11.5346V18.1797Z",fill:"white"}))),i().createElement("a",{href:"#",className:"contactUs__link"},i().createElement("svg",{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i().createElement("rect",{width:"30",height:"30",rx:"2",fill:"#7481FF"}),i().createElement("path",{d:"M17.9557 22.4946V15.608H20.2857L20.8683 12.7386H17.9557V11.5909C17.9557 10.4431 18.5394 9.86924 19.7032 9.86924H20.8683V6.99985C20.2857 6.99985 19.5634 6.99985 18.5382 6.99985C16.3975 6.99985 15.0432 8.65319 15.0432 11.017V12.7386H12.7131V15.608H15.0432V22.4946H17.9557Z",fill:"white"}))),i().createElement("a",{href:"#",className:"contactUs__link"},i().createElement("svg",{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i().createElement("rect",{width:"30",height:"30",rx:"2",fill:"#7481FF"}),i().createElement("path",{d:"M23.3845 11.2773C23.19 10.5544 22.62 9.98453 21.8972 9.78987C20.5767 9.42856 15.2945 9.42856 15.2945 9.42856C15.2945 9.42856 10.0125 9.42856 8.69196 9.77617C7.98304 9.97063 7.39915 10.5545 7.20469 11.2773C6.85718 12.5978 6.85718 15.3361 6.85718 15.3361C6.85718 15.3361 6.85718 18.0883 7.20469 19.3949C7.39935 20.1178 7.96913 20.6876 8.69207 20.8823C10.0264 21.2437 15.2947 21.2437 15.2947 21.2437C15.2947 21.2437 20.5767 21.2437 21.8972 20.8961C22.6201 20.7015 23.19 20.1317 23.3847 19.4088C23.7321 18.0883 23.7321 15.35 23.7321 15.35C23.7321 15.35 23.746 12.5978 23.3845 11.2773ZM13.6127 17.8659V12.8063L18.0051 15.3361L13.6127 17.8659Z",fill:"white"}))),i().createElement("a",{href:"#",className:"contactUs__link"},i().createElement("svg",{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i().createElement("rect",{width:"30",height:"30",rx:"2",fill:"#7481FF"}),i().createElement("path",{d:"M8 12.7143L14.4778 16.6803C14.7983 16.8765 15.2017 16.8765 15.5222 16.6803L22 12.7143M8 12.7143V21C8 21.5523 8.44772 22 9 22H21C21.5523 22 22 21.5523 22 21V12.7143M8 12.7143L14.4414 8.3762C14.7791 8.14878 15.2209 8.14878 15.5586 8.3762L22 12.7143",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})))))):2==a?i().createElement("div",{className:"success"},i().createElement("div",{className:"success__close",onClick:d},i().createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i().createElement("path",{d:"M1 1L23 23",stroke:"#41456B",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),i().createElement("path",{d:"M23 1L0.999999 23",stroke:"#41456B",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),i().createElement("div",{className:"success__icon"},i().createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 70 70",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i().createElement("circle",{cx:"35",cy:"35",r:"33.5",stroke:"#7481FF",strokeWidth:"3"}),i().createElement("path",{d:"M21 37.2925L32.3077 47.6L50.4 21",stroke:"#7481FF",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"}))),i().createElement("div",{className:"success__title"},"Application Successful!"),i().createElement("div",{className:"success__subtitle"},"Our manager will contact you in the nearest time.")):"")}},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/UI/button/buttonSolid/index.module.scss":(e,t,A)=>{A.r(t),A.d(t,{default:()=>a});var n=A(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */"./node_modules/css-loader/dist/runtime/sourceMaps.js"),i=A.n(n),o=A(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */"./node_modules/css-loader/dist/runtime/api.js"),s=A.n(o)()(i());s.push([e.id,`.tix8M3CTrkeUnH8GPf3w {
  width: var(--width);
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  background: var(--primary---accent);
  font-size: 16px;
  font-weight: 700;
  line-height: 14.364px;
  letter-spacing: 0.32px;
  text-transform: uppercase;
  color: var(--primary---white);
  transition: all 0.2s;
  cursor: pointer;
}
.tix8M3CTrkeUnH8GPf3w:hover {
  background: var(--hover---primary);
}
@media (max-width: 768px) {
  .tix8M3CTrkeUnH8GPf3w {
    width: var(--widthM);
  }
}
@media (max-width: 425px) {
  .tix8M3CTrkeUnH8GPf3w {
    width: var(--widthS);
    height: 35px;
    font-size: 14px;
  }
}

.U_qys_v0Ksd1xaNRV5vV {
  background: rgba(116, 129, 255, 0.5);
  cursor: default;
}
.U_qys_v0Ksd1xaNRV5vV:hover {
  background: rgba(116, 129, 255, 0.5);
}`,"",{version:3,sources:["webpack://./src/UI/button/buttonSolid/index.module.scss"],names:[],mappings:"AAAA;EACE,mBAAA;EACA,YAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;EAEA,kBAAA;EACA,mCAAA;EAEA,eAAA;EACA,gBAAA;EACA,qBAAA;EACA,sBAAA;EACA,yBAAA;EACA,6BAAA;EAEA,oBAAA;EACA,eAAA;AAHF;AAKE;EACE,kCAAA;AAHJ;AAKE;EAxBF;IAyBI,oBAAA;EAFF;AACF;AAGE;EA3BF;IA4BI,oBAAA;IACA,YAAA;IACA,eAAA;EAAF;AACF;;AAEA;EACE,oCAAA;EACA,eAAA;AACF;AAAE;EACE,oCAAA;AAEJ",sourcesContent:[".btn {\n  width: var(--width);\n  height: 45px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  border-radius: 2px;\n  background: var(--primary---accent);\n\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 14.364px;\n  letter-spacing: 0.32px;\n  text-transform: uppercase;\n  color: var(--primary---white);\n\n  transition: all 0.2s;\n  cursor: pointer;\n\n  &:hover {\n    background: var(--hover---primary);\n  }\n  @media (max-width: 768px) {\n    width: var(--widthM);\n  }\n  @media (max-width: 425px) {\n    width: var(--widthS);\n    height: 35px;\n    font-size: 14px;\n  }\n}\n.btnDisable {\n  background: rgba(#7481ff, 0.5);\n  cursor: default;\n  &:hover {\n    background: rgba(#7481ff, 0.5);\n  }\n}\n"],sourceRoot:""}]),s.locals={btn:"tix8M3CTrkeUnH8GPf3w",btnDisable:"U_qys_v0Ksd1xaNRV5vV"};let a=s},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/modal/index.scss":(e,t,A)=>{A.r(t),A.d(t,{default:()=>E});var n=A(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */"./node_modules/css-loader/dist/runtime/sourceMaps.js"),i=A.n(n),o=A(/*! ../../../node_modules/css-loader/dist/runtime/api.js */"./node_modules/css-loader/dist/runtime/api.js"),s=A.n(o),a=A(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */"./node_modules/css-loader/dist/runtime/getUrl.js"),l=A.n(a),d=new URL(A(/*! ./img/NameThumb.png */"./src/components/modal/img/NameThumb.png"),A.b),r=new URL(A(/*! ./img/PhoneThumb.png */"./src/components/modal/img/PhoneThumb.png"),A.b),c=new URL(A(/*! ./img/MailThumb.png */"./src/components/modal/img/MailThumb.png"),A.b),p=s()(i()),m=l()(d),x=l()(r),h=l()(c);p.push([e.id,`.overlay {
  width: 100vw;
  height: 100dvh;
  display: none;
  background: rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
.overlay_show {
  display: block;
  z-index: 3000;
}

.modal {
  padding: 130px 125px 90px 60px;
  width: 570px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  float: right;
  background: #fff;
  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.12);
  position: fixed;
  top: 0;
  right: 0;
}
@media (max-width: 768px) {
  .modal {
    padding: 130px 60px 100px;
    width: 504px;
  }
}
@media (max-width: 640px) {
  .modal {
    padding: 100px 40px 46px;
    width: 100%;
  }
}
.modal__list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
@media (max-width: 640px) {
  .modal__list {
    gap: 25px;
  }
}
.modal__list-item {
  color: var(--primary---content);
  font-size: 25px;
  font-weight: 700;
  line-height: 140%; /* 35px */
  letter-spacing: 0.5px;
  cursor: pointer;
}
.modal__list-item:first-child {
  display: none;
}
@media (max-width: 640px) {
  .modal__list-item {
    font-size: 20px;
  }
  .modal__list-item:first-child {
    display: block;
  }
}
.modal__social {
  display: flex;
  align-items: center;
  gap: 10px;
}
.close {
  position: absolute;
  top: 26.67px;
  right: 20px;
  cursor: pointer;
}

.contactUs {
  padding: 92px 120px 90px 60px;
  width: 570px;
  height: 100%;
  float: right;
  background: #fff;
  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.12);
}
@media (max-width: 768px) {
  .contactUs {
    padding: 92px 54px 100px 60px;
    width: 504px;
  }
}
@media (max-width: 640px) {
  .contactUs {
    padding: 85px 20px 40px;
    width: 100%;
  }
}
.contactUs__close {
  position: absolute;
  top: 28px;
  left: 60px;
  cursor: pointer;
}
@media (max-width: 640px) {
  .contactUs__close {
    top: 14px;
    left: 21px;
  }
}
.contactUs__title {
  color: var(--primary---content);
  font-size: 30px;
  font-weight: 700;
  line-height: 140%; /* 42px */
}
@media (max-width: 640px) {
  .contactUs__title {
    padding-right: 30px;
    font-size: 24px;
  }
}
.contactUs__form {
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
@media (max-width: 640px) {
  .contactUs__form {
    margin-top: 30px;
  }
}
.contactUs__input {
  padding-left: 44px;
  height: 45px;
  border-radius: 2px;
  border: 1px solid #d7d7d7;
  border: 1px solid var(--secondary-s-color, #d7d7d7);
  color: var(--secondary---text);
  font-size: 16px;
  font-weight: 500;
  line-height: 159%; /* 25.44px */
}
.contactUs__input::-moz-placeholder {
  color: var(--secondary---s-color);
}
.contactUs__input::placeholder {
  color: var(--secondary---s-color);
}
.contactUs__input:first-child {
  background: url(${m}) left center no-repeat;
  background-position: 9px;
}
.contactUs__input:nth-child(2) {
  background: url(${x}) left center no-repeat;
  background-position: 9px;
}
.contactUs__input:nth-child(3) {
  background: url(${h}) left center no-repeat;
  background-position: 9px;
}
.contactUs__btn {
  margin-top: 30px;
  border: none;
}
@media (max-width: 640px) {
  .contactUs__btn {
    margin-top: 75px;
  }
}
.contactUs__social {
  margin-top: 60px;
}
.contactUs__social-title {
  color: var(--primary---content);
  font-size: 20px;
  font-weight: 600;
  line-height: 25px; /* 125% */
}
@media (max-width: 640px) {
  .contactUs__social-title {
    font-size: 18px;
  }
}
.contactUs__social-list {
  margin-top: 27px;
  display: flex;
  gap: 10px;
}
.success {
  padding: 112px 189px 0 60px;
  width: 570px;
  height: 100%;
  float: right;
  background: #fff;
  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.12);
}
@media (max-width: 768px) {
  .success {
    padding-right: 123px;
    width: 504px;
  }
}
@media (max-width: 640px) {
  .success {
    padding: 174px 21px 0;
    width: 100%;
  }
}
.success__close {
  position: absolute;
  top: 28px;
  left: 60px;
  cursor: pointer;
}
@media (max-width: 640px) {
  .success__close {
    top: 14px;
    left: 21px;
  }
}
.success__icon {
  width: 70px;
  height: 70px;
}
@media (max-width: 640px) {
  .success__icon {
    width: 50px;
    height: 50px;
  }
}
.success__title {
  margin-top: 36px;
  color: var(--primary---content);
  font-size: 30px;
  font-weight: 700;
  line-height: 140%; /* 42px */
}
@media (max-width: 640px) {
  .success__title {
    margin-top: 10px;
    font-size: 24px;
  }
}
.success__subtitle {
  margin-top: 6px;
  padding-left: 1px;
  width: 229px;
  color: var(--secondary---text);
  font-size: 16px;
  font-weight: 400;
  line-height: 180%; /* 28.8px */
  letter-spacing: 0.32px;
}`,"",{version:3,sources:["webpack://./src/components/modal/index.scss"],names:[],mappings:"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",sourcesContent:['.overlay {\n  width: 100vw;\n  height: 100dvh;\n  display: none;\n  background: rgba(0, 0, 0, 0.1);\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  &_show {\n    display: block;\n    z-index: 3000;\n  }\n}\n.modal {\n  padding: 130px 125px 90px 60px;\n  width: 570px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  float: right;\n  background: #fff;\n  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.12);\n  position: fixed;\n  top: 0;\n  right: 0;\n  @media (max-width: 768px) {\n    padding: 130px 60px 100px;\n    width: 504px;\n  }\n\n  @media (max-width: 640px) {\n    padding: 100px 40px 46px;\n    width: 100%;\n  }\n\n  &__list {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n\n    @media (max-width: 640px) {\n      gap: 25px;\n    }\n  }\n\n  &__list-item {\n    color: var(--primary---content);\n\n    font-size: 25px;\n    font-weight: 700;\n    line-height: 140%; /* 35px */\n    letter-spacing: 0.5px;\n    cursor: pointer;\n\n    &:first-child {\n      display: none;\n    }\n\n    @media (max-width: 640px) {\n      font-size: 20px;\n\n      &:first-child {\n        display: block;\n      }\n    }\n  }\n\n  &__social {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n  }\n\n  &__link {\n  }\n}\n.close {\n  position: absolute;\n  top: 26.67px;\n  right: 20px;\n  cursor: pointer;\n}\n.contactUs {\n  padding: 92px 120px 90px 60px;\n  width: 570px;\n  height: 100%;\n  float: right;\n  background: #fff;\n  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.12);\n\n  @media (max-width: 768px) {\n    padding: 92px 54px 100px 60px;\n    width: 504px;\n  }\n\n  @media (max-width: 640px) {\n    padding: 85px 20px 40px;\n    width: 100%;\n  }\n\n  &__close {\n    position: absolute;\n    top: 28px;\n    left: 60px;\n    cursor: pointer;\n\n    @media (max-width: 640px) {\n      top: 14px;\n      left: 21px;\n    }\n  }\n\n  &__title {\n    color: var(--primary---content);\n\n    font-size: 30px;\n    font-weight: 700;\n    line-height: 140%; /* 42px */\n\n    @media (max-width: 640px) {\n      padding-right: 30px;\n      font-size: 24px;\n    }\n  }\n\n  &__form {\n    margin-top: 60px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n\n    @media (max-width: 640px) {\n      margin-top: 30px;\n    }\n  }\n\n  &__input {\n    padding-left: 44px;\n    height: 45px;\n\n    border-radius: 2px;\n    border: 1px solid var(--secondary-s-color, #d7d7d7);\n\n    color: var(--secondary---text);\n\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 159%; /* 25.44px */\n\n    &::placeholder {\n      color: var(--secondary---s-color);\n    }\n\n    &:first-child {\n      background: url("./img/NameThumb.png") left center no-repeat;\n      background-position: 9px;\n    }\n    &:nth-child(2) {\n      background: url("./img/PhoneThumb.png") left center no-repeat;\n      background-position: 9px;\n    }\n    &:nth-child(3) {\n      background: url("./img/MailThumb.png") left center no-repeat;\n      background-position: 9px;\n    }\n  }\n\n  &__btn {\n    margin-top: 30px;\n    border: none;\n\n    @media (max-width: 640px) {\n      margin-top: 75px;\n    }\n  }\n  &__social {\n    margin-top: 60px;\n  }\n\n  &__social-title {\n    color: var(--primary---content);\n\n    font-size: 20px;\n    font-weight: 600;\n    line-height: 25px; /* 125% */\n\n    @media (max-width: 640px) {\n      font-size: 18px;\n    }\n  }\n  &__social-list {\n    margin-top: 27px;\n    display: flex;\n    gap: 10px;\n  }\n\n  &__link {\n  }\n}\n.success {\n  padding: 112px 189px 0 60px;\n  width: 570px;\n  height: 100%;\n  float: right;\n  background: #fff;\n  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.12);\n\n  @media (max-width: 768px) {\n    padding-right: 123px;\n    width: 504px;\n  }\n\n  @media (max-width: 640px) {\n    padding: 174px 21px 0;\n    width: 100%;\n  }\n\n  &__close {\n    position: absolute;\n    top: 28px;\n    left: 60px;\n    cursor: pointer;\n\n    @media (max-width: 640px) {\n      top: 14px;\n      left: 21px;\n    }\n  }\n\n  &__icon {\n    width: 70px;\n    height: 70px;\n    @media (max-width: 640px) {\n      width: 50px;\n      height: 50px;\n    }\n  }\n\n  &__title {\n    margin-top: 36px;\n    color: var(--primary---content);\n\n    font-size: 30px;\n    font-weight: 700;\n    line-height: 140%; /* 42px */\n\n    @media (max-width: 640px) {\n      margin-top: 10px;\n      font-size: 24px;\n    }\n  }\n\n  &__subtitle {\n    margin-top: 6px;\n    padding-left: 1px;\n    width: 229px;\n    color: var(--secondary---text);\n\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 180%; /* 28.8px */\n    letter-spacing: 0.32px;\n  }\n}\n'],sourceRoot:""}]);let E=p},"./src/UI/button/buttonSolid/index.module.scss":(e,t,A)=>{A.r(t),A.d(t,{default:()=>C});var n=A(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=A.n(n),o=A(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */"./node_modules/style-loader/dist/runtime/styleDomAPI.js"),s=A.n(o),a=A(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */"./node_modules/style-loader/dist/runtime/insertBySelector.js"),l=A.n(a),d=A(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),r=A.n(d),c=A(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */"./node_modules/style-loader/dist/runtime/insertStyleElement.js"),p=A.n(c),m=A(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */"./node_modules/style-loader/dist/runtime/styleTagTransform.js"),x=A.n(m),h=A(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../../node_modules/sass-loader/dist/cjs.js!./index.module.scss */"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/UI/button/buttonSolid/index.module.scss"),E={};E.styleTagTransform=x(),E.setAttributes=r(),E.insert=l().bind(null,"head"),E.domAPI=s(),E.insertStyleElement=p(),i()(h.default,E);let C=h.default&&h.default.locals?h.default.locals:void 0},"./src/components/modal/index.scss":(e,t,A)=>{A.r(t),A.d(t,{default:()=>C});var n=A(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=A.n(n),o=A(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */"./node_modules/style-loader/dist/runtime/styleDomAPI.js"),s=A.n(o),a=A(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */"./node_modules/style-loader/dist/runtime/insertBySelector.js"),l=A.n(a),d=A(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),r=A.n(d),c=A(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */"./node_modules/style-loader/dist/runtime/insertStyleElement.js"),p=A.n(c),m=A(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */"./node_modules/style-loader/dist/runtime/styleTagTransform.js"),x=A.n(m),h=A(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./index.scss */"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/modal/index.scss"),E={};E.styleTagTransform=x(),E.setAttributes=r(),E.insert=l().bind(null,"head"),E.domAPI=s(),E.insertStyleElement=p(),i()(h.default,E);let C=h.default&&h.default.locals?h.default.locals:void 0},"./src/components/modal/img/MailThumb.png":(e,t,A)=>{e.exports=A.p+"assets/MailThumb.png"},"./src/components/modal/img/NameThumb.png":(e,t,A)=>{e.exports=A.p+"assets/NameThumb.png"},"./src/components/modal/img/PhoneThumb.png":(e,t,A)=>{e.exports=A.p+"assets/PhoneThumb.png"}}]);
//# sourceMappingURL=src_components_modal_Modal_jsx.js.map