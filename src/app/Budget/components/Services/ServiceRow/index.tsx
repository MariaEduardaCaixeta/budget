import { Icon, IconProps } from "@/components/icons";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { Money } from "@/components/MoneyText";

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
                    style={styles.title}
                >
                    {serviceName}
                </Text>

                <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={styles.description}
                >
                    {serviceDescription}
                </Text>
            </View>

            {/* RIGHT */}
            <View style={styles.right}>
                <Money amount={amount} />

                <Text style={styles.qty}>Qt: {quantity}</Text>
            </View>

            {/* ICON */}
            <Icon {...iconProps} />
        </View>
    );
}