"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[98],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=u(n),c=r,d=p["".concat(s,".").concat(c)]||p[c]||h[c]||o;return n?a.createElement(d,i(i({ref:t},m),{},{components:n})):a.createElement(d,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3969:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={title:"FAQs"},i=void 0,l={unversionedId:"faq/faq",id:"faq/faq",title:"FAQs",description:"How do I train a bot with RLGym?",source:"@site/docs/faq/faq.md",sourceDirName:"faq",slug:"/faq/",permalink:"/rlgym.github.io/docs/faq/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/faq/faq.md",tags:[],version:"current",frontMatter:{title:"FAQs"},sidebar:"tutorialSidebar",previous:{title:"sb3_single_env_wrapper",permalink:"/rlgym.github.io/docs/tools/sb3_single_env_wrapper"},next:{title:"Troubleshooting",permalink:"/rlgym.github.io/docs/troubleshooting/"}},s={},u=[{value:"How do I train a bot with RLGym?",id:"how-do-i-train-a-bot-with-rlgym",level:4},{value:"How long will it take for my bot to become superhuman?",id:"how-long-will-it-take-for-my-bot-to-become-superhuman",level:4},{value:"How can I run my bot in RLBot?",id:"how-can-i-run-my-bot-in-rlbot",level:4},{value:"Can I train my bot against RLBot agents?",id:"can-i-train-my-bot-against-rlbot-agents",level:4},{value:"Can I train my bot against Psyonix agents?",id:"can-i-train-my-bot-against-psyonix-agents",level:4},{value:"Have you tried this or that learning algorithm?",id:"have-you-tried-this-or-that-learning-algorithm",level:4},{value:"Can rendering be disabled?",id:"can-rendering-be-disabled",level:4},{value:"What should my reward function be?",id:"what-should-my-reward-function-be",level:4},{value:"Can I train the same agent to play 1v1, 2v2, and 3v3?",id:"can-i-train-the-same-agent-to-play-1v1-2v2-and-3v3",level:4}],m={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"how-do-i-train-a-bot-with-rlgym"},"How do I train a bot with RLGym?"),(0,r.kt)("p",null,"RLGym is an interface to Rocket League that follows the ",(0,r.kt)("a",{parentName:"p",href:"https://gym.openai.com/"},"OpenAI Gym API"),". It is up to you to use a learning algorithm to train an agent in RLGym."),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"how-long-will-it-take-for-my-bot-to-become-superhuman"},"How long will it take for my bot to become superhuman?"),(0,r.kt)("p",null,"That depends on how much time and money you have. ",(0,r.kt)("a",{parentName:"p",href:"https://openai.com/blog/openai-five/"},"OpenAI Five")," trained for 54,000 ",(0,r.kt)("em",{parentName:"p"},"years")," worth of time, so you should expect Rocket League\nto take an enormous amount of compute and time."),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"how-can-i-run-my-bot-in-rlbot"},"How can I run my bot in RLBot?"),(0,r.kt)("p",null,"You just have to put your trained model inside our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/RLGym/RLGymExampleBot"},"RLBot example bot")," and run it!"),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"can-i-train-my-bot-against-rlbot-agents"},"Can I train my bot against RLBot agents?"),(0,r.kt)("p",null,"Not at the moment, but it should be possible to write a wrapper that transforms RLGym data into an RLBot game packet."),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"can-i-train-my-bot-against-psyonix-agents"},"Can I train my bot against Psyonix agents?"),(0,r.kt)("p",null,"Not at this time."),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"have-you-tried-this-or-that-learning-algorithm"},"Have you tried this or that learning algorithm?"),(0,r.kt)("p",null,"Many people have used a variety of learning algorithms for a wide range of problems in Rocket League with varying levels of success. If you want to know how one particular method\nwould perform on one particular problem, try it out!"),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"can-rendering-be-disabled"},"Can rendering be disabled?"),(0,r.kt)("p",null,"No. The physics engine and rendering engine in Rocket League are inextricably linked. However, if you run the game in windowed mode and simply minimize the window, rendering will be\ndisabled by Psyonix."),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"what-should-my-reward-function-be"},"What should my reward function be?"),(0,r.kt)("p",null,"It's impossible to say what the best reward is for a given problem. In theory, the most sparse reward possible can yield an optimal agent with many learning algorithms. However,\nit may take an impractical amount of time to train an agent with a very sparse reward. In general, you should try to craft a reward function that provides as little information as possible,\nwhile still providing information frequently enough that an agent can easily pick up on it."),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"can-i-train-the-same-agent-to-play-1v1-2v2-and-3v3"},"Can I train the same agent to play 1v1, 2v2, and 3v3?"),(0,r.kt)("p",null,"You can, but you will need to find a way to handle the change in the number of players present in the game. One user has already had success doing this with an ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Attention_(machine_learning)"},"Attention Mechanism")," which\nyou can find ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Rolv-Arild/EARL-pytorch"},"here"),"."))}p.isMDXComponent=!0}}]);