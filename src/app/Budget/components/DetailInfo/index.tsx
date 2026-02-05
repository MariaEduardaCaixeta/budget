import { Icon } from "@/components/icons";
import { View, Text } from "react-native";
import { styles } from "./styles";

function DetailInfoCard() {
    return (
        <View>
            <View>
                <View style={styles.iconContainer}>
                    <Icon
                        iconName="shop"
                        iconSize={20}
                        iconColor="#000"
                    />
                </View>
                <Text>Cliente</Text>
            </View>
        </View>
    )
}

export function DetailInfo() {
    return (
        <View>

        </View>
    )
}
