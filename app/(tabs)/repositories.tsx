import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState, useEffect, useCallback } from "react";
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  RefreshControl,
  Text,
  View,
} from "react-native";
import { useGithubStore } from "../../store/github-store";

export default function Repositories() {
  const router = useRouter();
  const { username } = useGithubStore();

  const [repositories, setRepositories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchRepositories = useCallback(async () => {
    setIsLoading(true);
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=created&order=desc`
    );
    const data = await response.json();
    setRepositories(data);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchRepositories();
  }, [fetchRepositories]);

  const handlePressRepository = (repositoryId: string) => {
    router.push(`repositoryDetails?repositoryId=${repositoryId}`);
  };

  const renderRepositoryItem = ({ item }) => (
    <Pressable
      className="border-b border-gray-700 p-4"
      onPress={() => handlePressRepository(item.id)}
    >
      <Text className="text-white text-lg font-bold mb-2">{item.name}</Text>
      <Text className="text-gray-400 mb-2">{item.description}</Text>
      <Text className="text-gray-400">{item.language}</Text>
    </Pressable>
  );

  return (
    <View className="flex-1 items-center justify-center bg-gray-900">
      <StatusBar style="light" />
      <Text className="text-white text-2xl font-bold mb-8">
        Repositórios de {username}
      </Text>
      {isLoading && <ActivityIndicator size="large" color="#fff" />}
      {!isLoading && repositories.length === 0 && (
        <Text className="text-white text-lg">
          Nenhum repositório encontrado.
        </Text>
      )}
      {!isLoading && repositories.length > 0 && (
        <FlatList
          data={repositories}
          renderItem={renderRepositoryItem}
          keyExtractor={(item) => item.id.toString()}
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={fetchRepositories}
              colors={["#111", "#222", "#333"]}
              tintColor={"#fff"}
            />
          }
        />
      )}
    </View>
  );
}
