import { Pressable, PressableProps, Text, View, ViewStyle } from "react-native";
import { Icon, IconProps } from "../icons";
import { Button, ButtonProps } from "../Button";
import { styles } from "./styles";

type FooterProps = {
    primary: ButtonProps;
    secondary?: ButtonProps;
    iconActions?: ButtonProps[];
}

export function Footer({ primary, secondary, iconActions }: FooterProps) {
    return (
        <View style={styles.container}>
            <View style={styles.secondaryButtonContainer}>
                {
                    secondary &&
                    <Button {...secondary} />
                }

                {
                    iconActions?.map((action, index) => (
                        <Button key={index} {...action} />
                    ))
                }
            </View>

            <View>
                <Button {...primary} />
            </View>
        </View>
    )
}