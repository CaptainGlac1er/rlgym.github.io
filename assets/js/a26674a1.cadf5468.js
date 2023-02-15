"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3897],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),f=o,y=u["".concat(s,".").concat(f)]||u[f]||m[f]||i;return r?n.createElement(y,a(a({ref:t},p),{},{components:r})):n.createElement(y,a({ref:t},p))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9974:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={title:"Introduction",sidebar_position:1},a="RLGym Tools",l={unversionedId:"introduction",id:"introduction",title:"Introduction",description:"While RLGym is usable for a variety of tasks immediately, many users may find it cumbersome to use with an existing Reinforcement Learning API like stable_baselines3 (SB3),  or that it is lacking some function or tool that is useful for a specific application.",source:"@site/tools/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/rlgym.github.io/tools/introduction",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Extra Action Parsers",permalink:"/rlgym.github.io/tools/extra_action_parsers"}},s={},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rlgym-tools"},"RLGym Tools"),(0,o.kt)("p",null,"While RLGym is usable for a variety of tasks immediately, many users may find it cumbersome to use with an existing Reinforcement Learning API like ",(0,o.kt)("inlineCode",{parentName:"p"},"stable_baselines3")," (SB3),  or that it is lacking some function or tool that is useful for a specific application.\nInstead of bloating the API with various niche features, we have provided a secondary library called ",(0,o.kt)("inlineCode",{parentName:"p"},"rlgym-tools")," which provides support for a number of applications, and a variety of unique reward functions and observation builders."),(0,o.kt)("p",null,"To install ",(0,o.kt)("inlineCode",{parentName:"p"},"rlgym-tools"),", simply use pip:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"pip install rlgym-tools\n")),(0,o.kt)("p",null,"and import the library as ",(0,o.kt)("inlineCode",{parentName:"p"},"import rlgym_tools"),"."))}u.isMDXComponent=!0}}]);