import React from "react";
import { Text, View } from "react-native";
// import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/Ionicons";
export default function Header({ headerName }) {
  console.log(headerName, "header");
  return (
    <View>
      <View
        style={{
          marginTop: 40,
          backgroundColor: "#e8effa",
          padding: 10,
          marginLeft: 10,
          marginRight: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          onPress={() => navigation.navigate("Home")}
          style={{ fontSize: 18, fontWeight: "bold" }}
        >
          {headerName}
        </Text>
        <View>
          <Icon
            name="notifications-outline"
            style={{ color: "black" }}
            size={30}
            color="#3143e8"
          />
        </View>
      </View>
    </View>
  );
}
