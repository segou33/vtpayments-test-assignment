(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{140:function(e,t,n){"use strict";var a=n(161),r=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e,n){var r=t.filter(function(e){return e}).reduce(function(t,r){return[].concat(Object(a.a)(t),[r(e,n)||void 0])},[]).filter(function(e){return e});return r.length?r[0]:void 0}},i=n(123),c=n.n(i),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"This does not look like an email";return function(t){return/([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/i.test(t)||c()(t)?void 0:e}},o=n(182),s=n.n(o),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Value cannot be empty";return function(t){return!s()(t)&&c()(t)?e:void 0}},m=(n(157),n(124),n(184),n(186),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Value must be the same as ".concat(e);return function(n,a){return c()(n)||a.hasOwnProperty(e)&&a[e]===n?void 0:t}});n.d(t,"b",function(){return r}),n.d(t,"a",function(){return u}),n.d(t,"c",function(){return l}),n.d(t,"d",function(){return m})},141:function(e,t,n){"use strict";var a=n(45),r=n(31),i=n(133),c=n(1),u=n.n(c),o=n(128),s=n(8),l=n.n(s),m=n(295),d=n(162),f=n.n(d),b=Object(c.createContext)(!1),v=(b.Provider,n(156)),p=n.n(v);n.d(t,"a",function(){return E});var E=function(e){var t=e.name,n=Object(i.a)(e,["name"]),s=Object(o.c)(t,Object(r.a)({},n,{validateOnBlur:!!n.validate,validateOnChange:!!n.validate,validateOnMount:!!n.validate})),d=s.fieldApi,v=s.fieldState,E=s.fieldState,O=E.touched,h=E.error,j=Object(c.useContext)(b),w=f()(n,function(e){return!["string","number"].includes(typeof e)});return u.a.createElement(c.Fragment,null,u.a.createElement(o.a,Object.assign({disabled:j,fieldState:v,fieldApi:d},w,{className:l()("form-control",Object(a.a)({"is-invalid":O&&h},p.a.Disabled,j))})),h&&O&&u.a.createElement(m.a,{tooltip:!0},h))}},142:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var a=n(1),r=n.n(a),i=n(30),c=n.n(i),u=function(){return r.a.createElement("div",{className:"text-center"},r.a.createElement("img",{src:c.a,alt:"VTPayments"}))}},156:function(e,t,n){e.exports={Disabled:"TextInput_Disabled__udp3B"}},159:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n(133),r=n(1),i=n.n(r),c=n(128),u=n(65),o=function(e){var t=e.disabled,n=void 0!==t&&t,r=e.submitting,o=void 0!==r&&r,s=e.children,l=Object(a.a)(e,["disabled","submitting","children"]),m=Object(c.d)(),d=m.pristine,f=m.invalid;return i.a.createElement(u.a,Object.assign({type:"submit",color:"success",disabled:d||f||o||n,className:o?"progress-bar-striped progress-bar-animated":""},l),s)}},160:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(1),r=n.n(a),i=n(141),c=function(e){return r.a.createElement(i.a,Object.assign({type:"password"},e))}},300:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(49),c=n(188),u=n.n(c),o=n(189),s=n(46),l=n(23),m=n(24),d=n.n(m);function f(){var e=Object(l.a)(["\n  mutation ConfirmEmail($token: String!) {\n    confirmEmail(token: $token) {\n      email\n      userId\n    }\n  }\n"]);return f=function(){return e},e}var b=d()(f()),v=n(29),p=n(20);function E(){var e=Object(l.a)(["\n  mutation SetUserPassword($input: SetUserPasswordInput!) {\n    setUserPassword(input: $input)\n  }\n"]);return E=function(){return e},e}var O=d()(E()),h=n(128),j=n(159),w=n(299),g=n(298),S=n(296),k=n(297),x=n(160),y=n(140),C=function(e){var t=e.onSubmit,n=e.submitting,a=e.submitText,i=void 0===a?"Create":a;return r.a.createElement(h.b,{onSubmit:t},r.a.createElement(w.a,null,r.a.createElement(g.a,{sm:"12",md:"6"},r.a.createElement(S.a,null,r.a.createElement(k.a,null,"Password:"),r.a.createElement(x.a,{name:"password",notify:["passwordConfirmation"],validate:Object(y.c)()}))),r.a.createElement(g.a,{sm:"12",md:"6"},r.a.createElement(S.a,null,r.a.createElement(k.a,null,"Same password again:"),r.a.createElement(x.a,{name:"passwordConfirmation",validate:Object(y.b)(Object(y.c)(),Object(y.d)("password"))})))),r.a.createElement("hr",null),r.a.createElement("div",{className:"float-right"},r.a.createElement(j.a,{submitting:n},i)))},P=n(142),N=n(115),F=n(302),T=function(e){var t=e.mutateFn,n=e.onSuccess,i=e.onComplete,c=e.children,l=e.shouldRun,m=Object(a.useState)(!1),d=Object(s.a)(m,2),f=d[0],b=d[1];return Object(a.useEffect)(function(){(function(){var e=Object(o.a)(u.a.mark(function e(){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!l||f){e.next=11;break}return b(!0),e.prev=2,e.next=5,t();case 5:a=e.sent,n&&a&&n(a);case 7:return e.prev=7,i&&i(),b(!1),e.finish(7);case 11:case"end":return e.stop()}},e,null,[[2,,7,11]])}));return function(){return e.apply(this,arguments)}})()()},[l,t,n,i,f]),r.a.createElement(a.Fragment,null,c)},_=n(118),I=Object(_.a)(function(e){var t=e.token,n=e.history.push,i=Object(a.useState)(!1),c=Object(s.a)(i,2),l=c[0],m=c[1],d=Object(a.useState)(""),f=Object(s.a)(d,2),E=f[0],h=f[1];return r.a.createElement(v.b,{mutation:O},function(e,a){var i=a.loading;return r.a.createElement(v.b,{mutation:b,variables:{token:t}},function(t,a){var c=a.loading,s=a.error,d=function(){var t=Object(o.a)(u.a.mark(function t(a){var r;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.password,t.next=3,e({variables:{input:{id:E,password:r}}});case 3:n("/");case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();return r.a.createElement(T,{mutateFn:t,shouldRun:!l,onSuccess:function(e){h(e.data.confirmEmail.userId)},onComplete:function(){m(!0)}},r.a.createElement(N.a,{className:"mt-5"},r.a.createElement(g.a,{sm:"12",md:{size:6,offset:3}},r.a.createElement(P.a,null),r.a.createElement("h1",{className:"mt-5"},"Finish Sign Up"),r.a.createElement("hr",null),s&&r.a.createElement(F.a,{color:"danger"},"Cannot confirm your email"),c&&r.a.createElement(p.a,null),l&&E&&r.a.createElement(C,{onSubmit:d,submitting:i,submitText:"Create"}))))})})});function U(e){var t=e.match.params.token;return r.a.createElement(i.a,{title:"Confirm Your Email"},r.a.createElement(I,{token:t}))}n.d(t,"default",function(){return U})}}]);
//# sourceMappingURL=4.15657f22.chunk.js.map