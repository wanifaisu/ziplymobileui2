import { Text, View } from "react-native";
import Header from "./Header";

import { useRef, useState } from "react";
import { StyleSheet, Button } from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";
import Icon from "react-native-vector-icons/EvilIcons";
const support = [
  {
    id: 1,
    name: "Network Health",
    text1: "lorum epsum the way you r ",
    text2: "hjb jkdc n hjndc j jhcbx jbhc hbsc j",
    truble: "TroubleShoot",
  },
  {
    id: 2,
    name: "Speed Test",
    text1: "jdbcn kjdnc cd n dckjmnd ",
    text2: "uefgbn jvkd jmnd kjfdmn cdm hdsbc  ",

    truble: "Run a Speed Test",
  },
];
export default function SupportScreen({ navigation, route }) {
  const video = useRef(null);
  const [status, setStatus] = useState({});
  return (
    <View>
      <View style={{ backgroundColor: "green" }}>
        <View
          style={{
            marginTop: 60,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ marginLeft: 140 }}>
            <Text style={{ fontSize: 25, color: "white", fontWeight: "bold" }}>
              Support
            </Text>
          </View>
          <View style={{ marginRight: 30 }}>
            <Icon
              name="comment"
              style={{ color: "white" }}
              size={50}
              color="#3143e8"
            />
          </View>
        </View>
        {/* <Header headerName={route.name} /> */}
        <View
          style={{
            marginTop: 30,
            marginLeft: 20,
          }}
        >
          <Video
            ref={video}
            style={styles.video}
            source={{
              uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
            }}
            useNativeControls
            resizeMode="contain"
            isLooping
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          />
        </View>
      </View>
      <View style={{ marginTop: 20, marginLeft: 10 }}>
        {support.map((item, index) => {
          return (
            <View key={index} style={{ flexDirection: "row" }}>
              <View style={{ width: 290 }}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  {item.name}
                </Text>
                <Text>{item?.text1}</Text>
                <Text>{item.text2}</Text>
                <Text style={{ color: "green", marginTop: 10 }}>
                  {item.truble}
                </Text>
              </View>
              <View style={{ alignSelf: "center", marginLeft: 10 }}>
                <Video
                  ref={video}
                  style={styles.video2}
                  source={{
                    uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
                  }}
                  useNativeControls
                  resizeMode="contain"
                  isLooping
                  onPlaybackStatusUpdate={(status) => setStatus(() => status)}
                />
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  video: {
    alignSelf: "center",
    width: 320,
    height: 200,
    marginBottom: 30,
  },
  video2: {
    width: 100,
    height: 100,
    marginBottom: 30,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
