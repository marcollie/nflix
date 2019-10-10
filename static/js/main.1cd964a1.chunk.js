(window.webpackJsonpnflix=window.webpackJsonpnflix||[]).push([[0],{31:function(e,t,n){e.exports=n.p+"static/media/noPosterSmall.87a0eb6a.png"},46:function(e,t,n){e.exports=n(78)},77:function(e,t,n){e.exports=n.p+"static/media/imdbLogo.ed2fcc33.svg"},78:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(37),o=n.n(i),l=n(8),u=n(9),c=n(11),s=n(10),p=n(12),d=n(19),m=n(16),g=n(6),f=n.n(g),v=n(15),h=n(2),b=n(1),x=n(14),E=n.n(x);function y(){var e=Object(h.a)(["\n    margin-top: 25px;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, 125px);\n    grid-gap: 25px;\n"]);return y=function(){return e},e}function j(){var e=Object(h.a)(["\n    font-size: 14px;\n    font-weight: 600;\n    margin-bottom: 25px;\n"]);return j=function(){return e},e}function O(){var e=Object(h.a)(["\n    :not(:last-child) {\n        margin-bottom: 50px;\n    }\n"]);return O=function(){return e},e}var _=b.default.div(O()),w=b.default.span(j()),k=b.default.div(y()),S=function(e){var t=e.title,n=e.children;return r.a.createElement(_,null,r.a.createElement(w,null,t),r.a.createElement(k,null,n))};function T(){var e=Object(h.a)(["\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    font-size: 25px;\n    margin-top: 20px;\n"]);return T=function(){return e},e}var R=b.default.div(T()),M=function(){return r.a.createElement(R,null,r.a.createElement("span",{role:"img","aria-label":"Loading"},"\u23f3"))};function U(){var e=Object(h.a)(["\n    color: ",";\n"]);return U=function(){return e},e}function z(){var e=Object(h.a)(["\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n"]);return z=function(){return e},e}var C=b.default.div(z()),I=b.default.span(U(),(function(e){return e.color})),D=function(e){var t=e.text,n=e.color;return r.a.createElement(C,null,r.a.createElement(I,{color:n},t))};function P(){var e=Object(h.a)(["\n    font-size: 10px;\n    color: rgba(255, 255, 255, 0.5);\n"]);return P=function(){return e},e}function N(){var e=Object(h.a)(["\n    display: block;\n    font-size: 12px;\n    margin-bottom: 3px;\n"]);return N=function(){return e},e}function F(){var e=Object(h.a)(["\n    margin-bottom: 5px;\n    position: relative;\n    &:hover {\n        "," {\n            opacity: 0.3;\n        }\n        "," {\n            opacity: 1;   \n        }\n    }\n"]);return F=function(){return e},e}function B(){var e=Object(h.a)(["\n    bottom: 5px;\n    right: 5px;\n    position: absolute;\n    opacity: 0;\n"]);return B=function(){return e},e}function L(){var e=Object(h.a)(["\n    background-image: url(",");\n    height: 180px;\n    background-size: cover;\n    border-radius: 4px;\n    background-position: center center;\n    transition: opacity 0.1s linear;\n"]);return L=function(){return e},e}function V(){var e=Object(h.a)(["\n    font-size: 12px;\n"]);return V=function(){return e},e}var A=b.default.div(V()),q=b.default.div(L(),(function(e){return e.bgUrl})),J=b.default.span(B()),G=b.default.div(F(),q,J),H=b.default.span(N()),K=b.default.span(P()),Q=function(e){var t=e.id,a=e.imageUrl,i=e.title,o=e.rating,l=e.year,u=e.isMovie,c=void 0!==u&&u;return r.a.createElement(d.b,{to:c?"/movie/".concat(t):"/show/".concat(t)},r.a.createElement(A,null,r.a.createElement(G,null,r.a.createElement(q,{bgUrl:a?"https://image.tmdb.org/t/p/w300".concat(a):n(31)}),r.a.createElement(J,null,r.a.createElement("span",{role:"img","aria-label":"rating"},"\u2b50")," ",o,"/10")),r.a.createElement(H,null,i.length>15?"".concat(i.substring(0,15),"..."):i),r.a.createElement(K,null,l)))};function W(){var e=Object(h.a)(["\n    padding: 20px;\n"]);return W=function(){return e},e}var X=b.default.div(W()),Y=function(e){var t=e.nowPlaying,n=e.popular,a=e.upcoming,i=e.loading,o=e.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,null,r.a.createElement("title",null,"Movies | Nflix")),i?r.a.createElement(M,null):r.a.createElement(X,null,t&&t.length>0&&r.a.createElement(S,{title:"Now Playing"},t.map((function(e){return r.a.createElement(Q,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0})}))),a&&a.length>0&&r.a.createElement(S,{title:"Upcoming Movies"},a.map((function(e){return r.a.createElement(Q,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0})}))),n&&n.length>0&&r.a.createElement(S,{title:"Popular Movies"},n.map((function(e){return r.a.createElement(Q,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0})}))),o&&r.a.createElement(D,{color:"#e74c3c",text:o})))},Z=n(42),$=n.n(Z).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"8ce9a1a110e1c4b14ada4645d0c94759",language:"en-US"}}),ee={nowPlaying:function(){return $.get("movie/now_playing")},upcoming:function(){return $.get("movie/upcoming")},popular:function(){return $.get("movie/popular")},movieDetail:function(e){return $.get("movie/".concat(e),{params:{append_to_response:"videos"}})},search:function(e){return $.get("search/movie",{params:{query:encodeURIComponent(e)}})}},te={topRated:function(){return $.get("tv/top_rated")},popular:function(){return $.get("tv/popular")},airingToday:function(){return $.get("tv/airing_today")},showDetail:function(e){return $.get("tv/".concat(e),{params:{append_to_response:"videos"}})},search:function(e){return $.get("search/tv",{params:{query:encodeURIComponent(e)}})}},ne=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={nowPlaying:null,upcoming:null,popular:null,error:null,loading:!0},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark((function e(){var t,n,a,r,i,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee.nowPlaying();case 3:return t=e.sent,n=t.data.results,console.log(n),e.next=8,ee.upcoming();case 8:return a=e.sent,r=a.data.results,e.next=12,ee.popular();case 12:i=e.sent,o=i.data.results,this.setState({nowPlaying:n,upcoming:r,popular:o}),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),this.setState({error:"Can't find movies information."});case 20:return e.prev=20,this.setState({loading:!1}),e.finish(20);case 23:case"end":return e.stop()}}),e,this,[[0,17,20,23]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.nowPlaying,n=e.upcoming,a=e.popular,i=e.error,o=e.loading;return console.log(this.state),r.a.createElement(Y,{nowPlaying:t,upcoming:n,popular:a,error:i,loading:o})}}]),t}(r.a.Component);function ae(){var e=Object(h.a)(["\n    padding: 20px;\n"]);return ae=function(){return e},e}var re=b.default.div(ae()),ie=function(e){var t=e.topRated,n=e.popular,a=e.airingToday,i=e.loading,o=e.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,null,r.a.createElement("title",null,"TV shows | Nfilx")),i?r.a.createElement(M,null):r.a.createElement(re,null,t&&t.length>0&&r.a.createElement(S,{title:"Top Rated Shows"},t.map((function(e){return r.a.createElement(Q,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)})}))),n&&n.length>0&&r.a.createElement(S,{title:"Popular Shows"},n.map((function(e){return r.a.createElement(Q,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)})}))),a&&a.length>0&&r.a.createElement(S,{title:"Airing Today"},a.map((function(e){return r.a.createElement(Q,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)})}))),o&&r.a.createElement(D,{color:"#e74c3c",text:o})))},oe=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={topRated:null,popular:null,airingToday:null,loading:!0,error:null},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark((function e(){var t,n,a,r,i,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,te.topRated();case 3:return t=e.sent,n=t.data.results,e.next=7,te.popular();case 7:return a=e.sent,r=a.data.results,e.next=11,te.airingToday();case 11:i=e.sent,o=i.data.results,this.setState({topRated:n,popular:r,airingToday:o}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find TV infomation."});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.topRated,n=e.popular,a=e.airingToday,i=e.loading,o=e.error;return console.log(this.state),r.a.createElement(ie,{topRated:t,popular:n,airingToday:a,loading:i,error:o})}}]),t}(r.a.Component);function le(){var e=Object(h.a)(["\n    height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]);return le=function(){return e},e}function ue(){var e=Object(h.a)(["\n    width: 80px;\n    height: 50px;\n    text-align: center;\n    border-bottom: 3px solid \n        ",";\n    transition: border-bottom 0.5s ease-in-out;\n"]);return ue=function(){return e},e}function ce(){var e=Object(h.a)(["\n    display:flex;\n"]);return ce=function(){return e},e}function se(){var e=Object(h.a)(["\n    color: white;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 50px;\n    display: flex;\n    align-items: center;\n    padding: 0px 10px;\n    background-color: rgba(20, 20, 20, 0.8);\n    box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);\n"]);return se=function(){return e},e}var pe=b.default.header(se()),de=b.default.ul(ce()),me=b.default.li(ue(),(function(e){return e.current?"#3498db":"transparent"})),ge=Object(b.default)(d.b)(le()),fe=Object(m.g)((function(e){var t=e.location.pathname;return r.a.createElement(pe,null,r.a.createElement(de,null,r.a.createElement(me,{current:"/"===t},r.a.createElement(ge,{to:"/"},"Movies")),r.a.createElement(me,{current:"/tv"===t},r.a.createElement(ge,{to:"/tv"},"TV")),r.a.createElement(me,{current:"/search"===t},r.a.createElement(ge,{to:"/search"},"Search"))))}));function ve(){var e=Object(h.a)(["\n    all: unset;\n    font-size: 28px;\n    width: 100%;\n"]);return ve=function(){return e},e}function he(){var e=Object(h.a)(["\n    margin-bottom: 50px;\n    width: 100%;\n"]);return he=function(){return e},e}function be(){var e=Object(h.a)(["\n    padding: 0 20px;\n"]);return be=function(){return e},e}var xe=b.default.div(be()),Ee=b.default.form(he()),ye=b.default.input(ve()),je=function(e){var t=e.movieResults,n=e.tvResults,a=e.loading,i=e.error,o=e.searchTerm,l=e.handleSubmit,u=e.updateTerm;return r.a.createElement(xe,null,r.a.createElement(E.a,null,r.a.createElement("title",null,"Search | Nflix")),r.a.createElement(Ee,{onSubmit:l},r.a.createElement(ye,{placeholder:"Search Movies or TV shows...",value:o,onChange:u})),a?r.a.createElement(M,null):r.a.createElement(r.a.Fragment,null,t&&t.length>0&&r.a.createElement(S,{title:"Movie Results"},t.map((function(e){return r.a.createElement(Q,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0})}))),n&&n.length>0&&r.a.createElement(S,{title:"TV Show Results"},n.map((function(e){return r.a.createElement(Q,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)})})))),i&&r.a.createElement(D,{color:"#e74c3c",text:i}),n&&t&&0===n.length&&0===t.length&&r.a.createElement(D,{text:"Nothing Found",color:"#95a5a6"}))},Oe=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={movieResults:null,tvResults:null,searchTerm:"",loading:!1,error:null},n.handleSubmit=function(e){e.preventDefault(),""!==n.state.searchTerm&&n.searchByTerm()},n.updateTerm=function(e){var t=e.target.value;n.setState({searchTerm:t})},n.searchByTerm=Object(v.a)(f.a.mark((function e(){var t,a,r,i,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state.searchTerm,n.setState({loading:!0}),e.prev=2,e.next=5,ee.search(t);case 5:return a=e.sent,r=a.data.results,e.next=9,te.search(t);case 9:i=e.sent,o=i.data.results,n.setState({movieResults:r,tvResults:o}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),n.setState({error:"Can't find results."});case 17:return e.prev=17,n.setState({loading:!1}),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[2,14,17,20]])}))),n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.movieResults,n=e.tvResults,a=e.searchTerm,i=e.loading,o=e.error;return console.log(this.state),r.a.createElement(je,{movieResults:t,tvResults:n,searchTerm:a,loading:i,error:o,handleSubmit:this.handleSubmit,updateTerm:this.updateTerm})}}]),t}(r.a.Component);function _e(){var e=Object(h.a)(["\n    position: absolute;\n    width: 40%;\n    height: 40%;\n    background-color: black;\n    opacity: 0.5;\n"]);return _e=function(){return e},e}function we(){var e=Object(h.a)(["\n    font-size: 12px;\n    opacity: 0.7;\n    line-height: 1.5;\n    width: 50%;\n    margin-bottom: 20px;\n"]);return we=function(){return e},e}function ke(){var e=Object(h.a)(["\n    display: inline-block;\n    width: 28px;\n    height: 13px;\n    background-image: url(",");\n    background-size: cover;\n"]);return ke=function(){return e},e}function Se(){var e=Object(h.a)(["\n    margin: 0 10px;\n"]);return Se=function(){return e},e}function Te(){var e=Object(h.a)(["\n\n"]);return Te=function(){return e},e}function Re(){var e=Object(h.a)(["\n    margin: 20px 0;\n"]);return Re=function(){return e},e}function Me(){var e=Object(h.a)(["\n    font-size: 32px;\n    margin-bottom: 20px;\n"]);return Me=function(){return e},e}function Ue(){var e=Object(h.a)(["\n    width: 70%;\n    margin-left: 10px;\n    border: 1px solid black;\n"]);return Ue=function(){return e},e}function ze(){var e=Object(h.a)(["\n    width: 30%;\n    background-image: url(",");\n    background-position: center center;\n    background-size: cover;\n    height: 100%;\n    border-radius: 5px;\n"]);return ze=function(){return e},e}function Ce(){var e=Object(h.a)(["\n    display: flex;\n    width: 100%;\n    position: relative;\n    z-index: 1;\n    height: 100%;\n"]);return Ce=function(){return e},e}function Ie(){var e=Object(h.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-image: url(",");\n    background-position: center center;\n    background-size: cover;\n    filter: blur(3px);\n    opacity: 0.5;\n    z-index: 0;\n"]);return Ie=function(){return e},e}function De(){var e=Object(h.a)(["\n    height: calc(100vh - 50px);\n    width: 100%;\n    position: relative;\n    padding: 50px;\n"]);return De=function(){return e},e}var Pe=b.default.div(De()),Ne=b.default.div(Ie(),(function(e){return e.bgImage})),Fe=b.default.div(Ce()),Be=b.default.div(ze(),(function(e){return e.bgImage})),Le=b.default.div(Ue()),Ve=b.default.h1(Me()),Ae=b.default.div(Re()),qe=b.default.span(Te()),Je=b.default.span(Se()),Ge=b.default.span(ke(),(function(e){return e.bgImage})),He=b.default.p(we()),Ke=b.default.div(_e()),Qe=function(e){var t=e.result,a=e.loading;e.error;return a?r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,null,r.a.createElement("title",null,"Loading | Nflix")),r.a.createElement(M,null)):r.a.createElement(Pe,null,r.a.createElement(E.a,null,r.a.createElement("title",null,t.original_title?t.original_title:t.original_name," | Nflix")),r.a.createElement(Ne,{bgImage:"https://image.tmdb.org/t/p/original".concat(t.backdrop_path)}),r.a.createElement(Fe,null,r.a.createElement(Be,{bgImage:t.poster_path?"https://image.tmdb.org/t/p/original".concat(t.poster_path):n(31)}),r.a.createElement(Le,null,r.a.createElement(Ve,null,t.original_title?t.original_title:t.original_name),r.a.createElement(Ae,null,r.a.createElement(qe,null,t.release_date?t.release_date.substring(0,4):t.first_air_date.substring(0,4)),r.a.createElement(Je,null,"\u2022"),r.a.createElement(qe,null,t.runtime?t.runtime:t.episode_run_time[0]," min"),r.a.createElement(Je,null,"\u2022"),r.a.createElement(qe,null,t.genres&&t.genres.map((function(e,n){return n===t.genres.length-1?e.name:"".concat(e.name," / ")}))),r.a.createElement(Je,null,"\u2022"),r.a.createElement(qe,null,r.a.createElement(Ge,{bgImage:t.imdb_id?"https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/375px-IMDB_Logo_2016.svg.png":n(77),onClick:"http://parkDex.tistory.com"}))),r.a.createElement(He,null,t.overview),r.a.createElement(Ke,null))))},We=function(e){function t(e){var n;Object(l.a)(this,t),n=Object(c.a)(this,Object(s.a)(t).call(this,e));var a=e.location.pathname;return n.state={result:null,error:null,loading:!0,isMovie:a.includes("/movie/")},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark((function e(){var t,n,a,r,i,o,l,u;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.match.params.id,a=t.history.push,r=this.state.isMovie,i=parseInt(n),!isNaN(i)){e.next=5;break}return e.abrupt("return",a("/"));case 5:if(e.prev=5,!r){e.next=13;break}return e.next=9,ee.movieDetail(i);case 9:l=e.sent,o=l.data,e.next=17;break;case 13:return e.next=15,te.showDetail(i);case 15:u=e.sent,o=u.data;case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(5),this.setState({error:"Can't find anything."});case 22:return e.prev=22,this.setState({loading:!1,result:o}),e.finish(22);case 25:case"end":return e.stop()}}),e,this,[[5,19,22,25]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.result,n=e.error,a=e.loading;return console.log(t),r.a.createElement(Qe,{result:t,error:n,loading:a})}}]),t}(r.a.Component),Xe=function(){return r.a.createElement(d.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(fe,null),r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/",exact:!0,component:ne}),r.a.createElement(m.b,{path:"/tv",exact:!0,component:oe}),r.a.createElement(m.b,{path:"/search",exact:!0,component:Oe}),r.a.createElement(m.b,{path:"/movie/:id",component:We}),r.a.createElement(m.b,{path:"/show/:id",component:We}),r.a.createElement(m.a,{from:"*",to:"/"}))))},Ye=n(43),Ze=n.n(Ye);function $e(){var e=Object(h.a)(["\n    ",";\n    a {\n        text-decoration: none;\n        color: inherit;\n    }\n\n    * {\n        box-sizing:border-box;\n    }\n\n    body {\n        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        font-size: 14px;\n        background-color: rgba(20, 20, 20, 1);\n        color: white;\n        padding-top: 50px;\n    }\n"]);return $e=function(){return e},e}var et=Object(b.createGlobalStyle)($e(),Ze.a),tt=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Xe,null),r.a.createElement(et,null))}}]),t}(a.Component);o.a.render(r.a.createElement(tt,null),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.1cd964a1.chunk.js.map