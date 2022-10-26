import * as React from "react";
import { View, Text } from "react-native";
import Header from "./Header";

export default function DetailsScreen({ navigation, route }) {
  return (
    <View>
      <Header headerName={route.name} />
      <View style={{ marginTop: 40 }}>
        <Text
          onPress={() => navigation.navigate("Home")}
          style={{ fontSize: 20, fontWeight: "bold" }}
        >
          Details Screen
        </Text>
      </View>
    </View>
  );
}
