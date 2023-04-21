import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  Text,
  View,
} from "react-native";
import { useGithubStore } from "../../store/github-store";

export default function Repositories() {
  const router = useRouter();
  const { username } = useGithubStore();

  const [repositories, setRepositories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (username) {
      fetch(`https://api.github.com/users/${username}/repos?per_page=20`)
        .then((response) => response.json())
        .then((data) => {
          setRepositories(data);
          setIsLoading(false);
        })
        .catch((error) => console.error(error));
    }
  }, [username]);

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
        />
      )}
    </View>
  );
}
