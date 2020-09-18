import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Header = ({ title, subtitle }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.subtext}>{subtitle}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: "Lista de Supermercado",
  subtitle: "Agregue o Elimine productos",
};

const styles = StyleSheet.create({
  header: {
    height: 70,
    padding: 15,
    backgroundColor: "darkslateblue",
  },
  text: {
    color: "#ffe",
    fontSize: 20,
    textAlign: "center",
  },
  subtext: {
    color: "#eee",
    fontSize: 15,
    textAlign: "center",
  },
});

export default Header;
