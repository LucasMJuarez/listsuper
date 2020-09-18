import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Alert } from "react-native";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import AddItem from "./components/AddItem";

import uuid4 from "uuid";

//View -> UIView
export default function App() {
  const [items, setItems] = useState([
    { id: uuid4(), text: "Milk" },
    { id: uuid4(), text: "Meat" },
    { id: uuid4(), text: "Rice" },
    { id: uuid4(), text: "Noodles" },
  ]);

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };

  const addItem = (text) => {
    if (!text) {
      Alert.alert("Error", "No inserto ningun producto chinverguencha");
    } else {
      setItems((prevItems) => {
        return [{ id: uuid4(), text }, ...prevItems];
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});
