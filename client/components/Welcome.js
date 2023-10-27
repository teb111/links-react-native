import { Text, View } from "react-native"

const Welcome = ({ name, k }) => (
  <View key={k}>
    <Text> Hello {name}</Text>
  </View>
)

export default Welcome
