(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{111:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,d=p["".concat(c,".").concat(h)]||p[h]||b[h]||o;return n?r.a.createElement(d,i(i({ref:t},l),{},{components:n})):r.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},66:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),o=(n(0),n(111)),c={},i={unversionedId:"getting-started/how-to-guides/how-do-i-set-up-metamask-on-avalanche",id:"getting-started/how-to-guides/how-do-i-set-up-metamask-on-avalanche",isDocsHomePage:!1,title:"How do I set up MetaMask on Avalanche?",description:"Connect Metamask",source:"@site/docs/getting-started/how-to-guides/how-do-i-set-up-metamask-on-avalanche.md",sourceDirName:"getting-started/how-to-guides",slug:"/getting-started/how-to-guides/how-do-i-set-up-metamask-on-avalanche",permalink:"/gondola-doc/docs/getting-started/how-to-guides/how-do-i-set-up-metamask-on-avalanche",editUrl:"https://github.com/gondola-finance/doc/docs/getting-started/how-to-guides/how-do-i-set-up-metamask-on-avalanche.md",version:"current",frontMatter:{},sidebar:"getting_started",previous:{title:"faq",permalink:"/gondola-doc/docs/getting-started/faq"}},s=[{value:"Connect Metamask",id:"connect-metamask",children:[{value:"Avalanche Mainnet Settings:",id:"avalanche-mainnet-settings",children:[]},{value:"<strong>Using the Avalanche Wallet</strong>",id:"using-the-avalanche-wallet",children:[]}]}],l={toc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"connect-metamask"},"Connect Metamask"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://metamask.io/"},"Metamask")," is a popular web browser extension that makes it easy to interact with Ethereum and compatible blockchains, such as Avalanche's C-Chain. Setting up Metamask and creating an account on it is beyond the scope of this tutorial, but there are a number of resources on the internet to walk you through that."),Object(o.b)("p",null,"After you log in to your Metamask account, connect it to the Avalanche network. Click the Network drop-down -",">"," Select ",Object(o.b)("strong",{parentName:"p"},"Custom RPC"),":"),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ava-labs/avalanche-docs/7cf781c2fea9b0e84b90cfced30680daf3e18565/.gitbook/assets/image%20%2860%29.png",alt:"metamask network dropdown"})),Object(o.b)("p",null,"Enter the information for the network of your choice:"),Object(o.b)("h3",{id:"avalanche-mainnet-settings"},"Avalanche Mainnet Settings:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Network Name"),": Avalanche Mainnet C-Chain"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"New RPC URL"),": ",Object(o.b)("a",{parentName:"li",href:"https://api.avax.network/ext/bc/C/rpc"},"https://api.avax.network/ext/bc/C/rpc")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"ChainID"),": ",Object(o.b)("inlineCode",{parentName:"li"},"0xa86a")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Symbol"),": ",Object(o.b)("inlineCode",{parentName:"li"},"AVAX")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Explorer"),": ",Object(o.b)("a",{parentName:"li",href:"https://cchain.explorer.avax.network/"},"https://cchain.explorer.avax.network/"))),Object(o.b)("p",null,"After saving the changes, select the Avalanche network you just specified. You should see your AVAX balance, which will probably be 0."),Object(o.b)("h3",{id:"using-the-avalanche-wallet"},Object(o.b)("strong",{parentName:"h3"},"Using the Avalanche Wallet")),Object(o.b)("p",null,"If you already have some AVAX, you can transfer them to the Metamask account using your ",Object(o.b)("a",{parentName:"p",href:"https://wallet.avax.network/"},"Avalanche Wallet"),". You can see where your funds are by selecting ",Object(o.b)("strong",{parentName:"p"},"show breakdown")," in the wallet panel showing your balance. If you don't have the funds on the C-Chain already, you need do a Cross Chain Transfer, to move your AVAX from X-Chain to C-Chain."),Object(o.b)("p",null,"After you have funds on the C-Chain, select ",Object(o.b)("strong",{parentName:"p"},"Send")," on the left side menu in the Wallet, and then switch the source chain to ",Object(o.b)("strong",{parentName:"p"},"C Contract"),". In the ",Object(o.b)("strong",{parentName:"p"},"To Address")," field paste your Metamask address. Enter the amount to send and click ",Object(o.b)("strong",{parentName:"p"},"Confirm")," and then ",Object(o.b)("strong",{parentName:"p"},"Send"),"."),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ava-labs/avalanche-docs/7cf781c2fea9b0e84b90cfced30680daf3e18565/.gitbook/assets/wavax2avax-01-send-to-metamask.png",alt:"Send to Metamask"})),Object(o.b)("p",null,"Funds should soon be visible in your Metamask account."))}u.isMDXComponent=!0}}]);