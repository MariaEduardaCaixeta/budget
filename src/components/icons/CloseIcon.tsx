import Svg, { Path } from "react-native-svg";
import { SvgIconProps } from "./Icon.types";

export function CloseIcon({ iconSize: size, iconColor: color }: SvgIconProps) {
    return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <Path d="M19 5L5 19" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M19 19L5 5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>

    )
}