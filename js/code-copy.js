"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,r){if(e){if("string"==typeof e)return _arrayLikeToArray(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(t="Object"===t&&e.constructor?e.constructor.name:t)||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(e,r):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}KEEP.initCodeCopy=function(){HTMLElement.prototype.wrap=function(e){this.parentNode.insertBefore(e,this),this.parentNode.removeChild(this),e.appendChild(this)},document.querySelectorAll("figure.highlight").forEach(function(e){var r=document.createElement("div");e.wrap(r),r.classList.add("highlight-container"),r.insertAdjacentHTML("beforeend",'<div class="copy-btn"><i class="fas fa-copy"></i></div>');e=e.parentNode.querySelector(".copy-btn");e.addEventListener("click",function(e){var r=e.currentTarget,t=_toConsumableArray(r.parentNode.querySelectorAll(".code .line")).map(function(e){return e.innerText}).join("\n"),n=document.createElement("textarea");n.style.top=window.scrollY+"px",n.style.position="absolute",n.style.opacity="0",n.readOnly=!0,n.value=t,document.body.append(n);var o=document.getSelection(),e=0<o.rangeCount&&o.getRangeAt(0);n.select(),n.setSelectionRange(0,t.length),n.readOnly=!1;t=document.execCommand("copy");r.querySelector("i").className=t?"fas fa-check":"fas fa-times",n.blur(),r.blur(),e&&(o.removeAllRanges(),o.addRange(e)),document.body.removeChild(n)}),e.addEventListener("mouseleave",function(e){setTimeout(function(){e.target.querySelector("i").className="fas fa-copy"},300)})})};