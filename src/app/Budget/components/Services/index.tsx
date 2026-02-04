import { View } from "react-native"
import { ServiceRow } from "./ServiceRow"
import { colors } from "@/theme/colors"
import { Button } from "@/components/Button"
import { styles } from "./styles"
import { ServiceData } from "./AddService"

type ServicesProps = {
    services?: ServiceData[];
    onAddService?: () => void;
}

export function Services({ services, onAddService }: ServicesProps) {
    return (
        <View style={styles.container}>
            {
                services?.map((service) => (
                    <ServiceRow
                        key={service.id}
                        {...service}
                    />
                ))
            }

            <Button
                label="Adicionar serviço"
                labelColor={colors.purple.base}
                iconName="plus"
                iconColor={colors.purple.base}
                onPress={onAddService}
            />
        </View>
    )
}