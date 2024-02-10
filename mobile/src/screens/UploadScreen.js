import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";

const UploadScreen = () => {
  const cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [photo, setPhoto] = useState();

  const takePicture = async () => {
    const options = {
      quality: 0.7,
      base64: true,
      exif: false,
    };

    const newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  useEffect(() => {
    (async () => {
      const cameraPermissions = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraPermissions === "granted");
    })();
  }, []);

  if (photo) {
    return (
      <View style={styles.mainContainer}>
        <Image
          style={styles.preview}
          source={{ uri: "data:image/jpg;base64" + photo.base64 }}
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
    <Camera>
      <TouchableOpacity style={styles.photoButton} onPress={takePicture}>
        <Text>Take</Text>
      </TouchableOpacity>
    </Camera>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  photoButton: {
    width: 100,
    height: 100,
    backgroundColor: "white",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  preview: {
    flex: 1,
    jalignSelf: "stretch",
  },
});

export default UploadScreen;
