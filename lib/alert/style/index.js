"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.genTypeStyle = exports.genBaseStyle = exports.genAlertStyle = exports.genActionStyle = exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _internal = require("../../theme/internal");
var _style = require("../../style");
const genAlertTypeStyle = (bgColor, borderColor, iconColor, token, alertCls) => ({
  backgroundColor: bgColor,
  border: `${token.lineWidth}px ${token.lineType} ${borderColor}`,
  [`${alertCls}-icon`]: {
    color: iconColor
  }
});
const genBaseStyle = token => {
  const {
    componentCls,
    motionDurationSlow: duration,
    marginXS,
    marginSM,
    fontSize,
    fontSizeLG,
    lineHeight,
    borderRadiusLG: borderRadius,
    motionEaseInOutCirc,
    alertIconSizeLG,
    colorText,
    paddingContentVerticalSM,
    alertPaddingHorizontal,
    paddingMD,
    paddingContentHorizontalLG
  } = token;
  return {
    [componentCls]: (0, _extends2.default)((0, _extends2.default)({}, (0, _style.resetComponent)(token)), {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      padding: `${paddingContentVerticalSM}px ${alertPaddingHorizontal}px`,
      wordWrap: 'break-word',
      borderRadius,
      [`&${componentCls}-rtl`]: {
        direction: 'rtl'
      },
      [`${componentCls}-content`]: {
        flex: 1,
        minWidth: 0
      },
      [`${componentCls}-icon`]: {
        marginInlineEnd: marginXS,
        lineHeight: 0
      },
      [`&-description`]: {
        display: 'none',
        fontSize,
        lineHeight
      },
      '&-message': {
        color: colorText
      },
      [`&${componentCls}-motion-leave`]: {
        overflow: 'hidden',
        opacity: 1,
        transition: `max-height ${duration} ${motionEaseInOutCirc}, opacity ${duration} ${motionEaseInOutCirc},
        padding-top ${duration} ${motionEaseInOutCirc}, padding-bottom ${duration} ${motionEaseInOutCirc},
        margin-bottom ${duration} ${motionEaseInOutCirc}`
      },
      [`&${componentCls}-motion-leave-active`]: {
        maxHeight: 0,
        marginBottom: '0 !important',
        paddingTop: 0,
        paddingBottom: 0,
        opacity: 0
      }
    }),
    [`${componentCls}-with-description`]: {
      alignItems: 'flex-start',
      paddingInline: paddingContentHorizontalLG,
      paddingBlock: paddingMD,
      [`${componentCls}-icon`]: {
        marginInlineEnd: marginSM,
        fontSize: alertIconSizeLG,
        lineHeight: 0
      },
      [`${componentCls}-message`]: {
        display: 'block',
        marginBottom: marginXS,
        color: colorText,
        fontSize: fontSizeLG
      },
      [`${componentCls}-description`]: {
        display: 'block'
      }
    },
    [`${componentCls}-banner`]: {
      marginBottom: 0,
      border: '0 !important',
      borderRadius: 0
    }
  };
};
exports.genBaseStyle = genBaseStyle;
const genTypeStyle = token => {
  const {
    componentCls,
    colorSuccess,
    colorSuccessBorder,
    colorSuccessBg,
    colorWarning,
    colorWarningBorder,
    colorWarningBg,
    colorError,
    colorErrorBorder,
    colorErrorBg,
    colorInfo,
    colorInfoBorder,
    colorInfoBg
  } = token;
  return {
    [componentCls]: {
      '&-success': genAlertTypeStyle(colorSuccessBg, colorSuccessBorder, colorSuccess, token, componentCls),
      '&-info': genAlertTypeStyle(colorInfoBg, colorInfoBorder, colorInfo, token, componentCls),
      '&-warning': genAlertTypeStyle(colorWarningBg, colorWarningBorder, colorWarning, token, componentCls),
      '&-error': (0, _extends2.default)((0, _extends2.default)({}, genAlertTypeStyle(colorErrorBg, colorErrorBorder, colorError, token, componentCls)), {
        [`${componentCls}-description > pre`]: {
          margin: 0,
          padding: 0
        }
      })
    }
  };
};
exports.genTypeStyle = genTypeStyle;
const genActionStyle = token => {
  const {
    componentCls,
    iconCls,
    motionDurationMid,
    marginXS,
    fontSizeIcon,
    colorIcon,
    colorIconHover
  } = token;
  return {
    [componentCls]: {
      [`&-action`]: {
        marginInlineStart: marginXS
      },
      [`${componentCls}-close-icon`]: {
        marginInlineStart: marginXS,
        padding: 0,
        overflow: 'hidden',
        fontSize: fontSizeIcon,
        lineHeight: `${fontSizeIcon}px`,
        backgroundColor: 'transparent',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        [`${iconCls}-close`]: {
          color: colorIcon,
          transition: `color ${motionDurationMid}`,
          '&:hover': {
            color: colorIconHover
          }
        }
      },
      '&-close-text': {
        color: colorIcon,
        transition: `color ${motionDurationMid}`,
        '&:hover': {
          color: colorIconHover
        }
      }
    }
  };
};
exports.genActionStyle = genActionStyle;
const genAlertStyle = token => [genBaseStyle(token), genTypeStyle(token), genActionStyle(token)];
exports.genAlertStyle = genAlertStyle;
var _default = exports.default = (0, _internal.genComponentStyleHook)('Alert', token => {
  const {
    fontSizeHeading3
  } = token;
  const alertToken = (0, _internal.mergeToken)(token, {
    alertIconSizeLG: fontSizeHeading3,
    alertPaddingHorizontal: 12 // Fixed value here.
  });
  return [genAlertStyle(alertToken)];
});