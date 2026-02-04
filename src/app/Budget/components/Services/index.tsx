import { View } from "react-native"
import { ServiceRow, ServiceRowProps } from "./ServiceRow"
import { colors } from "@/theme/colors"
import { Button } from "@/components/Button"
import { styles } from "./styles"

export function Services({ services }: { services?: ServiceRowProps[] }) {
    return (
        <View style={styles.container}>
            {
                services?.map((service) => (
                    <ServiceRow
                        serviceName={service.serviceName}
                        serviceDescription={service.serviceDescription}
                        amount={service.amount}
                        quantity={service.quantity}
                    />
                ))
            }

            <Button
                label="Adicionar serviço"
                labelColor={colors.purple.base}
                iconName="plus"
                iconColor={colors.purple.base}
            />
        </View>
    )
}