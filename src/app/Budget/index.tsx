import { BudgetDetailsCard } from "@/components/BudgetDetailsCard";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { StackRoutesProps } from "@/routes/StackRoutes";
import { colors } from "@/theme/colors";
import { typography } from "@/theme/typography";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { GeneralInfo } from "./components/GerneralInfo";
import { Status } from "./components/Status";
import { Services } from "./components/Services";
import { Investment } from "./components/Investment";
import { useState } from "react";
import { BudgetStatus } from "@/enums/BudgetStatus";
import { ServiceRowProps } from "./components/Services/ServiceRow";
import { Footer } from "@/components/Footer";

const MAX = 100;
const MIN = 0;

export function Budget({ navigation, route }: StackRoutesProps<'budget'>) {
    const [title, setTitle] = useState('')
    const [client, setClient] = useState('')
    const [status, setStatus] = useState(BudgetStatus.DRAFT)
    const [services, setServices] = useState<ServiceRowProps[]>([])
    const [discount, setDiscount] = useState('')
    const [subtotal, setSubtotal] = useState(100)

    const handleDiscountChange = (text: string) => {
        const cleaned = text.replace(/[^0-9]/g, "");
        if (!cleaned) return setDiscount("");

        const num = Number(cleaned);

        if (num > MAX) return setDiscount(String(MAX));
        if (num < MIN) return setDiscount(String(MIN));

        setDiscount(cleaned);
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
            <View style={{ flex: 1 }}>
                <Header>
                    <Button backgroundColor="transparent" iconName="chevronLeft" iconColor={colors.gray[600]} onPress={() => navigation.goBack()} />
                    <Text style={[typography.titleSm]}>Orçamento {route.params?.id}</Text>
                </Header>

                <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.scrollViewContent}>
                    <View style={styles.budgetDetailsContainer}>
                        <BudgetDetailsCard
                            cardLabel="Informações Gerais"
                            cardContent={
                                <GeneralInfo
                                    title={{ value: title, onChangeText: setTitle }}
                                    client={{ value: client, onChangeText: setClient }}
                                />
                            }
                            iconName="shop"
                            iconColor={colors.purple.base}
                        />

                        <BudgetDetailsCard
                            cardLabel="Status"
                            cardContent={
                                <Status selectedStatus={status} onStatusChange={setStatus} />
                            }
                            iconName="tag"
                            iconColor={colors.purple.base}
                        />

                        <BudgetDetailsCard
                            cardLabel="Serviços inclusos"
                            cardContent={
                                <Services services={services} />
                            }
                            iconName="note"
                            iconColor={colors.purple.base}
                        />

                        <BudgetDetailsCard
                            cardLabel="Investimento"
                            cardContent={
                                <Investment
                                    subtotal={subtotal}
                                    totalItems={8}
                                    discount={discount}
                                    onChangeText={handleDiscountChange}
                                />
                            }
                            iconName="card"
                            iconColor={colors.purple.base}
                        />

                    </View>
                </ScrollView>

                <View style={styles.footerContainer}>
                    <Footer
                        primary={{ label: "Salvar", iconName: "check", backgroundColor: colors.purple.base, iconSize: 16, onPress: () => { } }}
                        secondary={{ label: "Cancelar", labelColor: colors.purple.base, onPress: () => navigation.goBack() }}
                    />
                </View>
            </View>

        </SafeAreaView>
    )
}