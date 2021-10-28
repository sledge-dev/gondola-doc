(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=o.a.createContext({}),l=function(e){var t=o.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},g=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(n),g=r,f=u["".concat(a,".").concat(g)]||u[g]||p[g]||i;return n?o.a.createElement(f,s(s({ref:t},d),{},{components:n})):o.a.createElement(f,s({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var d=2;d<i;d++)a[d]=n[d];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),i=(n(0),n(113)),a={},s={unversionedId:"getting-started/risk",id:"getting-started/risk",isDocsHomePage:!1,title:"Risk",description:"Providing liquidity to Gondola is highly risky. Before using the protocol, we highly recommend reading the code and understanding the risks involved with being a Liquidity Provider (LP) and/or using the AMM to trade pegged value crypto assets.",source:"@site/docs/getting-started/risk.md",sourceDirName:"getting-started",slug:"/getting-started/risk",permalink:"/doc/docs/getting-started/risk",editUrl:"https://github.com/gondola-finance/doc/docs/getting-started/risk.md",version:"current",frontMatter:{},sidebar:"getting_started",previous:{title:"Introduction",permalink:"/doc/docs/getting-started/introduction"},next:{title:"How do I set up MetaMask on Avalanche?",permalink:"/doc/docs/getting-started/how-to-guides/how-do-i-set-up-metamask-on-avalanche"}},c=[],d={toc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Providing liquidity to Gondola is highly risky. Before using the protocol, we highly recommend reading the code and understanding the risks involved with being a Liquidity Provider (LP) and/or using the AMM to trade pegged value crypto assets.\nAudits"),Object(i.b)("p",null,"The Gondola smart contracts are forked from Saddle and Sushiswap, which were audited by OpenZeppelin, Quantstamp, and Certik."),Object(i.b)("p",null,"Our developers have made our best effort to ensure any modifications by us are secure, but users should note that this does not guarantee the system to be 100% safe. Do not supply assets that you cannot afford to lose to Gondola as a liquidity provider."),Object(i.b)("p",null,"Using Gondola as an exchange user should be significantly less risky, but keep in mind there are still risks.\nPermanent loss of a peg"),Object(i.b)("p",null,"If one of the assets in a pool significantly depegs, it will effectively mean that pool liquidity providers will be left holding only that asset."))}l.isMDXComponent=!0}}]);