"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[998],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>w});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=s(a),p=o,w=m["".concat(c,".").concat(p)]||m[p]||u[p]||n;return a?r.createElement(w,l(l({ref:t},d),{},{components:a})):r.createElement(w,l({ref:t},d))}));function w(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,l=new Array(n);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<n;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},7668:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>n,metadata:()=>i,toc:()=>s});var r=a(7462),o=(a(7294),a(3905));const n={},l="Ball to goal rewards",i={unversionedId:"documentation/reward_functions/common_rewards/ball_to_goal_rewards",id:"documentation/reward_functions/common_rewards/ball_to_goal_rewards",title:"Ball to goal rewards",description:"Ball to goal rewards are functions that measure some relationship between the ball and the opponent's goal.",source:"@site/docs/documentation/reward_functions/common_rewards/ball_to_goal_rewards.md",sourceDirName:"documentation/reward_functions/common_rewards",slug:"/documentation/reward_functions/common_rewards/ball_to_goal_rewards",permalink:"/rlgym.github.io/docs/documentation/reward_functions/common_rewards/ball_to_goal_rewards",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/documentation/reward_functions/common_rewards/ball_to_goal_rewards.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Common Rewards",permalink:"/rlgym.github.io/docs/category/common-rewards"},next:{title:"Common Reward Functions",permalink:"/rlgym.github.io/docs/documentation/reward_functions/common_rewards/common_reward_functions"}},c={},s=[{value:"Liu Distance Ball To Goal Reward",id:"liu-distance-ball-to-goal-reward",level:2},{value:"Velocity Ball To Goal Reward",id:"velocity-ball-to-goal-reward",level:2},{value:"Ball Y Coordinate Reward",id:"ball-y-coordinate-reward",level:2}],d={toc:s};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ball-to-goal-rewards"},"Ball to goal rewards"),(0,o.kt)("p",null,"Ball to goal rewards are functions that measure some relationship between the ball and the opponent's goal."),(0,o.kt)("h2",{id:"liu-distance-ball-to-goal-reward"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/lucas-emery/rocket-league-gym/blob/7f07bfa980b84eea11627939dd7d7b1689efcfa7/rlgym/utils/reward_functions/common_rewards/ball_goal_rewards.py#L9"},"Liu Distance Ball To Goal Reward")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/2105.12196.pdf"},"Inspired by: From Motor Control to Team Play in Simulated Humanoid Football")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"LiuDistanceBallToGoalReward(own_goal=False):\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from rlgym.utils.reward_functions.common_rewards import LiuDistancePlayerToBallReward\n\nliu_distance = LiuDistancePlayerToBallReward()\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Determine which team the agent is on, and set the opponent's goal as the objective."),(0,o.kt)("li",{parentName:"ol"},"Compute the normalized distance between the position of the ball, and the center of the opponent's goal. Note that the point returned is in the center of the net, shifted to the back wall inside the net, such that the distance between the ball and the objective can never be zero.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"dist = np.linalg.norm(state.ball.position - objective) - (BACK_NET_Y - BACK_WALL_Y + BALL_RADIUS)\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Return ",(0,o.kt)("inlineCode",{parentName:"li"},"e^(-distance*0.5 / max_ball_speed)"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"return np.exp(-0.5 * dist / BALL_MAX_SPEED)\n")),(0,o.kt)("p",null,"This results in an exponential curve which is at its maximum when the ball is closest to the center of the net."),(0,o.kt)("h2",{id:"velocity-ball-to-goal-reward"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/lucas-emery/rocket-league-gym/blob/7f07bfa980b84eea11627939dd7d7b1689efcfa7/rlgym/utils/reward_functions/common_rewards/ball_goal_rewards.py#L29"},"Velocity Ball To Goal Reward")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"VelocityBallToGoalReward(own_goal=False, use_scalar_projection=False)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from rlgym.utils.reward_functions.common_rewards import VelocityBallToGoalReward\n\nvelocity_ball_goal_reward = VelocityBallToGoalReward()\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Determine which team the agent is on, and set the opponent's goal as the objective."),(0,o.kt)("li",{parentName:"ol"},"Get the linear velocity of the ball."),(0,o.kt)("li",{parentName:"ol"},"Determine the difference between the objective (goal from step 1) and the current ball position."),(0,o.kt)("li",{parentName:"ol"},"Return the scalar projection of the ball's velocity vector on to the objective vector.")),(0,o.kt)("h2",{id:"ball-y-coordinate-reward"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/lucas-emery/rocket-league-gym/blob/7f07bfa980b84eea11627939dd7d7b1689efcfa7/rlgym/utils/reward_functions/common_rewards/ball_goal_rewards.py#L60"},"Ball Y Coordinate Reward")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"BallYCoordinateReward(exponent=1)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from rlgym.utils.reward_functions.common_rewards import BallYCoordinateReward\n\nball_y_reward = BallYCoordinateReward()\n")),(0,o.kt)("p",null,"Incentivize higher ball heights"))}m.isMDXComponent=!0}}]);