import { View, Text, Image } from "react-native";
import React from "react";

export default function Country({ country }) {
  return (
    <View style={{ marginTop: 10 }}>
      <Text style={{ fontSize: 20 }}>Country Name: {country.name.common}</Text>
      <Image
        source={{
          uri: country.flags.png,
        }}
        style={{ width: 100, height: 50, marginTop: 10 }}
      ></Image>
    </View>
  );
}
