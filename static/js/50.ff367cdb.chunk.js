"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[50],{9818:function(n,e,t){t.d(e,{r:function(){return w}});var i,r,o=t(168),a=t(7691),l=t(2791),c=["title","titleId"];function d(){return d=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},d.apply(this,arguments)}function s(n,e){if(null==n)return{};var t,i,r=function(n,e){if(null==n)return{};var t,i,r={},o=Object.keys(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}function p(n,e){var t=n.title,o=n.titleId,a=s(n,c);return l.createElement("svg",d({width:32,height:32,viewBox:"0 0 32 32",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":o},a),t?l.createElement("title",{id:o},t):null,i||(i=l.createElement("path",{d:"M15.9997 26.6663V15.9997ZM15.9997 15.9997V5.33301ZM15.9997 15.9997H26.6663ZM15.9997 15.9997H5.33301Z",fill:"white"})),r||(r=l.createElement("path",{d:"M15.9997 26.6663V15.9997M15.9997 15.9997V5.33301M15.9997 15.9997H26.6663M15.9997 15.9997H5.33301",stroke:"white",strokeWidth:2,strokeLinecap:"round"})))}var u,h,f,m,x=l.forwardRef(p),g=(t.p,a.ZP.button(u||(u=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 80px;\n  height: 80px;\n  padding: 16px;\n  border: 0;\n  border-radius: ",";\n  background: ",";\n  cursor: pointer;\n  @media screen and (",") {\n    width: 129px;\n    height: 44px;\n    padding: 0;\n    border-radius: 0;\n    background: transparent;\n    flex-direction: row-reverse;\n    gap: 12px;\n  }\n"])),(function(n){return n.theme.radii.round}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.device.tablet}))),b=a.ZP.div(h||(h=(0,o.Z)(["\n  @media screen and (",") {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 44px;\n    height: 44px;\n    background-color: ",";\n    border-radius: ",";\n  }\n"])),(function(n){return n.theme.device.tablet}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.radii.round})),y=(0,a.ZP)(x)(f||(f=(0,o.Z)(["\n  width: 32px;\n  height: 32px;\n  color: #ffffff;\n  @media screen and (",") {\n    width: 24px;\n    height: 24px;\n  }\n"])),(function(n){return n.theme.device.tablet})),v=a.ZP.span(m||(m=(0,o.Z)(["\n  font-family: ",";\n  font-size: ","px;\n  line-height: 1.33;\n\n  color: #ffffff;\n  @media screen and (",") {\n    color: ",";\n    font-size: ","px;\n    line-height: 1.35;\n  }\n"])),(function(n){return n.theme.fonts.body}),(function(n){return n.theme.fontSizes[0]}),(function(n){return n.theme.device.tablet}),(function(n){return n.theme.colors.primaryText}),(function(n){return n.theme.fontSizes[4]})),j=t(184),w=function(n){var e=n.onClick;return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)(g,{type:"button",onClick:e,children:[(0,j.jsx)(b,{children:(0,j.jsx)(y,{})}),(0,j.jsx)(v,{children:"Add pet"})]})})}},2050:function(n,e,t){t.r(e),t.d(e,{default:function(){return Tn}});var i,r,o,a,l,c=t(168),d=t(7691),s=d.ZP.div(i||(i=(0,c.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 32px;\n  background-color: ",";\n\n  @media "," {\n    margin-bottom: 24px;\n  }\n"])),(function(n){return n.theme.colors.background}),(function(n){return n.theme.device.tablet})),p=d.ZP.h2(r||(r=(0,c.Z)(["\n  font-family: ",";\n  font-size: ","px;\n  font-weight: ",";\n  line-height: 1.35;\n  letter-spacing: 0.04em;\n\n  @media "," {\n    font-size: ","px;\n  }\n"])),(function(n){return n.theme.fonts.body}),(function(n){return n.theme.fontSizes[4]}),(function(n){return n.theme.fontWeights.medium}),(function(n){return n.theme.device.tablet}),(function(n){return n.theme.fontSizes[6]})),u=t(5987),h=t(4585),f=t(9434),m=function(n){return n.user.userInfo},x=function(n){return n.user.isLoading},g=function(n){return n.user.error},b=t(7425),y=t(184),v=function(n){var e=n.userPet,t=e.name,i=e.imageURL,r=e.birthdate,o=e.breed,a=e.comments;return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("div",{children:(0,y.jsx)("img",{src:"https://res.cloudinary.com/dqupdbup3/image/upload/".concat(i),alt:"Your pet ".concat(t)})}),(0,y.jsxs)("div",{children:[(0,y.jsxs)("div",{children:[(0,y.jsxs)("p",{children:["Name: ",t]}),(0,y.jsxs)("p",{children:["Date of birth: ",r]}),(0,y.jsxs)("p",{children:["Breed: ",o]}),(0,y.jsxs)("p",{children:["Comments: ",a]})]}),(0,y.jsx)("button",{type:"button",children:(0,y.jsx)(b.AWu,{})})]})]})},j=d.ZP.ul(o||(o=(0,c.Z)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  gap: 20px;\n  background-color: ",";\n\n  @media "," {\n    gap: 22px;\n  }\n"])),(function(n){return n.theme.colors.background}),(function(n){return n.theme.device.desktop})),w=d.ZP.li(a||(a=(0,c.Z)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  gap: 20px;\n  padding: 16px 20px;\n  /* width: 280px; */\n  /* max-height: 541px; */\n  background-color: ",";\n  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);\n  border-radius: ",";\n\n  @media "," {\n    flex-direction: row;\n    /* width: 704px; */\n    /* height: 230px; */\n    padding: 20px;\n    border-radius: ",";\n  }\n\n  @media "," {\n    min-width: 821px;\n    /* height: 230px; */\n    padding: 20px;\n  }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.radii.small}),(function(n){return n.theme.device.tablet}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.device.desktop})),Z=["_id"],k=function(){var n=(0,f.v9)(m),e=n.userPets;return(0,y.jsx)(y.Fragment,{children:0===Object.keys(n).length?(0,y.jsx)(h.a,{}):e.length?(0,y.jsx)(j,{children:e.map((function(n){var e=n._id,t=(0,u.Z)(n,Z);return(0,y.jsx)(w,{children:(0,y.jsx)(v,{userPet:t})},e)}))}):(0,y.jsx)("div",{children:"No content"})})},P=t(9818),O=function(){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(s,{children:[(0,y.jsx)(p,{children:"My pets:"}),(0,y.jsx)(P.r,{})]}),(0,y.jsx)(k,{})]})},z=t(5705),E=t(2797),M=t(2791),S=["title","titleId"];function I(){return I=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},I.apply(this,arguments)}function F(n,e){if(null==n)return{};var t,i,r=function(n,e){if(null==n)return{};var t,i,r={},o=Object.keys(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}function A(n,e){var t=n.title,i=n.titleId,r=F(n,S);return M.createElement("svg",I({xmlns:"http://www.w3.org/2000/svg",width:14,height:14,fill:"none",ref:e,"aria-labelledby":i},r),t?M.createElement("title",{id:i},t):null,l||(l=M.createElement("path",{fill:"#111",fillOpacity:.6,d:"M3.052 11.468a.52.52 0 0 1-.495-.354.515.515 0 0 1-.026-.214l.128-1.403 5.895-5.892 1.842 1.841-5.893 5.893-1.403.127a.469.469 0 0 1-.048.002Zm7.712-6.39L8.922 3.236l1.105-1.104a.521.521 0 0 1 .737 0l1.104 1.104a.52.52 0 0 1 0 .737l-1.104 1.105Z"})))}var C,H,R=M.forwardRef(A),V=(t.p,["title","titleId"]);function _(){return _=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},_.apply(this,arguments)}function L(n,e){if(null==n)return{};var t,i,r=function(n,e){if(null==n)return{};var t,i,r={},o=Object.keys(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}function B(n,e){var t=n.title,i=n.titleId,r=L(n,V);return M.createElement("svg",_({xmlns:"http://www.w3.org/2000/svg",width:20,height:20,fill:"none",ref:e,"aria-labelledby":i},r),t?M.createElement("title",{id:i},t):null,C||(C=M.createElement("path",{fill:"#F59256",d:"M10 7.708a2.708 2.708 0 1 0 0 5.417 2.708 2.708 0 0 0 0-5.417Z"})),H||(H=M.createElement("path",{fill:"#F59256",fillRule:"evenodd",d:"M7.708.208c-1.15 0-2.084.933-2.084 2.084v.149a.685.685 0 0 1-.684.684A3.899 3.899 0 0 0 1.04 7.024v3.842c0 1.336 0 2.384.08 3.22.08.854.249 1.552.626 2.168a4.792 4.792 0 0 0 1.582 1.582c.616.377 1.314.545 2.167.626.837.08 1.884.08 3.22.08h2.566c1.336 0 2.384 0 3.22-.08.854-.08 1.552-.249 2.168-.626a4.792 4.792 0 0 0 1.582-1.582c.377-.616.545-1.314.626-2.167.08-.837.08-1.884.08-3.22V7.023a3.899 3.899 0 0 0-3.9-3.899.685.685 0 0 1-.684-.684v-.15c0-1.15-.932-2.083-2.083-2.083H7.708ZM6.04 10.417a3.958 3.958 0 1 1 7.917 0 3.958 3.958 0 0 1-7.917 0Zm8.958-2.5a.833.833 0 1 1 0-1.667.833.833 0 0 1 0 1.667Z",clipRule:"evenodd"})))}var N,W,q,J,U,D,K,T,Y,$,G,Q,X,nn,en,tn,rn,on=M.forwardRef(B),an=(t.p,d.ZP.section(N||(N=(0,c.Z)(["\n  display: block;\n  padding: 20px 16px 20px 16px;\n  margin-bottom: 46px;\n\n  background-color: #ffffff;\n  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);\n  border-radius: 20px;\n\n  @media "," {\n    /* padding: 24px 40px 24px 32px; */\n    box-sizing: content-box;\n\n    position: relative;\n    display: flex;\n    flex-direction: row-reverse;\n    justify-content: space-between;\n    align-items: flex-end;\n\n    left: -32px;\n    width: 100%;\n\n    border-radius: 0 40px 40px 0;\n  }\n\n  @media "," {\n    padding: 20px 16px 18px 16px;\n\n    display: block;\n    width: 411px;\n    left: -16px;\n  }\n"])),(function(n){return n.theme.device.tablet}),(function(n){return n.theme.device.desktop}))),ln=d.ZP.div(W||(W=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  margin-bottom: 32px;\n\n  @media "," {\n    margin-bottom: 0;\n  }\n  @media "," {\n    margin-bottom: 32px;\n  }\n"])),(function(n){return n.theme.device.tablet}),(function(n){return n.theme.device.desktop})),cn=d.ZP.div(q||(q=(0,c.Z)(["\n  position: relative;\n"]))),dn=d.ZP.img(J||(J=(0,c.Z)(["\n  display: block;\n  overflow: hidden;\n  object-fit: cover;\n  border-radius: 50%;\n  margin-bottom: 12px;\n\n  @media "," {\n    margin-bottom: 8px;\n  }\n  @media "," {\n    margin-bottom: 30px;\n  }\n  @media "," {\n    margin-bottom: 0;\n  }\n"])),(function(n){return n.theme.device.tablet}),(function(n){return n.theme.device.desktop}),(function(n){return n.theme.device.desktop})),sn=d.ZP.label(U||(U=(0,c.Z)(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  cursor: pointer;\n\n  /* padding: 6px 8px; */\n\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 1.83;\n  letter-spacing: 0.04em;\n\n  @media "," {\n    position: absolute;\n    bottom: 0;\n  }\n"])),(function(n){return n.theme.device.desktop})),pn=d.ZP.input(D||(D=(0,c.Z)(["\n  display: none;\n"]))),un=d.ZP.div(K||(K=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  width: 20px;\n  height: 20px;\n  /* background-color: ","; */\n\n  margin-right: 4px;\n"])),(function(n){return n.theme.colors.accent})),hn=(0,d.ZP)(on)(T||(T=(0,c.Z)(["\n  fill: ",";\n  width: 17.92px;\n  height: 18.33px;\n"])),(function(n){return n.theme.colors.accent})),fn=d.ZP.div(Y||(Y=(0,c.Z)(["\n  /* @media "," {\n    margin-right: 56px;\n  } */\n"])),(function(n){return n.theme.device.tablet})),mn=(0,d.ZP)(z.l0)($||($=(0,c.Z)(["\n  width: 100%;\n  display: grid;\n  grid-template-columns: [labels] auto [inputs] 1fr [buttons];\n  grid-auto-flow: row;\n  grid-column-gap: 8px;\n  grid-row-gap: 4px;\n\n  align-items: center;\n  margin-bottom: 40px;\n\n  @media screen and (",") {\n    grid-column-gap: 24px;\n    grid-row-gap: 8px;\n    margin-bottom: 30px;\n  }\n\n  @media "," {\n    margin-bottom: 20px;\n    margin-right: 0;\n  }\n"])),(function(n){return n.theme.device.tablet}),(function(n){return n.theme.device.desktop})),xn=d.ZP.label(G||(G=(0,c.Z)(["\n  grid-column: labels;\n  grid-row: auto;\n  /* gap: 8px; */\n\n  font-family: inherit;\n  font-style: inherit;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 1.33;\n  letter-spacing: 0.04em;\n\n  @media "," {\n    font-size: 18px;\n    line-height: 1.39;\n  }\n"])),(function(n){return n.theme.device.tablet})),gn=(0,d.ZP)(z.gN)(Q||(Q=(0,c.Z)(["\n  margin: 0;\n  min-width: 100px;\n\n  grid-column: inputs;\n  grid-row: auto;\n\n  font-family: inherit;\n  font-style: inherit;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 1.33;\n  letter-spacing: 0.04em;\n\n  padding-top: 3px;\n  padding-bottom: 3px;\n\n  padding-left: 18px;\n  border: 1px solid #ffffff;\n  border-radius: 40px;\n  outline: none;\n  color: #111111;\n\n  transition: background-color 250ms linear;\n  transition: border 250ms linear;\n\n  &:hover,\n  &:focus {\n    background-color: #fdf7f2;\n    border: 1px solid rgba(245, 146, 86, 0.5);\n  }\n\n  @media "," {\n    font-size: 18px;\n    line-height: 1.39;\n\n    width: 216px;\n  }\n"])),(function(n){return n.theme.device.tablet})),bn=d.ZP.button(X||(X=(0,c.Z)(["\n  grid-column: buttons;\n  grid-row: auto;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  padding: 0;\n  margin: 0;\n  /* border: none; */\n\n  width: 20px;\n  height: 20px;\n\n  border-radius: ",";\n\n  background: #fdf7f2;\n\n  backdrop-filter: blur(2px);\n\n  cursor: pointer;\n\n  @media "," {\n    width: 32px;\n    height: 32px;\n  }\n"])),(function(n){return n.theme.radii.round}),(function(n){return n.theme.device.tablet})),yn=(0,d.ZP)(R)(nn||(nn=(0,c.Z)(["\n  background-repeat: no-repeat;\n  width: 12.5px;\n  height: 12.5px;\n\n  fill: rgba(17, 17, 17, 0.6);\n\n  @media "," {\n    width: 20px;\n    height: 20px;\n  }\n"])),(function(n){return n.theme.device.tablet})),vn=((0,d.ZP)(z.Bc)(en||(en=(0,c.Z)(["\n  /* color: tomato; */\n"]))),t(3585)),jn=["title","titleId"];function wn(){return wn=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},wn.apply(this,arguments)}function Zn(n,e){if(null==n)return{};var t,i,r=function(n,e){if(null==n)return{};var t,i,r={},o=Object.keys(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}function kn(n,e){var t=n.title,i=n.titleId,r=Zn(n,jn);return M.createElement("svg",wn({xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",ref:e,"aria-labelledby":i},r),t?M.createElement("title",{id:i},t):null,tn||(tn=M.createElement("g",{clipPath:"url(#a)",opacity:.6},M.createElement("path",{fill:"#F59256",stroke:"#F59256",d:"M15.305 6.571c.08-.079.208-.08.287 0l1.575 1.575c.49.49.49 1.288 0 1.779l-1.575 1.574a.2.2 0 0 1-.143.06.203.203 0 0 1-.144-.347l1.12-1.12.853-.854H7.63a.203.203 0 1 1 0-.406H17.278l-.853-.854-1.12-1.12a.203.203 0 0 1 0-.287Zm-3.078 7.21v1.406A2.316 2.316 0 0 1 9.914 17.5H2.848a2.316 2.316 0 0 1-2.313-2.313V2.813A2.316 2.316 0 0 1 2.848.5h7.066a2.316 2.316 0 0 1 2.313 2.313v1.406a.203.203 0 1 1-.407 0V2.812A1.908 1.908 0 0 0 9.914.907H2.848A1.908 1.908 0 0 0 .94 2.812v12.376c0 1.051.855 1.906 1.907 1.906h7.066a1.908 1.908 0 0 0 1.906-1.907v-1.406a.203.203 0 1 1 .407 0Z"}))),rn||(rn=M.createElement("defs",null,M.createElement("clipPath",{id:"a"},M.createElement("path",{fill:"#fff",d:"M0 0h18v18H0z"})))))}var Pn,On,zn,En,Mn,Sn,In,Fn,An,Cn=M.forwardRef(kn),Hn=(t.p,d.ZP.button(Pn||(Pn=(0,c.Z)(["\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n\n  margin-left: auto;\n\n  border: none;\n  background: none;\n  cursor: pointer;\n\n  font-size: 16px;\n  line-height: 1.38;\n  letter-spacing: 0.04em;\n  color: rgba(17, 17, 17, 0.6);\n\n  @media "," {\n    margin-left: 0;\n  }\n"])),(function(n){return n.theme.device.tablet}))),Rn=(0,d.ZP)(Cn)(On||(On=(0,c.Z)(["\n  margin-right: 8px;\n"]))),Vn=t(7349),_n=function(){var n=(0,f.I0)();return(0,y.jsxs)(Hn,{onClick:function(){return n((0,Vn.kS)())},children:[(0,y.jsx)(Rn,{}),(0,y.jsx)("span",{children:"Log Out"})]})},Ln=E.Ry().shape({name:E.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required(),phone:E.Z_().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required()}),Bn={name:"",email:"",birthday:"",phone:"",city:""},Nn=function(){return(0,y.jsxs)(an,{children:[(0,y.jsx)(ln,{children:(0,y.jsxs)(cn,{children:[(0,y.jsx)(dn,{src:vn,alt:"User avatar",loading:"lazy",width:"233",height:"233"}),(0,y.jsxs)(sn,{htmlFor:"user-photo",children:[(0,y.jsx)(pn,{id:"user-photo",type:"file",accept:"image/*",name:"user-photo"}),(0,y.jsx)(un,{children:(0,y.jsx)(hn,{})}),(0,y.jsx)("span",{name:"image",children:"Edit photo"})]})]})}),(0,y.jsxs)(fn,{children:[(0,y.jsx)(z.J9,{initialValues:Bn,validationSchema:Ln,children:(0,y.jsxs)(mn,{autoComplete:"off",children:[(0,y.jsx)(xn,{htmlFor:"name",children:"Name:"}),(0,y.jsx)(gn,{type:"text",name:"name",value:"Anna"}),(0,y.jsx)(bn,{type:"button",children:(0,y.jsx)(yn,{})}),(0,y.jsx)(xn,{htmlFor:"email",children:"Email:"}),(0,y.jsx)(gn,{type:"text",name:"email",value:"anna00@gmail.com"}),(0,y.jsx)(bn,{type:"button",children:(0,y.jsx)(yn,{})}),(0,y.jsx)(xn,{htmlFor:"birthday",children:"Birthday:"}),(0,y.jsx)(gn,{type:"text",name:"birthday",value:"00.00.0000"}),(0,y.jsx)(bn,{type:"button",children:(0,y.jsx)(yn,{})}),(0,y.jsx)(xn,{htmlFor:"phone",children:"Phone:"}),(0,y.jsx)(gn,{type:"tel",name:"phone",value:"+38000000000"}),(0,y.jsx)(bn,{type:"button",children:(0,y.jsx)(yn,{})}),(0,y.jsx)(xn,{htmlFor:"city",children:"City:"}),(0,y.jsx)(gn,{type:"text",name:"city",value:"Kiev"}),(0,y.jsx)(bn,{type:"button",children:(0,y.jsx)(yn,{})})]})}),(0,y.jsx)(_n,{})]})]})},Wn=t(8304),qn=d.ZP.main(zn||(zn=(0,c.Z)(["\n  font-family: ",";\n  font-style: normal;\n  padding-top: 60px; // check this\n  padding-bottom: 80px; // check this\n  padding-left: 20px;\n  padding-right: 20px;\n  /* margin-left: auto;\n  margin-right: auto; */\n\n  @media "," {\n    padding-top: 80px; // check this\n    padding-bottom: 100px; // check this\n    padding-left: 32px;\n    padding-right: 32px;\n  }\n\n  @media "," {\n    display: flex;\n    padding-top: 50px; // check this\n    padding-bottom: 40px; // check this\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"])),(function(n){return n.theme.fonts.body}),(function(n){return n.theme.device.tablet}),(function(n){return n.theme.device.desktop})),Jn=d.ZP.div(En||(En=(0,c.Z)(["\n  /* display: flex; */\n"]))),Un=d.ZP.h2(Mn||(Mn=(0,c.Z)(["\n  display: flex;\n  align-items: center;\n\n  margin-bottom: 18px;\n\n  font-family: inherit;\n  font-style: inherit;\n  font-weight: ",";\n  font-size: ","px;\n  line-height: 1.35;\n  letter-spacing: 0.04em;\n\n  color: #111111;\n\n  @media "," {\n    font-size: 28px;\n    line-height: 1.36;\n\n    margin-bottom: 40px;\n  }\n\n  @media "," {\n    margin-bottom: 40px;\n  }\n"])),(function(n){return n.theme.fontWeights.medium}),(function(n){return n.theme.fontSizes[4]}),(function(n){return n.theme.device.tablet}),(function(n){return n.theme.device.desktop})),Dn=d.ZP.section(Sn||(Sn=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  /* gap: 20px; */\n"]))),Kn=(d.ZP.div(In||(In=(0,c.Z)(["\n  display: inline-block;\n\n  height: 400px;\n  width: 100%;\n\n  background-color: #ffffff;\n  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);\n  border-radius: ",";\n"])),(function(n){return n.theme.radii.normal})),d.ZP.div(Fn||(Fn=(0,c.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  @media "," {\n    font-size: 28px;\n    line-height: 38px;\n\n    margin-bottom: 24px;\n  }\n"])),(function(n){return n.theme.device.desktop})),d.ZP.h2(An||(An=(0,c.Z)(["\n  display: flex;\n  align-items: center;\n\n  font-family: inherit;\n  font-style: inherit;\n  font-weight: ",";\n  font-size: ","px;\n  line-height: 27px;\n  letter-spacing: 0.04em;\n\n  color: #111111;\n\n  @media "," {\n    font-size: 28px;\n    line-height: 38px;\n  }\n"])),(function(n){return n.theme.fontWeights.medium}),(function(n){return n.theme.fontSizes[4]}),(function(n){return n.theme.device.desktop})),t(5985)),Tn=function(){var n=(0,f.I0)(),e=(0,f.v9)(x),t=(0,f.v9)(g);return(0,M.useEffect)((function(){n((0,Wn.i)())}),[n]),(0,y.jsxs)(qn,{children:[(0,y.jsxs)(Jn,{children:[(0,y.jsx)(Un,{children:"My Information:"}),(0,y.jsx)(Nn,{})]}),(0,y.jsx)(Dn,{children:(0,y.jsx)(O,{})}),e&&(0,y.jsx)("b",{children:" Loading..."}),t&&Kn.Am.error("Something wrong :( Please, try again later!")]})}},3585:function(n,e,t){n.exports=t.p+"static/media/temp-avatar.416e05ba97c2d8a86f69.jpg"}}]);
//# sourceMappingURL=50.ff367cdb.chunk.js.map