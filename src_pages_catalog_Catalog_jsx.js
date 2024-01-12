"use strict";(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["src_pages_catalog_Catalog_jsx"],{"./src/UI/dropDown/DropDown.jsx":(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var n=r(/*! react */"./node_modules/react/index.js"),A=r.n(n),l=r(/*! ./index.module.scss */"./src/UI/dropDown/index.module.scss");let s=e=>{let{title:t,width:r,children:s,id:a,gap:i,position:o,top:d,left:c,borderLeft:m,borderRight:p,widthPopup:u,borderBottom:f}=e,[E,g]=(0,n.useState)(!1),x=(0,n.useRef)(null);return A().createElement("div",{ref:x,style:{maxWidth:r},className:l.default.dropdown,id:a},A().createElement("div",{className:`${l.default.body} ${E?l.default.active:""}`},A().createElement("div",{onClick:()=>{g(e=>!e)},className:l.default.top},A().createElement("h4",{className:l.default.title},t),A().createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"10",viewBox:"0 0 18 10",fill:"none",style:{transform:E?"rotateX(180deg)":"rotateX(0deg)"}},A().createElement("path",{d:"M17 1L9 9L1 1",stroke:"#41456B",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),A().createElement("div",{style:{gap:i,position:o,top:d,left:c,width:u,background:"#ffff",zIndex:1e3,borderLeft:m,borderRight:p,borderBottom:f},className:`${l.default.bottom} ${E?l.default.active:""}`},s)))}},"./src/context/FilterContenxt.jsx":(e,t,r)=>{r.r(t),r.d(t,{FilterProvider:()=>a,useFilters:()=>i});var n=r(/*! react */"./node_modules/react/index.js"),A=r.n(n),l=r(/*! ../data/inventory */"./src/data/inventory.js");let s=(0,n.createContext)(),a=e=>{let{children:t}=e,[r,a]=(0,n.useState)([]),[i,o]=(0,n.useState)([]),[d,c]=(0,n.useState)([]),[m,p]=(0,n.useState)([]),[u,f]=(0,n.useState)([]),[E,g]=(0,n.useState)([]),[x,C]=(0,n.useState)([]),[h,_]=(0,n.useState)([]),[y,b]=(0,n.useState)("newest"),[w,B]=(0,n.useState)([]),[v,k]=(0,n.useState)([]),[j,F]=(0,n.useState)(!1);(0,n.useEffect)(()=>{a(l.inventory),_(l.inventory)},[]),(0,n.useEffect)(()=>{h.length===r.length&&F(!1)},[h]);let[S,N]=m,[I,M]=x;(0,n.useEffect)(()=>{let e=r.filter(e=>(!i.length||i.includes(e.transmission))&&(!d.length||d.includes(e.bodyType))&&(!m.length||e.price>=S&&e.price<=N)&&(!u.length||e.kilometres<=u)&&(!x.length||e.year>=I&&e.year<=M)&&(!E.length||e.name.toLowerCase().includes(E.toLowerCase()))&&(!w.length||e.name.includes(w))&&(!v.length||e.model.includes(v))),t="lowest"===y?e.slice().sort((e,t)=>e.price-t.price):"highest"===y?e.slice().sort((e,t)=>t.price-e.price):"recommendations"===y?e.slice().sort((e,t)=>e.kilometres-t.kilometres):"newest"===y?e.slice().sort((e,t)=>t.year-e.year):e.slice();_(t)},[d,i,m,u,x,E,w,v,y,r]);let T={transmissionFilter:i,setTransmissionFilter:o,bodyTypeFilters:d,setBodyTypeFilters:c,priceFilters:m,setPriceFilters:p,kilometresFilters:u,setKilometresFilters:f,products:r,setProducts:a,filteredProducts:h,yearFilter:x,setYearFilter:C,filteredPriority:y,setFilteredPriority:b,setSearch:g,search:E,makeFiltered:w,setMakeFiltered:B,modelFiltered:v,setModelFiltered:k,filteredProducts:h,clearFilter:j,setClearFilter:F,clearAllFilters:()=>{o([]),c([]),p([]),f([]),g([]),C([]),b([]),B([]),k([]),F(!0)}};return console.log(T),A().createElement(s.Provider,{value:T},t)},i=()=>{let e=(0,n.useContext)(s);if(!e)throw Error("useFilters must be used within a FiltersProvider");return e}},"./src/data/recomendation.js":(e,t,r)=>{r.r(t),r.d(t,{recomendations:()=>n});let n=[{id:"newest",name:"Newest inventory"},{id:"lowest",name:"Lowest price"},{id:"highest",name:"Highest prices"},{id:"recommendations",name:"Recommendations "}]},"./src/pages/catalog/Catalog.jsx":(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var n=r(/*! react */"./node_modules/react/index.js"),A=r.n(n),l=r(/*! react-helmet */"./node_modules/react-helmet/es/Helmet.js"),s=r(/*! ../../context/FilterContenxt */"./src/context/FilterContenxt.jsx"),a=r(/*! ./filterCatalog/FilterCatalog */"./src/pages/catalog/filterCatalog/FilterCatalog.jsx");let i=()=>A().createElement(A().Fragment,null,A().createElement(l.Helmet,null,A().createElement("title",null,"Catalog page - VAC")),A().createElement(s.FilterProvider,null,A().createElement(a.FilterCatalog,null)))},"./src/pages/catalog/filterCatalog/FilterCatalog.jsx":(e,t,r)=>{r.r(t),r.d(t,{FilterCatalog:()=>d});var n=r(/*! react */"./node_modules/react/index.js"),A=r.n(n),l=r(/*! ../../../context/FilterContenxt */"./src/context/FilterContenxt.jsx"),s=r(/*! ./filterByPriority/FilterByPrioruty */"./src/pages/catalog/filterCatalog/filterByPriority/FilterByPrioruty.jsx"),a=r(/*! ./filterSearch/FilterSearch */"./src/pages/catalog/filterCatalog/filterSearch/FilterSearch.jsx");r(/*! ./index.scss */"./src/pages/catalog/filterCatalog/index.scss");var i=r(/*! ./renderFilters/RenderFilters */"./src/pages/catalog/filterCatalog/renderFilters/RenderFilters.jsx"),o=r(/*! ./renderFilters/RenderProducts */"./src/pages/catalog/filterCatalog/renderFilters/RenderProducts.jsx");let d=()=>{let{products:e}=(0,l.useFilters)();return A().createElement("div",{className:"filter"},A().createElement("div",{className:"container"},A().createElement("div",{className:"filter__body"},A().createElement("div",{className:"filter__sidebar filter-sidebar "},A().createElement("div",{className:"filter-sidebar__top"},A().createElement("h3",{className:"filter-sidebar__title"},"Detailed search")),A().createElement("ul",{className:"filter-sidebar__list"},A().createElement(i.RenderFilters,null))),A().createElement("div",{className:"filter__wrapper"},A().createElement("div",{className:"filter__top"},A().createElement("div",{className:"filter__top-left"},A().createElement(a.FilterSearch,{placeholder:"Find a dream car...",share:!0,width:350,data:e})),A().createElement(s.FilterByPriority,null)),A().createElement("div",{className:"filter__bottom"},A().createElement("div",{className:"filter__products"},A().createElement(o.RenderProducts,null)))))))}},"./src/pages/catalog/filterCatalog/filterByPriority/FilterByPrioruty.jsx":(e,t,r)=>{r.r(t),r.d(t,{FilterByPriority:()=>i});var n=r(/*! react */"./node_modules/react/index.js"),A=r.n(n),l=r(/*! ../../../../context/FilterContenxt */"./src/context/FilterContenxt.jsx"),s=r(/*! ../../../../UI/dropDown/index.module.scss */"./src/UI/dropDown/index.module.scss"),a=r(/*! ./../../../../data/recomendation */"./src/data/recomendation.js");let i=()=>{let[e,t]=(0,n.useState)(a.recomendations[0].name),[r,i]=(0,n.useState)("Recommendations"),[o,d]=(0,n.useState)(!1),c=(0,n.useRef)(null),{setFilteredPriority:m}=(0,l.useFilters)(),p=e=>{t(e),i(e),d(!1)},u=a.recomendations.filter(t=>{let{name:r}=t;return r!==e}),f=e=>{m(e)},E=(0,n.useRef)(null),g=e=>{E.current&&!E.current.contains(e.target)&&d(!1)};return(0,n.useEffect)(()=>(document.addEventListener("mousedown",g),()=>{document.removeEventListener("mousedown",g)}),[]),A().createElement("div",{className:"filter__top-right"},A().createElement("span",null,"Sorted by "),A().createElement("div",{ref:c,style:{maxWidth:"237"},className:s.default.dropdown},A().createElement("div",{className:`${s.default.body} ${o?s.default.active:""}`},A().createElement("div",{onClick:()=>{d(e=>!e)},className:s.default.top},A().createElement("h4",{className:s.default.title},r),A().createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"10",viewBox:"0 0 18 10",fill:"none",style:{transform:o?"rotateX(180deg)":"rotateX(0deg)"}},A().createElement("path",{d:"M17 1L9 9L1 1",stroke:"#41456B",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),A().createElement("div",{style:{position:"absolute",top:"100%",width:"100%",background:"#ffff",zIndex:1e3,borderBottom:"1px solid #d7d7d7"},className:`${s.default.bottom} ${o?s.default.active:""}`},A().createElement("ul",{ref:E,className:"recommendations__list"},u.map(e=>{let{id:t,name:r}=e;return A().createElement("li",{key:t},A().createElement("button",{onClick:()=>{p(r),f(t)},className:"recommendations__list-btn"},r))}))))))}},"./src/pages/catalog/filterCatalog/filterComponents/bodyType/BodyType.jsx":(e,t,r)=>{r.r(t),r.d(t,{BodyType:()=>x,bodyType:()=>g});var n=r(/*! react */"./node_modules/react/index.js"),A=r.n(n),l=r(/*! react-custom-checkbox */"./node_modules/react-custom-checkbox/dist/index.js"),s=r.n(l),a=r(/*! react-icons/fi */"./node_modules/react-icons/fi/index.esm.js"),i=r(/*! ../../../../../context/FilterContenxt */"./src/context/FilterContenxt.jsx"),o=r(/*! ../../../../../img/catalog/Sedan.svg */"./src/img/catalog/Sedan.svg"),d=r(/*! ../../../../../img/catalog/convertiable.svg */"./src/img/catalog/convertiable.svg"),c=r(/*! ../../../../../img/catalog/coupe.svg */"./src/img/catalog/coupe.svg"),m=r(/*! ../../../../../img/catalog/hatchback.svg */"./src/img/catalog/hatchback.svg"),p=r(/*! ../../../../../img/catalog/suv.svg */"./src/img/catalog/suv.svg"),u=r(/*! ../../../../../img/catalog/truck.svg */"./src/img/catalog/truck.svg"),f=r(/*! ../../../../../img/catalog/van.svg */"./src/img/catalog/van.svg"),E=r(/*! ./../selectedFilterButton/SelectedFilterButton */"./src/pages/catalog/filterCatalog/filterComponents/selectedFilterButton/SelectedFilterButton.jsx");let g=[{id:"trucks",value:!1,name:"Trucks",image:u},{id:"suv",value:!1,name:"SUV",image:p},{id:"sedan",value:!1,name:"Sedan",image:o},{id:"coupe",value:!1,name:"Coupe",image:c},{id:"hatchback",value:!1,name:"Hatchback",image:m},{id:"convertible",value:!1,name:"Convertible",image:d},{id:"van",value:!1,name:"Van",image:f}],x=()=>{let[e,t]=(0,n.useState)(g),{setBodyTypeFilters:r,clearFilter:l}=(0,i.useFilters)();(0,n.useEffect)(()=>{l&&(t(e=>e.map(e=>({...e,value:!1}))),r([]))},[l,r]);let o=n=>{let A=e.map(e=>e.id===n?{...e,value:!e.value}:e);t(A);let l=A.filter(e=>{let{value:t}=e;return t}).map(e=>{let{name:t}=e;return t});r(l)};return A().createElement("div",{className:"type"},A().createElement("div",{className:"type__body"},A().createElement("ul",{className:"type__list"},e.map(e=>{let{name:t,id:r,value:n,image:l}=e;return A().createElement("li",{key:r,className:"type__list-item"},A().createElement("label",{className:"type__list-item-check"},A().createElement(s(),{checked:n,onChange:()=>o(r),size:20,borderColor:"#d7d7d7",icon:A().createElement(a.FiCheck,{color:"#7481ff",size:20}),value:n}),A().createElement("div",{className:"type__list-item-wrapper"},A().createElement("span",null,t),A().createElement("img",{src:l,alt:""}))))})),!1===l&&A().createElement("ul",{className:"selected-filters"},e.map(e=>{let{name:t,value:r,id:n}=e;return r?A().createElement("li",{key:`selected-filter-${n}`},A().createElement(E.SelectedFilterButton,{onClick:()=>o(n),name:t})):null}))))}},"./src/pages/catalog/filterCatalog/filterComponents/kilometres/Kilometres.jsx":(e,t,r)=>{r.r(t),r.d(t,{Kilometres:()=>i});var n=r(/*! @mui/material/Box */"./node_modules/@mui/material/Box/Box.js"),A=r(/*! @mui/material/Slider */"./node_modules/@mui/material/Slider/Slider.js"),l=r(/*! react */"./node_modules/react/index.js"),s=r.n(l),a=r(/*! ../../../../../context/FilterContenxt */"./src/context/FilterContenxt.jsx");let i=()=>{let e=[0],[t,r]=(0,l.useState)(e),{setKilometresFilters:i,clearFilter:o}=(0,a.useFilters)();return(0,l.useEffect)(()=>{o&&r(e)},[o,e,i]),s().createElement(n.default,{sx:{width:"100%"}},s().createElement("div",{className:"price__counts"},s().createElement("span",null,`${t[0].toLocaleString()} or less`)),s().createElement(A.default,{value:t,onChange:(e,t)=>{r(t),i(t),0===t[0]&&i("")},valueLabelDisplay:"auto",max:5e5,min:0,step:1e4,sx:{color:"#7481FF","& .MuiSlider-rail":{color:"#D7D7D7"},"& .MuiSlider-thumb":{borderRadius:"1px"}}}))}},"./src/pages/catalog/filterCatalog/filterComponents/make/Make.jsx":(e,t,r)=>{r.r(t),r.d(t,{Make:()=>i});var n=r(/*! react */"./node_modules/react/index.js"),A=r.n(n),l=r(/*! ../searchModel/SearchModel */"./src/pages/catalog/filterCatalog/filterComponents/searchModel/SearchModel.jsx"),s=r(/*! ./../../../../../data/inventory */"./src/data/inventory.js"),a=r(/*! ./../searchMakeModel/SearchMakeModel */"./src/pages/catalog/filterCatalog/filterComponents/searchMakeModel/SearchMakeModel.jsx");let i=()=>A().createElement("div",{className:"make"},A().createElement("div",{className:"make__wrapper"},A().createElement("h2",{className:"make__title"},"Name"),A().createElement(a.SearchMake,{placeholder:"Search Make...",data:s.inventory})),A().createElement("div",{className:"make__wrapper"},A().createElement("h2",{className:"make__title"},"Model"),A().createElement(l.SearchModel,{placeholder:"Search Model...",data:s.inventory})))},"./src/pages/catalog/filterCatalog/filterComponents/price/Price.jsx":(e,t,r)=>{r.r(t),r.d(t,{Price:()=>i});var n=r(/*! @mui/material/Box */"./node_modules/@mui/material/Box/Box.js"),A=r(/*! @mui/material/Slider */"./node_modules/@mui/material/Slider/Slider.js"),l=r(/*! react */"./node_modules/react/index.js"),s=r.n(l),a=r(/*! ../../../../../context/FilterContenxt */"./src/context/FilterContenxt.jsx");let i=()=>{let e=[0,2e5],[t,r]=(0,l.useState)(e),{setPriceFilters:i,clearFilter:o}=(0,a.useFilters)(),d=e=>`$${e.toLocaleString()}`;return(0,l.useEffect)(()=>{o&&r(e)},[o,e,i]),s().createElement(n.default,{sx:{width:"100%"}},s().createElement("div",{className:"price__counts"},s().createElement("span",null,d(t[0])),s().createElement("span",null,d(t[1]))),s().createElement(A.default,{value:t,onChange:(e,t)=>{r(t),i(t)},valueLabelDisplay:"auto",max:2e5,step:1e4,sx:{color:"#7481FF","&.MuiSlider-rail":{color:"#D7D7D7"},"& .MuiSlider-thumb":{borderRadius:"1px"}}}))}},"./src/pages/catalog/filterCatalog/filterComponents/searchMakeModel/SearchMakeModel.jsx":(e,t,r)=>{r.r(t),r.d(t,{SearchMake:()=>i});var n=r(/*! react */"./node_modules/react/index.js"),A=r.n(n),l=r(/*! ../../../../../context/FilterContenxt */"./src/context/FilterContenxt.jsx"),s=r(/*! ./../selectedFilterButton/SelectedFilterButton */"./src/pages/catalog/filterCatalog/filterComponents/selectedFilterButton/SelectedFilterButton.jsx");let a=(e,t)=>{if(!e)return t;let r=new Set;return t.filter(t=>{let{name:n}=t,A=n.toLowerCase();return!!A.includes(e.toLowerCase())&&!r.has(A)&&(r.add(A),!0)})},i=e=>{let{data:t}=e,[r,i]=(0,n.useState)(t),[o,d]=(0,n.useState)(""),[c,m]=(0,n.useState)(!1),[p,u]=(0,n.useState)([]),{setMakeFiltered:f,setModelFiltered:E,clearFilter:g}=(0,l.useFilters)();(0,n.useEffect)(()=>{let e=setTimeout(()=>{let e=a(o,t);i(e)},300);return()=>clearTimeout(e)},[o,t]),(0,n.useEffect)(()=>{g&&(d(""),i(t),f(""),u([]),E(""))},[g,t,f,E]);let x=()=>m(!1),C=e=>{f(e),u(e)},h=()=>{f(""),u([]),E("")},_=[...new Set(r.map(e=>e.name))];return A().createElement(A().Fragment,null,A().createElement("form",{className:"filter__search"},A().createElement("div",{className:"filter__search-wrapper"},A().createElement("input",{type:"text",placeholder:"Search Make...",className:"filter__input",onChange:e=>d(e.target.value),onFocus:()=>m(!0),autoComplete:"off"}),c&&A().createElement("div",{className:"filter__search-popup filter__search-popup--infilter"},A().createElement("ul",{className:"filter__search-list"},_.map((e,t)=>A().createElement("li",{key:t},A().createElement("button",{onClick:()=>{C(e),x()}},e))))))),!1===g&&0!==p.length&&A().createElement("ul",{style:{marginTop:"0"},className:"selected-filters"},A().createElement("li",null,A().createElement(s.SelectedFilterButton,{marginTop:0,onClick:()=>h(),name:p}))))}},"./src/pages/catalog/filterCatalog/filterComponents/searchModel/SearchModel.jsx":(e,t,r)=>{r.r(t),r.d(t,{SearchModel:()=>i});var n=r(/*! react */"./node_modules/react/index.js"),A=r.n(n),l=r(/*! ../../../../../context/FilterContenxt */"./src/context/FilterContenxt.jsx"),s=r(/*! ./../selectedFilterButton/SelectedFilterButton */"./src/pages/catalog/filterCatalog/filterComponents/selectedFilterButton/SelectedFilterButton.jsx");let a=(e,t)=>{if(!e)return t;let r=new Set;return t.filter(t=>{let{model:n}=t,A=n.toLowerCase();return!!A.includes(e.toLowerCase())&&!r.has(A)&&(r.add(A),!0)})},i=e=>{let{data:t}=e,[r,i]=(0,n.useState)(t),[o,d]=(0,n.useState)(""),[c,m]=(0,n.useState)(!1),[p,u]=(0,n.useState)([]),{setModelFiltered:f,makeFiltered:E,filteredProducts:g,setMakeFiltered:x,modelFiltered:C}=(0,l.useFilters)();(0,n.useEffect)(()=>{let e=setTimeout(()=>{let e=a(o,t);i(e)},300);return()=>clearTimeout(e)},[o,t]);let h=()=>m(!1),_=e=>{f(e),u(e)},y=()=>{f(""),u([]),console.log(C)};return(0,n.useEffect)(()=>{0===C.length&&u("")},[C]),A().createElement(A().Fragment,null,A().createElement("form",{className:"filter__search"},A().createElement("div",{className:"filter__search-wrapper"},A().createElement("input",{type:"text",placeholder:"Search Make...",className:"filter__input",onChange:e=>d(e.target.value),onFocus:()=>m(!0),autoComplete:"off"}),c&&A().createElement("div",{className:"filter__search-popup filter__search-popup--infilter"},A().createElement("ul",{className:"filter__search-list"},0===g.length&&"There are no models with these parameters",0===E.length&&0!=g.length?"Select the car name":g.map(e=>{let{model:t,id:r}=e;return A().createElement("li",{key:r},A().createElement("button",{onClick:()=>{_(t),h()}},t))}))))),0===p.length?null:A().createElement("ul",{style:{marginTop:"0"},className:"selected-filters"},A().createElement("li",null,A().createElement(s.SelectedFilterButton,{marginTop:0,onClick:()=>y(),name:p}))))}},"./src/pages/catalog/filterCatalog/filterComponents/selectedFilterButton/SelectedFilterButton.jsx":(e,t,r)=>{r.r(t),r.d(t,{SelectedFilterButton:()=>l});var n=r(/*! react */"./node_modules/react/index.js"),A=r.n(n);r(/*! ./selectedFilter.scss */"./src/pages/catalog/filterCatalog/filterComponents/selectedFilterButton/selectedFilter.scss");let l=e=>{let{name:t,onClick:r}=e;return A().createElement("div",{className:"selected-filter"},A().createElement("div",{className:"selected-filter__body"},A().createElement("button",{onClick:r,className:"selected-filter__close"},A().createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"11",height:"11",viewBox:"0 0 11 11",fill:"none"},A().createElement("path",{d:"M1.375 1.375L9.62496 9.62513",stroke:"#7481FF",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),A().createElement("path",{d:"M9.625 1.375L1.37504 9.62513",stroke:"#7481FF",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),A().createElement("span",{className:"selected-filter__name"},t)))}},"./src/pages/catalog/filterCatalog/filterComponents/transmission/Transmission.jsx":(e,t,r)=>{r.r(t),r.d(t,{Transmission:()=>c,transmission:()=>d});var n=r(/*! react */"./node_modules/react/index.js"),A=r.n(n),l=r(/*! react-custom-checkbox */"./node_modules/react-custom-checkbox/dist/index.js"),s=r.n(l),a=r(/*! react-icons/fi */"./node_modules/react-icons/fi/index.esm.js"),i=r(/*! ../../../../../context/FilterContenxt */"./src/context/FilterContenxt.jsx"),o=r(/*! ./../selectedFilterButton/SelectedFilterButton */"./src/pages/catalog/filterCatalog/filterComponents/selectedFilterButton/SelectedFilterButton.jsx");let d=[{id:"automatic",value:!1,name:"Automatic"},{id:"manual",value:!1,name:"Manual"}],c=()=>{let[e,t]=(0,n.useState)(d),{setTransmissionFilter:r,clearFilter:l}=(0,i.useFilters)();(0,n.useEffect)(()=>{l&&(t(e=>e.map(e=>({...e,value:!1}))),r([]))},[l,r]);let c=n=>{let A=e.map(e=>e.name===n?{...e,value:!e.value}:e);t(A);let l=A.filter(e=>{let{value:t}=e;return t}).map(e=>{let{name:t}=e;return t});r(l)};return A().createElement("div",{className:"transmission"},A().createElement("div",{className:"transmission__body"},A().createElement("ul",{className:"transmission__list"},e.map(e=>{let{name:t,id:r,value:n}=e;return A().createElement("li",{key:r,className:"transmission__list-item"},A().createElement("label",{className:"transmission__list-item-check"},A().createElement(s(),{checked:n,onChange:()=>c(t),size:20,borderColor:"#d7d7d7",icon:A().createElement(a.FiCheck,{color:"#7481ff",size:20}),value:n}),A().createElement("div",{className:"transmission__list-item-wrapper"},A().createElement("span",null,t))))})),!1===l&&A().createElement("ul",{className:"selected-filters"},e.map(e=>{let{name:t,value:r,id:n}=e;return r?A().createElement("li",{key:`selected-filter-${n}`},A().createElement(o.SelectedFilterButton,{onClick:()=>c(t),name:t})):null}))))}},"./src/pages/catalog/filterCatalog/filterComponents/year/Year.jsx":(e,t,r)=>{r.r(t),r.d(t,{Year:()=>i});var n=r(/*! @mui/material/Box */"./node_modules/@mui/material/Box/Box.js"),A=r(/*! @mui/material/Slider */"./node_modules/@mui/material/Slider/Slider.js"),l=r(/*! react */"./node_modules/react/index.js"),s=r.n(l),a=r(/*! ../../../../../context/FilterContenxt */"./src/context/FilterContenxt.jsx");let i=()=>{let e=[2e3,2023],[t,r]=(0,l.useState)(e),{setYearFilter:i,clearFilter:o}=(0,a.useFilters)();return(0,l.useEffect)(()=>{o&&r(e)},[o,e,i]),s().createElement(n.default,{sx:{width:"100%"}},s().createElement("div",{className:"price__counts"},s().createElement("span",null,t[0]),s().createElement("span",null,t[1])),s().createElement(A.default,{value:t,onChange:(e,t)=>{r(t),i(t)},valueLabelDisplay:"auto",max:2023,min:2e3,step:1,sx:{color:"#7481FF","&.MuiSlider-rail":{color:"#D7D7D7"},"& .MuiSlider-thumb":{borderRadius:"1px"}}}))}},"./src/pages/catalog/filterCatalog/filterProducts/FilterProducts.jsx":(e,t,r)=>{r.r(t),r.d(t,{FilterProducts:()=>s});var n=r(/*! react */"./node_modules/react/index.js"),A=r.n(n);r(/*! ./filterProduct.scss */"./src/pages/catalog/filterCatalog/filterProducts/filterProduct.scss");var l=r(/*! react-router-dom */"./node_modules/react-router-dom/esm/react-router-dom.js");let s=e=>{let{img:t,name:r,price:n,year:s,type:a,transmission:i,kilometres:o,model:d,id:c}=e;return A().createElement(l.Link,{to:`/products/${c}`,className:"car-product"},A().createElement("div",{className:"car-product__body"},A().createElement("div",{className:"car-product__top"},A().createElement("img",{src:t,alt:""})),A().createElement("div",{className:"car-product__bottom"},A().createElement("div",{className:"car-product__main-info"},A().createElement("h3",{className:"car-product__title"},r+" "+d),A().createElement("span",{className:"car-product__price"},`$ ${parseFloat(n).toLocaleString()}`)),A().createElement("div",{className:"car-product__secondary-info"},A().createElement("ul",{className:"car-product__secondary-info-list"},A().createElement("li",null,s," year"),A().createElement("li",null,a),A().createElement("li",null,i),A().createElement("li",null,o," km"))))))}},"./src/pages/catalog/filterCatalog/filterSearch/FilterSearch.jsx":(e,t,r)=>{r.r(t),r.d(t,{FilterSearch:()=>a});var n=r(/*! react */"./node_modules/react/index.js"),A=r.n(n),l=r(/*! ../../../../context/FilterContenxt */"./src/context/FilterContenxt.jsx");let s=(e,t)=>{if(!e)return t;let r=new Set;return t.filter(t=>{let{name:n}=t,A=n.toLowerCase();return!!A.includes(e.toLowerCase())&&!r.has(A)&&(r.add(A),!0)})},a=e=>{let{data:t}=e,[r,a]=(0,n.useState)(t),[i,o]=(0,n.useState)(""),[d,c]=(0,n.useState)(!1),{filteredProducts:m,setSearch:p,clearFilter:u}=(0,l.useFilters)(),[f,E]=(0,n.useState)(""),g=e=>{E(e),p(e),o(e)};(0,n.useEffect)(()=>{let e=setTimeout(()=>{let e=s(i,t);a(e),p(i)},300);return()=>clearTimeout(e)},[i,t,p]),(0,n.useEffect)(()=>{u&&o("")},[u,o]);let x=()=>c(!1),C=(0,n.useRef)(null),h=e=>{C.current&&!C.current.contains(e.target)&&c(!1)};(0,n.useEffect)(()=>(document.addEventListener("mousedown",h),()=>{document.removeEventListener("mousedown",h)}),[]);let _=[...new Set(r.map(e=>e.name))];return A().createElement("form",{className:"filter__search"},A().createElement("div",{className:"filter__search-wrapper"},A().createElement("input",{type:"text",placeholder:"Find a dream car...",value:i,className:"filter__input",onChange:e=>o(e.target.value),onFocus:()=>c(!0)}),A().createElement("button",{className:"filter__search-btn"},A().createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},A().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.9184 10.4535C18.9184 15.1212 15.1322 18.907 10.4592 18.907C5.78629 18.907 2 15.1212 2 10.4535C2 5.78579 5.78629 2 10.4592 2C15.1322 2 18.9184 5.78579 18.9184 10.4535ZM17.1074 18.5239C15.3001 20.0128 12.9841 20.907 10.4592 20.907C4.68275 20.907 0 16.2268 0 10.4535C0 4.68018 4.68275 0 10.4592 0C16.2357 0 20.9184 4.68018 20.9184 10.4535C20.9184 12.9832 20.0194 15.3031 18.5231 17.1113L23.707 22.2923C24.0977 22.6827 24.0978 23.3159 23.7074 23.7065C23.317 24.0972 22.6838 24.0973 22.2932 23.7069L17.1074 18.5239Z",fill:"#41456B"}))),d&&A().createElement("div",{ref:C,className:"filter__search-popup"},A().createElement("ul",{className:"filter__search-list"},m.length?_.map((e,t)=>A().createElement("li",{key:t},A().createElement("button",{onClick:()=>{g(e),x()}},e))):A().createElement("div",{className:"filter__search-nothing"},"Nothing found")))))}},"./src/pages/catalog/filterCatalog/renderFilters/RenderFilters.jsx":(e,t,r)=>{r.r(t),r.d(t,{RenderFilters:()=>m});var n=r(/*! react */"./node_modules/react/index.js"),A=r.n(n),l=r(/*! ../../../../UI/dropDown/DropDown */"./src/UI/dropDown/DropDown.jsx"),s=r(/*! ../filterComponents/price/Price */"./src/pages/catalog/filterCatalog/filterComponents/price/Price.jsx"),a=r(/*! ./../filterComponents/bodyType/BodyType */"./src/pages/catalog/filterCatalog/filterComponents/bodyType/BodyType.jsx"),i=r(/*! ./../filterComponents/kilometres/Kilometres */"./src/pages/catalog/filterCatalog/filterComponents/kilometres/Kilometres.jsx"),o=r(/*! ./../filterComponents/make/Make */"./src/pages/catalog/filterCatalog/filterComponents/make/Make.jsx"),d=r(/*! ../filterComponents/transmission/Transmission */"./src/pages/catalog/filterCatalog/filterComponents/transmission/Transmission.jsx"),c=r(/*! ./../filterComponents/year/Year */"./src/pages/catalog/filterCatalog/filterComponents/year/Year.jsx");r(/*! ./index.scss */"./src/pages/catalog/filterCatalog/renderFilters/index.scss");let m=()=>{let e=[{id:"makeModel",name:"Name, Model",child:{key:"makeModel",content:A().createElement(o.Make,null)}},{id:"bodyType",name:"Body type",child:{key:"bodyType",content:A().createElement(a.BodyType,null)}},{id:"transmission",name:"Transmission",child:{key:"transmission",content:A().createElement(d.Transmission,null)}},{id:"price",name:"Price",child:{key:"price",content:A().createElement(s.Price,null)}},{id:"year",name:"Year",child:{key:"year",content:A().createElement(c.Year,null)}},{id:"kilometres ",name:"Kilometres ",child:{key:"kilometres",content:A().createElement(i.Kilometres,null)}}];return A().createElement(A().Fragment,null,e.map(e=>{let{id:t,name:r,child:{content:n}}=e;return A().createElement(l.default,{title:r,id:t,key:t},n)}))}},"./src/pages/catalog/filterCatalog/renderFilters/RenderProducts.jsx":(e,t,r)=>{r.r(t),r.d(t,{RenderProducts:()=>o});var n=r(/*! react */"./node_modules/react/index.js"),A=r.n(n),l=r(/*! swiper/react */"./node_modules/swiper/swiper-react.mjs"),s=r(/*! ../../../../context/FilterContenxt */"./src/context/FilterContenxt.jsx"),a=r(/*! ../filterProducts/FilterProducts */"./src/pages/catalog/filterCatalog/filterProducts/FilterProducts.jsx");r(/*! swiper/swiper-bundle.css */"./node_modules/swiper/swiper-bundle.css");var i=r(/*! swiper/modules */"./node_modules/swiper/modules/index.mjs");let o=()=>{let e;let{filteredProducts:t,clearAllFilters:r}=(0,s.useFilters)(),o=((e,t)=>{let r=[];for(let n=0;n<e.length;n+=t)r.push(e.slice(n,n+t));return r})(t,6),d=(0,n.useRef)(null);return(0,n.useEffect)(()=>{d.current&&d.current.swiper&&d.current.swiper.update()},[t]),0===t.length?A().createElement("div",{className:"error"},A().createElement("div",{className:"error__body"},A().createElement("div",{className:"error__svg"},A().createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"30",viewBox:"0 0 90 30",fill:"none"},A().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M65.4252 11.4386L65.298 11.8733L65.3706 12.3205L66.7246 20.6613V23.8984H59.3693C59.2835 24.6063 59.0841 25.2792 58.79 25.8984H66.7246C67.8292 25.8984 68.7246 25.003 68.7246 23.8984V20.5L67.3448 12L68.069 9.52391C68.4135 8.34599 67.6256 7.1385 66.4087 6.97936L61.7754 6.37347C61.6666 6.35924 61.5667 6.30599 61.4943 6.22362C58.0156 2.26746 53.0024 0 47.7344 0H34.0224C31.8645 0 29.7465 0.581409 27.891 1.68309L18.933 7.00192C18.624 7.18539 18.2713 7.28221 17.9119 7.28221H12.8448H12.5626C6.09099 7.28221 0.844758 12.5284 0.844758 19V22L0.31971 22.8187C-0.533932 24.1499 0.421931 25.8984 2.00326 25.8984H11.6417C12.6874 28.0997 14.9311 29.6217 17.5303 29.6217C21.1288 29.6217 24.046 26.7045 24.046 23.106C24.046 19.5075 21.1288 16.5903 17.5303 16.5903C13.9318 16.5903 11.0146 19.5075 11.0146 23.106C11.0146 23.3742 11.0309 23.6387 11.0623 23.8984H2.00326L2.52831 23.0796L2.84476 22.5862V22V19C2.84476 13.633 7.19556 9.28221 12.5626 9.28221H12.8448H17.9119C18.6306 9.28221 19.3361 9.08856 19.9541 8.72163L28.9121 3.4028C30.4586 2.48458 32.2239 2 34.0224 2H47.7344C52.4274 2 56.8934 4.01996 59.9924 7.54429C60.385 7.99081 60.9265 8.27948 61.5161 8.35658L66.1494 8.96248L65.4252 11.4386ZM47.0125 25.8984C48.0583 28.0997 50.302 29.6217 52.9012 29.6217C56.4997 29.6217 59.4169 26.7045 59.4169 23.106C59.4169 19.5075 56.4997 16.5903 52.9012 16.5903C49.3027 16.5903 46.3855 19.5075 46.3855 23.106C46.3855 23.3742 46.4017 23.6387 46.4332 23.8984H23.9984C23.9126 24.6063 23.7132 25.2792 23.4191 25.8984H47.0125ZM29.7949 10.0054C29.2426 10.0054 28.7949 10.4531 28.7949 11.0054C28.7949 11.5577 29.2426 12.0054 29.7949 12.0054H33.5182C34.0704 12.0054 34.5182 11.5577 34.5182 11.0054C34.5182 10.4531 34.0704 10.0054 33.5182 10.0054H29.7949ZM17.5303 27.6217C20.0242 27.6217 22.046 25.5999 22.046 23.106C22.046 20.6121 20.0242 18.5903 17.5303 18.5903C15.0364 18.5903 13.0146 20.6121 13.0146 23.106C13.0146 25.5999 15.0364 27.6217 17.5303 27.6217ZM57.4169 23.106C57.4169 25.5999 55.3951 27.6217 52.9012 27.6217C50.4073 27.6217 48.3855 25.5999 48.3855 23.106C48.3855 20.6121 50.4073 18.5903 52.9012 18.5903C55.3951 18.5903 57.4169 20.6121 57.4169 23.106ZM52.9014 25.106C54.0059 25.106 54.9014 24.2105 54.9014 23.106C54.9014 22.0014 54.0059 21.106 52.9014 21.106C51.7968 21.106 50.9014 22.0014 50.9014 23.106C50.9014 24.2105 51.7968 25.106 52.9014 25.106ZM19.5303 23.106C19.5303 24.2105 18.6349 25.106 17.5303 25.106C16.4257 25.106 15.5303 24.2105 15.5303 23.106C15.5303 22.0014 16.4257 21.106 17.5303 21.106C18.6349 21.106 19.5303 22.0014 19.5303 23.106Z",fill:"#41456B"}),A().createElement("path",{d:"M76.8447 9H83.7921",stroke:"#41456B",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),A().createElement("path",{d:"M76.8447 15H88.8447",stroke:"#41456B",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),A().createElement("path",{d:"M76.8447 21H80.6342",stroke:"#41456B",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),A().createElement("h2",{className:"error__title"},"Unfortunately there are no matches for your query."),A().createElement("div",{className:"error__subtitle"},"Try using other filter settings or request a car of your choice."),A().createElement("button",{onClick:r,className:"error__clear"},"Clear filters"))):A().createElement(l.Swiper,{ref:d,style:{paddingBottom:"65px",width:"100%"},slidesPerView:1,autoHeight:!0,observer:!0,observeParents:!0,grid:{rows:1},spaceBetween:20,pagination:{clickable:!0},modules:[i.Grid,i.Pagination],onSlideChange:()=>{clearTimeout(e),e=setTimeout(()=>{let e=document.querySelector(".filter__top-right");e&&e.scrollIntoView({behavior:"smooth"})},200)},className:"mySwiper"},o.map((e,t)=>A().createElement(l.SwiperSlide,{key:t},A().createElement("div",{className:"all-products"},e.map(e=>{let{name:t,model:r,year:n,bodyType:l,images:s,transmission:i,kilometres:o,price:d,id:c}=e;return A().createElement(a.FilterProducts,{key:c,id:c,name:t,model:r,type:l,price:d,img:s[0],year:n,bodyType:l,transmission:i,kilometres:o})})))))}},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/UI/dropDown/index.module.scss":(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});var n=r(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */"./node_modules/css-loader/dist/runtime/sourceMaps.js"),A=r.n(n),l=r(/*! ../../../node_modules/css-loader/dist/runtime/api.js */"./node_modules/css-loader/dist/runtime/api.js"),s=r.n(l)()(A());s.push([e.id,`.bJOWk32ptOAumeO3rgZA {
  border-radius: 2px;
  border: 1px solid #d7d7d7;
  background: #fff;
  width: 100%;
}

.rm1uT0GHFT7FVtKcktAl {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 9px 19px;
  cursor: pointer;
}

.QLsUKJsgG7nGNUWoiPxO {
  color: #41456b;
  font-family: Gilroy;
  font-size: 16px;
  font-weight: 500;
  line-height: 159%;
}

.kesBBsEhmkV6ebbO6GMw {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: all 0.4s;
  padding: 0px 20px;
}
.kesBBsEhmkV6ebbO6GMw::before, .kesBBsEhmkV6ebbO6GMw::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;
  background: rgb(215, 215, 215);
}
.kesBBsEhmkV6ebbO6GMw::before {
  left: -1px;
}
.kesBBsEhmkV6ebbO6GMw::after {
  right: -1px;
}
.kesBBsEhmkV6ebbO6GMw.OXn9ixcB1wdUbUL4R1yl {
  max-height: 500px;
  opacity: 1;
  overflow: visible;
  padding-bottom: 10px;
}

.DPxRSdarhuIon0Qmzn4x {
  display: flex;
  flex-direction: column;
  transition: all 0.4s;
  position: relative;
}`,"",{version:3,sources:["webpack://./src/UI/dropDown/index.module.scss"],names:[],mappings:"AAAA;EACE,kBAAA;EACA,yBAAA;EACA,gBAAA;EACA,WAAA;AACF;;AAEA;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,iBAAA;EACA,eAAA;AACF;;AAEA;EACE,cAAA;EACA,mBAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;AACF;;AAEA;EACE,aAAA;EACA,UAAA;EACA,gBAAA;EACA,oBAAA;EACA,iBAAA;AACF;AAAE;EAEE,WAAA;EACA,kBAAA;EACA,MAAA;EACA,SAAA;EACA,UAAA;EACA,8BAAA;AACJ;AAEE;EACE,UAAA;AAAJ;AAGE;EACE,WAAA;AADJ;AAGE;EACE,iBAAA;EACA,UAAA;EACA,iBAAA;EACA,oBAAA;AADJ;;AAKA;EACE,aAAA;EACA,sBAAA;EACA,oBAAA;EACA,kBAAA;AAFF",sourcesContent:['.dropdown {\n  border-radius: 2px;\n  border: 1px solid #d7d7d7;\n  background: #fff;\n  width: 100%;\n}\n\n.top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 9px 19px;\n  cursor: pointer;\n}\n\n.title {\n  color: #41456b;\n  font-family: Gilroy;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 159%;\n}\n\n.bottom {\n  max-height: 0;\n  opacity: 0;\n  overflow: hidden;\n  transition: all 0.4s;\n  padding: 0px 20px;\n  &::before,\n  &::after {\n    content: "";\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    width: 1px;\n    background: rgb(215, 215, 215);\n  }\n\n  &::before {\n    left: -1px;\n  }\n\n  &::after {\n    right: -1px;\n  }\n  &.active {\n    max-height: 500px;\n    opacity: 1;\n    overflow: visible;\n    padding-bottom: 10px;\n  }\n}\n\n.body {\n  display: flex;\n  flex-direction: column;\n  transition: all 0.4s;\n  position: relative;\n  &.active {\n  }\n}\n'],sourceRoot:""}]),s.locals={dropdown:"bJOWk32ptOAumeO3rgZA",top:"rm1uT0GHFT7FVtKcktAl",title:"QLsUKJsgG7nGNUWoiPxO",bottom:"kesBBsEhmkV6ebbO6GMw",active:"OXn9ixcB1wdUbUL4R1yl",body:"DPxRSdarhuIon0Qmzn4x"};let a=s},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/catalog/filterCatalog/filterComponents/selectedFilterButton/selectedFilter.scss":(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});var n=r(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */"./node_modules/css-loader/dist/runtime/sourceMaps.js"),A=r.n(n),l=r(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */"./node_modules/css-loader/dist/runtime/api.js"),s=r.n(l)()(A());s.push([e.id,`.selected-filter {
  border-radius: 2px;
  background: rgba(116, 129, 255, 0.2);
  display: inline-block;
}
.selected-filter__body {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 13px 10px;
}
.selected-filter__name {
  color: #41456b;
  text-align: center;
  font-family: Gilroy;
  font-size: 16px;
  font-weight: 700;
  line-height: 14.364px;
  letter-spacing: 0.32px;
  text-transform: uppercase;
}
.selected-filter__close {
  border: none;
  background: transparent none repeat 0 0 / auto auto padding-box border-box scroll;
  background: initial;
  cursor: pointer;
}`,"",{version:3,sources:["webpack://./src/pages/catalog/filterCatalog/filterComponents/selectedFilterButton/selectedFilter.scss"],names:[],mappings:"AAAA;EACE,kBAAA;EACA,oCAAA;EACA,qBAAA;AACF;AAAE;EACE,aAAA;EACA,mBAAA;EACA,SAAA;EACA,kBAAA;AAEJ;AAAE;EACE,cAAA;EACA,kBAAA;EACA,mBAAA;EACA,eAAA;EACA,gBAAA;EACA,qBAAA;EACA,sBAAA;EACA,yBAAA;AAEJ;AAAE;EACE,YAAA;EACA,iFAAA;EAAA,mBAAA;EACA,eAAA;AAEJ",sourcesContent:[".selected-filter {\r\n  border-radius: 2px;\r\n  background: rgba(116, 129, 255, 0.2);\r\n  display: inline-block;\r\n  &__body {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n    padding: 13px 10px;\r\n  }\r\n  &__name {\r\n    color: #41456b;\r\n    text-align: center;\r\n    font-family: Gilroy;\r\n    font-size: 16px;\r\n    font-weight: 700;\r\n    line-height: 14.364px;\r\n    letter-spacing: 0.32px;\r\n    text-transform: uppercase;\r\n  }\r\n  &__close {\r\n    border: none;\r\n    background: unset;\r\n    cursor: pointer;\r\n  }\r\n}\r\n"],sourceRoot:""}]);let a=s},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/catalog/filterCatalog/filterProducts/filterProduct.scss":(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});var n=r(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */"./node_modules/css-loader/dist/runtime/sourceMaps.js"),A=r.n(n),l=r(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */"./node_modules/css-loader/dist/runtime/api.js"),s=r.n(l)()(A());s.push([e.id,`.car-product {
  max-width: 420px;
  width: 100%;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
.car-product__body {
  display: flex;
  flex-direction: column;
}
.car-product__top img {
  max-width: 420px;
  width: 100%;
  height: 216px;
  -o-object-fit: cover;
     object-fit: cover;
}
@media (max-width: 800px) {
  .car-product__top img {
    height: auto;
  }
}
.car-product__bottom {
  border-radius: 0px 0px 5px 5px;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
@media (max-width: 567px) {
  .car-product__bottom {
    gap: 14px;
  }
}
.car-product__main-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.car-product__title {
  color: #41456b;
  font-family: Gilroy;
  font-size: 20px;
  font-weight: 600;
  line-height: 25px;
}
@media (max-width: 567px) {
  .car-product__title {
    font-size: 18px;
  }
}
.car-product__price {
  color: #7481ff;
  font-family: Gilroy;
  font-size: 20px;
  font-weight: 600;
  line-height: 25px;
}
@media (max-width: 567px) {
  .car-product__price {
    font-size: 18px;
  }
}
.car-product__secondary-info-list {
  list-style-type: none;
  display: flex;
  align-items: center;
}
.car-product__secondary-info-list li {
  color: #41456b;
  font-size: 16px;
  font-weight: 400;
  line-height: 180%;
  letter-spacing: 0.32px;
}
.car-product__secondary-info-list li:not(:last-child) {
  margin-right: 20px;
}
@media (max-width: 567px) {
  .car-product__secondary-info-list li:not(:last-child) {
    margin-right: 10px;
  }
}
@media (max-width: 567px) {
  .car-product__secondary-info-list {
    flex-wrap: wrap;
  }
}`,"",{version:3,sources:["webpack://./src/pages/catalog/filterCatalog/filterProducts/filterProduct.scss"],names:[],mappings:"AAAA;EACE,gBAAA;EACA,WAAA;EACA,eAAA;EACA,oCAAA;AACF;AAAE;EACE,aAAA;EACA,sBAAA;AAEJ;AACI;EACE,gBAAA;EACA,WAAA;EACA,aAAA;EACA,oBAAA;KAAA,iBAAA;AACN;AAAM;EALF;IAMI,YAAA;EAGN;AACF;AAAE;EACE,8BAAA;EACA,gBAAA;EACA,aAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;AAEJ;AADI;EAPF;IAQI,SAAA;EAIJ;AACF;AAFE;EACE,aAAA;EACA,sBAAA;EACA,SAAA;AAIJ;AAFE;EACE,cAAA;EACA,mBAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;AAIJ;AAHI;EANF;IAOI,eAAA;EAMJ;AACF;AAJE;EACE,cAAA;EACA,mBAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;AAMJ;AALI;EANF;IAOI,eAAA;EAQJ;AACF;AANE;EACE,qBAAA;EACA,aAAA;EACA,mBAAA;AAQJ;AAPI;EACE,cAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,sBAAA;AASN;AARM;EACE,kBAAA;AAUR;AATQ;EAFF;IAGI,kBAAA;EAYR;AACF;AATI;EAjBF;IAkBI,eAAA;EAYJ;AACF",sourcesContent:[".car-product {\r\n  max-width: 420px;\r\n  width: 100%;\r\n  cursor: pointer;\r\n  border: 1px solid rgba(0, 0, 0, 0.1);\r\n  &__body {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  &__top {\r\n    img {\r\n      max-width: 420px;\r\n      width: 100%;\r\n      height: 216px;\r\n      object-fit: cover;\r\n      @media(max-width: 800px) {\r\n        height: auto;\r\n      }\r\n    }\r\n  }\r\n  &__bottom {\r\n    border-radius: 0px 0px 5px 5px;\r\n    background: #fff;\r\n    padding: 20px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n    @media(max-width: 567px) {\r\n      gap: 14px;\r\n    }\r\n  }\r\n  &__main-info {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n  }\r\n  &__title {\r\n    color: #41456b;\r\n    font-family: Gilroy;\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n    line-height: 25px;\r\n    @media (max-width: 567px) {\r\n      font-size: 18px;\r\n    }\r\n  }\r\n  &__price {\r\n    color: #7481ff;\r\n    font-family: Gilroy;\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n    line-height: 25px;\r\n    @media (max-width: 567px) {\r\n      font-size: 18px;\r\n    }\r\n  }\r\n  &__secondary-info-list {\r\n    list-style-type: none;\r\n    display: flex;\r\n    align-items: center;\r\n    li {\r\n      color: #41456b;\r\n      font-size: 16px;\r\n      font-weight: 400;\r\n      line-height: 180%; \r\n      letter-spacing: 0.32px;\r\n      &:not(:last-child) {\r\n        margin-right: 20px;\r\n        @media (max-width: 567px) {\r\n          margin-right: 10px;\r\n        }\r\n      }\r\n    }\r\n    @media (max-width: 567px) {\r\n      flex-wrap: wrap;\r\n    }\r\n  }\r\n}\r\n"],sourceRoot:""}]);let a=s},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/catalog/filterCatalog/index.scss":(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});var n=r(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */"./node_modules/css-loader/dist/runtime/sourceMaps.js"),A=r.n(n),l=r(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */"./node_modules/css-loader/dist/runtime/api.js"),s=r.n(l)()(A());s.push([e.id,`@charset "UTF-8";
.filter {
  margin-top: 40px;
}
.filter__body {
  display: flex;
  align-items: baseline;
  gap: 40px;
}
@media (max-width: 1360px) {
  .filter__body {
    flex-direction: column;
  }
}
.filter__wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  position: relative;
  max-width: 860px;
}
@media (max-width: 1360px) {
  .filter__wrapper {
    max-width: none;
    max-width: initial;
  }
}
.filter__top {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}
@media (max-width: 800px) {
  .filter__top {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
}
.filter__search {
  display: flex;
  align-items: center;
  gap: 20px;
}
@media (max-width: 800px) {
  .filter__search {
    justify-content: center;
  }
}
.filter__top-left {
  width: 100%;
}
.filter__share-btn {
  border: none;
  background-color: transparent;
  background-color: initial;
}
.filter__search-btn {
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translate(-180%, -50%);
  border: none;
  background: transparent none repeat 0 0 / auto auto padding-box border-box scroll;
  background: initial;
  cursor: pointer;
}
.filter__search-wrapper {
  border-radius: 2px;
  border: 1px solid #d7d7d7;
  background: #fff;
  position: relative;
  width: 100%;
  max-width: 350px;
}
.filter__search-wrapper input {
  border: none;
  padding: 12px 20px;
  width: 100%;
}
.filter__search-wrapper input:focus-visible {
  outline: none;
}
.filter__top-right {
  display: flex;
  align-items: baseline;
  gap: 20px;
  width: 100%;
  justify-content: flex-end;
}
.filter__top-right span {
  color: #41456b;
  font-family: Gilroy;
  font-size: 16px;
  font-weight: 400;
  line-height: 180%;
  letter-spacing: 0.32px;
  white-space: nowrap;
}
@media (max-width: 800px) {
  .filter__top-right {
    justify-content: center;
  }
}
.filter__search-nothing {
  color: #41456b;
  font-family: Gilroy;
  font-size: 16px;
  font-weight: 600;
  line-height: 14.364px;
}
.filter__search-popup {
  background-color: #fff;
  z-index: 1000;
  width: 100.6%;
  position: absolute;
  top: 100%;
  left: -1px;
  border: 1px solid #d7d7d7;
}
.filter__search-popup--infilter {
  position: static;
  top: 0;
  left: 0;
  width: 100%;
  border: medium none currentColor;
  border: initial;
  border-top: 1px solid #d7d7d7;
}
.filter__search-list {
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 20px;
  border-radius: 2px;
  gap: 10px;
  max-height: 155px;
  overflow-y: auto;
  /* Стили для полосы прокрутки */
  /* Стили для "бегунка" прокрутки */
  /* Стили для трека прокрутки (фона) */
}
.filter__search-list::-webkit-scrollbar {
  width: 10px;
  padding-right: 10px;
}
.filter__search-list::-webkit-scrollbar-thumb {
  background-color: #d7d7d7; /* Цвет бегунка */
  border-radius: 5px; /* Скругление углов бегунка */
  width: 6px;
  height: 15px;
}
.filter__search-list::-webkit-scrollbar-track {
  width: 4px;
  height: 114px;
  background: #f3f3f3;
}
.filter__search-list li button {
  width: 100%;
  border: none;
  background: transparent none repeat 0 0 / auto auto padding-box border-box scroll;
  background: initial;
  color: #41456b;
  font-family: Gilroy;
  font-size: 16px;
  font-weight: 600;
  line-height: 14.364px;
  cursor: pointer;
  text-align: left;
  transition: all 0.3s;
}
.filter__search-list li button:hover {
  color: #7481ff;
}

.filter-sidebar {
  display: flex;
  flex-direction: column;
  gap: 31px;
  max-width: 300px;
  width: 100%;
}
@media (max-width: 1360px) {
  .filter-sidebar {
    max-width: none;
    max-width: initial;
  }
}
.filter-sidebar__top {
  display: flex;
  align-items: center;
  gap: 20px;
}
.filter-sidebar__list {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.filter-sidebar__clear {
  background: transparent none repeat 0 0 / auto auto padding-box border-box scroll;
  background: initial;
  border: none;
  color: #7481ff;
  font-family: Gilroy;
  font-size: 16px;
  font-weight: 500;
  line-height: 159%;
  cursor: pointer;
}

.recommendations__list {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.recommendations__list li button {
  border: none;
  background-color: transparent;
  background-color: initial;
  color: #41456b;
  font-family: Gilroy;
  font-size: 16px;
  font-weight: 500;
  line-height: 159%;
  cursor: pointer;
  width: 100%;
  text-align: left;
  transition: all 0.3s;
}
.recommendations__list li button:hover {
  color: #7481ff;
}

.selected-filters {
  list-style: none;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
}

.all-products {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: initial;
}
@media (max-width: 1368px) {
  .all-products {
    justify-content: center;
  }
}

.error {
  border-radius: 5px;
  background: #fff;
  background: var(--Primary-White, #fff);
  box-shadow: 0px 20px 25px 0px rgba(0, 0, 0, 0.1);
  padding: 60px;
  margin-top: 5px;
}
@media (max-width: 567px) {
  .error {
    padding: 30px;
  }
}
.error__body {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.error__title {
  color: #41456b;
  color: var(--Primary-Content, #41456b);
  font-family: Gilroy;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 25px;
}
@media (max-width: 567px) {
  .error__title {
    font-size: 16px;
  }
}
.error__subtitle {
  color: #41456b;
  color: var(--Primary-Content, #41456b);
  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 180%; /* 28.8px */
  letter-spacing: 0.32px;
}
@media (max-width: 567px) {
  .error__subtitle {
    font-size: 14px;
  }
}
.error__clear {
  background: none;
  border: none;
  color: #7481ff;
  color: var(--Primary-Accent, #7481ff);
  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 14.364px; /* 89.775% */
  letter-spacing: 0.32px;
  text-transform: uppercase;
  align-self: self-start;
  cursor: pointer;
}
@media (max-width: 567px) {
  .error__clear {
    font-size: 14px;
  }
}`,"",{version:3,sources:["webpack://./src/pages/catalog/filterCatalog/index.scss"],names:[],mappings:"AAAA,gBAAgB;AAAhB;EACE,gBAAA;AAEF;AADE;EACE,aAAA;EACA,qBAAA;EACA,SAAA;AAGJ;AAFI;EAJF;IAKI,sBAAA;EAKJ;AACF;AAHE;EACE,aAAA;EACA,sBAAA;EACA,SAAA;EACA,WAAA;EACA,kBAAA;EACA,gBAAA;AAKJ;AAJI;EAPF;IAQI,eAAA;IAAA,kBAAA;EAOJ;AACF;AALE;EACE,aAAA;EACA,qBAAA;EACA,8BAAA;AAOJ;AANI;EAJF;IAKI,sBAAA;IACA,mBAAA;IACA,SAAA;EASJ;AACF;AAPE;EACE,aAAA;EACA,mBAAA;EACA,SAAA;AASJ;AARI;EAJF;IAKI,uBAAA;EAWJ;AACF;AATE;EACE,WAAA;AAWJ;AATE;EACE,YAAA;EACA,6BAAA;EAAA,yBAAA;AAWJ;AATE;EACE,kBAAA;EACA,QAAA;EACA,UAAA;EACA,iCAAA;EACA,YAAA;EACA,iFAAA;EAAA,mBAAA;EACA,eAAA;AAWJ;AATE;EACE,kBAAA;EACA,yBAAA;EACA,gBAAA;EACA,kBAAA;EACA,WAAA;EACA,gBAAA;AAWJ;AAVI;EACE,YAAA;EACA,kBAAA;EACA,WAAA;AAYN;AAXM;EACE,aAAA;AAaR;AATE;EACE,aAAA;EACA,qBAAA;EACA,SAAA;EACA,WAAA;EACA,yBAAA;AAWJ;AAVI;EACE,cAAA;EACA,mBAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,sBAAA;EACA,mBAAA;AAYN;AAVI;EAfF;IAgBI,uBAAA;EAaJ;AACF;AATE;EACE,cAAA;EACA,mBAAA;EACA,eAAA;EACA,gBAAA;EACA,qBAAA;AAWJ;AATE;EACE,sBAAA;EACA,aAAA;EACA,aAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,yBAAA;AAWJ;AAVI;EACE,gBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,gCAAA;EAAA,eAAA;EACA,6BAAA;AAYN;AATE;EACE,aAAA;EACA,sBAAA;EACA,gBAAA;EACA,aAAA;EACA,kBAAA;EACA,SAAA;EACA,iBAAA;EACA,gBAAA;EACA,+BAAA;EAMA,kCAAA;EAQA,qCAAA;AADJ;AAZI;EACE,WAAA;EACA,mBAAA;AAcN;AAVI;EACE,yBAAA,EAAA,iBAAA;EACA,kBAAA,EAAA,6BAAA;EACA,UAAA;EACA,YAAA;AAYN;AARI;EACE,UAAA;EACA,aAAA;EACA,mBAAA;AAUN;AAPM;EACE,WAAA;EACA,YAAA;EACA,iFAAA;EAAA,mBAAA;EACA,cAAA;EACA,mBAAA;EACA,eAAA;EACA,gBAAA;EACA,qBAAA;EACA,eAAA;EACA,gBAAA;EACA,oBAAA;AASR;AARQ;EACE,cAAA;AAUV;;AAJA;EACE,aAAA;EACA,sBAAA;EACA,SAAA;EACA,gBAAA;EACA,WAAA;AAOF;AANE;EANF;IAOI,eAAA;IAAA,kBAAA;EASF;AACF;AARE;EACE,aAAA;EACA,mBAAA;EACA,SAAA;AAUJ;AARE;EACE,qBAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;AAUJ;AARE;EACE,iFAAA;EAAA,mBAAA;EACA,YAAA;EACA,cAAA;EACA,mBAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,eAAA;AAUJ;;AALE;EACE,qBAAA;EACA,aAAA;EACA,sBAAA;EACA,QAAA;AAQJ;AALM;EACE,YAAA;EACA,6BAAA;EAAA,yBAAA;EACA,cAAA;EACA,mBAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,eAAA;EACA,WAAA;EACA,gBAAA;EACA,oBAAA;AAOR;AANQ;EACE,cAAA;AAQV;;AADA;EACE,gBAAA;EACA,aAAA;EACA,mBAAA;EACA,eAAA;EACA,SAAA;EACA,gBAAA;AAIF;;AADA;EACE,aAAA;EACA,eAAA;EACA,SAAA;EACA,wBAAA;AAIF;AAHE;EALF;IAMI,uBAAA;EAMF;AACF;;AAHA;EACE,kBAAA;EACA,gBAAA;EAAA,sCAAA;EACA,gDAAA;EACA,aAAA;EACA,eAAA;AAMF;AALE;EANF;IAOI,aAAA;EAQF;AACF;AAPE;EACE,aAAA;EACA,sBAAA;EACA,SAAA;AASJ;AAPE;EACE,cAAA;EAAA,sCAAA;EACA,mBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;AASJ;AARI;EAPF;IAQI,eAAA;EAWJ;AACF;AATE;EACE,cAAA;EAAA,sCAAA;EACA,mBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA,EAAA,WAAA;EACA,sBAAA;AAWJ;AAVI;EARF;IASI,eAAA;EAaJ;AACF;AAXE;EACE,gBAAA;EACA,YAAA;EACA,cAAA;EAAA,qCAAA;EACA,mBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,qBAAA,EAAA,YAAA;EACA,sBAAA;EACA,yBAAA;EACA,sBAAA;EACA,eAAA;AAaJ;AAZI;EAbF;IAcI,eAAA;EAeJ;AACF",sourcesContent:['.filter {\r\n  margin-top: 40px;\r\n  &__body {\r\n    display: flex;\r\n    align-items: baseline;\r\n    gap: 40px;\r\n    @media (max-width: 1360px) {\r\n      flex-direction: column;\r\n    }\r\n  }\r\n  &__wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n    width: 100%;\r\n    position: relative;\r\n    max-width: 860px;\r\n    @media (max-width: 1360px) {\r\n      max-width: unset;\r\n    }\r\n  }\r\n  &__top {\r\n    display: flex;\r\n    align-items: baseline;\r\n    justify-content: space-between;\r\n    @media (max-width: 800px) {\r\n      flex-direction: column;\r\n      align-items: center;\r\n      gap: 20px;\r\n    }\r\n  }\r\n  &__search {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 20px;\r\n    @media (max-width: 800px) {\r\n      justify-content: center;\r\n    }\r\n  }\r\n  &__top-left {\r\n    width: 100%;\r\n  }\r\n  &__share-btn {\r\n    border: none;\r\n    background-color: unset;\r\n  }\r\n  &__search-btn {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 100%;\r\n    transform: translate(-180%, -50%);\r\n    border: none;\r\n    background: unset;\r\n    cursor: pointer;\r\n  }\r\n  &__search-wrapper {\r\n    border-radius: 2px;\r\n    border: 1px solid #d7d7d7;\r\n    background: #fff;\r\n    position: relative;\r\n    width: 100%;\r\n    max-width: 350px;\r\n    input {\r\n      border: none;\r\n      padding: 12px 20px;\r\n      width: 100%;\r\n      &:focus-visible {\r\n        outline: none;\r\n      }\r\n    }\r\n  }\r\n  &__top-right {\r\n    display: flex;\r\n    align-items: baseline;\r\n    gap: 20px;\r\n    width: 100%;\r\n    justify-content: flex-end;\r\n    span {\r\n      color: #41456b;\r\n      font-family: Gilroy;\r\n      font-size: 16px;\r\n      font-weight: 400;\r\n      line-height: 180%;\r\n      letter-spacing: 0.32px;\r\n      white-space: nowrap;\r\n    }\r\n    @media (max-width: 800px) {\r\n      justify-content: center;\r\n    }\r\n  }\r\n  &__products {\r\n  }\r\n  &__search-nothing {\r\n    color: #41456b;\r\n    font-family: Gilroy;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    line-height: 14.364px;\r\n  }\r\n  &__search-popup {\r\n    background-color: #fff;\r\n    z-index: 1000;\r\n    width: 100.6%;\r\n    position: absolute;\r\n    top: 100%;\r\n    left: -1px;\r\n    border: 1px solid #d7d7d7;\r\n    &--infilter {\r\n      position: static;\r\n      top: 0;\r\n      left: 0;\r\n      width: 100%;\r\n      border: unset;\r\n      border-top: 1px solid #d7d7d7;\r\n    }\r\n  }\r\n  &__search-list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    list-style: none;\r\n    padding: 20px;\r\n    border-radius: 2px;\r\n    gap: 10px;\r\n    max-height: 155px;\r\n    overflow-y: auto;\r\n    /* Стили для полосы прокрутки */\r\n    &::-webkit-scrollbar {\r\n      width: 10px;\r\n      padding-right: 10px;\r\n    }\r\n\r\n    /* Стили для "бегунка" прокрутки */\r\n    &::-webkit-scrollbar-thumb {\r\n      background-color: #d7d7d7; /* Цвет бегунка */\r\n      border-radius: 5px; /* Скругление углов бегунка */\r\n      width: 6px;\r\n      height: 15px;\r\n    }\r\n\r\n    /* Стили для трека прокрутки (фона) */\r\n    &::-webkit-scrollbar-track {\r\n      width: 4px;\r\n      height: 114px;\r\n      background: #f3f3f3;\r\n    }\r\n    li {\r\n      button {\r\n        width: 100%;\r\n        border: none;\r\n        background: unset;\r\n        color: #41456b;\r\n        font-family: Gilroy;\r\n        font-size: 16px;\r\n        font-weight: 600;\r\n        line-height: 14.364px;\r\n        cursor: pointer;\r\n        text-align: left;\r\n        transition: all 0.3s;\r\n        &:hover {\r\n          color: #7481ff;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n.filter-sidebar {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 31px;\r\n  max-width: 300px;\r\n  width: 100%;\r\n  @media (max-width: 1360px) {\r\n    max-width: unset;\r\n  }\r\n  &__top {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 20px;\r\n  }\r\n  &__list {\r\n    list-style-type: none;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n  }\r\n  &__clear {\r\n    background: unset;\r\n    border: none;\r\n    color: #7481ff;\r\n    font-family: Gilroy;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    line-height: 159%;\r\n    cursor: pointer;\r\n  }\r\n}\r\n\r\n.recommendations {\r\n  &__list {\r\n    list-style-type: none;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n\r\n    li {\r\n      button {\r\n        border: none;\r\n        background-color: unset;\r\n        color: #41456b;\r\n        font-family: Gilroy;\r\n        font-size: 16px;\r\n        font-weight: 500;\r\n        line-height: 159%;\r\n        cursor: pointer;\r\n        width: 100%;\r\n        text-align: left;\r\n        transition: all 0.3s;\r\n        &:hover {\r\n          color: #7481ff;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.selected-filters {\r\n  list-style: none;\r\n  display: flex;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  gap: 10px;\r\n  margin-top: 20px;\r\n}\r\n\r\n.all-products {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 20px;\r\n  justify-content: unset;\r\n  @media (max-width: 1368px) {\r\n    justify-content: center;\r\n  }\r\n}\r\n\r\n.error {\r\n  border-radius: 5px;\r\n  background: var(--Primary-White, #fff);\r\n  box-shadow: 0px 20px 25px 0px rgba(0, 0, 0, 0.1);\r\n  padding: 60px;\r\n  margin-top: 5px;\r\n  @media (max-width: 567px) {\r\n    padding: 30px;\r\n  }\r\n  &__body {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n  }\r\n  &__title {\r\n    color: var(--Primary-Content, #41456b);\r\n    font-family: Gilroy;\r\n    font-size: 20px;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: 25px;\r\n    @media (max-width: 567px) {\r\n      font-size: 16px;\r\n    }\r\n  }\r\n  &__subtitle {\r\n    color: var(--Primary-Content, #41456b);\r\n    font-family: Gilroy;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: 180%; /* 28.8px */\r\n    letter-spacing: 0.32px;\r\n    @media (max-width: 567px) {\r\n      font-size: 14px;\r\n    }\r\n  }\r\n  &__clear {\r\n    background: none;\r\n    border: none;\r\n    color: var(--Primary-Accent, #7481ff);\r\n    font-family: Gilroy;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 14.364px; /* 89.775% */\r\n    letter-spacing: 0.32px;\r\n    text-transform: uppercase;\r\n    align-self: self-start;\r\n    cursor: pointer;\r\n    @media (max-width: 567px) {\r\n      font-size: 14px;\r\n    }\r\n  }\r\n}\r\n'],sourceRoot:""}]);let a=s},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/catalog/filterCatalog/renderFilters/index.scss":(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});var n=r(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */"./node_modules/css-loader/dist/runtime/sourceMaps.js"),A=r.n(n),l=r(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */"./node_modules/css-loader/dist/runtime/api.js"),s=r.n(l)()(A());s.push([e.id,`.make {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
}
.make__title {
  color: #41456b;
  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 14.364px; /* 89.775% */
}
.make__wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.type {
  margin-top: 12px;
}
.type__list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
}
@media (min-width: 1280px) {
  .type__list-item:hover .type__list-item-wrapper span {
    color: #7481ff;
  }
}
.type__list-item-check {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  color: #41456b;
  font-family: Gilroy;
  font-size: 16px;
  font-weight: 500;
  line-height: 159%;
}
.type__list-item-wrapper {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 5px;
}
.type__list-item-wrapper span {
  color: #41456b;
  font-family: Gilroy;
  font-size: 16px;
  font-weight: 600;
  line-height: 159%;
  transition: all 0.3s;
}
.type__list-item-wrapper img {
  width: 34px;
  height: 15.622px;
}

.transmission {
  margin-top: 10px;
}
.transmission__list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
}
@media (min-width: 1280px) {
  .transmission__list-item:hover .transmission__list-item-wrapper span {
    color: #7481ff;
  }
}
.transmission__list-item-check {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  color: #41456b;
  font-family: Gilroy;
  font-size: 16px;
  font-weight: 500;
  line-height: 159%; /* 25.44px */
}
.transmission__list-item-wrapper {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 5px;
}
.transmission__list-item-wrapper span {
  color: #41456b;
  color: var(--primary-content, #41456b);
  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 14.364px;
  transition: all 0.3s;
}
.transmission__list-item-wrapper img {
  width: 34px;
  height: 15.622px;
}

.price {
  margin-top: 10px;
}
.price__counts {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.price__counts span {
  color: #41456b;
  font-family: Gilroy;
  font-size: 20px;
  font-weight: 600;
  line-height: 25px; /* 125% */
}`,"",{version:3,sources:["webpack://./src/pages/catalog/filterCatalog/renderFilters/index.scss"],names:[],mappings:"AAAA;EACE,aAAA;EACA,sBAAA;EACA,SAAA;EACA,gBAAA;AACF;AAAE;EACE,cAAA;EACA,mBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,qBAAA,EAAA,YAAA;AAEJ;AAAE;EACE,aAAA;EACA,sBAAA;EACA,SAAA;AAEJ;;AAEA;EACE,gBAAA;AACF;AACE;EACE,aAAA;EACA,sBAAA;EACA,SAAA;EACA,gBAAA;AACJ;AAEI;EAIM;IACE,cAAA;EAHV;AACF;AASE;EACE,eAAA;EACA,aAAA;EACA,mBAAA;EACA,QAAA;EACA,cAAA;EACA,mBAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;AAPJ;AASE;EACE,aAAA;EACA,2BAAA;EACA,mBAAA;EACA,QAAA;AAPJ;AASI;EACE,cAAA;EACA,mBAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,oBAAA;AAPN;AASI;EACE,WAAA;EACA,gBAAA;AAPN;;AAYA;EACE,gBAAA;AATF;AAUE;EACE,aAAA;EACA,sBAAA;EACA,SAAA;EACA,gBAAA;AARJ;AAYI;EAIM;IACE,cAAA;EAbV;AACF;AAkBE;EACE,eAAA;EACA,aAAA;EACA,mBAAA;EACA,QAAA;EAEA,cAAA;EACA,mBAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA,EAAA,YAAA;AAjBJ;AAmBE;EACE,aAAA;EACA,2BAAA;EACA,mBAAA;EACA,QAAA;AAjBJ;AAkBI;EACE,cAAA;EAAA,sCAAA;EACA,mBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,qBAAA;EACA,oBAAA;AAhBN;AAkBI;EACE,WAAA;EACA,gBAAA;AAhBN;;AAqBA;EACE,gBAAA;AAlBF;AAmBE;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;AAjBJ;AAkBI;EACE,cAAA;EACA,mBAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA,EAAA,SAAA;AAhBN",sourcesContent:[".make {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n  margin-top: 20px;\r\n  &__title {\r\n    color: #41456b;\r\n    font-family: Gilroy;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: 14.364px; /* 89.775% */\r\n  }\r\n  &__wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n  }\r\n}\r\n\r\n.type {\r\n  margin-top: 12px;\r\n\r\n  &__list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    list-style: none;\r\n  }\r\n  &__list-item {\r\n    @media(min-width: 1280px) {\r\n      \r\n      &:hover {\r\n        .type__list-item-wrapper {\r\n          span {\r\n            color: #7481ff;\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  &__list-item-check {\r\n    cursor: pointer;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 5px;\r\n    color: #41456b;\r\n    font-family: Gilroy;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    line-height: 159%;\r\n  }\r\n  &__list-item-wrapper {\r\n    display: flex;\r\n    flex-direction: row-reverse;\r\n    align-items: center;\r\n    gap: 5px;\r\n\r\n    span {\r\n      color: #41456b;\r\n      font-family: Gilroy;\r\n      font-size: 16px;\r\n      font-weight: 600;\r\n      line-height: 159%;\r\n      transition: all 0.3s;\r\n    }\r\n    img {\r\n      width: 34px;\r\n      height: 15.622px;\r\n    }\r\n  }\r\n}\r\n\r\n.transmission {\r\n  margin-top: 10px;\r\n  &__list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    list-style: none;\r\n  }\r\n  &__list-item {\r\n\r\n    @media(min-width: 1280px) {\r\n      \r\n      &:hover {\r\n        .transmission__list-item-wrapper {\r\n          span {\r\n            color: #7481ff;\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n  &__list-item-check {\r\n    cursor: pointer;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 5px;\r\n\r\n    color: #41456b;\r\n    font-family: Gilroy;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    line-height: 159%; /* 25.44px */\r\n  }\r\n  &__list-item-wrapper {\r\n    display: flex;\r\n    flex-direction: row-reverse;\r\n    align-items: center;\r\n    gap: 5px;\r\n    span {\r\n      color: var(--primary-content, #41456b);\r\n      font-family: Gilroy;\r\n      font-size: 16px;\r\n      font-style: normal;\r\n      font-weight: 600;\r\n      line-height: 14.364px;\r\n      transition: all 0.3s;\r\n    }\r\n    img {\r\n      width: 34px;\r\n      height: 15.622px;\r\n    }\r\n  }\r\n}\r\n\r\n.price {\r\n  margin-top: 10px;\r\n  &__counts {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    span {\r\n      color: #41456b;\r\n      font-family: Gilroy;\r\n      font-size: 20px;\r\n      font-weight: 600;\r\n      line-height: 25px; /* 125% */\r\n    }\r\n  }\r\n}\r\n"],sourceRoot:""}]);let a=s},"./src/UI/dropDown/index.module.scss":(e,t,r)=>{r.r(t),r.d(t,{default:()=>g});var n=r(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),A=r.n(n),l=r(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */"./node_modules/style-loader/dist/runtime/styleDomAPI.js"),s=r.n(l),a=r(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */"./node_modules/style-loader/dist/runtime/insertBySelector.js"),i=r.n(a),o=r(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),d=r.n(o),c=r(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */"./node_modules/style-loader/dist/runtime/insertStyleElement.js"),m=r.n(c),p=r(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */"./node_modules/style-loader/dist/runtime/styleTagTransform.js"),u=r.n(p),f=r(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../node_modules/sass-loader/dist/cjs.js!./index.module.scss */"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/UI/dropDown/index.module.scss"),E={};E.styleTagTransform=u(),E.setAttributes=d(),E.insert=i().bind(null,"head"),E.domAPI=s(),E.insertStyleElement=m(),A()(f.default,E);let g=f.default&&f.default.locals?f.default.locals:void 0},"./src/pages/catalog/filterCatalog/filterComponents/selectedFilterButton/selectedFilter.scss":(e,t,r)=>{r.r(t),r.d(t,{default:()=>g});var n=r(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),A=r.n(n),l=r(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */"./node_modules/style-loader/dist/runtime/styleDomAPI.js"),s=r.n(l),a=r(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */"./node_modules/style-loader/dist/runtime/insertBySelector.js"),i=r.n(a),o=r(/*! !../../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),d=r.n(o),c=r(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */"./node_modules/style-loader/dist/runtime/insertStyleElement.js"),m=r.n(c),p=r(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */"./node_modules/style-loader/dist/runtime/styleTagTransform.js"),u=r.n(p),f=r(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js!./selectedFilter.scss */"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/catalog/filterCatalog/filterComponents/selectedFilterButton/selectedFilter.scss"),E={};E.styleTagTransform=u(),E.setAttributes=d(),E.insert=i().bind(null,"head"),E.domAPI=s(),E.insertStyleElement=m(),A()(f.default,E);let g=f.default&&f.default.locals?f.default.locals:void 0},"./src/pages/catalog/filterCatalog/filterProducts/filterProduct.scss":(e,t,r)=>{r.r(t),r.d(t,{default:()=>g});var n=r(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),A=r.n(n),l=r(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */"./node_modules/style-loader/dist/runtime/styleDomAPI.js"),s=r.n(l),a=r(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */"./node_modules/style-loader/dist/runtime/insertBySelector.js"),i=r.n(a),o=r(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),d=r.n(o),c=r(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */"./node_modules/style-loader/dist/runtime/insertStyleElement.js"),m=r.n(c),p=r(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */"./node_modules/style-loader/dist/runtime/styleTagTransform.js"),u=r.n(p),f=r(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js!./filterProduct.scss */"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/catalog/filterCatalog/filterProducts/filterProduct.scss"),E={};E.styleTagTransform=u(),E.setAttributes=d(),E.insert=i().bind(null,"head"),E.domAPI=s(),E.insertStyleElement=m(),A()(f.default,E);let g=f.default&&f.default.locals?f.default.locals:void 0},"./src/pages/catalog/filterCatalog/index.scss":(e,t,r)=>{r.r(t),r.d(t,{default:()=>g});var n=r(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),A=r.n(n),l=r(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */"./node_modules/style-loader/dist/runtime/styleDomAPI.js"),s=r.n(l),a=r(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */"./node_modules/style-loader/dist/runtime/insertBySelector.js"),i=r.n(a),o=r(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),d=r.n(o),c=r(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */"./node_modules/style-loader/dist/runtime/insertStyleElement.js"),m=r.n(c),p=r(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */"./node_modules/style-loader/dist/runtime/styleTagTransform.js"),u=r.n(p),f=r(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../../node_modules/sass-loader/dist/cjs.js!./index.scss */"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/catalog/filterCatalog/index.scss"),E={};E.styleTagTransform=u(),E.setAttributes=d(),E.insert=i().bind(null,"head"),E.domAPI=s(),E.insertStyleElement=m(),A()(f.default,E);let g=f.default&&f.default.locals?f.default.locals:void 0},"./src/pages/catalog/filterCatalog/renderFilters/index.scss":(e,t,r)=>{r.r(t),r.d(t,{default:()=>g});var n=r(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),A=r.n(n),l=r(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */"./node_modules/style-loader/dist/runtime/styleDomAPI.js"),s=r.n(l),a=r(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */"./node_modules/style-loader/dist/runtime/insertBySelector.js"),i=r.n(a),o=r(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),d=r.n(o),c=r(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */"./node_modules/style-loader/dist/runtime/insertStyleElement.js"),m=r.n(c),p=r(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */"./node_modules/style-loader/dist/runtime/styleTagTransform.js"),u=r.n(p),f=r(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js!./index.scss */"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/pages/catalog/filterCatalog/renderFilters/index.scss"),E={};E.styleTagTransform=u(),E.setAttributes=d(),E.insert=i().bind(null,"head"),E.domAPI=s(),E.insertStyleElement=m(),A()(f.default,E);let g=f.default&&f.default.locals?f.default.locals:void 0},"./src/img/catalog/Sedan.svg":(e,t,r)=>{e.exports=r.p+"assets/Sedan.svg"},"./src/img/catalog/convertiable.svg":(e,t,r)=>{e.exports=r.p+"assets/convertiable.svg"},"./src/img/catalog/coupe.svg":(e,t,r)=>{e.exports=r.p+"assets/coupe.svg"},"./src/img/catalog/hatchback.svg":(e,t,r)=>{e.exports=r.p+"assets/hatchback.svg"},"./src/img/catalog/suv.svg":(e,t,r)=>{e.exports=r.p+"assets/suv.svg"},"./src/img/catalog/truck.svg":(e,t,r)=>{e.exports=r.p+"assets/truck.svg"},"./src/img/catalog/van.svg":(e,t,r)=>{e.exports=r.p+"assets/van.svg"}}]);
//# sourceMappingURL=src_pages_catalog_Catalog_jsx.js.map