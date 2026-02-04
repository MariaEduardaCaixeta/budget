import { Budget } from "@/app/Budget";
import { Home } from "@/app/Home";
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";

export type StackRoutesList = {
    home: undefined;
    budget: undefined | { id: string };
}

export type StackRoutesProps<T extends keyof StackRoutesList> = NativeStackScreenProps<StackRoutesList, T>;

const Stack = createNativeStackNavigator<StackRoutesList>();

export function StackRoutes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="budget" component={Budget} />
        </Stack.Navigator>
    )
}