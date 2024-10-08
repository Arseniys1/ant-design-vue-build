import { computed, shallowRef } from 'vue';
export default (stretch => {
  const targetSize = shallowRef({
    width: 0,
    height: 0
  });
  function measureStretch(element) {
    targetSize.value = {
      width: element.offsetWidth,
      height: element.offsetHeight
    };
  }
  // Merge stretch style
  const style = computed(() => {
    const sizeStyle = {};
    if (stretch.value) {
      const {
        width,
        height
      } = targetSize.value;
      // Stretch with target
      if (stretch.value.indexOf('height') !== -1 && height) {
        sizeStyle.height = `${height}px`;
      } else if (stretch.value.indexOf('minHeight') !== -1 && height) {
        sizeStyle.minHeight = `${height}px`;
      }
      if (stretch.value.indexOf('width') !== -1 && width) {
        sizeStyle.width = `${width}px`;
      } else if (stretch.value.indexOf('minWidth') !== -1 && width) {
        sizeStyle.minWidth = `${width}px`;
      }
    }
    return sizeStyle;
  });
  return [style, measureStretch];
});