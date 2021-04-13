(this["webpackJsonpcountries-app"]=this["webpackJsonpcountries-app"]||[]).push([[0],{18:function(e,c,t){},33:function(e,c,t){},34:function(e,c,t){},35:function(e,c,t){"use strict";t.r(c);var n=t(1),s=t(19),a=t.n(s),r=t(7),i=t(2),l=t(9),o=t.n(l),j=t(12),u=t(8),d=t(0);function b(e){var c=e.country,t=c.flag,n=c.name,s=c.population,a=c.region,i=c.capital;return Object(d.jsxs)("div",{className:"card-container",children:[" ",Object(d.jsxs)(r.b,{to:"/countries/".concat(n),className:"link",children:[Object(d.jsx)("img",{className:"flag",src:t,alt:n}),Object(d.jsxs)("div",{className:"country-info",children:[Object(d.jsx)("h3",{className:"name",children:n}),Object(d.jsxs)("ul",{children:[Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:"bold",children:"Population:"})," ",s]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:"bold",children:"Region: "}),a]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:"bold",children:"Capital: "}),i]})]})]})]})]})}t(18);function h(){var e=Object(n.useState)([]),c=Object(u.a)(e,2),t=c[0],s=c[1],a=Object(n.useState)(""),r=Object(u.a)(a,2),i=r[0],l=r[1],h=Object(n.useState)(""),O=Object(u.a)(h,2),x=O[0],p=O[1],m="https://restcountries.eu/rest/v2/name/".concat(i),f=function(){var e=Object(j.a)(o.a.mark((function e(){var c,t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://restcountries.eu/rest/v2/all");case 2:return c=e.sent,e.next=5,c.json();case 5:t=e.sent,s(t),console.log(t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(j.a)(o.a.mark((function e(c){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.next=3,fetch(m);case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,s(n),console.log(n);case 9:case"end":return e.stop()}}),e)})));return function(c){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){f()}),[]);var N=t.filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())&&e.region.toLowerCase().includes(x.toLocaleLowerCase())}));return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("form",{onSubmit:v,children:[Object(d.jsxs)("div",{className:"input-container",children:[Object(d.jsx)("input",{className:"search-bar",placeholder:"Search for a country...",value:i,onChange:function(e){l(e.target.value)}}),Object(d.jsx)("i",{className:"fas fa-search search-image"})]}),Object(d.jsxs)("select",{value:x,onChange:function(e){p(e.target.value)},children:[Object(d.jsx)("option",{value:"",children:"Filter by Region"}),Object(d.jsx)("option",{value:"Africa",children:"Africa"}),Object(d.jsx)("option",{value:"America",children:"America"}),Object(d.jsx)("option",{value:"Asia",children:"Asia"}),Object(d.jsx)("option",{value:"Europe",children:"Europe"}),Object(d.jsx)("option",{value:"Oceania",children:"Oceania"})]})]}),Object(d.jsx)("div",{className:"countries-container",children:N.map((function(e){var c=e.numericCode;return Object(d.jsx)("div",{children:Object(d.jsx)(b,{country:e})},c)}))})]})}t(33);function O(){var e=Object(n.useState)([]),c=Object(u.a)(e,2),t=c[0],s=c[1],a=Object(i.e)().name,l="https://restcountries.eu/rest/v2/name/".concat(a),b=function(){var e=Object(j.a)(o.a.mark((function e(){var c,t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(l);case 2:return c=e.sent,e.next=5,c.json();case 5:t=e.sent,s(t),console.log(t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){b()}),[a]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)(r.b,{to:"/countries-app",className:"back-btn",children:[Object(d.jsx)("i",{className:"fas fa-arrow-left"})," Back"]}),t.map((function(e){var c=e.numericCode,t=e.flag,n=e.name,s=e.nativeName,a=e.population,r=e.region,i=e.subregion,l=e.capital,o=e.topLevelDomain,j=e.currencies,u=e.languages,b=e.borders;return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"country-info-container",children:[Object(d.jsx)("div",{className:"country-info-flag",children:Object(d.jsx)("img",{src:t,alt:n})}),Object(d.jsxs)("div",{className:"details-container",children:[Object(d.jsx)("h2",{children:n}),Object(d.jsx)("div",{className:"list-container",children:Object(d.jsxs)("ul",{children:[Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:"bold",children:"Native Name: "}),s]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:"bold",children:"Population:"})," ",a]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:"bold",children:"Region:"})," ",r]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:"bold",children:"Sub Region:"})," ",i]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:"bold",children:"Capital:"})," ",l]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:"bold",children:"Top Level Domain:"})," ",o]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:"bold",children:"Currencies:"})," ",j[0].name]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:"bold",children:"Languages:"})," ",u[0].name]})]})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"Border Countries: "}),Object(d.jsx)("div",{className:"border-countries-container",children:b.map((function(e){return Object(d.jsx)("ul",{children:Object(d.jsx)("li",{className:"border-countries",children:e})},e)}))})]})]})]})},c)}))]})})}var x=t(21),p=(t(34),"dark");function m(){var e=Object(x.useMediaQuery)({query:"(prefers-color-scheme: dark)"},void 0,(function(e){a(e)})),c=Object(n.useState)(e),t=Object(u.a)(c,2),s=t[0],a=t[1];Object(n.useEffect)((function(){s?document.documentElement.classList.add(p):document.documentElement.classList.remove(p)}),[s]);return Object(d.jsxs)("div",{className:"header-container",children:[Object(d.jsx)(r.b,{to:"/countries-app",className:"app-title",children:Object(d.jsx)("h1",{children:"Where in the world?"})}),Object(d.jsx)("div",{className:"dark-mode-container",children:Object(d.jsxs)("label",{className:"switch",children:[Object(d.jsx)("input",{type:"checkbox",checked:s,onClick:function(e){a(e.target.checked)}}),Object(d.jsx)("span",{className:"slider round"})]})})]})}function f(){return Object(d.jsxs)(r.a,{children:[Object(d.jsx)(m,{}),Object(d.jsx)(i.a,{exact:!0,path:"/countries-app",children:Object(d.jsx)(h,{})}),Object(d.jsx)(i.a,{path:"/countries/:name",children:Object(d.jsx)(O,{})})]})}a.a.render(Object(d.jsx)(f,{}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.e20f9c9b.chunk.js.map