import { useNavigation } from 'expo-router'
import { TouchableOpacity } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

const ButtonClose = () => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {
        navigation.goBack()
      }}
    >
      <MaterialIcons name="close" size={24} color="#CBD5E0" />
    </TouchableOpacity>
  )
}

export default ButtonClose
