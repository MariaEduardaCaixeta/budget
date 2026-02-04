import { RadioGroup } from "@/components/RadioGroup";
import { StatusTag } from "@/components/StatusTag";
import { BudgetStatus, budgetStatusConfig, BudgetStatusConfig } from "@/enums/BudgetStatus";
import { View } from "react-native";
import { styles } from "./styles";

type StatusProps = {
    selectedStatus?: BudgetStatus;
    onStatusChange: (status: BudgetStatus) => void;
}

export function Status({ selectedStatus, onStatusChange }: StatusProps) {
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
                selectedValue={`${selectedStatus ?? BudgetStatus.DRAFT}`}
                onValueChange={(value) => onStatusChange && onStatusChange(Number(value))}
            />
        </View>
    )
}