import React, { useState } from "react";
import { Text, Image } from "react-native-elements";
import { View, StyleSheet } from "react-native";
import { Svg, Path } from 'react-native-svg'
const Header = (props) => {
  return (
    <View>
        {/* <Svg
          xmlns="http://www.w3.org/2000/svg"
          width="500"
          height="99.679"
          viewBox="0 0 375 99.679"
        >
          <Path
            fill="#7380a1"
            d="M0 32.141h375V109s-96.574 22.821-190.324 22.821S0 109 0 109z"
            data-name="Rectangle 7"
            transform="translate(0 -32.141)"
          ></Path>
        </Svg> */}
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
    fontFamily: 'cairo-bold'
  }
});
export default Header;
