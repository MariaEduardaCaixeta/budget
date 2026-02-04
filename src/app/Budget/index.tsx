import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { StackRoutesProps } from "@/routes/StackRoutes";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function Budget({ navigation, route }: StackRoutesProps<'budget'>) {
    return (
        <SafeAreaView>
            <Header>
                <Button backgroundColor="transparent" iconName="chevronLeft" iconColor="#000" />
            </Header>
        </SafeAreaView>
    )
}