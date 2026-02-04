import { Text, TextStyle, View } from "react-native";
import { styles } from "./styles";
import { Money } from "@/components/MoneyText";
import { moneyStyles } from "@/components/MoneyText/styles";

export function Investment() {
    return (
        <View>
            <View style={styles.main}>
                {/* LEFT */}
                <View style={styles.left}>
                    <Text style={styles.label}>Subtotal</Text>

                    <View style={styles.rowInline}>
                        <Text style={styles.label}>Desconto</Text>
                        <Text style={styles.valueLight}>8%</Text>
                    </View>
                </View>

                {/* RIGHT */}
                <View style={styles.right}>
                    <View style={styles.subtotalRight}>
                        <Text style={styles.meta}>8 itens</Text>
                        <Money amount={1200} />
                    </View>

                    <Money amount={1104} prefix="- " amountStyle={moneyStyles.danger} variant="danger" />
                </View>
            </View>

            <View style={styles.total}>
                <Text style={styles.totalLabel}>Valor total</Text>

                <View style={styles.totalAmounts}>
                    <Money amount={96} strike amountStyle={moneyStyles.light} />
                    <Money amount={3847.5} amountStyle={[moneyStyles.base, moneyStyles.amountLg]} />
                </View>
            </View>
        </View>
    );
}