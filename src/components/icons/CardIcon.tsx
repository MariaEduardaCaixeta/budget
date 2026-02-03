import Svg, { Path } from "react-native-svg";
import { SvgIconProps } from "./Icon.types";

export function CardIcon({ size, color }: SvgIconProps) {
    return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <Path d="M17.1389 3.77777H6.86112C4.59061 3.77777 2.75 5.61839 2.75 7.88889V16.1111C2.75 18.3816 4.59061 20.2222 6.86112 20.2222H17.1389C19.4094 20.2222 21.25 18.3816 21.25 16.1111V7.88889C21.25 5.61839 19.4094 3.77777 17.1389 3.77777Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M21.25 8.91667H2.75" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M6.21777 16.1111H11.3567" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>

    )
}