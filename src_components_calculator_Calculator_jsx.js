"use strict";(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["src_components_calculator_Calculator_jsx"],{"./src/components/calculator/Calculator.jsx":(A,a,e)=>{e.r(a),e.d(a,{default:()=>r});var t=e(/*! react */"./node_modules/react/index.js"),n=e.n(t),i=e(/*! ../../UI/links/linkSolid/LinkSolid */"./src/UI/links/linkSolid/LinkSolid.jsx");e(/*! ./index.scss */"./src/components/calculator/index.scss");let r=A=>{let{mtX:a,mtM:e,mtS:r,title:c}=A,[o,l]=(0,t.useState)(1),[p,d]=(0,t.useState)(1e4),[s,m]=(0,t.useState)(1),x=A=>{let a=A.target.value,e=a/A.target.max*100;A.target.style.background=`linear-gradient(to right, #7481FF ${e}%, #ccc ${e}%)`};return n().createElement("div",{className:"calculator",style:{"--mtX":`${a}px`,"--mtM":`${e||a}px`,"--mtS":`${r||e||a}px`}},n().createElement("div",{className:"container"},n().createElement("div",{className:"calculator__header"},n().createElement("div",{"data-aos-once":"true","data-aos-duration":"1000","data-aos":"zoom-out-right","data-aos-anchor-placement":"center-center",className:"calculator__title"},c),n().createElement("div",{"data-aos-once":"true","data-aos-duration":"1000","data-aos":"zoom-out-left","data-aos-anchor-placement":"center-center",className:"calculator__subtitle"},"Before you start shopping, let’s figure out how much you can afford. Move the sliders to see how the loan duration and the total loan amount affect your monthly payments.")),n().createElement("div",{"data-aos-once":"true","data-aos-duration":"1000","data-aos":"zoom-out","data-aos-anchor-placement":"top-center",className:"calculator__wrapper"},n().createElement("div",{className:"calculator__select"},n().createElement("div",{className:"calculator__tabs",onClick:A=>{let{target:a}=A;if(a.classList.contains("calculator__tab")){let A=a.parentNode;A.childNodes.forEach(A=>{A.classList.contains("calculator__tab_active")&&A.classList.remove("calculator__tab_active")}),a.classList.add("calculator__tab_active"),l(+a.getAttribute("datatype"))}}},n().createElement("div",{className:"calculator__tab calculator__tab_active",datatype:"1"},"Poor"),n().createElement("div",{className:"calculator__tab",datatype:"2"},"Average"),n().createElement("div",{className:"calculator__tab",datatype:"3"},"Good")),n().createElement("div",{className:"calculator__range"},n().createElement("div",{className:"calculator__range-wrapper"},n().createElement("div",{className:"calculator__range-title"},"Loan Amount"),n().createElement("div",{className:"calculator__range-count"},"$ ",p*o)),n().createElement("input",{type:"range",name:"amount",id:"amount",className:"calculator__input",min:1e4,max:1e6,step:1e3,value:p,onChange:A=>{d(A.target.value),x(A)}})),n().createElement("div",{className:"calculator__range"},n().createElement("div",{className:"calculator__range-wrapper"},n().createElement("div",{className:"calculator__range-title"},"Loan Duration"),n().createElement("div",{className:"calculator__range-count"},s," ",n().createElement("span",null,"month"))),n().createElement("input",{type:"range",name:"duration",id:"duration",className:"calculator__input",min:1,max:36,value:s,step:1,onChange:A=>{m(A.target.value),x(A)}}))),n().createElement("div",{className:"calculator__price"},n().createElement("div",{className:"calculator__biweek"},n().createElement("div",{className:"calculator__price-title"},"Bi-Weekly Payment"),n().createElement("div",{className:"calculator__price-count calculator__price-count_big"},"$ ",Math.floor(p*o/s/2))),n().createElement("div",{className:"calculator__month"},n().createElement("div",{className:"calculator__price-title"},"Monthly Payment"),n().createElement("div",{className:"calculator__price-count"},"$ ",Math.floor(p*o/s))),n().createElement("div",{className:"calculator__week"},n().createElement("div",{className:"calculator__price-title"},"Weekly Payment"),n().createElement("div",{className:"calculator__price-count"},"$ ",Math.floor(p*o/s/4))),n().createElement(i.default,{to:"/quiz",wx:250,ws:"auto"},"request a car")))))}},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/calculator/index.scss":(A,a,e)=>{e.r(a),e.d(a,{default:()=>c});var t=e(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */"./node_modules/css-loader/dist/runtime/sourceMaps.js"),n=e.n(t),i=e(/*! ../../../node_modules/css-loader/dist/runtime/api.js */"./node_modules/css-loader/dist/runtime/api.js"),r=e.n(i)()(n());r.push([A.id,`.calculator {
  margin-top: var(--mtX);
}
@media (max-width: 1120px) {
  .calculator {
    margin-top: var(--mtM);
  }
}
@media (max-width: 767px) {
  .calculator {
    margin-top: var(--mtS);
  }
}
.calculator__header {
  display: flex;
  justify-content: space-between;
}
@media (max-width: 767px) {
  .calculator__header {
    flex-direction: column;
  }
}
.calculator__title {
  width: 500px;
  color: var(--primary---content);
  font-size: 45px;
  font-weight: 700;
  line-height: 140.5%;
  line-height: 140.5%;
}
@media (max-width: 1120px) {
  .calculator__title {
    width: 360px;
  }
}
@media (max-width: 767px) {
  .calculator__title {
    width: 100%;
    font-size: 30px;
  }
}
.calculator__subtitle {
  margin-top: 10px;
  width: 600px;
  color: var(--secondary---text);
  font-size: 16px;
  font-weight: 400;
  line-height: 180%;
  letter-spacing: 0.32px;
}
@media (max-width: 1120px) {
  .calculator__subtitle {
    width: 299px;
  }
}
@media (max-width: 767px) {
  .calculator__subtitle {
    width: 100%;
  }
}
.calculator__wrapper {
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
}
@media (max-width: 1120px) {
  .calculator__wrapper {
    margin: 60px auto 0;
    width: 720px;
    flex-direction: column;
    gap: 0;
  }
}
@media (max-width: 767px) {
  .calculator__wrapper {
    margin-top: 30px;
    width: 100%;
  }
}
.calculator__select {
  padding: 60px 60px 106px;
  width: 800px;
  border-radius: 5px;
  background: var(--primary---white);
  box-shadow: 0px 20px 25px 0px rgba(0, 0, 0, 0.1);
}
@media (max-width: 1120px) {
  .calculator__select {
    padding: 40px;
    width: 100%;
  }
}
@media (max-width: 767px) {
  .calculator__select {
    padding: 20px;
  }
}
.calculator__tabs {
  display: flex;
}
.calculator__tab {
  padding: 17px 19px;
  width: 139px;
  color: var(--primary---accent);
  text-align: center;
  border: 1px solid var(--primary---accent);
  font-size: 16px;
  font-weight: 700;
  line-height: 14.364px;
  letter-spacing: 0.32px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s;
}
@media (max-width: 767px) {
  .calculator__tab {
    padding: 10px 0;
    width: 105px;
  }
}
.calculator__tab:first-child {
  width: 112px;
  border-radius: 2px 0px 0px 2px;
}
@media (max-width: 767px) {
  .calculator__tab:first-child {
    width: 85.45px;
  }
}
.calculator__tab:last-child {
  width: 117px;
  border-radius: 0px 2px 2px 0px;
}
@media (max-width: 767px) {
  .calculator__tab:last-child {
    width: 88.45px;
  }
}
.calculator__tab_active {
  background: var(--primary---accent);
  color: var(--primary---white);
}
.calculator__range {
  margin-top: 57px;
}
@media (max-width: 1120px) {
  .calculator__range {
    margin-top: 37px;
  }
}
@media (max-width: 767px) {
  .calculator__range {
    margin-top: 41px;
  }
  .calculator__range:last-child {
    margin-top: 21px;
  }
}
.calculator__range-wrapper {
  display: flex;
  justify-content: space-between;
}
.calculator__range-title {
  color: var(--primary---content);
  font-size: 20px;
  font-weight: 600;
  line-height: 25px;
}
@media (max-width: 767px) {
  .calculator__range-title {
    font-size: 18px;
  }
}
.calculator__range-count {
  color: var(--primary---content);
  font-size: 25px;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: 0.5px;
}
@media (max-width: 767px) {
  .calculator__range-count {
    font-size: 20px;
  }
}
.calculator__range-count span {
  color: var(--secondary---text);
  font-size: 16px;
  font-weight: 700;
  line-height: 14.364px; /* 89.775% */
  letter-spacing: 0.32px;
  text-transform: uppercase;
}
@media (max-width: 767px) {
  .calculator__range-count span {
    font-size: 14px;
  }
}
.calculator__input {
  -webkit-appearance: none;
  -moz-appearance: none;
       appearance: none;
  margin-top: 24px;
  width: 100%;
  outline: none;
  border-radius: 2px;
  background: var(--secondary---s-color);
  cursor: pointer;
}
.calculator__input::-webkit-slider-runnable-track {
  height: 8px;
  fill: #7481ff;
  fill: var(--primary--0accent, #7481ff);
  position: relative;
}
.calculator__input::-moz-range-track {
  height: 8px;
  fill: #7481ff;
  fill: var(--primary--0accent, #7481ff);
}
.calculator__input::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  margin-top: -5px;
  width: 18px;
  height: 18px;
  border-radius: 1px;
  border: 1px solid var(--primary---white);
  background: var(--primary---accent);
}
.calculator__input::-moz-range-thumb {
  height: 15px;
  width: 15px;
  background-color: #f50;
  border-radius: 50%;
  border: none;
  -moz-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
}
.calculator__price {
  padding: 60px;
  border-radius: 5px;
  background: var(--primary---white);
  box-shadow: 0px 20px 25px 0px rgba(0, 0, 0, 0.1);
}
@media (max-width: 1120px) {
  .calculator__price {
    padding: 0 40px 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
@media (max-width: 767px) {
  .calculator__price {
    padding: 26px 20px 20px;
    width: 100%;
    gap: 10px;
  }
}
@media (max-width: 1120px) {
  .calculator__biweek {
    margin-bottom: 40px;
  }
}
@media (max-width: 767px) {
  .calculator__biweek {
    margin: 0;
  }
}
.calculator__price-title {
  color: var(--secondary---text);
  font-size: 16px;
  font-weight: 400;
  line-height: 180%; /* 28.8px */
  letter-spacing: 0.32px;
}
.calculator__price-count {
  color: var(--primary---content);
  font-size: 25px;
  font-weight: 700;
  line-height: 140%; /* 35px */
  letter-spacing: 0.5px;
}
@media (max-width: 767px) {
  .calculator__price-count {
    font-size: 20px;
  }
}
.calculator__price-count_big {
  color: var(--primary---accent);
  font-size: 45px;
  line-height: 140.5%; /* 63.225px */
}
@media (max-width: 767px) {
  .calculator__price-count_big {
    font-size: 35px;
  }
}
@media (max-width: 567px) {
  .calculator__price-count_big {
    font-size: 23px;
  }
}
.calculator__month {
  margin-top: 32px;
}
@media (max-width: 1120px) {
  .calculator__month {
    margin-top: 0;
    margin-left: 143px;
  }
}
@media (max-width: 767px) {
  .calculator__month {
    margin: 0;
  }
}
.calculator__week {
  margin-top: 20px;
  margin-bottom: 40px;
}
@media (max-width: 1120px) {
  .calculator__week {
    margin: 0;
    margin-right: 4px;
  }
}
@media (max-width: 767px) {
  .calculator__week {
    margin: 0;
  }
}
@media (max-width: 474px) {
  .calculator__week {
    margin-bottom: 30px;
  }
}`,"",{version:3,sources:["webpack://./src/components/calculator/index.scss"],names:[],mappings:"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",sourcesContent:[".calculator {\n  margin-top: var(--mtX);\n\n  @media (max-width: 1120px) {\n    margin-top: var(--mtM);\n  }\n\n  @media (max-width: 767px) {\n    margin-top: var(--mtS);\n  }\n\n  &__header {\n    display: flex;\n    justify-content: space-between;\n\n    @media (max-width: 767px) {\n      flex-direction: column;\n    }\n  }\n\n  &__title {\n    width: 500px;\n    color: var(--primary---content);\n\n    font-size: 45px;\n    font-weight: 700;\n    line-height: 140.5%;\n    line-height: 140.5%;\n\n    @media (max-width: 1120px) {\n      width: 360px;\n    }\n\n    @media (max-width: 767px) {\n      width: 100%;\n      font-size: 30px;\n    }\n  }\n\n  &__subtitle {\n    margin-top: 10px;\n    width: 600px;\n    color: var(--secondary---text);\n\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 180%;\n    letter-spacing: 0.32px;\n\n    @media (max-width: 1120px) {\n      width: 299px;\n    }\n\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n\n  &__wrapper {\n    margin-top: 60px;\n\n    display: flex;\n    justify-content: space-between;\n    gap: 10px;\n\n    @media (max-width: 1120px) {\n      margin: 60px auto 0;\n      width: 720px;\n      flex-direction: column;\n      gap: 0;\n    }\n\n    @media (max-width: 767px) {\n      margin-top: 30px;\n      width: 100%;\n    }\n  }\n\n  &__select {\n    padding: 60px 60px 106px;\n    width: 800px;\n    border-radius: 5px;\n    background: var(--primary---white);\n\n    box-shadow: 0px 20px 25px 0px rgba(0, 0, 0, 0.1);\n\n    @media (max-width: 1120px) {\n      padding: 40px;\n      width: 100%;\n    }\n\n    @media (max-width: 767px) {\n      padding: 20px;\n    }\n  }\n\n  &__tabs {\n    display: flex;\n  }\n\n  &__tab {\n    padding: 17px 19px;\n    width: 139px;\n    color: var(--primary---accent);\n    text-align: center;\n    border: 1px solid var(--primary---accent);\n\n    font-size: 16px;\n    font-weight: 700;\n    line-height: 14.364px;\n    letter-spacing: 0.32px;\n    text-transform: uppercase;\n\n    cursor: pointer;\n    transition: all 0.2s;\n\n    @media (max-width: 767px) {\n      padding: 10px 0;\n      width: 105px;\n    }\n\n    &:first-child {\n      width: 112px;\n      border-radius: 2px 0px 0px 2px;\n\n      @media (max-width: 767px) {\n        width: 85.45px;\n      }\n    }\n    &:last-child {\n      width: 117px;\n      border-radius: 0px 2px 2px 0px;\n      @media (max-width: 767px) {\n        width: 88.45px;\n      }\n    }\n    &_active {\n      background: var(--primary---accent);\n      color: var(--primary---white);\n    }\n  }\n\n  &__range {\n    margin-top: 57px;\n    @media (max-width: 1120px) {\n      margin-top: 37px;\n    }\n\n    @media (max-width: 767px) {\n      margin-top: 41px;\n\n      &:last-child {\n        margin-top: 21px;\n      }\n    }\n  }\n\n  &__range-wrapper {\n    display: flex;\n    justify-content: space-between;\n  }\n\n  &__range-title {\n    color: var(--primary---content);\n\n    font-size: 20px;\n    font-weight: 600;\n    line-height: 25px;\n\n    @media (max-width: 767px) {\n      font-size: 18px;\n    }\n  }\n\n  &__range-count {\n    color: var(--primary---content);\n\n    font-size: 25px;\n    font-weight: 700;\n    line-height: 140%;\n    letter-spacing: 0.5px;\n\n    @media (max-width: 767px) {\n      font-size: 20px;\n    }\n\n    span {\n      color: var(--secondary---text);\n\n      font-size: 16px;\n      font-weight: 700;\n      line-height: 14.364px; /* 89.775% */\n      letter-spacing: 0.32px;\n      text-transform: uppercase;\n\n      @media (max-width: 767px) {\n        font-size: 14px;\n      }\n    }\n  }\n  &__input {\n    -webkit-appearance: none;\n    appearance: none;\n    margin-top: 24px;\n    width: 100%;\n    outline: none;\n    border-radius: 2px;\n    background: var(--secondary---s-color);\n\n    cursor: pointer;\n\n    &::-webkit-slider-runnable-track {\n      height: 8px;\n      fill: var(--primary--0accent, #7481ff);\n      position: relative;\n    }\n    &::-moz-range-track {\n      height: 8px;\n      fill: var(--primary--0accent, #7481ff);\n    }\n    &::-webkit-slider-thumb {\n      -webkit-appearance: none;\n      appearance: none;\n      margin-top: calc((8px / 2) - (18px / 2));\n      width: 18px;\n      height: 18px;\n      border-radius: 1px;\n      border: 1px solid var(--primary---white);\n      background: var(--primary---accent);\n    }\n    &::-moz-range-thumb {\n      height: 15px;\n      width: 15px;\n      background-color: #f50;\n      border-radius: 50%;\n      border: none;\n      transition: 0.2s ease-in-out;\n    }\n  }\n\n  &__price {\n    padding: 60px;\n    border-radius: 5px;\n    background: var(--primary---white);\n\n    box-shadow: 0px 20px 25px 0px rgba(0, 0, 0, 0.1);\n\n    @media (max-width: 1120px) {\n      padding: 0 40px 40px;\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: space-between;\n    }\n\n    @media (max-width: 767px) {\n      padding: 26px 20px 20px;\n      width: 100%;\n      gap: 10px;\n    }\n  }\n\n  &__biweek {\n    @media (max-width: 1120px) {\n      margin-bottom: 40px;\n    }\n\n    @media (max-width: 767px) {\n      margin: 0;\n    }\n  }\n\n  &__price-title {\n    color: var(--secondary---text);\n\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 180%; /* 28.8px */\n    letter-spacing: 0.32px;\n  }\n\n  &__price-count {\n    color: var(--primary---content);\n\n    font-size: 25px;\n    font-weight: 700;\n    line-height: 140%; /* 35px */\n    letter-spacing: 0.5px;\n    @media (max-width: 767px) {\n      font-size: 20px;\n    }\n     &_big {\n      color: var(--primary---accent);\n\n      font-size: 45px;\n      line-height: 140.5%; /* 63.225px */\n\n      @media (max-width: 767px) {\n        font-size: 35px;\n      }\n      @media(max-width: 567px) {\n        font-size: 23px;\n      }\n    }\n  }\n\n  &__month {\n    margin-top: 32px;\n\n    @media (max-width: 1120px) {\n      margin-top: 0;\n      margin-left: 143px;\n    }\n\n    @media (max-width: 767px) {\n      margin: 0;\n    }\n  }\n\n  &__week {\n    margin-top: 20px;\n    margin-bottom: 40px;\n    @media (max-width: 1120px) {\n      margin: 0;\n      margin-right: 4px;\n    }\n\n    @media (max-width: 767px) {\n      margin: 0;\n    }\n\n    @media (max-width: 474px) {\n      margin-bottom: 30px;\n    }\n  }\n}\n"],sourceRoot:""}]);let c=r},"./src/components/calculator/index.scss":(A,a,e)=>{e.r(a),e.d(a,{default:()=>_});var t=e(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=e.n(t),i=e(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */"./node_modules/style-loader/dist/runtime/styleDomAPI.js"),r=e.n(i),c=e(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */"./node_modules/style-loader/dist/runtime/insertBySelector.js"),o=e.n(c),l=e(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),p=e.n(l),d=e(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */"./node_modules/style-loader/dist/runtime/insertStyleElement.js"),s=e.n(d),m=e(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */"./node_modules/style-loader/dist/runtime/styleTagTransform.js"),x=e.n(m),E=e(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./index.scss */"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/calculator/index.scss"),u={};u.styleTagTransform=x(),u.setAttributes=p(),u.insert=o().bind(null,"head"),u.domAPI=r(),u.insertStyleElement=s(),n()(E.default,u);let _=E.default&&E.default.locals?E.default.locals:void 0}}]);
//# sourceMappingURL=src_components_calculator_Calculator_jsx.js.map