import { Text, TextInputProps, View } from "react-native";
import { styles } from "./styles";
import { Money } from "@/components/MoneyText";
import { moneyStyles } from "@/components/MoneyText/styles";
import { TextInput } from "react-native-gesture-handler";
import { typography } from "@/theme/typography";

const MIN = 0;
const MAX = 100;

type InvestmentProps = TextInputProps & {
    subtotal: number;
    totalItems: number;
}

export function Investment({ subtotal, totalItems, ...textInputProps }: InvestmentProps) {
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
                        <Money amount={subtotal} />
                    </View>

                    <Money amount={1104} prefix="- " amountStyle={moneyStyles.danger} variant="danger" />
                </View>
            </View>

            <View style={styles.total}>
                <Text style={styles.totalLabel}>Valor total</Text>

                <View style={styles.totalAmounts}>
                    <Money amount={subtotal} strike amountStyle={moneyStyles.light} />
                    <Money amount={3847.5} amountStyle={[moneyStyles.base, moneyStyles.amountLg]} />
                </View>
            </View>
        </View>
    );
}