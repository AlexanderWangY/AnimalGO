import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { Camera } from "expo-camera";

const UploadScreen = () => {
  const cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [photo, setPhoto] = useState();

  const takePicture = async () => {
    const options = {
      quality: 0.5,
      base64: true,
      exif: true,
      zoom: 0,
    };

    const newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  useEffect(() => {
    (async () => {
      const cameraPermissions = await Camera.requestCameraPermissionsAsync();
      console.log(cameraPermissions);
      setHasCameraPermission(cameraPermissions.granted);
    })();
  }, []);

  if (photo) {
    console.log(photo.exif);
    return (
      <View style={styles.mainContainer}>
        <Image
          style={styles.image}
          // source={{ uri: photo.uri }}
          source={{ uri: "data:image/jpg;base64," + photo.base64 }}
        />
      </View>
    );
  }

  console.log(hasCameraPermission);

  if (hasCameraPermission === undefined) {
    return (
      <View style={styles.mainContainer}>
        <Text>Requesting camera permissions</Text>
      </View>
    );
  } else if (!hasCameraPermission) {
    return (
      <View style={styles.mainContainer}>
        <Text>No access to camera</Text>
      </View>
    );
  }

  return (
    <View style={styles.mainContainer}>
      <Camera style={styles.camera} ref={cameraRef} zoom={0}>
        <View style={styles.target}></View>
      </Camera>
      <View style={styles.taskbar}>
        <TouchableOpacity
          style={styles.photoButton}
          onPress={takePicture}
        ></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },

  camera: {
    flex: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  target: {
    width: Dimensions.get("window").width * 0.3,
    height: Dimensions.get("window").width * 0.3,
    borderColor: "white",
    borderWidth: 2.5,
  },

  taskbar: {
    width: "100%",
    flex: 4,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  photoButton: {
    width: 100,
    height: 100,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 10,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  preview: {
    flex: 1,
  },

  image: {
    width: "100%",
    height: "100%",
  },
});

export default UploadScreen;
