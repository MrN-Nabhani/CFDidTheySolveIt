(this.webpackJsonpppg_solved_it=this.webpackJsonpppg_solved_it||[]).push([[0],{24:function(e,t,a){e.exports=a(57)},29:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),s=a.n(c),l=(a(29),a(4)),o=a(3),u=a(6),i=a(11),d={"Hanii.Gerges":"HIDE","Mr.N_Nabhani":"HIDE",theBiker:"HIDE"},p=Object(o.b)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_DISPLAY":return Object(i.a)({},e,Object(u.a)({},t.payload,"HIDE"));case"REMOVE_FROM_DISPLAY":return Object(i.a)({},e);default:return e}}}),m=Object(o.c)(p,{}),f=a(12),h=a.n(f),b=a(23),v=a(2);a(37);var E=function(e){var t=e.handle,a=e.status_for_handle,n=e.loading;return r.a.createElement("a",{rel:"noopener noreferrer",href:"https://codeforces.com/profile/".concat(t),target:"_blank"},r.a.createElement("div",{className:"user"},r.a.createElement("h3",null," ",t," "),r.a.createElement("img",{alt:"",src:"images/user.png"}),r.a.createElement("div",{className:"status"},n&&r.a.createElement("i",{className:"fa fa-spin fa-refresh"}),!n&&r.a.createElement("div",{id:a.replace(/\s/g,"-")},a))))},O=(a(38),a(7)),g=a.n(O);var _=function(){var e=Object(n.useState)(""),t=Object(v.a)(e,2),a=t[0],c=t[1],s=Object(l.b)();return r.a.createElement("div",{className:"addUserBtn"},r.a.createElement("h3",null," Add User "),r.a.createElement("button",{id:"btn",onClick:function(){g.a.get("https://codeforces.com/api/user.status",{params:{handle:a}}).then((function(e){console.log("user found!"),s({type:"ADD_TO_DISPLAY",payload:a}),c("")})).catch((function(e){throw console.log("user not found"),e}))}},"+"),r.a.createElement("input",{value:a,id:"in",type:"text",placeholder:"enter handle",onChange:function(e){c(e.target.value)}}))};a(56);var j=function(){var e=Object(n.useState)(!1),t=Object(v.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)({id:"",index:""}),o=Object(v.a)(s,2),u=o[0],i=o[1],d=Object(l.c)((function(e){return e.users})),p=Object(n.useState)(d),m=Object(v.a)(p,2),f=m[0],O=m[1],j=function(){var e=Object(b.a)(h.a.mark((function e(){var t,a,n,r,c,s,l,o,i,p,m;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n in t={user_names:[],calls:[]},a={},d)t.user_names.push(n),t.calls.push(g.a.get("https://codeforces.com/api/user.status",{params:{handle:n}})),a[n]="NOT SOLVED";return e.next=5,Promise.all(t.calls);case 5:t.calls=e.sent,r=0;case 7:if(!(r<t.user_names.length)){e.next=39;break}c=t.calls[r],s=!0,l=!1,o=void 0,e.prev=12,i=c.data.result[Symbol.iterator]();case 14:if(s=(p=i.next()).done){e.next=22;break}if((m=p.value).problem.contestId!==u.id||m.problem.index!==u.index){e.next=19;break}return"OK"===m.verdict?a[t.user_names[r]]="SOLVED":a[t.user_names[r]]="TRIED",e.abrupt("break",22);case 19:s=!0,e.next=14;break;case 22:e.next=28;break;case 24:e.prev=24,e.t0=e.catch(12),l=!0,o=e.t0;case 28:e.prev=28,e.prev=29,s||null==i.return||i.return();case 31:if(e.prev=31,!l){e.next=34;break}throw o;case 34:return e.finish(31);case 35:return e.finish(28);case 36:++r,e.next=7;break;case 39:O(a);case 40:case"end":return e.stop()}}),e,null,[[12,24,28,36],[29,,31,35]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){O(d)}),[d]),Object(n.useEffect)((function(){c(!0),j().then((function(){c(!1)}))}),[d,u]),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null," Who Solved Problem  "),r.a.createElement("input",{autoFocus:!0,type:"text",pattern:"\\d+\\w\\d?",title:"Not a valid problem",placeholder:"1272C",onChange:function(e){return function(e){var t=e.target.value.replace(/\s/g,"").toUpperCase(),a=parseInt(t),n=t.replace(a,"");0===t.length||isNaN(a)||""===n||i({id:a,index:n})}(e)}}),r.a.createElement("h1",null," ? ")),r.a.createElement("main",null,r.a.createElement("div",{className:"users-area"},Object.entries(f).map((function(e,t){var n=Object(v.a)(e,2),c=n[0],s=n[1];return r.a.createElement(E,{key:t,handle:c,status_for_handle:s,loading:a})})),r.a.createElement(_,null))))};var k=function(){return r.a.createElement(l.a,{store:m},r.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.13bebf26.chunk.js.map