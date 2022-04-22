// RN specific imports
import { useEffect, useState, Fragment } from "react";
import { StyleSheet, View, Text } from "react-native";
// Modules Imports
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//Firebase Import
import firebase from "firebase/compat/app";
// Redux component imports
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./redux/Reducers";
import thunk from "redux-thunk";
// Component Imports
import Landing from "./Components/Auth/Landing";
import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Main from "./Components/Main";
// Creating required bit and pieces
const Stack = createStackNavigator();
// const store = createStore(rootReducer, applyMiddleware(thunk));

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyC7u6c2_feBklfNw5Dmke69nMLqqZi8QRM",
  authDomain: "instagram-clone-ebbd8.firebaseapp.com",
  projectId: "instagram-clone-ebbd8",
  storageBucket: "instagram-clone-ebbd8.appspot.com",
  messagingSenderId: "1096207297924",
  appId: "1:1096207297924:web:fc38770a124fc8c04681d1",
};

// Initializing Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
}
export default function App() {
  // States Definition
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  //Checking loggedIn state
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        setIsLoggedIn(false);
        setIsLoaded(true);
      } else {
        setIsLoggedIn(true);
        setIsLoaded(true);
      }
    });
  });
  console.log(rootReducer);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
