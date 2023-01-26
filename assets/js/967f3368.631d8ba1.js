"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4696],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),h=n,d=u["".concat(l,".").concat(h)]||u[h]||m[h]||o;return r?a.createElement(d,i(i({ref:t},c),{},{components:r})):a.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},271:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={title:"State Setters"},i=void 0,s={unversionedId:"tutorials/state_setters",id:"tutorials/state_setters",title:"State Setters",description:"State Setters",source:"@site/docs/tutorials/state_setters.md",sourceDirName:"tutorials",slug:"/tutorials/state_setters",permalink:"/rlgym.github.io/docs/tutorials/state_setters",draft:!1,tags:[],version:"current",frontMatter:{title:"State Setters"},sidebar:"tutorialSidebar",previous:{title:"Self Play",permalink:"/rlgym.github.io/docs/tutorials/self_play"},next:{title:"Terminal Conditions",permalink:"/rlgym.github.io/docs/tutorials/terminal_conditions"}},l={},p=[{value:"State Setters",id:"state-setters",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"state-setters"},"State Setters"),(0,n.kt)("p",null,"In some cases, we may want to directly manipulate the state of the game to train an agent to perform some task. To facilitate this, RLGym can be configured with a ",(0,n.kt)("inlineCode",{parentName:"p"},"StateSetter")," object that will determine the initial state of the game every time ",(0,n.kt)("inlineCode",{parentName:"p"},"env.reset()")," is called. To make one, all we have to do is override the abstract class and implement its method, just like all the other configuration objects in RLGym."),(0,n.kt)("p",null,"A ",(0,n.kt)("inlineCode",{parentName:"p"},"StateSetter")," only has a single method:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"def reset(self, state_wrapper: StateWrapper):\n")),(0,n.kt)("p",null,"This introduces us to a new type of object with the ",(0,n.kt)("inlineCode",{parentName:"p"},"StateWrapper"),". This object contains a mutable representation of every physics object that RLGym can manipulate. When setting the state of the game, you will directly change the state of the objects contained by the ",(0,n.kt)("inlineCode",{parentName:"p"},"StateWrapper"),". Let's look at an example where we will set the state of every car in the match, and the ball."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from rlgym.utils.state_setters import StateSetter\nfrom rlgym.utils.state_setters import StateWrapper\nfrom rlgym.utils.common_values import BLUE_TEAM, ORANGE_TEAM, CEILING_Z\nimport numpy as np\n\nclass CustomStateSetter(StateSetter):\n    def reset(self, state_wrapper: StateWrapper):\n    \n        # Set up our desired spawn location and orientation. Here, we will only change the yaw, leaving the remaining orientation values unchanged.\n        desired_car_pos = [100,100,17] #x, y, z\n        desired_yaw = np.pi/2\n        \n        # Loop over every car in the game.\n        for car in state_wrapper.cars:\n            if car.team_num == BLUE_TEAM:\n                pos = desired_car_pos\n                yaw = desired_yaw\n                \n            elif car.team_num == ORANGE_TEAM:\n                # We will invert values for the orange team so our state setter treats both teams in the same way.\n                pos = [-1*coord for coord in desired_car_pos]\n                yaw = -1*desired_yaw\n                \n            # Now we just use the provided setters in the CarWrapper we are manipulating to set its state. Note that here we are unpacking the pos array to set the position of \n            # the car. This is merely for convenience, and we will set the x,y,z coordinates directly when we set the state of the ball in a moment.\n            car.set_pos(*pos)\n            car.set_rot(yaw=yaw)\n            car.boost = 0.33\n            \n        # Now we will spawn the ball in the center of the field, floating in the air.\n        state_wrapper.ball.set_pos(x=0, y=0, z=CEILING_Z/2)\n")),(0,n.kt)("p",null,"And just like that we have configured a ",(0,n.kt)("inlineCode",{parentName:"p"},"StateSetter")," that will spawn every car near the center of the field, and cause the ball to spawn in the air at the center of the field. To use this, all we have to do is pass it to RLGym just like we would with any other configuration object."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"import rlgym\n\n\nenv = rlgym.make(state_setter=CustomStateSetter())\n")),(0,n.kt)("p",null,"Now we're done! To learn more about values that you might need to know when manipulating the state of the game, check out RLBot's ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/RLBot/RLBot/wiki/Useful-Game-Values"},"useful game values")," page (note that some of these are already included in ",(0,n.kt)("inlineCode",{parentName:"p"},"rlgym.utils.common_values"),")."))}u.isMDXComponent=!0}}]);