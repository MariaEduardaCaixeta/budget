import { BudgetDetailsCard } from "@/components/BudgetDetailsCard";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { StackRoutesProps } from "@/routes/StackRoutes";
import { colors } from "@/theme/colors";
import { typography } from "@/theme/typography";
import { Text, TextStyle, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { GeneralInfo } from "./components/GerneralInfo";
import { Status } from "./components/Status";

export function Budget({ navigation, route }: StackRoutesProps<'budget'>) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
            <View>
                <Header>
                    <Button backgroundColor="transparent" iconName="chevronLeft" iconColor={colors.gray[600]} />
                    <Text style={[typography.titleSm as TextStyle]}>Orçamento {route.params?.id}</Text>
                </Header>

                <View style={styles.budgetDetailsContainer}>
                    <BudgetDetailsCard
                        cardLabel="Informações Gerais"
                        cardContent={
                            <GeneralInfo />
                        }
                        iconName="shop"
                        iconColor={colors.purple.base}
                    />

                    <BudgetDetailsCard
                        cardLabel="Status"
                        cardContent={
                            <Status />
                        }
                        iconName="tag"
                        iconColor={colors.purple.base}
                    />
                </View>
            </View>

        </SafeAreaView>
    )
}