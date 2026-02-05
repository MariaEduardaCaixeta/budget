
const BUDGETS_STORAGE_KEY = '@budget:budgets';

import { ServiceData } from '@/app/Budget/components/Services/AddService';
import { BudgetStatus } from '@/enums/BudgetStatus';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type BudgetStorage = {
    id: string;
    title: string;
    client: string;
    status: BudgetStatus;
    services: ServiceData[];
    discount: number;
    subtotal: number;
    createdAt: string;
    updatedAt?: string;
}

async function getAll(): Promise<BudgetStorage[]> {
    try {
        const storage = await AsyncStorage.getItem(BUDGETS_STORAGE_KEY);
        return storage ? JSON.parse(storage) : [];
    } catch (error) {
        throw new Error('BUDGETS_GET: ' + error);
    }
}

async function getById(id: string): Promise<BudgetStorage | null> {
    try {
        const budgets = await getAll();
        const budget = budgets.find(budget => budget.id === id);
        return budget || null;
    } catch (error) {
        throw new Error('BUDGETS_GET_BY_ID: ' + error);
    }
}

async function save(budgets: BudgetStorage[]): Promise<void> {
    try {
        await AsyncStorage.setItem(BUDGETS_STORAGE_KEY, JSON.stringify(budgets));
    } catch (error) {
        throw new Error('BUDGETS_SAVE: ' + error);
    }
}

async function add(budget: BudgetStorage): Promise<void> {
    const budgets = await getAll();
    budgets.push(budget);
    await save(budgets);
}

async function update(updatedBudget: BudgetStorage): Promise<void> {
    const budgets = await getAll();
    const budgetIndex = budgets.findIndex(budget => budget.id === updatedBudget.id);

    if (budgetIndex === -1) {
        throw new Error('BUDGETS_UPDATE: Orçamento não encontrado');
    }

    budgets[budgetIndex] = { ...budgets[budgetIndex], ...updatedBudget, updatedAt: new Date().toLocaleDateString("pt-BR") };
    await save(budgets);
}

async function duplicate(id: string): Promise<void> {
    const budgets = await getAll();
    const budgetToDuplicate = budgets.find(budget => budget.id === id);

    if (!budgetToDuplicate) {
        throw new Error('BUDGETS_DUPLICATE: Orçamento não encontrado');
    }
    
    const duplicatedBudget = {
        ...budgetToDuplicate,
        id: Math.random().toString(36).substring(2, 9),
        createdAt: new Date().toLocaleDateString("pt-BR"),
        updatedAt: undefined,
    };

    budgets.push(duplicatedBudget);
    await save(budgets);
}

async function deleteById(id: string): Promise<void> {
    const budgets = await getAll();
    const filteredBudgets = budgets.filter(budget => budget.id !== id);
    await save(filteredBudgets);
}

export const budgetStorage = {
    getAll,
    getById,
    save,
    add,
    update,
    duplicate,
    deleteById,
};