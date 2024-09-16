import React from "react";
import QRCode from "react-native-qrcode-svg";

const QrCode = ({ value, getRef }) => {
  return (
    <QRCode
      value={value}
      size={250}
      color="black"
      backgroundColor="white"
      getRef={getRef}
    />
  );
};

export default QrCode;
