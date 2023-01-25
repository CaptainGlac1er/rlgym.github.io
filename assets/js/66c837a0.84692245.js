"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6572],{3905:(e,r,a)=>{a.d(r,{Zo:()=>d,kt:()=>y});var t=a(7294);function l(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function n(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?n(Object(a),!0).forEach((function(r){l(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function c(e,r){if(null==e)return{};var a,t,l=function(e,r){if(null==e)return{};var a,t,l={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],r.indexOf(a)>=0||(l[a]=e[a]);return l}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=t.createContext({}),s=function(e){var r=t.useContext(i),a=r;return e&&(a="function"==typeof e?e(r):o(o({},r),e)),a},d=function(e){var r=s(e.components);return t.createElement(i.Provider,{value:r},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var a=e.components,l=e.mdxType,n=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(a),m=l,y=u["".concat(i,".").concat(m)]||u[m]||p[m]||n;return a?t.createElement(y,o(o({ref:r},d),{},{components:a})):t.createElement(y,o({ref:r},d))}));function y(e,r){var a=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var n=a.length,o=new Array(n);o[0]=m;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c[u]="string"==typeof e?e:l,o[1]=c;for(var s=2;s<n;s++)o[s]=a[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3726:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>c,toc:()=>s});var t=a(7462),l=(a(7294),a(3905));const n={},o="Player Ball Rewards",c={unversionedId:"documentation/reward_functions/common_rewards/player_ball_rewards",id:"documentation/reward_functions/common_rewards/player_ball_rewards",title:"Player Ball Rewards",description:"Reward functions that measure relationships between the agent and the ball.",source:"@site/docs/documentation/reward_functions/common_rewards/player_ball_rewards.md",sourceDirName:"documentation/reward_functions/common_rewards",slug:"/documentation/reward_functions/common_rewards/player_ball_rewards",permalink:"/rlgym.github.io/docs/documentation/reward_functions/common_rewards/player_ball_rewards",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Misc Rewards",permalink:"/rlgym.github.io/docs/documentation/reward_functions/common_rewards/misc_rewards"},next:{title:"Reward Functions",permalink:"/rlgym.github.io/docs/documentation/reward_functions/"}},i={},s=[{value:"Liu Distance Player To Ball Reward",id:"liu-distance-player-to-ball-reward",level:2},{value:"Velocity Player To Ball Reward",id:"velocity-player-to-ball-reward",level:2},{value:"Face Ball Reward",id:"face-ball-reward",level:2},{value:"Touch Ball Reward",id:"touch-ball-reward",level:2}],d={toc:s};function u(e){let{components:r,...a}=e;return(0,l.kt)("wrapper",(0,t.Z)({},d,a,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"player-ball-rewards"},"Player Ball Rewards"),(0,l.kt)("p",null,"Reward functions that measure relationships between the agent and the ball."),(0,l.kt)("h2",{id:"liu-distance-player-to-ball-reward"},(0,l.kt)("a",{parentName:"h2",href:"https://github.com/lucas-emery/rocket-league-gym/blob/7f07bfa980b84eea11627939dd7d7b1689efcfa7/rlgym/utils/reward_functions/common_rewards/player_ball_rewards.py#L8"},"Liu Distance Player To Ball Reward")),(0,l.kt)("p",null,"Returns exponentially higher reward the closer the agent is to the ball. This is equivalent to ",(0,l.kt)("inlineCode",{parentName:"p"},"LiuDistanceBallToGoalReward"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"LiuDistancePlayerToBallReward\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from rlgym.utils.reward_functions.player_ball_rewards import LiuDistancePlayerToBallReward\n\nliu_distance_player_ball_reward = LiuDistancePlayerToBallReward()\n")),(0,l.kt)("h2",{id:"velocity-player-to-ball-reward"},(0,l.kt)("a",{parentName:"h2",href:"https://github.com/lucas-emery/rocket-league-gym/blob/7f07bfa980b84eea11627939dd7d7b1689efcfa7/rlgym/utils/reward_functions/common_rewards/player_ball_rewards.py#L18"},"Velocity Player To Ball Reward")),(0,l.kt)("p",null,"Returns the scalar projection of the agent's velocity vector on to the ball's position vector."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"VelocityPlayerToBallReward(use_scalar_projection=False)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from rlgym.utils.reward_functions.player_ball_rewards import VelocityPlayerToBallReward\n\nvelocity_player_ball_reward = VelocityPlayerToBallReward()\n")),(0,l.kt)("h2",{id:"face-ball-reward"},(0,l.kt)("a",{parentName:"h2",href:"https://github.com/lucas-emery/rocket-league-gym/blob/7f07bfa980b84eea11627939dd7d7b1689efcfa7/rlgym/utils/reward_functions/common_rewards/player_ball_rewards.py#L42"},"Face Ball Reward")),(0,l.kt)("p",null,"Returns positive reward scaled by the angle between the nose of the agent's car and the ball."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"FaceBallReward()\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from rlgym.utils.reward_functions.player_ball_rewards import FaceBallReward\n\nface_ball_reward = FaceBallReward()\n")),(0,l.kt)("h2",{id:"touch-ball-reward"},(0,l.kt)("a",{parentName:"h2",href:"https://github.com/lucas-emery/rocket-league-gym/blob/7f07bfa980b84eea11627939dd7d7b1689efcfa7/rlgym/utils/reward_functions/common_rewards/player_ball_rewards.py#L52"},"Touch Ball Reward")),(0,l.kt)("p",null,"Returns positive reward every time the agent touches the ball with an optional scaling factor for how high the ball was in the air when touched."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"TouchBallReward(aerial_weight=0.)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from rlgym.utils.reward_functions.common_rewards.player_ball_rewards import TouchBallReward\n\ntouch_ball_reward = TouchBallReward()\n")))}u.isMDXComponent=!0}}]);