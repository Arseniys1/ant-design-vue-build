import { createVNode as _createVNode } from "vue";
export const offset = 4;
export default function dropIndicatorRender(props) {
  const {
    dropPosition,
    dropLevelOffset,
    prefixCls,
    indent,
    direction = 'ltr'
  } = props;
  const startPosition = direction === 'ltr' ? 'left' : 'right';
  const endPosition = direction === 'ltr' ? 'right' : 'left';
  const style = {
    [startPosition]: `${-dropLevelOffset * indent + offset}px`,
    [endPosition]: 0
  };
  switch (dropPosition) {
    case -1:
      style.top = `${-3}px`;
      break;
    case 1:
      style.bottom = `${-3}px`;
      break;
    default:
      // dropPosition === 0
      style.bottom = `${-3}px`;
      style[startPosition] = `${indent + offset}px`;
      break;
  }
  return _createVNode("div", {
    "style": style,
    "class": `${prefixCls}-drop-indicator`
  }, null);
}