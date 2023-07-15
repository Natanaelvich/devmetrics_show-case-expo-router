import { useRouter } from 'expo-router'
import { useState } from 'react'
import { Alert, Pressable, Text, TextInput, View } from 'react-native'
import { useGithubStore } from '../store/github-store'

export default function Login() {
  const router = useRouter()
  const { setUsername } = useGithubStore()

  const [githubUsername, setGithubUsername] = useState(
    __DEV__ ? 'natanaelvich' : '',
  )

  const handleLogin = () => {
    if (githubUsername === '') {
      Alert.alert('Please enter your GitHub username.')
    } else {
      setUsername(githubUsername)
      router.push('/home')
    }
  }

  return (
    <View
      className="flex-1 justify-center items-center bg-gray-900"
      testID="login"
    >
      <View className="w-3/4">
        <Text className="text-white text-3xl font-bold mb-8 text-center">
          DevMetrics
        </Text>

        <TextInput
          testID="github-username-input"
          className="border border-gray-400 p-2 mb-4 rounded bg-gray-800 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none"
          placeholder="GitHub username"
          placeholderTextColor="#718096"
          value={githubUsername}
          onChangeText={setGithubUsername}
        />
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? '#4299e1' : '#3182ce',
              borderRadius: 4,
              padding: 12,
              alignItems: 'center',
            },
            pressed ? { opacity: 0.6 } : null,
          ]}
          onPress={handleLogin}
        >
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>Search</Text>
        </Pressable>
      </View>
    </View>
  )
}
