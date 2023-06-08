import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { ActivityIndicator, Image, Pressable, Text, View } from "react-native";
import { useGithubStore } from "../../store/github-store";
import { useRouter } from "expo-router";
import Feather from "@expo/vector-icons/Feather";

export default function Home() {
  const { username, setUsername } = useGithubStore();
  const router = useRouter();

  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleRepositoriesPress = () => {
    router.push("repositories");
  };

  const handleAccountDetailsPress = () => {
    router.push("accountDetails");
  };

  const handleMetricsPress = () => {
    router.push("metrics");
  };

  const handleLogout = () => {
    // Clear the username from the store
    setUsername(null);

    // Navigate to the login screen
    router.push("/");
  };

  useEffect(() => {
    if (username) {
      fetch(`https://api.github.com/users/${username}`)
        .then((response) => response.json())
        .then((data) => {
          setUserData(data);
          setIsLoading(false);
        })
        .catch((error) => console.error(error));
    }
  }, [username]);

  return (
    <View className="flex-1 items-center bg-gray-900" testID="home-container">
      <StatusBar style="light" />

      <View className="flex-row justify-between items-center px-6 py-10 w-full">
        <Text className="text-white text-xl font-bold">DevMetrics</Text>
        <Pressable onPress={handleLogout}>
          <Feather name="log-out" size={24} color="#fff" />
        </Pressable>
      </View>

      <Text className="text-white text-3xl font-bold mb-8">
        Wellcome {username}
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

          <View className="flex flex-row justify-around w-full mt-8 px-6">
            <Pressable
              className="bg-gray-800 rounded-md p-4 flex items-center justify-center w-1/3 mr-4"
              onPress={handleRepositoriesPress}
            >
              <Feather name="github" size={32} color="#fff" />
              <Text className="text-white font-bold ml-2">Repositories</Text>
            </Pressable>
            <Pressable
              className="bg-gray-800 rounded-md p-4 flex items-center justify-center w-1/3 mx-2"
              onPress={handleAccountDetailsPress}
              testID="account-details-button"
            >
              <Feather name="user" size={32} color="#fff" />
              <Text className="text-white font-bold ml-2">Account Details</Text>
            </Pressable>
            <Pressable
              className="bg-gray-800 rounded-md p-4 flex items-center justify-center w-1/3 ml-4"
              onPress={handleMetricsPress}
            >
              <Feather name="bar-chart" size={32} color="#fff" />
              <Text className="text-white font-bold ml-2">Metrics</Text>
            </Pressable>
          </View>
        </>
      )}
    </View>
  );
}
