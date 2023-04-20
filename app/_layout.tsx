import { Stack } from "expo-router";

const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#111",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        animation : 'slide_from_right',
        animationDuration : 500,
      }}
    >
        <Stack.Screen name="index" options={{headerTitle : 'Login', headerShown : false}}  />
        <Stack.Screen name="home/index" options={{headerTitle : 'Inicio'}}  />
    </Stack>
  );
};

export default StackLayout;
