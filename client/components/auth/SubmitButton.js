import React from "react"
import { TouchableOpacity } from "react-native"
import Text from "@kaloraat/react-native-text"

export default function SubmitButton({ title, handleSubmit, loading }) {
  return (
    <TouchableOpacity
      onPress={handleSubmit}
      style={{
        backgroundColor: "#008864",
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        marginHorizontal: 15,
        borderRadius: 24
      }}
    >
      <Text bold medium center style={{ letterSpacing: 1.2, fontSize: 17 }}>
        {loading ? "Please wait...." : title}
      </Text>
    </TouchableOpacity>
  )
}
