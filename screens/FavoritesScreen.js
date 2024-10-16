import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { FavoritesContext } from "../store/favoritescontex";
import { FOODS } from "../data/dummy-data";
import FoodList from "../components/FoodList";
import { useSelector } from "react-redux";
export default function FavoritesScreen() {
  // const favoriteFoodContext = useContext(FavoritesContext);
  const favoriteFoodIds = useSelector((state) => state.favoriteFoods.ids);
  // const favoritesFoods = FOODS.filter((food) =>
  //   favoriteFoodContext.ids.includes(food.id)
  // );
  const favoritesFoods = FOODS.filter((food) =>
    favoriteFoodIds.includes(food.id)
  );
  if (favoritesFoods.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Favorilere herhangi bir şey eklemediniz{" "}
        </Text>
      </View>
    );
  }
  return <FoodList items={favoritesFoods} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
