(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{204:function(n,e,t){n.exports=t(412)},412:function(n,e,t){"use strict";t.r(e);t(205),t(214);var a=t(0),r=t.n(a),o=t(94),i=t.n(o),l=t(48),c=t(193),u=t(28),m=(t(407),t(95)),d=t(194),f=t.n(d),x=t(61),p=t(62),s=function(n,e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,a=arguments.length>1?arguments[1]:void 0,r=a.type,o=a.payload;return Object.prototype.hasOwnProperty.call(e,r)?"function"===typeof e[r]?e[r](t,o):e[r]:t}},b=s({width:window.innerWidth,height:window.innerHeight},Object(x.a)({},"SET_DIMENSIONS",(function(n,e){var t=e.width,a=e.height;return Object(p.a)(Object(p.a)({},n),{},{width:t,height:a})}))),h=t(56),E=t.n(h),g=function(n,e,t){var a=E()(n||"0"),r=E()(e||("\xf7"===t||"x"===t?"1":"0"));if("+"===t)return a.plus(r).toString();if("-"===t)return a.minus(r).toString();if("x"===t)return a.times(r).toString();if("\xf7"===t)return"0"===e?"0":a.div(r).toString();throw Error("Unknown operation '".concat(t,"'"))},v=s({total:null,next:null,operation:null},Object(x.a)({},"CALCULATE",(function(n,e){return Object(p.a)(Object(p.a)({},n),function(n,e){if("AC"===e)return{total:null,next:null,operation:null};if(/[0-9]+/.test(e))return"0"===e&&"0"===n.next?{}:n.operation?n.next?{next:n.next+e}:{next:e}:n.next?{next:"0"===n.next?e:n.next+e,total:null}:{next:e,total:null};if("%"===e){if(n.operation&&n.next){var t=g(n.total,n.next,n.operation);return{total:E()(t).div(E()("100")).toString(),next:null,operation:null}}return n.next?{next:E()(n.next).div(E()("100")).toString()}:{}}return"."===e?n.next?n.next.includes(".")?{}:{next:n.next+"."}:{next:"0."}:"="===e?n.next&&n.operation?{total:g(n.total,n.next,n.operation),next:null,operation:null}:{}:"+/-"===e?n.next?{next:(-1*parseFloat(n.next)).toString()}:n.total?{total:(-1*parseFloat(n.total)).toString()}:{}:n.operation?{total:g(n.total,n.next,n.operation),next:null,operation:e}:n.next?{total:n.next,next:null,operation:e}:{operation:e}}(n,e))}))),w={storage:f.a,key:"root",whitelist:[]},O=Object(u.combineReducers)({dimensions:b,calculate:v}),j=Object(m.a)(w,O),y=Object(u.compose)(u.applyMiddleware.apply(void 0,[])),S=Object(u.createStore)(j,y),k=Object(m.b)(S),z=t(202),C=t(418),A=t(16),L={},I=function(n){var e=n.children;return r.a.createElement(A.ThemeProvider,{theme:L},e)},T=t(419),D=t(77),N=function(n){return n.calculate},F=Object(D.a)([N],(function(n){return n.total})),M=Object(D.a)([N],(function(n){return n.next})),U=t(23);function H(){var n=Object(U.a)(["\n  font-size: 2.5rem;\n  padding: 0.2rem 0.7rem 0.1rem 0.5rem;\n"]);return H=function(){return n},n}function J(){var n=Object(U.a)(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  background-color: #858694;\n  color: white;\n  font-weight: 200;\n  flex: 0 0 auto;\n  width: 100%;\n  height: calc(100% / 6);\n"]);return J=function(){return n},n}var P=A.default.div(J()),W=A.default.div(H()),_=Object(D.b)({total:F,next:M}),B=Object(l.b)(_)((function(n){var e=n.total,t=n.next;return r.a.createElement(P,null,r.a.createElement(W,null,t||e||0))})),G=t(203);function R(){var n=Object(U.a)(["\n  display: inline-flex;\n  width: 25%;\n  flex: 1 0 auto;\n\n  button {\n    background-color: #e0e0e0;\n    border: 1px solid transparent;\n    font-size: 1.5rem;\n    margin: 0 1px 0 0;\n    flex: 1 0 auto;\n    padding: 0;\n\n    &:focus {\n      border: 1px solid black;\n      outline: none;\n    }\n  }\n\n  &:last-child button {\n    margin-right: 0;\n  }\n\n  ","\n"]);return R=function(){return n},n}function q(){var n=Object(U.a)(["\n  button {\n    background-color: #f5923e;\n    color: white;\n  }\n"]);return q=function(){return n},n}function K(){var n=Object(U.a)(["\n  width: 50%;\n"]);return K=function(){return n},n}var Q=Object(A.css)(K()),V=Object(A.css)(q()),X=A.default.div(R(),(function(n){var e=n.wide,t=n.orange;return e?Q:t?V:null})),Y=Object(l.b)(null,{calculate:function(n){return{type:"CALCULATE",payload:n}}})((function(n){var e=n.name,t=n.calculate,a=Object(G.a)(n,["name","calculate"]);return r.a.createElement(X,a,r.a.createElement("button",{onClick:function(){return t(e)}},e))}));function Z(){var n=Object(U.a)(["\n  background-color: #858694;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  flex: 1 0 auto;\n\n  > div {\n    width: 100%;\n    margin-bottom: 1px;\n    flex: 1 0 auto;\n    display: flex;\n  }\n"]);return Z=function(){return n},n}var $=A.default.div(Z()),nn=function(){return r.a.createElement($,null,r.a.createElement("div",null,r.a.createElement(Y,{name:"AC"}),r.a.createElement(Y,{name:"+/-"}),r.a.createElement(Y,{name:"%"}),r.a.createElement(Y,{name:"\xf7",orange:!0})),r.a.createElement("div",null,r.a.createElement(Y,{name:"7"}),r.a.createElement(Y,{name:"8"}),r.a.createElement(Y,{name:"9"}),r.a.createElement(Y,{name:"x",orange:!0})),r.a.createElement("div",null,r.a.createElement(Y,{name:"4"}),r.a.createElement(Y,{name:"5"}),r.a.createElement(Y,{name:"6"}),r.a.createElement(Y,{name:"-",orange:!0})),r.a.createElement("div",null,r.a.createElement(Y,{name:"1"}),r.a.createElement(Y,{name:"2"}),r.a.createElement(Y,{name:"3"}),r.a.createElement(Y,{name:"+",orange:!0})),r.a.createElement("div",null,r.a.createElement(Y,{name:"0",wide:!0}),r.a.createElement(Y,{name:"."}),r.a.createElement(Y,{name:"=",orange:!0})))};function en(){var n=Object(U.a)(["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  height: 100%;\n"]);return en=function(){return n},n}var tn=A.default.div(en()),an=Object(l.b)(null,{setDimensions:function(n){return{type:"SET_DIMENSIONS",payload:n}}})((function(n){var e=n.setDimensions;return Object(a.useEffect)((function(){var n=Object(T.a)((function(){e({width:window.innerWidth,height:window.innerHeight})}),1e3);return window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),[e]),r.a.createElement(tn,null,r.a.createElement(B,null),r.a.createElement(nn,null))})),rn=t(199);function on(){var n=Object(U.a)(["\n  ","\n\n  html {\n    box-sizing: border-box;\n    scroll-behavior: smooth;\n    background: transparent;\n    margin: 0;\n    padding: 0;\n  }\n\n  body {\n    font-family: sans-serif;\n    animation: "," 1s ease;\n  }\n\n  a {\n    text-decoration: none;\n  }\n  \n  html, body, #root {\n    height: 100%;\n  }\n  \n  @media (min-width: 400px) and (min-height: 400px) {\n    html {\n      font-size: 20px;\n    }\n  }\n  \n  @media (min-width: 500px) and (min-height: 500px) {\n    html {\n      font-size: 30px;\n    }\n  }\n  \n  @media (min-width: 600px) and (min-height: 600px) {\n    html {\n      font-size: 40px;\n    }\n  }\n  \n  @media (min-width: 800px) and (min-height: 800px) {\n    html {\n      font-size: 50px;\n    }\n  }  \n"]);return on=function(){return n},n}function ln(){var n=Object(U.a)(["\n  from {\n      opacity: 0;\n  }\n\n  to {\n      opacity: 1;\n  }\n"]);return ln=function(){return n},n}var cn=Object(A.keyframes)(ln()),un=Object(A.createGlobalStyle)(on(),rn.normalize,cn),mn=function(){return r.a.createElement(l.a,{store:S},r.a.createElement(c.a,{persistor:k},r.a.createElement(I,null,r.a.createElement(un,null),r.a.createElement(z.a,null,r.a.createElement(C.a,{injectFirst:!0},r.a.createElement(an,null))))))};i.a.render(r.a.createElement(mn,null),document.getElementById("root"))}},[[204,1,2]]]);
//# sourceMappingURL=main.887ed7e8.chunk.js.map