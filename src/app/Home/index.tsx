import { Button } from "@/components/Button";
import { View, Text, TextStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { typography } from "@/theme/typography";
import { colors } from "@/theme/colors";
import { Input } from "@/components/Input";
import { StatusTag } from "@/components/StatusTag";
import { BudgetStatus } from "@/enums/BudgetStatus";
import { BudgetCard } from "@/components/BudgetCard";

export function Home() {
    return (
        <SafeAreaView
            style={{ flex: 1 }}
        >
            <View  style={styles.container}>
                <View style={styles.headerContainer}>
                    <View style={styles.headerTextContainer}>
                        <Text style={[typography.titleLg as TextStyle, styles.headerText]}>Orçamentos</Text>
                        <Text style={[typography.textSm as TextStyle, styles.subHeaderText]}>Você tem 1 item em rascunho</Text>
                    </View>
                    <Button label="Novo" iconName="plus" backgroundColor={colors.purple.base} onPress={() => console.log("Button Pressed")} />
                </View>

                <View style={styles.searchContainer}>
                    <Input  style={{ flex: 1 }} iconName="search" iconColor={colors.gray[600]} iconSize={20} placeholder="Título ou cliente"/>
                    <Button iconName="filter" onPress={() => console.log("Buscar Pressed")} iconColor={colors.purple.base} />
                </View>  

                <BudgetCard 
                    status={BudgetStatus.DRAFT}
                    budgetTitle="Desenvolvimento de aplicativo de loja online"
                    clientName="João da Silva"
                    amount={25000.789}
                />
            </View>
        </SafeAreaView>
    )
}