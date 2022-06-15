import * as React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
  FlatList,
} from "react-native";

// import bip39 from "bip39"
 const bip39=require("bip39")
// import bip39 from "react-native-bip39"
// const bip39=require("react-native-bip39")
import '../shim.js'
import crypto from 'crypto'


let data =
  "gallery supply lemon slam give near sphere option awake rack half parade".split(
    " "
  );
export default class CreateWalletScreen extends React.Component {
  componentDidMount() {
     this.generateMnemonic()
  }
  phraseSeperator = () => {
    return <View style={{ height: 8 }}></View>;
  };

  generateMnemonic =  async() => {
    //  const mnemonic = await bip39.generateMnemonic(128)
    //  console.log(mnemonic);
  // console.log(bip39)
    try {
       console.log(bip39.generateMnemonic()) // default to 128
      } catch(e) {
        console.log(e)
      }

  };

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            borderWidth: 1,
            borderColor: "#0bdbc3",
            borderRadius: 5,
            padding: 5,
            width: Dimensions.get("screen").width - 20,
          }}
        >
          <FlatList
            data={data}
            renderItem={({ item, index }) => {
              return (
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ color: "#0bdbc3", alignSelf: "center" }}>
                    {index + 1}
                  </Text>
                  <TextInput value={item} style={styles.textInputStyle} />
                </View>
              );
            }}
            keyExtractor={(item) => JSON.stringify(item)}
            numColumns={4}
            ItemSeparatorComponent={this.phraseSeperator}
          />
        </View>

        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  textInputStyle: {
    borderBottomWidth: 1,
    borderBottomColor: "#0bdbc3",
    borderRightWidth: 1,
    borderRightColor: "#fff",
    padding: 5,
    paddingHorizontal: 10,
    width: Dimensions.get("screen").width / 5,
  },
});
