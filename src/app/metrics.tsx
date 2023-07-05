import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useGithubStore } from '../store/github-store'
import { Stack } from 'expo-router'

type Stats = {
  numRepos: number
  numStars: number
  numForks: number
}

export default function Metrics() {
  const { username } = useGithubStore()

  const [stats, setStats] = useState<Stats>({
    numRepos: 0,
    numStars: 0,
    numForks: 0,
  })

  useEffect(() => {
    const fetchStats = async () => {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos`,
      )
      const repos = await response.json()
      const numRepos = repos.length
      const numStars = repos.reduce(
        (total: number, repo: any) => total + repo.stargazers_count,
        0,
      )
      const numForks = repos.reduce(
        (total: number, repo: any) => total + repo.forks_count,
        0,
      )
      setStats({ numRepos, numStars, numForks })
    }
    fetchStats()
  }, [username])

  return (
    <View className="flex-1 bg-gray-900 px-4 py-8">
      <Stack.Screen
        options={{
          title: 'Metrics',
        }}
      />

      <Text className="text-white text-3xl font-bold mb-8">
        Metrics for {username}
      </Text>
      <View className="flex-row justify-between items-center">
        <View className="flex-1 bg-gray-800 rounded-lg p-4 mx-2">
          <Text className="text-white font-bold mb-2">
            Number of Repositories
          </Text>
          <Text className="text-green-400 text-4xl font-bold">
            {stats.numRepos}
          </Text>
        </View>
        <View className="flex-1 bg-gray-800 rounded-lg p-4 mx-2">
          <Text className="text-white font-bold mb-2">Number of Stars</Text>
          <Text className="text-green-400 text-4xl font-bold">
            {stats.numStars}
          </Text>
        </View>
        <View className="flex-1 bg-gray-800 rounded-lg p-4 mx-2">
          <Text className="text-white font-bold mb-2">Number of Forks</Text>
          <Text className="text-green-400 text-4xl font-bold">
            {stats.numForks}
          </Text>
        </View>
      </View>
    </View>
  )
}
