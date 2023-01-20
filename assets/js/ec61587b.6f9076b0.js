"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[997],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5365:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const i={},a=void 0,s={unversionedId:"tutorials/introduction_to_configuration_objects",id:"tutorials/introduction_to_configuration_objects",title:"introduction_to_configuration_objects",description:"Configuration Objects",source:"@site/docs/tutorials/introduction_to_configuration_objects.md",sourceDirName:"tutorials",slug:"/tutorials/introduction_to_configuration_objects",permalink:"/docs/tutorials/introduction_to_configuration_objects",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorials/introduction_to_configuration_objects.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"action_parsers",permalink:"/docs/tutorials/action_parsers"},next:{title:"observation_builders",permalink:"/docs/tutorials/observation_builders"}},c={},l=[{value:"Configuration Objects",id:"configuration-objects",level:2}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"configuration-objects"},"Configuration Objects"),(0,o.kt)("p",null,"At their core, RLGym environments are configured with 3 basic objects:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A ",(0,o.kt)("a",{parentName:"li",href:"https://rlgym.github.io/docs-page.html#reward-functions"},"RewardFunction")),(0,o.kt)("li",{parentName:"ol"},"An ",(0,o.kt)("a",{parentName:"li",href:"https://rlgym.github.io/docs-page.html#observation-builders"},"ObsBuilder")),(0,o.kt)("li",{parentName:"ol"},"A list of ",(0,o.kt)("a",{parentName:"li",href:"https://rlgym.github.io/docs-page.html#terminal-conditions"},"TerminalCondition")," objects")),(0,o.kt)("p",null,"RLGym uses these objects at every step to determine what reward should be assigned to each action, what observation should be returned to the agent, and when an episode should be terminated.\nThe flowchart below depicts how each of these objects is used by RLGym."),(0,o.kt)("img",{src:"../../assets/images/rlgym_environment_flowchart.png",alt:"RLGym System Diagram",width:"500"}),(0,o.kt)("p",null,"RLGym comes with a few of these objects implemented out of the box to provide users with inspiration when creating their own. The default configuration objects for any RLGym environment can be overridden by simply passing instances of a desired configuration object to the optional arguments of ",(0,o.kt)("inlineCode",{parentName:"p"},"make"),"."))}p.isMDXComponent=!0}}]);