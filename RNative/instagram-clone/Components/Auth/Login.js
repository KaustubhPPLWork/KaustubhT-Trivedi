// RN specific imports
import { View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";
// Firebase Import
import firebase from "firebase/compat/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  //Setting up states for user details
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  //handler functions for user details
  const loginHandler = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user.user.uid);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Please enter your name"
        style={styles.inputElement}
        // value={name}
        onChangeText={(name) => setName(name)}
      />
      <TextInput
        placeholder="Please enter your email"
        style={styles.inputElement}
        // value={email}
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        placeholder="Please enter your password"
        style={styles.inputElement}
        secureTextEntry={true}
        // value={password}
        onChangeText={(password) => setPassword(password)}
      />
      <Button title="Login" onPress={loginHandler} style={styles.button} />
    </View>
  );
};

export default Login;

const styles = {
  container: {
    padding: 70,
    marginTop: 10,
  },
  inputElement: {
    padding: 10,
    marginVertical: 5,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
  },
  button: {
    borderRadius: 5,
  },
};
