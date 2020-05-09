import React, { useState, useEffect } from "react";
import { Image } from "react-native-elements";
import { View, StyleSheet } from "react-native";
import { Asset } from 'expo-asset';
import { AppLoading } from 'expo';
// import * as Font from 'expo-font';
// import { AppLoading } from 'expo';
const Al_Sharqia_Chamber = ({ navigation }) => {
  // const [isReady,setIsReady] = useState(false)
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


  
  // if (!isReady) {
  //   return (
  //     <AppLoading
  //       startAsync={_cacheResourcesAsync}
  //       onFinish={setIsReady(true)}
  //       onError={console.warn}
  //     />
  //   ); }

  return (
    <View style={styles.container}>
      <Image style={styles.Image} source={require('../../../assets/Card1.png')} />
    </View>
  );
}

// async function _cacheResourcesAsync() {
//   const images = [require('../../../assets/Card1.png')];

//   const cacheImages = images.map(image => {
//     return Asset.fromModule(image).downloadAsync();
//   }); 
//   return Promise.all(cacheImages);
// }
//   return (
//     <View style={styles.container}>
//       <Image source={require('../../../assets/Card1.png')} style={styles.Image} />
//     </View>
//   );
// };
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