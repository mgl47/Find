import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Alert,
  StatusBar,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";

import colors from "../config/colors";
import LoggingButton from "../components/LoggingButton";
import { auth, authentication } from "../../firebase/firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

//1086373311684-npd5t5fggcrq1dsg284csbgs7snsr22f.apps.googleusercontent.com

function SignUp({ navigation }) {
  const [isSignedIn, SetIsSignedIn] = useState(false);
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");

  const [loggedIn, setloggedIn] = useState(false);
  const [userInfo, setuserInfo] = useState([]);

  const RegisterUser = () => {
    createUserWithEmailAndPassword(authentication, email, password)
      .then((re) => {
        console.log(re);
        SetIsSignedIn(true);
        navigation.replace("home");
      })
      .catch((error) => alert(error.message));
  };

  const SignOutUser = () => {
    signOut(authentication)
      .then((re) => {
        console.log(re);
        SetIsSignedIn(false);
      })
      .catch((error) => alert(error.message));
  };
  useEffect(() => {
    const unsubscribe = authentication.onAuthStateChanged((isSignedIn) => {
      if (isSignedIn) {
        navigation.replace("home");
      }
    });

    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <Image
        style={styles.logo}
        source={require("../assets/Logo/logo_find_blue.png")}
        Image
      />

      <Text style={styles.slogan}> We find the best experiences for you</Text>

      <View style={styles.container} behavior="padding">
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="email"
            placeholderTextColor="#7F7F7F"
            value={email}
            onChangeText={(text) => SetEmail(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#7F7F7F"
            value={password}
            onChangeText={(text) => SetPassword(text)}
            style={styles.input}
            secureTextEntry
          />
        </View>

        <View style={[styles.buttonContainer]}>
          <TouchableOpacity
            onPress={RegisterUser}
            style={[styles.button, styles.buttonOutline]}
          >
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          width: "100%",
          position: "absolute",
          alignSelf: "center",
          padding: 10,
          bottom: 270,
        }}
      >
        <LoggingButton
          onPress={() =>
            Alert.alert(
              "No internet connection",
              "Make sure your device is connected to the internet"
            )
          }
          title="Sign up with Google"
          color="soft"
          image={require("../assets/Events/google.png")}
        />
      </View>
      <View
        style={{
          width: "100%",
          position: "absolute",
          alignSelf: "center",
          padding: 10,
          bottom: 200,
        }}
      >
        <LoggingButton
          onPress={() =>
            Alert.alert(
              "No internet connection",
              "Make sure your device is connected to the internet"
            )
          }
          title="Sign up with Facebook"
          color="soft"
          image={require("../assets/Events/facebook.png")}
        />
      </View>

      <TouchableOpacity
        style={{
          bottom: 50,
        }}
        onPress={() => navigation.navigate("home")}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "600",
            color: colors.blue,
          }}
        >
          Sign up later
        </Text>
      </TouchableOpacity>

      <Text
        style={{
          fontSize: 15,
          fontWeight: "500",
          bottom: 25,
          color: colors.black,
        }}
      >
        By signing up, I agree to Find
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("Terms of Use")}
        style={{
          width: 110,
          height: 30,
          bottom: 25,
          backgroundColor: colors.white,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 15,
            fontWeight: "500",
            top: 0,
            color: colors.blue,
          }}
        >
          Terms of Use
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 15,
          fontWeight: "500",
          bottom: 30,
          color: colors.black,
        }}
      >
        and
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Privacy Policy")}
        style={{
          width: 120,
          height: 30,
          bottom: 30,
          backgroundColor: colors.white,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 15,
            fontWeight: "500",
            top: 5,
            color: colors.blue,
          }}
        >
          Privacy Policy
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  inputContainer: {
    width: 300,

    bottom: 130,
  },
  logo: {
    resizeMode: "contain",
    width: 200,
    height: 200,

    //   position:'absolute',
    top: -20,
    alignSelf: "center",
  },
  slogan: {
    fontSize: 17,
    fontWeight: "500",
    top: -40,
    color: colors.black,
    zIndex: 999,
  },
  input: {
    backgroundColor: colors.light,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 30,
    marginTop: 5,
  },
  buttonContainer: {
    borderBottomColor: colors.blue,
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    bottom: 100,
  },

  button: {
    backgroundColor: colors.blue,
    width: 250,
    height: 52,
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    bottom: 20,
  },
  buttonOutline: {
    backgroundColor: colors.white,
    marginTop: 5,
    borderColor: colors.blue,
    borderWidth: 2,
  },
  buttonText: {
    color: colors.blue,
    fontWeight: "600",
    fontSize: 15,
  },
  buttonOutlineText: {
    color: colors.blue,
    fontWeight: "700",
    fontSize: 16,
  },
});

export default SignUp;

/*import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Alert,
  StatusBar,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import { auth } from "../../firebase";
import colors from "../config/colors";
import LoggingButton from "../components/LoggingButton";

function Registration({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("home");
      }
    });

    return unsubscribe;
  }, []);

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password, name)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Registered with:", user.email);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Name"
            value={name}
            onChangeText={(text) => setName(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
            secureTextEntry
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={handleSignUp}
            style={[styles.button, styles.buttonOutline]}
          >
            <Text style={styles.buttonOutlineText}>Register</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>

      <TouchableOpacity
        style={{ bottom: 200 }}
        onPress={() => navigation.navigate("home")}
      >
        <Text styles={{ fontSize: 40, color: colors.black }}>Sign later</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: 170,
  },
  input: {
    backgroundColor: colors.description,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    backgroundColor: colors.light,
    borderBottomColor: colors.description,
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },

  button: {
    backgroundColor: colors.blue,
    width: 200,
    height: 52,
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: colors.blue,
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: colors.blue,
    fontWeight: "700",
    fontSize: 16,
  },
});

export default Registration;
*/
