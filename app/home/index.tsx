import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, Text, View } from "react-native";

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-900">
      <StatusBar style="light" />
      <Text className="text-white text-3xl font-bold mb-8">
        Bem-vindo ao Meu App!
      </Text>
      <Image
        source={{ uri: "https://source.unsplash.com/200x200/?avatar" }}
        className="w-32 h-32 rounded-full mb-8"
      />
      <Text className="text-lg text-center text-gray-300 px-4">
        Nosso aplicativo é uma ferramenta incrível que ajuda você a gerenciar
        sua vida de uma forma mais eficiente. Com Meu App, você pode facilmente
        organizar suas tarefas, criar listas de compras e muito mais!
      </Text>
    </View>
  );
}
