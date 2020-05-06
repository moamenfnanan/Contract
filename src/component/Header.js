import React from "react";
import { Text, Image } from "react-native-elements";
import { View, StyleSheet } from "react-native";
const Header = (props) => {
  return (
    <View>
      <Image source={require('../../assets/Header.png')} style={styles.stretch} />
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  stretch: {
    width: "100%",
    height: 99,
    resizeMode: 'stretch'
  },
  text: {
    position: 'absolute',
    color: '#fff',
    marginTop: 35,
    alignSelf: 'center',
    fontSize: 24
  }
});
export default Header;
