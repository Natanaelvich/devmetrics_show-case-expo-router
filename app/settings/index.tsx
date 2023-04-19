import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Settings() {
    return (
        <View style={{alignItems : 'center', justifyContent : 'center', flex : 1, backgroundColor : 'blue'}}>
          <Link href="/">Home</Link>
        </View>
      );
}