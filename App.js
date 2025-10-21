import { View, StyleSheet, Image, ScrollView, Dimensions } from "react-native";

// const screenWidth = Dimensions.get("window").width;
// const height = Dimensions.get("window").height;

const { height, width } = Dimensions.get("window");

function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={require("./images/img-1.jpg")} style={styles.image} />
        <Image
          source={{
            uri: "https://images.pexels.com/photos/34101675/pexels-photo-34101675.jpeg",
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri: "https://images.pexels.com/photos/10875452/pexels-photo-10875452.jpeg",
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri: "https://images.pexels.com/photos/14584233/pexels-photo-14584233.jpeg",
          }}
          style={styles.image}
        />
      </View>
    </ScrollView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    height: height,
    width: width,
  },
});
