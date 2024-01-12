"use strict";(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["src_pages_singleProduct_index_jsx"],{"./src/pages/singleProduct/SingleProduct.jsx":(e,A,t)=>{t.r(A),t.d(A,{SingleProduct:()=>m});var i=t(/*! react */"./node_modules/react/index.js"),n=t.n(i),r=t(/*! swiper/react */"./node_modules/swiper/swiper-react.mjs");t(/*! ./singleProduct.scss */"./src/pages/singleProduct/singleProduct.scss");var s=t(/*! ../../data/inventory.js */"./src/data/inventory.js"),l=t(/*! react-router-dom */"./node_modules/react-router/esm/react-router.js"),o=t(/*! ../../UI/links/linkSolid/LinkSolid.jsx */"./src/UI/links/linkSolid/LinkSolid.jsx"),a=t(/*! swiper/modules */"./node_modules/swiper/modules/index.mjs");t(/*! swiper/css */"./node_modules/swiper/swiper.css"),t(/*! swiper/css/free-mode */"./node_modules/swiper/modules/free-mode.css"),t(/*! swiper/css/navigation */"./node_modules/swiper/modules/navigation.css"),t(/*! swiper/css/thumbs */"./node_modules/swiper/modules/thumbs.css");let m=()=>{let{idCar:e}=(0,l.useParams)(),[A,t]=(0,i.useState)(null),m=s.inventory.find(A=>A.id===e);return n().createElement("div",{className:"single-product",key:m.id},n().createElement("div",{className:"container"},n().createElement("div",{className:"single-product__body"},n().createElement("div",{className:"single-product__top"},n().createElement("h2",{className:"single-product__title"},m.name+" "+m.model)),n().createElement("div",{className:"single-product__center"},n().createElement("div",{className:"single-product__left"},n().createElement(r.Swiper,{style:{"--swiper-navigation-color":"#fff","--swiper-pagination-color":"#fff"},spaceBetween:10,navigation:!0,thumbs:{swiper:A},modules:[a.FreeMode,a.Navigation,a.Thumbs],className:"mySwiper2 single-product__myswiper2"},m.images.map((e,A)=>n().createElement(r.SwiperSlide,{key:A},n().createElement("img",{className:"single-product__swiper-img",src:e})))),n().createElement(r.Swiper,{onSwiper:t,spaceBetween:10,slidesPerView:4,freeMode:!0,watchSlidesProgress:!0,modules:[a.FreeMode,a.Navigation,a.Thumbs],className:"mySwiper single-product__myswiper"},m.images.map((e,A)=>n().createElement(r.SwiperSlide,{key:A},n().createElement("img",{className:"single-product__swiper-img",src:e}))))),n().createElement("div",{className:"single-product__right single-right"},n().createElement("div",{className:"single-right__body"},n().createElement("div",{className:"single-right__columns"},n().createElement("div",{className:"single-right__column"},n().createElement("div",{className:"single-right__column-item"},n().createElement("div",{className:"single-right__column-item-top"},"Price"),n().createElement("div",{className:"single-right__column-item-bottom single-right__column-item-bottom--price"},`${parseFloat(m.price).toLocaleString()} $`)),n().createElement("div",{className:"single-right__column-item"},n().createElement("div",{className:"single-right__column-item-top"},"Body"),n().createElement("div",{className:"single-right__column-item-bottom"},m.bodyType)),n().createElement("div",{className:"single-right__column-item"},n().createElement("div",{className:"single-right__column-item-top"},"Transmission"),n().createElement("div",{className:"single-right__column-item-bottom"},m.transmission))),n().createElement("div",{className:"single-right__column"},n().createElement("div",{className:"single-right__column-item"},n().createElement("div",{className:"single-right__column-item-top"},"Year"),n().createElement("div",{className:"single-right__column-item-bottom"},m.year)),n().createElement("div",{className:"single-right__column-item"},n().createElement("div",{className:"single-right__column-item-top"},"Kilometres"," "),n().createElement("div",{className:"single-right__column-item-bottom"},`${parseFloat(m.kilometres).toLocaleString()}`)))),n().createElement("div",{className:"single-right__detail"},n().createElement("h3",{className:"single-right__title"},"Detail"),n().createElement("div",{className:"single-right__detail-columns"},n().createElement("div",{className:"single-right__detail-column"},n().createElement("div",{className:"single-right__detail-column-item"},m.occasion),n().createElement("div",{className:"single-right__detail-column-item"},m.cylinders),n().createElement("div",{className:"single-right__detail-column-item"},m.acceleration),n().createElement("div",{className:"single-right__detail-column-item"},m.rate)),n().createElement("div",{className:"single-right__detail-column"},n().createElement("div",{className:"single-right__detail-column-item"},"Capacity ",m.capacity),n().createElement("div",{className:"single-right__detail-column-item"},m.workinkVolume),n().createElement("div",{className:"single-right__detail-column-item"},"Power steering"),n().createElement("div",{className:"single-right__detail-column-item"},"2500-4000 rpm")))),n().createElement("div",{className:"single-right__desc"},n().createElement("h3",{className:"single-right__desc-title"},"Description"),n().createElement("p",{className:"single-right__desc-text"},m.description),n().createElement(o.default,null,"Request more information"))))),n().createElement("div",{className:"single-product__bottom"}))))}},"./src/pages/singleProduct/index.jsx":(e,A,t)=>{t.r(A),t.d(A,{default:()=>o});var i=t(/*! react */"./node_modules/react/index.js"),n=t.n(i),r=t(/*! react-helmet */"./node_modules/react-helmet/es/Helmet.js"),s=t(/*! ./SingleProduct */"./src/pages/singleProduct/SingleProduct.jsx"),l=t(/*! ../../components/calculator/Calculator.jsx */"./src/components/calculator/Calculator.jsx");let o=()=>n().createElement(n().Fragment,null,n().createElement(r.Helmet,null,n().createElement("title",null,"Main page - VAC")),n().createElement(s.SingleProduct,null),n().createElement(l.default,{title:"Calculate the installment plan for this car."}))},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/singleProduct/singleProduct.scss":(e,A,t)=>{t.r(A),t.d(A,{default:()=>l});var i=t(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */"./node_modules/css-loader/dist/runtime/sourceMaps.js"),n=t.n(i),r=t(/*! ../../../node_modules/css-loader/dist/runtime/api.js */"./node_modules/css-loader/dist/runtime/api.js"),s=t.n(r)()(n());s.push([e.id,`.single-product {
  margin-bottom: 200px;
}
@media (max-width: 768px) {
  .single-product {
    margin-bottom: 80px;
  }
}
.single-product__body {
  display: flex;
  flex-direction: column;
  margin-top: 40px;
}
.single-product__center {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
@media (max-width: 1280px) {
  .single-product__center {
    flex-direction: column;
    gap: 100px;
    align-items: center;
  }
}
@media (max-width: 567px) {
  .single-product__center {
    gap: 50px;
  }
}
.single-product__title {
  color: #41456b;
  color: var(--Primary-Content, #41456b);
  font-family: Gilroy;
  font-size: 45px;
  font-style: normal;
  font-weight: 700;
  line-height: 140.5%;
  margin-bottom: 35px;
}
@media (max-width: 1280px) {
  .single-product__title {
    text-align: center;
  }
}
@media (max-width: 768px) {
  .single-product__title {
    font-size: 50px;
    margin-bottom: 20px;
  }
}
@media (max-width: 567px) {
  .single-product__title {
    font-size: 30px;
  }
}
.single-product__left {
  width: 100%;
  max-width: 650px;
  max-height: 480px;
}
.single-product__img {
  max-width: 650px;
  max-height: 353px;
  height: 100%;
  width: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}
.single-product__myswiper2 {
  height: 100%;
  max-height: 366px;
  width: 100%;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}
.single-product__myswiper2 .swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 360px;
  background-size: cover;
  background-position: center;
}
.single-product__myswiper {
  height: 100%;
  max-height: 111px;
  box-sizing: border-box;
  padding: 10px 0;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}
.single-product__myswiper .swiper-slide {
  height: 105px !important;
}
.single-product__myswiper .swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  width: 25%;
  opacity: 0.4;
}
@media (max-width: 567px) {
  .single-product__myswiper .swiper-slide {
    height: 65px !important;
  }
}
.single-product__myswiper .swiper-slide-thumb-active {
  opacity: 1;
}
.single-product__myswiper .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}
.single-product__myswiper .swiper-slide-thumb-active {
  opacity: 1;
}
.single-product__swiper-img {
  display: block;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
  cursor: pointer;
}

