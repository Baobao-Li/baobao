(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{572:function(t,e,n){"use strict";n.r(e);n(36),n(257);var o={props:{count:{type:String,default:"99"},opacity:{type:String,default:"0.7"},color:{type:String,default:""},zIndex:{type:String,default:"30"},global:{type:Boolean,default:!1}},data:function(){return{}},mounted:function(){this.showCanvas()},created:function(){},methods:{check:function(){return!navigator.userAgent.match(/(phone|pod|iPhone|iPad|iPod|ios|Android|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)},showCanvas:function(){if(this.check()){var t=document.createElement("script");t.setAttribute("count",this.count),t.setAttribute("color",this.color),t.setAttribute("name","canvas-nest-name"),t.setAttribute("opacity",this.opacity),t.setAttribute("zIndex",this.zIndex),t.src="https://cdn.bootcss.com/canvas-nest.js/2.0.4/canvas-nest.js",document.body.appendChild(t)}}},beforeDestroy:function(){if(!this.global){for(var t=document.getElementsByTagName("canvas"),e=0;e<t.length;e++)t[e].style.display="none",t[e].remove();for(var n=document.getElementsByTagName("script"),o=0;o<n.length;o++)n[o]&&"canvas-nest-name"==n[o].getAttribute("name")&&n[o].parentNode.removeChild(n[o])}}},a=n(4),s=Object(a.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,null,null);e.default=s.exports}}]);