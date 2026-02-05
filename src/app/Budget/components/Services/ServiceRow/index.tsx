import { Icon, IconProps } from "@/components/icons";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { Money } from "@/components/MoneyText";
import { moneyStyles } from "@/components/MoneyText/styles";
import { typography } from "@/theme/typography";
import { colors } from "@/theme/colors";
import { ServiceData } from "../AddService";
import { Button } from "@/components/Button";

type ServiceRowProps = ServiceData & {
    onEdit: () => void;
    isViewOnly: boolean;
}

export function ServiceRow(data: ServiceRowProps) {
    return (
        <View style={styles.container}>
            {/* LEFT */}
            <View style={styles.left}>
                <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={styles.title}
                >
                    {data.name}
                </Text>

                <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={styles.description}
                >
                    {data.description}
                </Text>
            </View>

            {/* RIGHT */}
            <View style={styles.right}>
                <Money amount={data.amount} amountStyle={[moneyStyles.base, typography.titleMd]}/>

                <Text style={styles.qty}>Qt: {data.quantity}</Text>
            </View>

            {/* ICON */}
            {
                !data.isViewOnly && (
                    <Button
                        iconName="edit"
                        iconSize={20}
                        iconColor={colors.purple.base}
                        onPress={data.onEdit}
                        hasPadding={false}
                        backgroundColor="transparent"
                    />
                )
            }
        </View>
    );
}