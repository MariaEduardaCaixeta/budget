import { View, Text, TextStyle } from "react-native";
import { styles } from "./styles";
import { typography } from "@/theme/typography";
import { BudgetStatus, budgetStatusConfig } from "@/enums/BudgetStatus";

type Props = {
    status: BudgetStatus;
}

export function StatusTag({ status }: Props) {
    const budgetConfig = budgetStatusConfig[status];
    return (
        <View style={[styles.container, { backgroundColor: budgetConfig.backgroundColor }]}>
            <View style={[styles.circle, { backgroundColor: budgetConfig.circleColor }]}/>
            <Text style={[typography.titleXs , { color: budgetConfig.textColor }]}>{budgetConfig.label}</Text>
        </View>   
    )
}