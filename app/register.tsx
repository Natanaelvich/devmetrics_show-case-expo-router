import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, Text, View } from "react-native";

export default function Register() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-900">
      <Text className="text-white text-3xl font-bold mb-8">
        Bem-vindo ao Meu App!
      </Text>
      <Image
        source={{ uri: "https://source.unsplash.com/200x200/?avatar" }}
        className="w-32 h-32 rounded-full mb-8"
      />
    </View>
  );
}
