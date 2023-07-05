import { Stack } from 'expo-router'
import Feather from '@expo/vector-icons/Feather'

const RepositoriesLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#2D3748',
        },
        headerTintColor: '#CBD5E0',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        animation: 'slide_from_right',
        animationDuration: 500,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  )
}

export default RepositoriesLayout
