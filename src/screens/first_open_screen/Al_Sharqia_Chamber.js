import React, { useState, useEffect } from "react";
import { Image } from "react-native-elements";
import { View, StyleSheet } from "react-native";
// import * as Font from 'expo-font';
// import { AppLoading } from 'expo';
const Al_Sharqia_Chamber = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Tabs')
    }, 2000);
  }, []);

  // const fetchFonts = () => {
  //   return Font.loadAsync({
  //     'Photo1': require('../../../assets/Group_1.png')
  //   });
  // };

  // const [dataLoaded, setDataLoaded] = useState(false);

  // if (!dataLoaded) {
  //   return (
  //     <AppLoading
  //       startAsync={fetchFonts}
  //       onFinish={() => setDataLoaded(true)}
  //       onError={err => console.log(err)}
  //     />
  //   );
  // }

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/Card1.png')} style={styles.Image} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginTop: 90,
    marginLeft: 130
  },
  Image: {
    height: "60%",
    width: "60%",
    resizeMode: 'stretch'
  }
});
Al_Sharqia_Chamber.navigationOptions = () => {
  return {
    header: null
  };
};
export default Al_Sharqia_Chamber;