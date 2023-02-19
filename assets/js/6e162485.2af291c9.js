"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7698],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(t),u=r,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return t?a.createElement(h,i(i({ref:n},c),{},{components:t})):a.createElement(h,i({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8119:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=t(7462),r=(t(7294),t(3905));const o={},i="Self Play",s={unversionedId:"tutorials/self_play",id:"tutorials/self_play",title:"Self Play",description:"Multiple Agents",source:"@site/docs/tutorials/self_play.md",sourceDirName:"tutorials",slug:"/tutorials/self_play",permalink:"/rlgym.github.io/docs/tutorials/self_play",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Terminal Conditions",permalink:"/rlgym.github.io/docs/tutorials/configuration_objects/terminal_conditions"},next:{title:"FAQs",permalink:"/rlgym.github.io/docs/faq/"}},p={},l=[{value:"Multiple Agents",id:"multiple-agents",level:2}],c={toc:l};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"self-play"},"Self Play"),(0,r.kt)("h2",{id:"multiple-agents"},"Multiple Agents"),(0,r.kt)("p",null,"In many cases, having an agent play against itself, or against other agents, may be crucial to the training process.\nRLGym supports this natively with 1v1, 2v2, and 3v3 game modes.\nTo spawn and control multiple agents, change the ",(0,r.kt)("inlineCode",{parentName:"p"},"spawn_opponents")," argument in ",(0,r.kt)("inlineCode",{parentName:"p"},"rlgym.make()")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"True"),".\nSimilarly, to change the team size, specify the ",(0,r.kt)("inlineCode",{parentName:"p"},"team_size")," argument in ",(0,r.kt)("inlineCode",{parentName:"p"},"rlgym.make()"),".\nWhen there are multiple agents in a single match, a user must provide one input per agent.\nRLGym will then provide one reward and one observation per agent at every step in response."),(0,r.kt)("p",null,"To get an understanding of how things change when we add multiple agents, we will first look at the shapes of data returned by the default reward function and observation builder when only a single agent is present in the match."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import rlgym\nimport numpy as np\n\n\nenv = rlgym.make(team_size=1)\nobs = env.reset()\n \naction = env.action_space.sample()\nnew_obs, reward, done, game_info = env.step(action)\n\nprint(\"Reward: {} | Reward Shape: {} | Observation Shape: {}\".format(reward, np.shape(reward), np.shape(new_obs)))\n#     'Reward: 0.22926727739572525 | Reward Shape: () | Observation Shape: (21,)'\n\nenv.close()\n")),(0,r.kt)("p",null,"Now we want to spawn a second agent that we control by enabling changing the ",(0,r.kt)("inlineCode",{parentName:"p"},"spawn_opponents")," flag.\nWhen we do this, RLGym will expect us to provide 2 actions, and we expect it will give us 2 rewards and 2 observations at each step.\nLet's see how this changes the shape of our rewards and observations."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import rlgym\nimport numpy as np\n\n\nenv = rlgym.make(spawn_opponents=True, team_size=1)\nobs = env.reset()\n\naction1 = env.action_space.sample()\naction2 = env.action_space.sample()\nactions = [action1, action2]\nnew_obs, reward, done, game_info = env.step(actions)\n \nprint(\"Reward: {} | Reward Shape: {} | Observation Shape: {}\".format(reward, np.shape(reward), np.shape(new_obs)))\n#     'Reward: [0.22909658008217812, -0.000620309618115425] | Reward Shape: (2,) | Observation Shape: (2, 30)'\n\nenv.close()\n")),(0,r.kt)("p",null,"We can see that RLGym has given us a list of 2 rewards and 2 observations, just as we expected. Interestingly, the length of each observation has changed from 21 to 30. This is because the ",(0,r.kt)("inlineCode",{parentName:"p"},"DefaultObs")," class will expand the length of an observation to fit more players as we add them."),(0,r.kt)("p",null,"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"RewardFunction")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ObsBuilder")," objects accept a ",(0,r.kt)("inlineCode",{parentName:"p"},"PlayerData")," object when computing a reward and building an observation. The purpose of this is to allow users to construct rewards and observations for each agent individually, rather than using the same logic across all agents.\nThe order of the rewards and observations at each step is the same as the order of the actions that were passed in."),(0,r.kt)("p",null,"e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"new_obs[0], reward[0] -> actions[0]\nnew_obs[1], reward[1] -> actions[1]\n")),(0,r.kt)("p",null,"The behavior of RLGym will continue in this fashion if we want to add more players to each team. Below is an example of a 3v3 game with 3 agents per team."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import rlgym\nimport numpy as np\n\nteam_size = 3\nenv = rlgym.make(spawn_opponents=True,\n                 team_size=team_size)\nobs = env.reset()\n\nactions = []\nfor i in range(team_size*2):\n    action_i = env.action_space.sample()\n    actions.append(action_i)\n\nnew_obs, reward, done, game_info = env.step(actions)\n\nprint(\"Reward: {} | Reward Shape: {} | Observation Shape: {}\".format(reward, np.shape(reward), np.shape(new_obs)))\n#     'Reward: [-0.0004967440903186798, -0.00022574408054351803, -0.00045004554688930515, -0.00045091726481914524, -0.00044998391568660737, -0.00045094705224037174] | Reward Shape (6,) | Observation Shape: (6, 66)'\nenv.close()\n")))}m.isMDXComponent=!0}}]);