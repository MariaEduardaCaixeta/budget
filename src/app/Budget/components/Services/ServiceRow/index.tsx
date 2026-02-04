import { Icon, IconProps } from "@/components/icons";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { Money } from "@/components/MoneyText";
import { moneyStyles } from "@/components/MoneyText/styles";
import { typography } from "@/theme/typography";
import { colors } from "@/theme/colors";

export type ServiceRowProps = {
    serviceName: string;
    serviceDescription: string;
    amount: number;
    quantity: number;
}

export function ServiceRow({ serviceName, serviceDescription, amount, quantity }: ServiceRowProps) {
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
                <Money amount={amount} amountStyle={[moneyStyles.base, typography.titleMd]}/>

                <Text style={styles.qty}>Qt: {quantity}</Text>
            </View>

            {/* ICON */}
            <Icon iconName="edit" iconSize={20} iconColor={colors.purple.base} />
        </View>
    );
}