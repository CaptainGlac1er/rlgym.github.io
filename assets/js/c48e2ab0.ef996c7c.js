"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[191],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,b=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return n?a.createElement(b,i(i({ref:t},p),{},{components:n})):a.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5362:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={},i="Observation Builders",s={unversionedId:"tutorials/configuration_objects/observation_builders",id:"tutorials/configuration_objects/observation_builders",title:"Observation Builders",description:"An ObsBuilder is an object used by RLGym to transform the game state into an input for the agent at every step.",source:"@site/docs/tutorials/configuration_objects/observation_builders.md",sourceDirName:"tutorials/configuration_objects",slug:"/tutorials/configuration_objects/observation_builders",permalink:"/docs/tutorials/configuration_objects/observation_builders",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Action Parsers",permalink:"/docs/tutorials/configuration_objects/action_parsers"},next:{title:"Reward Functions",permalink:"/docs/tutorials/configuration_objects/reward_functions"}},l={},u=[{value:"Understanding Perspective",id:"understanding-perspective",level:2}],p={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"observation-builders"},"Observation Builders"),(0,r.kt)("p",null,"An ",(0,r.kt)("inlineCode",{parentName:"p"},"ObsBuilder")," is an object used by RLGym to transform the game state into an input for the agent at every step.\nObservation builders are used similarly to ",(0,r.kt)("a",{parentName:"p",href:"https://rlgym.github.io/docs-page.html#reward-functions"},"Reward Functions")," by the environment. At each step, the observation builder will be called once for every player in the current game state."),(0,r.kt)("p",null,"Observation builders need to implement two methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"#Called once per reset.\nreset(self, initial_state: GameState)\n\n#Called once per step and reset.\nbuild_obs(self, player: PlayerData, state: GameState, previous_action: np.ndarray) -> Any\n")),(0,r.kt)("p",null,"Implementing a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"ObsBuilder")," is just as easy as implementing a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"RewardFunction"),".\nAll we have to do is inherit from the parent class and implement the above methods."),(0,r.kt)("p",null,"As an example, let's write an observation builder that contains the physics state of the ball and every player in the match."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from rlgym.utils.obs_builders import ObsBuilder\nfrom rlgym.utils.gamestates import PlayerData, GameState\nimport numpy as np\n\nclass CustomObsBuilder(ObsBuilder):\n  def reset(self, initial_state: GameState):\n    pass\n\n  def build_obs(self, player: PlayerData, state: GameState, previous_action: np.ndarray) -> Any:\n    obs = []\n    obs += state.ball.serialize()\n\n    for player in state.players:\n      obs += player.car_data.serialize()\n\n    return np.asarray(obs, dtype=np.float32)\n")),(0,r.kt)("p",null,"Now all we need to do is pass our observation builder to RLGym when making a match."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import rlgym\n\n\nenv = rlgym.make(obs_builder=CustomObsBuilder())\n#Training loop goes here\n")),(0,r.kt)("p",null,"And we're done!"),(0,r.kt)("h2",{id:"understanding-perspective"},"Understanding Perspective"),(0,r.kt)("p",null,"The observation builder we wrote above will work for many purposes, but when training a game-playing agent it can be useful to represent the game world from a common perspective so the agent can play on both the orange and blue teams without unnecessary learning time.\nUnfortunately, the observation builder we just wrote will return the physics state of every object from the perspective of the game world, so if our agent has learned to play on the blue team it may get confused if we ask it to play on the orange team."),(0,r.kt)("p",null,'To alleviate this, we can simply transform all the physics data in every game object to share a common perspective.\nWhile this would be expensive to do in Python, RLGym computes these transformations in C++ when constructing the gamestate in the Bakkesmod plugin.\nYou can access them directly as the "inverted" physics data for each player and the ball.'),(0,r.kt)("p",null,"Let's take a look at an example of implementing an observation builder that will always return an observation that looks as though it came from a player on the blue team, even if that player is on the orange team."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from rlgym.utils.obs_builders import ObsBuilder\nfrom rlgym.utils import common_values\nfrom rlgym.utils.gamestates import PlayerData, GameState\nimport numpy as np\n\n\nclass CustomObsBuilderBluePerspective(ObsBuilder):\n  def reset(self, initial_state: GameState):\n    pass\n\n  def build_obs(self, player: PlayerData, state: GameState, previous_action: np.ndarray) -> Any:\n    obs = []\n\n    #If this observation is being built for a player on the orange team, we need to invert all the physics data we use.\n    inverted = player.team_num == common_values.ORANGE_TEAM\n\n    if inverted:\n      obs += state.inverted_ball.serialize()\n    else:\n      obs += state.ball.serialize()\n\n    for player in state.players:\n      if inverted:\n        obs += player.inverted_car_data.serialize()\n      else:\n        obs += player.car_data.serialize()\n\n    return np.asarray(obs, dtype=np.float32)\n")),(0,r.kt)("p",null,"Now we can use the same agent to control both teams without having to modify our observation builder!"),(0,r.kt)("p",null,"While these ",(0,r.kt)("inlineCode",{parentName:"p"},"ObsBuilder")," examples show how a user can build an observation containing all the necessary physics information about the game, users might want to build observations containing different data.\nTo look at what data is available, please refer to our ",(0,r.kt)("a",{parentName:"p",href:"/"},"Game State Documentation"),"."))}m.isMDXComponent=!0}}]);