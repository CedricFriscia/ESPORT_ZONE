import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

const Scanner = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      try {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === "granted");
      } catch (error) {
        console.error("Erreur lors de la demande de permission:", error);
        setHasPermission(false);
      }
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Code-barres de type ${type} et données ${data} a été scanné !`);
  };

  if (hasPermission === null) {
    return <Text style={styles.text}>Demande d'accès à la caméra...</Text>;
  }

  if (hasPermission === false) {
    return <Text style={styles.text}>Pas d'accès à la caméra</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button
          title={"Appuyez pour scanner à nouveau"}
          onPress={() => setScanned(false)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    margin: 20,
  },
});

export default Scanner;
