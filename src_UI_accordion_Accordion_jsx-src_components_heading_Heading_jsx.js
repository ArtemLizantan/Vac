"use strict";(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["src_UI_accordion_Accordion_jsx-src_components_heading_Heading_jsx"],{"./src/UI/accordion/Accordion.jsx":(e,n,s)=>{s.r(n),s.d(n,{default:()=>A});var t=s(/*! react */"./node_modules/react/index.js"),o=s.n(t);s(/*! ./index.scss */"./src/UI/accordion/index.scss");let A=e=>{let n,{title:s,children:A}=e,d=(0,t.useRef)();return(0,t.useEffect)(()=>{n=d.current.scrollHeight},[]),window.addEventListener("resize",function(e,n,s){let t;return function(){let n=this,o=arguments,A=s&&!t;clearTimeout(t),t=setTimeout(function(){t=null,s||e.apply(n,o)},void 0),A&&e.apply(n,o)}}(()=>{n=d.current.scrollHeight})),o().createElement("div",{className:"accordion",ref:d,style:{"--heightAccordion":`${n}px`}},o().createElement("div",{className:"accordion__header",onClick:()=>{d.current.classList.toggle("accordion_active"),d.current.classList.contains("accordion_active")?d.current.style=`--heightAccordion: ${d.current.scrollHeight}px`:d.current.style=`--heightAccordion: ${n}px`}},o().createElement("div",{className:"accordion__title"},s),o().createElement("div",{className:"accordion__arrow"},o().createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o().createElement("path",{d:"M20 10L12 18L4 10",stroke:"#41456B",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})))),o().createElement("div",{className:"accordion__descr"},A))}},"./src/components/heading/Heading.jsx":(e,n,s)=>{s.r(n),s.d(n,{default:()=>d});var t=s(/*! react */"./node_modules/react/index.js"),o=s.n(t),A=s(/*! ./index.module.scss */"./src/components/heading/index.module.scss");let d=e=>{let{title:n}=e;return o().createElement("div",{className:A.default.heading},o().createElement("div",{className:"container"},o().createElement("div",{className:A.default.title},n)))}},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/UI/accordion/index.scss":(e,n,s)=>{s.r(n),s.d(n,{default:()=>i});var t=s(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */"./node_modules/css-loader/dist/runtime/sourceMaps.js"),o=s.n(t),A=s(/*! ../../../node_modules/css-loader/dist/runtime/api.js */"./node_modules/css-loader/dist/runtime/api.js"),d=s.n(A)()(o());d.push([e.id,`.accordion {
  height: var(--heightAccordion);
  border: 1px solid #d7d7d7;
  border: 1px solid var(--secondary-s-color, #d7d7d7);
  overflow: hidden;
  transition: all 0.2s;
}
.accordion_active .accordion__arrow {
  transform: rotate(-180deg);
}
.accordion_active .accordion__header {
  padding-bottom: 0;
}
.accordion_active .accordion__descr {
  display: block;
  opacity: 1;
}
.accordion__header {
  padding: 20px 30px 20px;
  display: flex;
  gap: 15px;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.2s;
}
@media (max-width: 640px) {
  .accordion__header {
    padding: 20px;
  }
}
.accordion__title {
  color: #41456b;
  color: var(--primary---content, #41456b);
  font-size: 20px;
  font-weight: 600;
  line-height: 25px; /* 125% */
}
@media (max-width: 640px) {
  .accordion__title {
    font-size: 18px;
  }
}
.accordion__arrow {
  height: 24px;
  transition: all 0.2s;
}
.accordion__descr {
  padding: 0 95px 33px 30px;
  margin-top: 10px;
  display: none;
  color: #606276;
  color: var(--secondary---text, #606276);
  font-size: 16px;
  font-weight: 400;
  line-height: 180%; /* 28.8px */
  letter-spacing: 0.32px;
  opacity: 0;
  transition: all 0.2s;
}
@media (max-width: 640px) {
  .accordion__descr {
    padding: 0 20px 20px 20px;
  }
}`,"",{version:3,sources:["webpack://./src/UI/accordion/index.scss"],names:[],mappings:"AAAA;EACE,8BAAA;EACA,yBAAA;EAAA,mDAAA;EACA,gBAAA;EACA,oBAAA;AACF;AAEI;EACE,0BAAA;AAAN;AAEI;EACE,iBAAA;AAAN;AAEI;EACE,cAAA;EACA,UAAA;AAAN;AAIE;EACE,uBAAA;EACA,aAAA;EACA,SAAA;EACA,8BAAA;EACA,eAAA;EACA,oBAAA;AAFJ;AAII;EARF;IASI,aAAA;EADJ;AACF;AAIE;EACE,cAAA;EAAA,wCAAA;EAEA,eAAA;EACA,gBAAA;EACA,iBAAA,EAAA,SAAA;AAHJ;AAKI;EAPF;IAQI,eAAA;EAFJ;AACF;AAKE;EACE,YAAA;EACA,oBAAA;AAHJ;AAME;EACE,yBAAA;EACA,gBAAA;EACA,aAAA;EACA,cAAA;EAAA,uCAAA;EAEA,eAAA;EACA,gBAAA;EACA,iBAAA,EAAA,WAAA;EACA,sBAAA;EACA,UAAA;EAEA,oBAAA;AANJ;AAQI;EAdF;IAeI,yBAAA;EALJ;AACF",sourcesContent:[".accordion {\n  height: var(--heightAccordion);\n  border: 1px solid var(--secondary-s-color, #d7d7d7);\n  overflow: hidden;\n  transition: all 0.2s;\n\n  &_active {\n    .accordion__arrow {\n      transform: rotate(-180deg);\n    }\n    .accordion__header {\n      padding-bottom: 0;\n    }\n    .accordion__descr {\n      display: block;\n      opacity: 1;\n    }\n  }\n\n  &__header {\n    padding: 20px 30px 20px;\n    display: flex;\n    gap: 15px;\n    justify-content: space-between;\n    cursor: pointer;\n    transition: all 0.2s;\n\n    @media (max-width: 640px) {\n      padding: 20px;\n    }\n  }\n\n  &__title {\n    color: var(--primary---content, #41456b);\n\n    font-size: 20px;\n    font-weight: 600;\n    line-height: 25px; /* 125% */\n\n    @media (max-width: 640px) {\n      font-size: 18px;\n    }\n  }\n\n  &__arrow {\n    height: 24px;\n    transition: all 0.2s;\n  }\n\n  &__descr {\n    padding: 0 95px 33px 30px;\n    margin-top: 10px;\n    display: none;\n    color: var(--secondary---text, #606276);\n\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 180%; /* 28.8px */\n    letter-spacing: 0.32px;\n    opacity: 0;\n\n    transition: all 0.2s;\n\n    @media (max-width: 640px) {\n      padding: 0 20px 20px 20px;\n    }\n  }\n}\n"],sourceRoot:""}]);let i=d},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/heading/index.module.scss":(e,n,s)=>{s.r(n),s.d(n,{default:()=>p});var t=s(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */"./node_modules/css-loader/dist/runtime/sourceMaps.js"),o=s.n(t),A=s(/*! ../../../node_modules/css-loader/dist/runtime/api.js */"./node_modules/css-loader/dist/runtime/api.js"),d=s.n(A),i=s(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */"./node_modules/css-loader/dist/runtime/getUrl.js"),r=s.n(i),a=new URL(s(/*! ./Bg.png */"./src/components/heading/Bg.png"),s.b),c=d()(o()),l=r()(a);c.push([e.id,`.jnq4xdXSnTNBG_xzc2cd {
  height: 145px;
  display: flex;
  align-items: center;
  background: url(${l}) center center/cover no-repeat;
}
@media (max-width: 767px) {
  .jnq4xdXSnTNBG_xzc2cd {
    height: 116px;
  }
}

.bo64ITPQGN8HdNcBeb1s {
  padding-left: 4px;
  color: var(--primary---white);
  font-size: 60px;
  font-weight: 800;
  line-height: 108.5%; /* 65.1px */
  letter-spacing: 1.2px;
}
@media (max-width: 1024px) {
  .bo64ITPQGN8HdNcBeb1s {
    padding-left: 0;
  }
}
@media (max-width: 767px) {
  .bo64ITPQGN8HdNcBeb1s {
    font-size: 35px;
    letter-spacing: 0.7px;
  }
}`,"",{version:3,sources:["webpack://./src/components/heading/index.module.scss"],names:[],mappings:"AAAA;EACE,aAAA;EACA,aAAA;EACA,mBAAA;EACA,iFAAA;AACF;AACE;EANF;IAOI,aAAA;EAEF;AACF;;AAAA;EACE,iBAAA;EACA,6BAAA;EAEA,eAAA;EACA,gBAAA;EACA,mBAAA,EAAA,WAAA;EACA,qBAAA;AAEF;AAAE;EATF;IAUI,eAAA;EAGF;AACF;AADE;EAbF;IAcI,eAAA;IACA,qBAAA;EAIF;AACF",sourcesContent:[".heading {\n  height: 145px;\n  display: flex;\n  align-items: center;\n  background: url('./Bg.png') center center/cover no-repeat;\n\n  @media (max-width: 767px) {\n    height: 116px;\n  }\n}\n.title {\n  padding-left: 4px;\n  color: var(--primary---white);\n\n  font-size: 60px;\n  font-weight: 800;\n  line-height: 108.5%; /* 65.1px */\n  letter-spacing: 1.2px;\n\n  @media (max-width: 1024px) {\n    padding-left: 0;\n  }\n\n  @media (max-width: 767px) {\n    font-size: 35px;\n    letter-spacing: 0.7px;\n  }\n}\n"],sourceRoot:""}]),c.locals={heading:"jnq4xdXSnTNBG_xzc2cd",title:"bo64ITPQGN8HdNcBeb1s"};let p=c},"./src/UI/accordion/index.scss":(e,n,s)=>{s.r(n),s.d(n,{default:()=>E});var t=s(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=s.n(t),A=s(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */"./node_modules/style-loader/dist/runtime/styleDomAPI.js"),d=s.n(A),i=s(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */"./node_modules/style-loader/dist/runtime/insertBySelector.js"),r=s.n(i),a=s(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),c=s.n(a),l=s(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */"./node_modules/style-loader/dist/runtime/insertStyleElement.js"),p=s.n(l),m=s(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */"./node_modules/style-loader/dist/runtime/styleTagTransform.js"),u=s.n(m),x=s(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./index.scss */"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/UI/accordion/index.scss"),g={};g.styleTagTransform=u(),g.setAttributes=c(),g.insert=r().bind(null,"head"),g.domAPI=d(),g.insertStyleElement=p(),o()(x.default,g);let E=x.default&&x.default.locals?x.default.locals:void 0},"./src/components/heading/index.module.scss":(e,n,s)=>{s.r(n),s.d(n,{default:()=>E});var t=s(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=s.n(t),A=s(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */"./node_modules/style-loader/dist/runtime/styleDomAPI.js"),d=s.n(A),i=s(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */"./node_modules/style-loader/dist/runtime/insertBySelector.js"),r=s.n(i),a=s(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),c=s.n(a),l=s(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */"./node_modules/style-loader/dist/runtime/insertStyleElement.js"),p=s.n(l),m=s(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */"./node_modules/style-loader/dist/runtime/styleTagTransform.js"),u=s.n(m),x=s(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./index.module.scss */"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/heading/index.module.scss"),g={};g.styleTagTransform=u(),g.setAttributes=c(),g.insert=r().bind(null,"head"),g.domAPI=d(),g.insertStyleElement=p(),o()(x.default,g);let E=x.default&&x.default.locals?x.default.locals:void 0},"./src/components/heading/Bg.png":(e,n,s)=>{e.exports=s.p+"assets/Bg.png"}}]);
//# sourceMappingURL=src_UI_accordion_Accordion_jsx-src_components_heading_Heading_jsx.js.map