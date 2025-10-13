import { View, Text, StyleSheet, StatusBar, ScrollView } from "react-native";

function App() {
  return (
    <ScrollView horizontal={true}>
      <View style={styles.container}>
        <View style={styles.box1} />
        <View style={styles.box2} />
        <View style={styles.box3} />
      </View>
    </ScrollView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: StatusBar.currentHeight + 10,
    paddingHorizontal: 24,
    gap: 20,
  },
  box1: {
    height: 250,
    width: 250,
    backgroundColor: "red",
  },
  box2: {
    height: 250,
    width: 250,
    backgroundColor: "yellow",
  },
  box3: {
    height: 250,
    width: 250,
    backgroundColor: "blue",
  },
});
