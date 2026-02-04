import BottomSheet, { BottomSheetBackdrop, BottomSheetProps, BottomSheetScrollView, BottomSheetView } from "@gorhom/bottom-sheet";
import { Pressable, Text, TextStyle, View } from "react-native";
import { styles } from "./styles";
import { typography } from "@/theme/typography";
import { Icon } from "../icons";
import { colors } from "@/theme/colors";

type Props = Partial<BottomSheetProps> & {
    sheetRef: React.Ref<BottomSheet>;
    title: string;
    content: React.ReactNode;
    footer: React.ReactNode;
}

export function AppBottomSheet({ sheetRef, content, title, footer, ...props }: Props) {
    return (
        <BottomSheet
            ref={sheetRef}
            index={-1}
            enablePanDownToClose
            {...props}
            backdropComponent={(backdropProps) => (
                <BottomSheetBackdrop
                    {...backdropProps}
                    disappearsOnIndex={-1}
                    appearsOnIndex={0}
                    pressBehavior="close"
                />
            )}
        >
            <View style={[styles.container, styles.header]}>
                <Text style={[typography.titleSm as TextStyle, styles.title]}>{title}</Text>
                <Pressable onPress={() => sheetRef && (sheetRef as React.RefObject<BottomSheet>).current?.close()} style={({ pressed }) => [
                    pressed && { opacity: 0.5 },
                ]}>
                    <Icon iconName="close" iconSize={24} iconColor={colors.gray[600]} />
                </Pressable>
            </View>
            <BottomSheetScrollView contentContainerStyle={styles.container}>
                {content}
            </BottomSheetScrollView>
            <View style={styles.footer}>
                {footer}
            </View>
        </BottomSheet>
    )
}