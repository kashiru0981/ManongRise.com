(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[915],{23646:function(e,t,n){var a=n(67228);e.exports=function(e){if(Array.isArray(e))return a(e)}},59713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},46860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},98206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:function(e,t,n){var a=n(23646),r=n(46860),o=n(60379),i=n(98206);e.exports=function(e){return a(e)||r(e)||o(e)||i()}},93367:function(e,t,n){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var r=((a=n(67294))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=r},7845:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(r.default.useContext(o.AmpStateContext))};var a,r=(a=n(67294))&&a.__esModule?a:{default:a},o=n(93367);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,r=void 0!==a&&a,o=e.hasQuery,i=void 0!==o&&o;return n||r&&i}},57947:function(e,t,n){"use strict";var a=n(59713);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}t.__esModule=!0,t.defaultHead=d,t.default=void 0;var o,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=a?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n(67294)),s=(o=n(60617))&&o.__esModule?o:{default:o},c=n(93367),l=n(74287),u=n(7845);function f(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function h(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var m=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(h,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,a={};return function(r){var o=!0,i=!1;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){i=!0;var s=r.key.slice(r.key.indexOf("$")+1);e.has(s)?o=!1:e.add(s)}switch(r.type){case"title":case"base":t.has(r.type)?o=!1:t.add(r.type);break;case"meta":for(var c=0,l=m.length;c<l;c++){var u=m[c];if(r.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?o=!1:n.add(u);else{var f=r.props[u],d=a[u]||new Set;"name"===u&&i||!d.has(f)?(d.add(f),a[u]=d):o=!1}}}return o}}()).reverse().map((function(e,n){var o=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var s=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return s["data-href"]=s.href,s.href=void 0,s["data-optimized-fonts"]=!0,i.default.cloneElement(e,s)}return i.default.cloneElement(e,{key:o})}))}function x(e){var t=e.children,n=(0,i.useContext)(c.AmpStateContext),a=(0,i.useContext)(l.HeadManagerContext);return i.default.createElement(s.default,{reduceComponentsToState:p,headManager:a,inAmpMode:(0,u.isInAmpMode)(n)},t)}x.rewind=function(){};var y=x;t.default=y},60617:function(e,t,n){"use strict";var a=n(319),r=n(34575),o=n(93913),i=(n(81506),n(2205)),s=n(78585),c=n(29754);function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=c(e);if(t){var r=c(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var u=n(67294),f=function(e){i(n,e);var t=l(n);function n(e){var o;return r(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(a(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);t.default=f},73039:function(e,t,n){"use strict";n.r(t),n.d(t,{Container:function(){return o}});var a=n(85893),r=n(67294),o=function(e){var t=e.children;return(0,a.jsx)("div",{className:"container",children:t})};t.default=r.memo(o)},19590:function(e,t,n){"use strict";n.r(t);var a=n(85893),r=n(6610),o=n(5991),i=n(65255),s=n(86089),c=n(77608),l=n(67294);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,c.Z)(e);if(t){var r=(0,c.Z)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return(0,s.Z)(this,n)}}var f=function(e){(0,i.Z)(n,e);var t=u(n);function n(){return(0,r.Z)(this,n),t.apply(this,arguments)}return(0,o.Z)(n,[{key:"render",value:function(){return(0,a.jsx)(l.Fragment,{children:(0,a.jsx)("div",{className:"footer",id:"footer",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsxs)("div",{className:"row py-4 align-items-center",children:[(0,a.jsxs)("div",{className:"col-12 col-lg-6",children:[(0,a.jsx)("h1",{className:"text-white",children:"Safemoon Protocol"}),(0,a.jsx)("p",{children:"The SafeMoon Protocol is a community driven, fair launched DeFi Token. Three simple functions occur during each trade: Reflection, LP Acquisition, & Burn."})]}),(0,a.jsxs)("div",{className:"col-4 col-lg-2",children:[(0,a.jsx)("h3",{className:"text-white",children:"Community"}),(0,a.jsxs)("ul",{className:"list-unstyled",children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"text-light",href:"https://forums.safemoon.net",target:"_blank",children:"Forums"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"text-light",href:"https://discord.gg/safemoon",target:"_blank",children:"Discord"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"text-light",href:"https://www.reddit.com/r/SafeMoon/",target:"_blank",children:"Reddit"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"text-light",href:"https://t.me/safemoonv2",target:"_blank",children:"Telegram"})})]})]}),(0,a.jsxs)("div",{className:"col-4 col-lg-2",children:[(0,a.jsx)("h3",{className:"text-white",children:"Social"}),(0,a.jsxs)("ul",{className:"list-unstyled",children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"text-light",href:"https://facebook.com/safemoonprotocol",children:"Facebook"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"text-light",href:"https://twitter.com/safemoon",children:"Twitter"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"text-light",href:"https://www.instagram.com/safemoonhq/",children:"Instagram"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"text-light",href:"https://www.linkedin.com/company/safemoon/",children:"LinkedIn"})})]})]}),(0,a.jsxs)("div",{className:"col-4 col-lg-2",children:[(0,a.jsx)("h3",{className:"text-white",children:"Resources"}),(0,a.jsxs)("ul",{className:"list-unstyled",children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"text-light",href:"/branding",children:"Branding"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"text-light",href:"/wallet",children:"Wallet Tracker"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"text-light",href:"https://github.com/safemoonprotocol/Safemoon.sol",target:"_blank",children:"Contract"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"text-light",href:"/whitepaper",children:"White paper"})})]})]})]}),(0,a.jsx)("hr",{}),(0,a.jsxs)("div",{className:"row align-items-center",children:[(0,a.jsx)("div",{className:"col",children:(0,a.jsx)("h3",{className:"mb-0 text-white",children:"Copyright \xa9 2021 Safemoon LLC. | All Rights Reserved"})}),(0,a.jsxs)("div",{className:"col text-end",children:[(0,a.jsx)("a",{href:"/terms",className:"btn btn-link btn-sm px-0 text-light",children:"Terms of Service"}),(0,a.jsx)("a",{href:"/privacy",className:"btn btn-link btn-sm px-0 text-light",children:"Privacy Policy"}),(0,a.jsx)("a",{href:"/privacy",className:"btn btn-link btn-sm px-0 text-light",children:"Cookie Policy"})]})]})]})})})}}]),n}(l.Component);t.default=l.memo(f)},32480:function(e,t,n){"use strict";n.r(t),n.d(t,{PageHead:function(){return i}});var a=n(85893),r=n(67294),o=n(9008),i=function(e){var t=e.title,n=e.desc;return"undefined"==typeof n&&(n="The official home of SafeMoon. The SafeMoon Protocol is a community driven, fair launched DeFi Token. Three simple functions occur during each trade: Reflection, LP Acquisition, and Burn."),(0,a.jsxs)(o.default,{children:[(0,a.jsxs)("title",{children:[t," | Safemoon"]}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=0.87, shrink-to-fit=no"}),(0,a.jsx)("meta",{name:"description",content:n}),(0,a.jsx)("link",{rel:"shortcut icon",type:"image/png",href:"../img/favicon.png"}),(0,a.jsx)("meta",{name:"keywords",content:"safemoon,safemars,safegalaxy,shib,shiba,kucoin,xrp,bonfire,diamondhold,gmr,vechain,elon,elongate,bitcoin,dogecoin,doge,defi,coinbase,coinmarketcap,coinmarket,bscscan,whitebit,coingecko,cryptocurrency,crypto,pancakeswap,dex,etherium,eth,btc"}),(0,a.jsx)("meta",{property:"og:image",content:"https://safemoon.net/img/social_thumb.png"}),(0,a.jsx)("meta",{property:"og:image:type",content:"image/png"}),(0,a.jsx)("meta",{property:"og:image:width",content:"1280"}),(0,a.jsx)("meta",{property:"og:image:height",content:"640"}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("meta",{name:"twitter:description",content:n}),(0,a.jsx)("meta",{name:"twitter:title",content:t+" | SafeMoon Protocol"}),(0,a.jsx)("meta",{name:"twitter:site",content:"@safemoon"}),(0,a.jsx)("script",{src:"../js/jquery-3.6.0.min.js"}),(0,a.jsx)("script",{src:"https://cdn.jsdelivr.net/npm/chart.js@3.1.0/dist/chart.min.js"}),(0,a.jsx)("script",{src:"../js/bootstrap.bundle.min.js"})]})};t.default=r.memo(i)},44264:function(e,t,n){"use strict";n.r(t);var a=n(85893),r=n(6610),o=n(5991),i=n(65255),s=n(86089),c=n(77608),l=n(67294),u=(n(73039),n(19755)),f=n.n(u);function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,c.Z)(e);if(t){var r=(0,c.Z)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return(0,s.Z)(this,n)}}var h=function(e){(0,i.Z)(n,e);var t=d(n);function n(){return(0,r.Z)(this,n),t.apply(this,arguments)}return(0,o.Z)(n,[{key:"componentDidMount",value:function(){f()(".menu-btn").on("click",(function(e){e.preventDefault(),f()(".custom-navbar").toggleClass("open")})),f()("#closemenu").on("click",(function(e){e.preventDefault(),f()(".custom-navbar").removeClass("open")}))}},{key:"render",value:function(){return(0,a.jsx)(l.Fragment,{children:(0,a.jsx)("div",{className:"custom-nav text-center sticky-top",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsxs)("div",{className:"d-flex align-items-center custom-navbar justify-content-lg-between flex-column flex-lg-row",children:[(0,a.jsx)("a",{href:"/",className:"navbrand d-none d-lg-inline-block",rel:"nofollow",children:(0,a.jsx)("img",{src:"../img/174x174.png",height:50,className:"mr-3"})}),(0,a.jsxs)("a",{href:"/",className:"navbrand d-lg-none text-white mb-5",rel:"nofollow",id:"closemenu",children:[(0,a.jsx)("i",{className:"fal fa-times"})," Close"]}),(0,a.jsxs)("div",{className:"d-flex flex-column flex-lg-row text-center",children:[(0,a.jsx)("div",{className:"flex-fill",children:(0,a.jsx)("a",{href:"/",className:"px-3",children:"Home"})}),(0,a.jsx)("div",{className:"flex-fill",children:(0,a.jsx)("a",{href:"https://shop.safemoon.net",className:"px-3",target:"_blank",children:"Shop"})}),(0,a.jsx)("div",{className:"flex-fill",children:(0,a.jsx)("a",{href:"https://forums.safemoon.net",className:"px-3",target:"_blank",children:"Forums"})}),(0,a.jsx)("div",{className:"flex-fill",children:(0,a.jsxs)("a",{href:"/products",className:"px-3",children:["Products",(0,a.jsx)("div",{className:"new"})]})}),(0,a.jsx)("div",{className:"flex-fill",children:(0,a.jsx)("a",{href:"/markets",className:"px-3",children:"Markets"})}),(0,a.jsx)("div",{className:"flex-fill",children:(0,a.jsx)("a",{href:"/buy",className:"px-3",children:"Buy Now"})})]})]}),(0,a.jsxs)("div",{className:"d-flex d-lg-none justify-content-between align-items-center mobile-menu",children:[(0,a.jsx)("a",{href:"/",className:"navbrand text-white",children:"SafeMoon"}),(0,a.jsx)("div",{children:(0,a.jsxs)("a",{href:"",className:"btn btn-link text-white btn-lg px-3 menu-btn",children:[(0,a.jsx)("i",{className:"fal fa-bars fa-fw"})," Menu"]})})]})]})})})}}]),n}(l.Component);t.default=h},43853:function(e,t,n){"use strict";n.r(t);var a=n(85893),r=n(6610),o=n(5991),i=n(65255),s=n(86089),c=n(77608),l=n(67294),u=n(69322),f=n(48134),d=n.n(f),h=n(40368),m=n.n(h),p=n(44264);function x(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,c.Z)(e);if(t){var r=(0,c.Z)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return(0,s.Z)(this,n)}}var y=function(e){(0,i.Z)(n,e);var t=x(n);function n(){return(0,r.Z)(this,n),t.apply(this,arguments)}return(0,o.Z)(n,[{key:"render",value:function(){return(0,a.jsx)(l.Fragment,{children:(0,a.jsxs)("header",{className:"small-header",children:[(0,a.jsx)(d(),{className:"particlesjs",params:m()}),(0,a.jsx)(u.default,{}),(0,a.jsx)(p.default,{}),(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("div",{className:"d-flex align-items-center header-row",children:(0,a.jsxs)("div",{className:"flex-fill w-100",children:[(0,a.jsx)("h1",{className:"largenumbers mb-0",children:"Safemoon"}),(0,a.jsx)("p",{className:"text-white mb-5",children:this.props.title})]})})})]})})}}]),n}(l.Component);t.default=y},69322:function(e,t,n){"use strict";n.r(t);var a=n(85893),r=n(6610),o=n(5991),i=n(65255),s=n(86089),c=n(77608),l=n(67294);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,c.Z)(e);if(t){var r=(0,c.Z)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return(0,s.Z)(this,n)}}var f=function(e){(0,i.Z)(n,e);var t=u(n);function n(){return(0,r.Z)(this,n),t.apply(this,arguments)}return(0,o.Z)(n,[{key:"render",value:function(){return(0,a.jsx)(l.Fragment,{children:(0,a.jsx)("div",{className:"top-bar",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,a.jsx)("div",{className:"d-none d-lg-block w-100",children:(0,a.jsx)("ul",{className:"topnav",children:(0,a.jsx)("li",{className:"text-white-50",children:"The official home of Safemoon"})})}),(0,a.jsxs)("div",{className:"text-center text-lg-right w-100 icon-menu",children:[(0,a.jsx)("a",{href:"https://facebook.com/safemoonprotocol",className:"mr-2 text-info",target:"_blank","data-toggle":"tooltip",title:"facebook",children:(0,a.jsx)("i",{className:"fab fa-facebook fa-fw"})}),(0,a.jsx)("a",{href:"https://twitter.com/safemoon",className:"mx-2 text-info",target:"_blank","data-toggle":"tooltip",title:"Twitter",children:(0,a.jsx)("i",{className:"fab fa-twitter fa-fw"})}),(0,a.jsx)("a",{href:"https://www.instagram.com/safemoonhq/",className:"mx-2 text-info",target:"_blank","data-toggle":"tooltip",title:"Instagram",children:(0,a.jsx)("i",{className:"fab fa-instagram fa-fw"})}),(0,a.jsx)("a",{href:"https://github.com/Safemoon-Protocol",className:"mx-2 text-info",target:"_blank","data-toggle":"tooltip",title:"Github",children:(0,a.jsx)("i",{className:"fab fa-github fa-fw"})}),(0,a.jsx)("a",{href:"https://www.reddit.com/r/SafeMoon/",className:"mx-2 text-info",target:"_blank","data-toggle":"tooltip",title:"Reddit",children:(0,a.jsx)("i",{className:"fab fa-reddit fa-fw"})}),(0,a.jsx)("a",{href:"https://t.me/safemoonv2",className:"mx-2 text-info",target:"_blank","data-toggle":"tooltip",title:"Telegram",children:(0,a.jsx)("i",{className:"fab fa-telegram fa-fw"})}),(0,a.jsx)("a",{href:"https://discord.gg/safemoon",className:"mx-2 text-info",target:"_blank","data-toggle":"tooltip",title:"Discord",children:(0,a.jsx)("i",{className:"fab fa-discord fa-fw"})}),(0,a.jsx)("a",{href:"https://www.youtube.com/channel/UCbfKS3AEsY9QMYK7nxJjKqw",className:"ml-2 text-info",target:"_blank","data-toggle":"tooltip",title:"Youtube",children:(0,a.jsx)("i",{className:"fab fa-youtube fa-fw"})}),(0,a.jsx)("a",{href:"https://twitch.tv/safemoonprotocol",className:"ml-2 text-info",target:"_blank","data-toggle":"tooltip",title:"Twitch",children:(0,a.jsx)("i",{className:"fab fa-twitch fa-fw"})})]})]})})})})}}]),n}(l.Component);t.default=f},7033:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var a=n(85893),r=n(6610),o=n(5991),i=n(65255),s=n(86089),c=n(77608),l=n(67294),u=n(43853),f=n(19590),d=n(32480);function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,c.Z)(e);if(t){var r=(0,c.Z)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return(0,s.Z)(this,n)}}var m=function(e){(0,i.Z)(n,e);var t=h(n);function n(){return(0,r.Z)(this,n),t.apply(this,arguments)}return(0,o.Z)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=(0,a.jsx)(d.default,{title:"Privacy Policy"});return(0,a.jsxs)(l.Fragment,{children:[e,(0,a.jsx)(u.default,{title:"Privacy Policy"}),(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("div",{className:"row py-5 text-light",children:(0,a.jsxs)("div",{className:"col-12",children:[(0,a.jsx)("h1",{className:"text-white mb-0",children:"Privacy Policy & Cookies Policy"}),(0,a.jsx)("p",{className:"mb-5",children:"Updated March 23, 2021"}),(0,a.jsx)("p",{children:"We Safemoon (safemoon.net), are committed to protecting any data that we collect concerning you. By using our services you agree to the use of the data that we collect in accordance with this Privacy Policy."}),(0,a.jsx)("p",{children:"We are committed to protecting your privacy."}),(0,a.jsx)("p",{children:'We collect the minimum amount of information about you that is commensurate with providing you with a satisfactory service. This Policy indicates the type of processes that may result in data being collected about you. The purpose of this Privacy Policy to enable you to understand which personal identifying information ("PI", "Personal Information") of yours is collected, how and when we might use your information, who has access to this information, and how you can correct any inaccuracies in the information. To better protect your privacy, we provide this notice explaining our online information practices and the choices you can make about the way your information is collected and used. To make this notice easy to find, we make it available on our website.'}),(0,a.jsx)("h3",{className:"text-white",children:"Information Collected"}),(0,a.jsx)("p",{children:"We may collect any or all of the information that via both automated means such as communications profiles and cookies. Personal Information you give us depends on the type of service, support, or sale inquiry, and may include your name, address, telephone number, fax number and email address, dates of service provided, types of service provided, payment history, manner of payment, amount of payments, date of payments, domain name or other payment information. All sensitive information is collected on a secure server and data is transferred . When transferring personal information a security icon will appear in your browser."}),(0,a.jsx)("h3",{className:"text-white",children:"Infortmation Use"}),(0,a.jsx)("p",{children:"This information is used for billing and to provide service and support to our customers. We may also study this information to determine our customers needs and provide support for our customers. All reasonable precautions are taken to prevent unauthorised access to this information. This safeguard may require you to provide additional forms of identity should you wish to obtain information about your account details. RunePay may email its monthly newsletter to the primary contact e-mail on file, but customers are able to opt out of this newsletter at any time."}),(0,a.jsx)("p",{children:"We use IP addresses to analyze trends, administer our site and servers, track access, and gather broad demographic information for aggregate use. IP addresses are not linked to personally identifiable information. It is possible that personal information about a customer may be included in the log files due to the normal functions of IP addresses and SaaS applications."}),(0,a.jsx)("h1",{className:"text-muted mb-0",children:"Cookies"}),(0,a.jsxs)("p",{children:['Your Internet browser has the in-built facility for storing small text files - "cookies" - that hold information which allows a website to recognize your account. We use cookies to save your preferences and login information, and provide personalized functionality. You can reject cookies by changing your browser settings, but be aware that this will disable some of the functionality on the Safemoon website. More information about cookies can be found at',(0,a.jsx)("a",{href:"https://en.wikipedia.org/wiki/HTTP_cookie",className:"text-info",children:"https://en.wikipedia.org/wiki/HTTP_cookie"}),"."]})]})})}),(0,a.jsx)(f.default,{})]})}}]),n}(l.Component)},40368:function(e){e.exports={particles:{number:{value:200,density:{enable:!0,value_area:789.1476416322727}},color:{value:"#AAAAAA"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5,move:{radius:0}},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:1,random:!0,anim:{enable:!0,speed:.2,opacity_min:0,sync:!1}},size:{value:2,random:!0,anim:{enable:!0,speed:2,size_min:0,sync:!1}},line_linked:{enable:!1,distance:30,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:.2,direction:"bottom",random:!1,straight:!0,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"window",events:{onhover:{enable:!0,mode:"bubble"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:100,line_linked:{opacity:1}},bubble:{distance:120,size:3,duration:1,opacity:1,color:"#FFFFFF",speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0}},89520:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/privacy",function(){return n(7033)}])},9008:function(e,t,n){e.exports=n(57947)}},function(e){e.O(0,[571,618,774,888,179],(function(){return t=89520,e(e.s=t);var t}));var t=e.O();_N_E=t}]);