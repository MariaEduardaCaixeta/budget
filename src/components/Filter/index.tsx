import React, { useState } from "react";
import { Text, View } from "react-native";
import { Checkbox } from "../Checkbox";
import { StatusTag } from "../StatusTag";
import { BudgetStatus, budgetStatusConfig, BudgetStatusConfig } from "@/enums/BudgetStatus";
import { styles } from "./styles";
import { RadioGroup } from "../RadioGroup";

type RadioGroupValue = "recent" | "oldest" | "highest" | "lowest";

export function Filter() {
    const entries = Object.entries(budgetStatusConfig) as [string, BudgetStatusConfig][];
    const [selected, setSelected] = useState<BudgetStatus[]>([]);
    const [sort, setSort] = useState<RadioGroupValue>("recent");

    const toggle = (status: BudgetStatus) => {
        setSelected(prev => prev.includes(status) ? prev.filter(s => s !== status) : [...prev, status]);
    }

    const radioGroupOptions: { label: string; value: RadioGroupValue }[] = [
        { label: "Mais recente", value: "recent" },
        { label: "Mais antigo", value: "oldest" },
        { label: "Maior valor", value: "highest" },
        { label: "Menor valor", value: "lowest" },
    ];

    return (
        <View>
            {/* Status */}
            <View style={styles.statusContainer}>
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

            {/* Order by */}
            <View>
                <Text style={styles.statusText}>Ordenar por</Text>
                <RadioGroup<RadioGroupValue>
                    selectedValue={sort}
                    onValueChange={(value: RadioGroupValue) => setSort(value)}
                    options={radioGroupOptions}
                />
            </View>
        </View>
    )
}