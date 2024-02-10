import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";

const WelcomeScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/mountain.jpg")}
      />
      <View style={styles.contentContainer}>
        <View style={styles.innerContainer}>
          <Text style={styles.header}>Welcome to Animal GO</Text>
          <TouchableOpacity
            onPress={() => router.replace("/(home)/camera")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 10,
  },

  contentContainer: {
    flex: 6,
    backgroundColor: "#0B1526",
  },

  header: {
    fontSize: Dimensions.get("window").width * 0.08,
    color: "white",
  },

  innerContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: Dimensions.get("window").height * 0.15,
    justifyContent: "space-between",
    marginTop: "10%",
  },

  button: {
    backgroundColor: "#AFD1A8",
    padding: 15,
    borderRadius: 30,
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontSize: Dimensions.get("window").width * 0.05,
  },
});

export default WelcomeScreen;
