import { Input, InputProps } from "@/components/Input";
import { View } from "react-native";
import { styles } from "./styles";

type GeneralInfoProps = {
    title: InputProps;
    client: InputProps;
}

export function GeneralInfo({ title, client }: GeneralInfoProps) {
    return (
        <View style={styles.container}>
            <Input placeholder="Título" {...title} />
            <Input placeholder="Cliente" {...client} />
        </View>
    )
}