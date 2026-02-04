import { RadioGroup } from "@/components/RadioGroup";
import { StatusTag } from "@/components/StatusTag";
import { BudgetStatus, budgetStatusConfig, BudgetStatusConfig } from "@/enums/BudgetStatus";
import { Text, View } from "react-native";
import { styles } from "./styles";


export function Status() {
    const entries = Object.entries(budgetStatusConfig) as [string, BudgetStatusConfig][];
    type RadioGroupValue = `${BudgetStatus.APPROVED}` | `${BudgetStatus.REJECTED}` | `${BudgetStatus.DRAFT}` | `${BudgetStatus.SENT}`;

    const statusOptions = entries.map(([key]) => ({
        label: <StatusTag status={Number(key)} />,
        value: `${key}` as RadioGroupValue,
    }));

    return (
        <View style={styles.container}>
            <RadioGroup<RadioGroupValue>
                columns={2}
                options={statusOptions}
                selectedValue={`${BudgetStatus.REJECTED}`}
                onValueChange={(value) => console.log(value)}
            />
        </View>
    )
}