import { Color } from "./Colors/Colors";
import css from "./index.module.css";

export interface KVO<T = any> {
  [key: string]: T;
}

export interface StyledProps {
  /** Text Color */
  color: Color;

  /** Optional class name */
  className?: string;
}

const PropsList = ["color"];

function isObject(value: any) {
  return value && typeof value === "object" && value.constructor === Object;
}

/** Generate classes from styled props */
export function styledClasses(
  props: StyledProps,
  ...classes: string[]
): string {
  const classNames = new Set(classes);

  classNames.add(css.main);
  classNames.add(props.className || "");

  Object.keys(props).forEach((name) => {
    if (!PropsList.includes(name)) {
      return;
    }

    // Add the main css class of the prop
    // props.color => css.color
    classNames.add(css[name]);

    // Add the actual value class of the props
    // props.color="red500" => css.['red-500']
    const value = (props as KVO)[name];

    if (Array.isArray(value)) {
      // Prop is passed as array, like `border`
      // border={['top', 'bottom']}
      value.forEach((val) => classNames.add(css[`${name}-${val}`]));
    } else if (isObject(value)) {
      // Prop is passed as object, like `flex`
      // flex={{ inline: true, align: 'center-center', distribution: 'space-between' }}
      // Note: Complex types are not supported for 2nd level value (val below)
      //    flex={{ inline: true, align: 'center-center '}}
      // Not:
      //    flex={{ inline: true, align: { another object level } }}
      Object.entries(value).forEach(([prop, val]) => {
        classNames.add(css[`${name}-${prop}`]); // 'flex-align'
        classNames.add(css[`${name}-${prop}-${val}`]); // 'flex-align-center-center'
      });
    } else {
      classNames.add(css[`${name}-${value}`]);
    }
  });

  return Array.from(classNames)
    .filter((e) => !!e)
    .join(" ");
}

function assignStyleProp(props: KVO, style: KVO | null | undefined) {
  const _style: KVO = {};

  if (props.width) {
    _style.width = props.width;
  }
  if (props.height) {
    _style.height = props.height;
  }

  return _style.width || _style.height
    ? Object.assign(style || {}, _style)
    : style;
}

/** Return all props that are not styled props */
export function omitStyledProps(props: KVO, ...ignoredProps: string[]): KVO {
  return Object.keys(props)
    .filter(
      (key) =>
        props[key] !== undefined &&
        !PropsList.includes(key) &&
        !ignoredProps.includes(key)
    )
    .reduce(
      (obj: KVO, key) => {
        obj[key] = props[key];
        return obj;
      },
      {
        style: assignStyleProp(props, props.style),
      }
    );
}
