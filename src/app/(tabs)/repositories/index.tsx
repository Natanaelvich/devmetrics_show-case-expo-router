import { useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useState, useEffect, useCallback } from 'react'
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  RefreshControl,
  Text,
  TextInput,
  View,
} from 'react-native'
import { useGithubStore } from '../../../store/github-store'
import { Repository } from './[id]'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function Repositories() {
  const router = useRouter()
  const { username } = useGithubStore()
  const { top } = useSafeAreaInsets()

  const [repositories, setRepositories] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')

  const fetchRepositories = useCallback(async () => {
    setIsLoading(true)
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&order=desc`,
    )
    const data = await response.json()
    setRepositories(data)
    setIsLoading(false)
  }, [username])

  useEffect(() => {
    fetchRepositories()
  }, [fetchRepositories])

  const handlePressRepository = (repositoryId: string) => {
    router.push(`repositories/${repositoryId}`)
  }

  const filteredRepositories = repositories.filter((repo: Repository) =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const renderRepositoryItem = ({ item }) => (
    <Pressable
      className="border-b border-gray-700 p-4"
      onPress={() => handlePressRepository(item.id)}
    >
      <Text className="text-white text-lg font-bold mb-2">{item.name}</Text>
      <Text className="text-gray-400 mb-2">{item.description}</Text>
      <Text className="text-gray-400">{item.language}</Text>
    </Pressable>
  )

  return (
    <View
      className="flex-1 bg-gray-900 pt-4"
      testID="repositories-container"
      style={{ paddingTop: top }}
    >
      <StatusBar style="light" />

      <View className="px-4 pt-4">
        <Text className="text-white text-2xl font-bold mb-8">
          Repositories of {username}
        </Text>

        <TextInput
          testID="search-input"
          className="border-gray-400 p-2 mb-4 rounded bg-gray-800 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none"
          onChangeText={setSearchQuery}
          value={searchQuery}
          placeholder="Search repository..."
          placeholderTextColor="#999"
        />
      </View>

      {isLoading && <ActivityIndicator size="large" color="#fff" />}
      {!isLoading && repositories.length === 0 && (
        <Text className="text-white text-lg">
          Nenhum repositório encontrado.
        </Text>
      )}
      {!isLoading && repositories.length > 0 && (
        <FlatList
          data={filteredRepositories}
          renderItem={renderRepositoryItem}
          keyExtractor={(item) => item.id.toString()}
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={fetchRepositories}
              colors={['#111', '#222', '#333']}
              tintColor={'#fff'}
            />
          }
        />
      )}
    </View>
  )
}
