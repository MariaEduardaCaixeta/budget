import { Text, TextInputProps, View } from "react-native";
import { styles } from "./styles";
import { Money } from "@/components/MoneyText";
import { moneyStyles } from "@/components/MoneyText/styles";
import { TextInput } from "react-native-gesture-handler";
import { typography } from "@/theme/typography";
import { useEffect, useState } from "react";

type InvestmentProps = TextInputProps & {
    subtotal: number;
    totalItems: number;
    discount?: string;
}

export function Investment({ subtotal, totalItems, discount, ...textInputProps }: InvestmentProps) {
    const [discountAmount, setDiscountAmount] = useState(0);

    const calculateDiscount = (value: string) => {
        const discountNum = Number(value);
        const discountValue = (subtotal * discountNum / 100);
        setDiscountAmount(discountValue);
    }

    useEffect(() => {
        if (subtotal === 0) return;

        if (discount) {
            calculateDiscount(discount);
        } else {
            setDiscountAmount(0);
        }
    }, [discount, subtotal]);

    return (
        <View>
            <View style={styles.main}>
                {/* LEFT */}
                <View style={styles.left}>
                    <Text style={styles.label}>Subtotal</Text>

                    <View style={styles.rowInline}>
                        <Text style={styles.label}>Desconto</Text>
                        <View style={styles.discountInputContainer}>
                            <TextInput
                                keyboardType="numeric"
                                maxLength={3}
                                placeholder="0"
                                value={discount}
                                style={[styles.valueLight, { width: 30 }]}
                                {...textInputProps}
                            />
                            <Text style={[typography.titleMd]}>%</Text>
                        </View>
                    </View>
                </View>

                {/* RIGHT */}
                <View style={styles.right}>
                    <View style={styles.subtotalRight}>
                        <Text style={styles.meta}>{totalItems} itens</Text>
                        <Money amount={subtotal} partsStyle={{ currency: typography.textXs, amount: typography.textSm }}/>
                    </View>

                    {
                        discountAmount > 0 && (
                            <Money amount={discountAmount} prefix="- " partsStyle={{ currency: typography.textXs, amount: typography.textSm }} tone="danger"/>
                        )
                    }
                </View>
            </View>

            <View style={styles.total}>
                <Text style={styles.totalLabel}>Valor total</Text>

                <View style={styles.totalAmounts}>
                    {
                        discountAmount > 0 && (
                            <Money amount={subtotal} strike textStyle={typography.textXs} tone="light"/>
                        )
                    }
                    <Money amount={subtotal - discountAmount} partsStyle={{ currency: typography.textXs, amount: typography.titleLg }} />
                </View>
            </View>
        </View>
    );
}