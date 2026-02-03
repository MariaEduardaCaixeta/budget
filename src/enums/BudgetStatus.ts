import { colors } from "@/theme/colors";

export enum BudgetStatus {
    APPROVED,
    SENT,
    REJECTED,
    DRAFT
}

export type BudgetStatusConfig = {
    label: string;
    textColor: string;
    circleColor: string;
    backgroundColor: string;
}

export const budgetStatusConfig: Record<BudgetStatus, BudgetStatusConfig> = {
    [BudgetStatus.APPROVED]: {
        label: 'Aprovado',
        textColor: colors.success.dark,
        circleColor: colors.success.base,
        backgroundColor: colors.success.light
    },
    [BudgetStatus.SENT]: {
        label: 'Enviado',
        textColor: colors.info.dark,
        circleColor: colors.info.base,
        backgroundColor: colors.info.light
    },
    [BudgetStatus.REJECTED]: {
        label: 'Rejeitado',
        textColor: colors.danger.dark,
        circleColor: colors.danger.base,
        backgroundColor: colors.danger.light
    },
    [BudgetStatus.DRAFT]: {
        label: 'Rascunho',
        textColor: colors.gray[500],
        circleColor: colors.gray[400],
        backgroundColor: colors.gray[300]
    },
};