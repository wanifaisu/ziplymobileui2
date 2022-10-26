import * as React from "react";
import { View, Text, Button, TouchableHighlight } from "react-native";
import Header from "./Header";

export default function BillingScreen({ navigation, route }) {
  return (
    <View>
      <Header headerName={route.name} />
      <View style={{ marginTop: 15, marginLeft: 20 }}>
        <Text
          onPress={() => navigation.navigate("Home")}
          style={{ fontSize: 26, fontWeight: "bold" }}
        >
          Hii Victoria
        </Text>

        <Text>Friday Octuber, 2022</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 30,
        }}
      >
        <View>
          <Text style={{ fontSize: 12, color: "gray" }}>Network Status</Text>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Excelent</Text>
          <Text style={{ color: "green" }}>TrubleShoot</Text>
        </View>
        <View>
          <Text style={{ fontSize: 12, color: "gray" }}>Last Speed Track</Text>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>850 mbps</Text>
          <Text style={{ color: "green" }}>Test Again</Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 30,
          marginLeft: 20,
        }}
      >
        <Text style={{ fontSize: 18, color: "gray" }}>My Payments</Text>
        <Text style={{ fontSize: 14, fontWeight: "bold" }}>
          Ziply fibre Gif internet
        </Text>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>$60.00</Text>
        <Text style={{ fontSize: 12 }}>
          AutoPay scheduled for oct 18 {"\n"} Manage AutoPay{" "}
        </Text>
      </View>
      <View style={{ margin: 20 }}>
        <TouchableHighlight
          style={{}}
          onPress={() => this.submitSuggestion(this.props)}
          underlayColor="#fff"
        >
          <Text
            style={{
              paddingTop: 5,
              paddingBottom: 5,
              color: "black",
              textAlign: "center",
              backgroundColor: "green",
              borderRadius: 10,
              fontWeight: "bold",
              borderWidth: 1,
              borderColor: "#fff",
            }}
          >
            Make Payment
          </Text>
        </TouchableHighlight>
      </View>
      <View
        style={{
          marginBottom: 25,
          marginLeft: 20,
          fontSize: 20,
          color: "gray",
        }}
      >
        <Text>Special Offers</Text>
        <Text style={{ fontSize: 14, fontWeight: "bold" }}>
          Ziply fibre Gif internet
        </Text>
        <Text style={{ fontSize: 14, color: "gray" }}>
          Lorom efsom gdb chs jhb
        </Text>
      </View>
    </View>
  );
}
