"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlignFromPlacement = getAlignFromPlacement;
exports.getAlignPopupClassName = getAlignPopupClassName;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
function isPointsEq(a1, a2, isAlignPoint) {
  if (isAlignPoint) {
    return a1[0] === a2[0];
  }
  return a1[0] === a2[0] && a1[1] === a2[1];
}
function getAlignFromPlacement(builtinPlacements, placementStr, align) {
  const baseAlign = builtinPlacements[placementStr] || {};
  return (0, _extends2.default)((0, _extends2.default)({}, baseAlign), align);
}
function getAlignPopupClassName(builtinPlacements, prefixCls, align, isAlignPoint) {
  const {
    points
  } = align;
  const placements = Object.keys(builtinPlacements);
  for (let i = 0; i < placements.length; i += 1) {
    const placement = placements[i];
    if (isPointsEq(builtinPlacements[placement].points, points, isAlignPoint)) {
      return `${prefixCls}-placement-${placement}`;
    }
  }
  return '';
}