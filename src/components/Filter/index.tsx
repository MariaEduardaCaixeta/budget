import React, { useState, forwardRef, useImperativeHandle } from "react";
import { Text, View } from "react-native";
import { Checkbox } from "../Checkbox";
import { StatusTag } from "../StatusTag";
import { BudgetStatus, budgetStatusConfig, BudgetStatusConfig } from "@/enums/BudgetStatus";
import { styles } from "./styles";
import { RadioGroup } from "../RadioGroup";
import { OrderBy } from "@/enums/OrderBy";

export type FilterData = {
    selectedStatuses: BudgetStatus[];
    sortBy: OrderBy;
};

export type FilterRef = {
    applyFilters: () => FilterData;
    resetFilters: () => void;
};

export const Filter = forwardRef<FilterRef>((props, ref) => {
    const entries = Object.entries(budgetStatusConfig) as [string, BudgetStatusConfig][];
    const [selected, setSelected] = useState<BudgetStatus[]>([]);
    const [sort, setSort] = useState<OrderBy>(OrderBy.RECENT);

    const toggle = (status: BudgetStatus) => {
        setSelected(prev => prev.includes(status) ? prev.filter(s => s !== status) : [...prev, status]);
    }

    const applyFilters = () => {
        return {
            selectedStatuses: selected,
            sortBy: sort,
        };
    };

    useImperativeHandle(ref, () => ({
        applyFilters,
        resetFilters: () => {
            setSelected([]);
            setSort(OrderBy.RECENT);
        }
    }));

    const radioGroupOptions: { label: string; value: OrderBy }[] = [
        { label: "Mais recente", value: OrderBy.RECENT },
        { label: "Mais antigo", value: OrderBy.OLDEST },
        { label: "Maior valor", value: OrderBy.MOST_EXPENSIVE },
        { label: "Menor valor", value: OrderBy.LEAST_EXPENSIVE },
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
                <RadioGroup<OrderBy>
                    selectedValue={sort}
                    onValueChange={(value: OrderBy) => setSort(value)}
                    options={radioGroupOptions}
                />
            </View>
        </View>
    );
});