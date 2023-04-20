import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image,  Text, View } from "react-native";

export default function Profile() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-900">
      <StatusBar style="light" />
      <Image
        source={{ uri: "https://source.unsplash.com/200x200/?avatar" }}
        className="w-32 h-32 rounded-full mb-8"
      />
      <Text className="text-white text-3xl font-bold mb-8">Natanaelvich</Text>
    </View>
  );
}
