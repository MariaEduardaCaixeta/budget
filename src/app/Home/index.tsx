import { Button } from "@/components/Button";
import { View, Text, Alert, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { typography } from "@/theme/typography";
import { colors } from "@/theme/colors";
import { Input } from "@/components/Input";
import { BudgetCard } from "@/components/BudgetCard";
import { AppBottomSheet } from "@/components/AppBottomSheet";
import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { Filter, FilterRef, FilterData } from "@/components/Filter";
import { Footer } from "@/components/Footer";
import { StackRoutesProps } from "@/routes/StackRoutes";
import { budgetStorage, BudgetStorage } from "@/storage/budgetsStorage";
import { FlatList } from "react-native-gesture-handler";
import { BudgetStatus } from "@/enums/BudgetStatus";
import { OrderBy } from "@/enums/OrderBy";
import { useFocusEffect } from "@react-navigation/native";

export function Home({ navigation }: StackRoutesProps<'home'>) {
    const sheetRef = useRef<BottomSheet>(null);
    const filterRef = useRef<FilterRef>(null);
    const snapPoints = useMemo(() => ['70%'], []);
    const [filters, setFilters] = useState<FilterData | null>(null);

    const [budgets, setBudgets] = useState<BudgetStorage[]>([]);
    const [filteredBudgets, setFilteredBudgets] = useState<BudgetStorage[]>([]);
    const [inputFocused, setInputFocused] = useState(false);

    const fetchBudgets = () => {
        budgetStorage
            .getAll()
            .then(setBudgets)
            .catch((error) => {
                Alert.alert('Erro', 'Não foi possível carregar os orçamentos.');
                console.error('Error fetching budgets:', error);
            });
    };

    const applyFiltersToBudgets = (budgetsList: BudgetStorage[], filterData: FilterData | null): BudgetStorage[] => {
        let filtered = [...budgetsList];

        if (filterData?.selectedStatuses && filterData.selectedStatuses.length > 0) {
            filtered = filtered.filter(budget => filterData.selectedStatuses.includes(budget.status));
        }

        if (filterData?.sortBy) {
            filtered.sort((a, b) => {
                switch (filterData.sortBy) {
                    case OrderBy.RECENT:
                        return new Date(b.id).getTime() - new Date(a.id).getTime();
                    case OrderBy.OLDEST:
                        return new Date(a.id).getTime() - new Date(b.id).getTime();
                    case OrderBy.MOST_EXPENSIVE:
                        return b.subtotal - a.subtotal;
                    case OrderBy.LEAST_EXPENSIVE:
                        return a.subtotal - b.subtotal;
                    default:
                        return 0;
                }
            });
        }

        return filtered;
    };

    const openFilterSheet = () => {
        sheetRef.current?.expand();
    }

    const closeFilterSheet = () => {
        sheetRef.current?.close();
    }

    const applyFilters = () => {
        const filterData = filterRef.current?.applyFilters();
        if (filterData) {
            setFilters(filterData);
            const filtered = applyFiltersToBudgets(budgets, filterData);
            setFilteredBudgets(filtered);
        }
        closeFilterSheet();
    }

    const resetFilters = () => {
        setFilters(null);
        setFilteredBudgets(budgets);
        closeFilterSheet();
        filterRef.current?.resetFilters();
    }

    const drafts = budgets.filter(budget => budget.status === BudgetStatus.DRAFT).length;

    useFocusEffect(
        useCallback(() => {
            fetchBudgets();
        }, [])
    );

    useEffect(() => {
        const filtered = applyFiltersToBudgets(budgets, filters);
        setFilteredBudgets(filtered);
    }, [budgets, filters]);

    return (
        <SafeAreaView
            style={{ flex: 1, backgroundColor: '#FFF' }}
        >
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <View style={styles.headerTextContainer}>
                        <Text style={[typography.titleLg, styles.headerText]}>Orçamentos</Text>
                        <Text style={[typography.textSm, styles.subHeaderText]}>Você {drafts > 0 ? `tem ${drafts} item${drafts !== 1 ? 's' : ''}` : 'não tem itens'} em rascunho</Text>
                    </View>
                    <Button label="Novo" iconName="plus" backgroundColor={colors.purple.base} onPress={() => navigation.navigate('budget')} />
                </View>

                <View style={styles.searchContainer}>
                    <Input style={{ flex: 1, borderColor: inputFocused ? colors.purple.base : colors.gray[300] }} iconName="search" iconColor={inputFocused ? colors.purple.base : colors.gray[600]} iconSize={20} placeholder="Título ou cliente" onFocus={() => setInputFocused(true)} onBlur={() => setInputFocused(false)} />
                    <Button iconName="filter" onPress={openFilterSheet} iconColor={colors.purple.base} />
                </View>

                <FlatList
                    data={filteredBudgets}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <Pressable onPress={() => navigation.navigate('budget', { id: item.id })} style={({ pressed }) => [
                            pressed && { opacity: 0.5 }
                        ]}>
                            <BudgetCard
                                status={item.status}
                                budgetTitle={item.title}
                                clientName={item.client}
                                amount={item.subtotal - ((item.discount ?? 0) / 100 * item.subtotal)}
                            />
                        </Pressable>
                    )}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                />

                <AppBottomSheet
                    sheetRef={sheetRef}
                    snapPoints={snapPoints}
                    title="Filtros"
                    content={<Filter ref={filterRef} />}
                    footer={
                        <Footer
                            primary={{ label: "Aplicar", iconName: "check", backgroundColor: colors.purple.base, iconSize: 16, onPress: applyFilters }}
                            secondary={{ label: "Resetar filtros", labelColor: colors.purple.base, onPress: resetFilters }}
                        />
                    }
                />
            </View>
        </SafeAreaView>
    )
}