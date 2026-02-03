import { Pressable, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";

type CheckboxProps = {
    value: boolean;
    checked: boolean;
    children: React.ReactNode;
    style?: object;
    onValueChange: (newValue: boolean) => void;
}

export function Checkbox({value, checked, children, style, onValueChange}: CheckboxProps) {
    return (
        <Pressable
            onPress={() => onValueChange(!value)}
            hitSlop={8}
            style={[styles.container, style]}
        >
            <View style={[styles.box, checked && styles.boxChecked]}>
                {value && <MaterialIcons name="check" size={16} color="#fff" />}
            </View>
            {children}
        </Pressable>
    )
}