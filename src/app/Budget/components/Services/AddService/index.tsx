import { Icon } from "@/components/icons";
import { Input } from "@/components/Input";
import { colors } from "@/theme/colors";
import { Pressable, TextInputProps, View } from "react-native";
import { styles } from "./styles";
import { TextInput } from "react-native-gesture-handler";
import { formatCurrency } from "@/utils/formatters";
import { forwardRef, useImperativeHandle, useState } from "react";
import CurrencyInput from "react-native-currency-input";

export type ServiceData = {
    id: string;
    name: string;
    description: string;
    amount: number;
    quantity: number;
}

type AddServiceProps = {
    onSubmit?: (data: ServiceData) => void;
}

export type AddServiceRef = {
    submit: () => void;
    populateForm: (data: ServiceData) => void;
}

export const AddService = forwardRef<AddServiceRef, AddServiceProps>(({ onSubmit }, ref) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [editingId, setEditingId] = useState<string | null>(null);

    const handleSubmit = () => {
        const id = editingId ?? Math.random().toString(36).substring(2, 9);
        onSubmit?.({ id, name, description, amount, quantity });
        resetForm();
    };

    const resetForm = () => {
        setName("");
        setDescription("");
        setAmount(0);
        setQuantity(1);
        setEditingId(null);
    }

    useImperativeHandle(ref, () => ({
        submit: handleSubmit,
        populateForm: (data: ServiceData) => {
            setEditingId(data.id);
            setName(data.name);
            setDescription(data.description);
            setAmount(data.amount);
            setQuantity(data.quantity);
        }
    }));

    return (
        <View>
            <View style={styles.container}>
                <Input
                    placeholder="Nome do Serviço"
                    value={name}
                    onChangeText={setName}
                />
                <Input
                    placeholder="Descrição do Serviço"
                    value={description}
                    onChangeText={setDescription}
                />
                <View style={[styles.row]}>
                    <CurrencyInput
                        value={amount}
                        onChangeValue={(value) => setAmount(value ?? 0)}
                        prefix="R$ "
                        delimiter="."
                        separator=","
                        precision={2}
                        style={[styles.amountInput, styles.inputContainer]}
                    />
                    <View style={[styles.row, styles.inputContainer]}>
                        <Pressable
                            style={({ pressed }) => [
                                pressed && { opacity: 0.5 }
                            ]}
                            onPress={() => setQuantity(Math.max(1, quantity - 1))}
                        >
                            <Icon iconName="minus" iconColor={colors.purple.base} iconSize={20} />
                        </Pressable>
                        <TextInput
                            maxLength={2}
                            style={styles.qntInput}
                            keyboardType="numeric"
                            value={quantity.toString()}
                            onChangeText={(text) => {
                                const numValue = parseInt(text) || 1;
                                setQuantity(Math.max(1, numValue));
                            }}
                        />
                        <Pressable
                            style={({ pressed }) => [
                                pressed && { opacity: 0.5 }
                            ]}
                            onPress={() => setQuantity(quantity + 1)}
                        >
                            <Icon iconName="plus" iconColor={colors.purple.base} iconSize={20} />
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>

    );
});