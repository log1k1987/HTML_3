!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}({3:function(e,t,n){"use strict";var r=[{title:"lending 1",image:"assets/images/slider/work-1.png",description:"1",tags:["html","js"],link:""},{title:"lending 2",image:"assets/images/slider/work-2.png",description:"2",tags:["html","js"],link:""},{title:"lending 3",image:"assets/images/slider/work-3.png",description:"3",tags:["html","js"],link:""},{title:"lending 4",image:"assets/images/slider/work-4.png",description:"4",tags:["html","js"],link:""}],i=document.querySelector(".js-main-slide"),o=document.querySelector(".js-scroll-up"),l=document.querySelector(".js-scroll-down"),s=document.querySelector(".js-description"),c=r.length,u=0;function a(e){return e>=c?0:e<0?c-1:e}function d(){var e=a(u-1),t=a(u+1);i.src=r[u].image,o.lastElementChild.src=r[e].image,l.lastElementChild.src=r[t].image,s.innerText=r[u].description}o.addEventListener("click",function(){u=a(u-1),d()}),l.addEventListener("click",function(){u=a(u+1),d()}),d()}});