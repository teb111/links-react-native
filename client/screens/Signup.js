import { View, ScrollView } from "react-native"
import React, { useState } from "react"
import Text from "@kaloraat/react-native-text"
import UserInput from "../components/auth/UserInput"
import SubmitButton from "../components/auth/SubmitButton"
import axios from "axios"
import CircleLogo from "../components/auth/CircleLogo"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"

export default function Signup({ navigation }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState("")
  const url = "http://localhost:8000/api/signup"

  const handleSubmit = async () => {
    setLoading(true)
    if (!name || !email || !password) {
      alert("Please enter all Fields")
      setLoading(false)
      return
    }
    console.log(name, email, password)
    try {
      const { data } = await axios.post(url, { name, email, password })
      console.log("Sign up successful")
      alert("Sign up successful")
      setLoading(false)
    } catch (error) {
      console.log(error)
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
          Sign Up
        </Text>

        <UserInput
          name="Name"
          placeholder="Please enter your name"
          value={name}
          setValue={setName}
          autoCapitalize="words"
          autoCorrect={false}
        />
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
        <SubmitButton
          title={"Sign Up"}
          handleSubmit={handleSubmit}
          loading={loading}
        />
        <Text center>
          Have an Account?{" "}
          <Text color="black" onPress={() => navigation.navigate("Signin")}>
            Sign in
          </Text>
        </Text>
      </View>
    </KeyboardAwareScrollView>
  )
}
