import { Link } from "expo-router";
import {  View } from "react-native";

export default function Home() {
    return (
        <View style={{alignItems : 'center', justifyContent : 'center', flex : 1}}>
          <Link href="/settings">Seetings</Link>
        </View>
      );
}