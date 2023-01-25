"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7579],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,h=p["".concat(l,".").concat(f)]||p[f]||m[f]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3460:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"SB3 with Multiple Game Instances"},i=void 0,s={unversionedId:"tools/sb3_multi_env_wrapper",id:"tools/sb3_multi_env_wrapper",title:"SB3 with Multiple Game Instances",description:"Using SB3 with Multiple Game Instances",source:"@site/docs/tools/sb3_multi_env_wrapper.md",sourceDirName:"tools",slug:"/tools/sb3_multi_env_wrapper",permalink:"/rlgym.github.io/docs/tools/sb3_multi_env_wrapper",draft:!1,tags:[],version:"current",frontMatter:{title:"SB3 with Multiple Game Instances"},sidebar:"tutorialSidebar",previous:{title:"Saving and Loading",permalink:"/rlgym.github.io/docs/tools/saving_and_loading"},next:{title:"SB3 with a Single Game Instance",permalink:"/rlgym.github.io/docs/tools/sb3_single_env_wrapper"}},l={},c=[{value:"Using SB3 with Multiple Game Instances",id:"using-sb3-with-multiple-game-instances",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"using-sb3-with-multiple-game-instances"},"Using SB3 with Multiple Game Instances"),(0,a.kt)("p",null,"Most consumer hardware is capable of running more than just one instance of Rocket League at a time, and we would like to take advantage of that when training an agent for complex tasks like playing the game effectively. Fortunately, SB3 supports multi-processing natively, so we can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"rlgym-tools")," multi-instance wrapper to launch as many parallel game instances as we like."),(0,a.kt)("p",null,"Using this wrapper requires us to make a special function that will construct a ",(0,a.kt)("inlineCode",{parentName:"p"},"rlgym.envs.Match")," object with all the necessary settings and objects. This is because RLGym needs each instance of the environment to exist in an independent process, so our wrapper will use this function to create each environment after its process has been spawned. Let's look at an example for how to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"SB3MultipleInstanceEnv")," with the SB3 implementation of  PPO to train an agent for 1,000,000 timesteps with 2 instances of the game open."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# Here we import the Match object and our multi-instance wrapper\nfrom rlgym.envs import Match\nfrom rlgym_tools.sb3_utils import SB3MultipleInstanceEnv\n\n# Since we can\'t use the normal rlgym.make() function, we need to import all the default configuration objects to give to our Match.\nfrom rlgym.utils.reward_functions import DefaultReward\nfrom rlgym.utils.obs_builders import DefaultObs\nfrom rlgym.utils.state_setters import DefaultState\nfrom rlgym.utils.terminal_conditions.common_conditions import TimeoutCondition\n\n# Finally, we import the SB3 implementation of PPO.\nfrom stable_baselines3.ppo import PPO\n\n# This is the function we need to provide to our SB3MultipleInstanceEnv to construct a match. Note that this function MUST return a Match object.\ndef get_match():\n    \n    # Here we configure our Match. If you want to use custom configuration objects, make sure to replace the default arguments here with instances of the objects you want.\n    return Match(\n        reward_function=DefaultReward(),\n        terminal_conditions=[TimeoutCondition(225)],\n        obs_builder=DefaultObs(),\n        state_setter=DefaultState()\n        \n        self_play=True,\n    )\n    \n\n#If we want to spawn new processes, we have to make sure our program starts in a proper Python entry point.\nif __name__ == "__main__":\n    """\n        Now all we have to do is make an instance of the SB3MultipleInstanceEnv and pass it our get_match function, the number of instances we\'d like to open, and how long it should wait between instances.\n        This wait_time argument is important because if multiple Rocket League clients are opened in quick succession, they will cause each other to crash. The exact reason this happens is unknown to us,\n        but the easiest solution is to delay for some period of time between launching clients. The amount of required delay will depend on your hardware, so make sure to change this number if your Rocket League\n        clients are crashing before they fully launch.\n    """\n    env = SB3MultipleInstanceEnv(match_func_or_matches=get_match, num_instances=2, wait_time=20)\n    learner = PPO(policy="MlpPolicy", env=env, verbose=1)\n    learner.learn(1_000_000)\n')))}p.isMDXComponent=!0}}]);