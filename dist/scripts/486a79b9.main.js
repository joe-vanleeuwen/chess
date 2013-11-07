!function(a){"use strict";function b(a){return new RegExp("(^|\\s+)"+a+"(\\s+|$)")}function c(a,b){var c=d(a,b)?f:e;c(a,b)}var d,e,f;"classList"in document.documentElement?(d=function(a,b){return a.classList.contains(b)},e=function(a,b){a.classList.add(b)},f=function(a,b){a.classList.remove(b)}):(d=function(a,c){return b(c).test(a.className)},e=function(a,b){d(a,b)||(a.className=a.className+" "+b)},f=function(a,c){a.className=a.className.replace(b(c)," ")});var g={hasClass:d,addClass:e,removeClass:f,toggleClass:c,has:d,add:e,remove:f,toggle:c};"function"==typeof define&&define.amd?define(g):a.classie=g}(window),function(a){"use strict";var b=document.documentElement,c=function(){};b.addEventListener?c=function(a,b,c){a.addEventListener(b,c,!1)}:b.attachEvent&&(c=function(b,c,d){b[c+d]=d.handleEvent?function(){var b=a.event;b.target=b.target||b.srcElement,d.handleEvent.call(d,b)}:function(){var c=a.event;c.target=c.target||c.srcElement,d.call(b,c)},b.attachEvent("on"+c,b[c+d])});var d=function(){};b.removeEventListener?d=function(a,b,c){a.removeEventListener(b,c,!1)}:b.detachEvent&&(d=function(a,b,c){a.detachEvent("on"+b,a[b+c]);try{delete a[b+c]}catch(d){a[b+c]=void 0}});var e={bind:c,unbind:d};"function"==typeof define&&define.amd?define(e):a.eventie=e}(this),function(){"use strict";function a(){}function b(a,b){for(var c=a.length;c--;)if(a[c].listener===b)return c;return-1}function c(a){return function(){return this[a].apply(this,arguments)}}var d=a.prototype;d.getListeners=function(a){var b,c,d=this._getEvents();if("object"==typeof a){b={};for(c in d)d.hasOwnProperty(c)&&a.test(c)&&(b[c]=d[c])}else b=d[a]||(d[a]=[]);return b},d.flattenListeners=function(a){var b,c=[];for(b=0;b<a.length;b+=1)c.push(a[b].listener);return c},d.getListenersAsObject=function(a){var b,c=this.getListeners(a);return c instanceof Array&&(b={},b[a]=c),b||c},d.addListener=function(a,c){var d,e=this.getListenersAsObject(a),f="object"==typeof c;for(d in e)e.hasOwnProperty(d)&&-1===b(e[d],c)&&e[d].push(f?c:{listener:c,once:!1});return this},d.on=c("addListener"),d.addOnceListener=function(a,b){return this.addListener(a,{listener:b,once:!0})},d.once=c("addOnceListener"),d.defineEvent=function(a){return this.getListeners(a),this},d.defineEvents=function(a){for(var b=0;b<a.length;b+=1)this.defineEvent(a[b]);return this},d.removeListener=function(a,c){var d,e,f=this.getListenersAsObject(a);for(e in f)f.hasOwnProperty(e)&&(d=b(f[e],c),-1!==d&&f[e].splice(d,1));return this},d.off=c("removeListener"),d.addListeners=function(a,b){return this.manipulateListeners(!1,a,b)},d.removeListeners=function(a,b){return this.manipulateListeners(!0,a,b)},d.manipulateListeners=function(a,b,c){var d,e,f=a?this.removeListener:this.addListener,g=a?this.removeListeners:this.addListeners;if("object"!=typeof b||b instanceof RegExp)for(d=c.length;d--;)f.call(this,b,c[d]);else for(d in b)b.hasOwnProperty(d)&&(e=b[d])&&("function"==typeof e?f.call(this,d,e):g.call(this,d,e));return this},d.removeEvent=function(a){var b,c=typeof a,d=this._getEvents();if("string"===c)delete d[a];else if("object"===c)for(b in d)d.hasOwnProperty(b)&&a.test(b)&&delete d[b];else delete this._events;return this},d.removeAllListeners=c("removeEvent"),d.emitEvent=function(a,b){var c,d,e,f,g=this.getListenersAsObject(a);for(e in g)if(g.hasOwnProperty(e))for(d=g[e].length;d--;)c=g[e][d],c.once===!0&&this.removeListener(a,c.listener),f=c.listener.apply(this,b||[]),f===this._getOnceReturnValue()&&this.removeListener(a,c.listener);return this},d.trigger=c("emitEvent"),d.emit=function(a){var b=Array.prototype.slice.call(arguments,1);return this.emitEvent(a,b)},d.setOnceReturnValue=function(a){return this._onceReturnValue=a,this},d._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},d._getEvents=function(){return this._events||(this._events={})},"function"==typeof define&&define.amd?define(function(){return a}):"object"==typeof module&&module.exports?module.exports=a:this.EventEmitter=a}.call(this),function(a){"use strict";function b(a){if(a){if("string"==typeof d[a])return a;a=a.charAt(0).toUpperCase()+a.slice(1);for(var b,e=0,f=c.length;f>e;e++)if(b=c[e]+a,"string"==typeof d[b])return b}}var c="Webkit Moz ms Ms O".split(" "),d=document.documentElement.style;"function"==typeof define&&define.amd?define(function(){return b}):a.getStyleProperty=b}(window),function(a){"use strict";function b(a){var b=parseFloat(a),c=-1===a.indexOf("%")&&!isNaN(b);return c&&b}function c(){for(var a={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},b=0,c=g.length;c>b;b++){var d=g[b];a[d]=0}return a}function d(a){function d(a){if("string"==typeof a&&(a=document.querySelector(a)),a&&"object"==typeof a&&a.nodeType){var d=f(a);if("none"===d.display)return c();var i={};i.width=a.offsetWidth,i.height=a.offsetHeight;for(var j=i.isBorderBox=!(!h||!d[h]||"border-box"!==d[h]),k=0,l=g.length;l>k;k++){var m=g[k],n=d[m],o=parseFloat(n);i[m]=isNaN(o)?0:o}var p=i.paddingLeft+i.paddingRight,q=i.paddingTop+i.paddingBottom,r=i.marginLeft+i.marginRight,s=i.marginTop+i.marginBottom,t=i.borderLeftWidth+i.borderRightWidth,u=i.borderTopWidth+i.borderBottomWidth,v=j&&e,w=b(d.width);w!==!1&&(i.width=w+(v?0:p+t));var x=b(d.height);return x!==!1&&(i.height=x+(v?0:q+u)),i.innerWidth=i.width-(p+t),i.innerHeight=i.height-(q+u),i.outerWidth=i.width+r,i.outerHeight=i.height+s,i}}var e,h=a("boxSizing");return function(){if(h){var a=document.createElement("div");a.style.width="200px",a.style.padding="1px 2px 3px 4px",a.style.borderStyle="solid",a.style.borderWidth="1px 2px 3px 4px",a.style[h]="border-box";var c=document.body||document.documentElement;c.appendChild(a);var d=f(a);e=200===b(d.width),c.removeChild(a)}}(),d}var e=document.defaultView,f=e&&e.getComputedStyle?function(a){return e.getComputedStyle(a,null)}:function(a){return a.currentStyle},g=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define(["get-style-property/get-style-property"],d):a.getSize=d(a.getStyleProperty)}(window),function(a){"use strict";function b(a,b){for(var c in b)a[c]=b[c];return a}function c(){}function d(d,e,g,j,k){function m(a,c){this.element=a,this.options=b({},this.options),b(this.options,c),this._create()}function n(){return!1}function o(a,b){a.x=void 0!==b.pageX?b.pageX:b.clientX,a.y=void 0!==b.pageY?b.pageY:b.clientY}var p=j("transform"),q=!!j("perspective");b(m.prototype,e.prototype),m.prototype.options={},m.prototype._create=function(){this.position={},this._getPosition(),this.startPoint={x:0,y:0},this.dragPoint={x:0,y:0},this.startPosition=b({},this.position);var a=h(this.element);"relative"!==a.position&&"absolute"!==a.position&&(this.element.style.position="relative"),this.enable(),this.setHandles()},m.prototype.setHandles=function(){this.handles=this.options.handle?this.element.querySelectorAll(this.options.handle):[this.element];for(var a=0,b=this.handles.length;b>a;a++){var c=this.handles[a];g.bind(c,"mousedown",this),g.bind(c,"touchstart",this),s(c)}};var r="attachEvent"in f.documentElement,s=r?function(a){"IMG"===a.nodeName&&(a.ondragstart=n);for(var b=a.querySelectorAll("img"),c=0,d=b.length;d>c;c++){var e=b[c];e.ondragstart=n}}:c;m.prototype._getPosition=function(){var a=h(this.element),b=parseInt(a.left,10),c=parseInt(a.top,10);this.position.x=isNaN(b)?0:b,this.position.y=isNaN(c)?0:c,this._addTransformPosition(a)},m.prototype._addTransformPosition=function(a){if(p){var b=a[p];if(0===b.indexOf("matrix")){var c=b.split(","),d=0===b.indexOf("matrix3d")?12:4,e=parseInt(c[d],10),f=parseInt(c[d+1],10);this.position.x+=e,this.position.y+=f}}},m.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},m.prototype.getTouch=function(a){for(var b=0,c=a.length;c>b;b++){var d=a[b];if(d.identifier===this.pointerIdentifier)return d}},m.prototype.onmousedown=function(a){this.dragStart(a,a)},m.prototype.ontouchstart=function(a){this.isDragging||this.dragStart(a,a.changedTouches[0])},m.prototype.dragStart=function(b,c){if(this.isEnabled){b.preventDefault?b.preventDefault():b.returnValue=!1;var e="touchstart"===b.type;this.pointerIdentifier=c.identifier,this._getPosition(),this.measureContainment(),o(this.startPoint,c),this.startPosition.x=this.position.x,this.startPosition.y=this.position.y,this.setLeftTop(),this.dragPoint.x=0,this.dragPoint.y=0,this._bindEvents({events:e?["touchmove","touchend","touchcancel"]:["mousemove","mouseup"],node:b.preventDefault?a:f}),d.add(this.element,"is-dragging"),this.isDragging=!0,this.emitEvent("dragStart",[this,b,c]),this.animate()}},m.prototype._bindEvents=function(a){for(var b=0,c=a.events.length;c>b;b++){var d=a.events[b];g.bind(a.node,d,this)}this._boundEvents=a},m.prototype._unbindEvents=function(){for(var a=this._boundEvents,b=0,c=a.events.length;c>b;b++){var d=a.events[b];g.unbind(a.node,d,this)}delete this._boundEvents},m.prototype.measureContainment=function(){var a=this.options.containment;if(a){this.size=k(this.element);var b=this.element.getBoundingClientRect(),c=i(a)?a:"string"==typeof a?f.querySelector(a):this.element.parentNode;this.containerSize=k(c);var d=c.getBoundingClientRect();this.relativeStartPosition={x:b.left-d.left,y:b.top-d.top}}},m.prototype.onmousemove=function(a){this.dragMove(a,a)},m.prototype.ontouchmove=function(a){var b=this.getTouch(a.changedTouches);b&&this.dragMove(a,b)},m.prototype.dragMove=function(a,b){if(o(this.dragPoint,b),this.dragPoint.x-=this.startPoint.x,this.dragPoint.y-=this.startPoint.y,this.options.containment){var c=this.relativeStartPosition.x,d=this.relativeStartPosition.y;this.dragPoint.x=Math.max(this.dragPoint.x,-c),this.dragPoint.y=Math.max(this.dragPoint.y,-d),this.dragPoint.x=Math.min(this.dragPoint.x,this.containerSize.width-c-this.size.width),this.dragPoint.y=Math.min(this.dragPoint.y,this.containerSize.height-d-this.size.height)}this.position.x=this.startPosition.x+this.dragPoint.x,this.position.y=this.startPosition.y+this.dragPoint.y,this.emitEvent("dragMove",[this,a,b])},m.prototype.onmouseup=function(a){this.dragEnd(a,a)},m.prototype.ontouchend=function(a){var b=this.getTouch(a.changedTouches);b&&this.dragEnd(a,b)},m.prototype.dragEnd=function(a,b){this.isDragging=!1,delete this.pointerIdentifier,p&&(this.element.style[p]="",this.setLeftTop()),this._unbindEvents(),d.remove(this.element,"is-dragging"),this.emitEvent("dragEnd",[this,a,b])},m.prototype.ontouchcancel=function(a){var b=this.getTouch(a.changedTouches);this.dragEnd(a,b)},m.prototype.animate=function(){if(this.isDragging){this.positionDrag();var a=this;l(function(){a.animate()})}};var t=q?function(a,b){return"translate3d( "+a+"px, "+b+"px, 0)"}:function(a,b){return"translate( "+a+"px, "+b+"px)"};return m.prototype.setLeftTop=function(){this.element.style.left=this.position.x+"px",this.element.style.top=this.position.y+"px"},m.prototype.positionDrag=p?function(){this.element.style[p]=t(this.dragPoint.x,this.dragPoint.y)}:m.prototype.setLeftTop,m.prototype.enable=function(){this.isEnabled=!0},m.prototype.disable=function(){this.isEnabled=!1,this.isDragging&&this.dragEnd()},m}for(var e,f=a.document,g=f.defaultView,h=g&&g.getComputedStyle?function(a){return g.getComputedStyle(a,null)}:function(a){return a.currentStyle},i="object"==typeof HTMLElement?function(a){return a instanceof HTMLElement}:function(a){return a&&"object"==typeof a&&1===a.nodeType&&"string"==typeof a.nodeName},j=0,k="webkit moz ms o".split(" "),l=a.requestAnimationFrame,m=a.cancelAnimationFrame,n=0;n<k.length&&(!l||!m);n++)e=k[n],l=l||a[e+"RequestAnimationFrame"],m=m||a[e+"CancelAnimationFrame"]||a[e+"CancelRequestAnimationFrame"];l&&m||(l=function(b){var c=(new Date).getTime(),d=Math.max(0,16-(c-j)),e=a.setTimeout(function(){b(c+d)},d);return j=c+d,e},m=function(b){a.clearTimeout(b)}),"function"==typeof define&&define.amd?define(["classie/classie","eventEmitter/EventEmitter","eventie/eventie","get-style-property/get-style-property","get-size/get-size"],d):a.Draggabilly=d(a.classie,a.EventEmitter,a.eventie,a.getStyleProperty,a.getSize)}(window);var chess={};chess.setup={rank:["1","2","3","4","5","6","7","8"],file:["a","b","c","d","e","f","g","h"],squares:[],attackedSquares:[],blockOrCapture:[],PathDetails:function(a){this.path=!1,this.distance=0,this.fileDiff={},this.rankDiff={},this.position=a.position,this.newPosition=a.newPosition||"",this.castle={squares:[]},this.dependenciesPass=!0,this.player=!1||a.player,this.targeting=!1||a.targeting,this.canTarget=!1||a.canTarget,this.promotion={promote:!1},this.notation={}},pgn:[],pgnText:"",darkSquare:"rgb(28, 150, 189)",lightSquare:"rgb(183, 238, 248)",percentages:{top:{8:"0%",7:"12.5%",6:"25%",5:"37.5%",4:"50%",3:"62.5%",2:"75%",1:"87.5%"},left:{a:"0%",b:"12.5%",c:"25%",d:"37.5%",e:"50%",f:"62.5%",g:"75%",h:"87.5%"}},pieceType:{p:"pawn",r:"rook",n:"knight",b:"bishop",q:"queen",k:"king"},piecePosition:{2:"wp",a1:"wr",b1:"wn",c1:"wb",d1:"wq",e1:"wk",f1:"wb",g1:"wn",h1:"wr",7:"bp",a8:"br",b8:"bn",c8:"bb",d8:"bq",e8:"bk",f8:"bb",g8:"bn",h8:"br"},color:{w:"white",b:"black"},opponentColor:{b:"white",w:"black"}},chess.setup.colorCycles={1:[chess.setup.lightSquare,chess.setup.darkSquare],2:[chess.setup.darkSquare,chess.setup.lightSquare]},chess.utilities={},chess.utilities.newGame=function(){var a=chess.setup;for(i=0;64>i;i++){var b=a.rank[Math.floor(i/8)],c=a.file[i%8],d=c+b;a.squares.push(d);var e={top:a.percentages.top[b],left:a.percentages.left[c]},f=$.extend({width:"12.5%",height:"12.5%",position:"absolute",background:a.colorCycles[b%2+1][i%2]},e),g='<div class="board-square '+d+'"></div>';$(".chess-board").prepend($(g).css(f));var g="<div></div>";$(".chess-board").prepend($(g).css(f));var h={white:whitePieces,black:blackPieces},j=a.piecePosition[d]||a.piecePosition[b];if(j){var k=j.slice(1),l=a.color[j.slice(0,1)],m=a.opponentColor[j.slice(0,1)],n=new Pieces[a.pieceType[k]]({image:j,position:d,player:l,opponent:m,cssPosition:e});h[l].add(n)}}},chess.utilities.findClosest=function(a){var b="#"+a.position,c={left:parseInt($(b).css("left").slice(0,-2)),top:parseInt($(b).css("top").slice(0,-2))},d={width:parseInt($(".chess-board").css("width").slice(0,-2)),height:parseInt($(".chess-board").css("height").slice(0,-2))},e={left:d.width,top:d.height},f={};return $(".board-square").each(function(){var a={left:parseInt($(this).css("left").slice(0,-2)),top:parseInt($(this).css("top").slice(0,-2))},b={left:Math.abs(c.left-a.left),top:Math.abs(c.top-a.top)};b.left<=e.left&&b.top<=e.top&&(e={left:b.left,top:b.top},f={left:a.left,top:a.top})}),f={left:(100*(f.left/d.width)).toString()+"%",top:(100*(f.top/d.height)).toString()+"%"}},chess.utilities.reassignId=function(a){var b=chess.setup,c="";return b.file.forEach(function(d){b.percentages.left[d]===a.newPercentages.left&&(c+=d)}),b.rank.forEach(function(d){b.percentages.top[d]===a.newPercentages.top&&(c+=d)}),c},chess.utilities.innerSquares=function(a,b,c,d){var e,f,g={squares:[],direction:"greater"};for(d.distance>1&&(b.original<b.target?(e=b.original+1,f=b.target):(e=b.target+1,f=b.original,g.direction="lesser")),i=e;f>i;i++)"rank"===d.path&&g.squares.push(a[i].toString()+c.original),"file"===d.path&&g.squares.push(c.original+a[i].toString()),"diagonal"===d.path&&g.squares.push(a[i]);return g},chess.utilities.isAPath=function(a){var b=chess.setup,c={original:a.position.slice(0,1),target:a.newPosition.slice(0,1)},d={original:a.position.slice(1),target:a.newPosition.slice(1)},e={original:b.file.indexOf(c.original),target:b.file.indexOf(c.target)},f={original:b.rank.indexOf(d.original),target:b.rank.indexOf(d.target)};if(e.diff=Math.abs(e.original-e.target),f.diff=Math.abs(f.original-f.target),a.fileDiff=e,a.rankDiff=f,3===e.diff+f.diff&&(a.path="l-shape",a.distance=3),0===e.diff&&(a.path="file",a.distance=f.diff,a.innerSquares=chess.utilities.innerSquares(b.rank,f,c,a).squares),0===f.diff&&(a.path="rank",a.distance=e.diff,a.innerSquares=chess.utilities.innerSquares(b.file,e,d,a).squares),0===Math.abs(e.diff-f.diff)){a.path="diagonal",a.distance=e.diff;var g=chess.utilities.innerSquares(b.rank,f,c,a),h=chess.utilities.innerSquares(b.file,e,d,a),i=[];g.direction===h.direction?_.zip(h.squares,g.squares).forEach(function(a){i.push(a.join(""))}):_.zip(h.squares,g.squares.reverse()).forEach(function(a){i.push(a.join(""))}),a.innerSquares=i}return 0===a.distance&&(a.path=!1),a},chess.utilities.findAPath=function(a){function b(a,b,c){return a&&b&&c?a+b:[]}var c={},d=[],e=a.get("paths"),f=a.get("position"),g=f.slice(0,1),h=f.slice(1),j=chess.setup.rank.indexOf(h),k=chess.setup.file.indexOf(g);if(c.file=function(){for(i=0;8>i;i++)d.push(g+chess.setup.rank[i])},c.rank=function(){for(i=0;8>i;i++)d.push(chess.setup.file[i]+h)},c.diagonal=function(){function a(b,c,d,e,f){return chess.setup.file[b]&&chess.setup.rank[c]?(f.push(chess.setup.file[b]+chess.setup.rank[c]),a(b+d,c+e,d,e,f)):f}d.push(a(k,j,1,1,[])),d.push(a(k,j,-1,-1,[])),d.push(a(k,j,1,-1,[])),d.push(a(k,j,-1,1,[]))},c["l-shape"]=function(){function a(b,c,d,e,f,g){return g++,chess.setup.file[b]&&chess.setup.rank[c]&&f.push(chess.setup.file[b]+chess.setup.rank[c]),2>g?a(b+d,c+e,d,e,f):f}d.push(a(k+1,j+2,-2,0,[],0)),d.push(a(k+1,j-2,-2,0,[],0)),d.push(a(k+2,j-1,0,2,[],0)),d.push(a(k-2,j-1,0,2,[],0))},"king"===a.get("piece"))d.push(chess.utilities.kingMoves(a));else if("pawn"===a.get("piece")){if("white"===a.get("player"))var l=1;else var l=-1;d.push(b(chess.setup.file[k],+chess.setup.rank[j+l],!0)),d.push(b(chess.setup.file[k],+chess.setup.rank[j+2*l],!a.get("moved"))),d.push(b(chess.setup.file[k+1],+chess.setup.rank[j+l],!0)),d.push(b(chess.setup.file[k-1],+chess.setup.rank[j+l],!0))}else e.forEach(function(a){c[a]()});d=_.union(_.flatten(d));var m=d.indexOf(f);return m>-1&&d.splice(m,1),d},chess.utilities.isTargeted=function(a,b,c){var d=chess.setup;a.forEach(function(a){if(b.get("position")!==a){var e=new d.PathDetails({position:b.get("position"),newPosition:a,targeting:!0,canTarget:!0});b.get("paths"),e=$.extend(e,b.checkMove(e)),e.dependenciesPass&&e.canTarget&&-1===d.attackedSquares.indexOf(a)&&(d.attackedSquares.push(a),a===c&&(d.blockOrCapture.push(e.position),d.blockOrCapture.push(e.innerSquares)))}})},chess.utilities.isKingInCheck=function(a,b){if(b.dependenciesPass){var c=chess.setup;c.attackedSquares=[],c.blockOrCapture=[];var d,e;"white"===a?(d=whitePieces,e=blackPieces):(d=blackPieces,e=whitePieces);var f=d.findWhere({piece:"king"}),g=f.get("position");if(e.each(function(a,b){chess.utilities.isTargeted(chess.utilities.findAPath(a),a,g,b)}),c.squares.forEach(function(a,b){var d=c.rank[Math.floor(b/8)];$("."+a).css("background",c.colorCycles[d%2+1][b%2]),c.attackedSquares.indexOf(a)>-1&&$("."+a).css("background","rgba(233, 53, 146, 0.298039)")}),b.castle.squares.length>0){if(b.castle.squares.forEach(function(a){c.attackedSquares.indexOf(a)>-1&&(b.dependenciesPass=!1)}),b.dependenciesPass){var h=b.castle.rookPiece;h.set({position:b.castle.newRookPosition,cssPosition:b.castle.newCssPosition}),h.instruct(),b.notation.castle=!0}}else c.attackedSquares.indexOf(g)>-1&&(b.dependenciesPass=!1)}return b.dependenciesPass},chess.utilities.kingMoves=function(a){var b=[],c=chess.setup.file.indexOf(a.get("position").slice(0,1)),d=chess.setup.rank.indexOf(a.get("position").slice(1));c=0===c?0:c-1,d=0===d?0:d-1;var e=0===c?c+2:c+3,f=0===d?d+2:d+3;e=6===c?8:e,f=6===d?8:f;var g,h;for(g=c;e>g;g++)for(h=d;f>h;h++)b.push(chess.setup.file[g]+chess.setup.rank[h]);return b},chess.utilities.squareSearch=function(a,b,c,d,e){a.forEach(function(a){var f=new chess.setup.PathDetails({position:d,newPosition:a});f=c.checkMove(f);var g=blackPieces.findWhere({position:f.newPosition})||whitePieces.findWhere({position:f.newPosition});g&&g.get("player")!==b&&g.set("position","MIA"),c.set("position",f.newPosition),f.dependenciesPass&&e(f),g&&"MIA"===g.get("position")&&g.set("position",f.newPosition),c.set("position",d)})},chess.utilities.checkmate=function(a,b){function c(a){chess.setup.attackedSquares.indexOf(a.newPosition)<0&&(m=!0)}function d(a){chess.utilities.isKingInCheck(k,a)&&chess.setup.attackedSquares.indexOf(j)<0&&(n=!1,h.push(a.newPosition))}function e(a){var b=g.at(a);void 0!==b&&(chess.utilities.squareSearch(chess.utilities.findAPath(b),k,b,b.get("position"),f),l||(a++,e(a)))}function f(a){chess.utilities.isKingInCheck(k,a)&&chess.setup.attackedSquares.indexOf(g.findWhere({piece:"king"}).get("position"))<0&&(l=!0)}var g="white"===a?whitePieces:blackPieces,h=[],i=g.findWhere({piece:"king"}),j=i.get("position"),k=g.at(0).get("player");if(chess.utilities.isKingInCheck(k,b)){var l=!1;e(0),l||(console.log("STALEMATE!!"),b.notation.stalemate=!0)}else{var m=!1;if(chess.utilities.squareSearch(chess.utilities.kingMoves(i),k,i,j,c),!m){var n=!0,o=_.union(_.flatten(chess.setup.blockOrCapture));g.each(function(a){var b=a.get("position");chess.utilities.squareSearch(o,k,a,b,d)})}h.length>0&&h.forEach(function(a){$("."+a).css("background","rgba(140, 30, 56, 0.8)")}),n?b.notation.checkmate=!0:b.notation.check=!0}chess.utilities.toPGN(b)},chess.utilities.toPGN=function(a){var b=_.template($("#notation").text()),c={},d="";if(a.notation.castle)d+=a.notation.side;else{var e=a.notation.piece;if(d+=e.get("notation"),"king"!==e.get("piece")&&"pawn"!==e.get("piece")){var f=e.collection.where({piece:e.get("piece")});f.splice(f.indexOf(e),1),e.set("position","MIA");var g=_.filter(f,function(b){var c=new chess.setup.PathDetails({newPosition:a.newPosition,position:b.get("position")});return b.checkMove(c).dependenciesPass?b:void 0});e.set("position",a.newPosition);var h=a.position;g.length>0&&(g=_.filter(g,function(a){return a.get("position").slice(0,1)===h.slice(0,1)?(d+=h.slice(1),a):void 0}),0===g.length&&(d+=h.slice(0,1)))}a.notation.capture&&("pawn"===e.get("piece")&&(d+=a.position.slice(0,1)),d+="x"),d+=e.get("position"),a.notation.promote&&(d+="="+a.notation.pieceToken),a.notation.check&&(d+="+"),a.notation.checkmate&&(d+="#")}chess.setup.pgn.push(d),0===chess.setup.pgn.length%2?(c.blackMove=d,$(".all-moves").children().last().children().last().text(d),chess.setup.pgnText+=" "+c.blackMove+" "):(c.number=1===chess.setup.pgn.length?1:chess.setup.pgn.length/2+.5,c.whiteMove=d,$(".all-moves").append(b({notation:c})),chess.setup.pgnText+=c.number+". "+c.whiteMove),$(".last-move").text(d)},PromotionView=Backbone.View.extend({className:"promotion-view",initialize:function(a){this.options=a;var b=this;this.listenTo(this.options.pawn,"destroy",function(){b.remove()}),$(".chess-board").append(this.$el),this.render(this.options)},render:function(a){new QueenView(a),new RookView(a),new KnightView(a),new BishopView(a)}}),PromotionPiecesView=Backbone.View.extend({className:"promote",initialize:function(a){this.options=a,$(".promotion-view").append(this.$el),this.render()},promote:function(){var a=this.options.pawn,b=this.getAttributes(a),c=a.collection;a.destroy();var d=c.add(this.chosen(b)).get("notation").toUpperCase();this.options.notation.promote=!0,this.options.notation.pieceToken=d,chess.utilities.checkmate(b.opponent,this.options)},getAttributes:function(a){return{position:a.get("position"),player:a.get("player"),opponent:a.get("opponent"),cssPosition:a.get("cssPosition")}}}),QueenView=PromotionPiecesView.extend({events:{click:"promote"},render:function(){this.image=this.options.pawn.get("image").slice(0,1)+"q",this.$el.css({background:'url("../images/'+this.image+'.png") no-repeat center center',"background-size":"cover"})},chosen:function(a){return new Pieces.queen($.extend(a,{image:this.image}))}}),RookView=PromotionPiecesView.extend({events:{click:"promote"},render:function(){this.image=this.options.pawn.get("image").slice(0,1)+"r",this.$el.css({background:'url("../images/'+this.image+'.png") no-repeat center center',left:"20%","background-size":"cover"})},chosen:function(a){return new Pieces.rook($.extend(a,{image:this.image}))}}),KnightView=PromotionPiecesView.extend({events:{click:"promote"},render:function(){this.image=this.options.pawn.get("image").slice(0,1)+"n",this.$el.css({background:'url("../images/'+this.image+'.png") no-repeat center center',left:"42%","background-size":"cover"})},chosen:function(a){return new Pieces.knight($.extend(a,{image:this.image}))}}),BishopView=PromotionPiecesView.extend({events:{click:"promote"},render:function(){this.image=this.options.pawn.get("image").slice(0,1)+"b",this.$el.css({background:'url("../images/'+this.image+'.png") no-repeat center center',left:"65%","background-size":"cover"})},chosen:function(a){return new Pieces.bishop($.extend(a,{image:this.image}))}}),CapturedPieceView=Backbone.View.extend({className:"captured",initialize:function(){$("."+this.model.get("player")).append(this.$el),this.render()},render:function(){this.$el.css({background:'url("../images/'+this.model.get("image")+'.png") no-repeat center center',"background-size":"cover",width:"20%",height:"45%",margin:"1% -3% 0"})}}),PieceView=Backbone.View.extend({className:"square",events:{mouseup:"validateMove",mousedown:"bringToFront"},initialize:function(a){this.options=a,$(".chess-board").append(this.$el);var b=this;this.listenTo(this.model,"destroy",function(){b.remove()}),this.listenTo(this.model,"change:cssPosition",function(){this.$el.css(this.model.get("cssPosition")),this.$el.attr("id",this.model.get("position"))}),this.render()},position:function(){this.$el.css(this.model.get("cssPosition"))},setId:function(){return this.$el.attr("id",this.model.get("position")),this.model.get("position")},render:function(){this.position();var a="#"+this.setId(),b=document.querySelector(a);new Draggabilly(b),this.displayPiece()},validateMove:function(){this.$el.css("z-index","1"),this.model.validateMove(this)},bringToFront:function(){this.$el.css("z-index","100")},displayPiece:function(){this.$el.css({background:'url("../images/'+this.model.get("image")+'.png") no-repeat center center',"background-size":"cover",width:"11%",height:"11%",margin:".8%"})}}),Piece=Backbone.Model.extend({dependencies:function(a){if(a.dependenciesPass=a.path,a.dependenciesPass&&this.extraDependencies&&(a=$.extend(a,this.extraDependencies(a))),a.dependenciesPass){var b=blackPieces.findWhere({position:a.newPosition})||whitePieces.findWhere({position:a.newPosition});b&&b.get("player")===this.get("player")&&(a.targeting||(a.dependenciesPass=!1)),"l-shape"!==a.path&&a.innerSquares.forEach(function(b){var c=blackPieces.findWhere({position:b})||whitePieces.findWhere({position:b});c&&(a.dependenciesPass=!1)})}return a},isPathKnown:function(a){var b=!1;return a&&this.get("paths").forEach(function(c){c===a.path&&(b=!0)}),b||(a.path=!1),a},validateMove:function(a){var b=this,c=new chess.setup.PathDetails({position:b.get("position"),player:!0});setTimeout(function(){c=b.checkMove(b.targetSquare(c));var d=blackPieces.findWhere({position:c.newPosition})||whitePieces.findWhere({position:c.newPosition});if(c.dependenciesPass=b.checkKing(b.get("player"),c,d),c=$.extend(c,b.finalizeMove(c,d,a)),c.dependenciesPass&&!c.promotion.promote&&chess.utilities.checkmate(b.get("opponent"),c),c.promotion.promote){c.promotion.promote=!1;var e={pawn:c.promotion.pawn};new PromotionView($.extend(c,e))}},50)},targetSquare:function(a){return a.newPercentages=chess.utilities.findClosest(a),a.newPosition=chess.utilities.reassignId(a),a},checkMove:function(a){return a=$.extend(a,chess.utilities.isAPath(a)),a=$.extend(a,this.isPathKnown(a)),a=$.extend(a,this.dependencies(a))},checkKing:function(a,b,c){return c&&c.get("player")!==this.get("player")&&c.set("position","MIA"),this.set("position",b.newPosition),chess.utilities.isKingInCheck(a,b)},finalizeMove:function(a,b,c){a.dependenciesPass?(a.notation.piece=this,this.set("cssPosition",a.newPercentages),b&&b.get("player")===this.get("opponent")&&(b.destroy(),a.notation.capture=!0),a=$.extend(a,this.instruct(a))):(this.set("position",a.position),c.$el.css(this.get("cssPosition")),b&&"MIA"===b.get("position")&&b.set("position",a.newPosition))},resetPawns:function(){var a=this.collection.where({piece:"pawn"});a.forEach(function(a){a.unset("targetSquare"),a.unset("enemyPawn")})}}),Pieces={},Pieces.pawn=Piece.extend({initialize:function(){this.render()},render:function(){this.set("notation",""),this.set("piece","pawn"),this.set("paths",["file","diagonal"]),this.set("moved",!1),this.set("dependencies",{file:{occupied:!1,range:2},diagonal:{occupied:this.get("opponent"),range:1}})},instruct:function(a){return this.checkInitialMove(),a=$.extend(a,this.enPassant(a)),this.resetPawns(),this.set("moved",!0),this.set("dependencies",{file:{occupied:!1,range:1},diagonal:{occupied:this.get("opponent"),range:1}}),a},extraDependencies:function(a){if(a.dependenciesPass=!0,a.path){var b=this.get("dependencies")[a.path];a.distance>b.range&&(a.dependenciesPass=!1),"forward"!==this.checkDirection(a)&&(a.dependenciesPass=!1);var c=blackPieces.findWhere({position:a.newPosition})||whitePieces.findWhere({position:a.newPosition});c&&b.occupied===!1?a.dependenciesPass=!1:a.canTarget=!1,b.occupied===this.get("opponent")&&(a.targeting?a.canTarget=!0:c||this.get("targetSquare")!==a.newPosition&&(a.dependenciesPass=!1)),a.dependenciesPass&&(a=$.extend(this.promotion(a)))}return a},checkDirection:function(a){var b,c=a.rankDiff;return("white"===this.get("player")&&c.original-c.target<0||"black"===this.get("player")&&c.original-c.target>0)&&(b="forward"),b},enPassant:function(a){if(this.get("targetSquare")&&this.get("position")===this.get("targetSquare")){var b="white"===this.get("opponent")?whitePieces:blackPieces,c=b.findWhere({position:this.get("enemyPawn")});c.destroy(),a.notation.capture=!0}return a},checkInitialMove:function(){var a=this.get("position"),b=a.slice(0,1),c=a.slice(1);if(2===this.get("dependencies").file.range){var d,e=chess.setup.file.indexOf(b),f=chess.setup.file[e-1]+c,g=chess.setup.file[e+1]+c,h="white"===this.get("opponent")?whitePieces:blackPieces;4===parseInt(c)&&(d=b+"3"),5===parseInt(c)&&(d=b+"6"),f=h.findWhere({piece:"pawn",position:f}),g=h.findWhere({piece:"pawn",position:g}),f&&f.set({targetSquare:d,enemyPawn:a}),g&&g.set({targetSquare:d,enemyPawn:a})}},promotion:function(a){var b=a.newPosition.slice(1);return("1"===b||"8"===b)&&(a.promotion={promote:!0,pawn:this}),a}}),Pieces.rook=Piece.extend({initialize:function(){this.render()},render:function(){this.set("notation","R"),this.set("piece","rook"),this.set("paths",["file","rank"]),this.set("moved",!1)},instruct:function(){this.resetPawns(),this.set("moved",!0)}}),Pieces.knight=Piece.extend({initialize:function(){this.render()},render:function(){this.set("notation","N"),this.set("piece","knight"),this.set("paths",["l-shape"])},instruct:function(){this.resetPawns()}}),Pieces.bishop=Piece.extend({initialize:function(){this.render()},render:function(){this.set("notation","B"),this.set("piece","bishop"),this.set("paths",["diagonal"])},instruct:function(){this.resetPawns()}}),Pieces.queen=Piece.extend({initialize:function(){this.render()},render:function(){this.set("notation","Q"),this.set("piece","queen"),this.set("paths",["file","rank","diagonal"])},instruct:function(){this.resetPawns()}}),Pieces.king=Piece.extend({initialize:function(){this.listenTo,this.render()},render:function(){this.set("notation","K"),this.set("piece","king"),this.set("paths",["file","rank","diagonal"]),this.set("range",1),this.set("moved",!1)},instruct:function(){this.resetPawns(),this.set("moved",!0)},extraDependencies:function(a){return a.dependenciesPass=!0,a.path&&a.distance>this.get("range")&&(a=$.extend(a,this.castle(a)),a.dependenciesPass=a.dependenciesPass&&a.player&&!this.get("moved")?!0:!1),a},castle:function(a){var b=a.newPosition.slice(0,1),c=a.newPosition.slice(1),d=!1;if("g"===b)var e="h"+c,f="f"+c,g=["e"+c,"f"+c,"g"+c],h=["f"+c,"g"+c],i={left:chess.setup.percentages.left.f,top:chess.setup.percentages.top[c]},j="O-O";else var e="a"+c,f="d"+c,g=["b"+c,"c"+c,"d"+c,"e"+c],h=["b"+c,"c"+c,"d"+c],i={left:chess.setup.percentages.left.d,top:chess.setup.percentages.top[c]},j="O-O-O";
var k=this.collection.findWhere({position:e});return k&&(k.get("moved")||this.get("moved")||(d=!k.get("moved"))),a.castle={dependenciesPass:d,squares:g,rookPiece:k,newRookPosition:f,newCssPosition:i},a.innerSquares=h,a.notation.side=j,a}}),PiecesSet=Backbone.Collection.extend({model:Piece,initialize:function(){this.capturedPieces=new CapturedPieces,this.on("add",function(a){new PieceView({model:a})}),this.on("remove",function(a){var b=!0;if("pawn"===a.get("piece")){var c=a.get("position").slice(1);("1"===c||"8"===c)&&(b=!1)}b&&this.capturedPieces.add(a)})}}),CapturedPieces=Backbone.Collection.extend({model:Piece,initialize:function(){this.on("add",function(a){new CapturedPieceView({model:a})})}});var whitePieces=new PiecesSet,blackPieces=new PiecesSet;!function(){chess.utilities.newGame()}();