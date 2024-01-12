"use strict";(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["src_pages_quiz_index_jsx"],{"./src/UI/button/buttonSolid/BtnSolid.jsx":(e,t,n)=>{n.r(t),n.d(t,{default:()=>A});var a=n(/*! react */"./node_modules/react/index.js"),r=n.n(a),l=n(/*! ./index.module.scss */"./src/UI/button/buttonSolid/index.module.scss");let A=e=>{let{children:t,onClick:n,disabled:a,wx:A,wm:i,ws:s}=e;return a?r().createElement("div",{className:`${l.default.btn}  ${l.default.btnDisable}`,style:{"--width":`${A}px`,"--widthM":`${i||A}px`,"--widthS":`${"auto"==s?"100%":`${s||i||A}px`}`}},t):r().createElement("div",{className:l.default.btn,onClick:n,style:{"--width":`${A}px`,"--widthM":`${i||A}px`,"--widthS":`${"auto"==s?"100%":`${s||i||A}px`}`}},t)}},"./src/pages/quiz/index.jsx":(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var a=n(/*! react */"./node_modules/react/index.js"),r=n.n(a),l=n(/*! react-helmet */"./node_modules/react-helmet/es/Helmet.js"),A=n(/*! ../../UI/button/buttonSolid/BtnSolid */"./src/UI/button/buttonSolid/BtnSolid.jsx"),i=n(/*! ../../UI/links/linkSolid/LinkSolid */"./src/UI/links/linkSolid/LinkSolid.jsx"),s=n(/*! ./index.module.scss */"./src/pages/quiz/index.module.scss");let o=e=>{let{setFooter:t}=e,n=(0,a.useRef)();(0,a.useEffect)(()=>{t(!0),I(!0),c(1)},[]),(0,a.useEffect)(()=>()=>{t(!1),I(!0)},[]);let o=e=>{let{title:t,onClick:n}=e;return r().createElement("div",{className:s.default.btn,onClick:n},t)},d=e=>{if(e.target.classList.contains(s.default.btn)){let t=e.target.parentNode;t.childNodes.forEach(e=>{e.classList.contains(s.default.btn_active)&&e.classList.remove(s.default.btn_active)}),e.target.classList.add(s.default.btn_active)}};function c(e){let t=e/11*100;console.log(n,t),n.current.style.background=`linear-gradient(to right, #7380FF ${t}%, #F1F1F1 ${t}%)`}let m=r().createElement(r().Fragment,null,r().createElement("div",{className:s.default.title},"What's your budget?"),r().createElement("div",{className:s.default.subtitle},"Find vehicle options that fit your budget."),r().createElement("div",{className:s.default.group,onClick:d},r().createElement(o,{title:"Under $250/Month"}),r().createElement(o,{title:"$250-374/Month"}),r().createElement(o,{title:"$374-500/Month"}),r().createElement(o,{title:"Over $500/Month"})),r().createElement("div",{className:s.default.btnWrapper},r().createElement(A.default,{wx:222,ws:"auto",onClick:()=>{F(p),c(2)}},"Сontinue"))),p=r().createElement(r().Fragment,null,r().createElement("div",{className:s.default.title},"What's your employment status?"),r().createElement("div",{className:s.default.subtitle},"Your employment status will help determine the best vehicle and financing options for you."),r().createElement("div",{className:s.default.group,onClick:d},r().createElement(o,{title:"Employed",onClick:()=>{F(E),c(4)}}),r().createElement(o,{title:"Self-Employed",onClick:()=>{F(E),c(4)}}),r().createElement(o,{title:"Student",onClick:()=>{F(u),c(4)}}),r().createElement(o,{title:"Retired / Pension",onClick:()=>{F(h),c(4)}}),r().createElement(o,{title:"Other",onClick:()=>{F(v),c(3)}})),r().createElement("div",{className:s.default.btnWrapper},r().createElement(A.default,{wx:222,ws:"auto"},"Сontinue"),r().createElement("div",{className:s.default.back,onClick:()=>{F(m),c(1)}},r().createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r().createElement("path",{d:"M14 20L6 12L14 4",stroke:"#606276","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})),"Back"))),u=r().createElement(r().Fragment,null,r().createElement("div",{className:s.default.title},"Enter your monthly income"),r().createElement("div",{className:s.default.subtitle},"Your income details help us make sure your vehicle payments are easy and affordable. Before taxes and deductions."),r().createElement("div",{className:s.default.inputWrapper},r().createElement("input",{type:"text",name:"income",id:"income",className:s.default.input,placeholder:"Monthly income"})),r().createElement("div",{className:s.default.btnWrapper},r().createElement(A.default,{wx:222,ws:"auto",onClick:()=>{F(g),c(7)}},"Сontinue"),r().createElement("div",{className:s.default.back,onClick:()=>{F(p),c(2)}},r().createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r().createElement("path",{d:"M14 20L6 12L14 4",stroke:"#606276","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})),"Back"))),E=r().createElement(r().Fragment,null,r().createElement("div",{className:s.default.title},"Enter your monthly income"),r().createElement("div",{className:s.default.subtitle},"Your income details help us make sure your vehicle payments are easy and affordable. Before taxes and deductions."),r().createElement("div",{className:s.default.inputWrapper},r().createElement("input",{type:"text",name:"income",id:"income",className:s.default.input,placeholder:"Monthly income"})),r().createElement("div",{className:s.default.btnWrapper},r().createElement(A.default,{wx:222,ws:"auto",onClick:()=>{F(f),c(6)}},"Сontinue"),r().createElement("div",{className:s.default.back,onClick:()=>{F(p),c(2)}},r().createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r().createElement("path",{d:"M14 20L6 12L14 4",stroke:"#606276","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})),"Back"))),x=r().createElement(r().Fragment,null,r().createElement("div",{className:s.default.title},"Enter your monthly income"),r().createElement("div",{className:s.default.subtitle},"Your income details help us make sure your vehicle payments are easy and affordable. Before taxes and deductions."),r().createElement("div",{className:s.default.inputWrapper},r().createElement("input",{type:"text",name:"income",id:"income",className:s.default.input,placeholder:"Monthly income"})),r().createElement("div",{className:s.default.btnWrapper},r().createElement(A.default,{wx:222,ws:"auto",onClick:()=>{F(C),c(8)}},"Сontinue"),r().createElement("div",{className:s.default.back,onClick:()=>{F(v),c(3)}},r().createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r().createElement("path",{d:"M14 20L6 12L14 4",stroke:"#606276","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})),"Back"))),h=r().createElement(r().Fragment,null,r().createElement("div",{className:s.default.title},"Enter your monthly income"),r().createElement("div",{className:s.default.subtitle},"Your income details help us make sure your vehicle payments are easy and affordable. Before taxes and deductions."),r().createElement("div",{className:s.default.inputWrapper},r().createElement("input",{type:"text",name:"income",id:"income",className:s.default.input,placeholder:"Monthly income"})),r().createElement("div",{className:s.default.btnWrapper},r().createElement(A.default,{wx:222,ws:"auto",onClick:()=>{F(w),c(5)}},"Сontinue"),r().createElement("div",{className:s.default.back,onClick:()=>{F(p),c(2)}},r().createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r().createElement("path",{d:"M14 20L6 12L14 4",stroke:"#606276","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})),"Back"))),f=r().createElement(r().Fragment,null,r().createElement("div",{className:s.default.title},"Tell us about your employment"),r().createElement("div",{className:s.default.subtitle},"We won’t come visit but we need these details to confirm your employment status so you can get the best rates possible."),r().createElement("div",{className:s.default.inputWrapper},r().createElement("input",{type:"text",name:"employer",id:"employer",className:s.default.input,placeholder:"Employer"}),r().createElement("input",{type:"text",name:"title",id:"title",className:s.default.input,placeholder:"Title"})),r().createElement("div",{className:s.default.btnWrapper},r().createElement(A.default,{wx:222,ws:"auto",onClick:()=>{F(g),c(7)}},"Сontinue"),r().createElement("div",{className:s.default.back,onClick:()=>{F(E),c(4)}},r().createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r().createElement("path",{d:"M14 20L6 12L14 4",stroke:"#606276","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})),"Back"))),g=r().createElement(r().Fragment,null,r().createElement("div",{className:s.default.title},"How long have you been earning this income?"),r().createElement("div",{className:s.default.subtitle},"Your income details help us make sure your vehicle payments are easy and affordable."),r().createElement("div",{className:s.default.inputDateWrapper},r().createElement("input",{type:"text",name:"employer",id:"employer",className:s.default.inputDate,placeholder:"Years"}),r().createElement("input",{type:"text",name:"title",id:"title",className:s.default.inputDate,placeholder:"Mounths"})),r().createElement("div",{className:s.default.btnWrapper},r().createElement(A.default,{wx:222,ws:"auto",onClick:()=>{F(C),c(8)}},"Сontinue"),r().createElement("div",{className:s.default.back,onClick:()=>{F(p),c(2)}},r().createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r().createElement("path",{d:"M14 20L6 12L14 4",stroke:"#606276","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})),"Back"))),w=r().createElement(r().Fragment,null,r().createElement("div",{className:s.default.title},"Are you currently working?"),r().createElement("div",{className:s.default.subtitle},"Your employment status will help determing the best vehicle and financing options for you."),r().createElement("div",{className:s.default.group,onClick:d},r().createElement(o,{title:"Yes"}),r().createElement(o,{title:"No"})),r().createElement("div",{className:s.default.btnWrapper},r().createElement(A.default,{wx:222,ws:"auto",onClick:()=>F(C)},"Сontinue"),r().createElement("div",{className:s.default.back,onClick:()=>F(u)},r().createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r().createElement("path",{d:"M14 20L6 12L14 4",stroke:"#606276","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})),"Back"))),v=r().createElement(r().Fragment,null,r().createElement("div",{className:s.default.title},"Enter your monthly income"),r().createElement("div",{className:s.default.subtitle},"Your employment status will help determine the best vehicle and financing options for you."),r().createElement("div",{className:s.default.group,onClick:d},r().createElement(o,{title:"Long-term disable"}),r().createElement(o,{title:"Spousal support / Alimony"}),r().createElement(o,{title:"Child support"}),r().createElement(o,{title:"Social assistance / Welfare"}),r().createElement(o,{title:"Maternity leave"}),r().createElement(o,{title:"Baby bonus / Child tax"}),r().createElement(o,{title:"Unemployed / El"}),r().createElement(o,{title:"Other / Not listed"})),r().createElement("div",{className:s.default.btnWrapper},r().createElement(A.default,{wx:222,ws:"auto",onClick:()=>{F(x),c(4)}},"Сontinue"),r().createElement("div",{className:s.default.back,onClick:()=>{F(p),c(2)}},r().createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r().createElement("path",{d:"M14 20L6 12L14 4",stroke:"#606276","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})),"Back"))),C=r().createElement(r().Fragment,null,r().createElement("div",{className:s.default.title},"How long receiving?"),r().createElement("div",{className:s.default.subtitle},"Your income details help us make sure your vehicle payments are easy and affordable."),r().createElement("div",{className:s.default.inputWrapper},r().createElement("input",{type:"text",name:"time",id:"time",className:s.default.input,placeholder:"Time"})),r().createElement("div",{className:s.default.btnWrapper},r().createElement(A.default,{wx:222,ws:"auto",onClick:()=>{F(y),c(9)}},"Сontinue"),r().createElement("div",{className:s.default.back,onClick:()=>{F(m),c(2)}},r().createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r().createElement("path",{d:"M14 20L6 12L14 4",stroke:"#606276","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})),"Back"))),y=r().createElement(r().Fragment,null,r().createElement("div",{className:s.default.title},"Where do you live?"),r().createElement("div",{className:s.default.subtitle},"Providing your location helps find the best deals near you."),r().createElement("div",{className:s.default.inputWrapper},r().createElement("input",{type:"text",name:"address",id:"address",className:s.default.input,placeholder:"Street address"}),r().createElement("input",{type:"text",name:"city",id:"city",className:s.default.input,placeholder:"City"}),r().createElement("div",{className:s.default.doubleInputWrapper},r().createElement("input",{type:"text",name:"province",id:"province",placeholder:"Province",className:s.default.input}),r().createElement("input",{type:"text",name:"code",id:"code",placeholder:"Postal code",className:s.default.input}))),r().createElement("div",{className:s.default.btnWrapper},r().createElement(A.default,{wx:222,ws:"auto",onClick:()=>{F(b),c(10)}},"Сontinue"),r().createElement("div",{className:s.default.back,onClick:()=>{F(C),c(8)}},r().createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r().createElement("path",{d:"M14 20L6 12L14 4",stroke:"#606276","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})),"Back"))),b=r().createElement(r().Fragment,null,r().createElement("div",{className:s.default.title},"When were you born?"),r().createElement("div",{className:s.default.inputWrapper},r().createElement("div",{className:s.default.doubleInputWrapper},r().createElement("input",{type:"text",name:"year",id:"year",className:s.default.input,placeholder:"Year"}),r().createElement("div",{className:s.default.doubleInputWrapper},r().createElement("input",{type:"text",name:"mounth",id:"mounth",placeholder:"Mounth",className:s.default.input}),r().createElement("input",{type:"text",name:"day",id:"day",placeholder:"Day",className:s.default.input})))),r().createElement("div",{className:s.default.btnWrapper},r().createElement(A.default,{wx:222,ws:"auto",onClick:()=>{F(k),c(11)}},"Сontinue"),r().createElement("div",{className:s.default.back,onClick:()=>{F(y),c(9)}},r().createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r().createElement("path",{d:"M14 20L6 12L14 4",stroke:"#606276","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})),"Back"))),k=r().createElement(r().Fragment,null,r().createElement("div",{className:s.default.title},"Congratulations! Last step."),r().createElement("div",{className:s.default.subtitle},"Get access to your vehicle and financing options by creating your account. There is no obligation to continue with financing if you change your mind."," "),r().createElement("div",{className:s.default.inputWrapper},r().createElement("div",{className:s.default.doubleInputWrapper},r().createElement("input",{type:"text",name:"firstName",id:"firstName",className:s.default.input,placeholder:"First name"}),r().createElement("input",{type:"text",name:"lastName",id:"lastName",className:s.default.input,placeholder:"Last name"})),r().createElement("input",{type:"text",name:"email",id:"email",className:s.default.input,placeholder:"Email"}),r().createElement("input",{type:"text",name:"number",id:"number",className:s.default.input,placeholder:"Phone number"})),r().createElement("div",{className:s.default.btnWrapper},r().createElement(A.default,{wx:222,ws:"auto",onClick:()=>{F(B),I(!1)}},"Сontinue"),r().createElement("div",{className:s.default.back,onClick:()=>{F(b),c(10)}},r().createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r().createElement("path",{d:"M14 20L6 12L14 4",stroke:"#606276","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})),"Back"))),B=r().createElement(r().Fragment,null,r().createElement("div",{className:s.default.img},r().createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 70 70",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r().createElement("circle",{cx:"35",cy:"35",r:"33.5",stroke:"#7481FF","stroke-width":"3"}),r().createElement("path",{d:"M21 37.2925L32.3077 47.6L50.4 21",stroke:"#7481FF","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"}))),r().createElement("div",{className:s.default.titleSuccess},"Application successful!"),r().createElement("div",{className:s.default.subtitleSuccess},"Your response was successfully submitted. Thank you! Our team will reach out to you shortly."),r().createElement("div",{className:s.default.label},"Confirmation number:"),r().createElement("input",{type:"text",name:"id",id:"id",className:s.default.inputSuccess,value:"0002466-1vwrh0",disabled:!0}),r().createElement("div",{className:s.default.btnWrapper},r().createElement(i.default,{wx:222,ws:"auto",to:"/"},"go to main page"))),[N,F]=(0,a.useState)(m),[j,I]=(0,a.useState)(!0);return r().createElement("div",{className:s.default.section},r().createElement(l.Helmet,null,r().createElement("title",null,"Quiz - VAC")),r().createElement("div",{className:"container"},r().createElement("div",{className:s.default.wrapper},r().createElement("div",{className:s.default.progress,ref:n,style:{display:`${j?"block":"none"}`}}),N)))}},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/UI/button/buttonSolid/index.module.scss":(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */"./node_modules/css-loader/dist/runtime/sourceMaps.js"),r=n.n(a),l=n(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */"./node_modules/css-loader/dist/runtime/api.js"),A=n.n(l)()(r());A.push([e.id,`.tix8M3CTrkeUnH8GPf3w {
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
}`,"",{version:3,sources:["webpack://./src/UI/button/buttonSolid/index.module.scss"],names:[],mappings:"AAAA;EACE,mBAAA;EACA,YAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;EAEA,kBAAA;EACA,mCAAA;EAEA,eAAA;EACA,gBAAA;EACA,qBAAA;EACA,sBAAA;EACA,yBAAA;EACA,6BAAA;EAEA,oBAAA;EACA,eAAA;AAHF;AAKE;EACE,kCAAA;AAHJ;AAKE;EAxBF;IAyBI,oBAAA;EAFF;AACF;AAGE;EA3BF;IA4BI,oBAAA;IACA,YAAA;IACA,eAAA;EAAF;AACF;;AAEA;EACE,oCAAA;EACA,eAAA;AACF;AAAE;EACE,oCAAA;AAEJ",sourcesContent:[".btn {\n  width: var(--width);\n  height: 45px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  border-radius: 2px;\n  background: var(--primary---accent);\n\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 14.364px;\n  letter-spacing: 0.32px;\n  text-transform: uppercase;\n  color: var(--primary---white);\n\n  transition: all 0.2s;\n  cursor: pointer;\n\n  &:hover {\n    background: var(--hover---primary);\n  }\n  @media (max-width: 768px) {\n    width: var(--widthM);\n  }\n  @media (max-width: 425px) {\n    width: var(--widthS);\n    height: 35px;\n    font-size: 14px;\n  }\n}\n.btnDisable {\n  background: rgba(#7481ff, 0.5);\n  cursor: default;\n  &:hover {\n    background: rgba(#7481ff, 0.5);\n  }\n}\n"],sourceRoot:""}]),A.locals={btn:"tix8M3CTrkeUnH8GPf3w",btnDisable:"U_qys_v0Ksd1xaNRV5vV"};let i=A},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/quiz/index.module.scss":(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */"./node_modules/css-loader/dist/runtime/sourceMaps.js"),r=n.n(a),l=n(/*! ../../../node_modules/css-loader/dist/runtime/api.js */"./node_modules/css-loader/dist/runtime/api.js"),A=n.n(l)()(r());A.push([e.id,`.lsP0ERoQWqnm2MZySokh {
  margin-top: 40px;
  width: 100%;
  height: 100%;
  z-index: 20;
  background: #fff;
}
@media (max-width: 640px) {
  .lsP0ERoQWqnm2MZySokh {
    margin-top: 30px;
  }
}

.OnJ1mxQ9grk1Pv0BDcTb {
  margin: 0 auto;
  width: 454px;
}
@media (max-width: 640px) {
  .OnJ1mxQ9grk1Pv0BDcTb {
    width: 100%;
  }
}

.jzHphsO1GggcUx0WzsBp {
  width: 100%;
  height: 8px;
  border-radius: 2px;
}

.rdOr3Z3eOVb8u22IsjhA,
.cHGIDV_unP8OXwoZLWVQ {
  margin-top: 60px;
  color: #41456b;
  color: var(--main---color, #41456b);
  font-size: 25px;
  font-weight: 700;
  line-height: 140%; /* 35px */
  letter-spacing: 0.5px;
}
@media (max-width: 640px) {
  .rdOr3Z3eOVb8u22IsjhA,
  .cHGIDV_unP8OXwoZLWVQ {
    margin-top: 30px;
    font-size: 20px;
  }
}

.LCpO8AR2_ihkLqJNLYyH,
.S_OAjWYYV9eIeiRUtQ5n {
  margin-top: 5px;
  color: #7c7a84;
  color: var(--text---color, #7c7a84);
  /* Text / Regular 16 */
  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 159%; /* 25.44px */
}

.eYHKe2CJ_PviQGCavKqZ {
  margin-top: 40px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
@media (max-width: 640px) {
  .eYHKe2CJ_PviQGCavKqZ {
    margin-top: 20px;
    justify-content: center;
  }
}

.t1bc9EfWjL9x1yykRBVh {
  width: 222px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  border: 1px solid #f1f1f1;
  border: 1px solid var(--dark---grey, #f1f1f1);
  color: #7c7a84;
  color: var(--text---color, #7c7a84);
  font-size: 16px;
  font-weight: 600;
  line-height: 14.364px; /* 89.775% */
  cursor: pointer;
  transition: all 0.2s;
}
.t1bc9EfWjL9x1yykRBVh:hover {
  border-color: #cecece;
}
.t5Jf9fpSphDr7RK8WAHs {
  border-color: #cecece;
}
@media (max-width: 640px) {
  .t1bc9EfWjL9x1yykRBVh {
    width: 100%;
    font-size: 14px;
  }
}

.ws8SqPZcQnWv8eyZqbpV {
  margin-top: 40px;
  display: flex;
}
@media (max-width: 640px) {
  .ws8SqPZcQnWv8eyZqbpV {
    margin-top: 30px;
    flex-direction: row-reverse;
    justify-content: space-between;
    gap: 53px;
  }
}
@media (max-width: 425px) {
  .ws8SqPZcQnWv8eyZqbpV {
    justify-content: flex-start;
  }
}

.sgke3Ry9toO4R3Y33ZTe {
  margin-left: 60px;
  display: flex;
  align-items: center;
  gap: 5px;
  color: #606276;
  color: var(--secondary---text, #606276);
  font-size: 16px;
  font-weight: 700;
  line-height: 14.364px; /* 89.775% */
  letter-spacing: 0.32px;
  text-transform: uppercase;
  cursor: pointer;
}
@media (max-width: 425px) {
  .sgke3Ry9toO4R3Y33ZTe {
    margin-left: 44px;
    gap: 2px;
    font-size: 14px;
  }
}

.c3ZkwIdADO74BLVc7FDQ {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
@media (max-width: 425px) {
  .c3ZkwIdADO74BLVc7FDQ {
    margin-top: 20px;
  }
}

._vbNuFd3jCmZD2wl7z_V {
  padding-left: 20px;
  width: 100%;
  height: 45px;
  border-radius: 2px;
  border: 1px solid #d7d7d7;
  border: 1px solid var(--secondary-s-color, #d7d7d7);
  background: #fff;
  background: var(--primary-white, #fff);
  color: #7575a1;
  font-size: 16px;
  font-weight: 500;
  line-height: 159%; /* 25.44px */
}
._vbNuFd3jCmZD2wl7z_V::-moz-placeholder {
  color: #d7d7d7;
  color: var(--secondary---s-color, #d7d7d7);
}
._vbNuFd3jCmZD2wl7z_V::placeholder {
  color: #d7d7d7;
  color: var(--secondary---s-color, #d7d7d7);
}
._vbNuFd3jCmZD2wl7z_V:focus {
  outline: none;
}
@media (max-width: 425px) {
  ._vbNuFd3jCmZD2wl7z_V {
    font-size: 14px;
  }
}

.A8sfEC7VcmgP5zqn6hMB {
  display: flex;
  gap: 10px;
}
@media (max-width: 425px) {
  .A8sfEC7VcmgP5zqn6hMB {
    flex-direction: column;
  }
}

.JTbUERavvHtPF3guE7bL {
  margin-top: 40px;
  display: flex;
  gap: 10px;
}
@media (max-width: 640px) {
  .JTbUERavvHtPF3guE7bL {
    margin-top: 20px;
    flex-direction: column;
  }
}

.Z0ZXCRYFQ5NGpjCacedm,
._8l2BUVYlg495_cFvjNZo {
  padding-left: 20px;
  width: calc(50% - 10px);
  height: 45px;
  border-radius: 2px;
  border: 1px solid #d7d7d7;
  border: 1px solid var(--secondary-s-color, #d7d7d7);
  background: #fff;
  background: var(--primary-white, #fff);
  color: #7575a1;
  font-size: 16px;
  font-weight: 500;
  line-height: 159%; /* 25.44px */
}
.Z0ZXCRYFQ5NGpjCacedm::-moz-placeholder, ._8l2BUVYlg495_cFvjNZo::-moz-placeholder {
  color: #d7d7d7;
  color: var(--secondary---s-color, #d7d7d7);
}
.Z0ZXCRYFQ5NGpjCacedm::placeholder,
._8l2BUVYlg495_cFvjNZo::placeholder {
  color: #d7d7d7;
  color: var(--secondary---s-color, #d7d7d7);
}
.Z0ZXCRYFQ5NGpjCacedm:focus,
._8l2BUVYlg495_cFvjNZo:focus {
  outline: none;
}
@media (max-width: 640px) {
  .Z0ZXCRYFQ5NGpjCacedm,
  ._8l2BUVYlg495_cFvjNZo {
    width: 100%;
    font-size: 14px;
  }
}

.cHGIDV_unP8OXwoZLWVQ {
  margin-top: 20px;
}
@media (max-width: 425px) {
  .cHGIDV_unP8OXwoZLWVQ {
    margin-top: 10px;
  }
}

.IDaVg4Y3b0qZ7YQVpRpU {
  margin-top: 33px;
  color: #41456b;
  color: var(--Main-Color, #41456b);
  font-size: 20px;
  font-weight: 600;
  line-height: 34px; /* 170% */
}
@media (max-width: 425px) {
  .IDaVg4Y3b0qZ7YQVpRpU {
    margin-top: 20px;
    font-size: 18px;
  }
}

._8l2BUVYlg495_cFvjNZo {
  margin-top: 5px;
}

.W995b1jecCti7ya33RnQ {
  margin-top: 109px;
  width: 70px;
  height: 70px;
}
@media (max-width: 425px) {
  .W995b1jecCti7ya33RnQ {
    margin-top: 30px;
    width: 50px;
    height: 50px;
  }
}`,"",{version:3,sources:["webpack://./src/pages/quiz/index.module.scss"],names:[],mappings:"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",sourcesContent:[".section {\r\n  margin-top: 40px;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 20;\r\n  background: #fff;\r\n\r\n  @media (max-width: 640px) {\r\n    margin-top: 30px;\r\n  }\r\n}\r\n.wrapper {\r\n  margin: 0 auto;\r\n  width: 454px;\r\n\r\n  @media (max-width: 640px) {\r\n    width: 100%;\r\n  }\r\n}\r\n.progress {\r\n  width: 100%;\r\n  height: 8px;\r\n  border-radius: 2px;\r\n}\r\n.title,\r\n.titleSuccess {\r\n  margin-top: 60px;\r\n  color: var(--main---color, #41456b);\r\n\r\n  font-size: 25px;\r\n  font-weight: 700;\r\n  line-height: 140%; /* 35px */\r\n  letter-spacing: 0.5px;\r\n\r\n  @media (max-width: 640px) {\r\n    margin-top: 30px;\r\n    font-size: 20px;\r\n  }\r\n}\r\n.subtitle,\r\n.subtitleSuccess {\r\n  margin-top: 5px;\r\n  color: var(--text---color, #7c7a84);\r\n\r\n  /* Text / Regular 16 */\r\n  font-family: Gilroy;\r\n  font-size: 16px;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  line-height: 159%; /* 25.44px */\r\n}\r\n.group {\r\n  margin-top: 40px;\r\n  display: flex;\r\n  gap: 10px;\r\n  flex-wrap: wrap;\r\n\r\n  @media (max-width: 640px) {\r\n    margin-top: 20px;\r\n    justify-content: center;\r\n  }\r\n}\r\n.btn {\r\n  width: 222px;\r\n  height: 45px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border-radius: 2px;\r\n  border: 1px solid var(--dark---grey, #f1f1f1);\r\n\r\n  color: var(--text---color, #7c7a84);\r\n\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  line-height: 14.364px; /* 89.775% */\r\n\r\n  cursor: pointer;\r\n  transition: all 0.2s;\r\n\r\n  &:hover {\r\n    border-color: #cecece;\r\n  }\r\n  &_active {\r\n    border-color: #cecece;\r\n  }\r\n\r\n  @media (max-width: 640px) {\r\n    width: 100%;\r\n    font-size: 14px;\r\n  }\r\n}\r\n.btnWrapper {\r\n  margin-top: 40px;\r\n  display: flex;\r\n\r\n  @media (max-width: 640px) {\r\n    margin-top: 30px;\r\n    flex-direction: row-reverse;\r\n    justify-content: space-between;\r\n    gap: 53px;\r\n  }\r\n\r\n  @media (max-width: 425px) {\r\n    justify-content: flex-start;\r\n  }\r\n}\r\n.back {\r\n  margin-left: 60px;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 5px;\r\n  color: var(--secondary---text, #606276);\r\n\r\n  font-size: 16px;\r\n  font-weight: 700;\r\n  line-height: 14.364px; /* 89.775% */\r\n  letter-spacing: 0.32px;\r\n  text-transform: uppercase;\r\n\r\n  cursor: pointer;\r\n\r\n  @media (max-width: 425px) {\r\n    margin-left: 44px;\r\n    gap: 2px;\r\n    font-size: 14px;\r\n  }\r\n}\r\n.inputWrapper {\r\n  margin-top: 40px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n\r\n  @media (max-width: 425px) {\r\n    margin-top: 20px;\r\n  }\r\n}\r\n.input {\r\n  padding-left: 20px;\r\n  width: 100%;\r\n  height: 45px;\r\n\r\n  border-radius: 2px;\r\n  border: 1px solid var(--secondary-s-color, #d7d7d7);\r\n  background: var(--primary-white, #fff);\r\n\r\n  color: #7575a1;\r\n\r\n  font-size: 16px;\r\n  font-weight: 500;\r\n  line-height: 159%; /* 25.44px */\r\n\r\n  &::placeholder {\r\n    color: var(--secondary---s-color, #d7d7d7);\r\n  }\r\n  &:focus {\r\n    outline: none;\r\n  }\r\n\r\n  @media (max-width: 425px) {\r\n    font-size: 14px;\r\n  }\r\n}\r\n\r\n.doubleInputWrapper {\r\n  display: flex;\r\n  gap: 10px;\r\n\r\n  @media (max-width: 425px) {\r\n    flex-direction: column;\r\n  }\r\n}\r\n\r\n.inputDateWrapper {\r\n  margin-top: 40px;\r\n  display: flex;\r\n  gap: 10px;\r\n\r\n  @media (max-width: 640px) {\r\n    margin-top: 20px;\r\n    flex-direction: column;\r\n  }\r\n}\r\n\r\n.inputDate,\r\n.inputSuccess {\r\n  padding-left: 20px;\r\n  width: calc(50% - 10px);\r\n  height: 45px;\r\n\r\n  border-radius: 2px;\r\n  border: 1px solid var(--secondary-s-color, #d7d7d7);\r\n  background: var(--primary-white, #fff);\r\n\r\n  color: #7575a1;\r\n\r\n  font-size: 16px;\r\n  font-weight: 500;\r\n  line-height: 159%; /* 25.44px */\r\n\r\n  &::placeholder {\r\n    color: var(--secondary---s-color, #d7d7d7);\r\n  }\r\n  &:focus {\r\n    outline: none;\r\n  }\r\n\r\n  @media (max-width: 640px) {\r\n    width: 100%;\r\n    font-size: 14px;\r\n  }\r\n}\r\n\r\n.titleSuccess {\r\n  margin-top: 20px;\r\n\r\n  @media (max-width: 425px) {\r\n    margin-top: 10px;\r\n  }\r\n}\r\n\r\n.label {\r\n  margin-top: 33px;\r\n  color: var(--Main-Color, #41456b);\r\n\r\n  font-size: 20px;\r\n  font-weight: 600;\r\n  line-height: 34px; /* 170% */\r\n\r\n  @media (max-width: 425px) {\r\n    margin-top: 20px;\r\n    font-size: 18px;\r\n  }\r\n}\r\n\r\n.inputSuccess {\r\n  margin-top: 5px;\r\n}\r\n\r\n.img {\r\n  margin-top: 109px;\r\n  width: 70px;\r\n  height: 70px;\r\n\r\n  @media (max-width: 425px) {\r\n    margin-top: 30px;\r\n    width: 50px;\r\n    height: 50px;\r\n  }\r\n}\r\n"],sourceRoot:""}]),A.locals={section:"lsP0ERoQWqnm2MZySokh",wrapper:"OnJ1mxQ9grk1Pv0BDcTb",progress:"jzHphsO1GggcUx0WzsBp",title:"rdOr3Z3eOVb8u22IsjhA",titleSuccess:"cHGIDV_unP8OXwoZLWVQ",subtitle:"LCpO8AR2_ihkLqJNLYyH",subtitleSuccess:"S_OAjWYYV9eIeiRUtQ5n",group:"eYHKe2CJ_PviQGCavKqZ",btn:"t1bc9EfWjL9x1yykRBVh",btn_active:"t5Jf9fpSphDr7RK8WAHs",btnWrapper:"ws8SqPZcQnWv8eyZqbpV",back:"sgke3Ry9toO4R3Y33ZTe",inputWrapper:"c3ZkwIdADO74BLVc7FDQ",input:"_vbNuFd3jCmZD2wl7z_V",doubleInputWrapper:"A8sfEC7VcmgP5zqn6hMB",inputDateWrapper:"JTbUERavvHtPF3guE7bL",inputDate:"Z0ZXCRYFQ5NGpjCacedm",inputSuccess:"_8l2BUVYlg495_cFvjNZo",label:"IDaVg4Y3b0qZ7YQVpRpU",img:"W995b1jecCti7ya33RnQ"};let i=A},"./src/UI/button/buttonSolid/index.module.scss":(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var a=n(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),r=n.n(a),l=n(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */"./node_modules/style-loader/dist/runtime/styleDomAPI.js"),A=n.n(l),i=n(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */"./node_modules/style-loader/dist/runtime/insertBySelector.js"),s=n.n(i),o=n(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),d=n.n(o),c=n(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */"./node_modules/style-loader/dist/runtime/insertStyleElement.js"),m=n.n(c),p=n(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */"./node_modules/style-loader/dist/runtime/styleTagTransform.js"),u=n.n(p),E=n(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../../node_modules/sass-loader/dist/cjs.js!./index.module.scss */"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/UI/button/buttonSolid/index.module.scss"),x={};x.styleTagTransform=u(),x.setAttributes=d(),x.insert=s().bind(null,"head"),x.domAPI=A(),x.insertStyleElement=m(),r()(E.default,x);let h=E.default&&E.default.locals?E.default.locals:void 0},"./src/pages/quiz/index.module.scss":(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var a=n(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),r=n.n(a),l=n(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */"./node_modules/style-loader/dist/runtime/styleDomAPI.js"),A=n.n(l),i=n(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */"./node_modules/style-loader/dist/runtime/insertBySelector.js"),s=n.n(i),o=n(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),d=n.n(o),c=n(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */"./node_modules/style-loader/dist/runtime/insertStyleElement.js"),m=n.n(c),p=n(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */"./node_modules/style-loader/dist/runtime/styleTagTransform.js"),u=n.n(p),E=n(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./index.module.scss */"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/quiz/index.module.scss"),x={};x.styleTagTransform=u(),x.setAttributes=d(),x.insert=s().bind(null,"head"),x.domAPI=A(),x.insertStyleElement=m(),r()(E.default,x);let h=E.default&&E.default.locals?E.default.locals:void 0}}]);
//# sourceMappingURL=src_pages_quiz_index_jsx.js.map