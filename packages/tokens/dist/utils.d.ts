import { Color } from "./Colors/Colors";
export interface KVO<T = any> {
    [key: string]: T;
}
export interface StyledProps {
    /** Text Color */
    color: Color;
    /** Optional class name */
    className?: string;
}
/** Generate classes from styled props */
export declare function styledClasses(props: StyledProps, ...classes: string[]): string;
/** Return all props that are not styled props */
export declare function omitStyledProps(props: KVO, ...ignoredProps: string[]): KVO;
