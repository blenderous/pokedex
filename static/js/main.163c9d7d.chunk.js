(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(26)},15:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),c=n(8),a=n.n(c),i=(n(15),n(2)),u=n(3),l=n(4),s=n(5),f=n(6),h=n(1);function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,o=Object(h.a)(e);if(t){var r=Object(h.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(f.a)(this,n)}}r.a.Component;var p=n(9),v=n.n(p);function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,o=Object(h.a)(e);if(t){var r=Object(h.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(f.a)(this,n)}}var y=function(e){Object(s.a)(n,e);var t=m(n);function n(e){var o;return Object(i.a)(this,n),(o=t.call(this,e)).state={searchTerm:"",loading:!0,pokeDex:null},o.searchUpdated=o.searchUpdated.bind(Object(l.a)(o)),o}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("./pokedex.json").then(function(e){if(e.ok)return e.json();throw e}).then(function(e){console.log(e)}).catch(function(e){console.error("An error occurred: ",e)}).finally(function(){e.setState({loading:!1})})}},{key:"render",value:function(){this.state.pokeDex&&console.log(this.state);var e=this.state.loading;return r.a.createElement("div",null,e?r.a.createElement("div",null,"Loading.."):r.a.createElement("div",null,r.a.createElement(v.a,{className:"search-input",onChange:this.searchUpdated}),r.a.createElement("ul",{className:"pokelist-container"})))}},{key:"searchUpdated",value:function(e){this.setState({searchTerm:e})}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(21),n(22);a.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.163c9d7d.chunk.js.map