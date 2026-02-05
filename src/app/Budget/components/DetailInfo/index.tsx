import { Icon } from "@/components/icons";
import { View, Text } from "react-native";
import { colors } from "@/theme/colors";
import { styles } from "./styles";
import { typography } from "@/theme/typography";

export function DetailInfo() {
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
                    Detalhes do Orçamento da loja online da vinte e cinco de março
                </Text>
            </View>

            {/* CONTENT */}
            <View style={styles.contentContainer}>
                <View style={styles.contentInfoColumn}>
                    <Text style={styles.contentInfoTitle}>Cliente</Text>
                    <Text style={styles.contentInfoText}>Soluções Tecnológicas Beta</Text>
                </View>
                <View style={styles.contentInfoRow}>
                    <View style={styles.contentInfoColumn}>
                        <Text style={styles.contentInfoTitle}>Criado em</Text>
                        <Text style={styles.contentInfoText}>12 de Setembro de 2024</Text>
                    </View>
                    <View style={styles.contentInfoColumn}>
                        <Text style={styles.contentInfoTitle}>Atualizado em</Text>
                        <Text style={styles.contentInfoText}>15 de Setembro</Text>
                    </View>
                </View>
            </View>

        </View>
    )
}
