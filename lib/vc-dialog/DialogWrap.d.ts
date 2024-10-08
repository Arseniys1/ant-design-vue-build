declare const DialogWrap: import("vue").DefineComponent<{
    keyboard: {
        type: BooleanConstructor;
        default: any;
    };
    mask: {
        type: BooleanConstructor;
        default: any;
    };
    afterClose: FunctionConstructor;
    closable: {
        type: BooleanConstructor;
        default: any;
    };
    maskClosable: {
        type: BooleanConstructor;
        default: any;
    };
    visible: {
        type: BooleanConstructor;
        default: any;
    };
    destroyOnClose: {
        type: BooleanConstructor;
        default: any;
    };
    mousePosition: import("vue-types").VueTypeLooseShape<{
        x: number;
        y: number;
    }>;
    title: import("vue-types").VueTypeValidableDef<any>;
    footer: import("vue-types").VueTypeValidableDef<any>;
    transitionName: StringConstructor;
    maskTransitionName: StringConstructor;
    animation: import("vue-types").VueTypeValidableDef<any>;
    maskAnimation: import("vue-types").VueTypeValidableDef<any>;
    wrapStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    bodyStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    maskStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    prefixCls: StringConstructor;
    wrapClassName: StringConstructor;
    rootClassName: StringConstructor;
    width: (StringConstructor | NumberConstructor)[];
    height: (StringConstructor | NumberConstructor)[];
    zIndex: NumberConstructor;
    bodyProps: import("vue-types").VueTypeValidableDef<any>;
    maskProps: import("vue-types").VueTypeValidableDef<any>;
    wrapProps: import("vue-types").VueTypeValidableDef<any>;
    getContainer: import("vue-types").VueTypeValidableDef<any>;
    dialogStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    dialogClass: StringConstructor;
    closeIcon: import("vue-types").VueTypeValidableDef<any>;
    forceRender: {
        type: BooleanConstructor;
        default: any;
    };
    getOpenCount: import("vue").PropType<() => number>;
    focusTriggerAfterClose: {
        type: BooleanConstructor;
        default: any;
    };
    onClose: import("vue").PropType<(e: MouseEvent | KeyboardEvent) => void>;
    modalRender: FunctionConstructor;
}, () => import("vue/jsx-runtime").JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    keyboard: {
        type: BooleanConstructor;
        default: any;
    };
    mask: {
        type: BooleanConstructor;
        default: any;
    };
    afterClose: FunctionConstructor;
    closable: {
        type: BooleanConstructor;
        default: any;
    };
    maskClosable: {
        type: BooleanConstructor;
        default: any;
    };
    visible: {
        type: BooleanConstructor;
        default: any;
    };
    destroyOnClose: {
        type: BooleanConstructor;
        default: any;
    };
    mousePosition: import("vue-types").VueTypeLooseShape<{
        x: number;
        y: number;
    }>;
    title: import("vue-types").VueTypeValidableDef<any>;
    footer: import("vue-types").VueTypeValidableDef<any>;
    transitionName: StringConstructor;
    maskTransitionName: StringConstructor;
    animation: import("vue-types").VueTypeValidableDef<any>;
    maskAnimation: import("vue-types").VueTypeValidableDef<any>;
    wrapStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    bodyStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    maskStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    prefixCls: StringConstructor;
    wrapClassName: StringConstructor;
    rootClassName: StringConstructor;
    width: (StringConstructor | NumberConstructor)[];
    height: (StringConstructor | NumberConstructor)[];
    zIndex: NumberConstructor;
    bodyProps: import("vue-types").VueTypeValidableDef<any>;
    maskProps: import("vue-types").VueTypeValidableDef<any>;
    wrapProps: import("vue-types").VueTypeValidableDef<any>;
    getContainer: import("vue-types").VueTypeValidableDef<any>;
    dialogStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: import("vue").CSSProperties;
    };
    dialogClass: StringConstructor;
    closeIcon: import("vue-types").VueTypeValidableDef<any>;
    forceRender: {
        type: BooleanConstructor;
        default: any;
    };
    getOpenCount: import("vue").PropType<() => number>;
    focusTriggerAfterClose: {
        type: BooleanConstructor;
        default: any;
    };
    onClose: import("vue").PropType<(e: MouseEvent | KeyboardEvent) => void>;
    modalRender: FunctionConstructor;
}>>, {
    mask: boolean;
    visible: boolean;
    forceRender: boolean;
    maskClosable: boolean;
    keyboard: boolean;
    closable: boolean;
    bodyStyle: import("vue").CSSProperties;
    maskStyle: import("vue").CSSProperties;
    destroyOnClose: boolean;
    wrapStyle: import("vue").CSSProperties;
    dialogStyle: import("vue").CSSProperties;
    focusTriggerAfterClose: boolean;
}, {}>;
export default DialogWrap;
