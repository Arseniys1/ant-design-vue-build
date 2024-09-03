import _extends from "@babel/runtime/helpers/esm/extends";
import { genComponentStyleHook, mergeToken } from '../../theme/internal';
import { resetComponent, textEllipsis } from '../../style';
// ============================== Shared ==============================
const genSharedAnchorStyle = token => {
  const {
    componentCls,
    holderOffsetBlock,
    motionDurationSlow,
    lineWidthBold,
    colorPrimary,
    lineType,
    colorSplit
  } = token;
  return {
    [`${componentCls}-wrapper`]: {
      marginBlockStart: -holderOffsetBlock,
      paddingBlockStart: holderOffsetBlock,
      // delete overflow: auto
      // overflow: 'auto',
      backgroundColor: 'transparent',
      [componentCls]: _extends(_extends({}, resetComponent(token)), {
        position: 'relative',
        paddingInlineStart: lineWidthBold,
        [`${componentCls}-link`]: {
          paddingBlock: token.anchorPaddingBlock,
          paddingInline: `${token.anchorPaddingInline}px 0`,
          '&-title': _extends(_extends({}, textEllipsis), {
            position: 'relative',
            display: 'block',
            marginBlockEnd: token.anchorTitleBlock,
            color: token.colorText,
            transition: `all ${token.motionDurationSlow}`,
            '&:only-child': {
              marginBlockEnd: 0
            }
          }),
          [`&-active > ${componentCls}-link-title`]: {
            color: token.colorPrimary
          },
          // link link
          [`${componentCls}-link`]: {
            paddingBlock: token.anchorPaddingBlockSecondary
          }
        }
      }),
      [`&:not(${componentCls}-wrapper-horizontal)`]: {
        [componentCls]: {
          '&::before': {
            position: 'absolute',
            left: {
              _skip_check_: true,
              value: 0
            },
            top: 0,
            height: '100%',
            borderInlineStart: `${lineWidthBold}px ${lineType} ${colorSplit}`,
            content: '" "'
          },
          [`${componentCls}-ink`]: {
            position: 'absolute',
            left: {
              _skip_check_: true,
              value: 0
            },
            display: 'none',
            transform: 'translateY(-50%)',
            transition: `top ${motionDurationSlow} ease-in-out`,
            width: lineWidthBold,
            backgroundColor: colorPrimary,
            [`&${componentCls}-ink-visible`]: {
              display: 'inline-block'
            }
          }
        }
      },
      [`${componentCls}-fixed ${componentCls}-ink ${componentCls}-ink`]: {
        display: 'none'
      }
    }
  };
};
const genSharedAnchorHorizontalStyle = token => {
  const {
    componentCls,
    motionDurationSlow,
    lineWidthBold,
    colorPrimary
  } = token;
  return {
    [`${componentCls}-wrapper-horizontal`]: {
      position: 'relative',
      '&::before': {
        position: 'absolute',
        left: {
          _skip_check_: true,
          value: 0
        },
        right: {
          _skip_check_: true,
          value: 0
        },
        bottom: 0,
        borderBottom: `1px ${token.lineType} ${token.colorSplit}`,
        content: '" "'
      },
      [componentCls]: {
        overflowX: 'scroll',
        position: 'relative',
        display: 'flex',
        scrollbarWidth: 'none' /* Firefox */,
        '&::-webkit-scrollbar': {
          display: 'none' /* Safari and Chrome */
        },
        [`${componentCls}-link:first-of-type`]: {
          paddingInline: 0
        },
        [`${componentCls}-ink`]: {
          position: 'absolute',
          bottom: 0,
          transition: `left ${motionDurationSlow} ease-in-out, width ${motionDurationSlow} ease-in-out`,
          height: lineWidthBold,
          backgroundColor: colorPrimary
        }
      }
    }
  };
};
// ============================== Export ==============================
export default genComponentStyleHook('Anchor', token => {
  const {
    fontSize,
    fontSizeLG,
    padding,
    paddingXXS
  } = token;
  const anchorToken = mergeToken(token, {
    holderOffsetBlock: paddingXXS,
    anchorPaddingBlock: paddingXXS,
    anchorPaddingBlockSecondary: paddingXXS / 2,
    anchorPaddingInline: padding,
    anchorTitleBlock: fontSize / 14 * 3,
    anchorBallSize: fontSizeLG / 2
  });
  return [genSharedAnchorStyle(anchorToken), genSharedAnchorHorizontalStyle(anchorToken)];
});