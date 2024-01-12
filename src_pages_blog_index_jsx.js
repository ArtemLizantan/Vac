"use strict";(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["src_pages_blog_index_jsx"],{"./src/components/article/Article.jsx":(e,t,s)=>{s.r(t),s.d(t,{default:()=>r});var n=s(/*! react */"./node_modules/react/index.js"),a=s.n(n),i=s(/*! react-router-dom */"./node_modules/react-router-dom/esm/react-router-dom.js");s(/*! ./index.scss */"./src/components/article/index.scss");let r=e=>{let{to:t,img:s,title:n}=e;return a().createElement(i.Link,{"data-aos-once":"true","data-aos-duration":"800","data-aos":"fade-up",to:t,className:"article"},a().createElement("div",{className:"article__img"},a().createElement("img",{src:s,alt:"img",loading:"lazy"})),a().createElement("div",{className:"article__wrapper"},a().createElement("div",{className:"article__date"},"10 May, 2020"),a().createElement("div",{className:"article__title"},n)))}},"./src/components/heading/Heading.jsx":(e,t,s)=>{s.r(t),s.d(t,{default:()=>r});var n=s(/*! react */"./node_modules/react/index.js"),a=s.n(n),i=s(/*! ./index.module.scss */"./src/components/heading/index.module.scss");let r=e=>{let{title:t}=e;return a().createElement("div",{className:i.default.heading},a().createElement("div",{className:"container"},a().createElement("div",{className:i.default.title},t)))}},"./src/pages/blog/index.jsx":(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});var n=s(/*! react */"./node_modules/react/index.js"),a=s.n(n),i=s(/*! react-helmet */"./node_modules/react-helmet/es/Helmet.js"),r=s(/*! ../../components/heading/Heading */"./src/components/heading/Heading.jsx"),A=s(/*! ./section/firstSection */"./src/pages/blog/section/firstSection/index.jsx");let d=()=>a().createElement(a().Fragment,null,a().createElement(i.Helmet,null,a().createElement("title",null,"Blog - VAC")),a().createElement(r.default,{title:"Our blog"}),a().createElement(A.default,null))},"./src/pages/blog/section/firstSection/index.jsx":(e,t,s)=>{s.r(t),s.d(t,{default:()=>x});var n=s(/*! react */"./node_modules/react/index.js"),a=s.n(n),i=s(/*! ../../../../components/article/Article */"./src/components/article/Article.jsx"),r=s(/*! ./index.module.scss */"./src/pages/blog/section/firstSection/index.module.scss"),A=s(/*! ../../../../img/articles/article1.jpg */"./src/img/articles/article1.jpg"),d=s(/*! ../../../../img/articles/article2.jpg */"./src/img/articles/article2.jpg"),l=s(/*! ../../../../img/articles/article3.jpg */"./src/img/articles/article3.jpg"),o=s(/*! ../../../../img/articles/article4.jpg */"./src/img/articles/article4.jpg"),c=s(/*! ../../../../img/articles/article5.jpg */"./src/img/articles/article5.jpg"),p=s(/*! ../../../../img/articles/article6.jpg */"./src/img/articles/article6.jpg"),m=s(/*! ../../../../img/articles/article7.jpg */"./src/img/articles/article7.jpg"),u=s(/*! ../../../../img/articles/article8.jpg */"./src/img/articles/article8.jpg"),g=s(/*! ../../../../img/articles/article9.jpg */"./src/img/articles/article9.jpg");let x=()=>a().createElement("div",{className:r.default.section},a().createElement("div",{className:"container"},a().createElement("div",{className:r.default.wrapper},a().createElement(i.default,{title:"How to save on buying a car? Why is it better to buy from us",img:A,to:"/blog/1"}),a().createElement(i.default,{title:"How fast can you order a car in Canada?",img:d,to:"/blog/2"}),a().createElement(i.default,{title:"How to save on buying a car? Why is it better to buy from us",img:l,to:"/blog/3"}),a().createElement(i.default,{title:"How to save on buying a car? Why is it better to buy from us",img:o,to:"/blog/4"}),a().createElement(i.default,{title:"How fast can you order a car in Canada?",img:c,to:"/blog/5"}),a().createElement(i.default,{title:"How to save on buying a car? Why is it better to buy from us",img:p,to:"/blog/6"}),a().createElement(i.default,{title:"How to save on buying a car? Why is it better to buy from us",img:m,to:"/blog/7"}),a().createElement(i.default,{title:"How fast can you order a car in Canada?",img:u,to:"/blog/8"}),a().createElement(i.default,{title:"How to save on buying a car? Why is it better to buy from us",img:g,to:"/blog/9"}))))},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/article/index.scss":(e,t,s)=>{s.r(t),s.d(t,{default:()=>A});var n=s(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */"./node_modules/css-loader/dist/runtime/sourceMaps.js"),a=s.n(n),i=s(/*! ../../../node_modules/css-loader/dist/runtime/api.js */"./node_modules/css-loader/dist/runtime/api.js"),r=s.n(i)()(a());r.push([e.id,`.article {
  width: 387px;
  display: block;
  filter: drop-shadow(0px 20px 25px rgba(0, 0, 0, 0.1));
}
@media (max-width: 1250px) {
  .article {
    width: 350px;
  }
}
@media (max-width: 767px) {
  .article {
    width: 320px;
  }
}
@media (max-width: 359px) {
  .article {
    width: 100%;
  }
}
.article__img {
  height: 230px;
}
.article__wrapper {
  padding: 20px 30px 30px;
  background: var(--primary---white);
}
@media (max-width: 1120px) {
  .article__wrapper {
    padding: 20px 20px 30px;
  }
}
.article__date {
  color: var(--secondary---text);
  font-size: 16px;
  font-weight: 400;
  line-height: 180%; /* 28.8px */
  letter-spacing: 0.32px;
}
.article__title {
  padding-right: 25px;
  color: var(--primary---content);
  font-size: 20px;
  font-weight: 600;
  line-height: 25px; /* 125% */
}
@media (max-width: 1120px) {
  .article__title {
    padding-right: 22px;
  }
}
@media (max-width: 767px) {
  .article__title {
    padding-right: 0;
    font-size: 18px;
  }
}`,"",{version:3,sources:["webpack://./src/components/article/index.scss"],names:[],mappings:"AAAA;EACE,YAAA;EACA,cAAA;EAEA,qDAAA;AAAF;AAEE;EANF;IAOI,YAAA;EACF;AACF;AACE;EAVF;IAWI,YAAA;EAEF;AACF;AAAE;EAdF;IAeI,WAAA;EAGF;AACF;AADE;EACE,aAAA;AAGJ;AAAE;EACE,uBAAA;EACA,kCAAA;AAEJ;AAAI;EAJF;IAKI,uBAAA;EAGJ;AACF;AAAE;EACE,8BAAA;EAEA,eAAA;EACA,gBAAA;EACA,iBAAA,EAAA,WAAA;EACA,sBAAA;AACJ;AAEE;EACE,mBAAA;EACA,+BAAA;EAEA,eAAA;EACA,gBAAA;EACA,iBAAA,EAAA,SAAA;AADJ;AAGI;EARF;IASI,mBAAA;EAAJ;AACF;AAEI;EAZF;IAaI,gBAAA;IACA,eAAA;EACJ;AACF",sourcesContent:[".article {\n  width: 387px;\n  display: block;\n\n  filter: drop-shadow(0px 20px 25px rgba(0, 0, 0, 0.1));\n\n  @media (max-width: 1250px) {\n    width: 350px;\n  }\n\n  @media (max-width: 767px) {\n    width: 320px;\n  }\n\n  @media (max-width: 359px) {\n    width: 100%;\n  }\n\n  &__img {\n    height: 230px;\n  }\n\n  &__wrapper {\n    padding: 20px 30px 30px;\n    background: var(--primary---white);\n\n    @media (max-width: 1120px) {\n      padding: 20px 20px 30px;\n    }\n  }\n\n  &__date {\n    color: var(--secondary---text);\n\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 180%; /* 28.8px */\n    letter-spacing: 0.32px;\n  }\n\n  &__title {\n    padding-right: 25px;\n    color: var(--primary---content);\n\n    font-size: 20px;\n    font-weight: 600;\n    line-height: 25px; /* 125% */\n\n    @media (max-width: 1120px) {\n      padding-right: 22px;\n    }\n\n    @media (max-width: 767px) {\n      padding-right: 0;\n      font-size: 18px;\n    }\n  }\n}\n"],sourceRoot:""}]);let A=r},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/heading/index.module.scss":(e,t,s)=>{s.r(t),s.d(t,{default:()=>p});var n=s(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */"./node_modules/css-loader/dist/runtime/sourceMaps.js"),a=s.n(n),i=s(/*! ../../../node_modules/css-loader/dist/runtime/api.js */"./node_modules/css-loader/dist/runtime/api.js"),r=s.n(i),A=s(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */"./node_modules/css-loader/dist/runtime/getUrl.js"),d=s.n(A),l=new URL(s(/*! ./Bg.png */"./src/components/heading/Bg.png"),s.b),o=r()(a()),c=d()(l);o.push([e.id,`.jnq4xdXSnTNBG_xzc2cd {
  height: 145px;
  display: flex;
  align-items: center;
  background: url(${c}) center center/cover no-repeat;
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
}`,"",{version:3,sources:["webpack://./src/components/heading/index.module.scss"],names:[],mappings:"AAAA;EACE,aAAA;EACA,aAAA;EACA,mBAAA;EACA,iFAAA;AACF;AACE;EANF;IAOI,aAAA;EAEF;AACF;;AAAA;EACE,iBAAA;EACA,6BAAA;EAEA,eAAA;EACA,gBAAA;EACA,mBAAA,EAAA,WAAA;EACA,qBAAA;AAEF;AAAE;EATF;IAUI,eAAA;EAGF;AACF;AADE;EAbF;IAcI,eAAA;IACA,qBAAA;EAIF;AACF",sourcesContent:[".heading {\n  height: 145px;\n  display: flex;\n  align-items: center;\n  background: url('./Bg.png') center center/cover no-repeat;\n\n  @media (max-width: 767px) {\n    height: 116px;\n  }\n}\n.title {\n  padding-left: 4px;\n  color: var(--primary---white);\n\n  font-size: 60px;\n  font-weight: 800;\n  line-height: 108.5%; /* 65.1px */\n  letter-spacing: 1.2px;\n\n  @media (max-width: 1024px) {\n    padding-left: 0;\n  }\n\n  @media (max-width: 767px) {\n    font-size: 35px;\n    letter-spacing: 0.7px;\n  }\n}\n"],sourceRoot:""}]),o.locals={heading:"jnq4xdXSnTNBG_xzc2cd",title:"bo64ITPQGN8HdNcBeb1s"};let p=o},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/blog/section/firstSection/index.module.scss":(e,t,s)=>{s.r(t),s.d(t,{default:()=>A});var n=s(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */"./node_modules/css-loader/dist/runtime/sourceMaps.js"),a=s.n(n),i=s(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */"./node_modules/css-loader/dist/runtime/api.js"),r=s.n(i)()(a());r.push([e.id,`.bWeNOVrPQxbujWOR89GS {
  margin-top: 40px;
}
@media (max-width: 640px) {
  .bWeNOVrPQxbujWOR89GS {
    margin-top: 30px;
  }
}

