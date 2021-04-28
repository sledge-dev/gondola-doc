(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{111:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=r.a.createContext({}),p=function(t){var e=r.a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},d=function(t){var e=p(t.components);return r.a.createElement(i.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},m=r.a.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,b=t.parentName,i=l(t,["components","mdxType","originalType","parentName"]),d=p(n),m=a,u=d["".concat(b,".").concat(m)]||d[m]||s[m]||o;return n?r.a.createElement(u,c(c({ref:e},i),{},{components:n})):r.a.createElement(u,c({ref:e},i))}));function u(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,b=new Array(o);b[0]=m;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:a,b[1]=c;for(var i=2;i<o;i++)b[i]=n[i];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return b})),n.d(e,"metadata",(function(){return c})),n.d(e,"toc",(function(){return l})),n.d(e,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(111)),b={},c={unversionedId:"developers/contracts/VirtualSwap/SynthSwapper",id:"developers/contracts/VirtualSwap/SynthSwapper",isDocsHomePage:!1,title:"SynthSwapper",description:"Replacement of Virtual Synths in favor of gas savings. Allows swapping synths via the Synthetix protocol",source:"@site/docs/developers/contracts/VirtualSwap/SynthSwapper.md",sourceDirName:"developers/contracts/VirtualSwap",slug:"/developers/contracts/VirtualSwap/SynthSwapper",permalink:"/gondola-doc/docs/developers/contracts/VirtualSwap/SynthSwapper",editUrl:"https://github.com/gondola-finance/doc/docs/developers/contracts/VirtualSwap/SynthSwapper.md",version:"current",frontMatter:{},sidebar:"developers",previous:{title:"Proxy",permalink:"/gondola-doc/docs/developers/contracts/VirtualSwap/Proxy"},next:{title:"Target",permalink:"/gondola-doc/docs/developers/contracts/VirtualSwap/Target"}},l=[{value:"Functions",id:"functions",children:[{value:"constructor",id:"constructor",children:[]},{value:"swapSynth",id:"swapsynth",children:[]},{value:"swapSynthToToken",id:"swapsynthtotoken",children:[]},{value:"withdraw",id:"withdraw",children:[]},{value:"destroy",id:"destroy",children:[]},{value:"_destroy",id:"_destroy",children:[]}]}],i={toc:l};function p(t){var e=t.components,n=Object(r.a)(t,["components"]);return Object(o.b)("wrapper",Object(a.a)({},i,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Replacement of Virtual Synths in favor of gas savings. Allows swapping synths via the Synthetix protocol\nor Gondola's pools. The ",Object(o.b)("inlineCode",{parentName:"p"},"Bridge.sol")," contract will deploy minimal clones of this contract upon initiating\nany cross-asset swaps."),Object(o.b)("h2",{id:"functions"},"Functions"),Object(o.b)("h3",{id:"constructor"},"constructor"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-solidity"},"  function constructor(\n  ) public\n")),Object(o.b)("p",null,"Deploys this contract and sets the ",Object(o.b)("inlineCode",{parentName:"p"},"owner"),". Note that when creating clones of this contract,\nthe owner will be constant and cannot be changed."),Object(o.b)("h3",{id:"swapsynth"},"swapSynth"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-solidity"},"  function swapSynth(\n    bytes32 sourceKey,\n    uint256 synthAmount,\n    bytes32 destKey\n  ) external returns (uint256)\n")),Object(o.b)("p",null,"Swaps the synth to another synth via the Synthetix protocol."),Object(o.b)("h4",{id:"parameters"},"Parameters:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Name"),Object(o.b)("th",{parentName:"tr",align:"left"},"Type"),Object(o.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"sourceKey")),Object(o.b)("td",{parentName:"tr",align:"left"},"bytes32"),Object(o.b)("td",{parentName:"tr",align:"left"},"currency key of the source synth")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"synthAmount")),Object(o.b)("td",{parentName:"tr",align:"left"},"uint256"),Object(o.b)("td",{parentName:"tr",align:"left"},"amount of the synth to swap")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"destKey")),Object(o.b)("td",{parentName:"tr",align:"left"},"bytes32"),Object(o.b)("td",{parentName:"tr",align:"left"},"currency key of the destination synth")))),Object(o.b)("h4",{id:"return-values"},"Return Values:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Name"),Object(o.b)("th",{parentName:"tr",align:"left"},"Type"),Object(o.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"amount")),Object(o.b)("td",{parentName:"tr",align:"left"},"bytes32"),Object(o.b)("td",{parentName:"tr",align:"left"},"of the destination synth received")))),Object(o.b)("h3",{id:"swapsynthtotoken"},"swapSynthToToken"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-solidity"},"  function swapSynthToToken(\n    contract ISwap swap,\n    contract IERC20 tokenFrom,\n    uint8 tokenFromIndex,\n    uint8 tokenToIndex,\n    uint256 tokenFromAmount,\n    uint256 minAmount,\n    uint256 deadline,\n    address recipient\n  ) external returns (contract IERC20, uint256)\n")),Object(o.b)("p",null,"Approves the given ",Object(o.b)("inlineCode",{parentName:"p"},"tokenFrom")," and swaps it to another token via the given ",Object(o.b)("inlineCode",{parentName:"p"},"swap")," pool."),Object(o.b)("h4",{id:"parameters-1"},"Parameters:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Name"),Object(o.b)("th",{parentName:"tr",align:"left"},"Type"),Object(o.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"swap")),Object(o.b)("td",{parentName:"tr",align:"left"},"contract ISwap"),Object(o.b)("td",{parentName:"tr",align:"left"},"the address of a pool to swap through")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"tokenFrom")),Object(o.b)("td",{parentName:"tr",align:"left"},"contract IERC20"),Object(o.b)("td",{parentName:"tr",align:"left"},"the address of the stored synth")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"tokenFromIndex")),Object(o.b)("td",{parentName:"tr",align:"left"},"uint8"),Object(o.b)("td",{parentName:"tr",align:"left"},"the index of the token to swap from")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"tokenToIndex")),Object(o.b)("td",{parentName:"tr",align:"left"},"uint8"),Object(o.b)("td",{parentName:"tr",align:"left"},"the token the user wants to swap to")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"tokenFromAmount")),Object(o.b)("td",{parentName:"tr",align:"left"},"uint256"),Object(o.b)("td",{parentName:"tr",align:"left"},"the amount of the token to swap")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"minAmount")),Object(o.b)("td",{parentName:"tr",align:"left"},"uint256"),Object(o.b)("td",{parentName:"tr",align:"left"},"the min amount the user would like to receive, or revert.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"deadline")),Object(o.b)("td",{parentName:"tr",align:"left"},"uint256"),Object(o.b)("td",{parentName:"tr",align:"left"},"latest timestamp to accept this transaction")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"recipient")),Object(o.b)("td",{parentName:"tr",align:"left"},"address"),Object(o.b)("td",{parentName:"tr",align:"left"},"the address of the recipient")))),Object(o.b)("h3",{id:"withdraw"},"withdraw"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-solidity"},"  function withdraw(\n    contract IERC20 token,\n    address recipient,\n    uint256 withdrawAmount,\n    bool shouldDestroy\n  ) external\n")),Object(o.b)("p",null,"Withdraws the given amount of ",Object(o.b)("inlineCode",{parentName:"p"},"token")," to the ",Object(o.b)("inlineCode",{parentName:"p"},"recipient"),"."),Object(o.b)("h4",{id:"parameters-2"},"Parameters:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Name"),Object(o.b)("th",{parentName:"tr",align:"left"},"Type"),Object(o.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"token")),Object(o.b)("td",{parentName:"tr",align:"left"},"contract IERC20"),Object(o.b)("td",{parentName:"tr",align:"left"},"the address of the token to withdraw")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"recipient")),Object(o.b)("td",{parentName:"tr",align:"left"},"address"),Object(o.b)("td",{parentName:"tr",align:"left"},"the address of the account to receive the token")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"withdrawAmount")),Object(o.b)("td",{parentName:"tr",align:"left"},"uint256"),Object(o.b)("td",{parentName:"tr",align:"left"},"the amount of the token to withdraw")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"shouldDestroy")),Object(o.b)("td",{parentName:"tr",align:"left"},"bool"),Object(o.b)("td",{parentName:"tr",align:"left"},"whether this contract should be destroyed after this call")))),Object(o.b)("h3",{id:"destroy"},"destroy"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-solidity"},"  function destroy(\n  ) external\n")),Object(o.b)("p",null,"Destroys this contract. Only owner can call this function."),Object(o.b)("h3",{id:"_destroy"},"_destroy"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-solidity"},"  function _destroy(\n  ) internal\n")))}p.isMDXComponent=!0}}]);