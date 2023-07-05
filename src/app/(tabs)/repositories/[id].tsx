import { Stack, useSearchParams } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import { Text, View } from 'react-native'

export type Repository = {
  id: number
  name: string
  full_name: string
  description: string
  language: string
  stargazers_count: number
  forks_count: number
  open_issues_count: number
  owner: {
    login: string
    avatar_url: string
  }
}

type SearchParamsRepositoryDetails = {
  id: string
}

const RepositoryDetails = () => {
  const { id } = useSearchParams<SearchParamsRepositoryDetails>()

  const [repository, setRepository] = useState<Repository>()

  useEffect(() => {
    fetch(`https://api.github.com/repositories/${id}`)
      .then((response) => response.json())
      .then((data) => setRepository(data))
      .catch((error) => console.error(error))
  }, [id])

  const containerClass = 'flex-1 bg-gray-900 p-4'
  const textClass = 'text-white'
  const textBoldClass = 'font-bold'

  if (!repository) {
    return (
      <View className="flex-1 items-center justify-center bg-gray-900">
        <Text className="text-white text-2xl">Loading...</Text>
      </View>
    )
  }

  return (
    <View className={containerClass}>
      <StatusBar style="light" />

      <Stack.Screen
        options={{
          headerTitle: 'Repository Details',
        }}
      />

      <Text className={`${textClass} ${textBoldClass} text-4xl mb-4`}>
        {repository.name}
      </Text>
      <Text className={`${textClass} mb-8`}>{repository.description}</Text>
      <View className="flex-row mb-2">
        <Text className={`${textClass} ${textBoldClass} mr-2`}>Language:</Text>
        <Text className={textClass}>{repository.language || 'Unknown'}</Text>
      </View>
      <View className="flex-row mb-2">
        <Text className={`${textClass} ${textBoldClass} mr-2`}>Stars:</Text>
        <Text className={textClass}>{repository.stargazers_count}</Text>
      </View>
      <View className="flex-row mb-2">
        <Text className={`${textClass} ${textBoldClass} mr-2`}>Forks:</Text>
        <Text className={textClass}>{repository.forks_count}</Text>
      </View>
      <View className="flex-row mb-2">
        <Text className={`${textClass} ${textBoldClass} mr-2`}>Issues:</Text>
        <Text className={textClass}>{repository.open_issues_count}</Text>
      </View>
    </View>
  )
}

export default RepositoryDetails
