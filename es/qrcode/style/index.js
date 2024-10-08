import _extends from "@babel/runtime/helpers/esm/extends";
import { mergeToken, genComponentStyleHook } from '../../theme/internal';
import { resetComponent } from '../../style';
const genQRCodeStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: _extends(_extends({}, resetComponent(token)), {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: token.paddingSM,
      backgroundColor: token.colorWhite,
      borderRadius: token.borderRadiusLG,
      border: `${token.lineWidth}px ${token.lineType} ${token.colorSplit}`,
      position: 'relative',
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      [`& > ${componentCls}-mask`]: {
        position: 'absolute',
        insetBlockStart: 0,
        insetInlineStart: 0,
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        color: token.colorText,
        lineHeight: token.lineHeight,
        background: token.QRCodeMaskBackgroundColor,
        textAlign: 'center',
        [`& > ${componentCls}-expired , & > ${componentCls}-scanned`]: {
          color: token.QRCodeTextColor
        }
      },
      '&-icon': {
        marginBlockEnd: token.marginXS,
        fontSize: token.controlHeight
      }
    }),
    [`${componentCls}-borderless`]: {
      borderColor: 'transparent'
    }
  };
};
export default genComponentStyleHook('QRCode', token => genQRCodeStyle(mergeToken(token, {
  QRCodeTextColor: 'rgba(0, 0, 0, 0.88)',
  QRCodeMaskBackgroundColor: 'rgba(255, 255, 255, 0.96)'
})));