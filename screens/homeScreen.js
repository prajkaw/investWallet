import * as React from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View,TouchableOpacity} from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your investWallet</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

export default class HomeScreen extends React.Component {

onCreateWallet=()=>{
this.props.navigation.navigate("CreateWallet")
}

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={{
            backgroundColor:"#0bdbc3",
            borderWidth:1,
            borderColor:"#0bdbc3",
            borderRadius:5,
            padding:15,
            paddingHorizontal:30
        }}
        onPress={()=>{
            this.onCreateWallet()
        }}
        >
            <Text style={{color:"#fff",fontWeight:"700",fontSize:16}}>Create Wallet</Text>
        </TouchableOpacity>
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
    justifyContent: "center",
  },
});
