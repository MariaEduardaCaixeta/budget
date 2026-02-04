import { View } from "react-native"
import { ServiceRow } from "./ServiceRow"
import { colors } from "@/theme/colors"
import { Button } from "@/components/Button"
import { styles } from "./styles"

export function Services() {
    return (
        <View style={styles.container}>
            <ServiceRow
                serviceName="Design de Interface"
                serviceDescription="Criação de wireframes e protótipos de alta fidelidade"
                amount={3847.50}
                quantity={1}
                iconName="edit"
                iconSize={20}
                iconColor={colors.purple.base}
            />

            <Button
                label="Adicionar serviço"
                labelColor={colors.purple.base}
                iconName="plus"
                iconColor={colors.purple.base}
            />
        </View>
    )
}