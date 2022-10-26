import * as React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import Header from "./Header";
import Icon from "react-native-vector-icons/AntDesign";
const paymentData = [
  {
    id: 1,
    accNo: "Amex ***6436",
    rs: "$60.00",
    date: "oct 18",
    payment: "Payment",
  },
  {
    id: 2,
    accNo: "Amex ***6367",
    rs: "$60.00",
    date: "Sep 05",
    payment: "Payment",
  },
  {
    id: 3,
    accNo: "Amex ***1098",
    rs: "$15.00",
    date: "Sep 18",
    payment: "Credit",
  },
  {
    id: 4,
    accNo: "Amex ***1234",
    rs: "$75.00",
    date: "Aug 18",
    payment: "Payment",
  },
];
export default function BillingScreen({ navigation, route }) {
  return (
    <View>
      <Header headerName={route.name} />
      <View
        style={{
          marginTop: 30,
          marginLeft: 20,
        }}
      >
        <Text style={{ fontSize: 18, color: "gray" }}>My Payments</Text>
        <Text style={{ fontSize: 14, fontWeight: "bold", marginTop: 7 }}>
          Ziply fibre Gif internet
        </Text>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 7 }}>
          $60.00
        </Text>
        <Text style={{ fontSize: 12, marginTop: 7 }}>
          AutoPay scheduled for oct 18 {"\n"}{" "}
          <Text style={{ color: "green", marginTop: 7 }}>Manage AutoPay</Text>
        </Text>
      </View>
      <View style={{ margin: 20 }}>
        <TouchableHighlight
          style={{}}
          //   onPress={() => this.submitSuggestion(this.props)}
          underlayColor="#fff"
        >
          <Text
            style={{
              paddingTop: 10,
              paddingBottom: 10,
              color: "white",
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
          flexDirection: "row",
          justifyContent: "space-between",
          marginLeft: 10,
          marginRight: 10,
          backgroundColor: "#dadee6",
          padding: 10,
        }}
      >
        <View style={{ flexDirection: "row", marginLeft: 10 }}>
          <Icon
            name="filetext1"
            size={25}
            color="black"
            style={{ height: 25, width: 25 }}
          />
          <Text style={{ fontSize: 16, marginLeft: 10 }}>Current Bill</Text>
        </View>

        <Icon
          name="right"
          size={25}
          color="gray"
          style={{ height: 25, width: 25 }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginLeft: 10,
          marginRight: 10,
          marginTop: 2,
          backgroundColor: "#dadee6",
          padding: 10,
        }}
      >
        <View style={{ flexDirection: "row", marginLeft: 10 }}>
          <Icon
            name="menuunfold"
            size={25}
            color="black"
            style={{ height: 25, width: 25 }}
          />
          <Text style={{ fontSize: 16, marginLeft: 10 }}>Billing History</Text>
        </View>
        <Icon
          name="right"
          size={25}
          color="gray"
          style={{ height: 25, width: 25 }}
        />
      </View>
      <View>
        <Text style={{ color: "gray", marginTop: 20, marginLeft: 20 }}>
          Recent Transactions
        </Text>
        {paymentData.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                marginLeft: 15,
                marginRight: 15,
                marginTop: 8,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  {item?.payment}
                </Text>
                <Text style={{ fontSize: 9 }}>{item?.date}</Text>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                  {item?.rs}
                </Text>
                <Text style={{ fontSize: 9 }}>{item?.accNo}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}
