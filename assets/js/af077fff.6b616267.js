"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[48],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>p});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),s=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):d(d({},r),e)),t},c=function(e){var r=s(e.components);return a.createElement(l.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},f=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(t),f=n,p=u["".concat(l,".").concat(f)]||u[f]||m[f]||o;return t?a.createElement(p,d(d({ref:r},c),{},{components:t})):a.createElement(p,d({ref:r},c))}));function p(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,d=new Array(o);d[0]=f;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[u]="string"==typeof e?e:n,d[1]=i;for(var s=2;s<o;s++)d[s]=t[s];return a.createElement.apply(null,d)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8545:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=t(7462),n=(t(7294),t(3905));const o={},d="Conditional rewards",i={unversionedId:"documentation/reward_functions/common_rewards/conditional_rewards",id:"documentation/reward_functions/common_rewards/conditional_rewards",title:"Conditional rewards",description:"Conditional rewards are rewards issued when a condition is met.",source:"@site/docs/documentation/reward_functions/common_rewards/conditional_rewards.md",sourceDirName:"documentation/reward_functions/common_rewards",slug:"/documentation/reward_functions/common_rewards/conditional_rewards",permalink:"/docs/documentation/reward_functions/common_rewards/conditional_rewards",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/documentation/reward_functions/common_rewards/conditional_rewards.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Common Reward Functions",permalink:"/docs/documentation/reward_functions/common_rewards/common_reward_functions"},next:{title:"Misc Rewards",permalink:"/docs/documentation/reward_functions/common_rewards/misc_rewards"}},l={},s=[{value:"Custom Conditional Reward Classes",id:"custom-conditional-reward-classes",level:2},{value:"Reward If Closest To Ball",id:"reward-if-closest-to-ball",level:2},{value:"Reward If Touched Last",id:"reward-if-touched-last",level:2},{value:"Reward If Behind Ball",id:"reward-if-behind-ball",level:2}],c={toc:s};function u(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"conditional-rewards"},"Conditional rewards"),(0,n.kt)("p",null,"Conditional rewards are rewards issued when a condition is met."),(0,n.kt)("h2",{id:"custom-conditional-reward-classes"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/lucas-emery/rocket-league-gym/blob/7f07bfa980b84eea11627939dd7d7b1689efcfa7/rlgym/utils/reward_functions/common_rewards/conditional_rewards.py#L10"},"Custom Conditional Reward Classes")),(0,n.kt)("p",null,"Conditional rewards require that you provide a reward function, and a condition. If the condition is met, the reward function will be called and reward dealt to the model. Otherwise no reward will be provided."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"class ConditionalRewardFunction(RewardFunction):\n    def __init__(self, reward_func: RewardFunction):\n        super().__init__()\n        self.reward_func = reward_func\n\n    def condition(self, player: PlayerData, state: GameState, previous_action: np.ndarray) -> bool:\n\n    def reset(self, initial_state: GameState):\n\n    def get_reward(self, player: PlayerData, state: GameState, previous_action: np.ndarray) -> float:\n\n    def get_final_reward(self, player: PlayerData, state: GameState, previous_action: np.ndarray) -> float:\n\n")),(0,n.kt)("h2",{id:"reward-if-closest-to-ball"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/lucas-emery/rocket-league-gym/blob/7f07bfa980b84eea11627939dd7d7b1689efcfa7/rlgym/utils/reward_functions/common_rewards/conditional_rewards.py#L33"},"Reward If Closest To Ball")),(0,n.kt)("p",null,"Return ",(0,n.kt)("inlineCode",{parentName:"p"},"True")," if the current player is the closest player to the ball"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"RewardIfClosestToBall(reward_func: RewardFunction, team_only=True)\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from rlgym.utils.reward_functions.conditional_rewards import RewardIfClosestToBall\n\nreward_if_closest = RewardIfClosestToBall(reward_func)\n")),(0,n.kt)("h2",{id:"reward-if-touched-last"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/lucas-emery/rocket-league-gym/blob/7f07bfa980b84eea11627939dd7d7b1689efcfa7/rlgym/utils/reward_functions/common_rewards/conditional_rewards.py#L48"},"Reward If Touched Last")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"RewardIfTouchedLast()\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from rlgym.utils.reward_functions.conditional_rewards import RewardIfTouchedLast\n\nreward_if_touched_last = RewardIfTouchedLast()\n")),(0,n.kt)("h2",{id:"reward-if-behind-ball"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/lucas-emery/rocket-league-gym/blob/7f07bfa980b84eea11627939dd7d7b1689efcfa7/rlgym/utils/reward_functions/common_rewards/conditional_rewards.py#L53"},"Reward If Behind Ball")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"RewardIfBehindBall()\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from rlgym.utils.reward_functions.conditional_rewards import RewardIfBehindBall\n\nreward_if_behind_ball = RewardIfBehindBall()\n")))}u.isMDXComponent=!0}}]);