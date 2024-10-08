"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
const genStepsInlineStyle = token => {
  const {
    componentCls,
    inlineDotSize,
    inlineTitleColor,
    inlineTailColor
  } = token;
  const containerPaddingTop = token.paddingXS + token.lineWidth;
  const titleStyle = {
    [`${componentCls}-item-container ${componentCls}-item-content ${componentCls}-item-title`]: {
      color: inlineTitleColor
    }
  };
  return {
    [`&${componentCls}-inline`]: {
      width: 'auto',
      display: 'inline-flex',
      [`${componentCls}-item`]: {
        flex: 'none',
        '&-container': {
          padding: `${containerPaddingTop}px ${token.paddingXXS}px 0`,
          margin: `0 ${token.marginXXS / 2}px`,
          borderRadius: token.borderRadiusSM,
          cursor: 'pointer',
          transition: `background-color ${token.motionDurationMid}`,
          '&:hover': {
            background: token.controlItemBgHover
          },
          [`&[role='button']:hover`]: {
            opacity: 1
          }
        },
        '&-icon': {
          width: inlineDotSize,
          height: inlineDotSize,
          marginInlineStart: `calc(50% - ${inlineDotSize / 2}px)`,
          [`> ${componentCls}-icon`]: {
            top: 0
          },
          [`${componentCls}-icon-dot`]: {
            borderRadius: token.fontSizeSM / 4
          }
        },
        '&-content': {
          width: 'auto',
          marginTop: token.marginXS - token.lineWidth
        },
        '&-title': {
          color: inlineTitleColor,
          fontSize: token.fontSizeSM,
          lineHeight: token.lineHeightSM,
          fontWeight: 'normal',
          marginBottom: token.marginXXS / 2
        },
        '&-description': {
          display: 'none'
        },
        '&-tail': {
          marginInlineStart: 0,
          top: containerPaddingTop + inlineDotSize / 2,
          transform: `translateY(-50%)`,
          '&:after': {
            width: '100%',
            height: token.lineWidth,
            borderRadius: 0,
            marginInlineStart: 0,
            background: inlineTailColor
          }
        },
        [`&:first-child ${componentCls}-item-tail`]: {
          width: '50%',
          marginInlineStart: '50%'
        },
        [`&:last-child ${componentCls}-item-tail`]: {
          display: 'block',
          width: '50%'
        },
        '&-wait': (0, _extends2.default)({
          [`${componentCls}-item-icon ${componentCls}-icon ${componentCls}-icon-dot`]: {
            backgroundColor: token.colorBorderBg,
            border: `${token.lineWidth}px ${token.lineType} ${inlineTailColor}`
          }
        }, titleStyle),
        '&-finish': (0, _extends2.default)({
          [`${componentCls}-item-tail::after`]: {
            backgroundColor: inlineTailColor
          },
          [`${componentCls}-item-icon ${componentCls}-icon ${componentCls}-icon-dot`]: {
            backgroundColor: inlineTailColor,
            border: `${token.lineWidth}px ${token.lineType} ${inlineTailColor}`
          }
        }, titleStyle),
        '&-error': titleStyle,
        '&-active, &-process': (0, _extends2.default)({
          [`${componentCls}-item-icon`]: {
            width: inlineDotSize,
            height: inlineDotSize,
            marginInlineStart: `calc(50% - ${inlineDotSize / 2}px)`,
            top: 0
          }
        }, titleStyle),
        [`&:not(${componentCls}-item-active) > ${componentCls}-item-container[role='button']:hover`]: {
          [`${componentCls}-item-title`]: {
            color: inlineTitleColor
          }
        }
      }
    }
  };
};
var _default = exports.default = genStepsInlineStyle;