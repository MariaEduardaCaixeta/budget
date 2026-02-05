import { colors } from "@/theme/colors";
import { StyleSheet } from "react-native";

export const moneyStyles = StyleSheet.create({
  base: { color: colors.gray[700] },
  light: { color: colors.gray[600] },
  danger: { color: colors.danger.base },
  success: { color: colors.success.dark },
  strike: { textDecorationLine: "line-through" },
});