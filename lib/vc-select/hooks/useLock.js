"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useLock;
var _vue = require("vue");
/**
 * Locker return cached mark.
 * If set to `true`, will return `true` in a short time even if set `false`.
 * If set to `false` and then set to `true`, will change to `true`.
 * And after time duration, it will back to `null` automatically.
 */
function useLock() {
  let duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 250;
  let lock = null;
  let timeout;
  (0, _vue.onBeforeUnmount)(() => {
    clearTimeout(timeout);
  });
  function doLock(locked) {
    if (locked || lock === null) {
      lock = locked;
    }
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      lock = null;
    }, duration);
  }
  return [() => lock, doLock];
}