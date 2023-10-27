import { View, ScrollView } from "react-native"
import React, { useState } from "react"
import Text from "@kaloraat/react-native-text"
import UserInput from "../components/auth/UserInput"
import SubmitButton from "../components/auth/SubmitButton"
import axios from "axios"
import CircleLogo from "../components/auth/CircleLogo"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"

export default function Signin({ navigation }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState("")
  const url = "http://localhost:8000/api/signin"

  const handleSubmit = async () => {
    setLoading(true)
    if (!email || !password) {
      alert("Please enter all Fields")
      setLoading(false)
      return
    }
    console.log(email, password)
    try {
      const { data } = await axios.post(url, { email, password })
      console.log("Sign in successful", data)
      alert("Sign in successful")
      setLoading(false)
    } catch (error) {
      console.log(error)
      alert(error.message)
      setLoading(false)
    }
  }
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flex: 1, justifyContent: "center" }}
    >
      <View
        style={{
          marginVertical: 100
        }}
      >
        <CircleLogo />
        <Text title center>
          Sign In
        </Text>

        <UserInput
          name="Email"
          placeholder="Please enter your email"
          value={email}
          setValue={setEmail}
          autoCompleteType="email"
          keyboardType="email-address"
        />
        <UserInput
          name="Password"
          placeholder="Please enter your password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
          autoCompleteType="password"
        />

        <Text
          style={{
            textAlign: "right",
            marginTop: -20,
            marginBottom: 35,
            letterSpacing: 1.2,
            padding: 20
          }}
          color="black"
        >
          Forgot Password?
        </Text>

        <SubmitButton
          title={"Sign In"}
          handleSubmit={handleSubmit}
          loading={loading}
        />
        <Text center>
          Don't Have an Account?{" "}
          <Text color="black" onPress={() => navigation.navigate("Signup")}>
            Sign Up
          </Text>
        </Text>
      </View>
    </KeyboardAwareScrollView>
  )
}
