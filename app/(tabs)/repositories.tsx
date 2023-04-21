import { Link, useRouter, useSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  Text,
  View,
} from "react-native";

export default function Repositories() {
  const router = useRouter();
  const { githubUsername } = useSearchParams();

  const [repositories, setRepositories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (githubUsername) {
      fetch(`https://api.github.com/users/${githubUsername}/repos?per_page=20`)
        .then((response) => response.json())
        .then((data) => {
          setRepositories(data);
          setIsLoading(false);
        })
        .catch((error) => console.error(error));
    }
  }, [githubUsername]);

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
      <Text className="text-white text-3xl font-bold mb-8">
        Repositórios de {githubUsername}
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
