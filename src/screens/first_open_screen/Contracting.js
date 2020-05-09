import React, { useState, useEffect } from "react";
import { Image } from "react-native-elements";
import { StyleSheet, View } from "react-native";
import { Asset } from 'expo-asset';
import { AppLoading } from 'expo';

const Contracting = ({ navigation }) => {

  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Al_Sharqia_Chamber')
    }, 2000);
  }, []);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={_cacheResourcesAsync}
        onFinish={setIsReady(true)}
        onError={console.warn}
      />
    );
  }

  if (!isReady) {
    return (
      <View style={{ flex: 1 }}>
        <Image
          source={require('../../../assets/Group_1.png')}
          onLoad={_cacheResourcesAsync}
        />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Image style={styles.Image} source={require('../../../assets/Group_1.png')} />
    </View>
  );
}

async function _cacheResourcesAsync() {
  const images = [
    require('../../../assets/Group_1.png'),
    require('../../../assets/Group_349.png'),
    require('../../../assets/Group_3492.png'),
    require('../../../assets/Group_3493.png'),
    require('../../../assets/Group_3494.png'),
    require('../../../assets/Group_3495.png'),
    require('../../../assets/Group_3496.png'),
    require('../../../assets/Group_3497.png'),
    require('../../../assets/Group_3498.png'),
    require('../../../assets/Group_3499.png'),
    require('../../../assets/Group_3500.png'),
    require('../../../assets/Group_3501.png'),
    require('../../../assets/Group_3502.png'),
    require('../../../assets/Group_3503.png'),
    require('../../../assets/Header.png')
  ];

  const cacheImages = images.map(image => {
    return Asset.fromModule(image).downloadAsync();
  });
  return Promise.all(cacheImages);
}
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