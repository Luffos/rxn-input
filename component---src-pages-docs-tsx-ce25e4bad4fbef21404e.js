"use strict";(self.webpackChunkrxn_input_website=self.webpackChunkrxn_input_website||[]).push([[962],{354:function(e){var n=function(e){};e.exports=function(e,t){for(var r=arguments.length,i=new Array(r>2?r-2:0),o=2;o<r;o++)i[o-2]=arguments[o];if(n(t),!e){var u;if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var a=0;(u=new Error(t.replace(/%s/g,(function(){return String(i[a++])})))).name="Invariant Violation"}throw u.framesToPop=1,u}}},6469:function(e,n,t){function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.d(n,{ZP:function(){return w}});var i=t(354),o=t.n(i),u=!("undefined"==typeof window||!window.document||!window.document.createElement),a={window:{fontScale:1,height:0,scale:1,width:0},screen:{fontScale:1,height:0,scale:1,width:0}},c={},l=u,f=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,i;return n=e,i=[{key:"get",value:function(n){return l&&(l=!1,e._update()),o()(a[n],"No dimension set for key "+n),a[n]}},{key:"set",value:function(e){e&&(u?o()(!1,"Dimensions cannot be set in the browser"):(null!=e.screen&&(a.screen=e.screen),null!=e.window&&(a.window=e.window)))}},{key:"_update",value:function(){if(u){var e=window,n=e.document.documentElement;a.window={fontScale:1,height:n.clientHeight,scale:e.devicePixelRatio||1,width:n.clientWidth},a.screen={fontScale:1,height:e.screen.height,scale:e.devicePixelRatio||1,width:e.screen.width},Array.isArray(c.change)&&c.change.forEach((function(e){return e(a)}))}}},{key:"addEventListener",value:function(e,n){var t=this;return c[e]=c[e]||[],c[e].push(n),{remove:function(){t.removeEventListener(e,n)}}}},{key:"removeEventListener",value:function(e,n){Array.isArray(c[e])&&(c[e]=c[e].filter((function(e){return e!==n})))}}],(t=null)&&r(n.prototype,t),i&&r(n,i),Object.defineProperty(n,"prototype",{writable:!1}),e}();u&&window.addEventListener("resize",f._update,!1);var d=t(7294);var w=function(){var e,n,t,r=(e=(0,d.useState)((function(){return f.get("window")})),n=e[0],t=e[1],(0,d.useEffect)((function(){function e(e){var n=e.window;null!=n&&t(n)}return f.addEventListener("change",e),t(f.get("window")),function(){f.removeEventListener("change",e)}}),[]),n),i=r.width,o=r.height;return{vw:function(e){return function(e,n){return(n||f.get("window").width)*(e/100)}(e,i)},vh:function(e){return function(e,n){return(n||f.get("window").height)*(e/100)}(e,o)},vmin:function(e){return function(e,n,t){return Math.min((n||f.get("window").width)*(null!=e?e/100:1),(t||f.get("window").height)*(null!=e?e/100:1))}(e,i,o)},vmax:function(e){return function(e,n,t){return Math.max((n||f.get("window").width)*(null!=e?e/100:1),(t||f.get("window").height)*(null!=e?e/100:1))}(e,i,o)},percentage:function(e,n){return function(e,n){return n*e/100}(e,n)}}}},4490:function(e,n,t){t.r(n),t.d(n,{Head:function(){return c},default:function(){return a}});var r=t(7294),i=t(6469),o=t(2352);var u=function(e){e.pageContext,e.children;var n=(0,i.ZP)();return n.vmin,n.vw,n.vh,r.createElement(r.Fragment,null,r.createElement(o.Z,{SelectedPage:"DOCS",MobileExtraTopBar:r.createElement("h1",null,"Test test")},r.createElement("div",{style:{marginTop:140}},r.createElement("h1",{style:{textAlign:"center",fontSize:"1rem"}},"Working on it..."))))},a=function(){return r.createElement(u,null)},c=function(){return r.createElement("title",null,"RXN Input - Documentation")}}}]);
//# sourceMappingURL=component---src-pages-docs-tsx-ce25e4bad4fbef21404e.js.map