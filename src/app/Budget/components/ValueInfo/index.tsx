import { Icon } from "@/components/icons";
import { colors } from "@/theme/colors";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { Money } from "@/components/MoneyText";
import { typography } from "@/theme/typography";
import { moneyStyles } from "@/components/MoneyText/styles";

type KeyValueRowProps = {
    label: React.ReactNode;
    right: React.ReactNode;
    labelStyle?: any;
    style?: any;
};

function KeyValueRow({ label, right, labelStyle, style }: KeyValueRowProps) {
    return (
        <View style={[styles.row, style]}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                {typeof label === 'string' ? (
                    <Text numberOfLines={1} ellipsizeMode="tail" style={[styles.label, labelStyle]}>{label}</Text>
                ) : (
                    label
                )}
            </View>

            <View style={styles.right}>
                {right}
            </View>
        </View>
    );
}

type ValueInfoProps = {
    subtotal: number;
    discount: number;
}

export function ValueInfo({ subtotal, discount }: ValueInfoProps) {
    const discountValue = subtotal * (discount / 100);

    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Icon iconName="card" iconSize={20} iconColor={colors.purple.base} />
            </View>

            <View style={styles.content}>
                {discount > 0 && (
                    <View style={styles.top}>
                        <KeyValueRow
                            label="Subtotal"
                            right={<Money amount={subtotal} tone="light" textStyle={typography.titleXs} strike />}
                        />

                        <KeyValueRow
                            label={
                                <>
                                    <Text style={styles.label}>Desconto</Text>
                                    <View style={styles.discountTag}>
                                        <Text style={styles.discountTagText}>{discount}% off</Text>
                                    </View>
                                </>
                            }
                            right={<Money amount={discountValue} tone="success" prefix="- " textStyle={typography.titleXs} />}
                        />
                    </View>
                )}

                <View style={[styles.row, styles.totalRow]}>
                    <KeyValueRow
                        label="Investimento total"
                        labelStyle={[typography.titleSm, { color: colors.gray[700] }]}
                        right={<Money amount={subtotal - discountValue} partsStyle={{ amount: typography.titleLg, currency: typography.textXs }} />}
                    />
                </View>
            </View>
        </View>
    );
}