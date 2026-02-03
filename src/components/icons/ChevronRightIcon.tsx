import Svg, { Path } from "react-native-svg";
import { SvgIconProps } from "./Icon.types";

export function ChevronRightIcon({ size, color }: SvgIconProps) {
    return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" >
            <Path d="M8.41692 20L15.0036 13.4134C15.3749 13.0367 15.5831 12.529 15.5831 12C15.5831 11.471 15.3749 10.9633 15.0036 10.5866L8.41692 4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>

    )
}