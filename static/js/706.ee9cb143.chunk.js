"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[706],{8182:function(t,e,n){function o(t){var e,n,a="";if("string"==typeof t||"number"==typeof t)a+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=o(t[e]))&&(a&&(a+=" "),a+=n);else for(e in t)t[e]&&(a&&(a+=" "),a+=e);return a}e.Z=function(){for(var t,e,n=0,a="";n<arguments.length;)(t=arguments[n++])&&(e=o(t))&&(a&&(a+=" "),a+=e);return a}},3853:function(t,e,n){n.d(e,{$aX:function(){return a}});var o=n(9983);function a(t){return(0,o.w_)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"}}]})(t)}},3479:function(t,e,n){n.d(e,{_YF:function(){return a}});var o=n(9983);function a(t){return(0,o.w_)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z",clipRule:"evenodd"}}]})(t)}},5462:function(){},5985:function(t,e,n){n.d(e,{Am:function(){return H},Ix:function(){return k}});var o=n(4942),a=n(9439),r=n(1413),i=n(5987),s=n(3433),c=n(2791),u=n(8182),l=["theme","type"],d=["delay","staleId"],f=function(t){return"number"==typeof t&&!isNaN(t)},p=function(t){return"string"==typeof t},m=function(t){return"function"==typeof t},v=function(t){return p(t)||m(t)?t:null},g=function(t){return(0,c.isValidElement)(t)||p(t)||m(t)||f(t)};function h(t){var e=t.enter,n=t.exit,o=t.appendPosition,a=void 0!==o&&o,r=t.collapse,i=void 0===r||r,u=t.collapseDuration,l=void 0===u?300:u;return function(t){var o=t.children,r=t.position,u=t.preventExitTransition,d=t.done,f=t.nodeRef,p=t.isIn,m=a?"".concat(e,"--").concat(r):e,v=a?"".concat(n,"--").concat(r):n,g=(0,c.useRef)(0);return(0,c.useLayoutEffect)((function(){var t,e=f.current,n=m.split(" "),o=function t(o){var a;o.target===f.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",t),e.removeEventListener("animationcancel",t),0===g.current&&"animationcancel"!==o.type&&(a=e.classList).remove.apply(a,(0,s.Z)(n)))};(t=e.classList).add.apply(t,(0,s.Z)(n)),e.addEventListener("animationend",o),e.addEventListener("animationcancel",o)}),[]),(0,c.useEffect)((function(){var t=f.current,e=function e(){t.removeEventListener("animationend",e),i?function(t,e,n){void 0===n&&(n=300);var o=t.scrollHeight,a=t.style;requestAnimationFrame((function(){a.minHeight="initial",a.height=o+"px",a.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){a.height="0",a.padding="0",a.margin="0",setTimeout(e,n)}))}))}(t,d,l):d()};p||(u?e():(g.current=1,t.className+=" ".concat(v),t.addEventListener("animationend",e)))}),[p]),c.createElement(c.Fragment,null,o)}}function y(t,e){return{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}}var T={list:new Map,emitQueue:new Map,on:function(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off:function(t,e){if(e){var n=this.list.get(t).filter((function(t){return t!==e}));return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit:function(t){var e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit:function(t){var e=arguments,n=this;this.list.has(t)&&this.list.get(t).forEach((function(o){var a=setTimeout((function(){o.apply(void 0,(0,s.Z)([].slice.call(e,1)))}),0);n.emitQueue.has(t)||n.emitQueue.set(t,[]),n.emitQueue.get(t).push(a)}))}},E=function(t){var e=t.theme,n=t.type,o=(0,i.Z)(t,l);return c.createElement("svg",(0,r.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===e?"currentColor":"var(--toastify-icon-color-".concat(n,")")},o))},C={info:function(t){return c.createElement(E,(0,r.Z)({},t),c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return c.createElement(E,(0,r.Z)({},t),c.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return c.createElement(E,(0,r.Z)({},t),c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return c.createElement(E,(0,r.Z)({},t),c.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return c.createElement("div",{className:"Toastify__spinner"})}};function Z(t){var e=(0,c.useReducer)((function(t){return t+1}),0),n=(0,a.Z)(e,2)[1],o=(0,c.useState)([]),u=(0,a.Z)(o,2),l=u[0],h=u[1],E=(0,c.useRef)(null),Z=(0,c.useRef)(new Map).current,_=function(t){return-1!==l.indexOf(t)},b=(0,c.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:_,getToast:function(t){return Z.get(t)}}).current;function I(t){var e=t.containerId;!b.props.limit||e&&b.containerId!==e||(b.count-=b.queue.length,b.queue=[])}function L(t){h((function(e){return null==t?[]:e.filter((function(e){return e!==t}))}))}function O(){var t=b.queue.shift();N(t.toastContent,t.toastProps,t.staleId)}function R(t,e){var o=e.delay,a=e.staleId,s=(0,i.Z)(e,d);if(g(t)&&!function(t){return!E.current||b.props.enableMultiContainer&&t.containerId!==b.props.containerId||Z.has(t.toastId)&&null==t.updateId}(s)){var u=s.toastId,l=s.updateId,h=s.data,_=b.props,I=function(){return L(u)},R=null==l;R&&b.count++;var w,k,M=(0,r.Z)((0,r.Z)((0,r.Z)({},_),{},{style:_.toastStyle,key:b.toastKey++},s),{},{toastId:u,updateId:l,data:h,closeToast:I,isIn:!1,className:v(s.className||_.toastClassName),bodyClassName:v(s.bodyClassName||_.bodyClassName),progressClassName:v(s.progressClassName||_.progressClassName),autoClose:!s.isLoading&&(w=s.autoClose,k=_.autoClose,!1===w||f(w)&&w>0?w:k),deleteToast:function(){var t=y(Z.get(u),"removed");Z.delete(u),T.emit(4,t);var e=b.queue.length;if(b.count=null==u?b.count-b.displayedToast:b.count-1,b.count<0&&(b.count=0),e>0){var o=null==u?b.props.limit:1;if(1===e||1===o)b.displayedToast++,O();else{var a=o>e?e:o;b.displayedToast=a;for(var r=0;r<a;r++)O()}}else n()}});M.iconOut=function(t){var e=t.theme,n=t.type,o=t.isLoading,a=t.icon,r=null,i={theme:e,type:n};return!1===a||(m(a)?r=a(i):(0,c.isValidElement)(a)?r=(0,c.cloneElement)(a,i):p(a)||f(a)?r=a:o?r=C.spinner():function(t){return t in C}(n)&&(r=C[n](i))),r}(M),m(s.onOpen)&&(M.onOpen=s.onOpen),m(s.onClose)&&(M.onClose=s.onClose),M.closeButton=_.closeButton,!1===s.closeButton||g(s.closeButton)?M.closeButton=s.closeButton:!0===s.closeButton&&(M.closeButton=!g(_.closeButton)||_.closeButton);var x=t;(0,c.isValidElement)(t)&&!p(t.type)?x=(0,c.cloneElement)(t,{closeToast:I,toastProps:M,data:h}):m(t)&&(x=t({closeToast:I,toastProps:M,data:h})),_.limit&&_.limit>0&&b.count>_.limit&&R?b.queue.push({toastContent:x,toastProps:M,staleId:a}):f(o)?setTimeout((function(){N(x,M,a)}),o):N(x,M,a)}}function N(t,e,n){var o=e.toastId;n&&Z.delete(n);var a={content:t,props:e};Z.set(o,a),h((function(t){return[].concat((0,s.Z)(t),[o]).filter((function(t){return t!==n}))})),T.emit(4,y(a,null==a.props.updateId?"added":"updated"))}return(0,c.useEffect)((function(){return b.containerId=t.containerId,T.cancelEmit(3).on(0,R).on(1,(function(t){return E.current&&L(t)})).on(5,I).emit(2,b),function(){Z.clear(),T.emit(3,b)}}),[]),(0,c.useEffect)((function(){b.props=t,b.isToastActive=_,b.displayedToast=l.length})),{getToastToRender:function(e){var n=new Map,o=Array.from(Z.values());return t.newestOnTop&&o.reverse(),o.forEach((function(t){var e=t.props.position;n.has(e)||n.set(e,[]),n.get(e).push(t)})),Array.from(n,(function(t){return e(t[0],t[1])}))},containerRef:E,isToastActive:_}}function _(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function b(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function I(t){var e=(0,c.useState)(!1),n=(0,a.Z)(e,2),o=n[0],r=n[1],i=(0,c.useState)(!1),s=(0,a.Z)(i,2),u=s[0],l=s[1],d=(0,c.useRef)(null),f=(0,c.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,c.useRef)(t),v=t.autoClose,g=t.pauseOnHover,h=t.closeToast,y=t.onClick,T=t.closeOnClick;function E(e){if(t.draggable){"touchstart"===e.nativeEvent.type&&e.nativeEvent.preventDefault(),f.didMove=!1,document.addEventListener("mousemove",L),document.addEventListener("mouseup",O),document.addEventListener("touchmove",L),document.addEventListener("touchend",O);var n=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=_(e.nativeEvent),f.y=b(e.nativeEvent),"x"===t.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(t.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===t.draggablePercent?1.5*t.draggablePercent:t.draggablePercent/100))}}function C(e){if(f.boundingRect){var n=f.boundingRect,o=n.top,a=n.bottom,r=n.left,i=n.right;"touchend"!==e.nativeEvent.type&&t.pauseOnHover&&f.x>=r&&f.x<=i&&f.y>=o&&f.y<=a?I():Z()}}function Z(){r(!0)}function I(){r(!1)}function L(e){var n=d.current;f.canDrag&&n&&(f.didMove=!0,o&&I(),f.x=_(e),f.y=b(e),f.delta="x"===t.draggableDirection?f.x-f.start:f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate".concat(t.draggableDirection,"(").concat(f.delta,"px)"),n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function O(){document.removeEventListener("mousemove",L),document.removeEventListener("mouseup",O),document.removeEventListener("touchmove",L),document.removeEventListener("touchend",O);var e=d.current;if(f.canDrag&&f.didMove&&e){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return l(!0),void t.closeToast();e.style.transition="transform 0.2s, opacity 0.2s",e.style.transform="translate".concat(t.draggableDirection,"(0)"),e.style.opacity="1"}}(0,c.useEffect)((function(){p.current=t})),(0,c.useEffect)((function(){return d.current&&d.current.addEventListener("d",Z,{once:!0}),m(t.onOpen)&&t.onOpen((0,c.isValidElement)(t.children)&&t.children.props),function(){var t=p.current;m(t.onClose)&&t.onClose((0,c.isValidElement)(t.children)&&t.children.props)}}),[]),(0,c.useEffect)((function(){return t.pauseOnFocusLoss&&(document.hasFocus()||I(),window.addEventListener("focus",Z),window.addEventListener("blur",I)),function(){t.pauseOnFocusLoss&&(window.removeEventListener("focus",Z),window.removeEventListener("blur",I))}}),[t.pauseOnFocusLoss]);var R={onMouseDown:E,onTouchStart:E,onMouseUp:C,onTouchEnd:C};return v&&g&&(R.onMouseEnter=I,R.onMouseLeave=Z),T&&(R.onClick=function(t){y&&y(t),f.canCloseOnClick&&h()}),{playToast:Z,pauseToast:I,isRunning:o,preventExitTransition:u,toastRef:d,eventHandlers:R}}function L(t){var e=t.closeToast,n=t.theme,o=t.ariaLabel,a=void 0===o?"close":o;return c.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(t){t.stopPropagation(),e(t)},"aria-label":a},c.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},c.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function O(t){var e=t.delay,n=t.isRunning,a=t.closeToast,i=t.type,s=void 0===i?"default":i,l=t.hide,d=t.className,f=t.style,p=t.controlledProgress,v=t.progress,g=t.rtl,h=t.isIn,y=t.theme,T=l||p&&0===v,E=(0,r.Z)((0,r.Z)({},f),{},{animationDuration:"".concat(e,"ms"),animationPlayState:n?"running":"paused",opacity:T?0:1});p&&(E.transform="scaleX(".concat(v,")"));var C=(0,u.Z)("Toastify__progress-bar",p?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(y),"Toastify__progress-bar--".concat(s),{"Toastify__progress-bar--rtl":g}),Z=m(d)?d({rtl:g,type:s,defaultClassName:C}):(0,u.Z)(C,d);return c.createElement("div",(0,o.Z)({role:"progressbar","aria-hidden":T?"true":"false","aria-label":"notification timer",className:Z,style:E},p&&v>=1?"onTransitionEnd":"onAnimationEnd",p&&v<1?null:function(){h&&a()}))}var R=function(t){var e=I(t),n=e.isRunning,o=e.preventExitTransition,a=e.toastRef,i=e.eventHandlers,s=t.closeButton,l=t.children,d=t.autoClose,f=t.onClick,p=t.type,v=t.hideProgressBar,g=t.closeToast,h=t.transition,y=t.position,T=t.className,E=t.style,C=t.bodyClassName,Z=t.bodyStyle,_=t.progressClassName,b=t.progressStyle,R=t.updateId,N=t.role,w=t.progress,k=t.rtl,M=t.toastId,x=t.deleteToast,B=t.isIn,z=t.isLoading,A=t.iconOut,P=t.closeOnClick,D=t.theme,F=(0,u.Z)("Toastify__toast","Toastify__toast-theme--".concat(D),"Toastify__toast--".concat(p),{"Toastify__toast--rtl":k},{"Toastify__toast--close-on-click":P}),S=m(T)?T({rtl:k,position:y,type:p,defaultClassName:F}):(0,u.Z)(F,T),H=!!w||!d,q={closeToast:g,type:p,theme:D},Q=null;return!1===s||(Q=m(s)?s(q):(0,c.isValidElement)(s)?(0,c.cloneElement)(s,q):L(q)),c.createElement(h,{isIn:B,done:x,position:y,preventExitTransition:o,nodeRef:a},c.createElement("div",(0,r.Z)((0,r.Z)({id:M,onClick:f,className:S},i),{},{style:E,ref:a}),c.createElement("div",(0,r.Z)((0,r.Z)({},B&&{role:N}),{},{className:m(C)?C({type:p}):(0,u.Z)("Toastify__toast-body",C),style:Z}),null!=A&&c.createElement("div",{className:(0,u.Z)("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!z})},A),c.createElement("div",null,l)),Q,c.createElement(O,(0,r.Z)((0,r.Z)({},R&&!H?{key:"pb-".concat(R)}:{}),{},{rtl:k,theme:D,delay:d,isRunning:n,isIn:B,closeToast:g,hide:v,type:p,style:b,className:_,controlledProgress:H,progress:w||0}))))},N=function(t,e){return void 0===e&&(e=!1),{enter:"Toastify--animate Toastify__".concat(t,"-enter"),exit:"Toastify--animate Toastify__".concat(t,"-exit"),appendPosition:e}},w=h(N("bounce",!0)),k=(h(N("slide",!0)),h(N("zoom")),h(N("flip")),(0,c.forwardRef)((function(t,e){var n=Z(t),o=n.getToastToRender,a=n.containerRef,i=n.isToastActive,s=t.className,l=t.style,d=t.rtl,f=t.containerId;function p(t){var e=(0,u.Z)("Toastify__toast-container","Toastify__toast-container--".concat(t),{"Toastify__toast-container--rtl":d});return m(s)?s({position:t,rtl:d,defaultClassName:e}):(0,u.Z)(e,v(s))}return(0,c.useEffect)((function(){e&&(e.current=a.current)}),[]),c.createElement("div",{ref:a,className:"Toastify",id:f},o((function(t,e){var n=e.length?(0,r.Z)({},l):(0,r.Z)((0,r.Z)({},l),{},{pointerEvents:"none"});return c.createElement("div",{className:p(t),style:n,key:"container-".concat(t)},e.map((function(t,n){var o=t.content,a=t.props;return c.createElement(R,(0,r.Z)((0,r.Z)({},a),{},{isIn:i(a.toastId),style:(0,r.Z)((0,r.Z)({},a.style),{},{"--nth":n+1,"--len":e.length}),key:"toast-".concat(a.key)}),o)})))})))})));k.displayName="ToastContainer",k.defaultProps={position:"top-right",transition:w,autoClose:5e3,closeButton:L,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var M,x=new Map,B=[],z=1;function A(){return""+z++}function P(t){return t&&(p(t.toastId)||f(t.toastId))?t.toastId:A()}function D(t,e){return x.size>0?T.emit(0,t,e):B.push({content:t,options:e}),e.toastId}function F(t,e){return(0,r.Z)((0,r.Z)({},e),{},{type:e&&e.type||t,toastId:P(e)})}function S(t){return function(e,n){return D(e,F(t,n))}}function H(t,e){return D(t,F("default",e))}H.loading=function(t,e){return D(t,F("default",(0,r.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},e)))},H.promise=function(t,e,n){var o,a=e.pending,i=e.error,s=e.success;a&&(o=p(a)?H.loading(a,n):H.loading(a.render,(0,r.Z)((0,r.Z)({},n),a)));var c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},u=function(t,e,a){if(null!=e){var i=(0,r.Z)((0,r.Z)((0,r.Z)({type:t},c),n),{},{data:a}),s=p(e)?{render:e}:e;return o?H.update(o,(0,r.Z)((0,r.Z)({},i),s)):H(s.render,(0,r.Z)((0,r.Z)({},i),s)),a}H.dismiss(o)},l=m(t)?t():t;return l.then((function(t){return u("success",s,t)})).catch((function(t){return u("error",i,t)})),l},H.success=S("success"),H.info=S("info"),H.error=S("error"),H.warning=S("warning"),H.warn=H.warning,H.dark=function(t,e){return D(t,F("default",(0,r.Z)({theme:"dark"},e)))},H.dismiss=function(t){x.size>0?T.emit(1,t):B=B.filter((function(e){return null!=t&&e.options.toastId!==t}))},H.clearWaitingQueue=function(t){return void 0===t&&(t={}),T.emit(5,t)},H.isActive=function(t){var e=!1;return x.forEach((function(n){n.isToastActive&&n.isToastActive(t)&&(e=!0)})),e},H.update=function(t,e){void 0===e&&(e={}),setTimeout((function(){var n=function(t,e){var n=e.containerId,o=x.get(n||M);return o&&o.getToast(t)}(t,e);if(n){var o=n.props,a=n.content,i=(0,r.Z)((0,r.Z)((0,r.Z)({},o),e),{},{toastId:e.toastId||t,updateId:A()});i.toastId!==t&&(i.staleId=t);var s=i.render||a;delete i.render,D(s,i)}}),0)},H.done=function(t){H.update(t,{progress:1})},H.onChange=function(t){return T.on(4,t),function(){T.off(4,t)}},H.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},H.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},T.on(2,(function(t){M=t.containerId||t,x.set(M,t),B.forEach((function(t){T.emit(0,t.content,t.options)})),B=[]})).on(3,(function(t){x.delete(t.containerId||t),0===x.size&&T.off(0).off(1).off(5)}))}}]);
//# sourceMappingURL=706.ee9cb143.chunk.js.map