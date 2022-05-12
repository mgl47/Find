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
import { auth } from "../../firebase";
import colors from "../config/colors";
import LoggingButton from "../components/LoggingButton";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "react-native-google-signin-google-signin";

//export { issignedin };

function LoggingScreen({ navigation }) {
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

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with:", user.email);
      })
      .catch((error) => alert(error.message));
  };

  const [userInfo, setUserInfo] = useState(null);
  const [gettingLoginStatus, setGettingLoginStatus] = useState(true);

  useEffect(() => {
    // Initial configuration
    GoogleSignin.configure({
      // Mandatory method to call before calling signIn()
      scopes: ["https://www.googleapis.com/auth/drive.readonly"],
      // Repleace with your webClientId
      // Generated from Firebase console
      webClientId:
        "1086373311684-npd5t5fggcrq1dsg284csbgs7snsr22f.apps.googleusercontent.com",
    });
    // Check if user is already signed in
    _isSignedIn();
  }, []);

  const _isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    if (isSignedIn) {
      alert("User is already signed in");
      // Set User Info if user is already signed in
      _getCurrentUserInfo();
    } else {
      console.log("Please Login");
    }
    setGettingLoginStatus(false);
  };

  const _getCurrentUserInfo = async () => {
    try {
      let info = await GoogleSignin.signInSilently();
      console.log("User Info --> ", info);
      setUserInfo(info);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        alert("User has not signed in yet");
        console.log("User has not signed in yet");
      } else {
        alert("Unable to get user's info");
        console.log("Unable to get user's info");
      }
    }
  };

  const _signIn = async () => {
    // It will prompt google Signin Widget
    try {
      await GoogleSignin.hasPlayServices({
        // Check if device has Google Play Services installed
        // Always resolves to true on iOS
        showPlayServicesUpdateDialog: true,
      });
      const userInfo = await GoogleSignin.signIn();
      console.log("User Info --> ", userInfo);
      setUserInfo(userInfo);
    } catch (error) {
      console.log("Message", JSON.stringify(error));
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        alert("User Cancelled the Login Flow");
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert("Signing In");
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert("Play Services Not Available or Outdated");
      } else {
        alert(error.message);
      }
    }
  };

  const _signOut = async () => {
    setGettingLoginStatus(true);
    // Remove user session from the device.
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      // Removing user Info
      setUserInfo(null);
    } catch (error) {
      console.error(error);
    }
    setGettingLoginStatus(false);
  };

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
            placeholder="Email"
            placeholderTextColor="#7F7F7F"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#7F7F7F"
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
            secureTextEntry
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleLogin} style={styles.button}>
            <Text style={styles.buttonText}>Login with email</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          width: "100%",
          position: "absolute",
          alignSelf: "center",
          padding: 10,
          bottom: 300,
        }}
      >
        <LoggingButton
          onPress={_signIn}
          title="Continue with Google"
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
          bottom: 230,
        }}
      >
        <LoggingButton
          onPress={() =>
            Alert.alert(
              "No internet connection",
              "Make sure your device is connected to the internet"
            )
          }
          title="Continue with Facebook"
          color="soft"
          image={require("../assets/Events/facebook.png")}
        />
      </View>
      <TouchableOpacity style={{ position: "absolute", bottom: 215 }}>
        <Text
          style={{ color: colors.blue }}
          onPress={() => navigation.navigate("Registration")}
        >
          {" "}
          Don't have an account? Create here
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          bottom: 60,
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
          Sign in later
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
        By signing up or signing in, I agree to Find
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("Terms of Use")}
        style={{
          width: 110,
          height: 30,
          bottom: 25,
          backgroundColor: colors.light,
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
          backgroundColor: colors.light,
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
  },
  inputContainer: {
    width: 300,

    bottom: 100,
  },
  logo: {
    resizeMode: "contain",
    width: 200,
    height: 200,
    //   position:'absolute',
    top: 60,
    alignSelf: "center",
  },
  slogan: {
    fontSize: 17,
    fontWeight: "500",
    top: 30,
  },
  input: {
    backgroundColor: colors.soft,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 30,
    marginTop: 5,
  },
  buttonContainer: {
    backgroundColor: colors.light,
    borderBottomColor: colors.description,
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    bottom: 100,
  },

  button: {
    backgroundColor: colors.blue,
    width: 300,
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
    fontWeight: "600",
    fontSize: 15,
  },
  buttonOutlineText: {
    color: colors.blue,
    fontWeight: "700",
    fontSize: 16,
  },
});

export default LoggingScreen;
