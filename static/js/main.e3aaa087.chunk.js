(this["webpackJsonpmeme-generator"]=this["webpackJsonpmeme-generator"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),m=a.n(r);a(14),a(15);var o=function(){return l.a.createElement("div",null,l.a.createElement("header",{className:"header"},l.a.createElement("img",{className:"headimg",src:"http://www.memes.at/faces/fuck_that_yao_ming.jpg",alt:"MemeFace",width:"17%"}),l.a.createElement("img",{className:"headimg",src:"http://www.memes.at/faces/y_u_no.jpg",alt:"MemeFace2",width:"17%"}),l.a.createElement("h1",{className:"head"},"Meme Generator")))},c=a(4),s=a(5),i=a(6),u=a(1),h=a(8),g=a(7),d=function(e){Object(h.a)(a,e);var t=Object(g.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={topText:"",bottomText:"",randomImg:"https://i.imgflip.com/32r2v1.jpg",allMemeImgs:[]},e.handleChange=e.handleChange.bind(Object(u.a)(e)),e.submit=e.submit.bind(Object(u.a)(e)),e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(t){var a=t.data.memes;console.log(a[0]),e.setState({allMemeImgs:a})}))}},{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(c.a)({},a,n))}},{key:"submit",value:function(e){e.preventDefault();var t=Math.floor(Math.random()*this.state.allMemeImgs.length),a=this.state.allMemeImgs[t].url;this.setState({randomImg:a})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{className:"form"},l.a.createElement("input",{type:"text",name:"topText",placeholder:"Top Text",value:this.state.topText,onChange:this.handleChange}),l.a.createElement("input",{type:"text",name:"bottomText",placeholder:"Bottom Text",value:this.state.bottomText,onChange:this.handleChange})),l.a.createElement("button",{className:"button",onClick:this.submit},"Generate"),l.a.createElement("br",null),l.a.createElement("div",{className:"meme"},l.a.createElement("img",{src:this.state.randomImg,alt:"???"}),l.a.createElement("h3",{className:"top"},this.state.topText),l.a.createElement("h3",{className:"bottom"},this.state.bottomText)),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))}}]),a}(n.Component);var p=function(){return l.a.createElement("footer",{className:"footer"},l.a.createElement("p",null,"-- Created by Quang Tran --"))};var f=function(){return l.a.createElement("div",null,l.a.createElement(o,null),l.a.createElement(d,null),l.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.e3aaa087.chunk.js.map