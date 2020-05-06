import React, { useState, useEffect } from "react";
import { Image } from "react-native-elements";
import { StyleSheet, View } from "react-native";
// import { AppLoading } from 'expo';
// import * as Font from 'expo-font';
// let customPic = {
//   'Inter-Black': require('../../../assets/Group_1.png'),
//   'Inter-SemiBoldItalic':
//     '../../../assets/Group_1.png',
// };
const Contracting = ({ navigation }) => {
  // const [dataLoaded, setDataLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Contracting_committee')
    }, 2000);
  }, []);

  
  // const fetchFonts = () => {
  //   return Font.loadAsync({
  //     'Photo1': require('../../../assets/Group_1.png')
  //   });
  // };
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
      <Image source={require('../../../assets/Group_1.png')} style={styles.Image} />
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
Contracting.navigationOptions = () => {
  return {
    header: null
  };
};
export default Contracting;