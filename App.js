import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Platform,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { spacing } from "./src/utils/sizes";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchView}>
        <Searchbar placeholder="Search" />
      </View>
      <View style={styles.listView}>
        <Text style={styles.text}>list</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 0,
  },
  text: {
    padding: spacing.md,
  },
  searchView: {
    flex: 0.1,
    backgroundColor: "green",
    justifyContent: "center",
  },
  listView: {
    flex: 0.9,
    backgroundColor: "blue",
  },
});
