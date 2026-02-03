import Svg, { Path } from "react-native-svg";
import { SvgIconProps } from "./Icon.types";

export function ChevronLeftIcon({ iconSize: size, iconColor: color }: SvgIconProps) {
    return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <Path d="M15.5831 4L8.9964 10.5866C8.62508 10.9633 8.41693 11.471 8.41693 12C8.41693 12.529 8.62508 13.0367 8.9964 13.4134L15.5831 20" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>

    )
}