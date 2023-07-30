"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4029],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,y=u["".concat(c,".").concat(f)]||u[f]||m[f]||o;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},624:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(4137));const o={},i="Action Parsers",s={unversionedId:"tutorials/configuration_objects/action_parsers",id:"tutorials/configuration_objects/action_parsers",title:"Action Parsers",description:"RLGym expects an array of 8 actions per agent on the pitch. Each action corresponds to one control input:",source:"@site/docs/tutorials/configuration_objects/action_parsers.md",sourceDirName:"tutorials/configuration_objects",slug:"/tutorials/configuration_objects/action_parsers",permalink:"/rlgym.github.io/docs/tutorials/configuration_objects/action_parsers",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Configuration Objects",permalink:"/rlgym.github.io/docs/tutorials/configuration_objects/"},next:{title:"Observation Builders",permalink:"/rlgym.github.io/docs/tutorials/configuration_objects/observation_builders"}},c={},l=[],p={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"action-parsers"},"Action Parsers"),(0,a.kt)("p",null,"RLGym expects an array of 8 actions per agent on the pitch. Each action corresponds to one control input:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"throttle"),(0,a.kt)("li",{parentName:"ul"},"steer"),(0,a.kt)("li",{parentName:"ul"},"yaw"),(0,a.kt)("li",{parentName:"ul"},"pitch"),(0,a.kt)("li",{parentName:"ul"},"roll"),(0,a.kt)("li",{parentName:"ul"},"jump"),(0,a.kt)("li",{parentName:"ul"},"boost"),(0,a.kt)("li",{parentName:"ul"},"handbrake")),(0,a.kt)("p",null,"The first five values are expected to be in the range ","[-1, 1]",", while the last three values should be either 0 or 1.\nTo allow a variety of action inputs while still adhering to requirements of RLGym, we use an ",(0,a.kt)("inlineCode",{parentName:"p"},"ActionParser"),"."),(0,a.kt)("p",null,"An ",(0,a.kt)("inlineCode",{parentName:"p"},"ActionParser")," has two methods"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# Called during the initialization of the environment\ndef get_action_space(self) -> gym.spaces.Space:\n\n# Called every step, turning the given actions into the 8 RLGym expects\ndef parse_actions(self, actions: Any, state: GameState) -> np.ndarray:\n")),(0,a.kt)("p",null,"To create a custom action parser, inherit from ",(0,a.kt)("inlineCode",{parentName:"p"},"ActionParser")," abstract class and implement the two above methods.\nHere's an already built action parser that turns a set of continuous actions into discrete actions for faster learning."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import numpy as np\nimport gym.spaces\nfrom rlgym.utils.gamestates import GameState\nfrom rlgym.utils.action_parsers import ActionParser\n\nclass DiscreteAction(ActionParser):\n    """\n    Simple discrete action space. All the analog actions have 3 bins by default: -1, 0 and 1.\n    """\n\n    def __init__(self, n_bins=3):\n        super().__init__()\n        assert n_bins % 2 == 1, "n_bins must be an odd number"\n        self._n_bins = n_bins\n\n    def get_action_space(self) -> gym.spaces.Space:\n        return gym.spaces.MultiDiscrete([self._n_bins] * 5 + [2] * 3)\n\n    def parse_actions(self, actions: np.ndarray, state: GameState) -> np.ndarray:\n        actions = actions.reshape((-1, 8))\n\n        # map all ternary actions from {0, 1, 2} to {-1, 0, 1}.\n        actions[..., :5] = actions[..., :5] / (self._n_bins // 2) - 1\n\n        return actions\n')),(0,a.kt)("p",null,"Now we can simply pass an instance of our concrete ",(0,a.kt)("inlineCode",{parentName:"p"},"ActionParser")," to RLGym when we make an environment."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import rlgym\n\nenv = rlgym.make(action_parser=DiscreteAction())\n#Training loop goes here\n")),(0,a.kt)("p",null,"Be aware that whatever you are using to generate actions must be compatible with your chosen action parser accepts.\nA parser that assumes it will only be given 5 actions will probably throw an error if given 6.\nThe usual assumption is for ",(0,a.kt)("inlineCode",{parentName:"p"},"n*8")," actions to be given to a parser, where ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," is the number of agents.\nCheck the specifics of your desired parser for details."))}m.isMDXComponent=!0}}]);