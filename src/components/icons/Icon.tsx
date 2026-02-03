import { ComponentType } from "react";
import { IconProps, SvgIconProps } from "./Icon.types";
import { CalendarIcon } from "./CalendarIcon";
import { CardIcon } from "./CardIcon";
import { CheckIcon } from "./CheckIcon";
import { ChevronLeftIcon } from "./ChevronLeftIcon";
import { ChevronRightIcon } from "./ChevronRightIcon";
import { CloseIcon } from "./CloseIcon";
import { CopyIcon } from "./CopyIcon";
import { DirectionIcon } from "./DirectionIcon";
import { EditIcon } from "./EditIcon";
import { FilterIcon } from "./FilterIcon";
import { MinusIcon } from "./MinusIcon";
import { NoteIcon } from "./NoteIcon";
import { PlusIcon } from "./PlusIcon";
import { SearchIcon } from "./SearchIcon";
import { ShopIcon } from "./ShopIcon";
import { TagIcon } from "./TagIcon";
import { TrashIcon } from "./TrashIcon";


type SvgIconComponent = ComponentType<SvgIconProps>;

const icons: Record<IconProps["name"], SvgIconComponent> = {
    calendar: CalendarIcon,
    card: CardIcon,
    check: CheckIcon,
    chevronLeft: ChevronLeftIcon,
    chevronRight: ChevronRightIcon,
    close: CloseIcon,
    copy: CopyIcon,
    direction: DirectionIcon,
    edit: EditIcon,
    filter: FilterIcon,
    minus: MinusIcon,
    note: NoteIcon,
    plus: PlusIcon,
    search: SearchIcon,
    shop: ShopIcon,
    tag: TagIcon,
    trash: TrashIcon
};

export function Icon({ name, size=24, color='#000' }: IconProps) {
    const IconComponent = icons[name];
    return <IconComponent size={size} color={color} />;
}