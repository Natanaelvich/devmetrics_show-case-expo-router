import { Tabs } from 'expo-router'
import Feather from '@expo/vector-icons/Feather'

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#90CDF4',
        tabBarInactiveTintColor: '#CBD5E0',
        tabBarStyle: {
          backgroundColor: '#2D3748',
          borderTopColor: '#4A5568',
          borderTopWidth: 1,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
          marginBottom: 4,
        },
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Feather testID="home-tab" name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="repositories"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Feather testID="repo-tab" name="github" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}

export default TabsLayout
