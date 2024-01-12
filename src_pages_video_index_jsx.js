"use strict";(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["src_pages_video_index_jsx"],{"./src/components/heading/Heading.jsx":(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var s=n(/*! react */"./node_modules/react/index.js"),d=n.n(s),i=n(/*! ./index.module.scss */"./src/components/heading/index.module.scss");let o=e=>{let{title:t}=e;return d().createElement("div",{className:i.default.heading},d().createElement("div",{className:"container"},d().createElement("div",{className:i.default.title},t)))}},"./src/components/videoCard/VideoCard.jsx":(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var s=n(/*! react */"./node_modules/react/index.js"),d=n.n(s);n(/*! ./index.scss */"./src/components/videoCard/index.scss");let i=e=>{let{img:t,title:n,onClick:s}=e;return d().createElement("div",{"data-aos-once":"true","data-aos-duration":"800","data-aos":"fade-up",className:"videoCard"},d().createElement("div",{className:"videoCard__img"},d().createElement("img",{src:t,alt:"video"}),d().createElement("div",{className:"videoCard__play",onClick:s},d().createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 53 53",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d().createElement("circle",{opacity:"0.8",cx:"26.5",cy:"26.5",r:"26.5",fill:"white"}),d().createElement("path",{d:"M36.4268 24.768C37.7601 25.5378 37.7601 27.4623 36.4268 28.2321L23.0365 35.963C21.7032 36.7328 20.0365 35.7705 20.0365 34.2309L20.0365 18.7692C20.0365 17.2296 21.7032 16.2674 23.0365 17.0372L36.4268 24.768Z",fill:"#7481FF"})))),d().createElement("div",{className:"videoCard__title"},n))}},"./src/pages/video/index.jsx":(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var s=n(/*! react */"./node_modules/react/index.js"),d=n.n(s),i=n(/*! react-responsive-masonry */"./node_modules/react-responsive-masonry/es/index.js"),o=n(/*! react-helmet */"./node_modules/react-helmet/es/Helmet.js"),a=n(/*! ../../components/heading/Heading */"./src/components/heading/Heading.jsx"),r=n(/*! ../../components/videoCard/VideoCard */"./src/components/videoCard/VideoCard.jsx"),l=n(/*! ./index.module.scss */"./src/pages/video/index.module.scss"),A=n(/*! ../../img/video/Video1.jpg */"./src/img/video/Video1.jpg"),c=n(/*! ../../img/video/Video2.jpg */"./src/img/video/Video2.jpg"),m=n(/*! ../../img/video/Video3.jpg */"./src/img/video/Video3.jpg"),u=n(/*! ../../img/video/Video4.jpg */"./src/img/video/Video4.jpg");let p=()=>{let[e,t]=(0,s.useState)(!1);(0,s.useEffect)(()=>{e?document.body.style.overflow="hidden":document.body.style.overflow="scroll"},[e]);let n=()=>{e||t(!e)},p=()=>{e&&t(!e)},[g,x]=(0,s.useState)(61);return(0,s.useEffect)(()=>{let e=()=>{let e=window.innerWidth<=360?30:61;x(e)};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),d().createElement(d().Fragment,null,d().createElement(o.Helmet,null,d().createElement("title",null,"Vehicle videos - VAC")),d().createElement(a.default,{title:"Vehicle videos"}),d().createElement("div",{className:l.default.section},d().createElement("div",{className:"container"},d().createElement(i.ResponsiveMasonry,{style:{marginBottom:g},columnsCountBreakPoints:{320:1,1225:2}},d().createElement(i.default,{gutter:"20px",className:l.default.wrapper},d().createElement(r.default,{img:A,title:"CM's Vehicle Shoot #10: 2018 Chevy Cruze Hatchback",onClick:n}),d().createElement(r.default,{img:c,title:"CM's Vehicle Shoot #11: Toyota Highlander",onClick:n}),d().createElement(r.default,{img:m,title:"CM's Vehicle Shoot #09: 2019 Mazda CX-5",onClick:n}),d().createElement(r.default,{img:u,title:"Some Vehicles CM Offers!",onClick:n}))))),d().createElement("div",{className:l.default.modal+" "+`${e?"":l.default.modalHidden}`,onClick:e=>{e.target.classList.contains(l.default.modal)&&p()}},d().createElement("div",{className:l.default.frame},d().createElement("div",{className:l.default.frame},d().createElement("iframe",{width:"100%",height:"100%",src:"https://www.youtube.com/embed/sClpStULLfU",title:"Подлая еврейская музыка 10 часов",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})))))}},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/heading/index.module.scss":(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var s=n(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */"./node_modules/css-loader/dist/runtime/sourceMaps.js"),d=n.n(s),i=n(/*! ../../../node_modules/css-loader/dist/runtime/api.js */"./node_modules/css-loader/dist/runtime/api.js"),o=n.n(i),a=n(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */"./node_modules/css-loader/dist/runtime/getUrl.js"),r=n.n(a),l=new URL(n(/*! ./Bg.png */"./src/components/heading/Bg.png"),n.b),A=o()(d()),c=r()(l);A.push([e.id,`.jnq4xdXSnTNBG_xzc2cd {
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
}`,"",{version:3,sources:["webpack://./src/components/heading/index.module.scss"],names:[],mappings:"AAAA;EACE,aAAA;EACA,aAAA;EACA,mBAAA;EACA,iFAAA;AACF;AACE;EANF;IAOI,aAAA;EAEF;AACF;;AAAA;EACE,iBAAA;EACA,6BAAA;EAEA,eAAA;EACA,gBAAA;EACA,mBAAA,EAAA,WAAA;EACA,qBAAA;AAEF;AAAE;EATF;IAUI,eAAA;EAGF;AACF;AADE;EAbF;IAcI,eAAA;IACA,qBAAA;EAIF;AACF",sourcesContent:[".heading {\n  height: 145px;\n  display: flex;\n  align-items: center;\n  background: url('./Bg.png') center center/cover no-repeat;\n\n  @media (max-width: 767px) {\n    height: 116px;\n  }\n}\n.title {\n  padding-left: 4px;\n  color: var(--primary---white);\n\n  font-size: 60px;\n  font-weight: 800;\n  line-height: 108.5%; /* 65.1px */\n  letter-spacing: 1.2px;\n\n  @media (max-width: 1024px) {\n    padding-left: 0;\n  }\n\n  @media (max-width: 767px) {\n    font-size: 35px;\n    letter-spacing: 0.7px;\n  }\n}\n"],sourceRoot:""}]),A.locals={heading:"jnq4xdXSnTNBG_xzc2cd",title:"bo64ITPQGN8HdNcBeb1s"};let m=A},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/videoCard/index.scss":(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});var s=n(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */"./node_modules/css-loader/dist/runtime/sourceMaps.js"),d=n.n(s),i=n(/*! ../../../node_modules/css-loader/dist/runtime/api.js */"./node_modules/css-loader/dist/runtime/api.js"),o=n.n(i)()(d());o.push([e.id,`.videoCard {
  width: 580px;
}
@media (max-width: 1024px) {
  .videoCard {
    width: 100%;
  }
}
.videoCard__title {
  margin-top: 16px;
  color: #41456b;
  color: var(--primary---content, #41456b);
  font-size: 25px;
  font-weight: 700;
  line-height: 140%; /* 35px */
  letter-spacing: 0.5px;
}
@media (max-width: 1024px) {
  .videoCard__title {
    margin-top: 12px;
  }
}
@media (max-width: 640px) {
  .videoCard__title {
    margin-top: 4px;
    font-size: 20px;
  }
}
.videoCard__play {
  width: 53px;
  height: 53px;
  position: absolute;
  top: 49%;
  left: 51%;
  transform: translate(-53%, -47%);
  cursor: pointer;
}
@media (max-width: 640px) {
  .videoCard__play {
    width: 35px;
    height: 35px;
  }
}`,"",{version:3,sources:["webpack://./src/components/videoCard/index.scss"],names:[],mappings:"AAAA;EACE,YAAA;AACF;AACE;EAHF;IAII,WAAA;EAEF;AACF;AAGE;EACE,gBAAA;EAEA,cAAA;EAAA,wCAAA;EAEA,eAAA;EACA,gBAAA;EACA,iBAAA,EAAA,SAAA;EACA,qBAAA;AAHJ;AAKI;EAVF;IAWI,gBAAA;EAFJ;AACF;AAII;EAdF;IAeI,eAAA;IACA,eAAA;EADJ;AACF;AAIE;EACE,WAAA;EACA,YAAA;EAEA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EAEA,eAAA;AAJJ;AAMI;EAXF;IAYI,WAAA;IACA,YAAA;EAHJ;AACF",sourcesContent:[".videoCard {\n  width: 580px;\n\n  @media (max-width: 1024px) {\n    width: 100%;\n  }\n\n  &__img {\n  }\n\n  &__title {\n    margin-top: 16px;\n\n    color: var(--primary---content, #41456b);\n\n    font-size: 25px;\n    font-weight: 700;\n    line-height: 140%; /* 35px */\n    letter-spacing: 0.5px;\n\n    @media (max-width: 1024px) {\n      margin-top: 12px;\n    }\n\n    @media (max-width: 640px) {\n      margin-top: 4px;\n      font-size: 20px;\n    }\n  }\n\n  &__play {\n    width: 53px;\n    height: 53px;\n\n    position: absolute;\n    top: 49%;\n    left: 51%;\n    transform: translate(-53%, -47%);\n\n    cursor: pointer;\n\n    @media (max-width: 640px) {\n      width: 35px;\n      height: 35px;\n    }\n  }\n}\n"],sourceRoot:""}]);let a=o},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/video/index.module.scss":(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});var s=n(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */"./node_modules/css-loader/dist/runtime/sourceMaps.js"),d=n.n(s),i=n(/*! ../../../node_modules/css-loader/dist/runtime/api.js */"./node_modules/css-loader/dist/runtime/api.js"),o=n.n(i)()(d());o.push([e.id,`.LapUWQ5t7eouWrWHlUru {
  margin-top: 40px;
}
@media (max-width: 640px) {
  .LapUWQ5t7eouWrWHlUru {
    margin-top: 30px;
  }
}

.vN6hAaDOkLH_9Ymv7qRd div {
  align-items: center;
}
@media (max-width: 640px) {
  .vN6hAaDOkLH_9Ymv7qRd div {
    gap: 20px !important;
  }
}

.YgIULqZm9FUuvyOeVTU1 {
  margin-top: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 35px;
}
.YgIULqZm9FUuvyOeVTU1 span {
  width: 10px;
  height: 10px;
  display: block;
  border-radius: 50%;
  background: var(--secondary---text);
  animation: YgIULqZm9FUuvyOeVTU1 1.5s infinite;
}
.YgIULqZm9FUuvyOeVTU1 span:nth-child(2) {
  animation-delay: 0.3s;
}
.YgIULqZm9FUuvyOeVTU1 span:last-child {
  animation-delay: 0.6s;
}
@media (max-width: 640px) {
  .YgIULqZm9FUuvyOeVTU1 {
    margin-top: 27px;
  }
}

.su8VJMnKhph5AwyzCBda {
  width: 100vw;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
}

.zM7LMQqEigw_flRbj3aQ {
  display: none;
}

.uWdycHV4Gwl1iAoa4E4P {
  width: 867px;
  height: 542px;
}
@media (max-width: 1024px) {
  .uWdycHV4Gwl1iAoa4E4P {
    width: 600px;
    height: 376px;
  }
}
@media (max-width: 640px) {
  .uWdycHV4Gwl1iAoa4E4P {
    width: 320px;
    height: 200.533px;
  }
}`,"",{version:3,sources:["webpack://./src/pages/video/index.module.scss"],names:[],mappings:"AAAA;EACE,gBAAA;AACF;AACE;EAHF;IAII,gBAAA;EAEF;AACF;;AACE;EACE,mBAAA;AAEJ;AAAI;EAHF;IAII,oBAAA;EAGJ;AACF;;AAAA;EACE,gBAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,SAAA;AAEF;AADE;EACE,WAAA;EACA,YAAA;EACA,cAAA;EACA,kBAAA;EAEA,mCAAA;EACA,6CAAA;AAEJ;AAAI;EACE,qBAAA;AAEN;AACI;EACE,qBAAA;AACN;AAGE;EAzBF;IA0BI,gBAAA;EAAF;AACF;;AAGA;EACE,YAAA;EACA,cAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,8BAAA;EACA,eAAA;EACA,MAAA;EACA,OAAA;AAAF;;AAEA;EACE,aAAA;AACF;;AACA;EACE,YAAA;EACA,aAAA;AAEF;AAAE;EAJF;IAKI,YAAA;IACA,aAAA;EAGF;AACF;AADE;EATF;IAUI,YAAA;IACA,iBAAA;EAIF;AACF",sourcesContent:[".section {\n  margin-top: 40px;\n\n  @media (max-width: 640px) {\n    margin-top: 30px;\n  }\n}\n.wrapper {\n  div {\n    align-items: center;\n\n    @media (max-width: 640px) {\n      gap: 20px !important;\n    }\n  }\n}\n.loader {\n  margin-top: 44px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 35px;\n  span {\n    width: 10px;\n    height: 10px;\n    display: block;\n    border-radius: 50%;\n\n    background: var(--secondary---text);\n    animation: loader 1.5s infinite;\n\n    &:nth-child(2) {\n      animation-delay: 0.3s;\n    }\n\n    &:last-child {\n      animation-delay: 0.6s;\n    }\n  }\n\n  @media (max-width: 640px) {\n    margin-top: 27px;\n  }\n}\n\n.modal {\n  width: 100vw;\n  height: 100dvh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(0, 0, 0, 0.1);\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n.modalHidden {\n  display: none;\n}\n.frame {\n  width: 867px;\n  height: 542px;\n\n  @media (max-width: 1024px) {\n    width: 600px;\n    height: 376px;\n  }\n\n  @media (max-width: 640px) {\n    width: 320px;\n    height: 200.533px;\n  }\n}\n"],sourceRoot:""}]),o.locals={section:"LapUWQ5t7eouWrWHlUru",wrapper:"vN6hAaDOkLH_9Ymv7qRd",loader:"YgIULqZm9FUuvyOeVTU1",modal:"su8VJMnKhph5AwyzCBda",modalHidden:"zM7LMQqEigw_flRbj3aQ",frame:"uWdycHV4Gwl1iAoa4E4P"};let a=o},"./node_modules/react-responsive-masonry/es/Masonry/index.js":(e,t,n)=>{n.r(t),n.d(t,{default:()=>A});var s=n(/*! prop-types */"./node_modules/prop-types/index.js"),d=n.n(s),i=n(/*! react */"./node_modules/react/index.js"),o=n.n(i);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}).apply(this,arguments)}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=function(e){function t(){return e.apply(this,arguments)||this}t.prototype=Object.create(e.prototype),t.prototype.constructor=t,r(t,e);var n=t.prototype;return n.getColumns=function(){var e=this.props,t=e.children,n=e.columnsCount,s=Array.from({length:n},function(){return[]});return o().Children.forEach(t,function(e,t){e&&o().isValidElement(e)&&s[t%n].push(e)}),s},n.renderColumns=function(){var e=this.props.gutter;return this.getColumns().map(function(t,n){return o().createElement("div",{key:n,style:{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignContent:"stretch",flex:1,width:0,gap:e}},t.map(function(e){return e}))})},n.render=function(){var e=this.props,t=e.gutter,n=e.className,s=e.style;return o().createElement("div",{style:a({display:"flex",flexDirection:"row",justifyContent:"center",alignContent:"stretch",boxSizing:"border-box",width:"100%",gap:t},s),className:n},this.renderColumns())},t}(o().Component);l.propTypes={children:d().oneOfType([d().arrayOf(d().node),d().node]).isRequired,columnsCount:d().number,gutter:d().string,className:d().string,style:d().object},l.defaultProps={columnsCount:3,gutter:"0",className:null,style:{}};let A=l},"./node_modules/react-responsive-masonry/es/ResponsiveMasonry/index.js":(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var s=n(/*! prop-types */"./node_modules/prop-types/index.js"),d=n.n(s),i=n(/*! react */"./node_modules/react/index.js"),o=n.n(i),a="undefined"!=typeof window?i.useLayoutEffect:i.useEffect,r=function(){var e=(0,i.useState)(!1),t=e[0],n=e[1];return a(function(){n(!0)},[]),t},l=function(){var e=r(),t=(0,i.useState)(0),n=t[0],s=t[1],d=(0,i.useCallback)(function(){e&&s(window.innerWidth)},[e]);return a(function(){if(e)return window.addEventListener("resize",d),d(),function(){return window.removeEventListener("resize",d)}},[e,d]),n},A=function(e){var t=e.columnsCountBreakPoints,n=void 0===t?{350:1,750:2,900:3}:t,s=e.children,d=e.className,a=e.style,r=l(),A=(0,i.useMemo)(function(){var e=Object.keys(n).sort(function(e,t){return e-t}),t=e.length>0?n[e[0]]:1;return e.forEach(function(e){e<r&&(t=n[e])}),t},[r,n]);return o().createElement("div",{className:void 0===d?null:d,style:void 0===a?null:a},o().Children.map(s,function(e,t){return o().cloneElement(e,{key:t,columnsCount:A})}))};A.propTypes={children:d().oneOfType([d().arrayOf(d().node),d().node]).isRequired,columnsCountBreakPoints:d().object,className:d().string,style:d().object};let c=A},"./node_modules/react-responsive-masonry/es/index.js":(e,t,n)=>{n.r(t),n.d(t,{ResponsiveMasonry:()=>d.default,default:()=>i});var s=n(/*! ./Masonry */"./node_modules/react-responsive-masonry/es/Masonry/index.js"),d=n(/*! ./ResponsiveMasonry */"./node_modules/react-responsive-masonry/es/ResponsiveMasonry/index.js");let i=s.default},"./src/components/heading/index.module.scss":(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var s=n(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),d=n.n(s),i=n(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */"./node_modules/style-loader/dist/runtime/styleDomAPI.js"),o=n.n(i),a=n(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */"./node_modules/style-loader/dist/runtime/insertBySelector.js"),r=n.n(a),l=n(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),A=n.n(l),c=n(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */"./node_modules/style-loader/dist/runtime/insertStyleElement.js"),m=n.n(c),u=n(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */"./node_modules/style-loader/dist/runtime/styleTagTransform.js"),p=n.n(u),g=n(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./index.module.scss */"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/heading/index.module.scss"),x={};x.styleTagTransform=p(),x.setAttributes=A(),x.insert=r().bind(null,"head"),x.domAPI=o(),x.insertStyleElement=m(),d()(g.default,x);let h=g.default&&g.default.locals?g.default.locals:void 0},"./src/components/videoCard/index.scss":(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var s=n(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),d=n.n(s),i=n(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */"./node_modules/style-loader/dist/runtime/styleDomAPI.js"),o=n.n(i),a=n(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */"./node_modules/style-loader/dist/runtime/insertBySelector.js"),r=n.n(a),l=n(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),A=n.n(l),c=n(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */"./node_modules/style-loader/dist/runtime/insertStyleElement.js"),m=n.n(c),u=n(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */"./node_modules/style-loader/dist/runtime/styleTagTransform.js"),p=n.n(u),g=n(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./index.scss */"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/videoCard/index.scss"),x={};x.styleTagTransform=p(),x.setAttributes=A(),x.insert=r().bind(null,"head"),x.domAPI=o(),x.insertStyleElement=m(),d()(g.default,x);let h=g.default&&g.default.locals?g.default.locals:void 0},"./src/pages/video/index.module.scss":(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var s=n(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),d=n.n(s),i=n(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */"./node_modules/style-loader/dist/runtime/styleDomAPI.js"),o=n.n(i),a=n(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */"./node_modules/style-loader/dist/runtime/insertBySelector.js"),r=n.n(a),l=n(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),A=n.n(l),c=n(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */"./node_modules/style-loader/dist/runtime/insertStyleElement.js"),m=n.n(c),u=n(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */"./node_modules/style-loader/dist/runtime/styleTagTransform.js"),p=n.n(u),g=n(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./index.module.scss */"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/video/index.module.scss"),x={};x.styleTagTransform=p(),x.setAttributes=A(),x.insert=r().bind(null,"head"),x.domAPI=o(),x.insertStyleElement=m(),d()(g.default,x);let h=g.default&&g.default.locals?g.default.locals:void 0},"./src/components/heading/Bg.png":(e,t,n)=>{e.exports=n.p+"assets/Bg.png"},"./src/img/video/Video1.jpg":(e,t,n)=>{e.exports=n.p+"assets/Video1.jpg"},"./src/img/video/Video2.jpg":(e,t,n)=>{e.exports=n.p+"assets/Video2.jpg"},"./src/img/video/Video3.jpg":(e,t,n)=>{e.exports=n.p+"assets/Video3.jpg"},"./src/img/video/Video4.jpg":(e,t,n)=>{e.exports=n.p+"assets/Video4.jpg"}}]);
//# sourceMappingURL=src_pages_video_index_jsx.js.map