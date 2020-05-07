import React, { useState } from "react";
import { Text, Image } from "react-native-elements";
import { View, StyleSheet } from "react-native";
import * as Font from 'expo-font';
import { AppLoading } from 'expo'
const Header = (props) => {
  
  const [dataLoaded, setDataLoaded] = useState(false);

  const fetchFonts = () => {
    return Font.loadAsync({
      'cairo': require('../../assets/Cairo-SemiBold.ttf'),
      'cairo-bold': require('../../assets/Cairo-Regular.ttf'),
      'Cairo-ExtraLight': require('../../assets/Cairo-ExtraLight.ttf')
    });
  };
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={err => console.log(err)}
      />
    );
  }

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
    fontSize: 24,
    fontFamily:'cairo'
  }
});
export default Header;
