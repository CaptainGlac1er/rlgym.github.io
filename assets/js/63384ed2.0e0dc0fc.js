"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[663],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),g=r,d=u["".concat(s,".").concat(g)]||u[g]||c[g]||i;return n?a.createElement(d,o(o({ref:t},m),{},{components:n})):a.createElement(d,o({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4244:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={title:"Getting Started",sidebar_position:2},o=void 0,l={unversionedId:"getting-started/getting-started",id:"getting-started/getting-started",title:"Getting Started",description:"Setting up an Environment",source:"@site/docs/getting-started/getting-started.md",sourceDirName:"getting-started",slug:"/getting-started/",permalink:"/rlgym.github.io/docs/getting-started/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/getting-started.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Getting Started",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/rlgym.github.io/docs/introduction"},next:{title:"Documentation",permalink:"/rlgym.github.io/docs/category/documentation"}},s={},p=[{value:"Setting up an Environment",id:"setting-up-an-environment",level:2},{value:"Interacting With the Game",id:"interacting-with-the-game",level:2},{value:"Training a Simple Agent with PPO",id:"training-a-simple-agent-with-ppo",level:2}],m={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"setting-up-an-environment"},"Setting up an Environment"),(0,r.kt)("p",null,"Once RLGym is ",(0,r.kt)("a",{parentName:"p",href:"https://rlgym.github.io/docs-page.html#installation"},"installed"),", simply import the library and call the ",(0,r.kt)("inlineCode",{parentName:"p"},"make()")," function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import rlgym\n\n\nenv = rlgym.make()\n")),(0,r.kt)("p",null,"This will configure Rocket League with the default parameters that come with RLGym."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"make")," function comes with a number of optional parameters, which are explained in the ",(0,r.kt)("a",{parentName:"p",href:"https://rlgym.github.io/docs-page.html#documentation"},"Documentation")," section of the wiki.\nFor convenience, all the ",(0,r.kt)("inlineCode",{parentName:"p"},"make")," parameters and their types are listed here:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"game_speed: int = 100,"),(0,r.kt)("li",{parentName:"ul"},"tick_skip: int = 8,"),(0,r.kt)("li",{parentName:"ul"},"spawn_opponents: bool = True,"),(0,r.kt)("li",{parentName:"ul"},"self_play: bool = False,"),(0,r.kt)("li",{parentName:"ul"},"random_resets: bool = False,"),(0,r.kt)("li",{parentName:"ul"},"team_size: int = 1,"),(0,r.kt)("li",{parentName:"ul"},"terminal_conditions: List","[object]"," = (TimeoutCondition(225), GoalScoredCondition()),"),(0,r.kt)("li",{parentName:"ul"},"reward_fn: object = DefaultReward(),"),(0,r.kt)("li",{parentName:"ul"},"obs_builder: object = DefaultObs(),"),(0,r.kt)("li",{parentName:"ul"},"action_parser: object = DefaultAction(),"),(0,r.kt)("li",{parentName:"ul"},"state_setter: object = DefaultState(),"),(0,r.kt)("li",{parentName:"ul"},"launch_preference: str = LaunchPreference.EPIC,"),(0,r.kt)("li",{parentName:"ul"},"path_to_rl: str = None,"),(0,r.kt)("li",{parentName:"ul"},"use_injector: bool = False"),(0,r.kt)("li",{parentName:"ul"},"force_paging: bool = False")),(0,r.kt)("h2",{id:"interacting-with-the-game"},"Interacting With the Game"),(0,r.kt)("p",null,"To interact with the game, simply treat it like any other OpenAI Gym environment:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import rlgym\n\nenv = rlgym.make()\n\nwhile True:\n    obs = env.reset()\n    done = False\n\n    while not done:\n      #Here we sample a random action. If you have an agent, you would get an action from it here.\n      action = env.action_space.sample() \n      \n      next_obs, reward, done, gameinfo = env.step(action)\n      \n      obs = next_obs\n")),(0,r.kt)("h2",{id:"training-a-simple-agent-with-ppo"},"Training a Simple Agent with PPO"),(0,r.kt)("p",null,"You can now train an agent with your learning algorithm of choice! Because RLGym follows the OpenAI Gym API, any of the common Reinforcement Learning libraries should be supported.\nThe following is an example of how to train an agent in the default RLGym environment using an implementation of PPO from the ",(0,r.kt)("a",{parentName:"p",href:"https://stable-baselines3.readthedocs.io/en/master/"},"Stable Baselines 3")," library."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import rlgym\nfrom stable_baselines3 import PPO\n\n#Make the default rlgym environment\nenv = rlgym.make()\n\n#Initialize PPO from stable_baselines3\nmodel = PPO("MlpPolicy", env=env, verbose=1)\n\n#Train our agent!\nmodel.learn(total_timesteps=int(1e6))\n')),(0,r.kt)("p",null,"And just like that a Rocket League agent is being trained! "),(0,r.kt)("p",null,"The default configuration of RLGym will not produce a competent game-playing agent. This configuration is meant as a testing ground for users to quickly verify that they have installed RLGym successfully, and their learning algorithm is working. When the default reward is maximized, the agent should have zero angular velocity at all times."),(0,r.kt)("p",null,"To train a game-playing agent, users will need to configure an RLGym environment with an appropriate ",(0,r.kt)("a",{parentName:"p",href:"https://rlgym.github.io/docs-page.html#reward-functions"},"Reward Function"),", ",(0,r.kt)("a",{parentName:"p",href:"https://rlgym.github.io/docs-page.html#observation-builders"},"Observation Builder"),", and a set of ",(0,r.kt)("a",{parentName:"p",href:"https://rlgym.github.io/docs-page.html#terminal-conditions"},"Terminal Conditions"),". To learn about configuring a custom environment, read through our ",(0,r.kt)("a",{parentName:"p",href:"https://rlgym.github.io/docs-page.html#tutorials"},"Tutorials"),"."),(0,r.kt)("p",null,"If you have any questions, comments, or just want to share your cool projects with us, we'd love to hear from you over on our ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/NjAHcP32Ae"},"community discord"),"!"))}u.isMDXComponent=!0}}]);