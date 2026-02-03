import { View, Pressable, Text, TextStyle } from "react-native";
import { styles } from "./styles";
import { typography } from "@/theme/typography";
import { colors } from "@/theme/colors";

type RadioOption<T extends string> = {
    label: string;
    value: T;
}

type RadioGroupProps<T extends string> = {
    options: RadioOption<T>[];
    selectedValue: T;
    onValueChange: (newValue: T) => void;
}

export function RadioGroup<T extends string>({ options, selectedValue, onValueChange }: RadioGroupProps<T>) {
    return (
        <View>
            {
                options.map((opt) => {
                    const selected = opt.value === selectedValue;

                    return (
                        <Pressable
                            key={opt.value}
                            onPress={() => onValueChange(opt.value)}
                            style={styles.optionContainer}
                        >
                            <View
                                style={[styles.radioCircle, selected && { borderColor: colors.purple.base }]}
                            >
                                {selected && (
                                    <View
                                        style={styles.selectedRadioCircle}
                                    />
                                )}
                            </View>

                            <Text style={[typography.textMd as TextStyle, styles.optionLabel]}>{opt.label}</Text>
                        </Pressable>
                    );
                })
            }
        </View>
    )
}