import { View } from "react-native"
import { ServiceRow } from "./ServiceRow"
import { colors } from "@/theme/colors"
import { Button } from "@/components/Button"
import { styles } from "./styles"
import { ServiceData } from "./AddService"

type ServicesProps = {
    services?: ServiceData[];
    isViewOnly: boolean;
    onAddService?: () => void;
    onEditService?: (serviceId: string) => void;
}

export function Services({ services, isViewOnly, onAddService, onEditService }: ServicesProps) {
    return (
        <View style={styles.container}>
            {
                services?.map((service) => (
                    <ServiceRow
                        key={service.id}
                        {...service}
                        onEdit={() => onEditService && onEditService(service.id)}
                        isViewOnly={isViewOnly}
                    />
                ))
            }

            {
                !isViewOnly && (
                    <Button
                        label="Adicionar serviço"
                        labelColor={colors.purple.base}
                        iconName="plus"
                        iconColor={colors.purple.base}
                        onPress={onAddService}
                    />
                )
            }
        </View>
    )
}