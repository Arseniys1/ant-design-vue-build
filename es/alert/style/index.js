import _extends from "@babel/runtime/helpers/esm/extends";
import { genComponentStyleHook, mergeToken } from '../../theme/internal';
import { resetComponent } from '../../style';
const genAlertTypeStyle = (bgColor, borderColor, iconColor, token, alertCls) => ({
  backgroundColor: bgColor,
  border: `${token.lineWidth}px ${token.lineType} ${borderColor}`,
  [`${alertCls}-icon`]: {
    color: iconColor
  }
});
export const genBaseStyle = token => {
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
    [componentCls]: _extends(_extends({}, resetComponent(token)), {
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
export const genTypeStyle = token => {
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
      '&-error': _extends(_extends({}, genAlertTypeStyle(colorErrorBg, colorErrorBorder, colorError, token, componentCls)), {
        [`${componentCls}-description > pre`]: {
          margin: 0,
          padding: 0
        }
      })
    }
  };
};
export const genActionStyle = token => {
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
export const genAlertStyle = token => [genBaseStyle(token), genTypeStyle(token), genActionStyle(token)];
export default genComponentStyleHook('Alert', token => {
  const {
    fontSizeHeading3
  } = token;
  const alertToken = mergeToken(token, {
    alertIconSizeLG: fontSizeHeading3,
    alertPaddingHorizontal: 12 // Fixed value here.
  });
  return [genAlertStyle(alertToken)];
});