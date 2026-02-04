import { ServiceRow } from "./ServiceRow"
import { colors } from "@/theme/colors"

export function Services() {
    return (
        <ServiceRow 
            serviceName="Design de Interface"
            serviceDescription="Criação de wireframes e protótipos de alta fidelidade"
            amount={3847.50}
            quantity={1}
            iconName="edit"
            iconSize={20}
            iconColor={colors.purple.base}
        />
    )
}