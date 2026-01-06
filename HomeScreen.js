import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Platform,
  TextInput,
  TouchableOpacity,
} from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.HomeScreen}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Hello, Mubashir</Text>
        <Text style={styles.headerSubtitle}>
          Welcome back to your dashboard
        </Text>
      </View>
      <View style={styles.searchBlock}>
        <TextInput
          placeholder="Search by product name.."
          style={styles.searchInput}
        />
        <TouchableOpacity style={styles.searchBtn}></TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  HomeScreen: {
    paddingTop: Platform.OS === "ios" ? 64 : StatusBar.currentHeight + 10,
    paddingHorizontal: 24,
    backgroundColor: "white",
    flex: 1,
  },
  header: {
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 600,
    fontFamily: "SemiBold",
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 18,
    fontFamily: "Light",
    color: "#333",
  },
  searchBlock: {
    backgroundColor: "#e2e2e2",
    height: 54,
    borderRadius: 50,
    justifyContent: "center",
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchInput: {
    fontFamily: "Regular",
    fontSize: 16,
    letterSpacing: -0.5,
    color: "#000",
    width: 260,
  },
  searchBtn: {
    height: 45,
    width: 45,
    borderRadius: 50,
    backgroundColor: "#6759ff",
  },
});
