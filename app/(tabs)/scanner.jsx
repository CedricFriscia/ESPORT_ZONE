import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { Camera } from "expo-camera";

export default function ScannerTab() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  // Demande des permissions pour la caméra
  useEffect(() => {
    const requestPermission = async () => {
      try {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === "granted");

        if (status !== "granted") {
          Alert.alert(
            "Permission refusée",
            "Veuillez autoriser l'accès à la caméra dans les paramètres.",
            [{ text: "OK" }]
          );
        }
      } catch (error) {
        console.error("Erreur lors de la demande de permissions : ", error);
        Alert.alert(
          "Erreur",
          "Impossible d'accéder à la caméra. Veuillez réessayer.",
          [{ text: "OK" }]
        );
      }
    };

    requestPermission(); // Appeler la fonction au chargement du composant
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    alert(`QR code scanné : ${data}`);
  };

  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Demande d'accès à la caméra...</Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text>Accès à la caméra refusé</Text>
        <Button
          title="Réessayer"
          onPress={() => Camera.requestCameraPermissionsAsync()}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        barCodeScannerSettings={{
          barCodeTypes: [Camera.Constants.BarCodeType.qr],
        }}
      />
      {scanned && (
        <Button title="Scanner à nouveau" onPress={() => setScanned(false)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  camera: {
    flex: 1,
    width: "100%",
  },
});
