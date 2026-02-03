export type IconName = 
    | "calendar"
    | "card"
    | "check"
    | "chevronLeft"
    | "chevronRight"
    | "close"
    | "copy"
    | "direction"
    | "edit"
    | "filter"
    | "minus"
    | "note"
    | "plus"
    | "search"
    | "shop"
    | "tag"
    | "trash";

export type SvgIconProps = {
    size?: number;
    color?: string;
}

export type IconProps = SvgIconProps & {
    name: IconName;
}