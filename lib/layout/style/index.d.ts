import type { FullToken } from '../../theme/internal';
export interface ComponentToken {
    colorBgHeader: string;
    colorBgBody: string;
    colorBgTrigger: string;
}
export interface LayoutToken extends FullToken<'Layout'> {
    layoutHeaderHeight: number;
    layoutHeaderPaddingInline: number;
    layoutHeaderColor: string;
    layoutFooterPadding: string;
    layoutTriggerHeight: number;
    layoutZeroTriggerSize: number;
}
declare const _default: (_prefixCls?: import("vue").Ref<string>) => import("../../theme/internal").UseComponentStyleResult;
export default _default;
