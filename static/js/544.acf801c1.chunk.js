"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{9586:function(t,n,r){r.d(n,{a:function(){return h}});var e,a,c,i=r(7689),u=r(168),o=r(6444),s=r(1087),p=o.ZP.p(e||(e=(0,u.Z)(["\n    text-transform: uppercase;\n    font-weight: 500;\n  "]))),f=(0,o.ZP)(s.rU)(a||(a=(0,u.Z)(["\n    text-decoration: none;\n    color: black;\n  "]))),l=o.ZP.img(c||(c=(0,u.Z)(["\n    :hover {\n      box-shadow: 0px 0px 22px 0px rgba(0, 0, 0, 0.75);\n      transform: scale(1.05);\n      transition-duration: 500ms;\n    }\n  "]))),d=r(184),m=function(t){var n=t.id,r=t.title,e=t.image,a=(0,i.TH)();return(0,d.jsx)("li",{children:(0,d.jsxs)(f,{to:"/movies/".concat(n),state:{from:a},children:[(0,d.jsx)(l,{src:e?"https://image.tmdb.org/t/p/w500/".concat(e):"https://screench.com/upload/no-poster.jpeg",alt:r||"Movie title not available",width:"300",height:"450"}),(0,d.jsx)(p,{children:r||"Movie title unavailable"})]})})},v=r(9037),h=function(t){var n=t.movies;return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(v.r,{children:n.map((function(t){var n=t.id,r=t.poster_path,e=t.title,a=t.name;return(0,d.jsx)(m,{image:r,title:e||a,id:n},n)}))})})}},9037:function(t,n,r){r.d(n,{r:function(){return c}});var e,a=r(168),c=r(6444).ZP.ul(e||(e=(0,a.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"])))},9544:function(t,n,r){r.r(n);var e=r(9439),a=r(2791),c=r(9586),i=r(7335),u=r(184);n.default=function(){var t=(0,a.useState)(null),n=(0,e.Z)(t,2),r=n[0],o=n[1];return(0,a.useEffect)((function(){(0,i.Df)().then((function(t){return o(t.results)})).catch((function(t){return console.log(t)}))}),[]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h1",{children:"Trending movies"}),r&&(0,u.jsx)(c.a,{movies:r})]})}},7335:function(t,n,r){r.d(n,{Df:function(){return o},gy:function(){return s},r3:function(){return p},tx:function(){return l},zv:function(){return f}});var e=r(5861),a=r(7757),c=r.n(a),i=r(1912);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u="345007f9ab440e5b86cef51be6397df1",o=function(){var t=(0,e.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("trending/all/day?api_key=".concat(u));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("search/movie?api_key=".concat(u,"&query=").concat(n));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("movie/".concat(n,"?api_key=").concat(u));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("movie/".concat(n,"/credits?api_key=").concat(u));case 2:return r=t.sent,t.abrupt("return",r.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("movie/".concat(n,"/reviews?api_key=").concat(u,"&page=1"));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=544.acf801c1.chunk.js.map