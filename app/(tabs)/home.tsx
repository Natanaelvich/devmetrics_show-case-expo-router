import { useSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { ActivityIndicator, Image, Text, View } from "react-native";

export default function Home() {
  const { githubUsername } = useSearchParams();

  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (githubUsername) {
      fetch(`https://api.github.com/users/${githubUsername}`)
        .then((response) => response.json())
        .then((data) => {
          setUserData(data);
          setIsLoading(false);
        })
        .catch((error) => console.error(error));
    }
  }, [githubUsername]);

  return (
    <View className="flex-1 items-center justify-center bg-gray-900">
      <StatusBar style="light" />
      <Text className="text-white text-3xl font-bold mb-8">
        Bem-vindo ao Meu App!
      </Text>

      {isLoading && <ActivityIndicator size="large" color="#fff" />}
      {userData && (
        <>
          <Image
            source={{ uri: userData.avatar_url }}
            className="w-32 h-32 rounded-full mb-8"
          />
          <Text className="text-white text-2xl mb-4">{userData.name}</Text>
          <Text className="text-white text-lg mb-8">{userData.bio}</Text>
        </>
      )}
    </View>
  );
}
