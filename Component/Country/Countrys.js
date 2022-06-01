import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useEffect, useState } from "react";
import Country from "./Country";

export default function Countrys() {
  const [countryes, setCountry] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);
  return (
    <View>
      <Text>Countrys {countryes.length}</Text>
      <ScrollView>
        {countryes.map((country, index) => (
          <Country country={country} key={index}></Country>
        ))}
      </ScrollView>
    </View>
  );
}
