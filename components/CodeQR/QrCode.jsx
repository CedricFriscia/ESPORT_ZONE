import { View } from "moti";
import React from "react";
import QRCode from "react-native-qrcode-svg";

const QRCodeComponent = ({ value }) => {
  return (
    <View className="h-screen">
      <QRCode value={value} size={200} color="black" backgroundColor="white" />
    </View>
  );
};

export default QRCodeComponent;