.krEuqadrFz1rokFN0y8T {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px 19.5px;
}
@media (max-width: 1136px) {
  .krEuqadrFz1rokFN0y8T a:last-child {
    display: none;
  }
}
@media (max-width: 707px) {
  .krEuqadrFz1rokFN0y8T {
    gap: 22px;
  }
  .krEuqadrFz1rokFN0y8T a:nth-child(7), .krEuqadrFz1rokFN0y8T a:nth-child(8) {
    display: none;
  }
}

.ccIfL8tx5qiOwHfO6ot0 {
  margin-top: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.ccIfL8tx5qiOwHfO6ot0 span {
  width: 10px;
  height: 10px;
  display: block;
  border-radius: 50%;
  background: var(--secondary---text);
}
.ccIfL8tx5qiOwHfO6ot0 span:nth-child(2) {
  animation-delay: 0.3s;
}
.ccIfL8tx5qiOwHfO6ot0 span:last-child {
  animation-delay: 0.6s;
}
@media (max-width: 640px) {
  .ccIfL8tx5qiOwHfO6ot0 {
    margin-top: 27px;
  }
}

@keyframes ccIfL8tx5qiOwHfO6ot0 {
  from {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
  to {
    opacity: 1;
  }
}`,"",{version:3,sources:["webpack://./src/pages/blog/section/firstSection/index.module.scss"],names:[],mappings:"AAAA;EACE,gBAAA;AACF;AACE;EAHF;IAII,gBAAA;EAEF;AACF;;AAAA;EACE,aAAA;EACA,uBAAA;EACA,eAAA;EACA,gBAAA;AAGF;AADE;EAEI;IACE,aAAA;EAEN;AACF;AAEE;EAdF;IAeI,SAAA;EACF;EACI;IAEE,aAAA;EAAN;AACF;;AAIA;EACE,gBAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,SAAA;AAFF;AAGE;EACE,WAAA;EACA,YAAA;EACA,cAAA;EACA,kBAAA;EAEA,mCAAA;AAFJ;AAII;EACE,qBAAA;AAFN;AAKI;EACE,qBAAA;AAHN;AAOE;EAxBF;IAyBI,gBAAA;EAJF;AACF;;AAMA;EACE;IACE,UAAA;EAHF;EAKA;IACE,YAAA;EAHF;EAKA;IACE,UAAA;EAHF;AACF",sourcesContent:[".section {\n  margin-top: 40px;\n\n  @media (max-width: 640px) {\n    margin-top: 30px;\n  }\n}\n.wrapper {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 20px 19.5px;\n\n  @media (max-width: 1136px) {\n    a {\n      &:last-child {\n        display: none;\n      }\n    }\n  }\n\n  @media (max-width: 707px) {\n    gap: 22px;\n    a {\n      &:nth-child(7),\n      &:nth-child(8) {\n        display: none;\n      }\n    }\n  }\n}\n.loader {\n  margin-top: 44px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  span {\n    width: 10px;\n    height: 10px;\n    display: block;\n    border-radius: 50%;\n\n    background: var(--secondary---text);\n\n    &:nth-child(2) {\n      animation-delay: 0.3s;\n    }\n\n    &:last-child {\n      animation-delay: 0.6s;\n    }\n  }\n\n  @media (max-width: 640px) {\n    margin-top: 27px;\n  }\n}\n@keyframes loader {\n  from {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.3;\n  }\n  to {\n    opacity: 1;\n  }\n}\n"],sourceRoot:""}]),r.locals={section:"bWeNOVrPQxbujWOR89GS",wrapper:"krEuqadrFz1rokFN0y8T",loader:"ccIfL8tx5qiOwHfO6ot0"};let A=r},"./src/components/article/index.scss":(e,t,s)=>{s.r(t),s.d(t,{default:()=>E});var n=s(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=s.n(n),i=s(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */"./node_modules/style-loader/dist/runtime/styleDomAPI.js"),r=s.n(i),A=s(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */"./node_modules/style-loader/dist/runtime/insertBySelector.js"),d=s.n(A),l=s(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),o=s.n(l),c=s(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */"./node_modules/style-loader/dist/runtime/insertStyleElement.js"),p=s.n(c),m=s(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */"./node_modules/style-loader/dist/runtime/styleTagTransform.js"),u=s.n(m),g=s(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./index.scss */"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/article/index.scss"),x={};x.styleTagTransform=u(),x.setAttributes=o(),x.insert=d().bind(null,"head"),x.domAPI=r(),x.insertStyleElement=p(),a()(g.default,x);let E=g.default&&g.default.locals?g.default.locals:void 0},"./src/components/heading/index.module.scss":(e,t,s)=>{s.r(t),s.d(t,{default:()=>E});var n=s(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=s.n(n),i=s(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */"./node_modules/style-loader/dist/runtime/styleDomAPI.js"),r=s.n(i),A=s(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */"./node_modules/style-loader/dist/runtime/insertBySelector.js"),d=s.n(A),l=s(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),o=s.n(l),c=s(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */"./node_modules/style-loader/dist/runtime/insertStyleElement.js"),p=s.n(c),m=s(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */"./node_modules/style-loader/dist/runtime/styleTagTransform.js"),u=s.n(m),g=s(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./index.module.scss */"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/heading/index.module.scss"),x={};x.styleTagTransform=u(),x.setAttributes=o(),x.insert=d().bind(null,"head"),x.domAPI=r(),x.insertStyleElement=p(),a()(g.default,x);let E=g.default&&g.default.locals?g.default.locals:void 0},"./src/pages/blog/section/firstSection/index.module.scss":(e,t,s)=>{s.r(t),s.d(t,{default:()=>E});var n=s(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=s.n(n),i=s(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */"./node_modules/style-loader/dist/runtime/styleDomAPI.js"),r=s.n(i),A=s(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */"./node_modules/style-loader/dist/runtime/insertBySelector.js"),d=s.n(A),l=s(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),o=s.n(l),c=s(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */"./node_modules/style-loader/dist/runtime/insertStyleElement.js"),p=s.n(c),m=s(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */"./node_modules/style-loader/dist/runtime/styleTagTransform.js"),u=s.n(m),g=s(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js!./index.module.scss */"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/blog/section/firstSection/index.module.scss"),x={};x.styleTagTransform=u(),x.setAttributes=o(),x.insert=d().bind(null,"head"),x.domAPI=r(),x.insertStyleElement=p(),a()(g.default,x);let E=g.default&&g.default.locals?g.default.locals:void 0},"./src/components/heading/Bg.png":(e,t,s)=>{e.exports=s.p+"assets/Bg.png"},"./src/img/articles/article1.jpg":(e,t,s)=>{e.exports=s.p+"assets/article1.jpg"},"./src/img/articles/article2.jpg":(e,t,s)=>{e.exports=s.p+"assets/article2.jpg"},"./src/img/articles/article3.jpg":(e,t,s)=>{e.exports=s.p+"assets/article3.jpg"},"./src/img/articles/article4.jpg":(e,t,s)=>{e.exports=s.p+"assets/article4.jpg"},"./src/img/articles/article5.jpg":(e,t,s)=>{e.exports=s.p+"assets/article5.jpg"},"./src/img/articles/article6.jpg":(e,t,s)=>{e.exports=s.p+"assets/article6.jpg"},"./src/img/articles/article7.jpg":(e,t,s)=>{e.exports=s.p+"assets/article7.jpg"},"./src/img/articles/article8.jpg":(e,t,s)=>{e.exports=s.p+"assets/article8.jpg"},"./src/img/articles/article9.jpg":(e,t,s)=>{e.exports=s.p+"assets/article9.jpg"}}]);
//# sourceMappingURL=src_pages_blog_index_jsx.js.map