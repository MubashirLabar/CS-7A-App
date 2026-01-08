import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Platform,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import { useState, useEffect } from "react";

import ProductCard from "./components/ProductCard";

const HomeScreen = () => {
  const allProducts = [
    {
      id: 1,
      name: "Cheese Pizza",
      price: 500,
      desc: "It should be no shocker that a classic is the statistical favorite. Cheese pizza is one of the most popular choices. It will always be a simple, unadorned masterpiece on its own.",
      image: require("./assets/images/1.webp"),
    },
    {
      id: 2,
      name: "Veggie Pizza",
      price: 300,
      desc: "hen you want to jazz up your cheese pizza with color and texture, veggies are the perfect topping. And you're only limited by your imagination.",
      image: require("./assets/images/2.webp"),
    },
    {
      id: 3,
      name: "Pepperoni Pizza",
      price: 700,
      desc: "There's a reason this is one of the most popular types of pizza. Who doesn't love biting into a crispy, salty round of pepperoni?",
      image: require("./assets/images/3.webp"),
    },
    {
      id: 4,
      name: "Meat Pizza",
      price: 800,
      desc: "If pepperoni just isn't enough, and you're looking for a pie with a bit more heft, a meat pizza is a perfect and popular choice. Pile on ground beef and sausage for a hearty meal.",
      image: require("./assets/images/4.webp"),
    },
    {
      id: 5,
      name: "Margherita Pizza",
      price: 250,
      desc: "Deceptively simple, the Margherita pizza is made with basil, fresh mozzarella, and tomatoes. There's a reason it's an Italian staple and one of the most popular types of pizza in the country.",
      image: require("./assets/images/5.webp"),
    },
    {
      id: 6,
      name: "BBQ Chicken Pizza",
      price: 500,
      desc: "If you love BBQ chicken and you love pizza, why not put them together? This has long been a cult favorite of sports fans and college kids. The chicken slathered over the top of a pie gives it a tangy, sweet flavor that can't be beaten.",
      image: require("./assets/images/1.webp"),
    },
    {
      id: 7,
      name: "Hawaiian Pizza",
      price: 300,
      desc: "Pineapple might not be the first thing that comes to mind when you think pizza. But add in some ham and it creates an unexpectedly solid sweet and salty combination for this type of pizza.",
      image: require("./assets/images/2.webp"),
    },
    {
      id: 8,
      name: "Buffalo Pizza",
      price: 700,
      desc: "Who says your pizza has to be strictly tomato-sauce based? Branch out with some buffalo sauce on your pie. All its spicy, salty, buttery goodness is a natural pairing for pizza.",
      image: require("./assets/images/3.webp"),
    },
    {
      id: 9,
      name: "Supreme Pizza",
      price: 800,
      desc: "When you can't decide which toppings to get, it's time for the supreme pizza. The \"supreme\" refers to the litany of toppings that come scattered on these pies, from sausage to vegetables to pepperoni. And it's the combination of the flavors that really makes it sing.",
      image: require("./assets/images/4.webp"),
    },
    {
      id: 9,
      name: "The Works Pizza",
      price: 250,
      desc: "And when the supreme just isn't enough, you're ready for the works. It's a step up in heartiness from the supreme. The \"works\" usually involves a wide variety of veggie toppings including onions, olives, and mushrooms, plus bacon and pepperoni.",
      image: require("./assets/images/5.webp"),
    },
  ];

  const [searchedValue, setSearchValue] = useState("");
  const [products, setProducts] = useState(allProducts);

  useEffect(() => {
    if (searchedValue.trim() === "") {
      setProducts(allProducts);
    } else {
      const filteredProducts = allProducts.filter((x) => {
        return x.name.toLowerCase().includes(searchedValue.toLowerCase());
      });
      setProducts(filteredProducts);
    }
  }, [searchedValue]);

  return (
    <View style={styles.home}>
      <StatusBar />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Hello, Mubashir</Text>
        <Text style={styles.headerDec}>Welcome back to the dashboard</Text>
      </View>
      <View style={styles.search}>
        <TextInput
          placeholder="Find your product"
          style={styles.searchInput}
          value={searchedValue}
          onChangeText={(value) => {
            setSearchValue(value);
          }}
        />
        <TouchableOpacity style={styles.searchBtn}>
          <Feather name="search" size={22} color="white" />
        </TouchableOpacity>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        {products.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </ScrollView>
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
    marginBottom: 30,
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
