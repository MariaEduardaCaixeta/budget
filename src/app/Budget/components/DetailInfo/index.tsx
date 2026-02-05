import { Icon } from "@/components/icons";
import { View, Text } from "react-native";
import { colors } from "@/theme/colors";
import { styles } from "./styles";

type DetailInfoProps = {
    budgetTitle: string;
    budgetClient: string;
    createdAt: string;
    updatedAt: string;
};

export function DetailInfo({ budgetTitle, budgetClient, createdAt, updatedAt }: DetailInfoProps) {
    return (
        <View style={styles.container}>
            {/* HEADER */}
            <View style={styles.headerContainer}>
                <View style={styles.iconContainer}>
                    <Icon
                        iconName="shop"
                        iconSize={20}
                        iconColor={colors.purple.base}
                    />
                </View>

                <Text style={styles.headerText}>
                    {budgetTitle}
                </Text>
            </View>

            {/* CONTENT */}
            <View style={styles.contentContainer}>
                <View style={styles.contentInfoColumn}>
                    <Text style={styles.contentInfoTitle}>Cliente</Text>
                    <Text style={styles.contentInfoText}>{budgetClient}</Text>
                </View>
                <View style={styles.contentInfoRow}>
                    <View style={styles.contentInfoColumn}>
                        <Text style={styles.contentInfoTitle}>Criado em</Text>
                        <Text style={styles.contentInfoText}>{createdAt}</Text>
                    </View>
                    <View style={styles.contentInfoColumn}>
                        <Text style={styles.contentInfoTitle}>Atualizado em</Text>
                        <Text style={styles.contentInfoText}>{updatedAt}</Text>
                    </View>
                </View>
            </View>

        </View>
    )
}
