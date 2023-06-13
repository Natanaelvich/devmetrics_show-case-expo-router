import { Stack } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { TouchableOpacity } from "react-native-gesture-handler";
import ButtonClose from "../src/components/ButtonClose";

const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#2D3748",
        },
        headerTintColor: "#CBD5E0",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        animation: "slide_from_right",
        animationDuration: 500,
      }}
    >
      <Stack.Screen
        name="index"
        options={{ headerTitle: "Login", headerShown: false }}
      />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="metrics"
        options={{
          presentation: "modal",
          headerRight: () => (
            <ButtonClose />
          ),
        }}
      />
    </Stack>
  );
};

export default StackLayout;
