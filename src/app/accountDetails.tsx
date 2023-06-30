import { Link, Stack } from "expo-router";
import {
  StatusBar,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import { useState, useEffect } from "react";
import { useGithubStore } from "../store/github-store";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface GitHubUser {
  avatar_url: string;
  name: string;
  bio: string;
  email: string;
  blog: string;
  company: string;
  created_at: string;
  followers: number;
  following: number;
  location: string;
  public_gists: number;
  public_repos: number;
  html_url: string;
}

const AccountDetails = ({ route }: any) => {
  const { username } = useGithubStore();
  const {bottom} = useSafeAreaInsets();

  const [user, setUser] = useState<GitHubUser | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, []);

  return (
    <ScrollView className="flex-1 bg-gray-900" contentContainerStyle={{paddingBottom: bottom}}>
      <Stack.Screen
        options={{
          title: username,
        }}
      />

      {user ? (
        <View className="items-center justify-center pt-6">
          <View className="w-64 h-64 rounded-full overflow-hidden mb-4">
            <Image
              source={{ uri: user.avatar_url }}
              className="w-full h-full"
            />
          </View>
          <Text className="text-white text-3xl font-bold mb-8">
            {user.name}
          </Text>
          <Text className="text-white text-lg font-bold mb-2">Bio</Text>
          <Text className="text-gray-300 mb-4">{user.bio}</Text>
          <Text className="text-white text-lg font-bold mb-2">Blog</Text>
          <Text className="text-gray-300 mb-4">{user.blog}</Text>
          <Text className="text-white text-lg font-bold mb-2">Company</Text>
          <Text className="text-gray-300 mb-4">{user.company}</Text>
          <Text className="text-white text-lg font-bold mb-2">URL</Text>
          <Text className="text-gray-300 mb-4">{user.html_url}</Text>
          <Text className="text-white text-lg font-bold mb-2">Location</Text>
          <Text className="text-gray-300 mb-4">{user.location}</Text>
          <Text className="text-white text-lg font-bold mb-2">
            Number of followers
          </Text>
          <Text className="text-gray-300 mb-4">{user.followers}</Text>
          <Text className="text-white text-lg font-bold mb-2">
            Number of following users
          </Text>
          <Text className="text-gray-300 mb-4">{user.following}</Text>
          <Text className="text-white text-lg font-bold mb-2">
            Number of public gists
          </Text>
          <Text className="text-gray-300 mb-4">{user.public_gists}</Text>
          <Text className="text-white text-lg font-bold mb-2">
            Number of public repositories
          </Text>
          <Text className="text-gray-300 mb-4">{user.public_repos}</Text>
        </View>
      ) : (
        <Text className="text-white text-lg font-bold mb-2">
          Loading account information...
        </Text>
      )}
    </ScrollView>
  );
};

export default AccountDetails;
