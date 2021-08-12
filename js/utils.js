"use strict";KEEP.initUtils=function(){KEEP.utils={html_root_dom:document.querySelector("html"),pageContainer_dom:document.querySelector(".page-container"),pageTop_dom:document.querySelector(".page-main-content-top"),firstScreen_dom:document.querySelector(".first-screen-container"),scrollProgressBar_dom:document.querySelector(".scroll-progress-bar"),pjaxProgressBar_dom:document.querySelector(".pjax-progress-bar"),pjaxProgressIcon_dom:document.querySelector(".pjax-progress-icon"),back2TopButton_dom:document.querySelector(".tool-scroll-to-top"),innerHeight:window.innerHeight,pjaxProgressBarTimer:null,prevScrollValue:0,fontSizeLevel:0,isHasScrollProgressBar:!0===KEEP.theme_config.style.scroll.progress_bar.enable,isHasScrollPercent:!0===KEEP.theme_config.style.scroll.percent.enable,styleHandleWhenScroll:function(){var e,t=document.body.scrollTop||document.documentElement.scrollTop,o=document.body.scrollHeight||document.documentElement.scrollHeight,r=window.innerHeight||document.documentElement.clientHeight,s=Math.round(t/(o-r)*100);this.isHasScrollProgressBar&&(e=(t/(o-r)*100).toFixed(3),this.scrollProgressBar_dom.style.visibility=0===s?"hidden":"visible",this.scrollProgressBar_dom.style.width="".concat(e,"%")),this.isHasScrollPercent&&(e=this.back2TopButton_dom.querySelector(".percent"),0===s||void 0===s?this.back2TopButton_dom.classList.remove("show"):(this.back2TopButton_dom.classList.add("show"),e.innerHTML=s.toFixed(0))),t>this.prevScrollValue&&t>this.innerHeight?this.pageTop_dom.classList.add("hide"):this.pageTop_dom.classList.remove("hide"),this.prevScrollValue=t},registerWindowScroll:function(){var e=this;window.addEventListener("scroll",function(){(e.isHasScrollPercent||e.isHasScrollProgressBar)&&e.styleHandleWhenScroll(),KEEP.theme_config.toc.enable&&KEEP.utils.hasOwnProperty("findActiveIndexByTOC")&&KEEP.utils.findActiveIndexByTOC(),KEEP.utils.headerShrink.headerShrink()})},toggleShowToolsList:function(){document.querySelector(".tool-toggle-show").addEventListener("click",function(){document.querySelector(".side-tools-list").classList.toggle("show")})},globalFontAdjust:function(){var e,t=this,o=document.defaultView.getComputedStyle(document.body).fontSize,r=parseFloat(o),s=function(e){t.html_root_dom.style.fontSize="".concat(r*(1+.05*e),"px"),KEEP.styleStatus.fontSizeLevel=e,KEEP.setStyleStatus()};(e=KEEP.getStyleStatus())&&(t.fontSizeLevel=e.fontSizeLevel,s(t.fontSizeLevel)),document.querySelector(".tool-font-adjust-plus").addEventListener("click",function(){5!==t.fontSizeLevel&&(t.fontSizeLevel++,s(t.fontSizeLevel))}),document.querySelector(".tool-font-adjust-minus").addEventListener("click",function(){t.fontSizeLevel<=0||(t.fontSizeLevel--,s(t.fontSizeLevel))})},contentAreaWidthAdjust:function(){var e=document.querySelector(".tool-expand-width"),t=document.querySelector(".header-content"),o=document.querySelector(".main-content"),r=e.querySelector("i"),s=KEEP.theme_config.style.content_max_width||"1000px",n="90%",i=s,a=!1;!0===KEEP.theme_config.style.first_screen.enable&&"/"===window.location.pathname&&(i=1.2*parseInt(s)+"px");function l(e){KEEP.styleStatus.isExpandPageWidth=e,KEEP.setStyleStatus(),e?(r.classList.remove("fa-arrows-alt-h"),r.classList.add("fa-compress-arrows-alt"),t.style.maxWidth=n,o.style.maxWidth=n):(r.classList.remove("fa-compress-arrows-alt"),r.classList.add("fa-arrows-alt-h"),t.style.maxWidth=i,o.style.maxWidth=s)}var c;(c=KEEP.getStyleStatus())&&(a=c.isExpandPageWidth,l(a)),e.addEventListener("click",function(){l(a=!a)})},goComment:function(){this.goComment_dom=document.querySelector(".go-comment"),this.goComment_dom&&this.goComment_dom.addEventListener("click",function(){document.querySelector("#comment-anchor").scrollIntoView()})},getElementHeight:function(e){e=document.querySelector(e);return e?e.getBoundingClientRect().height:0},initFirstScreenHeight:function(){this.firstScreen_dom&&(this.firstScreen_dom.style.height=this.innerHeight+"px")},initPageHeightHandle:function(){var e,t,o;this.firstScreen_dom||(e=this.getElementHeight(".page-main-content-top")+this.getElementHeight(".page-main-content-middle")+this.getElementHeight(".page-main-content-bottom"),t=window.innerHeight,o=document.querySelector(".page-main-content-bottom"),e<t&&(o.style.marginTop=t-e+"px"))},imageViewer:function(){function t(e,t){document.body.style.overflow=t?"hidden":"auto",t?e.classList.add("active"):e.classList.remove("active")}var o=document.querySelector(".image-viewer-container"),r=document.querySelector(".image-viewer-container img");o&&o.addEventListener("click",function(){t(o,!1)});var e=document.querySelectorAll(".markdown-body img");e.length?e.forEach(function(e){e.addEventListener("click",function(){t(o,!0),r.setAttribute("src",e.getAttribute("src"))})}):this.pageContainer_dom.removeChild(o)},setHowLongAgoLanguage:function(e,t){return t.replace(/%s/g,e)},getHowLongAgo:function(e){var t=KEEP.language_ago;e/=1e3;var o=Math.floor(e/2592e3/12),r=Math.floor(e/2592e3),s=Math.floor(e/86400/7),n=Math.floor(e/86400),i=Math.floor(e/3600%24),a=Math.floor(e/60%60),e=Math.floor(e%60);return 0<o?this.setHowLongAgoLanguage(o,t.year):0<r?this.setHowLongAgoLanguage(r,t.month):0<s?this.setHowLongAgoLanguage(s,t.week):0<n?this.setHowLongAgoLanguage(n,t.day):0<i?this.setHowLongAgoLanguage(i,t.hour):0<a?this.setHowLongAgoLanguage(a,t.minute):0<e?this.setHowLongAgoLanguage(e,t.second):void 0},setHowLongAgoInHome:function(){var t=this,e=document.querySelectorAll(".home-article-meta-info .home-article-date");e&&e.forEach(function(e){e.innerHTML=t.getHowLongAgo(Date.now()-new Date(e.dataset.date).getTime())})},pjaxProgressBarStart:function(){var e=this;this.pjaxProgressBarTimer&&clearInterval(this.pjaxProgressBarTimer),this.isHasScrollProgressBar&&this.scrollProgressBar_dom.classList.add("hide"),this.pjaxProgressBar_dom.style.width="0",this.pjaxProgressIcon_dom.classList.add("show");var t=1;this.pjaxProgressBar_dom.classList.add("show"),this.pjaxProgressBar_dom.style.width=t+"%",this.pjaxProgressBarTimer=setInterval(function(){99<(t+=5)&&(t=99),e.pjaxProgressBar_dom.style.width=t+"%"},100)},pjaxProgressBarEnd:function(){var t=this;this.pjaxProgressBarTimer&&clearInterval(this.pjaxProgressBarTimer),this.pjaxProgressBar_dom.style.width="100%";var o=setTimeout(function(){t.pjaxProgressBar_dom.classList.remove("show"),t.pjaxProgressIcon_dom.classList.remove("show"),t.isHasScrollProgressBar&&t.scrollProgressBar_dom.classList.remove("hide");var e=setTimeout(function(){t.pjaxProgressBar_dom.style.width="0",clearTimeout(o),clearTimeout(e)},200)},200)}},KEEP.utils.registerWindowScroll(),KEEP.utils.toggleShowToolsList(),KEEP.utils.globalFontAdjust(),KEEP.utils.contentAreaWidthAdjust(),KEEP.utils.goComment(),KEEP.utils.initPageHeightHandle(),KEEP.utils.initFirstScreenHeight(),KEEP.utils.imageViewer(),KEEP.utils.setHowLongAgoInHome()};