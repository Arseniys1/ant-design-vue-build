"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _style = require("../../input/style");
var _internal = require("../../theme/internal");
var _style2 = require("../../style");
const genPaginationDisabledStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-disabled`]: {
      '&, &:hover': {
        cursor: 'not-allowed',
        [`${componentCls}-item-link`]: {
          color: token.colorTextDisabled,
          cursor: 'not-allowed'
        }
      },
      '&:focus-visible': {
        cursor: 'not-allowed',
        [`${componentCls}-item-link`]: {
          color: token.colorTextDisabled,
          cursor: 'not-allowed'
        }
      }
    },
    [`&${componentCls}-disabled`]: {
      cursor: 'not-allowed',
      [`&${componentCls}-mini`]: {
        [`
          &:hover ${componentCls}-item:not(${componentCls}-item-active),
          &:active ${componentCls}-item:not(${componentCls}-item-active),
          &:hover ${componentCls}-item-link,
          &:active ${componentCls}-item-link
        `]: {
          backgroundColor: 'transparent'
        }
      },
      [`${componentCls}-item`]: {
        cursor: 'not-allowed',
        '&:hover, &:active': {
          backgroundColor: 'transparent'
        },
        a: {
          color: token.colorTextDisabled,
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'not-allowed'
        },
        '&-active': {
          borderColor: token.colorBorder,
          backgroundColor: token.paginationItemDisabledBgActive,
          '&:hover, &:active': {
            backgroundColor: token.paginationItemDisabledBgActive
          },
          a: {
            color: token.paginationItemDisabledColorActive
          }
        }
      },
      [`${componentCls}-item-link`]: {
        color: token.colorTextDisabled,
        cursor: 'not-allowed',
        '&:hover, &:active': {
          backgroundColor: 'transparent'
        },
        [`${componentCls}-simple&`]: {
          backgroundColor: 'transparent',
          '&:hover, &:active': {
            backgroundColor: 'transparent'
          }
        }
      },
      [`${componentCls}-simple-pager`]: {
        color: token.colorTextDisabled
      },
      [`${componentCls}-jump-prev, ${componentCls}-jump-next`]: {
        [`${componentCls}-item-link-icon`]: {
          opacity: 0
        },
        [`${componentCls}-item-ellipsis`]: {
          opacity: 1
        }
      }
    },
    [`&${componentCls}-simple`]: {
      [`${componentCls}-prev, ${componentCls}-next`]: {
        [`&${componentCls}-disabled ${componentCls}-item-link`]: {
          '&:hover, &:active': {
            backgroundColor: 'transparent'
          }
        }
      }
    }
  };
};
const genPaginationMiniStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [`&${componentCls}-mini ${componentCls}-total-text, &${componentCls}-mini ${componentCls}-simple-pager`]: {
      height: token.paginationItemSizeSM,
      lineHeight: `${token.paginationItemSizeSM}px`
    },
    [`&${componentCls}-mini ${componentCls}-item`]: {
      minWidth: token.paginationItemSizeSM,
      height: token.paginationItemSizeSM,
      margin: 0,
      lineHeight: `${token.paginationItemSizeSM - 2}px`
    },
    [`&${componentCls}-mini ${componentCls}-item:not(${componentCls}-item-active)`]: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      '&:hover': {
        backgroundColor: token.colorBgTextHover
      },
      '&:active': {
        backgroundColor: token.colorBgTextActive
      }
    },
    [`&${componentCls}-mini ${componentCls}-prev, &${componentCls}-mini ${componentCls}-next`]: {
      minWidth: token.paginationItemSizeSM,
      height: token.paginationItemSizeSM,
      margin: 0,
      lineHeight: `${token.paginationItemSizeSM}px`,
      [`&:hover ${componentCls}-item-link`]: {
        backgroundColor: token.colorBgTextHover
      },
      [`&:active ${componentCls}-item-link`]: {
        backgroundColor: token.colorBgTextActive
      },
      [`&${componentCls}-disabled:hover ${componentCls}-item-link`]: {
        backgroundColor: 'transparent'
      }
    },
    [`
    &${componentCls}-mini ${componentCls}-prev ${componentCls}-item-link,
    &${componentCls}-mini ${componentCls}-next ${componentCls}-item-link
    `]: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      '&::after': {
        height: token.paginationItemSizeSM,
        lineHeight: `${token.paginationItemSizeSM}px`
      }
    },
    [`&${componentCls}-mini ${componentCls}-jump-prev, &${componentCls}-mini ${componentCls}-jump-next`]: {
      height: token.paginationItemSizeSM,
      marginInlineEnd: 0,
      lineHeight: `${token.paginationItemSizeSM}px`
    },
    [`&${componentCls}-mini ${componentCls}-options`]: {
      marginInlineStart: token.paginationMiniOptionsMarginInlineStart,
      [`&-size-changer`]: {
        top: token.paginationMiniOptionsSizeChangerTop
      },
      [`&-quick-jumper`]: {
        height: token.paginationItemSizeSM,
        lineHeight: `${token.paginationItemSizeSM}px`,
        input: (0, _extends2.default)((0, _extends2.default)({}, (0, _style.genInputSmallStyle)(token)), {
          width: token.paginationMiniQuickJumperInputWidth,
          height: token.controlHeightSM
        })
      }
    }
  };
};
const genPaginationSimpleStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [`
    &${componentCls}-simple ${componentCls}-prev,
    &${componentCls}-simple ${componentCls}-next
    `]: {
      height: token.paginationItemSizeSM,
      lineHeight: `${token.paginationItemSizeSM}px`,
      verticalAlign: 'top',
      [`${componentCls}-item-link`]: {
        height: token.paginationItemSizeSM,
        backgroundColor: 'transparent',
        border: 0,
        '&:hover': {
          backgroundColor: token.colorBgTextHover
        },
        '&:active': {
          backgroundColor: token.colorBgTextActive
        },
        '&::after': {
          height: token.paginationItemSizeSM,
          lineHeight: `${token.paginationItemSizeSM}px`
        }
      }
    },
    [`&${componentCls}-simple ${componentCls}-simple-pager`]: {
      display: 'inline-block',
      height: token.paginationItemSizeSM,
      marginInlineEnd: token.marginXS,
      input: {
        boxSizing: 'border-box',
        height: '100%',
        marginInlineEnd: token.marginXS,
        padding: `0 ${token.paginationItemPaddingInline}px`,
        textAlign: 'center',
        backgroundColor: token.paginationItemInputBg,
        border: `${token.lineWidth}px ${token.lineType} ${token.colorBorder}`,
        borderRadius: token.borderRadius,
        outline: 'none',
        transition: `border-color ${token.motionDurationMid}`,
        color: 'inherit',
        '&:hover': {
          borderColor: token.colorPrimary
        },
        '&:focus': {
          borderColor: token.colorPrimaryHover,
          boxShadow: `${token.inputOutlineOffset}px 0 ${token.controlOutlineWidth}px ${token.controlOutline}`
        },
        '&[disabled]': {
          color: token.colorTextDisabled,
          backgroundColor: token.colorBgContainerDisabled,
          borderColor: token.colorBorder,
          cursor: 'not-allowed'
        }
      }
    }
  };
};
const genPaginationJumpStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-jump-prev, ${componentCls}-jump-next`]: {
      outline: 0,
      [`${componentCls}-item-container`]: {
        position: 'relative',
        [`${componentCls}-item-link-icon`]: {
          color: token.colorPrimary,
          fontSize: token.fontSizeSM,
          opacity: 0,
          transition: `all ${token.motionDurationMid}`,
          '&-svg': {
            top: 0,
            insetInlineEnd: 0,
            bottom: 0,
            insetInlineStart: 0,
            margin: 'auto'
          }
        },
        [`${componentCls}-item-ellipsis`]: {
          position: 'absolute',
          top: 0,
          insetInlineEnd: 0,
          bottom: 0,
          insetInlineStart: 0,
          display: 'block',
          margin: 'auto',
          color: token.colorTextDisabled,
          fontFamily: 'Arial, Helvetica, sans-serif',
          letterSpacing: token.paginationEllipsisLetterSpacing,
          textAlign: 'center',
          textIndent: token.paginationEllipsisTextIndent,
          opacity: 1,
          transition: `all ${token.motionDurationMid}`
        }
      },
      '&:hover': {
        [`${componentCls}-item-link-icon`]: {
          opacity: 1
        },
        [`${componentCls}-item-ellipsis`]: {
          opacity: 0
        }
      },
      '&:focus-visible': (0, _extends2.default)({
        [`${componentCls}-item-link-icon`]: {
          opacity: 1
        },
        [`${componentCls}-item-ellipsis`]: {
          opacity: 0
        }
      }, (0, _style2.genFocusOutline)(token))
    },
    [`
    ${componentCls}-prev,
    ${componentCls}-jump-prev,
    ${componentCls}-jump-next
    `]: {
      marginInlineEnd: token.marginXS
    },
    [`
    ${componentCls}-prev,
    ${componentCls}-next,
    ${componentCls}-jump-prev,
    ${componentCls}-jump-next
    `]: {
      display: 'inline-block',
      minWidth: token.paginationItemSize,
      height: token.paginationItemSize,
      color: token.colorText,
      fontFamily: token.paginationFontFamily,
      lineHeight: `${token.paginationItemSize}px`,
      textAlign: 'center',
      verticalAlign: 'middle',
      listStyle: 'none',
      borderRadius: token.borderRadius,
      cursor: 'pointer',
      transition: `all ${token.motionDurationMid}`
    },
    [`${componentCls}-prev, ${componentCls}-next`]: {
      fontFamily: 'Arial, Helvetica, sans-serif',
      outline: 0,
      button: {
        color: token.colorText,
        cursor: 'pointer',
        userSelect: 'none'
      },
      [`${componentCls}-item-link`]: {
        display: 'block',
        width: '100%',
        height: '100%',
        padding: 0,
        fontSize: token.fontSizeSM,
        textAlign: 'center',
        backgroundColor: 'transparent',
        border: `${token.lineWidth}px ${token.lineType} transparent`,
        borderRadius: token.borderRadius,
        outline: 'none',
        transition: `all ${token.motionDurationMid}`
      },
      [`&:focus-visible ${componentCls}-item-link`]: (0, _extends2.default)({}, (0, _style2.genFocusOutline)(token)),
      [`&:hover ${componentCls}-item-link`]: {
        backgroundColor: token.colorBgTextHover
      },
      [`&:active ${componentCls}-item-link`]: {
        backgroundColor: token.colorBgTextActive
      },
      [`&${componentCls}-disabled:hover`]: {
        [`${componentCls}-item-link`]: {
          backgroundColor: 'transparent'
        }
      }
    },
    [`${componentCls}-slash`]: {
      marginInlineEnd: token.paginationSlashMarginInlineEnd,
      marginInlineStart: token.paginationSlashMarginInlineStart
    },
    [`${componentCls}-options`]: {
      display: 'inline-block',
      marginInlineStart: token.margin,
      verticalAlign: 'middle',
      '&-size-changer.-select': {
        display: 'inline-block',
        width: 'auto'
      },
      '&-quick-jumper': {
        display: 'inline-block',
        height: token.controlHeight,
        marginInlineStart: token.marginXS,
        lineHeight: `${token.controlHeight}px`,
        verticalAlign: 'top',
        input: (0, _extends2.default)((0, _extends2.default)({}, (0, _style.genBasicInputStyle)(token)), {
          width: token.controlHeightLG * 1.25,
          height: token.controlHeight,
          boxSizing: 'border-box',
          margin: 0,
          marginInlineStart: token.marginXS,
          marginInlineEnd: token.marginXS
        })
      }
    }
  };
};
const genPaginationItemStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-item`]: (0, _extends2.default)((0, _extends2.default)({
      display: 'inline-block',
      minWidth: token.paginationItemSize,
      height: token.paginationItemSize,
      marginInlineEnd: token.marginXS,
      fontFamily: token.paginationFontFamily,
      lineHeight: `${token.paginationItemSize - 2}px`,
      textAlign: 'center',
      verticalAlign: 'middle',
      listStyle: 'none',
      backgroundColor: 'transparent',
      border: `${token.lineWidth}px ${token.lineType} transparent`,
      borderRadius: token.borderRadius,
      outline: 0,
      cursor: 'pointer',
      userSelect: 'none',
      a: {
        display: 'block',
        padding: `0 ${token.paginationItemPaddingInline}px`,
        color: token.colorText,
        transition: 'none',
        '&:hover': {
          textDecoration: 'none'
        }
      },
      [`&:not(${componentCls}-item-active)`]: {
        '&:hover': {
          transition: `all ${token.motionDurationMid}`,
          backgroundColor: token.colorBgTextHover
        },
        '&:active': {
          backgroundColor: token.colorBgTextActive
        }
      }
    }, (0, _style2.genFocusStyle)(token)), {
      '&-active': {
        fontWeight: token.paginationFontWeightActive,
        backgroundColor: token.paginationItemBgActive,
        borderColor: token.colorPrimary,
        a: {
          color: token.colorPrimary
        },
        '&:hover': {
          borderColor: token.colorPrimaryHover
        },
        '&:hover a': {
          color: token.colorPrimaryHover
        }
      }
    })
  };
};
const genPaginationStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: (0, _extends2.default)((0, _extends2.default)((0, _extends2.default)((0, _extends2.default)((0, _extends2.default)((0, _extends2.default)((0, _extends2.default)((0, _extends2.default)({}, (0, _style2.resetComponent)(token)), {
      'ul, ol': {
        margin: 0,
        padding: 0,
        listStyle: 'none'
      },
      '&::after': {
        display: 'block',
        clear: 'both',
        height: 0,
        overflow: 'hidden',
        visibility: 'hidden',
        content: '""'
      },
      [`${componentCls}-total-text`]: {
        display: 'inline-block',
        height: token.paginationItemSize,
        marginInlineEnd: token.marginXS,
        lineHeight: `${token.paginationItemSize - 2}px`,
        verticalAlign: 'middle'
      }
    }), genPaginationItemStyle(token)), genPaginationJumpStyle(token)), genPaginationSimpleStyle(token)), genPaginationMiniStyle(token)), genPaginationDisabledStyle(token)), {
      // media query style
      [`@media only screen and (max-width: ${token.screenLG}px)`]: {
        [`${componentCls}-item`]: {
          '&-after-jump-prev, &-before-jump-next': {
            display: 'none'
          }
        }
      },
      [`@media only screen and (max-width: ${token.screenSM}px)`]: {
        [`${componentCls}-options`]: {
          display: 'none'
        }
      }
    }),
    // rtl style
    [`&${token.componentCls}-rtl`]: {
      direction: 'rtl'
    }
  };
};
const genBorderedStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}${componentCls}-disabled`]: {
      '&, &:hover': {
        [`${componentCls}-item-link`]: {
          borderColor: token.colorBorder
        }
      },
      '&:focus-visible': {
        [`${componentCls}-item-link`]: {
          borderColor: token.colorBorder
        }
      },
      [`${componentCls}-item, ${componentCls}-item-link`]: {
        backgroundColor: token.colorBgContainerDisabled,
        borderColor: token.colorBorder,
        [`&:hover:not(${componentCls}-item-active)`]: {
          backgroundColor: token.colorBgContainerDisabled,
          borderColor: token.colorBorder,
          a: {
            color: token.colorTextDisabled
          }
        },
        [`&${componentCls}-item-active`]: {
          backgroundColor: token.paginationItemDisabledBgActive
        }
      },
      [`${componentCls}-prev, ${componentCls}-next`]: {
        '&:hover button': {
          backgroundColor: token.colorBgContainerDisabled,
          borderColor: token.colorBorder,
          color: token.colorTextDisabled
        },
        [`${componentCls}-item-link`]: {
          backgroundColor: token.colorBgContainerDisabled,
          borderColor: token.colorBorder
        }
      }
    },
    [componentCls]: {
      [`${componentCls}-prev, ${componentCls}-next`]: {
        '&:hover button': {
          borderColor: token.colorPrimaryHover,
          backgroundColor: token.paginationItemBg
        },
        [`${componentCls}-item-link`]: {
          backgroundColor: token.paginationItemLinkBg,
          borderColor: token.colorBorder
        },
        [`&:hover ${componentCls}-item-link`]: {
          borderColor: token.colorPrimary,
          backgroundColor: token.paginationItemBg,
          color: token.colorPrimary
        },
        [`&${componentCls}-disabled`]: {
          [`${componentCls}-item-link`]: {
            borderColor: token.colorBorder,
            color: token.colorTextDisabled
          }
        }
      },
      [`${componentCls}-item`]: {
        backgroundColor: token.paginationItemBg,
        border: `${token.lineWidth}px ${token.lineType} ${token.colorBorder}`,
        [`&:hover:not(${componentCls}-item-active)`]: {
          borderColor: token.colorPrimary,
          backgroundColor: token.paginationItemBg,
          a: {
            color: token.colorPrimary
          }
        },
        '&-active': {
          borderColor: token.colorPrimary
        }
      }
    }
  };
};
// ============================== Export ==============================
var _default = exports.default = (0, _internal.genComponentStyleHook)('Pagination', token => {
  const paginationToken = (0, _internal.mergeToken)(token, {
    paginationItemSize: token.controlHeight,
    paginationFontFamily: token.fontFamily,
    paginationItemBg: token.colorBgContainer,
    paginationItemBgActive: token.colorBgContainer,
    paginationFontWeightActive: token.fontWeightStrong,
    paginationItemSizeSM: token.controlHeightSM,
    paginationItemInputBg: token.colorBgContainer,
    paginationMiniOptionsSizeChangerTop: 0,
    paginationItemDisabledBgActive: token.controlItemBgActiveDisabled,
    paginationItemDisabledColorActive: token.colorTextDisabled,
    paginationItemLinkBg: token.colorBgContainer,
    inputOutlineOffset: '0 0',
    paginationMiniOptionsMarginInlineStart: token.marginXXS / 2,
    paginationMiniQuickJumperInputWidth: token.controlHeightLG * 1.1,
    paginationItemPaddingInline: token.marginXXS * 1.5,
    paginationEllipsisLetterSpacing: token.marginXXS / 2,
    paginationSlashMarginInlineStart: token.marginXXS,
    paginationSlashMarginInlineEnd: token.marginSM,
    paginationEllipsisTextIndent: '0.13em' // magic for ui experience
  }, (0, _style.initInputToken)(token));
  return [genPaginationStyle(paginationToken), token.wireframe && genBorderedStyle(paginationToken)];
});