"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addClass = addClass;
exports.hasClass = hasClass;
exports.removeClass = removeClass;
function hasClass(node, className) {
  if (node.classList) {
    return node.classList.contains(className);
  }
  const originClass = node.className;
  return ` ${originClass} `.indexOf(` ${className} `) > -1;
}
function addClass(node, className) {
  if (node.classList) {
    node.classList.add(className);
  } else {
    if (!hasClass(node, className)) {
      node.className = `${node.className} ${className}`;
    }
  }
}
function removeClass(node, className) {
  if (node.classList) {
    node.classList.remove(className);
  } else {
    if (hasClass(node, className)) {
      const originClass = node.className;
      node.className = ` ${originClass} `.replace(` ${className} `, ' ');
    }
  }
}