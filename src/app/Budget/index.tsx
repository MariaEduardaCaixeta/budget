import { BudgetDetailsCard } from "@/components/BudgetDetailsCard";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { StackRoutesProps } from "@/routes/StackRoutes";
import { colors } from "@/theme/colors";
import { typography } from "@/theme/typography";
import { ScrollView, Text, TextStyle, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { GeneralInfo } from "./components/GerneralInfo";
import { Status } from "./components/Status";
import { Services } from "./components/Services";
import { Investment } from "./components/Investment";

export function Budget({ navigation, route }: StackRoutesProps<'budget'>) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
            <View style={{ flex: 1 }}>
                <Header>
                    <Button backgroundColor="transparent" iconName="chevronLeft" iconColor={colors.gray[600]} />
                    <Text style={[typography.titleSm ]}>Orçamento {route.params?.id}</Text>
                </Header>

                <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.scrollViewContent}>
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

                        <BudgetDetailsCard
                            cardLabel="Serviços inclusos"
                            cardContent={
                                <Services />
                            }
                            iconName="note"
                            iconColor={colors.purple.base}
                        />

                        <BudgetDetailsCard
                            cardLabel="Investimento"
                            cardContent={
                                <Investment />
                            }
                            iconName="card"
                            iconColor={colors.purple.base}
                        />

                    </View>
                </ScrollView>
            </View>

        </SafeAreaView>
    )
}