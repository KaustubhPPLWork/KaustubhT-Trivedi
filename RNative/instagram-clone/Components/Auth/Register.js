// RN specific imports
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState } from "react";
// Firebase Import
import firebase from "firebase/compat/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
const Register = (props) => {
  //Setting up states for user details
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  //handler functions for authentication
  const signUpHandler = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    console.log(user.uid);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Saving to database
        const db = getFirestore();
        addDoc(collection(db, "users"), {
          name,
          email,
        });
      })
      .catch((err) => {
        alert(err);
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
      <Button title="Sign Up" onPress={signUpHandler} style={styles.button} />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    padding: 40,
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
});
