import { View, Text, StyleSheet, StatusBar, ScrollView } from "react-native";

function App() {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <View style={[styles.box, { backgroundColor: "red" }]}>
          <Text style={styles.title}>Pizza</Text>
        </View>
        <View style={[styles.box, { backgroundColor: "yellow" }]}>
          <Text style={styles.title}>Burger</Text>
        </View>
        <View style={[styles.box, { backgroundColor: "blue" }]}>
          <Text style={styles.title}>Pasta</Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: StatusBar.currentHeight + 20,
    paddingHorizontal: 20,
    gap: 20,
  },
  box: {
    height: 250,
    width: 200,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  title: {
    fontSize: 36,
    fontWeight: 600,
    color: "#fff",
  },
});