.single-right {
  max-width: 500px;
  width: 100%;
}
@media (max-width: 1280px) {
  .single-right {
    max-width: none;
    max-width: initial;
  }
}
.single-right__body {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 0 30px;
}
@media (max-width: 567px) {
  .single-right__body {
    padding: 0;
  }
}
@media (max-width: 567px) {
  .single-right__detail-columns {
    flex-direction: column;
    gap: 30px;
  }
}
.single-right__columns, .single-right__detail-columns {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  border-bottom: 1px solid #d7d7d7;
  padding-bottom: 40px;
}
.single-right__column, .single-right__detail-column {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.single-right__column-item-top, .single-right__title, .single-right__desc-title {
  color: #606276;
  color: var(--Secondary-Text, #606276);
  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 159%; /* 25.44px */
}
.single-right__column-item-bottom {
  color: #41456b;
  font-family: Gilroy;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 35px */
  letter-spacing: 0.5px;
}
@media (max-width: 567px) {
  .single-right__column-item-bottom {
    font-size: 20px;
  }
}
.single-right__column-item-bottom--price {
  color: #7481ff !important;
}
.single-right__title, .single-right__desc-title {
  margin-bottom: 20px;
}
.single-right__detail-column-item {
  color: #41456b;
  color: var(--Primary-Content, #41456b);
  font-family: Gilroy;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 25px; /* 125% */
  max-width: 160px;
}
@media (max-width: 567px) {
  .single-right__detail-column-item {
    font-size: 18px;
    max-width: none;
    max-width: initial;
  }
}
.single-right__desc-text {
  color: #606276;
  color: var(--Secondary-Text, #606276);
  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 180%; /* 28.8px */
  letter-spacing: 0.32px;
  margin-bottom: 40px;
}

.swiper {
  width: 100%;
  height: 100%;
}`,"",{version:3,sources:["webpack://./src/pages/singleProduct/singleProduct.scss"],names:[],mappings:"AAAA;EACE,oBAAA;AACF;AAAE;EAFF;IAGI,mBAAA;EAGF;AACF;AAFE;EACE,aAAA;EACA,sBAAA;EACA,gBAAA;AAIJ;AAFE;EACE,aAAA;EACA,uBAAA;EACA,8BAAA;AAIJ;AAHI;EAJF;IAKI,sBAAA;IACA,UAAA;IACA,mBAAA;EAMJ;AACF;AALI;EATF;IAUI,SAAA;EAQJ;AACF;AANE;EACE,cAAA;EAAA,sCAAA;EACA,mBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,mBAAA;AAQJ;AAPI;EARF;IASI,kBAAA;EAUJ;AACF;AATI;EAXF;IAYI,eAAA;IACA,mBAAA;EAYJ;AACF;AAXI;EAfF;IAgBI,eAAA;EAcJ;AACF;AAZE;EACE,WAAA;EACA,gBAAA;EACA,iBAAA;AAcJ;AAZE;EACE,gBAAA;EACA,iBAAA;EACA,YAAA;EACA,WAAA;EACA,oBAAA;KAAA,iBAAA;AAcJ;AAZE;EACE,YAAA;EACA,iBAAA;EACA,WAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;AAcJ;AAbI;EACE,kBAAA;EACA,eAAA;EACA,gBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,iBAAA;EACA,sBAAA;EACA,2BAAA;AAeN;AAZE;EACE,YAAA;EACA,iBAAA;EACA,sBAAA;EACA,eAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;AAcJ;AAbI;EAYE,wBAAA;AAcN;AA1BI;EACE,kBAAA;EACA,eAAA;EACA,gBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EAEA,sBAAA;EACA,2BAAA;EAEA,UAAA;EAEA,YAAA;AAaN;AAZM;EAdF;IAeI,uBAAA;EAeN;AACF;AAbI;EACE,UAAA;AAeN;AAbI;EACE,UAAA;EACA,YAAA;EACA,YAAA;AAeN;AAbI;EACE,UAAA;AAeN;AAZE;EACE,cAAA;EACA,WAAA;EACA,YAAA;EACA,oBAAA;KAAA,iBAAA;EACA,eAAA;AAcJ;;AAVA;EACE,gBAAA;EACA,WAAA;AAaF;AAZE;EAHF;IAII,eAAA;IAAA,kBAAA;EAeF;AACF;AAdE;EACE,aAAA;EACA,sBAAA;EACA,SAAA;EACA,eAAA;AAgBJ;AAfI;EALF;IAMI,UAAA;EAkBJ;AACF;AAfI;EADF;IAEI,sBAAA;IACA,SAAA;EAkBJ;AACF;AAhBE;EAEE,aAAA;EACA,8BAAA;EACA,qBAAA;EACA,gCAAA;EACA,oBAAA;AAiBJ;AAfE;EAEE,aAAA;EACA,sBAAA;EACA,SAAA;AAgBJ;AAdE;EAGE,cAAA;EAAA,qCAAA;EACA,mBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA,EAAA,YAAA;AAcJ;AAZE;EACE,cAAA;EACA,mBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA,EAAA,SAAA;EACA,qBAAA;AAcJ;AAbI;EARF;IASI,eAAA;EAgBJ;AACF;AAfI;EACE,yBAAA;AAiBN;AAdE;EAEE,mBAAA;AAeJ;AAbE;EACE,cAAA;EAAA,sCAAA;EACA,mBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA,EAAA,SAAA;EACA,gBAAA;AAeJ;AAdI;EARF;IASI,eAAA;IACA,eAAA;IAAA,kBAAA;EAiBJ;AACF;AAfE;EACE,cAAA;EAAA,qCAAA;EACA,mBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA,EAAA,WAAA;EACA,sBAAA;EACA,mBAAA;AAiBJ;;AAbA;EACE,WAAA;EACA,YAAA;AAgBF",sourcesContent:[".single-product {\r\n  margin-bottom: 200px;\r\n  @media(max-width: 768px) {\r\n    margin-bottom: 80px;\r\n  }\r\n  &__body {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-top: 40px;\r\n  }\r\n  &__center {\r\n    display: flex;\r\n    align-items: flex-start;\r\n    justify-content: space-between;\r\n    @media(max-width: 1280px) {\r\n      flex-direction: column;\r\n      gap: 100px;\r\n      align-items: center;\r\n    }\r\n    @media(max-width: 567px) {\r\n      gap: 50px;\r\n    }\r\n  }\r\n  &__title {\r\n    color: var(--Primary-Content, #41456b);\r\n    font-family: Gilroy;\r\n    font-size: 45px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 140.5%;\r\n    margin-bottom: 35px;\r\n    @media(max-width: 1280px) {\r\n      text-align: center;\r\n    }\r\n    @media(max-width: 768px) {\r\n      font-size: 50px;\r\n      margin-bottom: 20px;\r\n    }\r\n    @media(max-width: 567px) {\r\n      font-size: 30px;\r\n    }\r\n  }\r\n  &__left {\r\n    width: 100%;\r\n    max-width: 650px;\r\n    max-height: 480px;\r\n  }\r\n  &__img {\r\n    max-width: 650px;\r\n    max-height: 353px;\r\n    height: 100%;\r\n    width: 100%;\r\n    object-fit: cover;\r\n  }\r\n  &__myswiper2 {\r\n    height: 100%;\r\n    max-height: 366px;\r\n    width: 100%;\r\n    user-select: none;\r\n    .swiper-slide {\r\n      text-align: center;\r\n      font-size: 18px;\r\n      background: #fff;\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      max-height: 360px;\r\n      background-size: cover;\r\n      background-position: center;\r\n    }\r\n  }\r\n  &__myswiper {\r\n    height: 100%;\r\n    max-height: 111px;\r\n    box-sizing: border-box;\r\n    padding: 10px 0;\r\n    user-select: none;\r\n    .swiper-slide {\r\n      text-align: center;\r\n      font-size: 18px;\r\n      background: #fff;\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n\r\n      background-size: cover;\r\n      background-position: center;\r\n\r\n      width: 25%;\r\n      height: 105px !important;\r\n      opacity: 0.4;\r\n      @media(max-width: 567px) {\r\n        height: 65px !important;\r\n      }\r\n    }\r\n    .swiper-slide-thumb-active {\r\n      opacity: 1;\r\n    }\r\n    .swiper-slide {\r\n      width: 25%;\r\n      height: 100%;\r\n      opacity: 0.4;\r\n    }\r\n    .swiper-slide-thumb-active {\r\n      opacity: 1;\r\n    }\r\n  }\r\n  &__swiper-img {\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n    cursor: pointer;\r\n  }\r\n}\r\n\r\n.single-right {\r\n  max-width: 500px;\r\n  width: 100%;\r\n  @media(max-width: 1280px) {\r\n    max-width: unset;\r\n  }\r\n  &__body {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 40px;\r\n    padding: 0 30px;\r\n    @media(max-width: 567px) {\r\n      padding: 0;\r\n    }\r\n  }\r\n  &__detail-columns{\r\n    @media(max-width: 567px) {\r\n      flex-direction: column;\r\n      gap: 30px;\r\n    }\r\n  }\r\n  &__columns,\r\n  &__detail-columns {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: baseline;\r\n    border-bottom: 1px solid #d7d7d7;\r\n    padding-bottom: 40px;\r\n  }\r\n  &__column,\r\n  &__detail-column {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 30px;\r\n  }\r\n  &__column-item-top,\r\n  &__title,\r\n  &__desc-title {\r\n    color: var(--Secondary-Text, #606276);\r\n    font-family: Gilroy;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: 159%; /* 25.44px */\r\n  }\r\n  &__column-item-bottom {\r\n    color: #41456b;\r\n    font-family: Gilroy;\r\n    font-size: 25px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 140%; /* 35px */\r\n    letter-spacing: 0.5px;\r\n    @media(max-width: 567px) {\r\n      font-size: 20px;\r\n    }\r\n    &--price {\r\n      color: #7481ff !important;\r\n    }\r\n  }\r\n  &__title,\r\n  &__desc-title {\r\n    margin-bottom: 20px;\r\n  }\r\n  &__detail-column-item {\r\n    color: var(--Primary-Content, #41456b);\r\n    font-family: Gilroy;\r\n    font-size: 20px;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: 25px; /* 125% */\r\n    max-width: 160px;\r\n    @media(max-width: 567px) {\r\n      font-size: 18px;\r\n      max-width: unset;\r\n    }\r\n  }\r\n  &__desc-text {\r\n    color: var(--Secondary-Text, #606276);\r\n    font-family: Gilroy;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: 180%; /* 28.8px */\r\n    letter-spacing: 0.32px;\r\n    margin-bottom: 40px;\r\n  }\r\n}\r\n\r\n.swiper {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n"],sourceRoot:""}]);let l=s},"./src/pages/singleProduct/singleProduct.scss":(e,A,t)=>{t.r(A),t.d(A,{default:()=>u});var i=t(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=t.n(i),r=t(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */"./node_modules/style-loader/dist/runtime/styleDomAPI.js"),s=t.n(r),l=t(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */"./node_modules/style-loader/dist/runtime/insertBySelector.js"),o=t.n(l),a=t(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),m=t.n(a),c=t(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */"./node_modules/style-loader/dist/runtime/insertStyleElement.js"),d=t.n(c),g=t(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */"./node_modules/style-loader/dist/runtime/styleTagTransform.js"),p=t.n(g),E=t(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./singleProduct.scss */"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/singleProduct/singleProduct.scss"),_={};_.styleTagTransform=p(),_.setAttributes=m(),_.insert=o().bind(null,"head"),_.domAPI=s(),_.insertStyleElement=d(),n()(E.default,_);let u=E.default&&E.default.locals?E.default.locals:void 0}}]);
//# sourceMappingURL=src_pages_singleProduct_index_jsx.js.map