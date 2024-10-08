import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _extends from "@babel/runtime/helpers/esm/extends";
import { createVNode as _createVNode } from "vue";
var __rest = this && this.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
import classNames from '../../_util/classNames';
import { filterEmpty, findDOMNode, flattenChildren, isValidElement } from '../../_util/props-util';
import { watch, shallowRef, Text, computed, defineComponent, isVNode } from 'vue';
import { getPathValue, validateValue } from '../utils/valueUtil';
import { useInjectSlots } from '../../table/context';
import { INTERNAL_COL_DEFINE } from '../utils/legacyUtil';
import { useInjectHover } from '../context/HoverContext';
import { useInjectSticky } from '../context/StickyContext';
import { warning } from '../../vc-util/warning';
import eagerComputed from '../../_util/eagerComputed';
import { customRenderSlot } from '../../_util/vnode';
import { addClass, removeClass } from '../../vc-util/Dom/class';
/** Check if cell is in hover range */
function inHoverRange(cellStartRow, cellRowSpan, startRow, endRow) {
  const cellEndRow = cellStartRow + cellRowSpan - 1;
  return cellStartRow <= endRow && cellEndRow >= startRow;
}
function isRenderCell(data) {
  return data && typeof data === 'object' && !Array.isArray(data) && !isVNode(data);
}
export default defineComponent({
  name: 'Cell',
  props: ['prefixCls', 'record', 'index', 'renderIndex', 'dataIndex', 'customRender', 'component', 'colSpan', 'rowSpan', 'fixLeft', 'fixRight', 'firstFixLeft', 'lastFixLeft', 'firstFixRight', 'lastFixRight', 'appendNode', 'additionalProps', 'ellipsis', 'align', 'rowType', 'isSticky', 'column', 'cellType', 'transformCellText'],
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const contextSlots = useInjectSlots();
    const {
      onHover,
      startRow,
      endRow
    } = useInjectHover();
    const colSpan = computed(() => {
      var _a, _b, _c, _d;
      return (_c = (_a = props.colSpan) !== null && _a !== void 0 ? _a : (_b = props.additionalProps) === null || _b === void 0 ? void 0 : _b.colSpan) !== null && _c !== void 0 ? _c : (_d = props.additionalProps) === null || _d === void 0 ? void 0 : _d.colspan;
    });
    const rowSpan = computed(() => {
      var _a, _b, _c, _d;
      return (_c = (_a = props.rowSpan) !== null && _a !== void 0 ? _a : (_b = props.additionalProps) === null || _b === void 0 ? void 0 : _b.rowSpan) !== null && _c !== void 0 ? _c : (_d = props.additionalProps) === null || _d === void 0 ? void 0 : _d.rowspan;
    });
    const hovering = eagerComputed(() => {
      const {
        index
      } = props;
      return inHoverRange(index, rowSpan.value || 1, startRow.value, endRow.value);
    });
    const supportSticky = useInjectSticky();
    // ====================== Hover =======================
    const onMouseenter = (event, mergedRowSpan) => {
      var _a;
      const {
        record,
        index,
        additionalProps
      } = props;
      if (record) {
        onHover(index, index + mergedRowSpan - 1);
      }
      (_a = additionalProps === null || additionalProps === void 0 ? void 0 : additionalProps.onMouseenter) === null || _a === void 0 ? void 0 : _a.call(additionalProps, event);
    };
    const onMouseleave = event => {
      var _a;
      const {
        record,
        additionalProps
      } = props;
      if (record) {
        onHover(-1, -1);
      }
      (_a = additionalProps === null || additionalProps === void 0 ? void 0 : additionalProps.onMouseleave) === null || _a === void 0 ? void 0 : _a.call(additionalProps, event);
    };
    const getTitle = vnodes => {
      const vnode = filterEmpty(vnodes)[0];
      if (isVNode(vnode)) {
        if (vnode.type === Text) {
          return vnode.children;
        } else {
          return Array.isArray(vnode.children) ? getTitle(vnode.children) : undefined;
        }
      } else {
        return vnode;
      }
    };
    const hoverRef = shallowRef(null);
    watch([hovering, () => props.prefixCls, hoverRef], () => {
      const cellDom = findDOMNode(hoverRef.value);
      if (!cellDom) return;
      if (hovering.value) {
        addClass(cellDom, `${props.prefixCls}-cell-row-hover`);
      } else {
        removeClass(cellDom, `${props.prefixCls}-cell-row-hover`);
      }
    });
    return () => {
      var _a, _b, _c, _d, _e, _f;
      const {
        prefixCls,
        record,
        index,
        renderIndex,
        dataIndex,
        customRender,
        component: Component = 'td',
        fixLeft,
        fixRight,
        firstFixLeft,
        lastFixLeft,
        firstFixRight,
        lastFixRight,
        appendNode = (_a = slots.appendNode) === null || _a === void 0 ? void 0 : _a.call(slots),
        additionalProps = {},
        ellipsis,
        align,
        rowType,
        isSticky,
        column = {},
        cellType
      } = props;
      const cellPrefixCls = `${prefixCls}-cell`;
      // ==================== Child Node ====================
      let cellProps;
      let childNode;
      const children = (_b = slots.default) === null || _b === void 0 ? void 0 : _b.call(slots);
      if (validateValue(children) || cellType === 'header') {
        childNode = children;
      } else {
        const value = getPathValue(record, dataIndex);
        // Customize render node
        childNode = value;
        if (customRender) {
          const renderData = customRender({
            text: value,
            value,
            record,
            index,
            renderIndex,
            column: column.__originColumn__
          });
          if (isRenderCell(renderData)) {
            if (process.env.NODE_ENV !== 'production') {
              warning(false, '`columns.customRender` return cell props is deprecated with perf issue, please use `customCell` instead.');
            }
            childNode = renderData.children;
            cellProps = renderData.props;
          } else {
            childNode = renderData;
          }
        }
        if (!(INTERNAL_COL_DEFINE in column) && cellType === 'body' && contextSlots.value.bodyCell && !((_c = column.slots) === null || _c === void 0 ? void 0 : _c.customRender)) {
          const child = customRenderSlot(contextSlots.value, 'bodyCell', {
            text: value,
            value,
            record,
            index,
            column: column.__originColumn__
          }, () => {
            const fallback = childNode === undefined ? value : childNode;
            return [typeof fallback === 'object' && isValidElement(fallback) || typeof fallback !== 'object' ? fallback : null];
          });
          childNode = flattenChildren(child);
        }
        /** maybe we should @deprecated */
        if (props.transformCellText) {
          childNode = props.transformCellText({
            text: childNode,
            record,
            index,
            column: column.__originColumn__
          });
        }
      }
      // Not crash if final `childNode` is not validate VueNode
      if (typeof childNode === 'object' && !Array.isArray(childNode) && !isVNode(childNode)) {
        childNode = null;
      }
      if (ellipsis && (lastFixLeft || firstFixRight)) {
        const _childNode = function () {
          return childNode;
        }();
        childNode = _createVNode("span", {
          "class": `${cellPrefixCls}-content`
        }, [childNode]);
      }
      if (Array.isArray(childNode) && childNode.length === 1) {
        childNode = childNode[0];
      }
      const _g = cellProps || {},
        {
          colSpan: cellColSpan,
          rowSpan: cellRowSpan,
          style: cellStyle,
          class: cellClassName
        } = _g,
        restCellProps = __rest(_g, ["colSpan", "rowSpan", "style", "class"]);
      const mergedColSpan = (_d = cellColSpan !== undefined ? cellColSpan : colSpan.value) !== null && _d !== void 0 ? _d : 1;
      const mergedRowSpan = (_e = cellRowSpan !== undefined ? cellRowSpan : rowSpan.value) !== null && _e !== void 0 ? _e : 1;
      if (mergedColSpan === 0 || mergedRowSpan === 0) {
        return null;
      }
      // ====================== Fixed =======================
      const fixedStyle = {};
      const isFixLeft = typeof fixLeft === 'number' && supportSticky.value;
      const isFixRight = typeof fixRight === 'number' && supportSticky.value;
      if (isFixLeft) {
        fixedStyle.position = 'sticky';
        fixedStyle.left = `${fixLeft}px`;
      }
      if (isFixRight) {
        fixedStyle.position = 'sticky';
        fixedStyle.right = `${fixRight}px`;
      }
      // ====================== Align =======================
      const alignStyle = {};
      if (align) {
        alignStyle.textAlign = align;
      }
      // ====================== Render ======================
      let title;
      const ellipsisConfig = ellipsis === true ? {
        showTitle: true
      } : ellipsis;
      if (ellipsisConfig && (ellipsisConfig.showTitle || rowType === 'header')) {
        if (typeof childNode === 'string' || typeof childNode === 'number') {
          title = childNode.toString();
        } else if (isVNode(childNode)) {
          title = getTitle([childNode]);
        }
      }
      const componentProps = _extends(_extends(_extends({
        title
      }, restCellProps), additionalProps), {
        colSpan: mergedColSpan !== 1 ? mergedColSpan : null,
        rowSpan: mergedRowSpan !== 1 ? mergedRowSpan : null,
        class: classNames(cellPrefixCls, {
          [`${cellPrefixCls}-fix-left`]: isFixLeft && supportSticky.value,
          [`${cellPrefixCls}-fix-left-first`]: firstFixLeft && supportSticky.value,
          [`${cellPrefixCls}-fix-left-last`]: lastFixLeft && supportSticky.value,
          [`${cellPrefixCls}-fix-right`]: isFixRight && supportSticky.value,
          [`${cellPrefixCls}-fix-right-first`]: firstFixRight && supportSticky.value,
          [`${cellPrefixCls}-fix-right-last`]: lastFixRight && supportSticky.value,
          [`${cellPrefixCls}-ellipsis`]: ellipsis,
          [`${cellPrefixCls}-with-append`]: appendNode,
          [`${cellPrefixCls}-fix-sticky`]: (isFixLeft || isFixRight) && isSticky && supportSticky.value
        }, additionalProps.class, cellClassName),
        onMouseenter: e => {
          onMouseenter(e, mergedRowSpan);
        },
        onMouseleave,
        style: [additionalProps.style, alignStyle, fixedStyle, cellStyle]
      });
      return _createVNode(Component, _objectSpread(_objectSpread({}, componentProps), {}, {
        "ref": hoverRef
      }), {
        default: () => [appendNode, childNode, (_f = slots.dragHandle) === null || _f === void 0 ? void 0 : _f.call(slots)]
      });
    };
  }
});