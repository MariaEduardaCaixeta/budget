import React from "react";
import { View, Pressable, Text, TextStyle } from "react-native";
import { styles } from "./styles";
import { typography } from "@/theme/typography";
import { colors } from "@/theme/colors";

type RadioOption<T extends string> = {
    label: React.ReactNode;
    value: T;
}

type RadioGroupProps<T extends string> = {
    options: RadioOption<T>[];
    selectedValue: T;
    columns?: number;
    onValueChange: (newValue: T) => void;
}

export function RadioGroup<T extends string>({ options, selectedValue, columns = 1, onValueChange }: RadioGroupProps<T>) {
    const chunkSize = Math.ceil(options.length / Math.max(1, columns));
    const cols: RadioOption<T>[][] = Array.from({ length: columns }, (_, i) =>
        options.slice(i * chunkSize, (i + 1) * chunkSize)
    );

    const renderOption = (opt: RadioOption<T>) => {
        const selected = opt.value === selectedValue;

        return (
            <Pressable
                key={opt.value}
                onPress={() => onValueChange(opt.value)}
                style={styles.optionContainer}
            >
                <View style={[styles.radioCircle, selected && { borderColor: colors.purple.base }]}> 
                    {selected && <View style={styles.selectedRadioCircle} />}
                </View>

                {typeof opt.label === "string" || typeof opt.label === "number" ? (
                    <Text style={[typography.textMd as TextStyle, styles.optionLabel]}>{opt.label}</Text>
                ) : (
                    <View>{opt.label}</View>
                )}
            </Pressable>
        );
    };

    return (
        <View style={styles.columnsWrapper}>
            {cols.map((col, colIndex) => (
                <View
                    key={colIndex}
                    style={[styles.column, colIndex !== cols.length - 1 && styles.columnSpacing]}
                >
                    {col.map(renderOption)}
                </View>
            ))}
        </View>
    )
}