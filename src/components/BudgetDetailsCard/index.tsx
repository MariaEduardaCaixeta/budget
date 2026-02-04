import { View, Text, TextStyle } from "react-native";
import { Icon, IconProps } from "../icons";
import { styles } from "./styles";
import { typography } from "@/theme/typography";

type BudgetDetailsCardProps = IconProps & {
    cardLabel?: string;
    cardContent: React.ReactNode;
    customCardLabel?: React.ReactNode;
}

export function BudgetDetailsCard({ cardContent, cardLabel, customCardLabel, ...iconProps }: BudgetDetailsCardProps) {
    return (
        <View style={styles.container}>
            <View style={styles.cardLabelContainer}>
                {customCardLabel}

                {
                    cardLabel &&
                    <>
                        <Icon iconSize={16} {...iconProps} />
                        <Text style={[typography.textXs as TextStyle, styles.labelText]}>{cardLabel}</Text>
                    </>
                }

            </View>

            {cardContent}
        </View>
    )
}