"use strict";(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["src_pages_main_index_jsx-data_application_font-woff_charset_utf-8_base64_d09GRgABAAAAAAZgABAA-488bee"],{"./src/UI/links/linkSolidWhite/LinkSolidWhite.jsx":(e,A,t)=>{t.r(A),t.d(A,{default:()=>d});var n=t(/*! react */"./node_modules/react/index.js"),s=t.n(n),i=t(/*! react-router-dom */"./node_modules/react-router-dom/esm/react-router-dom.js"),a=t(/*! ./index.module.scss */"./src/UI/links/linkSolidWhite/index.module.scss");let d=e=>{let{children:A,to:t,disabled:n,wx:d,wm:o,ws:r}=e;return n?s().createElement("div",{className:`${a.default.link}  ${a.default.linkDisable}`,style:{"--width":`${d}px`,"--widthM":`${o||d}px`,"--widthS":`${"auto"==r?"100%":`${r||o||d}px`}`}},A):s().createElement(i.Link,{className:a.default.link,to:t,style:{"--width":`${d}px`,"--widthM":`${o||d}px`,"--widthS":`${"auto"==r?"100%":`${r||o||d}px`}`}},A)}},"./src/components/article/Article.jsx":(e,A,t)=>{t.r(A),t.d(A,{default:()=>a});var n=t(/*! react */"./node_modules/react/index.js"),s=t.n(n),i=t(/*! react-router-dom */"./node_modules/react-router-dom/esm/react-router-dom.js");t(/*! ./index.scss */"./src/components/article/index.scss");let a=e=>{let{to:A,img:t,title:n}=e;return s().createElement(i.Link,{"data-aos-once":"true","data-aos-duration":"800","data-aos":"fade-up",to:A,className:"article"},s().createElement("div",{className:"article__img"},s().createElement("img",{src:t,alt:"img",loading:"lazy"})),s().createElement("div",{className:"article__wrapper"},s().createElement("div",{className:"article__date"},"10 May, 2020"),s().createElement("div",{className:"article__title"},n)))}},"./src/components/metrics/Metrics.jsx":(e,A,t)=>{t.r(A),t.d(A,{default:()=>i});var n=t(/*! react */"./node_modules/react/index.js"),s=t.n(n);t(/*! ./index.scss */"./src/components/metrics/index.scss");let i=e=>{let{text:A,descr:t}=e;return s().createElement("div",{className:"metrics"},s().createElement("div",{className:"metrics__number"},A),s().createElement("div",{className:"metrics__text"},t))}},"./src/components/step/index.jsx":(e,A,t)=>{t.r(A),t.d(A,{default:()=>a});var n=t(/*! react */"./node_modules/react/index.js"),s=t.n(n),i=t(/*! ./index.module.scss */"./src/components/step/index.module.scss");let a=e=>{let{number:A,title:t,subtitle:n}=e;return s().createElement("div",{"data-aos-once":"true","data-aos-duration":"800","data-aos":"zoom-out-right",className:i.default.step},s().createElement("div",{className:i.default.number},s().createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 75 67",fill:"none"},s().createElement("path",{d:"M29.2241 5.23313C32.9014 -1.07772 42.0986 -1.07771 45.7759 5.23315L73.2059 52.3075C76.8778 58.6091 72.2926 66.5 64.9299 66.5H10.07C2.70741 66.5 -1.87779 58.6091 1.79413 52.3075L29.2241 5.23313Z",fill:"white",stroke:"#41456B"})),A),s().createElement("div",{className:i.default.text},s().createElement("div",{className:i.default.textTitle},t),s().createElement("div",{className:i.default.textSubtitle},n)))}},"./src/pages/main/index.jsx":(e,A,t)=>{t.r(A),t.d(A,{default:()=>x});var n=t(/*! react */"./node_modules/react/index.js"),s=t.n(n),i=t(/*! react-helmet */"./node_modules/react-helmet/es/Helmet.js"),a=t(/*! ./section/hero/Hero */"./src/pages/main/section/hero/Hero.jsx"),d=t(/*! ./section/howToWork */"./src/pages/main/section/howToWork/index.jsx");t(/*! ./section/seventhSection */"./src/pages/main/section/seventhSection/index.jsx");var o=t(/*! ../../components/calculator/Calculator */"./src/components/calculator/Calculator.jsx"),r=t(/*! ./section/advantages/index */"./src/pages/main/section/advantages/index.jsx"),l=t(/*! ./section/clientSay/index */"./src/pages/main/section/clientSay/index.jsx"),m=t(/*! ./section/customers/index */"./src/pages/main/section/customers/index.jsx"),p=t(/*! ./section/eightSection */"./src/pages/main/section/eightSection/index.jsx"),c=t(/*! ./section/perfectCard/index */"./src/pages/main/section/perfectCard/index.jsx");let x=()=>s().createElement(s().Fragment,null,s().createElement(i.Helmet,null,s().createElement("title",null,"Main page - VAC")),s().createElement(a.default,null),s().createElement(d.default,null),s().createElement(c.default,null),s().createElement(r.default,null),s().createElement(m.default,null),s().createElement(l.default,null),s().createElement(o.default,{mtX:220,mtM:159,mtS:80,title:"Let’s figure out how much you can afford"}),s().createElement(p.default,null))},"./src/pages/main/section/advantages/index.jsx":(e,A,t)=>{t.r(A),t.d(A,{default:()=>o});var n=t(/*! react */"./node_modules/react/index.js"),s=t.n(n),i=t(/*! ./index.module.scss */"./src/pages/main/section/advantages/index.module.scss"),a=t(/*! ../../img/triangleDown.svg */"./src/pages/main/img/triangleDown.svg"),d=t(/*! ../../img/triangleUp.svg */"./src/pages/main/img/triangleUp.svg");let o=()=>{let[e,A]=(0,n.useState)(0);return(0,n.useEffect)(()=>{A(window.innerWidth)},[]),window.addEventListener("resize",()=>{A(window.innerWidth)}),s().createElement("div",{className:i.default.section},s().createElement("div",{className:"container"},s().createElement("div",{"data-aos-once":"true","data-aos-duration":"800","data-aos":"zoom-out","data-aos-anchor-placement":"top-center",className:i.default.title},"Advantages of working with us"),s().createElement("div",{"data-aos-once":"true","data-aos-duration":"800","data-aos":"zoom-out-right","data-aos-anchor-placement":"top-center",className:i.default.wrapper},s().createElement("div",{className:i.default.item},s().createElement("div",{className:i.default.imgUp},s().createElement("img",{src:d,alt:"triangle"})),s().createElement("svg",{width:"70",height:"70",viewBox:"0 0 70 70",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M26.2387 13.2703C25.7093 12.964 25.0401 12.8957 24.4113 13.1814L8.17278 20.5585C7.45858 20.8829 7 21.5949 7 22.3794V54.8288C7 56.241 8.42398 57.2084 9.73684 56.6881L26.2624 50.139C26.339 50.1818 26.4189 50.2199 26.502 50.2528L42.7405 56.6881C43.346 56.928 43.9752 56.8516 44.4774 56.5609C44.9795 56.8516 45.6087 56.928 46.2142 56.6881L62.4527 50.2528C63.2152 49.9506 63.7159 49.2136 63.7159 48.3935V15.0023C63.7159 13.5479 62.2128 12.5799 60.8887 13.1814L44.6501 20.5585C44.5907 20.5854 44.5331 20.6151 44.4774 20.6473C44.4216 20.6151 44.364 20.5854 44.3046 20.5585L28.0661 13.1814C27.4372 12.8957 26.7681 12.964 26.2387 13.2703ZM27.2388 34.3438L27.5378 34.4639C28.0503 34.6699 28.6326 34.4214 28.8386 33.909C29.0445 33.3965 28.796 32.8141 28.2836 32.6082L27.2388 32.1883V15.0023L43.4774 22.3794V38.7143L41.9625 38.1055C41.45 37.8996 40.8677 38.148 40.6617 38.6605C40.4558 39.1729 40.7042 39.7553 41.2167 39.9613L43.4774 40.8698V54.8288L27.2388 48.3935V34.3438ZM45.4774 22.3794V38.3793L45.8447 38.2606C46.3703 38.0909 46.934 38.3793 47.1037 38.9048C47.2735 39.4303 46.9851 39.994 46.4595 40.1638L45.4774 40.4811V54.8288L61.7159 48.3935V15.0023L45.4774 22.3794ZM25.2385 31.6966V15.0023L9 22.3794L8.58639 21.4689L9 22.3794V54.8288L25.2385 48.3935V33.8051L24.54 34.0384C24.0161 34.2133 23.4497 33.9304 23.2747 33.4066C23.0998 32.8827 23.3827 32.3163 23.9065 32.1413L25.2385 31.6966ZM21.7247 34.9784C22.2486 34.8035 22.5314 34.2371 22.3565 33.7132C22.1816 33.1894 21.6151 32.9065 21.0913 33.0814L19.6836 33.5514C19.6078 33.5767 19.5371 33.6102 19.4721 33.6506C18.854 32.6595 17.754 32 16.5 32C14.567 32 13 33.567 13 35.5C13 37.433 14.567 39 16.5 39C18.4329 39 19.9999 37.4331 20 35.5002C20.1051 35.5003 20.2119 35.4836 20.3171 35.4485L21.7247 34.9784ZM32.8432 34.4406C32.3308 34.2347 31.7484 34.4832 31.5425 34.9956C31.3365 35.5081 31.585 36.0904 32.0974 36.2964L36.6571 38.1288C37.1695 38.3348 37.7519 38.0863 37.9578 37.5738C38.1638 37.0614 37.9153 36.479 37.4029 36.2731L32.8432 34.4406ZM53.3078 37.9515C53.8333 37.7818 54.1217 37.2181 53.9519 36.6926C53.7822 36.167 53.2185 35.8786 52.693 36.0484L50.4102 36.7858C49.8847 36.9556 49.5963 37.5192 49.766 38.0448C49.9358 38.5703 50.4995 38.8587 51.025 38.689L53.3078 37.9515ZM16.5 37C17.3284 37 18 36.3284 18 35.5C18 34.6716 17.3284 34 16.5 34C15.6716 34 15 34.6716 15 35.5C15 36.3284 15.6716 37 16.5 37ZM57 29.5C57 29.4915 57 29.4916 56.9983 29.5009C56.9925 29.5323 56.9677 29.6683 56.8599 29.9325C56.7323 30.2454 56.5367 30.6223 56.2852 31.0419C56.0438 31.4447 55.7719 31.8525 55.5 32.237C55.2281 31.8525 54.9562 31.4447 54.7148 31.0419C54.4633 30.6223 54.2677 30.2454 54.1401 29.9325C54.0323 29.6683 54.0075 29.5323 54.0017 29.5009C54 29.4916 54 29.4915 54 29.5C54 28.6716 54.6716 28 55.5 28C56.3284 28 57 28.6716 57 29.5ZM59 29.5C59 30.8637 57.2581 33.2895 56.232 34.6001C55.8549 35.0817 55.1451 35.0817 54.768 34.6001C53.7419 33.2895 52 30.8637 52 29.5C52 27.567 53.567 26 55.5 26C57.433 26 59 27.567 59 29.5Z",fill:"#41456B"})),s().createElement("div",{className:i.default.deliveryTitle},"Vehicle Delivery"),s().createElement("div",{className:i.default.deliverySubtitle},"We deliver your vehicle directly to your door. You don’t sign anything until you test drive the vehicle. There is never any obligation to buy beforehand.")),s().createElement("div",{className:i.default.item},s().createElement("div",{className:i.default.imgUp},s().createElement("img",{src:e<1187?d:a,alt:"triangle"})),s().createElement("svg",{width:"70",height:"70",viewBox:"0 0 70 70",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14 13C14 10.7909 15.7909 9 18 9H51C53.2091 9 55 10.7909 55 13V49C55 49.5523 54.5523 50 54 50C53.4477 50 53 49.5523 53 49V13C53 11.8954 52.1046 11 51 11H18C16.8954 11 16 11.8954 16 13V57C16 58.1046 16.8954 59 18 59H38.8875C39.4398 59 39.8875 59.4477 39.8875 60C39.8875 60.5523 39.4398 61 38.8875 61H18C15.7909 61 14 59.2091 14 57V13ZM55.2071 52.2929C55.5976 52.6834 55.5976 53.3166 55.2071 53.7071L47.7071 61.2071C47.3166 61.5976 46.6834 61.5976 46.2929 61.2071L42.2929 57.2071C41.9024 56.8166 41.9024 56.1834 42.2929 55.7929C42.6834 55.4024 43.3166 55.4024 43.7071 55.7929L47 59.0858L53.7929 52.2929C54.1834 51.9024 54.8166 51.9024 55.2071 52.2929ZM21 16C20.4477 16 20 16.4477 20 17C20 17.5523 20.4477 18 21 18H35C35.5523 18 36 17.5523 36 17C36 16.4477 35.5523 16 35 16H21ZM20 27C20 26.4477 20.4477 26 21 26H45C45.5523 26 46 26.4477 46 27C46 27.5523 45.5523 28 45 28H21C20.4477 28 20 27.5523 20 27ZM21 32C20.4477 32 20 32.4477 20 33C20 33.5523 20.4477 34 21 34H41C41.5523 34 42 33.5523 42 33C42 32.4477 41.5523 32 41 32H21ZM20 45C20 44.4477 20.4477 44 21 44H27C27.5523 44 28 44.4477 28 45C28 45.5523 27.5523 46 27 46H21C20.4477 46 20 45.5523 20 45ZM31 44C30.4477 44 30 44.4477 30 45C30 45.5523 30.4477 46 31 46H41C41.5523 46 42 45.5523 42 45C42 44.4477 41.5523 44 41 44H31Z",fill:"#41456B"})),s().createElement("div",{className:i.default.deliveryTitle},"Auto Financing"),s().createElement("div",{className:i.default.deliverySubtitle},"We partner with the largest lenders in Canada to offer the strongest financing options in the industry—including rates as low as 4%")),s().createElement("div",{className:i.default.item},s().createElement("div",{className:i.default.imgUp},s().createElement("img",{src:d,alt:"triangle"})),s().createElement("svg",{width:"70",height:"70",viewBox:"0 0 70 70",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.17393 44H7C5.34315 44 4 42.6569 4 41V36.5H6C6.55228 36.5 7 36.0523 7 35.5C7 34.9477 6.55228 34.5 6 34.5H4V34.0139C4 33.4216 4.17531 32.8426 4.50385 32.3498L11.1798 22.3359C11.7362 21.5013 12.6729 21 13.6759 21H30V29H26C25.4477 29 25 29.4477 25 30C25 30.5523 25.4477 31 26 31L52 31C52.1403 31 52.2739 30.9711 52.3951 30.9189C52.9229 31.1221 53.4769 31.262 54.0458 31.3328L63.3704 32.493C64.5367 32.6381 65.4772 33.4401 65.8394 34.5H63.5C62.9477 34.5 62.5 34.9477 62.5 35.5C62.5 36.0523 62.9477 36.5 63.5 36.5H66V41C66 42.6569 64.6569 44 63 44H61.8261C61.1489 41.1333 58.5736 39 55.5 39C52.4264 39 49.8511 41.1333 49.1739 44H20.8261C20.1489 41.1333 17.5736 39 14.5 39C11.4264 39 8.8511 41.1333 8.17393 44ZM32 29L49.6402 29L43.0228 21.9473C42.4557 21.3429 41.6639 21 40.8351 21H32V29ZM63 46H61.9811C61.7257 49.3562 58.9216 52 55.5 52C52.0784 52 49.2743 49.3562 49.0189 46H20.9811C20.7257 49.3562 17.9216 52 14.5 52C11.0784 52 8.27426 49.3562 8.01894 46H7C4.23858 46 2 43.7614 2 41V34.0139C2 33.0268 2.29219 32.0617 2.83975 31.2404L9.51567 21.2265C10.443 19.8355 12.0042 19 13.6759 19H40.8351C42.2164 19 43.5362 19.5715 44.4813 20.5788L51.2639 27.8075C52.0627 28.6589 53.1342 29.2039 54.2928 29.3481L63.6174 30.5083C66.1208 30.8197 68 32.9473 68 35.47V41C68 43.7614 65.7614 46 63 46ZM14.5 50C16.9853 50 19 47.9853 19 45.5C19 43.0147 16.9853 41 14.5 41C12.0147 41 10 43.0147 10 45.5C10 47.9853 12.0147 50 14.5 50ZM55.5 50C57.9853 50 60 47.9853 60 45.5C60 43.0147 57.9853 41 55.5 41C53.0147 41 51 43.0147 51 45.5C51 47.9853 53.0147 50 55.5 50ZM33 34.5C32.4477 34.5 32 34.9477 32 35.5C32 36.0523 32.4477 36.5 33 36.5H36C36.5523 36.5 37 36.0523 37 35.5C37 34.9477 36.5523 34.5 36 34.5H33Z",fill:"#41456B"})),s().createElement("div",{className:i.default.deliveryTitle},"Huge Inventory"),s().createElement("div",{className:i.default.deliverySubtitle},"We have access to thousands of high-quality vehicles and offer them to you at wholesale prices. Your dream car is waiting for you")))))}},"./src/pages/main/section/clientSay/index.jsx":(e,A,t)=>{t.r(A),t.d(A,{default:()=>o});var n=t(/*! react */"./node_modules/react/index.js"),s=t.n(n),i=t(/*! ../../../../UI/links/linkSolid/LinkSolid */"./src/UI/links/linkSolid/LinkSolid.jsx"),a=t(/*! ../../../../components/metrics/Metrics */"./src/components/metrics/Metrics.jsx"),d=t(/*! ./index.module.scss */"./src/pages/main/section/clientSay/index.module.scss");let o=()=>s().createElement("div",{className:d.default.section},s().createElement("div",{className:"container"},s().createElement("div",{className:d.default.container},s().createElement("div",{"data-aos-once":"true","data-aos-duration":"1000","data-aos":"zoom-out-right","data-aos-anchor-placement":"center-center",className:d.default.wrapper},s().createElement("div",{className:d.default.title},"Happy customers"),s().createElement("div",{className:d.default.descr},"Since 2017, we have helped thousands of Canadians get their dream vehicles from the comfort of their homes.")),s().createElement("div",{"data-aos-once":"true","data-aos-duration":"1000","data-aos":"zoom-out-right","data-aos-anchor-placement":"top-center",className:d.default.wrapperBtn},s().createElement("div",{className:d.default.subtitle},"What are you waiting? ",s().createElement("br",null)," Get started right now!"),s().createElement(i.default,{to:"/quiz",wx:200,ws:"auto"},"Request a car")),s().createElement("div",{"data-aos-once":"true","data-aos-duration":"1000","data-aos":"zoom-out-left","data-aos-anchor-placement":"center-center",className:d.default.wrapperCard},s().createElement(a.default,{text:"7,988+",descr:"Sold Cars"}),s().createElement(a.default,{text:"16,974+",descr:"Vehicles To Choose From"}),s().createElement(a.default,{text:"123",descr:"Experts Across Canada"})))))},"./src/pages/main/section/customers/index.jsx":(e,A,t)=>{t.r(A),t.d(A,{default:()=>r});var n=t(/*! react */"./node_modules/react/index.js"),s=t.n(n),i=t(/*! ../../../../UI/links/linkSolid/LinkSolid */"./src/UI/links/linkSolid/LinkSolid.jsx"),a=t(/*! ./index.module.scss */"./src/pages/main/section/customers/index.module.scss"),d=t(/*! ../../img/Corola.png */"./src/pages/main/img/Corola.png"),o=t(/*! ../../img/HondaLeft.png */"./src/pages/main/img/HondaLeft.png");let r=()=>s().createElement("div",{className:a.default.section},s().createElement("div",{className:"container"},s().createElement("div",{className:a.default.wrapper},s().createElement("div",{className:a.default.img},s().createElement("div",{"data-aos-once":"true","data-aos-duration":"800","data-aos":"zoom-out-right","data-aos-anchor-placement":"center-center",className:a.default.honda},s().createElement("img",{src:o,alt:"honda",loading:"lazy"})),s().createElement("div",{"data-aos-once":"true","data-aos-duration":"1000","data-aos":"zoom-out-left","data-aos-anchor-placement":"center-center",className:a.default.toyota},s().createElement("img",{src:d,alt:"toyota",loading:"lazy"}))),s().createElement("div",{"data-aos-once":"true","data-aos-duration":"1000","data-aos":"zoom-out-left","data-aos-anchor-placement":"center-center",className:a.default.container},s().createElement("div",{className:a.default.title},"Сhoose your dream vehicle in our catalog"),s().createElement("div",{className:a.default.containerWrapper},s().createElement("div",{className:a.default.subtitle},"In our catalogue there are many models of vehicles. Choose your car to your liking."),s().createElement(i.default,{to:"/catalog",wx:190,ws:"auto"},"Inventory"))))))},"./src/pages/main/section/eightSection/index.jsx":(e,A,t)=>{t.r(A),t.d(A,{default:()=>c});var n=t(/*! react */"./node_modules/react/index.js"),s=t.n(n),i=t(/*! swiper/modules */"./node_modules/swiper/modules/index.mjs"),a=t(/*! swiper/react */"./node_modules/swiper/swiper-react.mjs"),d=t(/*! ../../../../UI/links/linkLiner/LinkLiner */"./src/UI/links/linkLiner/LinkLiner.jsx"),o=t(/*! ../../../../components/article/Article */"./src/components/article/Article.jsx");t(/*! swiper/scss */"./node_modules/swiper/swiper.scss"),t(/*! swiper/scss/navigation */"./node_modules/swiper/modules/navigation.scss"),t(/*! ./eightSection.scss */"./src/pages/main/section/eightSection/eightSection.scss");var r=t(/*! ./index.module.scss */"./src/pages/main/section/eightSection/index.module.scss"),l=t(/*! ../../../../img/articles/article1.jpg */"./src/img/articles/article1.jpg"),m=t(/*! ../../../../img/articles/article2.jpg */"./src/img/articles/article2.jpg"),p=t(/*! ../../../../img/articles/article3.jpg */"./src/img/articles/article3.jpg");let c=()=>s().createElement("div",{className:r.default.section},s().createElement("div",{className:"container"},s().createElement("div",{className:r.default.wrapper},s().createElement("div",{className:r.default.top},s().createElement("div",{"data-aos-once":"true","data-aos-duration":"1000","data-aos":"zoom-out-right","data-aos-anchor-placement":"center-center",className:r.default.title},"Interesting to read"),s().createElement("div",{"data-aos-once":"true","data-aos-duration":"1000","data-aos":"zoom-out-left","data-aos-anchor-placement":"center-center",className:r.default.btn},s().createElement(d.default,{to:"/blog",wx:180,ws:"auto"},"All articles"))),s().createElement(a.Swiper,{"data-aos-once":"true","data-aos-duration":"1000","data-aos":"zoom-out","data-aos-anchor-placement":"top-center",className:r.default.slider+" eightSlider",spaceBetween:20,slidesPerView:"auto",modules:[i.Navigation],navigation:!0,autoHeight:!0},s().createElement(a.SwiperSlide,{className:r.default.slide},s().createElement(o.default,{to:"/blog",img:l,title:"How to save on buying a car?Why is it better to buy from us"})),s().createElement(a.SwiperSlide,{className:r.default.slide},s().createElement(o.default,{to:"/blog",img:m,title:"How fast can you order a car in Canada?"})),s().createElement(a.SwiperSlide,{className:r.default.slide},s().createElement(o.default,{to:"/blog",img:p,title:"How to save on buying a car?Why is it better to buy from us"})),s().createElement(a.SwiperSlide,{className:r.default.slide},s().createElement(o.default,{to:"/blog",img:l,title:"How to save on buying a car?Why is it better to buy from us"})),s().createElement(a.SwiperSlide,{className:r.default.slide},s().createElement(o.default,{to:"/blog",img:l,title:"How to save on buying a car?Why is it better to buy from us"}))))))},"./src/pages/main/section/hero/Hero.jsx":(e,A,t)=>{t.r(A),t.d(A,{default:()=>c});var n=t(/*! react */"./node_modules/react/index.js"),s=t.n(n),i=t(/*! ../../../../UI/links/linkSolidWhite/LinkSolidWhite */"./src/UI/links/linkSolidWhite/LinkSolidWhite.jsx"),a=t(/*! swiper/modules */"./node_modules/swiper/modules/index.mjs"),d=t(/*! swiper/react */"./node_modules/swiper/swiper-react.mjs");t(/*! swiper/scss */"./node_modules/swiper/swiper.scss"),t(/*! swiper/scss/navigation */"./node_modules/swiper/modules/navigation.scss"),t(/*! ./firstSection.scss */"./src/pages/main/section/hero/firstSection.scss");var o=t(/*! ./index.module.scss */"./src/pages/main/section/hero/index.module.scss"),r=t(/*! ../../img/Dodge.png */"./src/pages/main/img/Dodge.png"),l=t(/*! ../../img/Ford.png */"./src/pages/main/img/Ford.png"),m=t(/*! ../../img/Nissan.png */"./src/pages/main/img/Nissan.png"),p=t(/*! ../../img/Ram.png */"./src/pages/main/img/Ram.png");let c=()=>{let[e,A]=(0,n.useState)(0);return s().createElement("div",{className:o.default.section},s().createElement("div",{className:"container"},s().createElement("div",{className:o.default.wrapper},s().createElement("div",{"data-aos-once":"true","data-aos-duration":"800","data-aos":"zoom-out-right",className:o.default.title},"The easiest way to buy a car in Canada"),s().createElement("div",{"data-aos-once":"true","data-aos-duration":"1000","data-aos":"zoom-out-right",className:o.default.btn},s().createElement(i.default,{to:"/quiz",wx:200,ws:214},"Request a ",["suv","car","truck","van"][e])),s().createElement(d.Swiper,{slidesPerView:"auto",centeredSlides:!0,spaceBetween:60,modules:[a.Navigation],navigation:!0,className:o.default.slider+" firstSlider",onSlideChange:e=>A(e.activeIndex)},s().createElement(d.SwiperSlide,{className:o.default.slide},s().createElement("img",{"data-aos-once":"true","data-aos-duration":"800","data-aos":"zoom-out-left",src:m,alt:"auto"})),s().createElement(d.SwiperSlide,{className:o.default.slide},s().createElement("img",{"data-aos-once":"true","data-aos-duration":"800","data-aos":"zoom-out-left",src:l,alt:"auto",loading:"lazy"})),s().createElement(d.SwiperSlide,{className:o.default.slide},s().createElement("img",{"data-aos-once":"true","data-aos-duration":"800","data-aos":"zoom-out-left",src:p,alt:"auto",loading:"lazy"})),s().createElement(d.SwiperSlide,{className:o.default.slide},s().createElement("img",{"data-aos-once":"true","data-aos-duration":"800","data-aos":"zoom-out-left",src:r,alt:"auto",loading:"lazy"}))))))}},"./src/pages/main/section/howToWork/index.jsx":(e,A,t)=>{t.r(A),t.d(A,{default:()=>o});var n=t(/*! react */"./node_modules/react/index.js"),s=t.n(n),i=t(/*! ./index.module.scss */"./src/pages/main/section/howToWork/index.module.scss"),a=t(/*! ../../img/Honda.png */"./src/pages/main/img/Honda.png"),d=t(/*! ../../img/Lexus.png */"./src/pages/main/img/Lexus.png");let o=()=>s().createElement("div",{className:i.default.section},s().createElement("div",{className:"container"},s().createElement("div",{"data-aos-once":"true","data-aos-duration":"800","data-aos":"zoom-out-down","data-aos-anchor-placement":"top-center",className:i.default.card},s().createElement("div",{className:i.default.cardTitle},"How does it work?"),s().createElement("div",{className:i.default.cardSubTitle},"From your Phone to your Home"),s().createElement("div",{className:i.default.cardDescr},"We make it easy for you to buy your dream car from your phone without ever having to step into a dealership! We deliver your vehicle to your home for you to test drive before you sign anything."))),s().createElement("div",{"data-aos-once":"true","data-aos-duration":"800","data-aos":"zoom-out-right","data-aos-anchor-placement":"top-center",className:i.default.honda},s().createElement("img",{src:a,alt:"honda",loading:"lazy"})),s().createElement("div",{"data-aos-once":"true","data-aos-duration":"800","data-aos":"zoom-out-left","data-aos-anchor-placement":"top-center",className:i.default.lexus},s().createElement("img",{src:d,alt:"lexus",loading:"lazy"})))},"./src/pages/main/section/perfectCard/index.jsx":(e,A,t)=>{t.r(A),t.d(A,{default:()=>r});var n=t(/*! react */"./node_modules/react/index.js"),s=t.n(n),i=t(/*! ../../../../components/step */"./src/components/step/index.jsx"),a=t(/*! ./index.module.scss */"./src/pages/main/section/perfectCard/index.module.scss"),d=t(/*! ../../img/Phone.png */"./src/pages/main/img/Phone.png"),o=t(/*! ../../img/Phone_T.png */"./src/pages/main/img/Phone_T.png");let r=()=>s().createElement("div",{className:a.default.section},s().createElement("div",{className:"container"},s().createElement("div",{"data-aos-once":"true","data-aos-duration":"800","data-aos":"zoom-out-left","data-aos-anchor-placement":"top-center",className:a.default.title},"Your perfect car in 5 easy steps"),s().createElement("div",{className:a.default.wrapper},s().createElement("div",{className:a.default.steps},s().createElement(i.default,{number:1,title:"First Contact",subtitle:"Tell us what your dream vehicle is."}),s().createElement(i.default,{number:2,title:"Vehicle Selection",subtitle:"One of our Qualified Agents sends you custom pictures and videos of the car you are interested in."}),s().createElement(i.default,{number:3,title:"Secure Financing",subtitle:"You work with a dedicated Qualified Agent to secure financing on your terms."}),s().createElement(i.default,{number:4,title:"Vehicle Delivery",subtitle:"We deliver your car to your home or office for you to test drive."}),s().createElement(i.default,{number:5,title:"Getting Vehicle",subtitle:"If you love the vehicle, you sign the paperwork and keep the car."})),s().createElement("div",{"data-aos-once":"true","data-aos-duration":"800","data-aos":"zoom-out-left","data-aos-anchor-placement":"top-center",className:a.default.img},s().createElement("img",{src:d,alt:"phone",loading:"lazy"})),s().createElement("div",{"data-aos-once":"true","data-aos-duration":"800","data-aos":"zoom-out-left","data-aos-anchor-placement":"top-center",className:a.default.imgT},s().createElement("img",{src:o,alt:"phone",loading:"lazy"})))))},"./src/pages/main/section/seventhSection/index.jsx":(e,A,t)=>{t.r(A),t.d(A,{default:()=>r});var n=t(/*! react */"./node_modules/react/index.js"),s=t.n(n),i=t(/*! swiper/react */"./node_modules/swiper/swiper-react.mjs"),a=t(/*! swiper/modules */"./node_modules/swiper/modules/index.mjs");t(/*! swiper/scss */"./node_modules/swiper/swiper.scss"),t(/*! swiper/scss/navigation */"./node_modules/swiper/modules/navigation.scss"),t(/*! ./seventhSection.scss */"./src/pages/main/section/seventhSection/seventhSection.scss");var d=t(/*! ./index.module.scss */"./src/pages/main/section/seventhSection/index.module.scss"),o=t(/*! ../../img/family.jpg */"./src/pages/main/img/family.jpg");let r=()=>s().createElement("div",{className:d.default.section},s().createElement("div",{className:"container"},s().createElement("div",{"data-aos-once":"true","data-aos-duration":"1000","data-aos":"zoom-out-right","data-aos-anchor-placement":"center-center",className:d.default.title},"What our client say about us!"),s().createElement("div",{className:d.default.wrapper},s().createElement(i.Swiper,{"data-aos-once":"true","data-aos-duration":"1000","data-aos":"zoom-out","data-aos-anchor-placement":"center-center",className:d.default.slider+" seventhSwiper",modules:[a.Navigation],navigation:!0,loop:!0},s().createElement(i.SwiperSlide,{className:d.default.slide},s().createElement("div",{className:d.default.img},s().createElement("img",{src:o,alt:"family",loading:"lazy"})),s().createElement("div",{className:d.default.slideWrapper},s().createElement("div",{className:d.default.name},"Laura Chaisson"),s().createElement("div",{className:d.default.text},"In irure et ipsum eiusmod adipisicing id elit cillum proident. Adipisicing ullamco nisi veniam occaecat id excepteur ad non. Sunt occaecat elit ullamco commodo exercitation. Anim mollit irure Lorem proident veniam excepteur non irure Lorem. Lorem esse sint in nisi id esse."))),s().createElement(i.SwiperSlide,{className:d.default.slide},s().createElement("div",{className:d.default.img},s().createElement("img",{src:o,alt:"family",loading:"lazy"})),s().createElement("div",{className:d.default.slideWrapper},s().createElement("div",{className:d.default.name},"Laura Chaisson"),s().createElement("div",{className:d.default.text},"In irure et ipsum eiusmod adipisicing id elit cillum proident. Adipisicing ullamco nisi veniam occaecat id excepteur ad non. Sunt occaecat elit ullamco commodo exercitation. Anim mollit irure Lorem proident veniam excepteur non irure Lorem. Lorem esse sint in nisi id esse.")))))))},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/UI/links/linkSolidWhite/index.module.scss":(e,A,t)=>{t.r(A),t.d(A,{default:()=>d});var n=t(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */"./node_modules/css-loader/dist/runtime/sourceMaps.js"),s=t.n(n),i=t(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */"./node_modules/css-loader/dist/runtime/api.js"),a=t.n(i)()(s());a.push([e.id,`.Lu8GnTsQ7dCIFXnHIgGs {
  width: var(--width);
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  background: var(--primary---white);
  font-size: 16px;
  font-weight: 700;
  line-height: 14.364px; /* 89.775% */
  letter-spacing: 0.32px;
  text-transform: uppercase;
  color: var(--primary---accent);
  cursor: pointer;
  transition: all 0.4s;
}
.Lu8GnTsQ7dCIFXnHIgGs:hover {
  transform: scale(1.05);
}
@media (max-width: 768px) {
  .Lu8GnTsQ7dCIFXnHIgGs {
    width: var(--widthM);
  }
}
@media (max-width: 425px) {
  .Lu8GnTsQ7dCIFXnHIgGs {
    width: var(--widthS);
    height: 35px;
    font-size: 14px;
  }
}

.Bh1jxQ2McSaEHPezp_uU {
  color: rgba(116, 129, 255, 0.5);
  cursor: default;
}`,"",{version:3,sources:["webpack://./src/UI/links/linkSolidWhite/index.module.scss"],names:[],mappings:"AAAA;EACE,mBAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,kCAAA;EACA,eAAA;EACA,gBAAA;EACA,qBAAA,EAAA,YAAA;EACA,sBAAA;EACA,yBAAA;EACA,8BAAA;EACA,eAAA;EACA,oBAAA;AACF;AAAE;EACE,sBAAA;AAEJ;AACE;EApBF;IAqBI,oBAAA;EAEF;AACF;AADE;EAvBF;IAwBI,oBAAA;IACA,YAAA;IACA,eAAA;EAIF;AACF;;AAFA;EACE,+BAAA;EACA,eAAA;AAKF",sourcesContent:[".link {\n  width: var(--width);\n  height: 45px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 2px;\n  background: var(--primary---white);\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 14.364px; /* 89.775% */\n  letter-spacing: 0.32px;\n  text-transform: uppercase;\n  color: var(--primary---accent);\n  cursor: pointer;\n  transition: all 0.4s;\n  &:hover {\n    transform: scale(1.05);\n  }\n\n  @media (max-width: 768px) {\n    width: var(--widthM);\n  }\n  @media (max-width: 425px) {\n    width: var(--widthS);\n    height: 35px;\n    font-size: 14px;\n  }\n}\n.linkDisable {\n  color: rgba(#7481ff, 0.5);\n  cursor: default;\n}\n"],sourceRoot:""}]),a.locals={link:"Lu8GnTsQ7dCIFXnHIgGs",linkDisable:"Bh1jxQ2McSaEHPezp_uU"};let d=a},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/article/index.scss":(e,A,t)=>{t.r(A),t.d(A,{default:()=>d});var n=t(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */"./node_modules/css-loader/dist/runtime/sourceMaps.js"),s=t.n(n),i=t(/*! ../../../node_modules/css-loader/dist/runtime/api.js */"./node_modules/css-loader/dist/runtime/api.js"),a=t.n(i)()(s());a.push([e.id,`.article {
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
}`,"",{version:3,sources:["webpack://./src/components/article/index.scss"],names:[],mappings:"AAAA;EACE,YAAA;EACA,cAAA;EAEA,qDAAA;AAAF;AAEE;EANF;IAOI,YAAA;EACF;AACF;AACE;EAVF;IAWI,YAAA;EAEF;AACF;AAAE;EAdF;IAeI,WAAA;EAGF;AACF;AADE;EACE,aAAA;AAGJ;AAAE;EACE,uBAAA;EACA,kCAAA;AAEJ;AAAI;EAJF;IAKI,uBAAA;EAGJ;AACF;AAAE;EACE,8BAAA;EAEA,eAAA;EACA,gBAAA;EACA,iBAAA,EAAA,WAAA;EACA,sBAAA;AACJ;AAEE;EACE,mBAAA;EACA,+BAAA;EAEA,eAAA;EACA,gBAAA;EACA,iBAAA,EAAA,SAAA;AADJ;AAGI;EARF;IASI,mBAAA;EAAJ;AACF;AAEI;EAZF;IAaI,gBAAA;IACA,eAAA;EACJ;AACF",sourcesContent:[".article {\n  width: 387px;\n  display: block;\n\n  filter: drop-shadow(0px 20px 25px rgba(0, 0, 0, 0.1));\n\n  @media (max-width: 1250px) {\n    width: 350px;\n  }\n\n  @media (max-width: 767px) {\n    width: 320px;\n  }\n\n  @media (max-width: 359px) {\n    width: 100%;\n  }\n\n  &__img {\n    height: 230px;\n  }\n\n  &__wrapper {\n    padding: 20px 30px 30px;\n    background: var(--primary---white);\n\n    @media (max-width: 1120px) {\n      padding: 20px 20px 30px;\n    }\n  }\n\n  &__date {\n    color: var(--secondary---text);\n\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 180%; /* 28.8px */\n    letter-spacing: 0.32px;\n  }\n\n  &__title {\n    padding-right: 25px;\n    color: var(--primary---content);\n\n    font-size: 20px;\n    font-weight: 600;\n    line-height: 25px; /* 125% */\n\n    @media (max-width: 1120px) {\n      padding-right: 22px;\n    }\n\n    @media (max-width: 767px) {\n      padding-right: 0;\n      font-size: 18px;\n    }\n  }\n}\n"],sourceRoot:""}]);let d=a},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/metrics/index.scss":(e,A,t)=>{t.r(A),t.d(A,{default:()=>d});var n=t(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */"./node_modules/css-loader/dist/runtime/sourceMaps.js"),s=t.n(n),i=t(/*! ../../../node_modules/css-loader/dist/runtime/api.js */"./node_modules/css-loader/dist/runtime/api.js"),a=t.n(i)()(s());a.push([e.id,`.metrics {
  padding: 25px 0 0 35px;
  width: 280px;
  height: 143px;
  border-radius: 5px;
  background: var(--primary---white);
  box-shadow: 0px 20px 25px 0px rgba(0, 0, 0, 0.1);
}
.metrics__number {
  color: var(--primary---content);
  font-size: 45px;
  font-weight: 700;
  line-height: 140.5%;
}
@media (max-width: 425px) {
  .metrics__number {
    font-size: 30px;
  }
}
.metrics__text {
  margin-top: 5px;
  color: var(--secondary---text);
  font-size: 16px;
  font-weight: 400;
  line-height: 180%;
  letter-spacing: 0.32px;
}
@media (max-width: 425px) {
  .metrics__text {
    font-size: 16px;
  }
}
@media (max-width: 425px) {
  .metrics {
    padding: 20px 0 0 30px;
    width: 100%;
    height: 116px;
  }
}`,"",{version:3,sources:["webpack://./src/components/metrics/index.scss"],names:[],mappings:"AAAA;EACE,sBAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,kCAAA;EACA,gDAAA;AACF;AACE;EACE,+BAAA;EAEA,eAAA;EACA,gBAAA;EACA,mBAAA;AAAJ;AAEI;EAPF;IAQI,eAAA;EACJ;AACF;AAEE;EACE,eAAA;EAEA,8BAAA;EAEA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,sBAAA;AAFJ;AAII;EAVF;IAWI,eAAA;EADJ;AACF;AAIE;EAnCF;IAoCI,sBAAA;IACA,WAAA;IACA,aAAA;EADF;AACF",sourcesContent:[".metrics {\n  padding: 25px 0 0 35px;\n  width: 280px;\n  height: 143px;\n  border-radius: 5px;\n  background: var(--primary---white);\n  box-shadow: 0px 20px 25px 0px rgba(0, 0, 0, 0.1);\n\n  &__number {\n    color: var(--primary---content);\n\n    font-size: 45px;\n    font-weight: 700;\n    line-height: 140.5%;\n\n    @media (max-width: 425px) {\n      font-size: 30px;\n    }\n  }\n\n  &__text {\n    margin-top: 5px;\n\n    color: var(--secondary---text);\n\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 180%;\n    letter-spacing: 0.32px;\n\n    @media (max-width: 425px) {\n      font-size: 16px;\n    }\n  }\n\n  @media (max-width: 425px) {\n    padding: 20px 0 0 30px;\n    width: 100%;\n    height: 116px;\n  }\n}\n"],sourceRoot:""}]);let d=a},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/step/index.module.scss":(e,A,t)=>{t.r(A),t.d(A,{default:()=>d});var n=t(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */"./node_modules/css-loader/dist/runtime/sourceMaps.js"),s=t.n(n),i=t(/*! ../../../node_modules/css-loader/dist/runtime/api.js */"./node_modules/css-loader/dist/runtime/api.js"),a=t.n(i)()(s());a.push([e.id,`.oWskAy8jWSmVls_7eFiU {
  display: flex;
  align-items: center;
  gap: 20px;
}
@media (max-width: 1120px) {
  .oWskAy8jWSmVls_7eFiU {
    align-items: flex-start;
  }
}

.dwmftvXNcI364hyXalmo {
  padding-top: 22px;
  width: 75px;
  height: 67px;
  color: var(--primary---content);
  text-align: center;
  font-size: 25px;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: 0.5px;
}
.dwmftvXNcI364hyXalmo svg {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
@media (max-width: 640px) {
  .dwmftvXNcI364hyXalmo {
    padding-top: 14px;
    width: 53px;
    height: 47px;
    font-size: 20px;
  }
}

.BI3xUACuzEkyTb6urCxy {
  padding-top: 3px;
}

.tMRT7_HawnVbrlbtQK1g {
  color: var(--primary---content);
  font-size: 20px;
  font-weight: 600;
  line-height: 25px;
}
@media (max-width: 640px) {
  .tMRT7_HawnVbrlbtQK1g {
    font-size: 18px;
  }
}

.itofwQo8Z8xmyuS0SO3X {
  margin-top: 12px;
  width: 400px;
  color: var(--secondary-text);
  font-size: 16px;
  font-weight: 400;
  line-height: 180%;
  letter-spacing: 0.32px;
}
@media (max-width: 1120px) {
  .itofwQo8Z8xmyuS0SO3X {
    width: 325px;
  }
}
@media (max-width: 640px) {
  .itofwQo8Z8xmyuS0SO3X {
    margin-top: 7px;
    width: 247px;
    font-size: 16px;
  }
}
@media (max-width: 359px) {
  .itofwQo8Z8xmyuS0SO3X {
    width: 207px;
  }
}`,"",{version:3,sources:["webpack://./src/components/step/index.module.scss"],names:[],mappings:"AAAA;EACE,aAAA;EACA,mBAAA;EACA,SAAA;AACF;AACE;EALF;IAMI,uBAAA;EAEF;AACF;;AAAA;EACE,iBAAA;EACA,WAAA;EACA,YAAA;EACA,+BAAA;EACA,kBAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,qBAAA;AAGF;AAFE;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;AAIJ;AADE;EAjBF;IAkBI,iBAAA;IACA,WAAA;IACA,YAAA;IACA,eAAA;EAIF;AACF;;AAFA;EACE,gBAAA;AAKF;;AAHA;EACE,+BAAA;EAEA,eAAA;EACA,gBAAA;EACA,iBAAA;AAKF;AAHE;EAPF;IAQI,eAAA;EAMF;AACF;;AAJA;EACE,gBAAA;EACA,YAAA;EACA,4BAAA;EAEA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,sBAAA;AAMF;AAJE;EAVF;IAWI,YAAA;EAOF;AACF;AALE;EAdF;IAeI,eAAA;IACA,YAAA;IACA,eAAA;EAQF;AACF;AANE;EApBF;IAqBI,YAAA;EASF;AACF",sourcesContent:[".step {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n\n  @media (max-width: 1120px) {\n    align-items: flex-start;\n  }\n}\n.number {\n  padding-top: 22px;\n  width: 75px;\n  height: 67px;\n  color: var(--primary---content);\n  text-align: center;\n  font-size: 25px;\n  font-weight: 700;\n  line-height: 140%;\n  letter-spacing: 0.5px;\n  svg {\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: -1;\n  }\n\n  @media (max-width: 640px) {\n    padding-top: 14px;\n    width: 53px;\n    height: 47px;\n    font-size: 20px;\n  }\n}\n.text {\n  padding-top: 3px;\n}\n.textTitle {\n  color: var(--primary---content);\n\n  font-size: 20px;\n  font-weight: 600;\n  line-height: 25px;\n\n  @media (max-width: 640px) {\n    font-size: 18px;\n  }\n}\n.textSubtitle {\n  margin-top: 12px;\n  width: 400px;\n  color: var(--secondary-text);\n\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 180%;\n  letter-spacing: 0.32px;\n\n  @media (max-width: 1120px) {\n    width: 325px;\n  }\n\n  @media (max-width: 640px) {\n    margin-top: 7px;\n    width: 247px;\n    font-size: 16px;\n  }\n\n  @media (max-width: 359px) {\n    width: 207px;\n  }\n}\n"],sourceRoot:""}]),a.locals={step:"oWskAy8jWSmVls_7eFiU",number:"dwmftvXNcI364hyXalmo",text:"BI3xUACuzEkyTb6urCxy",textTitle:"tMRT7_HawnVbrlbtQK1g",textSubtitle:"itofwQo8Z8xmyuS0SO3X"};let d=a},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/main/section/advantages/index.module.scss":(e,A,t)=>{t.r(A),t.d(A,{default:()=>d});var n=t(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */"./node_modules/css-loader/dist/runtime/sourceMaps.js"),s=t.n(n),i=t(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */"./node_modules/css-loader/dist/runtime/api.js"),a=t.n(i)()(s());a.push([e.id,`._9M_V7jcERuj_IRlX47Z {
  margin-top: 218px;
}
@media (max-width: 1024px) {
  ._9M_V7jcERuj_IRlX47Z {
    margin-top: 169px;
  }
}
@media (max-width: 640px) {
  ._9M_V7jcERuj_IRlX47Z {
    margin-top: 69px;
  }
}

.sjvLVIgBK0CmY8_jsC57 {
  color: var(--primary---content);
  font-size: 45px;
  font-weight: 700;
  line-height: 140.5%;
}
@media (max-width: 1186px) {
  .sjvLVIgBK0CmY8_jsC57 {
    text-align: center;
  }
}
@media (max-width: 640px) {
  .sjvLVIgBK0CmY8_jsC57 {
    font-size: 30px;
  }
}

.x_nU1SX0vYZt01WNKC2w {
  margin-top: 60px;
  width: 100%;
  height: 480px;
}
@media (max-width: 1186px) {
  .x_nU1SX0vYZt01WNKC2w {
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 47px;
  }
}
@media (max-width: 640px) {
  .x_nU1SX0vYZt01WNKC2w {
    margin-top: 30px;
    gap: 20px;
  }
}

.eQFdkMdI8rA7BjavA39A {
  padding: 138px 80px 0;
  width: 480px;
  height: 430px;
  display: flex;
  flex-direction: column;
  align-items: center;
  filter: drop-shadow(0px 35px 35px rgba(0, 0, 0, 0.1));
  position: absolute;
  top: 0;
}
.eQFdkMdI8rA7BjavA39A:first-child {
  left: 0;
}
.eQFdkMdI8rA7BjavA39A:nth-child(2) {
  padding: 33px 131px 0 145px;
  left: 50%;
  transform: translateX(-50%);
}
@media (max-width: 1186px) {
  .eQFdkMdI8rA7BjavA39A:nth-child(2) {
    padding-top: 138px;
    padding-left: 97px;
    padding-right: 83px;
    left: auto;
    transform: translateX(0);
  }
}
@media (max-width: 640px) {
  .eQFdkMdI8rA7BjavA39A:nth-child(2) {
    padding: 0;
  }
}
.eQFdkMdI8rA7BjavA39A:last-child {
  padding: 138px 102px 0;
  right: 0;
}
@media (max-width: 640px) {
  .eQFdkMdI8rA7BjavA39A:last-child {
    padding: 0;
  }
}
@media (max-width: 1186px) {
  .eQFdkMdI8rA7BjavA39A {
    position: relative;
    left: auto;
    right: auto;
    transform: translateX(0);
  }
}
@media (max-width: 640px) {
  .eQFdkMdI8rA7BjavA39A {
    padding: 0;
    width: 100%;
    height: auto;
  }
}
.eQFdkMdI8rA7BjavA39A svg {
  margin: 0 auto;
}

.z1FzNoqLUxImZzIZ6FW6 {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
@media (max-width: 640px) {
  .z1FzNoqLUxImZzIZ6FW6 {
    display: none;
  }
}

.NC8hkyEqVaDxP2fiYBKM {
  margin-top: 5px;
  color: var(--primary---content);
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  line-height: 25px;
}
@media (max-width: 640px) {
  .NC8hkyEqVaDxP2fiYBKM {
    font-size: 18px;
  }
}

.iWgKVKj2Hu8TEIX9Ks2W {
  margin-top: 13px;
  color: var(--secondary---text);
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 180%;
  letter-spacing: 0.32px;
}
@media (max-width: 640px) {
  .iWgKVKj2Hu8TEIX9Ks2W {
    margin-top: 6px;
    font-size: 16px;
  }
}`,"",{version:3,sources:["webpack://./src/pages/main/section/advantages/index.module.scss"],names:[],mappings:"AAAA;EACE,iBAAA;AACF;AACE;EAHF;IAII,iBAAA;EAEF;AACF;AAAE;EAPF;IAQI,gBAAA;EAGF;AACF;;AADA;EACE,+BAAA;EAEA,eAAA;EACA,gBAAA;EACA,mBAAA;AAGF;AADE;EAPF;IAQI,kBAAA;EAIF;AACF;AAFE;EAXF;IAYI,eAAA;EAKF;AACF;;AAHA;EACE,gBAAA;EACA,WAAA;EACA,aAAA;AAMF;AAJE;EALF;IAMI,YAAA;IACA,aAAA;IACA,sBAAA;IACA,mBAAA;IACA,SAAA;EAOF;AACF;AALE;EAbF;IAcI,gBAAA;IACA,SAAA;EAQF;AACF;;AANA;EACE,qBAAA;EACA,YAAA;EACA,aAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,qDAAA;EACA,kBAAA;EACA,MAAA;AASF;AAPE;EACE,OAAA;AASJ;AANE;EACE,2BAAA;EACA,SAAA;EACA,2BAAA;AAQJ;AANI;EALF;IAMI,kBAAA;IACA,kBAAA;IACA,mBAAA;IACA,UAAA;IACA,wBAAA;EASJ;AACF;AAPI;EAbF;IAcI,UAAA;EAUJ;AACF;AAPE;EACE,sBAAA;EACA,QAAA;AASJ;AAPI;EAJF;IAKI,UAAA;EAUJ;AACF;AAPE;EA1CF;IA2CI,kBAAA;IACA,UAAA;IACA,WAAA;IACA,wBAAA;EAUF;AACF;AARE;EAjDF;IAkDI,UAAA;IACA,WAAA;IACA,YAAA;EAWF;AACF;AATE;EACE,cAAA;AAWJ;;AARA;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;AAWF;AATE;EAPF;IAQI,aAAA;EAYF;AACF;;AAVA;EACE,eAAA;EACA,+BAAA;EACA,kBAAA;EAEA,eAAA;EACA,gBAAA;EACA,iBAAA;AAYF;AAVE;EATF;IAUI,eAAA;EAaF;AACF;;AAXA;EACE,gBAAA;EACA,8BAAA;EACA,kBAAA;EAEA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,sBAAA;AAaF;AAXE;EAVF;IAWI,eAAA;IACA,eAAA;EAcF;AACF",sourcesContent:[".section {\n  margin-top: 218px;\n\n  @media (max-width: 1024px) {\n    margin-top: 169px;\n  }\n\n  @media (max-width: 640px) {\n    margin-top: 69px;\n  }\n}\n.title {\n  color: var(--primary---content);\n\n  font-size: 45px;\n  font-weight: 700;\n  line-height: 140.5%;\n\n  @media (max-width: 1186px) {\n    text-align: center;\n  }\n\n  @media (max-width: 640px) {\n    font-size: 30px;\n  }\n}\n.wrapper {\n  margin-top: 60px;\n  width: 100%;\n  height: 480px;\n\n  @media (max-width: 1186px) {\n    height: auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 47px;\n  }\n\n  @media (max-width: 640px) {\n    margin-top: 30px;\n    gap: 20px;\n  }\n}\n.item {\n  padding: 138px 80px 0;\n  width: 480px;\n  height: 430px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  filter: drop-shadow(0px 35px 35px rgba(0, 0, 0, 0.1));\n  position: absolute;\n  top: 0;\n\n  &:first-child {\n    left: 0;\n  }\n\n  &:nth-child(2) {\n    padding: 33px 131px 0 145px;\n    left: 50%;\n    transform: translateX(-50%);\n\n    @media (max-width: 1186px) {\n      padding-top: 138px;\n      padding-left: 97px;\n      padding-right: 83px;\n      left: auto;\n      transform: translateX(0);\n    }\n\n    @media (max-width: 640px) {\n      padding: 0;\n    }\n  }\n\n  &:last-child {\n    padding: 138px 102px 0;\n    right: 0;\n\n    @media (max-width: 640px) {\n      padding: 0;\n    }\n  }\n\n  @media (max-width: 1186px) {\n    position: relative;\n    left: auto;\n    right: auto;\n    transform: translateX(0);\n  }\n\n  @media (max-width: 640px) {\n    padding: 0;\n    width: 100%;\n    height: auto;\n  }\n\n  svg {\n    margin: 0 auto;\n  }\n}\n.imgUp {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  @media (max-width: 640px) {\n    display: none;\n  }\n}\n.deliveryTitle {\n  margin-top: 5px;\n  color: var(--primary---content);\n  text-align: center;\n\n  font-size: 20px;\n  font-weight: 600;\n  line-height: 25px;\n\n  @media (max-width: 640px) {\n    font-size: 18px;\n  }\n}\n.deliverySubtitle {\n  margin-top: 13px;\n  color: var(--secondary---text);\n  text-align: center;\n\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 180%;\n  letter-spacing: 0.32px;\n\n  @media (max-width: 640px) {\n    margin-top: 6px;\n    font-size: 16px;\n  }\n}\n"],sourceRoot:""}]),a.locals={section:"_9M_V7jcERuj_IRlX47Z",title:"sjvLVIgBK0CmY8_jsC57",wrapper:"x_nU1SX0vYZt01WNKC2w",item:"eQFdkMdI8rA7BjavA39A",imgUp:"z1FzNoqLUxImZzIZ6FW6",deliveryTitle:"NC8hkyEqVaDxP2fiYBKM",deliverySubtitle:"iWgKVKj2Hu8TEIX9Ks2W"};let d=a},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/main/section/clientSay/index.module.scss":(e,A,t)=>{t.r(A),t.d(A,{default:()=>d});var n=t(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */"./node_modules/css-loader/dist/runtime/sourceMaps.js"),s=t.n(n),i=t(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */"./node_modules/css-loader/dist/runtime/api.js"),a=t.n(i)()(s());a.push([e.id,`.El0mS4ems1Nl_W8Tkq1v {
  margin-top: 232px;
}
@media (max-width: 1024px) {
  .El0mS4ems1Nl_W8Tkq1v {
    margin-top: 161px;
  }
}
@media (max-width: 425px) {
  .El0mS4ems1Nl_W8Tkq1v {
    margin-top: 80px;
  }
}

.Ewp7es03Y13iodkSPyEM {
  display: grid;
  justify-content: space-between;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 141px 155px;
  grid-gap: 40px 0;
  gap: 40px 0;
}
@media (max-width: 1186px) {
  .Ewp7es03Y13iodkSPyEM {
    grid-template-columns: 1fr;
    grid-template-rows: 141px 1fr 155px;
    justify-items: center;
  }
}
@media (max-width: 425px) {
  .Ewp7es03Y13iodkSPyEM {
    gap: 18px;
  }
}

.rc5V3YrFHw4Xb4zvnPkJ {
  width: 521px;
}
@media (max-width: 1186px) {
  .rc5V3YrFHw4Xb4zvnPkJ {
    width: 600px;
  }
}
@media (max-width: 648px) {
  .rc5V3YrFHw4Xb4zvnPkJ {
    width: 100%;
  }
}

._6RrKu7AfUc2dlAK912M {
  grid-row: 2/3;
}
@media (max-width: 1186px) {
  ._6RrKu7AfUc2dlAK912M {
    width: 600px;
    grid-row: 3/4;
  }
}
@media (max-width: 648px) {
  ._6RrKu7AfUc2dlAK912M {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.hWU3sEWmBLkXervGpktt {
  color: var(--primary---content);
  font-size: 45px;
  font-weight: 700;
  line-height: 140.5%;
}
@media (max-width: 425px) {
  .hWU3sEWmBLkXervGpktt {
    font-size: 30px;
  }
}

.sodmx4w9JkrcWRVN7Zyl {
  margin-top: 20px;
  color: var(--secondary---text);
  font-size: 16px;
  font-weight: 400;
  line-height: 180%;
  letter-spacing: 0.32px;
}
@media (max-width: 425px) {
  .sodmx4w9JkrcWRVN7Zyl {
    margin-top: 10px;
    font-size: 16px;
  }
}

.YH_IQlp1I1LqL8xhQMxc {
  margin-bottom: 40px;
  width: 320px;
  color: var(--primary---content);
  font-size: 25px;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: 0.5px;
}
@media (max-width: 425px) {
  .YH_IQlp1I1LqL8xhQMxc {
    margin-bottom: 32px;
    font-size: 20px;
  }
}

.zHsRouIGQGSz9IuaaFo1 {
  width: 600px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px 40px;
  grid-row: 1/3;
}
@media (max-width: 1186px) {
  .zHsRouIGQGSz9IuaaFo1 {
    grid-row: 2/3;
    gap: 40px;
  }
}
@media (max-width: 648px) {
  .zHsRouIGQGSz9IuaaFo1 {
    width: 100%;
  }
}
@media (max-width: 425px) {
  .zHsRouIGQGSz9IuaaFo1 {
    gap: 10px;
  }
}`,"",{version:3,sources:["webpack://./src/pages/main/section/clientSay/index.module.scss"],names:[],mappings:"AAAA;EACE,iBAAA;AACF;AACE;EAHF;IAII,iBAAA;EAEF;AACF;AAAE;EAPF;IAQI,gBAAA;EAGF;AACF;;AADA;EACE,aAAA;EACA,8BAAA;EACA,8BAAA;EACA,+BAAA;EACA,gBAAA;EAAA,WAAA;AAIF;AAFE;EAPF;IAQI,0BAAA;IACA,mCAAA;IACA,qBAAA;EAKF;AACF;AAHE;EAbF;IAcI,SAAA;EAMF;AACF;;AAJA;EACE,YAAA;AAOF;AALE;EAHF;IAII,YAAA;EAQF;AACF;AANE;EAPF;IAQI,WAAA;EASF;AACF;;AAPA;EACE,aAAA;AAUF;AATE;EAFF;IAGI,YAAA;IACA,aAAA;EAYF;AACF;AAXE;EANF;IAOI,WAAA;IACA,aAAA;IACA,sBAAA;IACA,mBAAA;EAcF;AACF;;AAZA;EACE,+BAAA;EAEA,eAAA;EACA,gBAAA;EACA,mBAAA;AAcF;AAZE;EAPF;IAQI,eAAA;EAeF;AACF;;AAbA;EACE,gBAAA;EACA,8BAAA;EAEA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,sBAAA;AAeF;AAbE;EATF;IAUI,gBAAA;IACA,eAAA;EAgBF;AACF;;AAdA;EACE,mBAAA;EACA,YAAA;EAEA,+BAAA;EAEA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,qBAAA;AAeF;AAbE;EAXF;IAYI,mBAAA;IACA,eAAA;EAgBF;AACF;;AAdA;EACE,YAAA;EACA,aAAA;EACA,eAAA;EACA,cAAA;EACA,aAAA;AAiBF;AAfE;EAPF;IAQI,aAAA;IACA,SAAA;EAkBF;AACF;AAhBE;EAZF;IAaI,WAAA;EAmBF;AACF;AAjBE;EAhBF;IAiBI,SAAA;EAoBF;AACF",sourcesContent:[".section {\n  margin-top: 232px;\n\n  @media (max-width: 1024px) {\n    margin-top: 161px;\n  }\n\n  @media (max-width: 425px) {\n    margin-top: 80px;\n  }\n}\n.container {\n  display: grid;\n  justify-content: space-between;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 141px 155px;\n  gap: 40px 0;\n\n  @media (max-width: 1186px) {\n    grid-template-columns: 1fr;\n    grid-template-rows: 141px 1fr 155px;\n    justify-items: center;\n  }\n\n  @media (max-width: 425px) {\n    gap: 18px;\n  }\n}\n.wrapper {\n  width: 521px;\n\n  @media (max-width: 1186px) {\n    width: 600px;\n  }\n\n  @media (max-width: 648px) {\n    width: 100%;\n  }\n}\n.wrapperBtn {\n  grid-row: 2/3;\n  @media (max-width: 1186px) {\n    width: 600px;\n    grid-row: 3/4;\n  }\n  @media (max-width: 648px) {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n}\n.title {\n  color: var(--primary---content);\n\n  font-size: 45px;\n  font-weight: 700;\n  line-height: 140.5%;\n\n  @media (max-width: 425px) {\n    font-size: 30px;\n  }\n}\n.descr {\n  margin-top: 20px;\n  color: var(--secondary---text);\n\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 180%;\n  letter-spacing: 0.32px;\n\n  @media (max-width: 425px) {\n    margin-top: 10px;\n    font-size: 16px;\n  }\n}\n.subtitle {\n  margin-bottom: 40px;\n  width: 320px;\n\n  color: var(--primary---content);\n\n  font-size: 25px;\n  font-weight: 700;\n  line-height: 140%;\n  letter-spacing: 0.5px;\n\n  @media (max-width: 425px) {\n    margin-bottom: 32px;\n    font-size: 20px;\n  }\n}\n.wrapperCard {\n  width: 600px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 30px 40px;\n  grid-row: 1/3;\n\n  @media (max-width: 1186px) {\n    grid-row: 2/3;\n    gap: 40px;\n  }\n\n  @media (max-width: 648px) {\n    width: 100%;\n  }\n\n  @media (max-width: 425px) {\n    gap: 10px;\n  }\n}\n"],sourceRoot:""}]),a.locals={section:"El0mS4ems1Nl_W8Tkq1v",container:"Ewp7es03Y13iodkSPyEM",wrapper:"rc5V3YrFHw4Xb4zvnPkJ",wrapperBtn:"_6RrKu7AfUc2dlAK912M",title:"hWU3sEWmBLkXervGpktt",descr:"sodmx4w9JkrcWRVN7Zyl",subtitle:"YH_IQlp1I1LqL8xhQMxc",wrapperCard:"zHsRouIGQGSz9IuaaFo1"};let d=a},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/main/section/customers/index.module.scss":(e,A,t)=>{t.r(A),t.d(A,{default:()=>d});var n=t(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */"./node_modules/css-loader/dist/runtime/sourceMaps.js"),s=t.n(n),i=t(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */"./node_modules/css-loader/dist/runtime/api.js"),a=t.n(i)()(s());a.push([e.id,`.c_1fxfiaGrYAGa41IRPg {
  margin-top: 170px;
}
@media (max-width: 1120px) {
  .c_1fxfiaGrYAGa41IRPg {
    margin-top: 160px;
  }
}
@media (max-width: 640px) {
  .c_1fxfiaGrYAGa41IRPg {
    margin-top: 80px;
  }
}

.gwc5QEyCcCtbUdSN2MIQ {
  display: flex;
  justify-content: space-between;
}
@media (max-width: 1186px) {
  .gwc5QEyCcCtbUdSN2MIQ {
    gap: 20px;
  }
}
@media (max-width: 1120px) {
  .gwc5QEyCcCtbUdSN2MIQ {
    flex-direction: column-reverse;
    align-items: center;
    gap: 60px;
  }
}
@media (max-width: 640px) {
  .gwc5QEyCcCtbUdSN2MIQ {
    gap: 30px;
  }
}

.nWzDwqtUG_qq1grpupYm {
  margin-top: 31px;
  width: 599px;
  height: 268px;
}
@media (max-width: 1186px) {
  .nWzDwqtUG_qq1grpupYm {
    width: 600px;
    height: 245.122px;
  }
}
@media (max-width: 1120px) {
  .nWzDwqtUG_qq1grpupYm {
    margin-top: 0;
    width: 600px;
    height: 245.122px;
  }
}
@media (max-width: 640px) {
  .nWzDwqtUG_qq1grpupYm {
    width: 319.999px;
    height: 131px;
  }
}

.W8uyQ27D06uDbjlcD0QH {
  width: 491px;
  height: 234px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
}
@media (max-width: 1186px) {
  .W8uyQ27D06uDbjlcD0QH {
    width: 449.085px;
    height: 214.024px;
  }
}
@media (max-width: 640px) {
  .W8uyQ27D06uDbjlcD0QH {
    width: 239.513px;
    height: 114.381px;
  }
}

.QAy4Nsj31GUP2szdeaGI {
  width: 428px;
  height: 187px;
  opacity: 0.8;
  filter: blur(1px);
  position: absolute;
  top: 0;
  right: 0;
}
@media (max-width: 1186px) {
  .QAy4Nsj31GUP2szdeaGI {
    width: 391.463px;
    height: 171.037px;
  }
}
@media (max-width: 640px) {
  .QAy4Nsj31GUP2szdeaGI {
    width: 208.781px;
    height: 91.407px;
  }
}

.XyK3rTsfSOQWgJPs9ofg {
  width: 500px;
}
@media (max-width: 1120px) {
  .XyK3rTsfSOQWgJPs9ofg {
    width: 600px;
    display: flex;
    gap: 25px;
  }
}
@media (max-width: 640px) {
  .XyK3rTsfSOQWgJPs9ofg {
    width: 100%;
    display: block;
  }
}

.jb4jlqyMqFieUpzSigGf {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
@media (max-width: 640px) {
  .jb4jlqyMqFieUpzSigGf {
    gap: 30px;
    align-items: center;
  }
}

.AlnP3O0LEuqZpl0o1nu5 {
  color: var(--primary---content);
  font-size: 45px;
  font-weight: 700;
  line-height: 140.5%;
}
@media (max-width: 640px) {
  .AlnP3O0LEuqZpl0o1nu5 {
    font-size: 30px;
  }
}

.luhmZGPkJ2_lgUVMz6aG {
  margin-top: 20px;
  color: var(--secondary---text);
  font-size: 16px;
  font-weight: 400;
  line-height: 180%;
  letter-spacing: 0.32px;
}
@media (max-width: 1120px) {
  .luhmZGPkJ2_lgUVMz6aG {
    margin-top: 12px;
  }
}
@media (max-width: 640px) {
  .luhmZGPkJ2_lgUVMz6aG {
    margin-top: 10px;
    font-size: 16px;
  }
}`,"",{version:3,sources:["webpack://./src/pages/main/section/customers/index.module.scss"],names:[],mappings:"AAAA;EACE,iBAAA;AACF;AACE;EAHF;IAII,iBAAA;EAEF;AACF;AAAE;EAPF;IAQI,gBAAA;EAGF;AACF;;AADA;EACE,aAAA;EACA,8BAAA;AAIF;AAFE;EAJF;IAKI,SAAA;EAKF;AACF;AAHE;EARF;IASI,8BAAA;IACA,mBAAA;IACA,SAAA;EAMF;AACF;AAJE;EAdF;IAeI,SAAA;EAOF;AACF;;AALA;EACE,gBAAA;EACA,YAAA;EACA,aAAA;AAQF;AANE;EALF;IAMI,YAAA;IACA,iBAAA;EASF;AACF;AAPE;EAVF;IAWI,aAAA;IACA,YAAA;IACA,iBAAA;EAUF;AACF;AARE;EAhBF;IAiBI,gBAAA;IACA,aAAA;EAWF;AACF;;AATA;EACE,YAAA;EACA,aAAA;EACA,kBAAA;EACA,SAAA;EACA,OAAA;EACA,UAAA;AAYF;AAVE;EARF;IASI,gBAAA;IACA,iBAAA;EAaF;AACF;AAXE;EAbF;IAcI,gBAAA;IACA,iBAAA;EAcF;AACF;;AAZA;EACE,YAAA;EACA,aAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;EACA,MAAA;EACA,QAAA;AAeF;AAbE;EATF;IAUI,gBAAA;IACA,iBAAA;EAgBF;AACF;AAdE;EAdF;IAeI,gBAAA;IACA,gBAAA;EAiBF;AACF;;AAfA;EACE,YAAA;AAkBF;AAhBE;EAHF;IAII,YAAA;IACA,aAAA;IACA,SAAA;EAmBF;AACF;AAjBE;EATF;IAUI,WAAA;IACA,cAAA;EAoBF;AACF;;AAlBA;EACE,aAAA;EACA,sBAAA;EACA,SAAA;AAqBF;AAnBE;EALF;IAMI,SAAA;IACA,mBAAA;EAsBF;AACF;;AApBA;EACE,+BAAA;EAEA,eAAA;EACA,gBAAA;EACA,mBAAA;AAsBF;AApBE;EAPF;IAQI,eAAA;EAuBF;AACF;;AArBA;EACE,gBAAA;EACA,8BAAA;EAEA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,sBAAA;AAuBF;AArBE;EATF;IAUI,gBAAA;EAwBF;AACF;AAtBE;EAbF;IAcI,gBAAA;IACA,eAAA;EAyBF;AACF",sourcesContent:[".section {\n  margin-top: 170px;\n\n  @media (max-width: 1120px) {\n    margin-top: 160px;\n  }\n\n  @media (max-width: 640px) {\n    margin-top: 80px;\n  }\n}\n.wrapper {\n  display: flex;\n  justify-content: space-between;\n\n  @media (max-width: 1186px) {\n    gap: 20px;\n  }\n\n  @media (max-width: 1120px) {\n    flex-direction: column-reverse;\n    align-items: center;\n    gap: 60px;\n  }\n\n  @media (max-width: 640px) {\n    gap: 30px;\n  }\n}\n.img {\n  margin-top: 31px;\n  width: 599px;\n  height: 268px;\n\n  @media (max-width: 1186px) {\n    width: 600px;\n    height: 245.122px;\n  }\n\n  @media (max-width: 1120px) {\n    margin-top: 0;\n    width: 600px;\n    height: 245.122px;\n  }\n\n  @media (max-width: 640px) {\n    width: 319.999px;\n    height: 131px;\n  }\n}\n.honda {\n  width: 491px;\n  height: 234px;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n\n  @media (max-width: 1186px) {\n    width: 449.085px;\n    height: 214.024px;\n  }\n\n  @media (max-width: 640px) {\n    width: 239.513px;\n    height: 114.381px;\n  }\n}\n.toyota {\n  width: 428px;\n  height: 187px;\n  opacity: 0.8;\n  filter: blur(1px);\n  position: absolute;\n  top: 0;\n  right: 0;\n\n  @media (max-width: 1186px) {\n    width: 391.463px;\n    height: 171.037px;\n  }\n\n  @media (max-width: 640px) {\n    width: 208.781px;\n    height: 91.407px;\n  }\n}\n.container {\n  width: 500px;\n\n  @media (max-width: 1120px) {\n    width: 600px;\n    display: flex;\n    gap: 25px;\n  }\n\n  @media (max-width: 640px) {\n    width: 100%;\n    display: block;\n  }\n}\n.containerWrapper {\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n\n  @media (max-width: 640px) {\n    gap: 30px;\n    align-items: center;\n  }\n}\n.title {\n  color: var(--primary---content);\n\n  font-size: 45px;\n  font-weight: 700;\n  line-height: 140.5%;\n\n  @media (max-width: 640px) {\n    font-size: 30px;\n  }\n}\n.subtitle {\n  margin-top: 20px;\n  color: var(--secondary---text);\n\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 180%;\n  letter-spacing: 0.32px;\n\n  @media (max-width: 1120px) {\n    margin-top: 12px;\n  }\n\n  @media (max-width: 640px) {\n    margin-top: 10px;\n    font-size: 16px;\n  }\n}\n"],sourceRoot:""}]),a.locals={section:"c_1fxfiaGrYAGa41IRPg",wrapper:"gwc5QEyCcCtbUdSN2MIQ",img:"nWzDwqtUG_qq1grpupYm",honda:"W8uyQ27D06uDbjlcD0QH",toyota:"QAy4Nsj31GUP2szdeaGI",container:"XyK3rTsfSOQWgJPs9ofg",containerWrapper:"jb4jlqyMqFieUpzSigGf",title:"AlnP3O0LEuqZpl0o1nu5",subtitle:"luhmZGPkJ2_lgUVMz6aG"};let d=a},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/main/section/eightSection/eightSection.scss":(e,A,t)=>{t.r(A),t.d(A,{default:()=>d});var n=t(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */"./node_modules/css-loader/dist/runtime/sourceMaps.js"),s=t.n(n),i=t(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */"./node_modules/css-loader/dist/runtime/api.js"),a=t.n(i)()(s());a.push([e.id,`.eightSlider .swiper-button-prev,
.eightSlider .swiper-button-next {
  width: 35px;
  height: 35px;
  display: none;
  background: var(--primary---accent);
  border-radius: 50%;
  color: var(--primary---white);
}
.eightSlider .swiper-button-prev::after,
.eightSlider .swiper-button-next::after {
  font-size: 17px;
}
@media (max-width: 767px) {
  .eightSlider .swiper-button-prev,
  .eightSlider .swiper-button-next {
    display: flex;
  }
}
.eightSlider .swiper-button-prev {
  left: 0;
}
.eightSlider .swiper-button-next {
  right: 0;
}`,"",{version:3,sources:["webpack://./src/pages/main/section/eightSection/eightSection.scss"],names:[],mappings:"AACE;;EAEE,WAAA;EACA,YAAA;EAEA,aAAA;EACA,mCAAA;EACA,kBAAA;EACA,6BAAA;AADJ;AAGI;;EACE,eAAA;AAAN;AAGI;EAdF;;IAeI,aAAA;EACJ;AACF;AACE;EACE,OAAA;AACJ;AACE;EACE,QAAA;AACJ",sourcesContent:[".eightSlider {\n  .swiper-button-prev,\n  .swiper-button-next {\n    width: 35px;\n    height: 35px;\n\n    display: none;\n    background: var(--primary---accent);\n    border-radius: 50%;\n    color: var(--primary---white);\n\n    &::after {\n      font-size: 17px;\n    }\n\n    @media (max-width: 767px) {\n      display: flex;\n    }\n  }\n  .swiper-button-prev {\n    left: 0;\n  }\n  .swiper-button-next {\n    right: 0;\n  }\n}\n"],sourceRoot:""}]);let d=a},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/main/section/eightSection/index.module.scss":(e,A,t)=>{t.r(A),t.d(A,{default:()=>d});var n=t(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */"./node_modules/css-loader/dist/runtime/sourceMaps.js"),s=t.n(n),i=t(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */"./node_modules/css-loader/dist/runtime/api.js"),a=t.n(i)()(s());a.push([e.id,`.BAsgxpA4WNoKejPqVvhH {
  margin-top: 220px;
}
@media (max-width: 1120px) {
  .BAsgxpA4WNoKejPqVvhH {
    margin-top: 160px;
  }
}
@media (max-width: 767px) {
  .BAsgxpA4WNoKejPqVvhH {
    margin-top: 70px;
  }
}

.B223xhzfBvdGoXKzEKoL {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
}
@media (max-width: 615px) {
  .B223xhzfBvdGoXKzEKoL {
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
    align-items: flex-start;
  }
}

.lFqOyXpwDt5fN1oL8lQm {
  color: var(--primary---content);
  font-size: 45px;
  font-weight: 700;
  line-height: 140.5%; /* 63.225px */
}
@media (max-width: 767px) {
  .lFqOyXpwDt5fN1oL8lQm {
    font-size: 30px;
  }
}

@media (max-width: 767px) {
  .LFT9gt5cxZT15TOWN9qS {
    display: flex;
    justify-content: center;
  }
}

.l624qOkOE2lN0tM12Fmp {
  grid-column: 1/3;
  filter: drop-shadow(0px 35px 35px rgba(0, 0, 0, 0.1));
}
@media (max-width: 1250px) {
  .l624qOkOE2lN0tM12Fmp {
    width: 720px;
  }
}
@media (max-width: 767px) {
  .l624qOkOE2lN0tM12Fmp {
    width: 320px;
    grid-row: 2/3;
    grid-column: 1/2;
  }
}
@media (max-width: 359px) {
  .l624qOkOE2lN0tM12Fmp {
    width: 280px;
  }
}

.C5NdvKmXAIuM6iEVOgq4 {
  width: 387px;
}
@media (max-width: 1120px) {
  .C5NdvKmXAIuM6iEVOgq4 {
    width: 350px;
  }
}
@media (max-width: 767px) {
  .C5NdvKmXAIuM6iEVOgq4 {
    width: 320px;
  }
}
@media (max-width: 359px) {
  .C5NdvKmXAIuM6iEVOgq4 {
    width: 280px;
  }
}`,"",{version:3,sources:["webpack://./src/pages/main/section/eightSection/index.module.scss"],names:[],mappings:"AAAA;EACE,iBAAA;AACF;AACE;EAHF;IAII,iBAAA;EAEF;AACF;AAAE;EAPF;IAQI,gBAAA;EAGF;AACF;;AAiBA;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,mBAAA;AAdF;AAeE;EALF;IAMI,sBAAA;IACA,SAAA;IACA,mBAAA;IACA,uBAAA;EAZF;AACF;;AAcA;EACE,+BAAA;EAEA,eAAA;EACA,gBAAA;EACA,mBAAA,EAAA,aAAA;AAZF;AAcE;EAPF;IAQI,eAAA;EAXF;AACF;;AAcE;EADF;IAEI,aAAA;IACA,uBAAA;EAVF;AACF;;AAYA;EACE,gBAAA;EACA,qDAAA;AATF;AAUE;EAHF;IAII,YAAA;EAPF;AACF;AASE;EAPF;IAQI,YAAA;IACA,aAAA;IACA,gBAAA;EANF;AACF;AAQE;EAbF;IAcI,YAAA;EALF;AACF;;AAOA;EACE,YAAA;AAJF;AAME;EAHF;IAII,YAAA;EAHF;AACF;AAKE;EAPF;IAQI,YAAA;EAFF;AACF;AAIE;EAXF;IAYI,YAAA;EADF;AACF",sourcesContent:[".section {\n  margin-top: 220px;\n\n  @media (max-width: 1120px) {\n    margin-top: 160px;\n  }\n\n  @media (max-width: 767px) {\n    margin-top: 70px;\n  }\n}\n// .wrapper {\n//   display: grid;\n//   grid-template-columns: 410px 180px;\n//   grid-template-rows: 63px 360px;\n//   align-items: center;\n//   justify-content: space-between;\n//   gap: 63px 0;\n\n//   @media (max-width: 1024px) {\n//       gap: 60px 0;\n//   }\n\n//   @media (max-width: 767px) {\n//     grid-template-columns: 1fr;\n//     grid-template-rows: 42px 1fr 35px;\n//     gap: 30px;\n//   }\n// }\n.top{\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 50px;\n  @media(max-width: 615px) {\n    flex-direction: column;\n    gap: 10px;\n    margin-bottom: 20px;\n    align-items: flex-start;\n  }\n}\n.title {\n  color: var(--primary---content);\n\n  font-size: 45px;\n  font-weight: 700;\n  line-height: 140.5%; /* 63.225px */\n\n  @media (max-width: 767px) {\n    font-size: 30px;\n  }\n}\n.btn {\n  @media (max-width: 767px) {\n    display: flex;\n    justify-content: center;\n  }\n}\n.slider {\n  grid-column: 1/3;\n  filter: drop-shadow(0px 35px 35px rgba(0, 0, 0, 0.1));\n  @media (max-width: 1250px) {\n    width: 720px;\n  }\n\n  @media (max-width: 767px) {\n    width: 320px;\n    grid-row: 2/3;\n    grid-column: 1/2;\n  }\n\n  @media (max-width: 359px) {\n    width: 280px;\n  }\n}\n.slide {\n  width: 387px;\n\n  @media (max-width: 1120px) {\n    width: 350px;\n  }\n\n  @media (max-width: 767px) {\n    width: 320px;\n  }\n\n  @media (max-width: 359px) {\n    width: 280px;\n  }\n}\n"],sourceRoot:""}]),a.locals={section:"BAsgxpA4WNoKejPqVvhH",top:"B223xhzfBvdGoXKzEKoL",title:"lFqOyXpwDt5fN1oL8lQm",btn:"LFT9gt5cxZT15TOWN9qS",slider:"l624qOkOE2lN0tM12Fmp",slide:"C5NdvKmXAIuM6iEVOgq4"};let d=a},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/main/section/hero/firstSection.scss":(e,A,t)=>{t.r(A),t.d(A,{default:()=>d});var n=t(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */"./node_modules/css-loader/dist/runtime/sourceMaps.js"),s=t.n(n),i=t(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */"./node_modules/css-loader/dist/runtime/api.js"),a=t.n(i)()(s());a.push([e.id,`.firstSlider .swiper-button-prev,
.firstSlider .swiper-button-next {
  width: 53px;
  height: 53px;
  background: var(--primary---white);
  border-radius: 50%;
  top: 47%;
  color: var(--primary---accent);
}
.firstSlider .swiper-button-prev::after,
.firstSlider .swiper-button-next::after {
  font-size: 24px;
}
@media (max-width: 640px) {
  .firstSlider .swiper-button-prev,
  .firstSlider .swiper-button-next {
    width: 35px;
    height: 35px;
  }
  .firstSlider .swiper-button-prev::after,
  .firstSlider .swiper-button-next::after {
    font-size: 17px;
  }
}
.firstSlider .swiper-button-prev {
  left: 0;
}
.firstSlider .swiper-button-next {
  right: 0;
}`,"",{version:3,sources:["webpack://./src/pages/main/section/hero/firstSection.scss"],names:[],mappings:"AACE;;EAEE,WAAA;EACA,YAAA;EACA,kCAAA;EACA,kBAAA;EACA,QAAA;EACA,8BAAA;AAAJ;AAEI;;EACE,eAAA;AACN;AAEI;EAbF;;IAcI,WAAA;IACA,YAAA;EAEJ;EAAI;;IACE,eAAA;EAGN;AACF;AAAE;EACE,OAAA;AAEJ;AAAE;EACE,QAAA;AAEJ",sourcesContent:[".firstSlider {\n  .swiper-button-prev,\n  .swiper-button-next {\n    width: 53px;\n    height: 53px;\n    background: var(--primary---white);\n    border-radius: 50%;\n    top: 47%;\n    color: var(--primary---accent);\n\n    &::after {\n      font-size: 24px;\n    }\n\n    @media (max-width: 640px) {\n      width: 35px;\n      height: 35px;\n\n      &::after {\n        font-size: 17px;\n      }\n    }\n  }\n  .swiper-button-prev {\n    left: 0;\n  }\n  .swiper-button-next {\n    right: 0;\n  }\n}\n"],sourceRoot:""}]);let d=a},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/main/section/hero/index.module.scss":(e,A,t)=>{t.r(A),t.d(A,{default:()=>p});var n=t(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */"./node_modules/css-loader/dist/runtime/sourceMaps.js"),s=t.n(n),i=t(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */"./node_modules/css-loader/dist/runtime/api.js"),a=t.n(i),d=t(/*! ../../../../../node_modules/css-loader/dist/runtime/getUrl.js */"./node_modules/css-loader/dist/runtime/getUrl.js"),o=t.n(d),r=new URL(t(/*! ../../img/Bg.jpg */"./src/pages/main/img/Bg.jpg"),t.b),l=a()(s()),m=o()(r);l.push([e.id,`.dngz9pk6vF_lmz7IJujA {
  margin: 0 auto;
  padding: 120px 0 184px;
  width: min(100%, 1440px);
  background: url(${m}) center center/cover no-repeat;
}
@media (max-width: 1120px) {
  .dngz9pk6vF_lmz7IJujA {
    padding: 61px 0 129px;
  }
}
@media (max-width: 640px) {
  .dngz9pk6vF_lmz7IJujA {
    padding: 50px 0 94px;
  }
}
@media (max-width: 425px) {
  .dngz9pk6vF_lmz7IJujA {
    padding-bottom: 80px;
  }
}

.QSv94TSSiOtX09mAmFra {
  display: grid;
  grid-template-columns: 470px 600px;
  grid-template-rows: 191px 45px;
  justify-content: space-between;
  grid-gap: 60px 0;
  gap: 60px 0;
}
@media (max-width: 1120px) {
  .QSv94TSSiOtX09mAmFra {
    grid-template-columns: 1fr;
    grid-template-rows: 130px 1fr 45px;
    justify-items: center;
  }
}
@media (max-width: 640px) {
  .QSv94TSSiOtX09mAmFra {
    grid-template-rows: 114px 1fr 45px;
    gap: 40px 0;
  }
}

.M5h_IcQ8ZSkD_sSQ1Ocw {
  width: 534px;
  color: var(--primary---white);
  font-family: Gilroy;
  font-size: 60px;
  font-weight: 800;
  line-height: 108.5%;
  letter-spacing: 1.2px;
}
@media (max-width: 1120px) {
  .M5h_IcQ8ZSkD_sSQ1Ocw {
    width: 600px;
    text-align: center;
  }
}
@media (max-width: 640px) {
  .M5h_IcQ8ZSkD_sSQ1Ocw {
    width: 100%;
    font-size: 35px;
    letter-spacing: 0.7px;
  }
}
@media (max-width: 425px) {
  .M5h_IcQ8ZSkD_sSQ1Ocw {
    padding: 0 4px;
  }
}

.dCj8SePQtwoXYRLU7JSK {
  grid-row: 2/3;
}
@media (max-width: 1120px) {
  .dCj8SePQtwoXYRLU7JSK {
    grid-row: 3/4;
  }
}

.pXVxc_AjAGFRz6xBBuZx {
  width: 600px;
  grid-row: 1/3;
  align-self: flex-end;
}
@media (max-width: 1120px) {
  .pXVxc_AjAGFRz6xBBuZx {
    grid-row: 2/3;
  }
}
@media (max-width: 640px) {
  .pXVxc_AjAGFRz6xBBuZx {
    width: 320px;
  }
}
@media (max-width: 359px) {
  .pXVxc_AjAGFRz6xBBuZx {
    width: 270px;
  }
}

.ydUq_VXxK9uUh3nAneve {
  width: 490px;
}
@media (max-width: 640px) {
  .ydUq_VXxK9uUh3nAneve {
    width: 270px;
  }
}
@media (max-width: 359px) {
  .ydUq_VXxK9uUh3nAneve {
    width: 220px;
  }
}`,"",{version:3,sources:["webpack://./src/pages/main/section/hero/index.module.scss"],names:[],mappings:"AAAA;EACE,cAAA;EACA,sBAAA;EACA,wBAAA;EACA,iFAAA;AACF;AACE;EANF;IAOI,qBAAA;EAEF;AACF;AAAE;EAVF;IAWI,oBAAA;EAGF;AACF;AADE;EAdF;IAeI,oBAAA;EAIF;AACF;;AAFA;EACE,aAAA;EACA,kCAAA;EACA,8BAAA;EACA,8BAAA;EACA,gBAAA;EAAA,WAAA;AAKF;AAHE;EAPF;IAQI,0BAAA;IACA,kCAAA;IACA,qBAAA;EAMF;AACF;AAJE;EAbF;IAcI,kCAAA;IACA,WAAA;EAOF;AACF;;AALA;EACE,YAAA;EACA,6BAAA;EACA,mBAAA;EACA,eAAA;EACA,gBAAA;EACA,mBAAA;EACA,qBAAA;AAQF;AANE;EATF;IAUI,YAAA;IACA,kBAAA;EASF;AACF;AARE;EAbF;IAcI,WAAA;IACA,eAAA;IACA,qBAAA;EAWF;AACF;AATE;EAnBF;IAoBI,cAAA;EAYF;AACF;;AAVA;EACE,aAAA;AAaF;AAZE;EAFF;IAGI,aAAA;EAeF;AACF;;AAbA;EACE,YAAA;EACA,aAAA;EACA,oBAAA;AAgBF;AAdE;EALF;IAMI,aAAA;EAiBF;AACF;AAfE;EATF;IAUI,YAAA;EAkBF;AACF;AAhBE;EAbF;IAcI,YAAA;EAmBF;AACF;;AAjBA;EACE,YAAA;AAoBF;AAnBE;EAFF;IAGI,YAAA;EAsBF;AACF;AArBE;EALF;IAMI,YAAA;EAwBF;AACF",sourcesContent:[".section {\n  margin: 0 auto;\n  padding: 120px 0 184px;\n  width: min(100%, 1440px);\n  background: url('../../img/Bg.jpg') center center/cover no-repeat;\n\n  @media (max-width: 1120px) {\n    padding: 61px 0 129px;\n  }\n\n  @media (max-width: 640px) {\n    padding: 50px 0 94px;\n  }\n\n  @media (max-width: 425px) {\n    padding-bottom: 80px;\n  }\n}\n.wrapper {\n  display: grid;\n  grid-template-columns: 470px 600px;\n  grid-template-rows: 191px 45px;\n  justify-content: space-between;\n  gap: 60px 0;\n\n  @media (max-width: 1120px) {\n    grid-template-columns: 1fr;\n    grid-template-rows: 130px 1fr 45px;\n    justify-items: center;\n  }\n\n  @media (max-width: 640px) {\n    grid-template-rows: 114px 1fr 45px;\n    gap: 40px 0;\n  }\n}\n.title {\n  width: 534px;\n  color: var(--primary---white);\n  font-family: Gilroy;\n  font-size: 60px;\n  font-weight: 800;\n  line-height: 108.5%;\n  letter-spacing: 1.2px;\n\n  @media (max-width: 1120px) {\n    width: 600px;\n    text-align: center;\n  }\n  @media (max-width: 640px) {\n    width: 100%;\n    font-size: 35px;\n    letter-spacing: 0.7px;\n  }\n\n  @media (max-width: 425px) {\n    padding: 0 4px;\n  }\n}\n.btn {\n  grid-row: 2/3;\n  @media (max-width: 1120px) {\n    grid-row: 3/4;\n  }\n}\n.slider {\n  width: 600px;\n  grid-row: 1/3;\n  align-self: flex-end;\n\n  @media (max-width: 1120px) {\n    grid-row: 2/3;\n  }\n\n  @media (max-width: 640px) {\n    width: 320px;\n  }\n\n  @media (max-width: 359px) {\n    width: 270px;\n  }\n}\n.slide {\n  width: 490px;\n  @media (max-width: 640px) {\n    width: 270px;\n  }\n  @media (max-width: 359px) {\n    width: 220px;\n  }\n}\n"],sourceRoot:""}]),l.locals={section:"dngz9pk6vF_lmz7IJujA",wrapper:"QSv94TSSiOtX09mAmFra",title:"M5h_IcQ8ZSkD_sSQ1Ocw",btn:"dCj8SePQtwoXYRLU7JSK",slider:"pXVxc_AjAGFRz6xBBuZx",slide:"ydUq_VXxK9uUh3nAneve"};let p=l},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/main/section/howToWork/index.module.scss":(e,A,t)=>{t.r(A),t.d(A,{default:()=>d});var n=t(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */"./node_modules/css-loader/dist/runtime/sourceMaps.js"),s=t.n(n),i=t(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */"./node_modules/css-loader/dist/runtime/api.js"),a=t.n(i)()(s());a.push([e.id,`.MgQxFfBtV5fRCw5KZ3I_ {
  margin: 0 auto;
  width: min(100%, 1440px);
}

.YxuAunj45pyFsLTi_Ufe {
  margin: 0 auto;
  padding: 60px 60px 64px;
  width: 605px;
  border-radius: 5px;
  background: var(--primary---white);
  box-shadow: 0px 20px 25px 0px rgba(0, 0, 0, 0.1);
  top: -40px;
  z-index: 1;
}
@media (max-width: 1024px) {
  .YxuAunj45pyFsLTi_Ufe {
    padding: 40px;
    width: 565px;
    top: -44px;
  }
}
@media (max-width: 640px) {
  .YxuAunj45pyFsLTi_Ufe {
    padding: 20px;
    width: 100%;
    top: -40px;
  }
}

.E8Ghiwp7Qvhz4Bu99qEQ {
  color: var(--primary---content);
  text-align: center;
  font-size: 45px;
  font-weight: 700;
  line-height: 140.5%;
}
@media (max-width: 640px) {
  .E8Ghiwp7Qvhz4Bu99qEQ {
    font-size: 30px;
  }
}

.oSsMKlFuHEeAL_eLZWpa {
  color: var(--primary---accent);
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  line-height: 140%;
}
@media (max-width: 640px) {
  .oSsMKlFuHEeAL_eLZWpa {
    padding: 0 35px;
    font-size: 24px;
  }
}

.EjG1vC3PUgYlzPJIi8op {
  margin-top: 20px;
  color: var(--secondary---text);
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 180%;
  letter-spacing: 0.32px;
}
@media (max-width: 640px) {
  .EjG1vC3PUgYlzPJIi8op {
    margin-top: 13px;
  }
}

._PGuOuYas_17jBBxKgAy {
  width: 500px;
  position: absolute;
  z-index: 0;
  top: 190px;
  left: -90px;
  transition: all 0.2s;
}
@media (max-width: 1024px) {
  ._PGuOuYas_17jBBxKgAy {
    width: 396px;
    top: 321px;
    left: -105px;
  }
}
@media (max-width: 640px) {
  ._PGuOuYas_17jBBxKgAy {
    width: 274px;
    top: 366px;
    left: -94px;
  }
}

.w2mnuPYUrkDLN0Ru7KfE {
  width: 500px;
  position: absolute;
  z-index: 0;
  top: 26px;
  right: -40px;
  transition: all 0.2s;
}
@media (max-width: 1024px) {
  .w2mnuPYUrkDLN0Ru7KfE {
    display: none;
  }
}`,"",{version:3,sources:["webpack://./src/pages/main/section/howToWork/index.module.scss"],names:[],mappings:"AAAA;EACE,cAAA;EACA,wBAAA;AACF;;AACA;EACE,cAAA;EACA,uBAAA;EACA,YAAA;EACA,kBAAA;EACA,kCAAA;EAEA,gDAAA;EACA,UAAA;EACA,UAAA;AACF;AACE;EAXF;IAYI,aAAA;IACA,YAAA;IACA,UAAA;EAEF;AACF;AAAE;EAjBF;IAkBI,aAAA;IACA,WAAA;IACA,UAAA;EAGF;AACF;;AADA;EACE,+BAAA;EACA,kBAAA;EAEA,eAAA;EACA,gBAAA;EACA,mBAAA;AAGF;AADE;EARF;IASI,eAAA;EAIF;AACF;;AAFA;EACE,8BAAA;EACA,kBAAA;EAEA,eAAA;EACA,gBAAA;EACA,iBAAA;AAIF;AAFE;EARF;IASI,eAAA;IACA,eAAA;EAKF;AACF;;AAHA;EACE,gBAAA;EACA,8BAAA;EACA,kBAAA;EAEA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,sBAAA;AAKF;AAHE;EAVF;IAWI,gBAAA;EAMF;AACF;;AAJA;EACE,YAAA;EACA,kBAAA;EACA,UAAA;EACA,UAAA;EACA,WAAA;EACA,oBAAA;AAOF;AALE;EARF;IASI,YAAA;IACA,UAAA;IACA,YAAA;EAQF;AACF;AANE;EAdF;IAeI,YAAA;IACA,UAAA;IACA,WAAA;EASF;AACF;;AAPA;EACE,YAAA;EACA,kBAAA;EACA,UAAA;EACA,SAAA;EACA,YAAA;EACA,oBAAA;AAUF;AARE;EARF;IASI,aAAA;EAWF;AACF",sourcesContent:[".section {\n  margin: 0 auto;\n  width: min(100%, 1440px);\n}\n.card {\n  margin: 0 auto;\n  padding: 60px 60px 64px;\n  width: 605px;\n  border-radius: 5px;\n  background: var(--primary---white);\n\n  box-shadow: 0px 20px 25px 0px rgba(0, 0, 0, 0.1);\n  top: -40px;\n  z-index: 1;\n\n  @media (max-width: 1024px) {\n    padding: 40px;\n    width: 565px;\n    top: -44px;\n  }\n\n  @media (max-width: 640px) {\n    padding: 20px;\n    width: 100%;\n    top: -40px;\n  }\n}\n.cardTitle {\n  color: var(--primary---content);\n  text-align: center;\n\n  font-size: 45px;\n  font-weight: 700;\n  line-height: 140.5%;\n\n  @media (max-width: 640px) {\n    font-size: 30px;\n  }\n}\n.cardSubTitle {\n  color: var(--primary---accent);\n  text-align: center;\n\n  font-size: 30px;\n  font-weight: 700;\n  line-height: 140%;\n\n  @media (max-width: 640px) {\n    padding: 0 35px;\n    font-size: 24px;\n  }\n}\n.cardDescr {\n  margin-top: 20px;\n  color: var(--secondary---text);\n  text-align: center;\n\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 180%;\n  letter-spacing: 0.32px;\n\n  @media (max-width: 640px) {\n    margin-top: 13px;\n  }\n}\n.honda {\n  width: 500px;\n  position: absolute;\n  z-index: 0;\n  top: 190px;\n  left: -90px;\n  transition: all 0.2s;\n\n  @media (max-width: 1024px) {\n    width: 396px;\n    top: 321px;\n    left: -105px;\n  }\n\n  @media (max-width: 640px) {\n    width: 274px;\n    top: 366px;\n    left: -94px;\n  }\n}\n.lexus {\n  width: 500px;\n  position: absolute;\n  z-index: 0;\n  top: 26px;\n  right: -40px;\n  transition: all 0.2s;\n\n  @media (max-width: 1024px) {\n    display: none;\n  }\n\n}\n"],sourceRoot:""}]),a.locals={section:"MgQxFfBtV5fRCw5KZ3I_",card:"YxuAunj45pyFsLTi_Ufe",cardTitle:"E8Ghiwp7Qvhz4Bu99qEQ",cardSubTitle:"oSsMKlFuHEeAL_eLZWpa",cardDescr:"EjG1vC3PUgYlzPJIi8op",honda:"_PGuOuYas_17jBBxKgAy",lexus:"w2mnuPYUrkDLN0Ru7KfE"};let d=a},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/main/section/perfectCard/index.module.scss":(e,A,t)=>{t.r(A),t.d(A,{default:()=>d});var n=t(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */"./node_modules/css-loader/dist/runtime/sourceMaps.js"),s=t.n(n),i=t(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */"./node_modules/css-loader/dist/runtime/api.js"),a=t.n(i)()(s());a.push([e.id,`.ENvFJ0DrYLTIQdHjSblr {
  margin-top: 251px;
}
@media (max-width: 768px) {
  .ENvFJ0DrYLTIQdHjSblr {
    margin-top: 327px;
  }
}
@media (max-width: 640px) {
  .ENvFJ0DrYLTIQdHjSblr {
    margin-top: 275px;
  }
}
@media (max-width: 425px) {
  .ENvFJ0DrYLTIQdHjSblr {
    margin-top: 225px;
  }
}

.aqmS02yRstcHIDK0ZI6E {
  width: 400px;
  color: var(--primary---content);
  font-size: 45px;
  font-weight: 700;
  line-height: 140.5%;
}
@media (max-width: 768px) {
  .aqmS02yRstcHIDK0ZI6E {
    width: 100%;
  }
}
@media (max-width: 640px) {
  .aqmS02yRstcHIDK0ZI6E {
    color: var(--primary---content);
    font-size: 30px;
    font-weight: 700;
    line-height: 140.5%;
  }
}

.r7sfHaKnBi6RNRXS4sp4 {
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
@media (max-width: 714px) {
  .r7sfHaKnBi6RNRXS4sp4 {
    justify-content: center;
  }
}
@media (max-width: 640px) {
  .r7sfHaKnBi6RNRXS4sp4 {
    margin-top: 28px;
  }
}

.kF7sut2OAm_mP7rPRctp {
  display: flex;
  flex-direction: column;
  gap: 34px;
}
@media (max-width: 640px) {
  .kF7sut2OAm_mP7rPRctp {
    gap: 20px;
  }
}

.vMnVKw5_l5KBNrAfUNec {
  width: 548px;
  height: 560.723px;
}
@media (max-width: 1024px) {
  .vMnVKw5_l5KBNrAfUNec {
    display: none;
  }
}
@media (max-width: 714px) {
  .vMnVKw5_l5KBNrAfUNec {
    margin-top: 30px;
    display: block;
  }
}
@media (max-width: 640px) {
  .vMnVKw5_l5KBNrAfUNec {
    margin-top: 17px;
    width: 100%;
    height: auto;
  }
}

.qYKiuM7vh2mHZV_vUf7E {
  display: none;
}
@media (max-width: 1024px) {
  .qYKiuM7vh2mHZV_vUf7E {
    display: block;
  }
}
@media (max-width: 768px) {
  .qYKiuM7vh2mHZV_vUf7E {
    width: 246.177px;
    height: 629px;
  }
}
@media (max-width: 714px) {
  .qYKiuM7vh2mHZV_vUf7E {
    display: none;
  }
}`,"",{version:3,sources:["webpack://./src/pages/main/section/perfectCard/index.module.scss"],names:[],mappings:"AAAA;EACE,iBAAA;AACF;AACE;EAHF;IAII,iBAAA;EAEF;AACF;AAAE;EAPF;IAQI,iBAAA;EAGF;AACF;AADE;EAXF;IAYI,iBAAA;EAIF;AACF;;AAFA;EACE,YAAA;EACA,+BAAA;EAEA,eAAA;EACA,gBAAA;EACA,mBAAA;AAIF;AAFE;EARF;IASI,WAAA;EAKF;AACF;AAHE;EAZF;IAaI,+BAAA;IACA,eAAA;IACA,gBAAA;IACA,mBAAA;EAMF;AACF;;AAJA;EACE,gBAAA;EACA,aAAA;EACA,8BAAA;EACA,eAAA;AAOF;AALE;EANF;IAOI,uBAAA;EAQF;AACF;AANE;EAVF;IAWI,gBAAA;EASF;AACF;;AAPA;EACE,aAAA;EACA,sBAAA;EACA,SAAA;AAUF;AARE;EALF;IAMI,SAAA;EAWF;AACF;;AATA;EACE,YAAA;EACA,iBAAA;AAYF;AAVE;EAJF;IAKI,aAAA;EAaF;AACF;AAXE;EARF;IASI,gBAAA;IACA,cAAA;EAcF;AACF;AAZE;EAbF;IAcI,gBAAA;IACA,WAAA;IACA,YAAA;EAeF;AACF;;AAbA;EACE,aAAA;AAgBF;AAdE;EAHF;IAII,cAAA;EAiBF;AACF;AAfE;EAPF;IAQI,gBAAA;IACA,aAAA;EAkBF;AACF;AAhBE;EAZF;IAaI,aAAA;EAmBF;AACF",sourcesContent:[".section {\n  margin-top: 251px;\n\n  @media (max-width: 768px) {\n    margin-top: 327px;\n  }\n\n  @media (max-width: 640px) {\n    margin-top: 275px;\n  }\n\n  @media (max-width: 425px) {\n    margin-top: 225px;\n  }\n}\n.title {\n  width: 400px;\n  color: var(--primary---content);\n\n  font-size: 45px;\n  font-weight: 700;\n  line-height: 140.5%;\n\n  @media (max-width: 768px) {\n    width: 100%;\n  }\n\n  @media (max-width: 640px) {\n    color: var(--primary---content);\n    font-size: 30px;\n    font-weight: 700;\n    line-height: 140.5%;\n  }\n}\n.wrapper {\n  margin-top: 60px;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n\n  @media (max-width: 714px) {\n    justify-content: center;\n  }\n\n  @media (max-width: 640px) {\n    margin-top: 28px;\n  }\n}\n.steps {\n  display: flex;\n  flex-direction: column;\n  gap: 34px;\n\n  @media (max-width: 640px) {\n    gap: 20px;\n  }\n}\n.img {\n  width: 548px;\n  height: 560.723px;\n\n  @media (max-width: 1024px) {\n    display: none;\n  }\n\n  @media (max-width: 714px) {\n    margin-top: 30px;\n    display: block;\n  }\n\n  @media (max-width: 640px) {\n    margin-top: 17px;\n    width: 100%;\n    height: auto;\n  }\n}\n.imgT {\n  display: none;\n\n  @media (max-width: 1024px) {\n    display: block;\n  }\n\n  @media (max-width: 768px) {\n    width: 246.177px;\n    height: 629px;\n  }\n\n  @media (max-width: 714px) {\n    display: none;\n  }\n}\n"],sourceRoot:""}]),a.locals={section:"ENvFJ0DrYLTIQdHjSblr",title:"aqmS02yRstcHIDK0ZI6E",wrapper:"r7sfHaKnBi6RNRXS4sp4",steps:"kF7sut2OAm_mP7rPRctp",img:"vMnVKw5_l5KBNrAfUNec",imgT:"qYKiuM7vh2mHZV_vUf7E"};let d=a},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/main/section/seventhSection/index.module.scss":(e,A,t)=>{t.r(A),t.d(A,{default:()=>d});var n=t(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */"./node_modules/css-loader/dist/runtime/sourceMaps.js"),s=t.n(n),i=t(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */"./node_modules/css-loader/dist/runtime/api.js"),a=t.n(i)()(s());a.push([e.id,`.G6N9QVsX5CLPXtzG7FhZ {
  margin-top: 220px;
}
@media (max-width: 1186px) {
  .G6N9QVsX5CLPXtzG7FhZ {
    margin-top: 160px;
  }
}
@media (max-width: 640px) {
  .G6N9QVsX5CLPXtzG7FhZ {
    margin-top: 48px;
  }
}

.LwY3WhP8C6VVpvEH7eR4 {
  color: var(--primary---content);
  font-size: 45px;
  font-weight: 700;
  line-height: 140.5%;
}
@media (max-width: 640px) {
  .LwY3WhP8C6VVpvEH7eR4 {
    font-size: 30px;
  }
}

.LBJCx5NH0pkX2_fNCqTF {
  margin-top: 60px;
}
@media (max-width: 640px) {
  .LBJCx5NH0pkX2_fNCqTF {
    margin-top: 30px;
  }
}

.X_0QlsJ_L40ldiGH4N2s {
  height: 322px;
  border-radius: 5px;
  box-shadow: 0px 20px 25px 0px rgba(0, 0, 0, 0.1);
}
@media (max-width: 1186px) {
  .X_0QlsJ_L40ldiGH4N2s {
    width: 720px;
  }
}
@media (max-width: 767px) {
  .X_0QlsJ_L40ldiGH4N2s {
    width: 320px;
    height: auto;
  }
}
@media (max-width: 359px) {
  .X_0QlsJ_L40ldiGH4N2s {
    width: 100%;
  }
}

.adyuwaaqBOooFsvP6Ebw {
  display: flex;
}
@media (max-width: 767px) {
  .adyuwaaqBOooFsvP6Ebw {
    flex-direction: column;
  }
}

@media (max-width: 640px) {
  .dpp1yy_x8jze0tqJb2m6 {
    height: 215px;
  }
}
.dpp1yy_x8jze0tqJb2m6 img {
  -o-object-fit: cover;
     object-fit: cover;
}

.UXA0oHwnVpJwG0JGuElf {
  padding: 54px 60px 0 39px;
}
@media (max-width: 1186px) {
  .UXA0oHwnVpJwG0JGuElf {
    padding: 40px 61px 0 40px;
  }
}
@media (max-width: 767px) {
  .UXA0oHwnVpJwG0JGuElf {
    padding: 20px;
  }
}

.ZxLOts_w9Ls2DLcHJfDx {
  color: var(--secondary---text);
  font-size: 16px;
  font-weight: 400;
  line-height: 180%;
  letter-spacing: 0.32px;
}

.kEQL5S33CHHpbcQ4qtu0 {
  margin-top: 11px;
  width: 640px;
  color: var(--primary---content);
  font-size: 20px;
  font-weight: 600;
  line-height: 25px;
}
@media (max-width: 1186px) {
  .kEQL5S33CHHpbcQ4qtu0 {
    width: 318px;
    height: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
@media (max-width: 767px) {
  .kEQL5S33CHHpbcQ4qtu0 {
    width: 100%;
    height: 225px;
    font-size: 18px;
    display: none;
  }
}
@media (max-width: 359px) {
  .kEQL5S33CHHpbcQ4qtu0 {
    height: auto;
  }
}`,"",{version:3,sources:["webpack://./src/pages/main/section/seventhSection/index.module.scss"],names:[],mappings:"AAAA;EACE,iBAAA;AACF;AACE;EAHF;IAII,iBAAA;EAEF;AACF;AAAE;EAPF;IAQI,gBAAA;EAGF;AACF;;AADA;EACE,+BAAA;EAEA,eAAA;EACA,gBAAA;EACA,mBAAA;AAGF;AADE;EAPF;IAQI,eAAA;EAIF;AACF;;AAFA;EACE,gBAAA;AAKF;AAHE;EAHF;IAII,gBAAA;EAMF;AACF;;AAJA;EACE,aAAA;EACA,kBAAA;EACA,gDAAA;AAOF;AALE;EALF;IAMI,YAAA;EAQF;AACF;AANE;EATF;IAUI,YAAA;IACA,YAAA;EASF;AACF;AAPE;EAdF;IAeI,WAAA;EAUF;AACF;;AARA;EACE,aAAA;AAWF;AATE;EAHF;IAII,sBAAA;EAYF;AACF;;AATE;EADF;IAEI,aAAA;EAaF;AACF;AAZE;EACE,oBAAA;KAAA,iBAAA;AAcJ;;AAXA;EACE,yBAAA;AAcF;AAZE;EAHF;IAII,yBAAA;EAeF;AACF;AAbE;EAPF;IAQI,aAAA;EAgBF;AACF;;AAdA;EACE,8BAAA;EAEA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,sBAAA;AAgBF;;AAdA;EACE,gBAAA;EACA,YAAA;EACA,+BAAA;EAEA,eAAA;EACA,gBAAA;EACA,iBAAA;AAgBF;AAdE;EATF;IAUI,YAAA;IACA,aAAA;IACA,gBAAA;IACA,uBAAA;EAiBF;AACF;AAfE;EAhBF;IAiBI,WAAA;IACA,aAAA;IACA,eAAA;IACA,aAAA;EAkBF;AACF;AAhBE;EAvBF;IAwBI,YAAA;EAmBF;AACF",sourcesContent:[".section {\n  margin-top: 220px;\n\n  @media (max-width: 1186px) {\n    margin-top: 160px;\n  }\n\n  @media (max-width: 640px) {\n    margin-top: 48px;\n  }\n}\n.title {\n  color: var(--primary---content);\n\n  font-size: 45px;\n  font-weight: 700;\n  line-height: 140.5%;\n\n  @media (max-width: 640px) {\n    font-size: 30px;\n  }\n}\n.wrapper {\n  margin-top: 60px;\n\n  @media (max-width: 640px) {\n    margin-top: 30px;\n  }\n}\n.slider {\n  height: 322px;\n  border-radius: 5px;\n  box-shadow: 0px 20px 25px 0px rgba(0, 0, 0, 0.1);\n\n  @media (max-width: 1186px) {\n    width: 720px;\n  }\n\n  @media (max-width: 767px) {\n    width: 320px;\n    height: auto;\n  }\n\n  @media (max-width: 359px) {\n    width: 100%;\n  }\n}\n.slide {\n  display: flex;\n\n  @media (max-width: 767px) {\n    flex-direction: column;\n  }\n}\n.img {\n  @media (max-width: 640px) {\n    height: 215px;\n  }\n  img {\n    object-fit: cover;\n  }\n}\n.slideWrapper {\n  padding: 54px 60px 0 39px;\n\n  @media (max-width: 1186px) {\n    padding: 40px 61px 0 40px;\n  }\n\n  @media (max-width: 767px) {\n    padding: 20px;\n  }\n}\n.name {\n  color: var(--secondary---text);\n\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 180%;\n  letter-spacing: 0.32px;\n}\n.text {\n  margin-top: 11px;\n  width: 640px;\n  color: var(--primary---content);\n\n  font-size: 20px;\n  font-weight: 600;\n  line-height: 25px;\n\n  @media (max-width: 1186px) {\n    width: 318px;\n    height: 200px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  @media (max-width: 767px) {\n    width: 100%;\n    height: 225px;\n    font-size: 18px;\n    display: none;\n  }\n\n  @media (max-width: 359px) {\n    height: auto;\n  }\n}\n"],sourceRoot:""}]),a.locals={section:"G6N9QVsX5CLPXtzG7FhZ",title:"LwY3WhP8C6VVpvEH7eR4",wrapper:"LBJCx5NH0pkX2_fNCqTF",slider:"X_0QlsJ_L40ldiGH4N2s",slide:"adyuwaaqBOooFsvP6Ebw",img:"dpp1yy_x8jze0tqJb2m6",slideWrapper:"UXA0oHwnVpJwG0JGuElf",name:"ZxLOts_w9Ls2DLcHJfDx",text:"kEQL5S33CHHpbcQ4qtu0"};let d=a},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/main/section/seventhSection/seventhSection.scss":(e,A,t)=>{t.r(A),t.d(A,{default:()=>d});var n=t(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */"./node_modules/css-loader/dist/runtime/sourceMaps.js"),s=t.n(n),i=t(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */"./node_modules/css-loader/dist/runtime/api.js"),a=t.n(i)()(s());a.push([e.id,`.seventhSwiper .swiper-button-prev,
.seventhSwiper .swiper-button-next {
  width: 53px;
  height: 53px;
  background: var(--primary---accent);
  border-radius: 50%;
  color: var(--primary---white);
}
.seventhSwiper .swiper-button-prev::after,
.seventhSwiper .swiper-button-next::after {
  font-size: 24px;
}
@media (max-width: 1186px) {
  .seventhSwiper .swiper-button-prev,
  .seventhSwiper .swiper-button-next {
    top: 47%;
  }
}
@media (max-width: 767px) {
  .seventhSwiper .swiper-button-prev,
  .seventhSwiper .swiper-button-next {
    width: 35px;
    height: 35px;
    top: 22%;
  }
  .seventhSwiper .swiper-button-prev::after,
  .seventhSwiper .swiper-button-next::after {
    font-size: 17px;
  }
}
.seventhSwiper .swiper-button-prev {
  left: 0;
}
.seventhSwiper .swiper-button-next {
  right: 0;
}`,"",{version:3,sources:["webpack://./src/pages/main/section/seventhSection/seventhSection.scss"],names:[],mappings:"AACE;;EAEE,WAAA;EACA,YAAA;EACA,mCAAA;EACA,kBAAA;EACA,6BAAA;AAAJ;AAEI;;EACE,eAAA;AACN;AAEI;EAZF;;IAaI,QAAA;EAEJ;AACF;AAAI;EAhBF;;IAiBI,WAAA;IACA,YAAA;IAEA,QAAA;EAGJ;EADI;;IACE,eAAA;EAIN;AACF;AADE;EACE,OAAA;AAGJ;AADE;EACE,QAAA;AAGJ",sourcesContent:[".seventhSwiper {\n  .swiper-button-prev,\n  .swiper-button-next {\n    width: 53px;\n    height: 53px;\n    background: var(--primary---accent);\n    border-radius: 50%;\n    color: var(--primary---white);\n\n    &::after {\n      font-size: 24px;\n    }\n\n    @media (max-width: 1186px) {\n      top: 47%;\n    }\n\n    @media (max-width: 767px) {\n      width: 35px;\n      height: 35px;\n\n      top: 22%;\n\n      &::after {\n        font-size: 17px;\n      }\n    }\n  }\n  .swiper-button-prev {\n    left: 0;\n  }\n  .swiper-button-next {\n    right: 0;\n  }\n}\n"],sourceRoot:""}]);let d=a},"./src/UI/links/linkSolidWhite/index.module.scss":(e,A,t)=>{t.r(A),t.d(A,{default:()=>E});var n=t(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=t.n(n),i=t(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */"./node_modules/style-loader/dist/runtime/styleDomAPI.js"),a=t.n(i),d=t(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */"./node_modules/style-loader/dist/runtime/insertBySelector.js"),o=t.n(d),r=t(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),l=t.n(r),m=t(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */"./node_modules/style-loader/dist/runtime/insertStyleElement.js"),p=t.n(m),c=t(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */"./node_modules/style-loader/dist/runtime/styleTagTransform.js"),x=t.n(c),u=t(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../../node_modules/sass-loader/dist/cjs.js!./index.module.scss */"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/UI/links/linkSolidWhite/index.module.scss"),g={};g.styleTagTransform=x(),g.setAttributes=l(),g.insert=o().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=p(),s()(u.default,g);let E=u.default&&u.default.locals?u.default.locals:void 0},"./src/components/article/index.scss":(e,A,t)=>{t.r(A),t.d(A,{default:()=>E});var n=t(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=t.n(n),i=t(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */"./node_modules/style-loader/dist/runtime/styleDomAPI.js"),a=t.n(i),d=t(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */"./node_modules/style-loader/dist/runtime/insertBySelector.js"),o=t.n(d),r=t(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),l=t.n(r),m=t(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */"./node_modules/style-loader/dist/runtime/insertStyleElement.js"),p=t.n(m),c=t(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */"./node_modules/style-loader/dist/runtime/styleTagTransform.js"),x=t.n(c),u=t(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./index.scss */"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/article/index.scss"),g={};g.styleTagTransform=x(),g.setAttributes=l(),g.insert=o().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=p(),s()(u.default,g);let E=u.default&&u.default.locals?u.default.locals:void 0},"./src/components/metrics/index.scss":(e,A,t)=>{t.r(A),t.d(A,{default:()=>E});var n=t(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=t.n(n),i=t(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */"./node_modules/style-loader/dist/runtime/styleDomAPI.js"),a=t.n(i),d=t(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */"./node_modules/style-loader/dist/runtime/insertBySelector.js"),o=t.n(d),r=t(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),l=t.n(r),m=t(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */"./node_modules/style-loader/dist/runtime/insertStyleElement.js"),p=t.n(m),c=t(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */"./node_modules/style-loader/dist/runtime/styleTagTransform.js"),x=t.n(c),u=t(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./index.scss */"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/metrics/index.scss"),g={};g.styleTagTransform=x(),g.setAttributes=l(),g.insert=o().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=p(),s()(u.default,g);let E=u.default&&u.default.locals?u.default.locals:void 0},"./src/components/step/index.module.scss":(e,A,t)=>{t.r(A),t.d(A,{default:()=>E});var n=t(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=t.n(n),i=t(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */"./node_modules/style-loader/dist/runtime/styleDomAPI.js"),a=t.n(i),d=t(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */"./node_modules/style-loader/dist/runtime/insertBySelector.js"),o=t.n(d),r=t(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),l=t.n(r),m=t(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */"./node_modules/style-loader/dist/runtime/insertStyleElement.js"),p=t.n(m),c=t(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */"./node_modules/style-loader/dist/runtime/styleTagTransform.js"),x=t.n(c),u=t(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./index.module.scss */"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/step/index.module.scss"),g={};g.styleTagTransform=x(),g.setAttributes=l(),g.insert=o().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=p(),s()(u.default,g);let E=u.default&&u.default.locals?u.default.locals:void 0},"./src/pages/main/section/advantages/index.module.scss":(e,A,t)=>{t.r(A),t.d(A,{default:()=>E});var n=t(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=t.n(n),i=t(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */"./node_modules/style-loader/dist/runtime/styleDomAPI.js"),a=t.n(i),d=t(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */"./node_modules/style-loader/dist/runtime/insertBySelector.js"),o=t.n(d),r=t(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),l=t.n(r),m=t(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */"./node_modules/style-loader/dist/runtime/insertStyleElement.js"),p=t.n(m),c=t(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */"./node_modules/style-loader/dist/runtime/styleTagTransform.js"),x=t.n(c),u=t(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js!./index.module.scss */"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/main/section/advantages/index.module.scss"),g={};g.styleTagTransform=x(),g.setAttributes=l(),g.insert=o().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=p(),s()(u.default,g);let E=u.default&&u.default.locals?u.default.locals:void 0},"./src/pages/main/section/clientSay/index.module.scss":(e,A,t)=>{t.r(A),t.d(A,{default:()=>E});var n=t(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=t.n(n),i=t(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */"./node_modules/style-loader/dist/runtime/styleDomAPI.js"),a=t.n(i),d=t(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */"./node_modules/style-loader/dist/runtime/insertBySelector.js"),o=t.n(d),r=t(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),l=t.n(r),m=t(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */"./node_modules/style-loader/dist/runtime/insertStyleElement.js"),p=t.n(m),c=t(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */"./node_modules/style-loader/dist/runtime/styleTagTransform.js"),x=t.n(c),u=t(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js!./index.module.scss */"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/main/section/clientSay/index.module.scss"),g={};g.styleTagTransform=x(),g.setAttributes=l(),g.insert=o().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=p(),s()(u.default,g);let E=u.default&&u.default.locals?u.default.locals:void 0},"./src/pages/main/section/customers/index.module.scss":(e,A,t)=>{t.r(A),t.d(A,{default:()=>E});var n=t(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=t.n(n),i=t(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */"./node_modules/style-loader/dist/runtime/styleDomAPI.js"),a=t.n(i),d=t(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */"./node_modules/style-loader/dist/runtime/insertBySelector.js"),o=t.n(d),r=t(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),l=t.n(r),m=t(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */"./node_modules/style-loader/dist/runtime/insertStyleElement.js"),p=t.n(m),c=t(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */"./node_modules/style-loader/dist/runtime/styleTagTransform.js"),x=t.n(c),u=t(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js!./index.module.scss */"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/main/section/customers/index.module.scss"),g={};g.styleTagTransform=x(),g.setAttributes=l(),g.insert=o().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=p(),s()(u.default,g);let E=u.default&&u.default.locals?u.default.locals:void 0},"./src/pages/main/section/eightSection/eightSection.scss":(e,A,t)=>{t.r(A),t.d(A,{default:()=>E});var n=t(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=t.n(n),i=t(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */"./node_modules/style-loader/dist/runtime/styleDomAPI.js"),a=t.n(i),d=t(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */"./node_modules/style-loader/dist/runtime/insertBySelector.js"),o=t.n(d),r=t(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),l=t.n(r),m=t(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */"./node_modules/style-loader/dist/runtime/insertStyleElement.js"),p=t.n(m),c=t(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */"./node_modules/style-loader/dist/runtime/styleTagTransform.js"),x=t.n(c),u=t(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js!./eightSection.scss */"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/main/section/eightSection/eightSection.scss"),g={};g.styleTagTransform=x(),g.setAttributes=l(),g.insert=o().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=p(),s()(u.default,g);let E=u.default&&u.default.locals?u.default.locals:void 0},"./src/pages/main/section/eightSection/index.module.scss":(e,A,t)=>{t.r(A),t.d(A,{default:()=>E});var n=t(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=t.n(n),i=t(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */"./node_modules/style-loader/dist/runtime/styleDomAPI.js"),a=t.n(i),d=t(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */"./node_modules/style-loader/dist/runtime/insertBySelector.js"),o=t.n(d),r=t(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),l=t.n(r),m=t(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */"./node_modules/style-loader/dist/runtime/insertStyleElement.js"),p=t.n(m),c=t(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */"./node_modules/style-loader/dist/runtime/styleTagTransform.js"),x=t.n(c),u=t(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js!./index.module.scss */"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/main/section/eightSection/index.module.scss"),g={};g.styleTagTransform=x(),g.setAttributes=l(),g.insert=o().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=p(),s()(u.default,g);let E=u.default&&u.default.locals?u.default.locals:void 0},"./src/pages/main/section/hero/firstSection.scss":(e,A,t)=>{t.r(A),t.d(A,{default:()=>E});var n=t(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=t.n(n),i=t(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */"./node_modules/style-loader/dist/runtime/styleDomAPI.js"),a=t.n(i),d=t(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */"./node_modules/style-loader/dist/runtime/insertBySelector.js"),o=t.n(d),r=t(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),l=t.n(r),m=t(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */"./node_modules/style-loader/dist/runtime/insertStyleElement.js"),p=t.n(m),c=t(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */"./node_modules/style-loader/dist/runtime/styleTagTransform.js"),x=t.n(c),u=t(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js!./firstSection.scss */"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/main/section/hero/firstSection.scss"),g={};g.styleTagTransform=x(),g.setAttributes=l(),g.insert=o().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=p(),s()(u.default,g);let E=u.default&&u.default.locals?u.default.locals:void 0},"./src/pages/main/section/hero/index.module.scss":(e,A,t)=>{t.r(A),t.d(A,{default:()=>E});var n=t(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=t.n(n),i=t(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */"./node_modules/style-loader/dist/runtime/styleDomAPI.js"),a=t.n(i),d=t(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */"./node_modules/style-loader/dist/runtime/insertBySelector.js"),o=t.n(d),r=t(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),l=t.n(r),m=t(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */"./node_modules/style-loader/dist/runtime/insertStyleElement.js"),p=t.n(m),c=t(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */"./node_modules/style-loader/dist/runtime/styleTagTransform.js"),x=t.n(c),u=t(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js!./index.module.scss */"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/main/section/hero/index.module.scss"),g={};g.styleTagTransform=x(),g.setAttributes=l(),g.insert=o().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=p(),s()(u.default,g);let E=u.default&&u.default.locals?u.default.locals:void 0},"./src/pages/main/section/howToWork/index.module.scss":(e,A,t)=>{t.r(A),t.d(A,{default:()=>E});var n=t(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=t.n(n),i=t(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */"./node_modules/style-loader/dist/runtime/styleDomAPI.js"),a=t.n(i),d=t(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */"./node_modules/style-loader/dist/runtime/insertBySelector.js"),o=t.n(d),r=t(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),l=t.n(r),m=t(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */"./node_modules/style-loader/dist/runtime/insertStyleElement.js"),p=t.n(m),c=t(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */"./node_modules/style-loader/dist/runtime/styleTagTransform.js"),x=t.n(c),u=t(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js!./index.module.scss */"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/main/section/howToWork/index.module.scss"),g={};g.styleTagTransform=x(),g.setAttributes=l(),g.insert=o().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=p(),s()(u.default,g);let E=u.default&&u.default.locals?u.default.locals:void 0},"./src/pages/main/section/perfectCard/index.module.scss":(e,A,t)=>{t.r(A),t.d(A,{default:()=>E});var n=t(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=t.n(n),i=t(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */"./node_modules/style-loader/dist/runtime/styleDomAPI.js"),a=t.n(i),d=t(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */"./node_modules/style-loader/dist/runtime/insertBySelector.js"),o=t.n(d),r=t(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),l=t.n(r),m=t(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */"./node_modules/style-loader/dist/runtime/insertStyleElement.js"),p=t.n(m),c=t(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */"./node_modules/style-loader/dist/runtime/styleTagTransform.js"),x=t.n(c),u=t(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js!./index.module.scss */"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/main/section/perfectCard/index.module.scss"),g={};g.styleTagTransform=x(),g.setAttributes=l(),g.insert=o().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=p(),s()(u.default,g);let E=u.default&&u.default.locals?u.default.locals:void 0},"./src/pages/main/section/seventhSection/index.module.scss":(e,A,t)=>{t.r(A),t.d(A,{default:()=>E});var n=t(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=t.n(n),i=t(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */"./node_modules/style-loader/dist/runtime/styleDomAPI.js"),a=t.n(i),d=t(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */"./node_modules/style-loader/dist/runtime/insertBySelector.js"),o=t.n(d),r=t(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),l=t.n(r),m=t(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */"./node_modules/style-loader/dist/runtime/insertStyleElement.js"),p=t.n(m),c=t(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */"./node_modules/style-loader/dist/runtime/styleTagTransform.js"),x=t.n(c),u=t(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js!./index.module.scss */"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/main/section/seventhSection/index.module.scss"),g={};g.styleTagTransform=x(),g.setAttributes=l(),g.insert=o().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=p(),s()(u.default,g);let E=u.default&&u.default.locals?u.default.locals:void 0},"./src/pages/main/section/seventhSection/seventhSection.scss":(e,A,t)=>{t.r(A),t.d(A,{default:()=>E});var n=t(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=t.n(n),i=t(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */"./node_modules/style-loader/dist/runtime/styleDomAPI.js"),a=t.n(i),d=t(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */"./node_modules/style-loader/dist/runtime/insertBySelector.js"),o=t.n(d),r=t(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),l=t.n(r),m=t(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */"./node_modules/style-loader/dist/runtime/insertStyleElement.js"),p=t.n(m),c=t(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */"./node_modules/style-loader/dist/runtime/styleTagTransform.js"),x=t.n(c),u=t(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js!./seventhSection.scss */"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/main/section/seventhSection/seventhSection.scss"),g={};g.styleTagTransform=x(),g.setAttributes=l(),g.insert=o().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=p(),s()(u.default,g);let E=u.default&&u.default.locals?u.default.locals:void 0},"data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA":e=>{e.exports="data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA"},"./src/img/articles/article1.jpg":(e,A,t)=>{e.exports=t.p+"assets/article1.jpg"},"./src/img/articles/article2.jpg":(e,A,t)=>{e.exports=t.p+"assets/article2.jpg"},"./src/img/articles/article3.jpg":(e,A,t)=>{e.exports=t.p+"assets/article3.jpg"},"./src/pages/main/img/Bg.jpg":(e,A,t)=>{e.exports=t.p+"assets/Bg.jpg"},"./src/pages/main/img/Corola.png":(e,A,t)=>{e.exports=t.p+"assets/Corola.png"},"./src/pages/main/img/Dodge.png":(e,A,t)=>{e.exports=t.p+"assets/Dodge.png"},"./src/pages/main/img/Ford.png":(e,A,t)=>{e.exports=t.p+"assets/Ford.png"},"./src/pages/main/img/Honda.png":(e,A,t)=>{e.exports=t.p+"assets/Honda.png"},"./src/pages/main/img/HondaLeft.png":(e,A,t)=>{e.exports=t.p+"assets/HondaLeft.png"},"./src/pages/main/img/Lexus.png":(e,A,t)=>{e.exports=t.p+"assets/Lexus.png"},"./src/pages/main/img/Nissan.png":(e,A,t)=>{e.exports=t.p+"assets/Nissan.png"},"./src/pages/main/img/Phone.png":(e,A,t)=>{e.exports=t.p+"assets/Phone.png"},"./src/pages/main/img/Phone_T.png":(e,A,t)=>{e.exports=t.p+"assets/Phone_T.png"},"./src/pages/main/img/Ram.png":(e,A,t)=>{e.exports=t.p+"assets/Ram.png"},"./src/pages/main/img/family.jpg":(e,A,t)=>{e.exports=t.p+"assets/family.jpg"},"./src/pages/main/img/triangleDown.svg":(e,A,t)=>{e.exports=t.p+"assets/triangleDown.svg"},"./src/pages/main/img/triangleUp.svg":(e,A,t)=>{e.exports=t.p+"assets/triangleUp.svg"}}]);
//# sourceMappingURL=src_pages_main_index_jsx-data_application_font-woff_charset_utf-8_base64_d09GRgABAAAAAAZgABAA-488bee.js.map