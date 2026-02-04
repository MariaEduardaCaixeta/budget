import { View, Text, TextStyle } from "react-native";
import { StatusTag } from "../StatusTag";
import { BudgetStatus } from "@/enums/BudgetStatus";
import { styles } from "./styles";
import { typography } from "@/theme/typography";
import { formatCurrency, formatNumber } from "@/utils/formatters";

type Props = {
    status: BudgetStatus;
    budgetTitle: string;
    clientName: string;
    amount: number;
}
 
export function BudgetCard({ status, budgetTitle, clientName, amount }: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={[typography.titleMd , styles.title]}>{budgetTitle}</Text>
                <StatusTag status={status}/>
            </View>

            <View style={styles.subHeaderContainer}>
                <Text style={[typography.textSm , styles.subHeaderTitle]}>{clientName}</Text>
                <Text style={[typography.titleMd , styles.price]}>
                    <Text style={typography.textXs }>R$ </Text>
                    {formatNumber(amount)}
                </Text>
            </View>
        </View>
    )
}