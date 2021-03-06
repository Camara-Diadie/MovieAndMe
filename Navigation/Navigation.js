import React from "react"
import { StyleSheet, Image } from "react-native"
import { createAppContainer } from "react-navigation"
import { createBottomTabNavigator } from "react-navigation-tabs"
import { createStackNavigator } from "react-navigation-stack"
import Search from "../Components/Search"
import FilmDetail from "../Components/FilmDetail"
import Favorites from "../Components/Favorites"

const SearchStackNavigator = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      title: "Rechercher",
    },
  },
  FilmDetail: {
    screen: FilmDetail,
  },
})

const MoviesTabNavigator = createBottomTabNavigator({
  Search: {
    screen: SearchStackNavigator,
    navigationOptions: {
      tabBarIcon: () => {
        return (
          <Image
            source={require("../Images/ic_search.png")}
            style={styles.icon}
          />
        )
      },
    },
  },
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      tabBarIcon: () => {
        return (
          <Image
            source={require("../Images/ic_favorite.png")}
            style={styles.icon}
          />
        )
      },
    },
  },
})

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
})

export default createAppContainer(MoviesTabNavigator)
