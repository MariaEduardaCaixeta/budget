import { BudgetDetailsCard } from "@/components/BudgetDetailsCard";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { StackRoutesProps } from "@/routes/StackRoutes";
import { colors } from "@/theme/colors";
import { typography } from "@/theme/typography";
import { Alert, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { GeneralInfo } from "./components/GerneralInfo";
import { Status } from "./components/Status";
import { Services } from "./components/Services";
import { Investment } from "./components/Investment";
import { useMemo, useRef, useState, useEffect } from "react";
import { BudgetStatus } from "@/enums/BudgetStatus";
import { Footer } from "@/components/Footer";
import { AppBottomSheet } from "@/components/AppBottomSheet";
import BottomSheet from "@gorhom/bottom-sheet";
import { AddService, ServiceData, AddServiceRef } from "./components/Services/AddService";
import { BudgetStorage, budgetStorage } from "@/storage/budgetsStorage";
import { DetailInfo } from "./components/DetailInfo";
import { ValueInfo } from "./components/ValueInfo";
import { StatusTag } from "@/components/StatusTag";

const MAX = 100;
const MIN = 0;

export function Budget({ navigation, route }: StackRoutesProps<'budget'>) {
    const sheetRef = useRef<BottomSheet>(null);
    const addServiceRef = useRef<AddServiceRef>(null);
    const snapPoints = useMemo(() => ['55%'], []);

    const [title, setTitle] = useState('')
    const [client, setClient] = useState('')
    const [status, setStatus] = useState(BudgetStatus.DRAFT)
    const [services, setServices] = useState<ServiceData[]>([])
    const [discount, setDiscount] = useState('')
    const [subtotal, setSubtotal] = useState(0)

    const [isViewOnly, setIsViewOnly] = useState<boolean>(() => !!route.params?.id)
    const [id, setId] = useState<string | null>(route.params?.id || null);
    const [budget, setBudget] = useState<BudgetStorage | null>(null);

    const fetchBudgetById = (id: string) => {
        budgetStorage
            .getById(id)
            .then((budget) => {
                if (budget) {
                    setTitle(budget.title);
                    setClient(budget.client);
                    setStatus(budget.status);
                    setServices(budget.services);
                    setDiscount(String(budget.discount));
                    setBudget(budget);
                } else {
                    Alert.alert('Erro', 'Orçamento não encontrado.');
                    navigation.goBack();
                }
            })
            .catch((error) => {
                Alert.alert('Erro', 'Não foi possível carregar o orçamento.');
                console.error('Error fetching budget:', error);
                navigation.goBack();
            });
    }

    const handleDiscountChange = (text: string) => {
        const cleaned = text.replace(/[^0-9]/g, "");
        if (!cleaned) return setDiscount("");

        const num = Number(cleaned);

        if (num > MAX) return setDiscount(String(MAX));
        if (num < MIN) return setDiscount(String(MIN));

        setDiscount(cleaned);
    };

    const handleAddService = (serviceData: ServiceData) => {
        setServices((prevServices) => {
            const exists = prevServices.find(s => s.id === serviceData.id);
            if (exists) {
                return prevServices.map(s => s.id === serviceData.id ? serviceData : s);
            }
            return [...prevServices, serviceData];
        });

        closeServiceSheet();
    }

    const saveBudget = (budget: BudgetStorage) => {
        budgetStorage
            .add(budget)
            .then(() => {
                Alert.alert('Sucesso', 'Orçamento salvo com sucesso.');
                navigation.goBack();
            })
            .catch((error) => {
                console.log('Error saving item:', error);
                Alert.alert('Erro', 'Não foi possível salvar o orçamento.');
            });
    }

    const updateBudget = (budget: BudgetStorage) => {
        budgetStorage
            .update(budget)
            .then(() => {
                Alert.alert('Sucesso', 'Orçamento atualizado com sucesso.');
                navigation.goBack()
            })
            .catch((error) => {
                console.log('Error updating item:', error);
                Alert.alert('Erro', 'Não foi possível atualizar o orçamento.');
            });
    }

    const handleBudget = () => {
        const budget: BudgetStorage = {
            id: Date.now().toString(),
            createdAt: new Date().toLocaleDateString("pt-BR"),
            updatedAt: new Date().toLocaleDateString("pt-BR"),
            title,
            client,
            status,
            services,
            discount: Number(discount),
            subtotal,
        }

        id ? updateBudget({ ...budget, id }) : saveBudget(budget);
    }

    const handleEditService = (serviceId: string) => {
        const service = services.find(s => s.id === serviceId);
        if (!service) return;
        addServiceRef.current?.populateForm(service);
        sheetRef.current?.expand();
    }

    const handleShareBudget = () => {
        console.log('Compartilhar orçamento');
    }

    const handleDuplicateBudget = () => {
        budgetStorage
            .duplicate(id!)
            .then(() => {
                Alert.alert('Sucesso', 'Orçamento duplicado com sucesso.');
                navigation.goBack();
            })
            .catch((error) => {
                console.log('Error duplicating item:', error);
                Alert.alert('Erro', 'Não foi possível duplicar o orçamento.');
            });
    }

    const handleDeleteBudget = () => {
        Alert.alert('Confirmação', 'Tem certeza que deseja deletar este orçamento?', [
            { text: 'Cancelar', style: 'cancel' },
            { text: 'Deletar', style: 'destructive', onPress: () => deleteBudget() }
        ]);
    }
    const deleteBudget = () => {
        budgetStorage
            .deleteById(id!)
            .then(() => {
                Alert.alert('Sucesso', 'Orçamento deletado com sucesso.');
                navigation.goBack();
            })
            .catch((error) => {
                console.log('Error deleting item:', error);
                Alert.alert('Erro', 'Não foi possível deletar o orçamento.');
            });
    }

    const openServiceSheet = () => {
        sheetRef.current?.expand();
    }

    const closeServiceSheet = () => {
        sheetRef.current?.close();
    }

    useEffect(() => {
        const total = services.reduce((acc, s) => acc + s.amount * s.quantity, 0);
        setSubtotal(total);
    }, [services]);

    useEffect(() => {
        if (route.params?.id) {
            setId(route.params.id);
            fetchBudgetById(id!);
        }
    }, [route.params?.id]);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
            <View style={{ flex: 1 }}>
                <Header
                    title={`Orçamento ${id ? '#' + id : ''}`}
                    onPress={() => navigation.goBack()}
                    children={
                        !isViewOnly ? null : (
                            <StatusTag status={budget?.status || BudgetStatus.DRAFT} />
                        )
                    }
                />

                <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.scrollViewContent}>
                    <View style={styles.budgetDetailsContainer}>
                        {
                            isViewOnly ? (
                                <DetailInfo
                                    budgetTitle={title}
                                    budgetClient={client}
                                    createdAt={budget?.createdAt || ''}
                                    updatedAt={budget?.updatedAt || ''}
                                />
                            ) : (
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
                            )
                        }

                        {
                            !isViewOnly && (
                                <BudgetDetailsCard
                                    cardLabel="Status"
                                    cardContent={
                                        <Status selectedStatus={status} onStatusChange={setStatus} />
                                    }
                                    iconName="tag"
                                    iconColor={colors.purple.base}
                                />
                            )
                        }

                        <BudgetDetailsCard
                            cardLabel="Serviços inclusos"
                            cardContent={
                                <Services
                                    isViewOnly={isViewOnly}
                                    services={services}
                                    onAddService={openServiceSheet}
                                    onEditService={(serviceId) => { handleEditService(serviceId) }}
                                />
                            }
                            iconName="note"
                            iconColor={colors.purple.base}
                        />

                        {
                            isViewOnly ? (
                                <ValueInfo
                                    subtotal={budget?.subtotal || 0}
                                    discount={budget?.discount || 0}
                                />
                            ) : (
                                <BudgetDetailsCard
                                    cardLabel="Investimento"
                                    cardContent={
                                        <Investment
                                            subtotal={subtotal}
                                            totalItems={services.length}
                                            discount={discount}
                                            onChangeText={handleDiscountChange}
                                        />
                                    }
                                    iconName="card"
                                    iconColor={colors.purple.base}
                                />
                            )
                        }

                    </View>
                </ScrollView>

                <View style={styles.footerContainer}>
                    {
                        isViewOnly ? (
                            <Footer
                                primary={{ label: "Compartilhar", iconName: "direction", backgroundColor: colors.purple.base, iconSize: 16, onPress: handleShareBudget }}
                                iconActions={[
                                    { iconName: "trash", iconColor: colors.danger.base, iconSize: 20, onPress: handleDeleteBudget },
                                    { iconName: "copy", iconColor: colors.purple.base, iconSize: 20, onPress: handleDuplicateBudget },
                                    { iconName: "edit", iconColor: colors.purple.base, iconSize: 20, onPress: () => { setIsViewOnly(false) } },
                                ]}
                            />
                        ) : (
                            <Footer
                                primary={{ label: "Salvar", iconName: "check", backgroundColor: colors.purple.base, iconSize: 16, onPress: handleBudget }}
                                secondary={{ label: "Cancelar", labelColor: colors.purple.base, onPress: () => navigation.goBack() }}
                            />
                        )
                    }

                </View>

                <AppBottomSheet
                    sheetRef={sheetRef}
                    snapPoints={snapPoints}
                    title="Serviço"
                    content={
                        <AddService
                            ref={addServiceRef}
                            onSubmit={(value) => handleAddService(value)}
                        />}
                    footer={
                        <Footer
                            primary={{ label: "Salvar", iconName: "check", backgroundColor: colors.purple.base, iconSize: 16, onPress: () => addServiceRef.current?.submit() }}
                            secondary={{ iconName: "trash", iconColor: colors.danger.base, iconSize: 20, onPress: closeServiceSheet }}
                        />
                    }
                />

            </View>

        </SafeAreaView>
    )
}