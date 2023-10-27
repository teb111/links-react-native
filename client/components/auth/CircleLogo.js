import React from "react"
import { View, Image } from "react-native"

function CircleLogo() {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Image
        source={require("../../assets/llogo.png")}
        style={{
          width: 300,
          height: 200,
          marginVertical: 20
        }}
        resizeMode="contain"
        resizeMethod="scale"
      />
    </View>
  )
}

export default CircleLogo
