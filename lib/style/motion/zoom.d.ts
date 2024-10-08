import type { CSSInterpolation } from '../../_util/cssinjs';
import { Keyframes } from '../../_util/cssinjs';
import type { AliasToken } from '../../theme/internal';
import type { TokenWithCommonCls } from '../../theme/util/genComponentStyleHook';
export declare const zoomIn: Keyframes;
export declare const zoomOut: Keyframes;
export declare const zoomBigIn: Keyframes;
export declare const zoomBigOut: Keyframes;
export declare const zoomUpIn: Keyframes;
export declare const zoomUpOut: Keyframes;
export declare const zoomLeftIn: Keyframes;
export declare const zoomLeftOut: Keyframes;
export declare const zoomRightIn: Keyframes;
export declare const zoomRightOut: Keyframes;
export declare const zoomDownIn: Keyframes;
export declare const zoomDownOut: Keyframes;
type ZoomMotionTypes = 'zoom' | 'zoom-big' | 'zoom-big-fast' | 'zoom-left' | 'zoom-right' | 'zoom-up' | 'zoom-down';
export declare const initZoomMotion: (token: TokenWithCommonCls<AliasToken>, motionName: ZoomMotionTypes) => CSSInterpolation;
export {};
