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
    iconSize?: number;
    iconColor?: string;
}

export type IconProps = SvgIconProps & {
    iconName: IconName;
}