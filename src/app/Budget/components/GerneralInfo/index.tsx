import { Input } from "@/components/Input";
import { View } from "react-native";
import { styles } from "./styles";


export function GeneralInfo() {
    return (
        <View style={styles.container}>
            <Input placeholder="Título" />
            <Input placeholder="Cliente" />
        </View>
    )
}