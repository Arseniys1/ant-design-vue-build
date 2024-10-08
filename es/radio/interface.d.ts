import type { RadioProps } from './Radio';
import type { Ref } from 'vue';
export interface RadioChangeEventTarget extends RadioProps {
    checked: boolean;
}
export type RadioGroupButtonStyle = 'outline' | 'solid';
export type RadioGroupOptionType = 'default' | 'button';
export interface RadioChangeEvent {
    target: RadioChangeEventTarget;
    stopPropagation: () => void;
    preventDefault: () => void;
    nativeEvent: MouseEvent;
}
export interface RadioGroupContext {
    onChange: (e: RadioChangeEvent) => void;
    value: Ref<any>;
    disabled: Ref<boolean>;
    name: Ref<string>;
}
export type RadioOptionTypeContextProps = RadioGroupOptionType;
