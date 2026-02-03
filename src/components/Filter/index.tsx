import React, { useState } from "react";
import { Text, View } from "react-native";
import { Checkbox } from "../Checkbox";
import { StatusTag } from "../StatusTag";
import { BudgetStatus, budgetStatusConfig, BudgetStatusConfig } from "@/enums/BudgetStatus";
import { styles } from "./styles";

export function Filter() {
    const entries = Object.entries(budgetStatusConfig) as [string, BudgetStatusConfig][];
    const [selected, setSelected] = useState<BudgetStatus[]>([]);

    const toggle = (status: BudgetStatus) => {
        setSelected(prev => prev.includes(status) ? prev.filter(s => s !== status) : [...prev, status]);
    }

    return (
        <View>
            <View>
                <Text style={styles.statusText}>Status</Text>
            {
                entries.map(([key]) => {
                    const status = Number(key) as BudgetStatus;
                    const isSelected = selected.includes(status);
                    return (
                        <Checkbox style={styles.checkbox} key={status} value={isSelected} checked={isSelected} onValueChange={() => toggle(status)}>
                            <StatusTag status={status} />
                        </Checkbox>
                    )
                })
            }
            </View>
        </View>
    )
}