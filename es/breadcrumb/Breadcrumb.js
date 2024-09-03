import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { createVNode as _createVNode } from "vue";
import { cloneVNode, defineComponent } from 'vue';
import PropTypes from '../_util/vue-types';
import { flattenChildren, getPropsSlot } from '../_util/props-util';
import warning from '../_util/warning';
import BreadcrumbItem from './BreadcrumbItem';
import Menu from '../menu';
import useConfigInject from '../config-provider/hooks/useConfigInject';
import useStyle from './style';
export const breadcrumbProps = () => ({
  prefixCls: String,
  routes: {
    type: Array
  },
  params: PropTypes.any,
  separator: PropTypes.any,
  itemRender: {
    type: Function
  }
});
function getBreadcrumbName(route, params) {
  if (!route.breadcrumbName) {
    return null;
  }
  const paramsKeys = Object.keys(params).join('|');
  const name = route.breadcrumbName.replace(new RegExp(`:(${paramsKeys})`, 'g'), (replacement, key) => params[key] || replacement);
  return name;
}
function defaultItemRender(opt) {
  const {
    route,
    params,
    routes,
    paths
  } = opt;
  const isLastItem = routes.indexOf(route) === routes.length - 1;
  const name = getBreadcrumbName(route, params);
  return isLastItem ? _createVNode("span", null, [name]) : _createVNode("a", {
    "href": `#/${paths.join('/')}`
  }, [name]);
}
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'ABreadcrumb',
  inheritAttrs: false,
  props: breadcrumbProps(),
  slots: Object,
  setup(props, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    const {
      prefixCls,
      direction
    } = useConfigInject('breadcrumb', props);
    const [wrapSSR, hashId] = useStyle(prefixCls);
    const getPath = (path, params) => {
      path = (path || '').replace(/^\//, '');
      Object.keys(params).forEach(key => {
        path = path.replace(`:${key}`, params[key]);
      });
      return path;
    };
    const addChildPath = (paths, childPath, params) => {
      const originalPaths = [...paths];
      const path = getPath(childPath || '', params);
      if (path) {
        originalPaths.push(path);
      }
      return originalPaths;
    };
    const genForRoutes = _ref2 => {
      let {
        routes = [],
        params = {},
        separator,
        itemRender = defaultItemRender
      } = _ref2;
      const paths = [];
      return routes.map(route => {
        const path = getPath(route.path, params);
        if (path) {
          paths.push(path);
        }
        const tempPaths = [...paths];
        // generated overlay by route.children
        let overlay = null;
        if (route.children && route.children.length) {
          overlay = _createVNode(Menu, {
            "items": route.children.map(child => ({
              key: child.path || child.breadcrumbName,
              label: itemRender({
                route: child,
                params,
                routes,
                paths: addChildPath(tempPaths, child.path, params)
              })
            }))
          }, null);
        }
        const itemProps = {
          separator
        };
        if (overlay) {
          itemProps.overlay = overlay;
        }
        return _createVNode(BreadcrumbItem, _objectSpread(_objectSpread({}, itemProps), {}, {
          "key": path || route.breadcrumbName
        }), {
          default: () => [itemRender({
            route,
            params,
            routes,
            paths: tempPaths
          })]
        });
      });
    };
    return () => {
      var _a;
      let crumbs;
      const {
        routes,
        params = {}
      } = props;
      const children = flattenChildren(getPropsSlot(slots, props));
      const separator = (_a = getPropsSlot(slots, props, 'separator')) !== null && _a !== void 0 ? _a : '/';
      const itemRender = props.itemRender || slots.itemRender || defaultItemRender;
      if (routes && routes.length > 0) {
        // generated by route
        crumbs = genForRoutes({
          routes,
          params,
          separator,
          itemRender
        });
      } else if (children.length) {
        crumbs = children.map((element, index) => {
          warning(typeof element.type === 'object' && (element.type.__ANT_BREADCRUMB_ITEM || element.type.__ANT_BREADCRUMB_SEPARATOR), 'Breadcrumb', "Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children");
          return cloneVNode(element, {
            separator,
            key: index
          });
        });
      }
      const breadcrumbClassName = {
        [prefixCls.value]: true,
        [`${prefixCls.value}-rtl`]: direction.value === 'rtl',
        [`${attrs.class}`]: !!attrs.class,
        [hashId.value]: true
      };
      return wrapSSR(_createVNode("nav", _objectSpread(_objectSpread({}, attrs), {}, {
        "class": breadcrumbClassName
      }), [_createVNode("ol", null, [crumbs])]));
    };
  }
});