import type { ColumnType } from './interface';
export interface ColGroupProps<RecordType> {
    colWidths: readonly (number | string)[];
    columns?: readonly ColumnType<RecordType>[];
    columCount?: number;
}
declare function ColGroup<RecordType>({ colWidths, columns, columCount }: ColGroupProps<RecordType>): import("vue/jsx-runtime").JSX.Element;
export default ColGroup;
