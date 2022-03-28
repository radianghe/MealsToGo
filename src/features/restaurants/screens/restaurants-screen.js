import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  Platform,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card-component";
import { spacing } from "../../../utils/sizes";

export const RestaurantsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchView}>
        <Searchbar placeholder="Search" />
      </View>
      <View style={styles.listView}>
        <View style={styles.listItem}>
          <RestaurantInfoCard />
        </View>
      </View>
    </SafeAreaView>
  );
};

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
    justifyContent: "center",
  },
  listView: {
    flex: 0.9,
    backgroundColor: "blue",
  },
  listItem: {
    padding: spacing.md,
  },
});
