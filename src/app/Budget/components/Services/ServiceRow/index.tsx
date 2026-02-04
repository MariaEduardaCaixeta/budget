import { Icon, IconProps } from "@/components/icons";
import { Text, TextStyle, View } from "react-native";
import { styles } from "./styles";
import { typography } from "@/theme/typography";
import { colors } from "@/theme/colors";
import { formatNumber } from "@/utils/formatters";

type ServiceRowProps = IconProps & {
    serviceName: string;
    serviceDescription: string;
    amount: number;
    quantity: number;
}

export function ServiceRow({ serviceName, serviceDescription, amount, quantity, ...iconProps }: ServiceRowProps) {
    return (
        <View style={styles.container}>
            {/* LEFT */}
            <View style={styles.left}>
                <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={[typography.titleSm as TextStyle, styles.title]}
                >
                    {serviceName}
                </Text>

                <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={[typography.textXs as TextStyle, styles.description]}
                >
                    {serviceDescription}
                </Text>
            </View>

            {/* RIGHT */}
            <View style={styles.right}>
                <Text>
                    <Text style={[typography.textXs as TextStyle, styles.currency]}>R$ </Text>
                    <Text style={[typography.titleMd as TextStyle, styles.amount]}>{formatNumber(amount)}</Text>
                </Text>

                <Text style={[typography.textXs as TextStyle, styles.qty]}>Qt: {quantity}</Text>
            </View>

            {/* ICON */}
            <Icon {...iconProps} />
        </View>
    );
}