import { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";

function App() {
  const [username, setUsername] = useState("BSCS 7th A");
  const [password, setPassword] = useState("");

  console.log("username...", username);
  console.log("password...", password);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter your name"
        style={styles.input}
        value={username}
        onChangeText={(value) => setUsername(value)}
      />
      <TextInput
        placeholder="Enter your password"
        style={styles.input}
        secureTextEntry={true}
        value={password}
        onChangeText={(value) => setPassword(value)}
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
