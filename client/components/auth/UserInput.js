import { View, TextInput } from "react-native"
import React, { useState } from "react"
import Text from "@kaloraat/react-native-text"

export default function UserInput({
  name,
  placeholder,
  value,
  setValue,
  autoCapitalize = "none",
  keyboardType = "default",
  secureTextEntry = false
}) {
  return (
    <View style={{ marginHorizontal: 24 }}>
      <Text semi style={{ letterSpacing: 1.2 }}>
        {name}
      </Text>
      <TextInput
        value={value}
        onChangeText={(text) => setValue(text)}
        placeholder={placeholder}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        style={{
          borderBottomWidth: 0.5,
          height: 48,
          borderBottomColor: "#8693a1",
          marginBottom: 30
        }}
      />
    </View>
  )
}
