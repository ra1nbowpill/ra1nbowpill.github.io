(window["webpackJsonpjapanese-numbers"]=window["webpackJsonpjapanese-numbers"]||[]).push([[0],{11:function(e,t,n){"use strict";(function(r){Object.defineProperty(t,"__esModule",{value:!0});var a=h(n(8)),i=h(n(12)),o=h(n(36)),s=h(n(13)),u=h(n(39)),c=h(n(40)),d=h(n(14)),l=n(42);function h(e){return e&&e.__esModule?e:{default:e}}var f=function(e,t,n){var r=Math.abs(e)>Math.abs(t),a=e<0?d.default.LEFT:d.default.RIGHT,i=t<0?d.default.UP:d.default.DOWN,o=r?a:i;return-1===n.indexOf(o)?d.default.INVALID:o},p=function e(t,n,a){var u=void 0,h=void 0,p=void 0,v=void 0,g=void 0,m=void 0,w=void 0,O=void 0,b=void 0,k=void 0,y=void 0,E=void 0,j=void 0,C=void 0,T=void 0,_=void 0,D=void 0,R=void 0,I=void 0,S=void 0,M=void 0;return u={},h=e.makeConfig(t.getConfig()),m=(0,i.default)(),T=t.getSpringSystem(),_=T.createSpring(250,10),D=T.createSpring(500,20),b={},k={coordinateX:0,coordinateY:0},(R={})[d.default.LEFT]="throwoutleft",R[d.default.RIGHT]="throwoutright",R[d.default.UP]="throwoutup",R[d.default.DOWN]="throwoutdown",_.setRestSpeedThreshold(.05),_.setRestDisplacementThreshold(.05),D.setRestSpeedThreshold(.05),D.setRestDisplacementThreshold(.05),I=h.throwOutDistance(h.minThrowOutDistance,h.maxThrowOutDistance),j=new o.default.Manager(n,{recognizers:[[o.default.Pan,{threshold:2}]]}),m.on("panstart",(function(){e.appendToParent(n),m.trigger("dragstart",{target:n}),p=0,v=0,w=!0,function e(){w&&(g(),(0,c.default)(e))}()})),m.on("panmove",(function(e){p=e.deltaX,v=e.deltaY})),m.on("panend",(function(e){w=!1;var t=k.coordinateX+e.deltaX,r=k.coordinateY+e.deltaY,a=h.isThrowOut(t,r,n,h.throwOutConfidence(t,r,n)),i=f(t,r,h.allowedDirections);a&&i!==d.default.INVALID?u.throwOut(t,r,i):u.throwIn(t,r,i),m.trigger("dragend",{target:n})})),(0,l.isTouchDevice)()?(n.addEventListener("touchstart",(function(){m.trigger("panstart")})),n.addEventListener("touchend",(function(){w&&!O&&m.trigger("dragend",{target:n})})),function(){var e=void 0;n.addEventListener("touchstart",(function(){e=!0})),n.addEventListener("touchend",(function(){e=!1})),r.addEventListener("touchmove",(function(t){e&&t.preventDefault()}))}()):(n.addEventListener("mousedown",(function(){M=e.appendToParent(n)||M,m.trigger("panstart")})),n.addEventListener("mouseup",(function(){M&&(n.click(),M=!1),w&&!O&&m.trigger("dragend",{target:n})}))),j.on("panstart",(function(e){O=!0,m.trigger("panstart",e)})),j.on("panmove",(function(e){m.trigger("panmove",e)})),j.on("panend",(function(e){O=!1,m.trigger("panend",e)})),_.addListener({onSpringAtRest:function(){m.trigger("throwinend",{target:n})},onSpringUpdate:function(e){var t=e.getCurrentValue(),n=s.default.MathUtil.mapValueInRange(t,0,1,b.fromX,0),r=s.default.MathUtil.mapValueInRange(t,0,1,b.fromY,0);C(n,r)}}),D.addListener({onSpringAtRest:function(){m.trigger("throwoutend",{target:n})},onSpringUpdate:function(e){var t=e.getCurrentValue(),n=void 0,r=void 0,a=void 0;b.direction===d.default.RIGHT||b.direction===d.default.LEFT?(a=b.direction===d.default.RIGHT?1:-1,n=s.default.MathUtil.mapValueInRange(t,0,1,b.fromX,I*a),r=b.fromY):b.direction!==d.default.UP&&b.direction!==d.default.DOWN||(a=b.direction===d.default.DOWN?1:-1,n=b.fromX,r=s.default.MathUtil.mapValueInRange(t,0,1,b.fromY,I*a)),C(n,r)}}),g=function(){if(p!==y||v!==E){y=p,E=v;var e=k.coordinateX+p,t=k.coordinateY+v,r=h.rotation(e,t,n,h.maxRotation);h.transform(n,e,t,r),m.trigger("dragmove",{offset:e,target:n,throwDirection:f(e,t,h.allowedDirections),throwOutConfidence:h.throwOutConfidence(e,t,n)})}},C=function(e,t){var r=h.rotation(e,t,n,h.maxRotation);k.coordinateX=e||0,k.coordinateY=t||0,h.transform(n,e,t,r)},S=function(t,r,a,i){if(b.fromX=r,b.fromY=a,b.direction=i||f(r,a,h.allowedDirections),t===e.THROW_IN)e.appendToParent(n),_.setCurrentValue(0).setAtRest().setEndValue(1),m.trigger("throwin",{target:n,throwDirection:b.direction});else{if(t!==e.THROW_OUT)throw new Error("Invalid throw event.");e.appendToParent(n),D.setCurrentValue(0).setAtRest().setVelocity(100).setEndValue(1),m.trigger("throwout",{target:n,throwDirection:b.direction}),m.trigger(R[b.direction],{target:n,throwDirection:b.direction})}},u.on=m.on,u.trigger=m.trigger,u.throwIn=function(t,n,r){S(e.THROW_IN,t,n,r)},u.throwOut=function(t,n,r){S(e.THROW_OUT,t,n,r)},u.destroy=function(){j.destroy(),_.destroy(),D.destroy(),t.destroyCard(u)},u};p.makeConfig=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={allowedDirections:[d.default.RIGHT,d.default.LEFT,d.default.UP],isThrowOut:p.isThrowOut,maxRotation:20,maxThrowOutDistance:500,minThrowOutDistance:400,rotation:p.rotation,throwOutConfidence:p.throwOutConfidence,throwOutDistance:p.throwOutDistance,transform:p.transform};return a.default.assign({},t,e)},p.transform=function(e,t,n,r){e.style[(0,u.default)("transform")]="translate3d(0, 0, 0) translate("+t+"px, "+n+"px) rotate("+r+"deg)"},p.appendToParent=function(e){var t=e.parentNode,n=(0,l.elementChildren)(t),r=n.indexOf(e)+1!==n.length;return r&&(t.removeChild(e),t.appendChild(e)),r},p.prependToParent=function(e){var t=e.parentNode;t.removeChild(e),t.insertBefore(e,t.firstChild)},p.throwOutConfidence=function(e,t,n){var r=Math.min(Math.abs(e)/n.offsetWidth,1),a=Math.min(Math.abs(t)/n.offsetHeight,1);return Math.max(r,a)},p.isThrowOut=function(e,t,n,r){return 1===r},p.throwOutDistance=function(e,t){return a.default.random(e,t)},p.rotation=function(e,t,n,r){return Math.min(Math.max(e/n.offsetWidth,-1),1)*((t>0?1:-1)*Math.min(Math.abs(t)/100,1))*r},p.THROW_IN="in",p.THROW_OUT="out",t.default=p,e.exports=t.default}).call(this,n(3))},14:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={DOWN:Symbol("DOWN"),INVALID:Symbol("INVALID"),LEFT:Symbol("LEFT"),RIGHT:Symbol("RIGHT"),UP:Symbol("UP")};t.default=r,e.exports=t.default},17:function(e,t,n){e.exports=n(18)},18:function(e,t,n){"use strict";n.r(t);var r=n(16),a=n(1),i=n(2),o=n(5),s=n(4),u=n(6),c=n(0),d=n.n(c),l=n(15),h=n.n(l),f=n(9),p=(n(33),n(34)),v=n(44),g=p.Direction,m=function(e){function t(e){var n;Object(a.a)(this,t),n=Object(o.a)(this,Object(s.a)(t).call(this,e));var i=String(e.value).split("."),u=Object(r.a)(i,2),c=u[0],d=u[1];c=c.split("");for(var l=0;l<Math.ceil(c.length/3)-1;l++)c.splice(c.length-(l+3*(l+1)),0," ");var h=[c=c.join("")].concat([d]).filter((function(e){return e})).join(".");return n.state={number:h,romaji:v.web_convert(e.value,"R"),kanji:v.web_convert(e.value,"K"),hiragana:v.web_convert(e.value,"H"),isFront:!0},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleClick",value:function(e){this.setState({isFront:!this.state.isFront})}},{key:"front",value:function(){return d.a.createElement("div",{className:"front"},d.a.createElement(f.Textfit,null,d.a.createElement("span",{className:"number"},this.state.number)))}},{key:"back",value:function(){return d.a.createElement("div",{className:"back"},d.a.createElement(f.Textfit,null,d.a.createElement("span",{className:"number"},this.state.number),d.a.createElement("br",null),this.props.settings.dispRomaji&&d.a.createElement("span",{className:"romaji"},this.state.romaji),this.props.settings.dispRomaji&&d.a.createElement("br",null),this.props.settings.dispHiragana&&d.a.createElement("span",{className:"hiragana"},this.state.hiragana),this.props.settings.dispHiragana&&d.a.createElement("br",null),this.props.settings.dispKanji&&d.a.createElement("span",{className:"kanji"},this.state.kanji)))}},{key:"render",value:function(e){var t=this;return d.a.createElement("div",{className:"card",onClick:function(e){return t.handleClick(e)}},this.state.isFront?this.front():this.back())}}]),t}(c.Component),w=function(){function e(t){Object(a.a)(this,e),t=t||{},this.state={min:t.min||0,max:t.max||999999}}return Object(i.a)(e,[{key:"rand",value:function(e,t){return Math.floor(Math.random()*(t-e+1)+e)}},{key:"next",value:function(e){var t=(e||{}).level;if(0===t)return this.rand(0,11);if(1===t)return this.rand(0,101);if(2===t){var n=v.romaji_dict,r=Object.keys(n).slice(0,-1);return r[parseInt(Math.random()*r.length)]}return 3===t?this.rand(10,1e5):void 0}}]),e}(),O=function(e){function t(e){var n;Object(a.a)(this,t),n=Object(o.a)(this,Object(s.a)(t).call(this,e));var r=p.Stack(e.id,e.config||{});return t.Events.forEach((function(e){n.props[e]&&r.on(e,n.props[e])})),n.state={stack:r},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.state.stack;e.update(),this.setState({stack:e}),this.props.setStack&&this.props.setStack(e)}},{key:"componentDidUpdate",value:function(e){this.state.stack.update()}},{key:"render",value:function(){var e=this.props.children;return d.a.createElement("div",{id:this.props.id,className:this.props.className},d.a.Children.map(e,(function(e,n){var r=Object.keys(e.props).filter((function(e){return-1===t.Events.indexOf(e)})).reduce((function(t,n){return t[n]=e.props[n],t}),{});return d.a.createElement(e.type,r)})))}}]),t}(c.Component);O.Events=["throwout","throwoutend","throwoutleft","throwoutright","throwin","throwinend","dragstart","dragmove","dragend"];var b=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(s.a)(t).call(this,e))).ref=d.a.createRef(),n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return d.a.createElement("div",{ref:this.ref},["Romaji","Hiragana","Kanji"].map((function(t,n){return d.a.createElement("div",{key:"settingdisp"+String(n)},d.a.createElement("label",{htmlFor:"disp"+t},t),d.a.createElement("input",{type:"checkbox",name:"disp"+t,id:"disp"+t,defaultChecked:e.props.settings["disp"+t],onChange:e.props.handleInputChange}))})),"Level",Array(4).fill(0).map((function(t,n){return d.a.createElement("div",{key:"settinglevel"+n},d.a.createElement("label",{htmlFor:"level"+n},"Level"+n),d.a.createElement("input",{type:"radio",name:"level",id:"level"+n,value:n,defaultChecked:n===e.props.settings.level,onChange:e.props.handleInputChange}))})))}}]),t}(c.Component),k=function(e){function t(e,n){var r;Object(a.a)(this,t),r=Object(o.a)(this,Object(s.a)(t).call(this,e,n));var i=new w;return r.state={seen_cards:0,card_list:[],stack:null,generator:i,settings:{level:2,dispRomaji:!0}},r.newCard(),r.newCard(),r}return Object(u.a)(t,e),Object(i.a)(t,[{key:"newCard",value:function(){return this.state.seen_cards+=1,this.state.card_list.unshift({key:this.state.seen_cards,number:this.state.generator.next(this.state.settings)}),{card_list:this.state.card_list,seen_cards:this.state.seen_cards}}},{key:"handleThrowEnd",value:function(e){var t=parseInt(e.target.children[0].children[0].textContent,10),n=this.state.card_list.indexOf(t),r=this.state.card_list.slice();r.splice(n,1),this.state.card_list=r;var a=this.newCard();this.setState(a)}},{key:"settingsHandleInputChange",value:function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,r=t.name,a=this.state.settings;"level"===r&&(n=parseInt(n)),a[r]=n,this.setState({settings:a})}},{key:"render",value:function(){var e=this;return d.a.createElement("div",null,d.a.createElement("div",{id:"viewport"},d.a.createElement(O,{config:{allowedDirections:[g.RIGHT,g.LEFT]},id:"cardstack",className:"stack",setStack:function(t){return e.setState({stack:t})},ref:"stackEl",throwoutend:function(t){return e.handleThrowEnd(t)}},this.state.card_list.map((function(t){return d.a.createElement(m,{className:"card",value:t.number,key:t.key,settings:e.state.settings})})))),d.a.createElement(b,{settings:this.state.settings,handleInputChange:function(t){return e.settingsHandleInputChange(t)}}))}}]),t}(c.Component);h.a.render(d.a.createElement(k,null),document.getElementById("root"))},33:function(e,t,n){},34:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Stack=t.Direction=t.Card=void 0;var r=o(n(11)),a=o(n(14)),i=o(n(43));function o(e){return e&&e.__esModule?e:{default:e}}t.Card=r.default,t.Direction=a.default,t.Stack=i.default},42:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isTouchDevice=t.elementChildren=void 0;var r,a=n(8),i=(r=a)&&r.__esModule?r:{default:r};t.elementChildren=function(e){return i.default.filter(e.childNodes,{nodeType:1})},t.isTouchDevice=function(){return"ontouchstart"in window||navigator.msMaxTouchPoints}},43:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(n(8)),a=s(n(12)),i=s(n(13)),o=s(n(11));function s(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t){var n=void 0,s=void 0,u=void 0,c=void 0,d=void 0;return c={},u=new i.default.SpringSystem,n=(0,a.default)(),s=[],d=e,c.getConfig=function(){return t},c.getIndex=function(){return s},c.getSpringSystem=function(){return u},c.on=function(e,t){n.on(e,t)},c.createCard=function(e,t){var r=(0,o.default)(c,e,t);return["throwout","throwoutend","throwoutleft","throwoutright","throwoutup","throwoutdown","throwin","throwinend","dragstart","dragmove","dragend"].forEach((function(e){r.on(e,(function(t){n.trigger(e,t)}))})),s.push({card:r,element:e}),r},c.getCard=function(e){var t=r.default.find(s,{element:e});return t?t.card:null},c.destroyCard=function(e){return n.trigger("destroyCard",e),r.default.remove(s,{card:e})},c.update=function(){var e=this,t=document.getElementById(d).children;Array.prototype.slice.call(t).forEach((function(t){e.getCard(t)||e.createCard(t)})),s.forEach((function(t){t.element.parentNode||e.destroyCard(t.card)}))},c},e.exports=t.default},44:function(e,t){var n={".":"ten",0:"zero",1:"ichi",2:"ni",3:"san",4:"yon",5:"go",6:"roku",7:"nana",8:"hachi",9:"kyuu",10:"juu",100:"hyaku",1e3:"sen",1e4:"man",1e8:"oku",300:"sanbyaku",600:"roppyaku",800:"happyaku",3e3:"sanzen",8e3:"hassen"},r={".":"\u70b9",0:"\u96f6",1:"\u4e00",2:"\u4e8c",3:"\u4e09",4:"\u56db",5:"\u4e94",6:"\u516d",7:"\u4e03",8:"\u516b",9:"\u4e5d",10:"\u5341",100:"\u767e",1e3:"\u5343",1e4:"\u4e07",1e8:"\u5104",300:"\u4e09\u767e",600:"\u516d\u767e",800:"\u516b\u767e",3e3:"\u4e09\u5343",8e3:"\u516b\u5343"},a={".":"\u3066\u3093",0:"\u30bc\u30ed",1:"\u3044\u3061",2:"\u306b",3:"\u3055\u3093",4:"\u3088\u3093",5:"\u3054",6:"\u308d\u304f",7:"\u306a\u306a",8:"\u306f\u3061",9:"\u304d\u3085\u3046",10:"\u3058\u3085\u3046",100:"\u3072\u3083\u304f",1e3:"\u305b\u3093",1e4:"\u307e\u3093",1e8:"\u304a\u304f",300:"\u3055\u3093\u3073\u3083\u304f",600:"\u308d\u3063\u3074\u3083\u304f",800:"\u306f\u3063\u3074\u3083\u304f",3e3:"\u3055\u3093\u305c\u3093",8e3:"\u306f\u3063\u305b\u3093"},i={K:r,H:a,R:n},o=function(e,t){return t[e]},s=function(e,t){if("0"===e[0])return o(e[1],t);if("10"===e)return t[10];if("1"===e[0])return t[10]+" "+o(e[1],t);if("0"===e[1])return o(e[0],t)+" "+t[10];var n=[];return e.split("").forEach((function(e){return n.push(t[e])})),n.splice(1,0,t[10]),n.join(" ")},u=function(e,t){var n=[];return"1"===e[0]?n.push(t[100]):"3"===e[0]?n.push(t[300]):"6"===e[0]?n.push(t[600]):"8"===e[0]?n.push(t[800]):(n.push(t[e[0]]),n.push(t[100])),"00"===e.slice(1)&&3===e.length||("0"===e[1]?n.push(t[e[2]]):n.push(s(e.slice(1),t))),n.join(" ")},c=function(e,t){var n=[];if("0000"===e)return"";for(;"0"===e[0];)e=e.slice(1);return 1===e.length?o(e,t):2===e.length?s(e,t):3===e.length?u(e,t):("1"===e[0]?n.push(t[1e3]):"3"===e[0]?n.push(t[3e3]):"8"===e[0]?n.push(t[8e3]):(n.push(t[e[0]]),n.push(t[1e3])),"000"===e.slice(1)&&4===e.length||("0"===e[1]?n.push(s(e.slice(2),t)):n.push(u(e.slice(1),t))),n.join(" "))},d=function(e,t){return 1===e.length?o(e,t):2===e.length?s(e,t):3===e.length?u(e,t):4===e.length?c(e,t):function(e,t){var n=[];if(1===e.slice(0,-4).length)n.push(t[e.slice(0,-4)]),n.push(t[1e4]);else if(2===e.slice(0,-4).length)n.push(s(e.slice(0,2),t)),n.push(t[1e4]);else if(3===e.slice(0,-4).length)n.push(u(e.slice(0,3),t)),n.push(t[1e4]);else if(4===e.slice(0,-4).length)n.push(c(e.slice(0,4),t)),n.push(t[1e4]);else{if(5!==e.slice(0,-4).length)return"Not yet implemented, please choose a lower number.";n.push(t[e[0]]),n.push(t[1e8]),n.push(c(e.slice(1,5),t)),"0000"!==e.slice(1,5)&&n.push(t[1e4])}return n.push(c(e.slice(-4),t)),n.join(" ")}(e,t)};e.exports={web_convert:function(e,t){var n=null;return n=(e=(e=(e=(e=String(e)).replace(",","")).replace(/^0+/,"0").replace(/\.\d+0+$/,"")).replace(/^0([1-9])/,"$1")).indexOf(".")>=0?function(e,t){var n="R"===t?"t":"\u3063",r="",a="";return r=(e=e.split("."))[1].split("").forEach((function(e){return o(e,i[t])})).join(" "),a=d(e[0],t),"0"===e[0][e[0].length-1]&&"0"!==e[0][e[0].length-2]&&(a=a.slice(0,-1)+n),[a,i[t]["."],r].join(" ")}(e,t):d(e,i[t]),"R"!==t&&(n=n.replace(" ","")),n},romaji_dict:n,kanji_dict:r,hiragana_dict:a}}},[[17,1,2]]]);
//# sourceMappingURL=main.da6d6283.chunk.js.map