import _extends from "@babel/runtime/helpers/esm/extends";
import { getClientSize } from '../../vc-util/Dom/css';
function fixPoint(key, start, width, clientWidth) {
  const startAddWidth = start + width;
  const offsetStart = (width - clientWidth) / 2;
  if (width > clientWidth) {
    if (start > 0) {
      return {
        [key]: offsetStart
      };
    }
    if (start < 0 && startAddWidth < clientWidth) {
      return {
        [key]: -offsetStart
      };
    }
  } else if (start < 0 || startAddWidth > clientWidth) {
    return {
      [key]: start < 0 ? offsetStart : -offsetStart
    };
  }
  return {};
}
/**
 * Fix positon x,y point when
 *
 * Ele width && height < client
 * - Back origin
 *
 * - Ele width | height > clientWidth | clientHeight
 * - left | top > 0 -> Back 0
 * - left | top + width | height < clientWidth | clientHeight -> Back left | top + width | height === clientWidth | clientHeight
 *
 * Regardless of other
 */
export default function getFixScaleEleTransPosition(width, height, left, top) {
  const {
    width: clientWidth,
    height: clientHeight
  } = getClientSize();
  let fixPos = null;
  if (width <= clientWidth && height <= clientHeight) {
    fixPos = {
      x: 0,
      y: 0
    };
  } else if (width > clientWidth || height > clientHeight) {
    fixPos = _extends(_extends({}, fixPoint('x', left, width, clientWidth)), fixPoint('y', top, height, clientHeight));
  }
  return fixPos;
}