import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Platform,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const HomeScreen = () => {
  return (
    <View style={styles.home}>
      <StatusBar />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Hello, Mubashir</Text>
        <Text style={styles.headerDec}>Welcome back to the dashboard</Text>
      </View>
      <View style={styles.search}>
        <TextInput placeholder="Find your product" style={styles.searchInput} />
        <TouchableOpacity style={styles.searchBtn}>
          <Feather name="search" size={22} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  home: {
    paddingTop: Platform.OS === "ios" ? 64 : StatusBar.currentHeight + 20,
    paddingHorizontal: 24,
  },
  header: {
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 38,
    fontFamily: "SemiBold",
    marginBottom: 10,
  },
  headerDec: {
    fontSize: 18,
    fontFamily: "Light",
  },
  search: {
    backgroundColor: "#ddd",
    height: 56,
    borderRadius: 50,
    justifyContent: "center",
    paddingLeft: 24,
    paddingRight: 18,
    flexDirection: "row",
    alignItems: "center",
  },
  searchInput: {
    backgroundColor: "transparent",
    fontSize: 18,
    fontFamily: "Regular",
    flex: 1,
  },
  searchBtn: {
    height: 45,
    width: 45,
    backgroundColor: "#6759ff",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
