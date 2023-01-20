"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[627],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3504:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={},i=void 0,l={unversionedId:"tutorials/reward_functions",id:"tutorials/reward_functions",title:"reward_functions",description:"Reward Functions",source:"@site/docs/tutorials/reward_functions.md",sourceDirName:"tutorials",slug:"/tutorials/reward_functions",permalink:"/rlgym.github.io/docs/tutorials/reward_functions",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorials/reward_functions.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"observation_builders",permalink:"/rlgym.github.io/docs/tutorials/observation_builders"},next:{title:"self_play",permalink:"/rlgym.github.io/docs/tutorials/self_play"}},s={},c=[{value:"Reward Functions",id:"reward-functions",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"reward-functions"},"Reward Functions"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"RewardFunction")," is an object used by RLGym to compute the reward for each action every step. "),(0,a.kt)("p",null,"All reward functions must implement the following three methods:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"#Called every reset.\nreset(self, initial_state: GameState)\n\n#Called every step.\nget_reward(self, player: PlayerData, state: GameState, previous_action: np.ndarray) -> float\n\n#Called if the current state is terminal.\nget_final_reward(self, player: PlayerData, state: GameState, previous_action: np.ndarray) -> float\n")),(0,a.kt)("p",null,"These methods are called by an RLGym environment during an episode."),(0,a.kt)("p",null,"To make a custom reward function, just inherit from the base class and implement the above methods.\nAs an example, let's create a simple reward function that will reward the agent for gaining speed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from rlgym.utils.reward_functions import RewardFunction\nfrom rlgym.utils import math\nfrom rlgym.utils.gamestates import GameState, PlayerData\nimport numpy as np\n\n\nclass SpeedReward(RewardFunction):\n  def reset(self, initial_state: GameState):\n    pass\n\n  def get_reward(self, player: PlayerData, state: GameState, previous_action: np.ndarray) -> float:\n    linear_velocity = player.car_data.linear_velocity\n    reward = math.vecmag(linear_velocity)\n    \n    return reward\n    \n  def get_final_reward(self, player: PlayerData, state: GameState, previous_action: np.ndarray) -> float:\n    return 0\n")),(0,a.kt)("p",null,"Now we can simply pass an instance of our reward function to RLGym when we make an environment."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import rlgym\n\n\nenv = rlgym.make(reward_fn=SpeedReward())\n#Training loop goes here\n")),(0,a.kt)("p",null,"And we're off to the races!"))}p.isMDXComponent=!0}}]);