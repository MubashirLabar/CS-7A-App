import { View, StyleSheet, TextInput } from "react-native";

function App() {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter your name"
        style={styles.input}
        onChangeText={(value) => {
          console.log("name...", value);
        }}
      />
      <TextInput
        placeholder="Enter your password"
        style={styles.input}
        secureTextEntry={true}
        onChangeText={(value) => {
          console.log("password...", value);
        }}
      />
      <TextInput
        placeholder="Explain your expertise..."
        style={[styles.input, { height: 200 }]}
        multiline={true}
        maxLength={100}
        onChangeText={(value) => {
          console.log("expertise...", value);
        }}
      />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 50,
    paddingHorizontal: 24,
  },
  input: {
    fontSize: 24,
    borderWidth: 1,
    borderColor: "black",
    width: "100%",
    paddingHorizontal: 22,
    borderRadius: 16,
    marginBottom: 24,
    textAlignVertical: "top",
  },
});
